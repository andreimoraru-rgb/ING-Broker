// These six approved scenes have a clean render export and a corner-branded social export.
// No image or product is substituted. Other article photographs remain untouched.
const names=['viata-familie','cladiri-birouri','centre-comerciale','hoteluri-pensiuni','restaurante-cafenele-v2','clinici-private-v2'];
export const articlePhotoBranding:Record<string,{source:string;defaultColor:'black'|'white'}>=Object.fromEntries(names.map(name=>[
 `/images/articles/moldova/${name}-corner-20261109.webp`,
 {source:`/images/articles/moldova/${name}-scene-20261109.webp`,defaultColor:name==='viata-familie'?'white':'black'},
]));
export const articlePhotoSource=(image:string)=>articlePhotoBranding[image]?.source||image;
