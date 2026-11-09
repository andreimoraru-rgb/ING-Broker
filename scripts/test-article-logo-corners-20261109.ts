import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {articles} from '../src/data/articles';
import {articlePhotoBranding,articlePhotoSource} from '../src/data/articlePhotoBranding';
import {withoutCornerBranding} from './article-design-guard';
const baseline='f0fa2818475205dc9616969f15d2d8fc1af530ce';
for(const file of ['src/pages/ArticlePage.tsx','src/pages/EditorialArticle.tsx','src/pages/NewsInsightsPage.tsx','src/App.tsx','src/index.css','src/pages/article-reading.css','src/pages/editorial-article.css']){
 const original=execFileSync('git',['show',`${baseline}:${file}`],{encoding:'utf8'}).replace(/\r\n/g,'\n');
 assert.equal(withoutCornerBranding(readFileSync(file,'utf8')),original,`${file}: only requested logo source/layer may change, never layout classes`);
}
for(const file of ['src/data/articles.ts','src/data/recoveredArticles.ts','src/data/editorialDemand20261108.ts']){
 const current=readFileSync(file,'utf8').replace(/\r\n/g,'\n').replace(/^import \{ editorialRemaining20261109 \} from '\.\/editorialRemaining20261109';\n/m,'').replace(/^Object\.assign\(articleRevisions, editorialRemaining20261109\);\n/m,'');
 assert.equal(current,execFileSync('git',['show',`${baseline}:${file}`],{encoding:'utf8'}).replace(/\r\n/g,'\n'),`${file}: existing article text unchanged apart from isolated new revision module`);
}
assert.equal(articles.ro.length,107);assert.ok(Object.keys(articlePhotoBranding).length>=6);
const originalSix=new Set(['asigurare-viata-moldova','asigurare-cladiri-birouri','asigurare-centre-comerciale','asigurare-hoteluri-pensiuni','asigurare-restaurante-cafenele','asigurare-clinici-private']);
const rows=articles.ro.filter(a=>originalSix.has(a.slug));assert.equal(rows.length,6);
for(const a of rows){
 const html=readFileSync(`dist/_editorial/${a.slug}.html`,'utf8'),scene=articlePhotoSource(a.image);
 assert.equal((html.match(/data-article-logo="bottom-right"/g)||[]).length,1);
 assert.equal((html.match(new RegExp('<img[^>]+src="'+scene+'"','g'))||[]).length,1);
 assert.ok(html.includes(a.image));assert.ok(existsSync('public'+scene)&&existsSync('public'+a.image));
 assert.doesNotMatch(a.content,/<img\b/);assert.equal(a.updatedAt,'2026-11-09');
 assert.equal(articles.ro.filter(x=>x.image===a.image).length,1);
}
console.log(JSON.stringify({passed:true,articlePhotoCorners:6,articleTextsUnchanged:true,globalLayoutUnchanged:true,logoOnlyExceptionVerified:true}));
