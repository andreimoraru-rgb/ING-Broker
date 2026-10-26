import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { articles } from '../src/data/articles';
import { articleMedia } from '../src/data/articleMedia';
import { onRequest } from '../functions/[[path]]';
import { localizedPath } from '../src/utils/localizedRoutes';
import type { Language } from '../src/translations';

let checked = 0;
const images = new Set<string>();
for (const [language, list] of Object.entries(articles)) {
  const lang = language as Language;
  for (const article of list) {
    const path = localizedPath(`/news/${article.slug}`, lang);
    const html = readFileSync(`dist/_editorial/${lang === 'ro' ? '' : lang + '/'}${article.slug}.html`, 'utf8');
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, path);
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    assert.equal(decodeURI(canonical || ''), `https://www.ingbroker.md${path}`, path);
    assert.ok(html.includes(`<html lang="${lang}">`));
    assert.ok(article.imageAlt, path);
    assert.doesNotMatch(html, /noindex/);
    if (article.image.startsWith('/')) assert.ok(existsSync(`public${article.image}`), article.image);
    const json = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    const schema = json.find(s => s['@type'] === 'Article');
    assert.equal(decodeURI(schema.url), `https://www.ingbroker.md${path}`);
    const schemaImage = typeof schema.image === 'string' ? schema.image : schema.image.url;
    assert.ok(schemaImage.startsWith('https://'));
    assert.ok(!schema.datePublished || /^\d{4}-\d{2}-\d{2}$/.test(schema.datePublished));
    let requested = '';
    const response = await onRequest({ request: new Request(`https://www.ingbroker.md${path}`), env: { ASSETS: { fetch: async req => {requested = decodeURI(new URL(req.url).pathname); return new Response(html);} } } });
    assert.equal(response.status, 200);
    assert.equal(requested, `/_editorial/${lang === 'ro' ? '' : lang + '/'}${article.slug}`);
    images.add(article.image);
    checked++;
  }
}
for (const [slug, media] of Object.entries(articleMedia)) assert.equal(articles.ro.find(a => a.slug === slug)?.image, media.image);
for (const lang of ['ro','ru','en'] as const) {
  const response = await onRequest({request:new Request(`https://www.ingbroker.md${localizedPath('/news/not-a-real-article',lang)}`),env:{ASSETS:{fetch:async()=>new Response('homepage')}}});
  assert.equal(response.status,404);
  assert.equal(response.headers.get('X-Robots-Tag'),'noindex');
  const credit = articles[lang].find(a=>a.slug==='asigurare-credit-comercial')!;
  assert.doesNotMatch(credit.image,/1450778869180/);
  const house = articles[lang].find(a=>a.slug==='asigurare-locuinta-moldova')!;
  assert.match(house.image,/commercial-property/);
}
const changed = execFileSync('git',['diff','--name-only','origin/main'],{encoding:'utf8'}).trim().split('\n');
assert.ok(changed.every(path => !/Home|Hero|Header|Navbar|index\.css|translations|analytics/.test(path)), 'Homepage/design/analytics protected');
console.log(JSON.stringify({passed:true,existingArticleVersions:checked,selectedImages:images.size,approvedPhotosUnchanged:10,unknownArticle404Controls:3,homepageSourceUnchanged:true},null,2));
