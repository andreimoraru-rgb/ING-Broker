import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { articles } from '../src/data/articleMetadata';
import { localizedPath } from '../src/utils/localizedRoutes';
const origin = 'https://www.ingbroker.md';
let checked=0, translated=0;
for (const lang of ['ro','ru','en'] as const) {
 for (const article of articles[lang].filter(a=>a.reviewStatus==='approved')) {
  const path=localizedPath('/news/'+article.slug,lang);
  const html=readFileSync('dist/_editorial/'+(lang==='ro'?'':lang+'/')+article.slug+'.html','utf8');
  const canonical=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/gi)].map(m=>m[1]);
  assert.deepEqual(canonical,[origin+path],path+' exactly one self-canonical');
  assert.equal((html.match(/<h1\b/g)||[]).length,1,path+' one H1');
  assert.ok(html.includes('<html lang="'+lang+'">'),path+' lang');
  assert.ok(!/<meta[^>]*name="robots"[^>]*noindex/i.test(html),path+' indexable');
  const anchors=[...html.matchAll(/<a\b[^>]*data-locale-switch="(ro|ru|en)"[^>]*>/g)].map(m=>({lang:m[1],tag:m[0]}));
  for (const target of ['ro','ru','en'] as const) {
   const available=articles[target].some(a=>a.slug===article.slug);
   const anchor=anchors.find(a=>a.lang===target)?.tag;
   assert.ok(anchor,path+' selector '+target);
   const href=anchor.match(/\bhref="([^"]+)"/)?.[1];
   if (available) assert.equal(href,localizedPath('/news/'+article.slug,target),path+' crawlable '+target);
   else assert.equal(href,undefined,path+' must not link missing translation');
  }
  if (lang!=='ro') {
   assert.ok(new RegExp('<a[^>]*href="/'+lang+'/news"').test(html),path+' catalogue backlink');
   assert.ok(html.includes('"item":"'+origin+'/'+lang+'/"'),path+' localized home breadcrumb');
   translated++;
  }
  checked++;
 }
}
const before=execFileSync('git',['show','HEAD:src/pages/ArticlePage.tsx'],{encoding:'utf8'});
const after=readFileSync('src/pages/ArticlePage.tsx','utf8');
const hero=(source:string)=>source.split('{/* Hero Section */}')[1].split('{/* Content Section */}')[0];
assert.equal(hero(after),hero(before),'Hero source must be byte-for-byte unchanged');
const changes=execFileSync('git',['diff','--name-only'],{encoding:'utf8'}).trim().split(/\r?\n/).filter(Boolean);
assert.ok(changes.every(p=>['src/App.tsx','src/pages/ArticlePage.tsx'].includes(p)),'No text, images, CSS, analytics, sitemap or product data edits');
console.log(JSON.stringify({result:'PASS',articles:checked,localizedArticles:translated,canonical:'preserved self-referencing',languageLinks:'crawlable HTML anchors',hero:'unchanged',changedTrackedFiles:changes}));

