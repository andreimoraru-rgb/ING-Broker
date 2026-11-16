import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { articles } from '../src/data/articleMetadata';
import { onRequest } from '../functions/[[path]]';
import { piContent, piSeo } from '../src/data/piPageContent';
import { cyberContent, cyberSeo } from '../src/data/cyberPageContent';
const allCopy = JSON.stringify([piContent, piSeo, cyberContent, cyberSeo]);
for (const claim of ['CNPF', '340%', '60%', '15 min', '24h', '48h', '133/2011', '3.000 - 15.000', '1.000 - 4.000', 'best offer guaranteed']) assert.ok(!allCopy.includes(claim), claim);
const fakeAssets = { async fetch(request: Request) { return new Response(new URL(request.url).pathname); } };
const get = (path: string) => onRequest({ request: new Request('https://www.ingbroker.md' + path), env: { ASSETS: fakeAssets } });
for (const path of ['/ai-studio', '/admin/ai-tools', '/ru/ai-studio', '/en/admin/ai-tools']) assert.equal((await get(path)).status, 404, path);
assert.equal((await get('/servicii/raspundere-profesionala')).status, 404, 'Unknown /servicii route must not be soft 404');
assert.equal(await (await get('/servicii/asigurare-raspundere-profesionala')).text(), '/_pages/ro/servicii/asigurare-raspundere-profesionala');
assert.equal(await (await get('/en/servicii/asigurare-cyber-moldova')).text(), '/_pages/en/servicii/asigurare-cyber-moldova');
assert.equal(await (await get('/news?page=2')).text(), '/_pages/ro/news/page-2');
assert.equal((await get('/_pages/ro/news')).status, 404);
assert.equal((await get('/news/no-such-article')).status, 404);
assert.equal((await get('/news/asigurare-sanatate-mentala')).status, 410);
const host = await onRequest({ request: new Request('https://ingbroker.md/news?x=1'), env: { ASSETS: fakeAssets } });
assert.equal(host.status, 301); assert.equal(host.headers.get('Location'), 'https://www.ingbroker.md/news?x=1');
const combined = await onRequest({ request: new Request('http://ingbroker.md/o-nas/'), env: { ASSETS: fakeAssets } });
assert.equal(combined.status, 301); assert.equal(combined.headers.get('Location'), 'https://www.ingbroker.md/ru/despre-noi');
const trailingHost = await onRequest({ request: new Request('https://ingbroker.md/servicii/asigurare-cyber-moldova/'), env: { ASSETS: fakeAssets } });
assert.equal(trailingHost.headers.get('Location'), 'https://www.ingbroker.md/servicii/asigurare-cyber-moldova');
const sitemap = readFileSync('public/sitemap.xml', 'utf8');
assert.ok(!sitemap.includes('/o-nas<') && !sitemap.includes('/about-us<'));
assert.ok(sitemap.includes('/business/professional<'));
for (const lang of ['ro', 'ru', 'en']) {
  for (const article of articles[lang].filter(a => a.reviewStatus === 'approved')) {
    const path = `dist/_editorial/${lang === 'ro' ? '' : lang + '/'}${article.slug}.html`;
    assert.ok(existsSync(path), path);
    const html = readFileSync(path, 'utf8');
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, path);
    assert.ok(!html.includes('office@ingbroker.md'));
  }
}
const entry = readFileSync('dist/index.html', 'utf8').match(/<script[^>]*type="module"[^>]*src="([^"]+)"/)?.[1];
assert.ok(entry);
const bundle = readFileSync(`dist${entry}`);
assert.ok(bundle.byteLength < 2_000_000, `Initial bundle too large: ${bundle.byteLength}`);
console.log(JSON.stringify({ edgeRouting: 'PASS', claims: 'PASS', reviewedArticles: Object.values(articles).flat().filter(a => a.reviewStatus === 'approved').length, initialJsBytes: bundle.byteLength }));
