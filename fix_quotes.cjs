const fs = require('fs');
let content = fs.readFileSync('src/data/articles.ts', 'utf8');
content = content.replace(/family's/g, "family\\'s");
fs.writeFileSync('src/data/articles.ts', content);
console.log('Fixed quotes');
