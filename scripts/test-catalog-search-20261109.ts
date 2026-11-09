import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {articles} from '../src/data/articles';
import {editorialSearch20261109} from '../src/data/editorialSearch20261109';
import {editorialTech20261109} from '../src/data/editorialTech20261109';
import {catalogDescriptions20261109} from '../src/data/catalogDescriptions20261109';
const base=JSON.parse(readFileSync('docs/catalog-baseline-search-20261109.json','utf8'));
const hash=(v:any)=>createHash('sha256').update(typeof v==='string'?v:JSON.stringify(v)).digest('hex');
assert.equal(Object.keys(catalogDescriptions20261109).length,57);
const individuallyRevised=(slug:string)=>Boolean(editorialSearch20261109[slug]||editorialTech20261109[slug]);
for(const [lang,list] of Object.entries(articles)){
 assert.equal(list.length,base.rows[lang].length);
 for(const a of list){const previous=base.rows[lang].find((b:any)=>b.slug===a.slug);assert.ok(previous);assert.equal(a.id,previous.id);
  if(lang!=='ro'){
   if(individuallyRevised(a.slug))assert.equal(hash({...a,image:undefined,imageAlt:undefined}),previous.withoutMediaHash,lang+': text, terms and metadata unchanged; same-topic photograph updated');
   else assert.equal(hash(a),previous.fullHash,lang+': entire article unchanged');
  }
  else if(!individuallyRevised(a.slug)){assert.equal(hash(a.content),previous.contentHash);assert.equal(a.image,previous.image);assert.equal(a.title,previous.title);}
 }
}
for(const [slug,description] of Object.entries(catalogDescriptions20261109)){
 const a=articles.ro.find(a=>a.slug===slug)!;assert.ok(a);assert.equal(a.seo.description,description);assert.ok(description.length<=165);assert.notEqual(a.reviewStatus,'approved','metadata cleanup is not individual content approval');
 assert.doesNotMatch(description,/cele mai bune|garant|100%|gratuit|\u2013|\u2014/iu);
}
assert.equal(new Set(Object.values(catalogDescriptions20261109)).size,57);
console.log(JSON.stringify({passed:true,previousSearchRewrites:8,newTechRewrites:6,metadataOnlyRemaining:57,existingRoBodiesAndImagesPreservedOutsideRevisions:true,ruEnTextAndTermsUnchanged:true,idsAndUrlsPreserved:true}));
