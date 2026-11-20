import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { articles } from '../src/data/articles';
import { editorialSectors20261107 } from '../src/data/editorialSectors20261107';
import { withoutDuplicateBodyPhoto,withoutCornerBranding } from './article-design-guard';
const rows = Object.keys(editorialSectors20261107).map(slug => {
  const a = articles.ro.find(x => x.slug === slug)!;
  assert.ok(a);
  const words = (a.content.replace(/<[^>]+>/g,' ').replace(/&(?:#[0-9]+|[a-z][a-z0-9]*);/gi,' ').match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu) || []).length;
  assert.ok(words>=1500,`${slug}: ${words}`);
  assert.equal(articles.ro.filter(x=>x.image===a.image).length,1,slug);
  assert.ok(existsSync('public'+a.image));
  assert.equal(a.preserveLegacyLayout,true);
  assert.equal(a.updatedAt,slug === 'asigurari-transport-logistica-cmr-cargo-moldova' ? '2026-11-20' : '2026-11-07');
  assert.ok(a.content.includes('Întrebări frecvente'));
  assert.ok(a.content.includes('7 noiembrie 2026'));
  assert.doesNotMatch(a.content,/[\u2013\u2014]|ghid complet|Scenariu real|12 miliarde|8,33|răspuns garantat|autorizat CNPF|<h1\b|<script\b/i);
  assert.equal(a.excerpt,a.seo.description);
  if (slug === 'asigurari-transport-logistica-cmr-cargo-moldova') {
    assert.doesNotMatch(a.content,/25\s*%/);
    assert.match(a.content,/oferta scrisă a asigurătorului/);
  }
  assert.ok(a.seo.description.length<=180);
  for(const m of a.content.matchAll(/href="\/news\/([^"]+)"/g)) assert.ok(articles.ro.some(x=>x.slug===m[1]),m[1]);
  return {id:a.id,slug,words,image:a.image,uniqueImage:true};
});
const file='src/pages/ArticlePage.tsx';
const layoutBaseline=process.argv.find(arg=>arg.startsWith('--layout-baseline='))?.split('=')[1];
if(layoutBaseline) assert.match(layoutBaseline,/^[a-f0-9]{40}$/);
const base=execFileSync('git',['show',`${layoutBaseline || '73cd426'}:${file}`],{encoding:'utf8'}).replace(/\r\n/g,'\n');
if(layoutBaseline) assert.equal(readFileSync(file,'utf8').replace(/\r\n/g,'\n'),base,'Article component must match the selected release exactly');
else assert.equal(withoutCornerBranding(readFileSync(file,'utf8')),withoutDuplicateBodyPhoto(base));
for(const file of ['src/index.css','src/pages/Home.tsx']) if(existsSync(file)) assert.equal(readFileSync(file,'utf8').replace(/\r\n/g,'\n'),execFileSync('git',['show',`${layoutBaseline || '73cd426'}:${file}`],{encoding:'utf8'}).replace(/\r\n/g,'\n'));
console.log(JSON.stringify({passed:true,rows,heroAndStylesUnchanged:true},null,2));
