import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {articles} from '../src/data/articles';
import {editorialLogistics20261108} from '../src/data/editorialLogistics20261108';
import {editorialIndustry20261108} from '../src/data/editorialIndustry20261108';
import {editorialLiability20261108} from '../src/data/editorialLiability20261108';
import {editorialProjects20261108} from '../src/data/editorialProjects20261108';
import {withoutDuplicateBodyPhoto} from './article-design-guard';
const countWords=(s:string)=>(s.replace(/<[^>]+>/g,' ').match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu)||[]).length;
const rows=Object.keys({...editorialLogistics20261108,...editorialIndustry20261108,...editorialLiability20261108,...editorialProjects20261108}).map(slug=>{
  const a=articles.ro.find(x=>x.slug===slug)!;assert.ok(a,slug);
  assert.ok(countWords(a.content)>=1500,`${slug}: ${countWords(a.content)}`);
  assert.equal(a.updatedAt,'2026-11-08');assert.equal(a.preserveLegacyLayout,true);
  assert.equal(articles.ro.filter(x=>x.image===a.image).length,1,'Reused main image');
  assert.ok(existsSync('public'+a.image));assert.ok(a.imageAlt && a.imageAlt.length>30);
  assert.doesNotMatch(a.content,/<img\b|[\u2013\u2014]|ghid complet|garantăm|cel mai bun preț|<h1\b|<script\b|javascript:/i);
  assert.ok((a.content.match(/<h2>/g)||[]).length>=10);assert.ok(a.content.includes('Întrebări frecvente'));
  assert.ok(a.content.includes('8 noiembrie 2026'));assert.equal(a.excerpt,a.seo.description);
  assert.ok(a.seo.description.length>=90 && a.seo.description.length<=180);
  for(const m of a.content.matchAll(/href="\/news\/([^"]+)"/g)) assert.ok(articles.ro.some(x=>x.slug===m[1]),m[1]);
  const html=readFileSync(`dist/_editorial/${slug}.html`,'utf8');
  assert.ok(a.heroImage && existsSync('public'+a.heroImage));
  assert.equal((html.match(new RegExp('<img[^>]+src="'+a.heroImage+'"','g'))||[]).length,1,`${slug}: hero repeated`);
  return {id:a.id,slug,words:countWords(a.content),image:a.image,mainPhotoOccurrences:1};
});
for(const file of ['src/pages/ArticlePage.tsx','src/App.tsx','src/index.css']) {
  const old=execFileSync('git',['show',`3399c8b:${file}`],{encoding:'utf8'}).replace(/\r\n/g,'\n');
  assert.equal(readFileSync(file,'utf8').replace(/\r\n/g,'\n'),file.includes('ArticlePage')?withoutDuplicateBodyPhoto(old):old,file);
}
assert.equal(articles.ro.length,107,'Do not silently withdraw or add catalogue entries');
console.log(JSON.stringify({passed:true,rows,heroAndGlobalDesignUnchanged:true,retired:0,catalogue:107},null,2));
