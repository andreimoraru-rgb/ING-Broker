import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { articles } from '../src/data/articles';
import { onRequest } from '../functions/[[path]]';

const batch = articles.ro.filter(a => a.reviewStatus === 'approved');
assert.equal(batch.length, 10);
const results = [];
for (const a of batch) {
  const html = readFileSync(`dist/_editorial/${a.slug}.html`, 'utf8');
  for (const [pattern, expected] of [[/<h1\b/g,1], [/<title\b/g,1], [/name="description"/g,1], [/rel="canonical"/g,1]] as const) {
    assert.equal((html.match(pattern) || []).length, expected, `${a.slug}: ${pattern}`);
  }
  assert.ok(html.includes(`href="https://www.ingbroker.md/news/${a.slug}"`));
  assert.ok(html.includes(a.image));
  assert.doesNotMatch(html, /noindex|Previzualizare nepublicată/);
  assert.ok(html.includes('Întrebări frecvente'));
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const articleSchema = schemas.find(s => s['@type'] === 'Article');
  assert.equal(articleSchema.headline, a.title);
  assert.equal(articleSchema.dateModified, a.updatedAt);
  assert.ok(schemas.some(s => s['@type'] === 'BreadcrumbList'));
  assert.ok(!schemas.some(s => s['@type'] === 'HowTo'));
  const requested: string[] = [];
  const env = { ASSETS: { fetch: async (req: Request) => { requested.push(new URL(req.url).pathname); return new Response(html); } } };
  const url = `https://www.ingbroker.md/news/${a.slug}`;
  const response = await onRequest({ request: new Request(url), env });
  assert.equal(response.status, 200);
  assert.deepEqual(requested, [`/_editorial/${a.slug}`]);
  const redirect = await onRequest({ request: new Request(url + '/'), env });
  assert.equal(redirect.status, 301);
  assert.equal(redirect.headers.get('location'), url);
  const blocked = await onRequest({ request: new Request(`https://www.ingbroker.md/_editorial/${a.slug}`), env });
  assert.equal(blocked.status, 404);
  const xml = readFileSync('dist/sitemap.xml','utf8');
  const entry = [...xml.matchAll(/<url>[\s\S]*?<\/url>/g)].find(m => m[0].includes(`<loc>${url}</loc>`));
  assert.ok(entry?.[0].includes(`<lastmod>${a.updatedAt}</lastmod>`));
  results.push({ slug: a.slug, fullHtml: true, schemas: schemas.map(s=>s['@type']), canonical: url });
}
console.log(JSON.stringify({ passed: true, count: results.length, results }, null, 2));
