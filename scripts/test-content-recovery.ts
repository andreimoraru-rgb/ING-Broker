import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { articles } from '../src/data/articles';
import { articleRevisions } from '../src/data/recoveredArticles';
import { topicMedia, alignArticleImages } from '../src/data/topicMedia';

const baselineSource = execFileSync('git', ['show', 'b25ab8f:src/data/articles.ts'], { encoding: 'utf8', maxBuffer: 5_000_000 });
const js = ts.transpileModule(baselineSource, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { articles: baseline } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
// Owner requested internal contact links instead of external Maps destinations.
for (const lang of ['ro', 'ru', 'en']) {
  baseline[lang] = baseline[lang].map((article: {content:string;slug:string}) => ({...article,
    ...topicMedia(article.slug, lang as 'ro' | 'ru' | 'en'),
    content: alignArticleImages(article.content.replace(/href="https:\/\/maps\.google\.com\/\?q=Insurance\+ING\+Broker\+SRL\+Chisinau" target="_blank" rel="noopener noreferrer"/g,
      `href="https://www.ingbroker.md${lang === 'ro' ? '' : '/' + lang}/contact"`), article.slug, lang as 'ro' | 'ru' | 'en')
  }));
}
assert.deepEqual(articles.ru, baseline.ru, 'Russian content unchanged except approved contact destination');
assert.deepEqual(articles.en, baseline.en, 'English content unchanged except approved contact destination');
assert.equal(articles.ro.length, baseline.ro.length);
assert.equal(Object.keys(articleRevisions).length, 10);
assert.deepEqual(Object.keys(articleRevisions).filter(s => s.startsWith('asigurare-viata-')), ['asigurare-viata-moldova']);
assert.equal(Object.hasOwn(articleRevisions, 'asigurare-stomatologica-corporate'), false);
assert.match(articleRevisions['asigurare-viata-moldova'].body, /categorie distinctă de asigurarea de accidente/);
assert.ok(articleRevisions['asigurare-viata-moldova'].sources.every(([, url]) => new URL(url).hostname.endsWith('.md')));
assert.equal(Object.hasOwn(articleRevisions, 'asigurare-saloane-infrumusetare'), false, 'Owner excluded salon article on 2026-10-16');
const sitemap = readFileSync('public/sitemap.xml', 'utf8');
let changed = 0;
const checks = [];
for (const article of articles.ro) {
  const before = baseline.ro.find((a: { slug: string }) => a.slug === article.slug);
  if (!articleRevisions[article.slug]) {
    assert.deepEqual(article, before, `Unrelated article changed: ${article.slug}`);
    continue;
  }
  changed++;
  for (const field of ['id', 'slug', 'date'] as const) assert.deepEqual(article[field], before[field]);
  assert.match(article.image, /^\/images\/articles\/moldova\/[a-z0-9-]+\.webp$/);
  assert.match(article.imageAlt || '', /generată cu AI/);
  assert.equal(article.reviewStatus, 'approved');
  assert.ok(article.tags.includes('Moldova'));
  assert.equal(article.updatedAt, '2026-10-25');
  assert.ok(Number.isFinite(new Date(article.date).getTime()));
  assert.ok(sitemap.includes(`/news/${article.slug}</loc>`), `Missing sitemap entry: ${article.slug}`);
  assert.doesNotMatch(article.content, /<h1\b|<h4\b|<script\b|onerror=|javascript:/i);
  assert.doesNotMatch(article.content, /pilon fundamental|consult(anță|anta) de elită|95%|cel mai bun preț|garantând continuitatea/i);
  assert.ok((article.content.match(/<h2>/g) || []).length >= 4);
  assert.ok((article.content.match(/<h3>/g) || []).length >= 3);
  assert.equal(article.excerpt, article.seo.description);
  assert.ok(article.seo.description.length >= 90 && article.seo.description.length <= 180);
  const related = articleRevisions[article.slug].related[0];
  assert.ok(articles.ro.some(a => a.slug === related));
  assert.match(article.content, /href="\/contact"/);
  for (const [, url] of articleRevisions[article.slug].sources) assert.ok(url.startsWith('https://'));
  checks.push({ slug: article.slug, words: article.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length, sourceCount: articleRevisions[article.slug].sources.length });
}
assert.equal(changed, 10);
assert.equal(new Set(Object.values(articleRevisions).map(a => a.title)).size, 10);
assert.equal(new Set(Object.values(articleRevisions).map(a => a.description)).size, 10);
console.log(JSON.stringify({ passed: true, revised: changed, unchangedRo: articles.ro.length - changed, unchangedRu: articles.ru.length, unchangedEn: articles.en.length, checks }, null, 2));
