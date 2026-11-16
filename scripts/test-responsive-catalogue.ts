import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { articles } from '../src/data/articleMetadata';
import { articlePhotoSource } from '../src/data/articlePhotoBranding';
import { articleResponsiveImages } from '../src/data/articleResponsiveImages';
let variants = 0;
for (const [source, image] of Object.entries(articleResponsiveImages)) {
  assert.ok(existsSync(`public${source}`), source);
  assert.ok(image.width > 0 && image.height > 0);
  for (const candidate of image.srcSet.split(', ')) {
    const [url, width] = candidate.split(' ');
    assert.ok(existsSync(`public${url}`), url);
    assert.match(width, /^\d+w$/);
    if (url !== source) variants++;
  }
}
for (const article of articles.ro) {
  assert.ok(articleResponsiveImages[articlePhotoSource(article.image)], article.slug);
  assert.ok(articleResponsiveImages[articlePhotoSource(article.heroImage || article.image)], article.slug);
}
for (const file of ['EditorialArticle.tsx', 'ArticlePage.tsx', 'NewsInsightsPage.tsx']) assert.ok(readFileSync(`src/pages/${file}`, 'utf8').includes('srcSet='), file);
console.log(JSON.stringify({ scenes: Object.keys(articleResponsiveImages).length, responsiveExports: variants, articles: articles.ro.length, status: 'PASS' }));
