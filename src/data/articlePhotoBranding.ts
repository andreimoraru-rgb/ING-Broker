// Approved scenes: clean render export plus corner-branded social export.
// Existing six scenes remain unchanged; new individually reviewed articles add unique scenes.
const names=['viata-familie','cladiri-birouri','centre-comerciale','hoteluri-pensiuni','restaurante-cafenele-v2','clinici-private-v2'];
export const articlePhotoBranding:Record<string,{source:string;defaultColor:'black'|'white'}>=Object.fromEntries(names.map(name=>[
 `/images/articles/moldova/${name}-corner-20261109.webp`,
 {source:`/images/articles/moldova/${name}-scene-20261109.webp`,defaultColor:name==='viata-familie'?'white':'black'},
]));
for(const [name,defaultColor] of [['flota-inventar','white'],['seceta-culturi','white'],['livezi-viticultura','black'],['ferma-zootehnica','black'],['scoala-clasa','black'],['sala-fitness','white']] as const){
 articlePhotoBranding[`/images/articles/moldova/${name}-corner-20261109.webp`]={source:`/images/articles/moldova/${name}-scene-20261109.webp`,defaultColor};
}
export const articlePhotoSource=(image:string)=>articlePhotoBranding[image]?.source||image;
for(const [name,defaultColor] of [['imm-backup','black'],['ecommerce-ambalare','black'],['saas-lansare','black'],['centru-date-rack','white'],['telecom-fibra','black'],['it-receptie-proiect','black']] as const){
 articlePhotoBranding[`/images/articles/moldova/${name}-tech-corner-20261109.webp`]={source:`/images/articles/moldova/${name}-tech-scene-20261109.webp`,defaultColor};
}
for(const [name,defaultColor] of [['casco-inspectie','white'],['rca-calcul','black'],['calatorie-pregatire','black'],['storno-rezervare','black'],['rca-sofer-tanar','white'],['rca-documente','white'],['drona-verificare','black'],['animale-companie','black']] as const){
 articlePhotoBranding[`/images/articles/moldova/${name}-search-corner-20261109.webp`]={source:`/images/articles/moldova/${name}-search-scene-20261109.webp`,defaultColor};
}
