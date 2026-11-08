import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {articles} from '../src/data/articles';
import {editorialRisks20261108 as revisions} from '../src/data/editorialRisks20261108';
const words=(s:string)=>(s.replace(/<[^>]+>/g,' ').match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu)||[]).length;
const rows=Object.entries(revisions).map(([slug,r])=>{
 const a=articles.ro.find(x=>x.slug===slug)!;assert.ok(a);
 assert.ok(words(r.body)>=1500,`${slug}: substantive body ${words(r.body)}`);
 assert.equal(a.preserveLegacyLayout,true);assert.equal(a.reviewStatus,'approved');
 assert.equal(a.updatedAt,'2026-11-08');assert.ok(a.seo.description.length>=90&&a.seo.description.length<=180);
 assert.equal(articles.ro.filter(x=>x.image===a.image).length,1);
 assert.ok(existsSync('public'+a.image)&&a.heroImage&&existsSync('public'+a.heroImage));
 assert.doesNotMatch(a.content,/<img\b|<h1\b|[\u2013\u2014]|ghid complet|cel mai bun preț|despăgubiri garantate|<script\b/i);
 const html=readFileSync(`dist/_editorial/${slug}.html`,'utf8');assert.ok(html.includes(a.content));
 assert.equal((html.match(new RegExp('<img[^>]+src="'+a.heroImage+'"','g'))||[]).length,1);
 for(const m of a.content.matchAll(/href="\/news\/([^"]+)"/g))assert.ok(articles.ro.some(x=>x.slug===m[1]));
 return{id:a.id,slug,bodyWords:words(r.body),publishedBodyWords:words(a.content),image:a.image,heroImage:a.heroImage};
});
for(const file of ['src/pages/ArticlePage.tsx','src/pages/NewsInsightsPage.tsx','src/App.tsx','src/index.css','src/pages/article-reading.css']){
 const original=execFileSync('git',['show',`547882e:${file}`],{encoding:'utf8'}).replace(/\r\n/g,'\n');
 assert.equal(readFileSync(file,'utf8').replace(/\r\n/g,'\n'),original,`Hero and design unchanged: ${file}`);
}
assert.equal(articles.ro.length,107);assert.equal(rows.length,4);
console.log(JSON.stringify({passed:true,rows,heroAndGlobalDesignUnchanged:true,retired:0},null,2));
