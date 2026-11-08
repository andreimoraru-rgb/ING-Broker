// Owner-requested Moldova illustration series. Fictional AI scenes, not client photographs.
// Owner confirmed specialist review and Moldova intermediation capability on 2026-10-21.
const media = (file: string, alt: string, topic: string, keywords: string, context: string) => ({
  image: `/images/articles/moldova/${file}.webp`,
  heroImage: undefined as string | undefined,
  imageAlt: alt,
  imageCaption: '',
  topic, keywords,
});

export const articleMedia: Record<string, ReturnType<typeof media>> = {
  'asigurare-cyber-companii': media('cyber-companii-next-20261108', 'Responsabilii IT și operațional verifică un dosar de continuitate lângă echipamente de rețea', 'Riscuri cyber', 'asigurare cyber companii Moldova, dosar risc cibernetic, securitate date companie, copii de rezervă, incident informatic', 'analiza sistemelor companiilor din Moldova'),
  'asigurare-accidente-angajati': media('accidente-angajati-next-20261108', 'Angajați și un responsabil verifică o listă de siguranță într-un atelier de prelucrare a lemnului', 'Accidente angajați', 'asigurare accidente angajați Moldova, asigurare colectivă accidente, indemnizație accident, lista angajați asigurați', 'colectivele companiilor din Moldova'),
  'asigurare-panouri-fotovoltaice': media('panouri-fotovoltaice-next-20261108', 'Instalație fotovoltaică la sol lângă o hală, verificată de un tehnician', 'Sisteme fotovoltaice', 'asigurare panouri fotovoltaice Moldova, invertor, riscuri instalație solară, asigurare echipamente energie', 'instalațiile companiilor din Moldova'),
  'asigurare-depozite-cereale': media('depozite-cereale-next-20261108', 'Personalul unui depozit agricol verifică o probă lângă un lot de grâu păstrat în hală', 'Depozite de cereale', 'asigurare depozit cereale Moldova, asigurare stoc grâu porumb, bunuri clienți depozitare, inventar depozit agricol', 'depozitarea produselor agricole în Moldova'),
  'asigurare-raspundere-profesionala': media('raspundere-profesionala-20261108', 'Doi specialiști verifică documentele unei lucrări profesionale', 'Răspundere profesională', 'asigurare răspundere profesională Moldova, erori și omisiuni profesionale, limite răspundere consultant', 'serviciile profesionale din Moldova'),
  'asigurare-raspundere-civila-generala': media('raspundere-generala-20261108', 'Responsabilul unui magazin și un tehnician verifică accesul clienților', 'Răspundere față de terți', 'asigurare răspundere civilă generală Moldova, prejudicii terți, răspundere companie, bunuri clienți', 'companiile din Moldova'),
  'asigurare-constructii-montaj': media('constructii-montaj-20261108', 'Echipă cu căști de protecție verifică montajul unei instalații pe șantier', 'Construcții și montaj', 'asigurare construcții montaj Moldova, asigurare șantier, lucrări materiale utilaje, răspundere constructor', 'șantierele din Moldova'),
  'asigurare-credit-comercial': media('credit-comercial-20261108', 'Responsabilii unei firme de comerț verifică documentele livrărilor și facturilor', 'Credit comercial', 'asigurare credit comercial Moldova, risc neplată facturi, creanțe comerciale, vânzare cu plata amânată', 'companiile comerciale din Moldova'),
  'asigurare-cargo-transport-marfa': media('cargo-marfa-20261108', 'Paleți cu mărfuri ambalate și fixate la încărcarea într-un camion', 'Mărfuri în transport', 'asigurare CARGO Moldova, asigurare marfă transportată, diferența CARGO CMR, documente transport marfă', 'transportul de mărfuri din Moldova'),
  'asigurare-depozite-logistice': media('depozit-logistic-20261108', 'Rafturi cu mărfuri pe paleți și culoar de circulație într-un depozit logistic', 'Depozite', 'asigurare depozit Moldova, stocuri și bunuri ale clienților, riscuri depozit logistic', 'depozitele din Moldova'),
  'asigurare-utilaje-industriale': media('utilaje-industriale-20261108', 'Utilaj de prelucrare a metalului și tehnician într-un atelier industrial', 'Utilaje industriale', 'asigurare utilaje industriale Moldova, avarii accidentale utilaje, inventar echipamente producție', 'producția din Moldova'),
  'asigurare-echipamente-it': media('echipamente-it-20261108', 'Laptopuri și echipamente de rețea verificate pe masa unui tehnician', 'Echipamente IT', 'asigurare echipamente IT Moldova, asigurare laptop companie, servere și echipamente electronice', 'echipamentele companiilor din Moldova'),
  'asigurari-corporative-companii-moldova-2026': media('corporate-riscuri-moldova-20261107', 'Doi responsabili ai unei companii verifică inventarul lângă un depozit', 'Companii', 'asigurări companii Moldova, asigurări corporative, asigurare bunuri firmă, răspundere civilă companie', 'activitatea întreprinderilor din Moldova'),
  'asigurari-transport-logistica-cmr-cargo-moldova': media('transportator-cmr-20261107', 'Responsabil de transport verificând documente lângă un camion la depozit', 'Transport și logistică', 'asigurare CMR Moldova, asigurare CARGO, transportatori, asigurare depozit, diferența CMR CARGO', 'transportul de mărfuri din Moldova'),
  'asigurare-viata-moldova': media('asigurare-viata-moldova-chisinau', 'Planificare personală pe termen lung într-un apartament din Chișinău', 'Viață', 'asigurare de viață Moldova, asigurare de viață și accidente, economisire prin asigurare', 'viața cotidiană din Chișinău'),
  'asigurare-pierdere-profit': media('asigurare-intrerupere-activitate-pierdere-profit-moldova', 'Verificarea unei linii de sortare a merelor într-o unitate de producție', 'Continuitatea afacerii', 'asigurare întreruperea activității Moldova, pierdere de profit, continuitatea producției', 'activitățile de producție din raionul Orhei'),
  'asigurare-raspundere-directori': media('asigurare-raspundere-directori-do-moldova', 'Directori discutând documentele companiei într-un birou', 'Conducerea companiei', 'asigurare D&O Moldova, răspunderea directorilor, asigurare administratori', 'mediul de afaceri din Chișinău'),
  'asigurare-buna-executie': media('garantie-buna-executie-constructii-moldova', 'Antreprenor analizând planul unei lucrări de construcții', 'Construcții', 'garanție de bună execuție Moldova, garanții contractuale, antreprenori construcții', 'șantierele din zona Chișinăului'),
  'asigurare-serre-solarii': media('asigurare-sere-solarii-moldova', 'Structură de solar, culturi de tomate și instalații de irigare', 'Agricultură', 'asigurare sere solarii Moldova, asigurare construcții agricole, riscuri culturi protejate', 'horticultura din raionul Criuleni'),
  'asigurare-sisteme-irigatii': media('asigurare-sisteme-irigatii-livada-moldova', 'Sistem de filtrare și conducte de irigare într-o livadă', 'Agricultură', 'asigurare sisteme irigații Moldova, echipamente irigare, inventar instalații agricole', 'livezile din valea Nistrului'),
  'asigurare-poduri-tuneluri': media('asigurare-poduri-infrastructura-moldova', 'Pod rutier din beton peste un râu într-un peisaj rural', 'Infrastructură', 'asigurare poduri Moldova, riscuri infrastructură, asigurare lucrări inginerești', 'peisajul văii Prutului, zona Leova'),
  'asigurare-drumuri-autostrazi': media('asigurare-lucrari-rutiere-drumuri-moldova', 'Utilaje pentru asfaltare pe un drum regional în lucru', 'Infrastructură', 'asigurare lucrări rutiere Moldova, asigurare construcții drumuri, riscuri antreprenori rutieri', 'drumurile regionale din zona Hîncești'),
  'asigurare-remediere-mediu': media('asigurare-riscuri-mediu-remediere-moldova', 'Tehnician prelevând o probă de sol lângă un amplasament industrial', 'Riscuri de mediu', 'riscuri de mediu Moldova, asigurare poluare, evaluare remediere teren industrial', 'zonele industriale din Bălți'),
  'asigurare-raspundere-civila-angajator': media('asigurare-raspundere-angajator-moldova', 'Angajați verificând o fișă de siguranță într-un atelier de mobilier', 'Angajatori', 'răspunderea angajatorului Moldova, asigurare angajatori, diferența față de accidente angajați', 'atelierele de producție din Bălți'),
};

