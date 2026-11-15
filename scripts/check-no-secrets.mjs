// Oprește build-ul dacă dist/ conține o cheie Google sau numele variabilei GEMINI_API_KEY.
// shortcut: caută doar chei de forma AIza (39 de caractere), nu orice secret; de extins dacă apar alți furnizori.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Lookbehind: o cheie reală nu continuă un șir base64 (blob-urile de imagine inline dau fals pozitiv).
const KEY = /(?<![A-Za-z0-9+/_-])AIza[0-9A-Za-z_-]{35}(?![0-9A-Za-z_-])/;
const NAME = /GEMINI_API_KEY/;

export function findProblems(text) {
  return [KEY.test(text) && 'cheie de tip AIza', NAME.test(text) && 'GEMINI_API_KEY'].filter(Boolean);
}

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (/\.(html|js|css|json|txt|xml|map)$/i.test(entry)) yield path;
  }
}

if (process.argv.includes('--self-test')) {
  const fake = 'AIza' + 'x'.repeat(35);
  console.assert(findProblems(`k="${fake}"`).length === 1, 'cheia izolată trebuie găsită');
  console.assert(findProblems(`data:image/png;base64,QUJD/${fake}`).length === 0, 'blob-ul base64 trebuie ignorat');
  console.assert(findProblems('process.env.GEMINI_API_KEY').length === 1, 'numele variabilei trebuie găsit');
  console.log('self-test ok');
} else {
  const root = process.argv[2] || 'dist';
  const bad = [];
  for (const file of walk(root)) {
    const found = findProblems(readFileSync(file, 'utf8'));
    if (found.length) bad.push(`${file}: ${found.join(', ')}`);
  }
  if (bad.length) {
    console.error('Secrete în build:\n' + bad.join('\n'));
    process.exit(1);
  }
  console.log(`check-no-secrets: ${root}/ curat`);
}
