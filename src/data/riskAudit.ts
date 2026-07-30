// Date și logică pentru instrumentul B2B „Evaluare rapidă de risc corporativ".
// Client-side, conform CNPF: recomandăm ACOPERIRI (program de asigurare), NU prețuri,
// francize sau limite. Condițiile contractuale primează asupra acestei recomandări.

export interface Coverage {
  id: string;
  name: string;
  desc: string;
  link: string; // rută internă existentă pe ingbroker.md
}

export interface Industry {
  id: string;
  label: string;
  base: string[]; // id-uri de acoperiri de bază pentru industrie
}

export interface CompanySize {
  id: string;
  label: string;
  hint: string;
}

export interface Activity {
  id: string;
  label: string;
  add: string[]; // acoperiri suplimentare declanșate de această expunere
}

// Catalogul de acoperiri. Fiecare trimite spre o pagină reală de pe site.
export const COVERAGES: Record<string, Coverage> = {
  corporate: {
    id: 'corporate',
    name: 'Program corporativ integrat',
    desc: 'Structurarea unui program unitar de asigurare pentru companie, coordonat de broker.',
    link: '/servicii/asigurari-corporative-moldova',
  },
  rcg: {
    id: 'rcg',
    name: 'Răspundere Civilă Generală',
    desc: 'Protecție pentru prejudiciile produse terților prin activitatea companiei.',
    link: '/business',
  },
  property: {
    id: 'property',
    name: 'Property - clădiri, echipamente, stocuri',
    desc: 'Acoperire pentru active fizice: incendiu, calamități, avarii, furt.',
    link: '/property-assets',
  },
  bi: {
    id: 'bi',
    name: 'Întreruperea activității',
    desc: 'Compensarea pierderii de profit când o daună majoră oprește operațiunile.',
    link: '/property-assets',
  },
  fleet: {
    id: 'fleet',
    name: 'Flotă auto (RCA + CASCO)',
    desc: 'Administrarea unitară a asigurărilor pentru parcul auto al companiei.',
    link: '/oferte/flote-auto',
  },
  carear: {
    id: 'carear',
    name: 'CAR / EAR - construcții și montaj',
    desc: 'Riscuri de șantier pentru lucrări de construcții și instalare de echipamente.',
    link: '/servicii/asigurari-constructii-car-ear',
  },
  pi: {
    id: 'pi',
    name: 'Răspundere Profesională (PI)',
    desc: 'Protecție pentru pretenții legate de erori sau omisiuni în serviciile prestate.',
    link: '/servicii/asigurare-raspundere-profesionala',
  },
  cyber: {
    id: 'cyber',
    name: 'Cyber și protecția datelor',
    desc: 'Acoperire pentru incidente cibernetice, breșe de date și întreruperi IT.',
    link: '/servicii/asigurare-cyber-moldova',
  },
  do: {
    id: 'do',
    name: 'D&O - răspunderea managementului',
    desc: 'Protecția patrimoniului personal al administratorilor pentru decizii de conducere.',
    link: '/business',
  },
  cargo: {
    id: 'cargo',
    name: 'Cargo / CMR - marfă în transport',
    desc: 'Acoperirea mărfurilor pe durata transportului intern și internațional.',
    link: '/oferte/transportatori-auto',
  },
  eb: {
    id: 'eb',
    name: 'Employee Benefits - sănătate angajați',
    desc: 'Pachete de sănătate și beneficii pentru angajați, cu tratament fiscal avantajos.',
    link: '/business',
  },
  bonds: {
    id: 'bonds',
    name: 'Garanții contractuale',
    desc: 'Bid bonds și performance bonds pentru participarea la achiziții și contracte.',
    link: '/business',
  },
  credit: {
    id: 'credit',
    name: 'Asigurarea creditelor comerciale',
    desc: 'Protecția încasărilor față de neplata clientelei comerciale.',
    link: '/business',
  },
  agri: {
    id: 'agri',
    name: 'Riscuri agricole',
    desc: 'Acoperiri pentru culturi, animale și active agricole față de riscuri naturale.',
    link: '/business',
  },
  energy: {
    id: 'energy',
    name: 'Energie regenerabilă / BESS',
    desc: 'Program pentru parcuri solare, eoliene și sisteme de stocare a energiei.',
    link: '/renewable-energy',
  },
};

