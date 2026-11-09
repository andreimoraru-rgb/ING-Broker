import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {articles} from '../src/data/articles';
import {editorialSearch20261109 as revisions} from '../src/data/editorialSearch20261109';
import {articlePhotoBranding,articlePhotoSource} from '../src/data/articlePhotoBranding';
const baseline='9b01549d78fd80f5b7ea7c46a6ea172c6f0c98eb';
for(const file of ['src/pages/ArticlePage.tsx','src/pages/EditorialArticle.tsx','src/pages/NewsInsightsPage.tsx','src/components/ArticlePhotoLogo.tsx','src/App.tsx','src/index.css','src/pages/article-reading.css','src/pages/editorial-article.css','package.json','functions/[[path]].ts']){
 assert.equal(readFileSync(file,'utf8').replace(/\r\n/g,'\n'),execFileSync('git',['show',`${baseline}:${file}`],{encoding:'utf8'}).replace(/\r\n/g,'\n'),`${file}: protected layout, routing and dependencies unchanged`);
}
assert.equal(articles.ro.length,107);assert.equal(Object.keys(revisions).length,8);
const results=[];
for(const [slug,r] of Object.entries(revisions)){
 const a=articles.ro.find(a=>a.slug===slug)!;assert.ok(a);assert.ok(articles.ro.some(a=>a.slug===r.related[0]),slug+' internal link');
 const words=r.body.replace(/<[^>]*>/g,' ').trim().split(/\s+/u).length;
 assert.ok(words>=1500,`${slug}: ${words} words`);assert.equal(r.preserveLegacyLayout,true);assert.equal(a.reviewStatus,'approved');assert.equal(a.updatedAt,'2026-11-09');
 assert.ok(r.description.length>=110&&r.description.length<=165);assert.doesNotMatch(r.body,/[\u2013\u2014]|<img\b|<h1\b|Ghid complet|cel mai bun preț|100%/iu);
 assert.ok(r.sources.some(([,url])=>['bnm.md','rca.bnm.md'].includes(new URL(url).hostname)));
 for(const [,url]of r.sources)assert.ok(['bnm.md','rca.bnm.md','moldasig.md','grawe.md','caa.md','customs.gov.md'].includes(new URL(url).hostname.replace(/^www\./,'')));
 const scene=articlePhotoSource(a.image);assert.ok(articlePhotoBranding[a.image]);assert.notEqual(scene,a.image);
 assert.equal(articles.ro.filter(x=>articlePhotoSource(x.image)===scene).length,1,slug+' unique scene');
 for(const file of [scene,a.image,scene.replace('-scene-','-source-').replace('.webp','.png')])assert.ok(existsSync('public'+file),file);
 const html=readFileSync(`dist/_editorial/${slug}.html`,'utf8');assert.equal((html.match(/<h1\b/g)||[]).length,1);
 assert.equal((html.match(/data-article-logo="bottom-right"/g)||[]).length,1);assert.equal((html.match(new RegExp('<img[^>]+src="'+scene+'"','g'))||[]).length,1);
 assert.ok(html.includes(`https://www.ingbroker.md/news/${slug}`));assert.doesNotMatch(html,/name="robots" content="noindex/);
 assert.ok(html.includes('application/ld+json'));assert.ok(html.includes(r.description));
 results.push({slug,words,descriptionLength:r.description.length,uniqueImage:scene,layoutPreserved:true});
}
console.log(JSON.stringify({passed:true,individualDrafts:results.length,publicationNotClaimed:true,results},null,2));
