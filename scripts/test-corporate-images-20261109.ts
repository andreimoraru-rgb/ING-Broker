import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {articles} from '../src/data/articles';
import {corporateMedia20261109} from '../src/data/corporateMedia20261109';
import {articlePhotoBranding,articlePhotoSource} from '../src/data/articlePhotoBranding';
const baseline='02f54b3817917730ee7d1d88851111ad8b919817',old=JSON.parse(readFileSync('docs/catalog-baseline-corporate-20261109.json','utf8'));
const hash=(v:any)=>createHash('sha256').update(typeof v==='string'?v:JSON.stringify(v)).digest('hex');
for(const file of ['src/pages/ArticlePage.tsx','src/pages/EditorialArticle.tsx','src/pages/NewsInsightsPage.tsx','src/components/ArticlePhotoLogo.tsx','src/App.tsx','src/index.css','src/pages/article-reading.css','src/pages/editorial-article.css','src/data/articles.ts','src/data/recoveredArticles.ts','src/data/editorialTech20261109.ts','src/data/editorialTechDepth20261109.ts','package.json','functions/[[path]].ts','public/sitemap.xml'])assert.equal(readFileSync(file,'utf8').replace(/\r\n/g,'\n'),execFileSync('git',['show',baseline+':'+file],{encoding:'utf8'}).replace(/\r\n/g,'\n'),file+' must remain unchanged');
let checked=0;for(const [lang,list]of Object.entries(articles)){assert.equal(list.length,old.rows[lang].length);for(const a of list){const b=old.rows[lang].find((r:any)=>r.slug===a.slug);assert.ok(b);assert.equal(hash(a.content),b.contentHash,'All article bodies unchanged');if(corporateMedia20261109[a.slug])assert.equal(hash({...a,image:undefined,imageAlt:undefined}),b.withoutMediaHash,'Only media and alt may change');else assert.equal(hash(a),b.fullHash,'All other articles unchanged');checked++;}}
assert.equal(Object.keys(corporateMedia20261109).length,3);assert.equal(articles.ro.filter(a=>a.reviewStatus==='approved').length,50);
for(const slug of Object.keys(corporateMedia20261109)){const a=articles.ro.find(a=>a.slug===slug)!,scene=articlePhotoSource(a.image);assert.ok(articlePhotoBranding[a.image]);assert.equal(articles.ro.filter(a=>articlePhotoSource(a.image)===scene).length,1);for(const p of [scene,a.image,scene.replace('-scene-','-source-').replace('.webp','.png')])assert.ok(existsSync('public'+p));const html=readFileSync('dist/_editorial/'+slug+'.html','utf8');assert.equal((html.match(/data-article-logo="bottom-right"/g)||[]).length,1);assert.equal((html.match(new RegExp('<img[^>]+src="'+scene+'"','g'))||[]).length,1);assert.ok(html.includes(a.imageAlt));assert.doesNotMatch(a.content,/<img\b/);}
console.log(JSON.stringify({passed:true,checked,imagesReplaced:3,newArticleCompletions:0,textsAndDesignUnchanged:true}));