for (const slug of ['asigurare-cyber-companii','asigurare-accidente-angajati','asigurare-panouri-fotovoltaice','asigurare-depozite-cereale']) {
  articleMedia[slug].heroImage = articleMedia[slug].image.replace('-next-20261108.webp','-hero-next-20261108.webp');
}

// Owner-approved photographic pilot, original logo, checked on 2026-11-06.
// Internal provenance stays here; no added design/AI credits in the public article.
articleMedia['asigurare-buna-executie'].image = '/images/articles/moldova/garantie-buna-executie-20261106.webp';
articleMedia['asigurare-buna-executie'].imageAlt = 'Doi specialiști verifică execuția unei clădiri pe șantier';
// Owner contrast rule: white Re on the darker floor, original logo proportions.
articleMedia['asigurare-pierdere-profit'].image = '/images/articles/moldova/pierdere-profit-re-alb-20261107.webp';
articleMedia['asigurare-drumuri-autostrazi'].image = '/images/articles/moldova/drumuri-re-alb-20261107.webp';
articleMedia['asigurare-remediere-mediu'].image = '/images/articles/moldova/mediu-re-alb-20261107.webp';
articleMedia['asigurare-serre-solarii'].image = '/images/articles/moldova/sere-re-alb-20261107.webp';
articleMedia['asigurare-sisteme-irigatii'].image = '/images/articles/moldova/irigatii-re-alb-20261107.webp';

articleMedia['asigurare-flote-auto-corporate-moldova'] = {
  heroImage: undefined,
  image: '/images/articles/moldova/flota-auto-companie-20261107.webp',
  imageAlt: 'Trei furgonete, două autoturisme și un camion parcate la un centru de distribuție',
  imageCaption: '', topic: 'Flote auto',
  keywords: 'asigurare flotă auto Moldova, CASCO flotă, RCA companie, Carte Verde vehicule, CMR transportator, CARGO mărfuri, acte ofertă flotă',
};

// Same photograph, original logo positioned below the title in the dark hero.
for (const slug of ['asigurare-cargo-transport-marfa','asigurare-depozite-logistice','asigurare-utilaje-industriale','asigurare-echipamente-it','asigurare-raspundere-profesionala','asigurare-raspundere-civila-generala','asigurare-constructii-montaj','asigurare-credit-comercial']) {
  articleMedia[slug].heroImage = articleMedia[slug].image.replace('-20261108.webp','-hero-20261108.webp');
}
