// Build-time HTML for the approved batch only; same React content for all readers.
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { articles } from '../src/data/articles';

const approved = articles.ro.filter(a => a.reviewStatus === 'approved');
const shell = readFileSync('dist/index.html', 'utf8');
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/scripts/editorial-ssr.tsx');
  mkdirSync('dist/_editorial', { recursive: true });
  for (const article of approved) {
    let rendered: string = render(`/news/${article.slug}`);
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
    assert.equal((html.match(/<h1\b/g) || []).length, 1, article.slug);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, article.slug);
    assert.ok(html.includes(article.title) && html.includes(article.image));
    assert.ok(!html.includes('noindex'), article.slug);
    writeFileSync(`dist/_editorial/${article.slug}.html`, html);
  }
  // Update only these articles' truthful lastmod, preserving all other sitemap URLs.
  for (const file of ['sitemap.xml', 'sitemap-ro.xml']) {
    if (!existsSync(`dist/${file}`)) continue;
    let xml = readFileSync(`dist/${file}`, 'utf8');
    for (const article of approved) {
      const loc = `https://www.ingbroker.md/news/${article.slug}`;
      xml = xml.replace(/<url>[\s\S]*?<\/url>/g, entry => entry.includes(`<loc>${loc}</loc>`) ?
        (entry.includes('<lastmod>') ? entry.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${article.updatedAt}</lastmod>`) : entry.replace('</loc>', `</loc><lastmod>${article.updatedAt}</lastmod>`)) : entry);
    }
    writeFileSync(`dist/${file}`, xml);
  }
  console.log(`Prerendered ${approved.length} approved editorial articles with complete HTML and metadata.`);
} finally {
  await server.close();
}
