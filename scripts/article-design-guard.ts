import assert from 'node:assert/strict';

/** Only duplicate removal and same-scene hero derivative binding may change. */
export function withoutDuplicateBodyPhoto(source: string): string {
  const text=source.replace(/\r\n/g,'\n');
  const start=text.indexOf('          {(/-2026110[67]');
  if(start<0) return text;
  const end=text.indexOf('          )}\n',start);
  assert.ok(end>start,'Expected exact legacy duplicate-image block');
  const block=text.slice(start,end+'          )}\n'.length);
  assert.match(block,/^          \{\(\/-2026110\[67\]\\\.(?:png|\(\?:png\|webp\))\$\/\.test\(article\.image\)\) && \(\n/);
  assert.ok(block.includes('<figure className="mb-10">'));
  assert.ok(block.includes('src={article.image}'));
  assert.equal((block.match(/<img\b/g)||[]).length,1);
  assert.ok(!block.includes('Hero Section'));
  return (text.slice(0,start)+text.slice(end+'          )}\n'.length))
    .replace('new URL(article.image, articleOrigin)','new URL(article.heroImage || article.image, articleOrigin)')
    .replace('src={article.image} ','src={article.heroImage || article.image} ');
}
