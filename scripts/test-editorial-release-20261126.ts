// Regression tests for the exact approved 26 November cohort.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {loadEditorialRelease,isExactApprovedPayload} from './editorial-release-gate';
import {prepareArticleData} from './prepare-article-data';
const entries=loadEditorialRelease(process.cwd());
assert.equal(entries.length,51);
const resolved=prepareArticleData({log:()=>{}});
for(const entry of entries){
 const [lang,slug]=entry.key.split('/');
 const payload=JSON.parse(readFileSync(`src/data/article-content/${entry.key}.json`,'utf8'));
 assert.ok(isExactApprovedPayload(entries,entry.key,entry.id,payload),entry.key);
 assert.ok(!isExactApprovedPayload(entries,entry.key,entry.id,{...payload,content:payload.content+' changed'}));
 assert.ok(!isExactApprovedPayload(entries,entry.key,entry.id,{...payload,reviewStatus:'pending'}));
 assert.ok(!isExactApprovedPayload(entries,entry.key,entry.id,{...payload,content:payload.content+'\u2014'}));
 assert.ok(!isExactApprovedPayload(entries,'en/unknown',entry.id,payload));
 assert.ok(!isExactApprovedPayload(entries,entry.key,'unknown',payload));
 assert.ok(resolved[lang].some(a=>a.slug===slug));
 const result=JSON.parse(readFileSync(`src/data/article-content-published/${entry.key}.json`,'utf8'));
 assert.equal(result.content,payload.content,entry.key+' generated body');
 assert.equal(result.contentUpdatedAt,'2026-11-26');
 assert.equal(result.updatedAt,payload.updatedAt);
 assert.equal((payload.content.match(/<h3\b/g)||[]).length,5,entry.key+' practical FAQ');
}
assert.ok(!isExactApprovedPayload([],entries[0].key,entries[0].id,{}));
console.log(JSON.stringify({exactApprovedPayloads:51,changedPayloadHeld:true,pendingHeld:true,unknownKeyHeld:true,wrongIdHeld:true,longDashHeld:true,generatedBodies:'PASS'}));
