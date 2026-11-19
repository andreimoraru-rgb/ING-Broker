import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { onRequest } from '../functions/[[path]]';
import { renderedRoutesFor } from '../src/data/staticRoutes';
const assets = { fetch: async (request: Request) => new Response(new URL(request.url).pathname) };
const get = (url: string) => onRequest({request: new Request(url), env: {ASSETS: assets}});
for (const url of [
  'https://www.ingbroker.md/business/transport-logistica',
  'https://www.ingbroker.md/business/transport-logistica/',
  'http://ingbroker.md/business/transport-logistica/?utm_source=review',
]) {
  const r = await get(url);
  assert.equal(r.status, 301, url);
  assert.equal(r.headers.get('Location'), 'https://www.ingbroker.md/oferte/flote-auto' + (url.includes('?') ? '?utm_source=review' : ''), url);
}
assert.equal(await (await get('https://www.ingbroker.md/oferte/flote-auto')).text(), '/_pages/ro/oferte/flote-auto');
assert.ok(renderedRoutesFor('ro').includes('/oferte/flote-auto'));
assert.ok(!renderedRoutesFor('ru').includes('/oferte/flote-auto'));
assert.ok(!renderedRoutesFor('en').includes('/oferte/flote-auto'));
// This Romanian consolidation must not change the existing locale routes.
for (const lang of ['ru','en']) {
  const r=await get(`https://www.ingbroker.md/${lang}/business/transport-logistica`);
  assert.equal(r.status,200);
  assert.equal(await r.text(),'/');
}
// No new locale redirect or homepage consolidation for translated articles.
for (const [lang,slug] of [['ru','asigurare-cargo-transport-marfa'],['en','asigurare-stocare-energie']]) {
  const r=await get(`https://www.ingbroker.md/${lang}/news/${slug}`);
  assert.equal(r.status,200);
  assert.equal(await r.text(),`/_editorial/${lang}/${slug}`);
}
assert.equal((await get('https://www.ingbroker.md/news/not-a-real-article')).status,404);
const xml=readFileSync('public/sitemap.xml','utf8');
assert.ok(!xml.includes('<loc>https://www.ingbroker.md/business/transport-logistica</loc>'));
for(const path of ['/oferte/flote-auto','/saloane-auto']) assert.equal(xml.split(`<loc>https://www.ingbroker.md${path}</loc>`).length-1,1,path);
const page=readFileSync('public/saloane-auto.html','utf8');
const publicCopy=page.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'');
for(const claim of ['160.000','160,000','160K','20%','3x','venit pasiv garantat','guaranteed passive','GALLAGHER','RENOMIA','ISO Certified','cel mai bun preț']) assert.ok(!publicCopy.includes(claim),claim);
assert.equal((page.match(/<h1\b/g)||[]).length,1);
assert.equal((page.match(/rel="canonical"/g)||[]).length,1);
assert.ok(page.includes('https://www.ingbroker.md/saloane-auto'));
assert.ok(page.includes('Completarea câmpurilor nu confirmă primirea solicitării.'));
const fleet=readFileSync('dist/_pages/ro/oferte/flote-auto.html','utf8');
assert.equal((fleet.match(/rel="canonical"/g)||[]).length,1);
assert.ok(fleet.includes('href="https://www.ingbroker.md/oferte/flote-auto"'));
assert.ok(!fleet.includes('https://www.ingbroker.md/business/transport-logistica'));
console.log(JSON.stringify({passed:true,permanentRedirectVariants:3,canonicalFleetStaticHtml:true,translatedArticleRoutesPreserved:2,sitemapCanonicalDestinations:2,dealerSingleH1:true}));
