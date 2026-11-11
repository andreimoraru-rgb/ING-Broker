// Isolated execution: no browser, vendor requests, messages, or analytics hits.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const cp = require('node:child_process');
const ts = require('typescript');
const { isMeasurementRequest } = require('./qa-measurement-guard.cjs');
const html = fs.readFileSync('index.html', 'utf8');
const bootstrap = html.match(/<script id="ing-analytics-bootstrap">([\s\S]*?)<\/script>/)[1];
const source = fs.readFileSync('src/utils/analytics.ts', 'utf8');
const code = ts.transpileModule(source.replace(/import\.meta\.env\.VITE_POSTHOG_KEY/g, "'phc_unit_test_only'").replace(/import\.meta\.env\.VITE_POSTHOG_HOST/g, "'https://eu.i.posthog.com'"), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
function context(url, qa = false) {
  const scripts = [], events = [], listeners = new Map();
  const window = {__ING_ANALYTICS_QA__:qa, location:new URL(url)};
  const sandbox = {window, location:new URL(url), URLSearchParams, Date, exports:{}, document:{head:{appendChild:s=>scripts.push(s.src)},createElement:()=>({}),addEventListener:(name,fn)=>listeners.set(name,fn),removeEventListener:(name,fn)=>{assert.equal(listeners.get(name),fn);listeners.delete(name);}}};
  vm.runInNewContext(bootstrap, sandbox);
  vm.runInNewContext(code, sandbox);
  const allowed = window.__ING_ANALYTICS_ENABLED__;
  // Replace vendors with spies; production calls must remain intact.
  window.gtag = (...args)=>events.push(['ga4',...args]);
  sandbox.exports.installPostHog();
  if (window.posthog) window.posthog.capture = (...args)=>events.push(['posthog',...args]);
  sandbox.exports.trackEvent('audit_submit',{page_path:'/business'});
  const dispose = sandbox.exports.installContactTracking();
  for(const href of ['tel:+37369526003','mailto:office@ingbroker.md','https://wa.me/37369526003']) listeners.get('click')({target:{closest:()=>({getAttribute:()=>href})}});
  dispose(); assert.equal(listeners.size,0);
  return {allowed,scripts,events,sandbox};
}
let cases = 0;
for(const url of ['http://localhost:3000','http://127.0.0.1:4181','https://preview.ing-broker.pages.dev','https://www.ingbroker.md.evil.example','https://ingbroker.md.evil.example','http://www.ingbroker.md','https://www.ingbroker.md:444','https://www.ingbroker.md/news/test?ing_qa=1']) {
  const r=context(url);assert.equal(r.allowed,false,url);assert.equal(r.scripts.length,0,url);assert.equal(r.events.length,0,url);cases++;
}
for(const host of ['ingbroker.md','www.ingbroker.md']) {
  const r=context('https://'+host+'/news/test');assert.equal(r.allowed,true);assert.equal(r.scripts.length,3); // GTM, Google tag, PostHog
  for(const event of ['audit_submit','phone_click','email_click','whatsapp_click']) for(const vendor of ['ga4','posthog']) assert.equal(r.events.filter(x=>x[0]===vendor&&x[1]===(vendor==='ga4'?'event':event)&&(vendor==='ga4'?x[2]===event:true)).length,1,event+' '+vendor);
  const data=r.sandbox.window.dataLayer;assert.equal(data.filter(x=>x[0]==='js').length,1);assert.equal(data.filter(x=>x[0]==='config').length,1);
  cases++;
}
const qa=context('https://www.ingbroker.md/news/test',true);assert.equal(qa.allowed,false);assert.equal(qa.scripts.length,0);assert.equal(qa.events.length,0);cases++;
// A subsequent normal navigation is unaffected; no persistent opt-out or data mutation.
assert.equal(context('https://www.ingbroker.md/').allowed,true);cases++;
assert.doesNotMatch(source,/localStorage|sessionStorage|document\.cookie|fetch\(|XMLHttpRequest/);
// The original measurement-only patch keeps its strict five-file boundary.
// A content release can instead prove that both measurement files are byte-for-byte unchanged.
const unchangedBaseline=process.argv.find(arg=>arg.startsWith('--unchanged-baseline='))?.split('=')[1];
if(unchangedBaseline){
  assert.match(unchangedBaseline,/^[0-9a-f]{40}$/);
  const normalize=s=>s.replace(/\r\n/g,'\n');
  for(const [file,current] of [['index.html',html],['src/utils/analytics.ts',source]]){
    const original=cp.execFileSync('git',['show',unchangedBaseline+':'+file],{encoding:'utf8'});
    assert.equal(normalize(current),normalize(original),'Measurement unchanged: '+file);
  }
}else{
  const changed=cp.execFileSync('git',['diff','--name-only','origin/main'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
  const allowedPaths=['index.html','src/utils/analytics.ts','docs/analytics-production-20261110.md','scripts/test-analytics-production.cjs','scripts/qa-measurement-guard.cjs'];
  assert.ok(changed.every(p=>allowedPaths.includes(p)), 'No unrelated changes');
}
for(const url of ['https://region1.google-analytics.com/g/collect','https://eu.i.posthog.com/e/','https://www.googletagmanager.com/gtm.js','https://www.ingbroker.md/cdn-cgi/rum','https://static.cloudflareinsights.com/beacon.min.js']) assert.equal(isMeasurementRequest(url),true,url);
for(const url of ['https://www.ingbroker.md/news/article','https://www.ingbroker.md/images/test.webp','https://fonts.googleapis.com/css2','https://notposthog.com/']) assert.equal(isMeasurementRequest(url),false,url);
const oldHtml=cp.execFileSync('git',['show',(unchangedBaseline||'origin/main')+':index.html'],{encoding:'utf8'});
const stripAnalytics=s=>s.replace(/<!-- Google Tag Manager -->[\s\S]*?<\/script>\s*<script>[\s\S]*?<\/script>/,'').replace(/<!-- Google tag \(gtag\.js\) -->[\s\S]*?<\/script>\s*<script>[\s\S]*?<\/script>/,'').replace(/<!-- Production measurement only[\s\S]*?<\/script>/,'').replace(/\s/g,'');
assert.equal(stripAnalytics(html),stripAnalytics(oldHtml),'Only analytics bootstrap may change in HTML');
console.log(JSON.stringify({passed:true,cases,productionVendorsRetained:true,nonProductionRequests:0,qaRequests:0,contactEventsUnchanged:true,historyDeleted:false,scope:unchangedBaseline?'measurement-files-unchanged-in-content-release':'measurement-only-patch',visualAndEditorialFilesUnchanged:unchangedBaseline?null:true},null,2));
