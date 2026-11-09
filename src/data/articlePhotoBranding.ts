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
