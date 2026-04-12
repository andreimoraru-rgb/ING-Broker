const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

// Update CASCO links
content = content.replace(
  /id: 'casco',([\s\S]*?)link: '#',/g,
  "id: 'casco',$1link: 'https://easigurari.com/ro/article/asigurarea-casco',"
);

// Update Locuinta links
content = content.replace(
  /id: 'locuinta',([\s\S]*?)link: '#',/g,
  "id: 'locuinta',$1link: 'https://easigurari.com/ro/article/asigurare-locuinta-si-bunuri-imobile-si-mobile-r-moldova',"
);

// Update Accidente links
content = content.replace(
  /id: 'accidente',([\s\S]*?)link: '#',/g,
  "id: 'accidente',$1link: 'https://easigurari.com/ro/article/asigurarea-de-accidente-angajatilor-r-moldova',"
);

fs.writeFileSync('src/translations.ts', content);
console.log('Links updated');
