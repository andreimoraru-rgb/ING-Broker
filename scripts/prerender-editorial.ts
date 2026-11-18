// Build-time HTML for reviewed articles and explicitly selected public routes.
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import assert from 'node:assert/strict';
import { articles } from '../src/data/articleMetadata';
import { renderedRoutesFor } from '../src/data/staticRoutes';
import { localizedPath } from '../src/utils/localizedRoutes';
import type { Language } from '../src/translations';

const shell = readFileSync('dist/index.html', 'utf8');
const pages: { path: string; output: string; image?: string }[] = [];
for (const lang of ['ro', 'ru', 'en'] as Language[]) {
  for (const article of articles[lang].filter(a => a.reviewStatus === 'approved')) {
    pages.push({ path: localizedPath(`/news/${article.slug}`, lang), output: `dist/_editorial/${lang === 'ro' ? '' : lang + '/'}${article.slug}.html`, image: article.heroImage || article.image });
  }
  // Pagina principală, în limba fiecărei adrese (/, /ru/, /en/), fără a schimba adresele.
  pages.push({ path: localizedPath('/', lang), output: `dist/_pages/${lang}/home.html` });
  for (const path of renderedRoutesFor(lang)) {
    pages.push({ path: localizedPath(path, lang), output: `dist/_pages/${lang}${path}.html` });
    if (path === '/news') for (let page = 2; page <= Math.ceil(articles[lang].length / 9); page++) {
      pages.push({ path: localizedPath(path, lang) + `?page=${page}`, output: `dist/_pages/${lang}/news/page-${page}.html` });
    }
  }
}
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/scripts/editorial-ssr.tsx');
  for (const page of pages) {
    let rendered: string = await render(page.path);
    const metadata: string[] = [];
    rendered = rendered.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, tag => {
      metadata.push(tag.replace(/^<(\w+)/, '<$1 data-editorial-ssg="true"'));
      return '';
    });
    let html = shell.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
      .replace(/<meta\b[^>]*data-rh="true"[^>]*\/?>/gi, '')
      .replace(/<meta\b[^>]*name="twitter:url"[^>]*\/?>/gi, '')
      .replace('</head>', `${metadata.join('\n')}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, page.path);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, page.path);
    assert.ok(!html.includes('noindex'), page.path);
    if (page.image) assert.ok(html.includes(page.image.replace(/&/g, '&amp;')) || html.includes(page.image), page.path + ': missing image');
    if (page.path.includes('/news/')) assert.ok((rendered.match(/<p\b/g) || []).length > 15, page.path + ': missing article body');
    html = html.replace(/<html\b[^>]*>/, `<html lang="${page.path.startsWith('/ru/') ? 'ru' : page.path.startsWith('/en/') ? 'en' : 'ro'}">`);
    mkdirSync(dirname(page.output), { recursive: true });
    writeFileSync(page.output, html);
  }
  console.log(`Prerendered ${pages.length} verified catalogue/route documents.`);
} finally { await server.close(); }

