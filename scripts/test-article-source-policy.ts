import assert from 'node:assert/strict';
import { articles } from '../src/data/articles';

// Editorial destination links only. Image delivery/CDNs are not citations.
const allowed = new Set(['ingbroker.md', 'easigurari.com', 'bnm.md', 'cnpf.md', 'legis.md', 'moldasig.md', 'grawe.md']);
const links: {lang:string;slug:string;url:string;host:string}[] = [];
const violations: typeof links = [];
let count = 0;
for (const [lang, list] of Object.entries(articles)) for (const article of list) {
  count++;
  const matches = [...article.content.matchAll(/href\s*=\s*["']([^"']+)["']/gi)];
  for (const match of matches) {
    if (/^(mailto:|tel:|#)/i.test(match[1])) continue;
    const url = new URL(match[1], 'https://www.ingbroker.md');
    const host = url.hostname.replace(/^www\./, '');
    const row = {lang,slug:article.slug,url:url.href,host};
    links.push(row);
    if(!allowed.has(host)) violations.push(row);
  }
}
console.log(JSON.stringify({articles:count,byLanguage:Object.fromEntries(Object.entries(articles).map(([k,v])=>[k,v.length])),linkCount:links.length,domains:[...new Set(links.map(x=>x.host))],violations},null,2));
assert.equal(violations.length,0,'Articles must not link to foreign-market or competitor pages');
for(const article of articles.ro.filter(a=>a.reviewStatus==='approved')) assert.doesNotMatch(article.content,/marsh|allianztiriac|Allianz-Țiriac|Documentul românesc|Marsh România/i,article.slug);
