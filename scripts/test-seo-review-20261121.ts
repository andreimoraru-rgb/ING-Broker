import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { articles } from '../src/data/articles';
import { articleRevisions } from '../src/data/recoveredArticles';
import { seoContentReview20261121 } from '../src/data/seoContentReview20261121';
import { articlePhotoBranding } from '../src/data/articlePhotoBranding';
import { onRequest } from '../functions/[[path]]';

const slugs = Object.keys(seoContentReview20261121);
// 22.11.2026: toate cele cinci articole au versiuni P1 V2.0 în fișierele de bază (decizia lui Andrei Moraru).
assert.equal(slugs.length, 0);
for (const restored of ['asigurare-constructii-montaj', 'asigurare-raspundere-profesionala', 'asigurare-flote-auto-corporate-moldova', 'asigurare-raspundere-civila-generala', 'asigurare-pierdere-profit']) assert.ok(!slugs.includes(restored), restored + ' restored to V2.0');
assert.ok(!slugs.includes('asigurari-transport-logistica-cmr-cargo-moldova'), 'Owner retains newer CMR from PR44');
assert.ok(articles.ro.find(a => a.slug === 'asigurari-transport-logistica-cmr-cargo-moldova')!.content.includes('8,33'), 'Newer CMR body preserved');
const catalog = articles.ro;
assert.ok(!/intact/i.test(catalog.find(a => a.slug === 'asigurare-constructii-montaj')!.content), 'CAR V2.0 fără INTACT');
const fakeAssets = { fetch: async (request: Request) => new Response(new URL(request.url).pathname) };
for (const host of ['https://www.ingbroker.md', 'http://ingbroker.md']) {
  for (const suffix of ['', '/']) {
    const response = await onRequest({ request: new Request(`${host}/oferte/pi-insurance-it${suffix}?source=legacy`), env: { ASSETS: fakeAssets } });
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('Location'), 'https://www.ingbroker.md/servicii/asigurare-raspundere-profesionala?source=legacy');
  }
}
const titles = new Set<string>(), descriptions = new Set<string>();
for (const slug of slugs) {
  const matches = catalog.filter(a => a.slug === slug);
  assert.equal(matches.length, 1, slug + ' must keep exactly one existing URL');
  const a = matches[0], revision = articleRevisions[slug];
  assert.equal(a.title, revision.title);
  assert.equal(a.seo.description, revision.seoDescription, slug + ' dedicated SEO description');
  assert.ok(!titles.has(a.seo.title)); titles.add(a.seo.title);
  assert.ok(!descriptions.has(a.seo.description)); descriptions.add(a.seo.description);
  assert.doesNotMatch(a.content, /moldcargo|malpraxis|[\u2013\u2014]/i, slug);
  assert.equal((a.content.match(/<h1\b/g) || []).length, 0, 'H1 belongs to unchanged hero');
  assert.equal((a.content.match(/<img\b/g) || []).length, 0, 'No duplicated hero image in body');
  const faq = a.content.match(/<h2>[^<]*frecvente[^<]*<\/h2>([\s\S]*?)(?=<h2>|$)/i)?.[1] || '';
  assert.ok((faq.match(/<h3>/g) || []).length >= 4, slug + ' visible FAQ');
  for (const match of a.content.matchAll(/href="(\/[^"#?]*)/g)) {
    const link = match[1];
    if (link.startsWith('/news/')) assert.ok(catalog.some(x => `/news/${x.slug}` === link), link);
  }
  const built = `dist/_editorial/${slug}.html`;
  if (existsSync(built)) {
    const html = readFileSync(built, 'utf8');
    assert.equal((html.match(/<h1\b/g) || []).length, 1, slug + ' rendered H1');
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, slug + ' canonical');
    assert.ok(html.includes(`https://www.ingbroker.md/news/${slug}`));
    assert.ok(html.includes('FAQPage'));
    assert.ok(!html.toLowerCase().includes('moldcargo'));
  }
}
const mediaSlugs = ['asigurare-flote-auto-corporate-moldova', 'asigurare-pierdere-profit'];
const scenes = new Set();
for (const slug of mediaSlugs) {
  const image = catalog.find(a => a.slug === slug)!.image;
  const branding = articlePhotoBranding[image];
  assert.ok(branding, slug + ' original corner logo mapping');
  assert.ok(existsSync(`public${image}`));
  assert.ok(existsSync(`public${branding.source}`));
  assert.ok(!scenes.has(branding.source)); scenes.add(branding.source);
}
console.log(JSON.stringify({ redirectVariants: 4, individualArticles: 5, originalCornerLogoScenes: 2, noNewUrls: true, publicRelease: 'NOT PERFORMED', result: 'PASS' }));
