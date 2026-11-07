import assert from 'node:assert/strict';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
import { articles } from '../src/data/articles';
import { translations } from '../src/translations';
import { businessProductsTranslations } from '../src/translations/businessProducts';

const baseline = '40fbe5e';
const original = execFileSync('git', ['show', `${baseline}:src/translations.ts`], { encoding: 'utf8' });
const compiled = ts.transpileModule(original, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const moduleExports: any = {};
new Function('exports', 'require', compiled)(moduleExports, (id: string) => {
  assert.equal(id, './translations/businessProducts');
  return { businessProductsTranslations };
});
const badLink = '/news/carte-verde-moldova-2026-pre%C8%9Buri-zone-digital-vs-tip%C4%83rit%C4%83-tot-ce-trebuie-s%C4%83-%C8%99tii';
for (const lang of ['ro', 'ru', 'en'] as const) {
  const expected = structuredClone(moduleExports.translations[lang]);
  expected.insights.articles = expected.insights.articles.filter((item: any) => item.link !== badLink);
  assert.deepEqual(translations[lang], expected, `${lang}: only the known broken article card may change`);
}
const xml = readFileSync('public/sitemap.xml', 'utf8');
const entries = [...xml.matchAll(/<url>[\s\S]*?<\/url>/g)].map(m => m[0]);
const locs = entries.map(entry => decodeURI(entry.match(/<loc>(.*?)<\/loc>/)![1]));
assert.equal(new Set(locs).size, locs.length);
const beforeXml = execFileSync('git', ['show', `${baseline}:public/sitemap.xml`], { encoding: 'utf8' });
const nonArticles = (value: string) => [...value.replace(/\r\n/g, '\n').matchAll(/<url>[\s\S]*?<\/url>/g)].map(m => m[0]).filter(entry => !/<loc>[^<]*\/news\//.test(entry));
assert.deepEqual(nonArticles(xml), nonArticles(beforeXml), 'Non-article sitemap entries unchanged');
assert.equal(locs.filter(loc => loc.includes('/news/')).length, articles.ro.length);
for (const article of articles.ro) {
  assert.ok(locs.includes(`https://www.ingbroker.md/news/${article.slug}`));
  for (const text of [article.title, article.excerpt, article.content, article.seo.title, article.seo.description]) assert.doesNotMatch(text, /ghid complet/i, article.slug);
  assert.doesNotMatch(article.content, /De ce ING Broker este lider în Moldova\?/);
}
const wordCount = (html: string) => (html.replace(/<[^>]+>/g, ' ').replace(/&(?:#[0-9]+|#x[0-9a-f]+|[a-z][a-z0-9]*);/gi, ' ').match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu) || []).length;
const imageUsage = new Map<string, number>();
for (const article of articles.ro) imageUsage.set(article.image, (imageUsage.get(article.image) || 0) + 1);
const rows = articles.ro.map(article => ({
  id: article.id, slug: article.slug, url: `https://www.ingbroker.md/news/${article.slug}`,
  title: article.title, words: wordCount(article.content), image: article.image,
  articlesUsingSameImage: imageUsage.get(article.image),
  inlineImages: (article.content.match(/<img\b/g) || []).length,
  specialistReview: article.reviewStatus || 'pending',
  fullRewriteComplete: false,
  nextAction: article.slug.startsWith('asigurare-viata-') && article.slug !== 'asigurare-viata-moldova'
    ? 'review-consolidation-into-existing-life-page' : 'product-specific-rewrite-and-image-review',
}));
const summary = { passed: true, articles: rows.length, guideLabelsRemaining: 0,
  articlesBelow1500Words: rows.filter(row => row.words < 1500).length,
  articlesSharingMainImage: rows.filter(row => row.articlesUsingSameImage! > 1).length,
  mainImageAssets: imageUsage.size,
  articlesWithInlineImages: rows.filter(row => row.inlineImages > 0).length,
  articleSitemapUrls: articles.ro.length, brokenHighlightRemovedInLanguages: 3,
  allOtherTranslationValuesUnchanged: true, nonArticleSitemapUnchanged: true,
};
if (process.argv[2]) {
  mkdirSync(process.argv[2], { recursive: true });
  writeFileSync(`${process.argv[2]}/article-quality-followup.json`, JSON.stringify({ summary, articles: rows }, null, 2));
}
console.log(JSON.stringify(summary, null, 2));
