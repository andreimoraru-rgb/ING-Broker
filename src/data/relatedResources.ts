export type ResourceTopic = 'cargo' | 'cmr' | 'professional' | 'construction' | 'liability';

export const relatedResources: Record<ResourceTopic, { path: string; label: string }[]> = {
  cargo: [
    { path: '/business/cargo', label: 'CARGO: analiza asigurării mărfurilor transportate' },
    { path: '/news/asigurare-cargo-transport-marfa', label: 'Ghid CARGO: marfa, traseul și condițiile de verificat' },
    { path: '/news/asigurari-transport-logistica-cmr-cargo-moldova', label: 'CMR și CARGO: răspunderea transportatorului și asigurarea mărfii' },
  ],
  cmr: [
    { path: '/news/asigurari-transport-logistica-cmr-cargo-moldova', label: 'CMR și CARGO: produse cu roluri diferite' },
    { path: '/business/cargo', label: 'CARGO: analiza asigurării mărfurilor transportate' },
    { path: '/oferte/flote-auto', label: 'Analiza asigurărilor pentru flota companiei' },
  ],
  professional: [
    { path: '/servicii/asigurare-raspundere-profesionala', label: 'PI: analiza răspunderii profesionale și solicitarea unei oferte' },
    { path: '/news/asigurare-raspundere-profesionala', label: 'Răspunderea profesională: activitatea și condițiile de verificat' },
  ],
  construction: [
    { path: '/servicii/asigurari-constructii-car-ear', label: 'CAR/EAR: analiza asigurării lucrărilor de construcții și montaj' },
    { path: '/news/asigurare-constructii-montaj', label: 'Ghid pentru pregătirea asigurării unui proiect de construcții' },
    { path: '/construction-shield', label: 'Construction Shield: analiza cerințelor proiectului' },
  ],
  liability: [
    { path: '/business/liability', label: 'Analiza răspunderii civile pentru activitatea companiei' },
    { path: '/news/asigurare-raspundere-civila-generala', label: 'Răspunderea civilă generală: riscuri și condiții de verificat' },
    { path: '/news/asigurare-raspundere-civila-legala', label: 'Răspunderea față de terți și rolul poliței' },
  ],
};

export const articleResourceTopics: Record<string, ResourceTopic> = {
  'asigurare-cargo-transport-marfa': 'cargo',
  'asigurare-bunuri-tranzit': 'cargo',
  'asigurari-transport-logistica-cmr-cargo-moldova': 'cmr',
  'asigurare-raspundere-profesionala': 'professional',
  'asigurare-constructii-montaj': 'construction',
  'asigurare-raspundere-civila-generala': 'liability',
  'asigurare-raspundere-civila-legala': 'liability',
};
