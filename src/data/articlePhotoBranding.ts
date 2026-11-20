import {catalogMedia20261112} from './catalogMedia20261112';
// Approved scenes: clean render export plus corner-branded social export.
// Existing six scenes remain unchanged; new individually reviewed articles add unique scenes.
const names=['viata-familie','cladiri-birouri','centre-comerciale','hoteluri-pensiuni','restaurante-cafenele-v2','clinici-private-v2'];
import {energyMedia20261110} from './energyMedia20261110';
import {auditMedia20261111} from './auditMedia20261111';
import {operationsMedia20261111} from './operationsMedia20261111';
export const articlePhotoBranding:Record<string,{source:string;defaultColor:'black'|'white'}>=Object.fromEntries(names.map(name=>[
 `/images/articles/moldova/${name}-corner-20261109.webp`,
 {source:`/images/articles/moldova/${name}-scene-20261109.webp`,defaultColor:name==='viata-familie'?'white':'black'},
]));
for(const [name,defaultColor] of [['flota-inventar','white'],['seceta-culturi','white'],['livezi-viticultura','black'],['ferma-zootehnica','black'],['scoala-clasa','black'],['sala-fitness','white']] as const){
 articlePhotoBranding[`/images/articles/moldova/${name}-corner-20261109.webp`]={source:`/images/articles/moldova/${name}-scene-20261109.webp`,defaultColor};
}
export const articlePhotoSource=(image:string)=>articlePhotoBranding[image]?.source||image;
for(const asset of Object.values(operationsMedia20261111)){
 articlePhotoBranding[`/images/articles/moldova/${asset.name}-operations-corner-20261111.webp`]={source:`/images/articles/moldova/${asset.name}-operations-scene-20261111.webp`,defaultColor:'white'};
}
for(const name of Object.values(auditMedia20261111)){
 articlePhotoBranding[`/images/articles/moldova/${name}-audit-corner-20261111.webp`]={source:`/images/articles/moldova/${name}-audit-scene-20261111.webp`,defaultColor:'black'};
}
// Imaginea 1200x630 a articolului CAR: pagina afișează aceeași scenă curată, cu logo-ul suprapus.
articlePhotoBranding['/images/articles/moldova/ing-broker-car-constructii-santier-2026.webp']=articlePhotoBranding['/images/articles/moldova/constructii-montaj-audit-corner-20261111.webp'];
for(const asset of Object.values(energyMedia20261110)){
 articlePhotoBranding[`/images/articles/moldova/${asset.name}-corner-20261110.webp`]={source:`/images/articles/moldova/${asset.name}-scene-20261110.webp`,defaultColor:'white'};
}
for(const name of ['cyber-operatiuni-modern','ecommerce-fulfillment-modern','it-livrare-responsabilitate-modern']){
 articlePhotoBranding[`/images/articles/moldova/${name}-corner-20261109.webp`]={source:`/images/articles/moldova/${name}-scene-20261109.webp`,defaultColor:'white'};
}
for(const [name,defaultColor] of [['imm-backup','black'],['ecommerce-ambalare','black'],['saas-lansare','black'],['centru-date-rack','white'],['telecom-fibra','black'],['it-receptie-proiect','black']] as const){
 articlePhotoBranding[`/images/articles/moldova/${name}-tech-corner-20261109.webp`]={source:`/images/articles/moldova/${name}-tech-scene-20261109.webp`,defaultColor};
}
for(const [name,defaultColor] of [['casco-inspectie','white'],['rca-calcul','black'],['calatorie-pregatire','black'],['storno-rezervare','black'],['rca-sofer-tanar','white'],['rca-documente','white'],['drona-verificare','black'],['animale-companie','black']] as const){
 articlePhotoBranding[`/images/articles/moldova/${name}-search-corner-20261109.webp`]={source:`/images/articles/moldova/${name}-search-scene-20261109.webp`,defaultColor};
}

for(const asset of Object.values(catalogMedia20261112)){articlePhotoBranding[asset.image]={source:asset.source,defaultColor:asset.defaultColor};}

// Recovered clean versions keep the existing scene. The logo belongs to the
// displayed photo box so object-cover cannot cut it off on narrow screens.
for(const [name,hero] of [
 ['pierdere-profit-re-alb-20261107'],['sere-re-alb-20261107'],['irigatii-re-alb-20261107'],
 ['drumuri-re-alb-20261107'],['mediu-re-alb-20261107'],['garantie-buna-executie-20261106'],
 ['asigurare-raspundere-directori-do-moldova'],['asigurare-poduri-infrastructura-moldova'],['asigurare-raspundere-angajator-moldova'],
 ['cyber-companii-next-20261108','cyber-companii-hero-next-20261108'],
 ['accidente-angajati-next-20261108','accidente-angajati-hero-next-20261108'],
 ['panouri-fotovoltaice-next-20261108','panouri-fotovoltaice-hero-next-20261108'],
 ['depozite-cereale-next-20261108','depozite-cereale-hero-next-20261108'],
 ['corporate-riscuri-moldova-20261107'],['flota-auto-companie-20261107'],['transportator-cmr-20261107'],
] as const){
 const item={source:`/images/articles/moldova/${name}-clean-20261116.webp`,defaultColor:'black' as const};
 articlePhotoBranding[`/images/articles/moldova/${name}.webp`]=item;
 if(hero)articlePhotoBranding[`/images/articles/moldova/${hero}.webp`]=item;
}
