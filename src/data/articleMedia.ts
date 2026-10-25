// Owner-requested Moldova illustration series. Fictional AI scenes, not client photographs.
// Owner confirmed specialist review and Moldova intermediation capability on 2026-10-21.
const media = (file: string, alt: string, topic: string, keywords: string, context: string) => ({
  image: `/images/articles/moldova/${file}.webp`,
  imageAlt: `${alt}. Ilustrație generată cu AI.`,
  imageCaption: `Ilustrație generată cu AI, inspirată de ${context}. Nu prezintă un client sau un obiectiv asigurat real.`,
  topic, keywords,
});

export const articleMedia: Record<string, ReturnType<typeof media>> = {
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