export const INDUSTRIES: Industry[] = [
  { id: 'constructii', label: 'Construcții și infrastructură', base: ['carear', 'rcg', 'property', 'fleet'] },
  { id: 'it', label: 'IT și software', base: ['pi', 'cyber', 'property', 'eb'] },
  { id: 'transport', label: 'Transport și logistică', base: ['fleet', 'cargo', 'rcg'] },
  { id: 'productie', label: 'Producție și industrie', base: ['property', 'rcg', 'bi', 'fleet'] },
  { id: 'comert', label: 'Comerț și retail', base: ['property', 'rcg', 'cyber'] },
  { id: 'agricultura', label: 'Agricultură', base: ['agri', 'property', 'fleet'] },
  { id: 'horeca', label: 'HoReCa și turism', base: ['property', 'rcg', 'eb'] },
  { id: 'servicii', label: 'Servicii profesionale și consultanță', base: ['pi', 'rcg', 'cyber'] },
  { id: 'imobiliare', label: 'Imobiliare și administrare', base: ['property', 'rcg', 'do'] },
  { id: 'energie', label: 'Energie și utilități', base: ['energy', 'property', 'rcg'] },
  { id: 'sanatate', label: 'Sănătate și farma', base: ['pi', 'property', 'eb'] },
  { id: 'financiar', label: 'Financiar și IFN', base: ['pi', 'cyber', 'do', 'credit'] },
];

export const SIZES: CompanySize[] = [
  { id: 'micro', label: 'Micro', hint: 'până la 9 angajați' },
  { id: 'mica', label: 'Mică', hint: '10 - 49 angajați' },
  { id: 'medie', label: 'Medie', hint: '50 - 249 angajați' },
  { id: 'mare', label: 'Mare', hint: '250+ angajați' },
];

export const ACTIVITIES: Activity[] = [
  { id: 'flota', label: 'Parc auto / vehicule de serviciu', add: ['fleet'] },
  { id: 'santiere', label: 'Lucrări pe șantiere sau montaj', add: ['carear', 'rcg'] },
  { id: 'date_it', label: 'Gestionăm date de clienți / sisteme IT', add: ['cyber'] },
  { id: 'export', label: 'Export / transport internațional de marfă', add: ['cargo', 'credit'] },
  { id: 'active', label: 'Active fizice importante (clădiri, echipamente)', add: ['property', 'bi'] },
  { id: 'angajati', label: 'Angajați cheie / echipă numeroasă', add: ['eb', 'do'] },
  { id: 'consultanta', label: 'Oferim consultanță / servicii profesionale', add: ['pi'] },
  { id: 'stocuri', label: 'Stocuri de marfă / depozite', add: ['property', 'bi'] },
  { id: 'contracte_publice', label: 'Participăm la achiziții publice / contracte mari', add: ['bonds'] },
  { id: 'credit_comercial', label: 'Vindem pe credit comercial (plată amânată)', add: ['credit'] },
];

// Ordinea de prioritate la afișarea programului recomandat.
const PRIORITY = [
  'corporate', 'carear', 'property', 'bi', 'fleet', 'cargo', 'pi', 'cyber',
  'rcg', 'do', 'eb', 'bonds', 'credit', 'agri', 'energy',
];

export interface AuditSelection {
  industryId: string;
  sizeId: string;
  activityIds: string[];
}

/**
 * Construiește programul recomandat (listă de acoperiri) din selecția utilizatorului.
 * Determinist, fără prețuri. Companiile medii/mari primesc în plus programul corporativ integrat.
 */
export function buildProgram(sel: AuditSelection): Coverage[] {
  const ids = new Set<string>();

  const industry = INDUSTRIES.find((i) => i.id === sel.industryId);
  industry?.base.forEach((id) => ids.add(id));

  sel.activityIds.forEach((actId) => {
    ACTIVITIES.find((a) => a.id === actId)?.add.forEach((id) => ids.add(id));
  });

  // Companiile medii și mari beneficiază de coordonarea unui program corporativ integrat.
  if (sel.sizeId === 'medie' || sel.sizeId === 'mare') {
    ids.add('corporate');
  }

  return PRIORITY.filter((id) => ids.has(id)).map((id) => COVERAGES[id]);
}
