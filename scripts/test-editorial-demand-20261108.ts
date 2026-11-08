import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {articles} from '../src/data/articles';
import {editorialDemand20261108 as revisions} from '../src/data/editorialDemand20261108';
const expected=['asigurare-viata-moldova','asigurare-cladiri-birouri','asigurare-centre-comerciale','asigurare-hoteluri-pensiuni','asigurare-restaurante-cafenele','asigurare-clinici-private'];
assert.deepEqual(Object.keys(revisions),expected);assert.equal(articles.ro.length,107);
const baseline='fc5edc6e8776c5e85b3a15dfb4788fb2b42e4c94';
for(const file of ['src/pages/ArticlePage.tsx','src/pages/EditorialArticle.tsx','src/pages/NewsInsightsPage.tsx','src/App.tsx','src/index.css','src/pages/article-reading.css','src/pages/editorial-article.css']){
 const old=execFileSync('git',['show',`${baseline}:${file}`],{encoding:'utf8'});
 assert.equal(readFileSync(file,'utf8').replace(/\r\n/g,'\n'),old.replace(/\r\n/g,'\n'),`${file}: protected design changed`);
}
const rows=[];
for(const slug of expected){const rev=revisions[slug],a=articles.ro.find(a=>a.slug===slug)!;
 const words=rev.body.replace(/<[^>]*>/g,' ').split(/\s+/).filter(Boolean).length;
 assert.ok(words>=1500,`${slug}: ${words}`);assert.equal(a.title,rev.title);assert.equal(a.updatedAt,'2026-11-09');
 assert.equal(a.preserveLegacyLayout,slug==='asigurare-viata-moldova'?undefined:true,`${slug}: renderer switched`);
 assert.equal(a.reviewStatus,'approved');assert.equal(articles.ro.filter(x=>x.image===a.image).length,1);
 assert.ok(existsSync('public'+a.image));if(a.heroImage)assert.ok(existsSync('public'+a.heroImage));
 assert.doesNotMatch(rev.body,/<img|<h1|Ghid complet|ghid complet|[\u2013\u2014]/);
 assert.ok(rev.body.includes('Întrebări frecvente'));assert.ok(articles.ro.some(x=>x.slug===rev.related[0]));
 assert.ok(rev.description.length>=110&&rev.description.length<=165);
 for(const [,url]of rev.sources)assert.ok(['bnm.md','www.grawe.md','moldasig.md'].includes(new URL(url).hostname));
 rows.push({id:a.id,slug,words,title:a.title,uniqueMainPhoto:true,renderer:slug==='asigurare-viata-moldova'?'existing split editorial':'existing legacy hero'});
}
console.log(JSON.stringify({passed:true,individualRevisions:rows.length,protectedDesignFilesUnchanged:7,rows},null,2));
