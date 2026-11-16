import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {articles} from '../src/data/articleMetadata';
import {articlePhotoSource} from '../src/data/articlePhotoBranding';
import {localizedPath} from '../src/utils/localizedRoutes';
import {onRequest} from '../functions/[[path]]';
import type {Language} from '../src/translations';

const release=JSON.parse(readFileSync('src/data/translation-release.json','utf8')) as string[];
assert.equal(new Set(release).size,release.length,'Duplicate release keys');
const sitemap=readFileSync('dist/sitemap.xml','utf8');
let approved=0,pending=0;
for(const lang of ['ro','ru','en'] as Language[]) for(const a of articles[lang]){
 const path=localizedPath('/news/'+a.slug,lang),file=`dist/_editorial/${lang==='ro'?'':lang+'/'}${a.slug}.html`;
 let requested='';
 const response=await onRequest({request:new Request('https://www.ingbroker.md'+path),env:{ASSETS:{fetch:async req=>{requested=new URL(req.url).pathname;return new Response('fixture')}}}});
 assert.equal(response.status,200,path);
 if(a.reviewStatus!=='approved'){pending++;assert.ok(!existsSync(file),path+' pending SSG');assert.equal(requested,'/');continue;}
 approved++;
 if(lang!=='ro')assert.ok(release.includes(lang+'/'+a.slug),path+' not released');
 assert.equal(decodeURI(requested),`/_editorial/${lang==='ro'?'':lang+'/'}${a.slug}`);
 const html=readFileSync(file,'utf8');
 for(const pattern of [/<h1\b/g,/<title\b/g,/name="description"/g,/rel="canonical"/g])assert.equal((html.match(pattern)||[]).length,1,path+':'+pattern);
 assert.ok(html.includes(`<html lang="${lang}">`),path);
 assert.equal((html.match(/property="og:locale"/g)||[]).length,1,path+' unique OG locale');
 assert.ok(html.includes(`property="og:locale" content="${lang==='en'?'en_US':lang+'_MD'}"`),path+' OG locale value');
 assert.ok(html.includes('href="https://www.ingbroker.md'+path+'"'),path);
 assert.doesNotMatch(html,/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/);
 assert.ok(html.includes(articlePhotoSource(a.heroImage||a.image)),path+' photo');
 assert.equal((html.match(/data-article-logo=/g)||[]).length,1,path+' corner logo');
 const body=html.match(/class="article-reading[^\"]*"[^>]*>([\s\S]*?)<\/div>/)?.[1]||html.match(/<article[^>]*class="editorial-body"[^>]*>([\s\S]*?)<\/article>/)?.[1];
 assert.ok(body,path+' body');assert.ok(body.replace(/<[^>]*>/g,' ').trim().split(/\s+/).length>=1500,path+' body length');
 assert.doesNotMatch(body,/<h1\b|<img\b|(?:^|\s)##\s/);
 const schemas=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const schema=schemas.find(s=>s['@type']==='Article');assert.equal(schema?.headline,a.title,path);assert.equal(schema?.dateModified,a.updatedAt,path);
 assert.ok(schemas.some(s=>s['@type']==='BreadcrumbList'),path);assert.ok(!schemas.some(s=>s['@type']==='HowTo'),path);
 const triple=['ro','ru','en'].every(l=>articles[l].some(x=>x.slug===a.slug&&x.reviewStatus==='approved'));
 assert.equal((html.match(/rel="alternate"/g)||[]).length,triple?4:0,path+' alternates');
 const entry=[...sitemap.matchAll(/<url>[\s\S]*?<\/url>/g)].find(m=>decodeURI(m[0]).includes('<loc>https://www.ingbroker.md'+path+'</loc>'))?.[0];
 assert.ok(entry,path+' sitemap');assert.ok(entry.includes('<lastmod>'+a.updatedAt+'</lastmod>'),path);
}
assert.equal(approved,107+release.length,'Approved and release counts differ');
console.log(JSON.stringify({approved,pending,releaseKeys:release.length,htmlBodies:'PASS',canonical:'PASS',localizedSchema:'PASS',reciprocalAlternates:'PASS',cornerLogos:'PASS'}));
