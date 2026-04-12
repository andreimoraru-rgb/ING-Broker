const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');
content = content.replace(/https:\/\/www\.ingbroker\.md\/post\//g, '/news/');
fs.writeFileSync('src/translations.ts', content);
console.log('Fixed links');
