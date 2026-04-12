import fs from 'fs';
const lines = fs.readFileSync('/src/translations.ts', 'utf8').split('\n');
lines.splice(872, 225); // Remove 225 lines starting from index 872 (line 873)
fs.writeFileSync('/src/translations.ts', lines.join('\n'));
console.log('Done');
