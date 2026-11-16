import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {additionalRoRenderedRoutes,businessRouteAliases,renderedRoutesFor} from '../src/data/staticRoutes';
import {translations} from '../src/translations';
import {businessProductsTranslations} from '../src/translations/businessProducts';
import {onRequest} from '../functions/[[path]]';
const assets={fetch:async(req:Request)=>new Response(new URL(req.url).pathname)};
const get=(path:string)=>onRequest({request:new Request('https://www.ingbroker.md'+path),env:{ASSETS:assets}});
for(const lang of ['ro','ru','en'] as const){
 for(const key of Object.keys(businessProductsTranslations[lang]))assert.deepEqual((translations[lang] as any)[key],(businessProductsTranslations[lang] as any)[key],lang+'/'+key+' connected dictionary');
 for(const [old,target]of Object.entries(businessRouteAliases)){
  const path=(lang==='ro'?'':'/'+lang)+old+'?qa=1',r=await get(path);
  assert.equal(r.status,301,path);assert.equal(r.headers.get('Location'),'https://www.ingbroker.md'+(lang==='ro'?'':'/'+lang)+target+'?qa=1');
 }
 assert.equal((await get((lang==='ro'?'':'/'+lang)+'/business/not-a-product')).status,404);
}
assert.equal(additionalRoRenderedRoutes.length,18);
for(const path of additionalRoRenderedRoutes){
 const html=readFileSync('dist/_pages/ro'+path+'.html','utf8');
 assert.equal((html.match(/<h1\b/g)||[]).length,1,path);
 assert.equal((html.match(/<main\b/g)||[]).length,1,path+' one main landmark');
 assert.equal((html.match(/rel="canonical"/g)||[]).length,1,path);
 assert.ok(html.includes('href="https://www.ingbroker.md'+path+'"'),path);
 assert.ok(html.includes('<html lang="ro">'),path);
 assert.equal(await(await get(path)).text(),'/_pages/ro'+path);
 assert.doesNotMatch(html,/Broker licențiat CNPF|Conformitate legală 100%|Economii medii|Răspuns în 15 minute/);
}
const construction=readFileSync('dist/_pages/ro/construction-shield.html','utf8');
assert.doesNotMatch(construction,/"@type":"FAQPage"/,'Do not publish schema for invisible FAQs');
assert.ok(construction.includes('id="detalii-program"'),'Existing details CTA target');
assert.ok(construction.includes('href="tel:+37379030209"'),'Verified public CEO telephone');
assert.ok(readFileSync('dist/_pages/ro/renewable-energy.html','utf8').includes('href="tel:+37379030209"'),'Call now uses telephone link');
for(const path of ['/business/transport-logistica','/servicii/asigurari-constructii-car-ear','/servicii/asigurari-corporative-moldova']){
 assert.equal((readFileSync('dist/_pages/ro'+path+'.html','utf8').match(/rel="alternate"/g)||[]).length,0,path+' must not assert unreviewed language equivalence');
 assert.ok(!renderedRoutesFor('ru').includes(path));assert.ok(!renderedRoutesFor('en').includes(path));
}
const sitemap=readFileSync('dist/sitemap.xml','utf8');for(const path of Object.keys(businessRouteAliases))assert.ok(!sitemap.includes('https://www.ingbroker.md'+path+'</loc>'));
console.log(JSON.stringify({additionalRomanianSSG:18,connectedProductDictionaries:30,equivalentAliasRedirects:6,unknownBusiness404:3,invisibleFaqSchema:'removed',hardcodedPagesNotMisrepresentedAsTranslated:3,sitemapAliasHygiene:'PASS'}));
