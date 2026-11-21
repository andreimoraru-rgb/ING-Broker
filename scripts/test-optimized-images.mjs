import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
const rows=JSON.parse(fs.readFileSync('docs/audits/image-optimization-20261121.json','utf8'));
assert.equal(rows.length,25);
assert.equal(new Set(rows.map(r=>r.destination)).size,25);
let before=0,after=0;
for(const r of rows){
 const original=fs.readFileSync('public'+r.source),optimized=fs.readFileSync('public'+r.destination);
 const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
 assert.equal(hash(original),r.sourceSha256,r.source);
 assert.equal(hash(optimized),r.optimizedSha256,r.destination);
 assert.equal(original.length,r.sourceBytes);assert.equal(optimized.length,r.optimizedBytes);
 assert.equal(optimized.toString('ascii',0,4),'RIFF');assert.equal(optimized.toString('ascii',8,12),'WEBP');
 assert.ok(optimized.length<original.length,r.destination);
 assert.equal(r.alphaPixelsChanged,0,r.destination);
 if(r.isLogo){assert.equal(r.lossless,true);assert.equal(r.visiblePixelsChanged,0);}
 else assert.ok(r.psnrDb>=42||r.psnrDb===null,r.destination);
 before+=original.length;after+=optimized.length;
}
// Detect missing or accidentally doubled paths in source and initial HTML.
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(f=>f.isDirectory()?walk(dir+'/'+f.name):[dir+'/'+f.name]);}
let references=0;const used=new Set();
for(const f of [...walk('src'),...(fs.existsSync('dist/_pages')?walk('dist/_pages'):[])].filter(f=>/\.(tsx?|html|css)$/.test(f))){
 const text=fs.readFileSync(f,'utf8');
 for(const match of text.matchAll(/\/images\/optimized-20261121-v1\/[^\s'"<>}]+/g)){
  assert.ok(fs.existsSync('public'+match[0]),f+': '+match[0]);references++;used.add(match[0]);
 }
 if(f.startsWith('src/')){const oldCheck=rows.reduce((s,r)=>s.replaceAll(r.destination,''),text);for(const r of rows)assert.ok(!oldCheck.includes(r.source)&&!oldCheck.includes(r.source.replaceAll(' ','%20')),f+': old image '+r.source);}
}
for(const r of rows)assert.ok(used.has(r.destination),'Missing active image reference: '+r.destination);
console.log(JSON.stringify({images:rows.length,logos:rows.filter(r=>r.isLogo).length,before,after,savedPercent:+((1-after/before)*100).toFixed(2),references,passed:true}));
