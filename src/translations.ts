import { businessProductsTranslations } from './translations/businessProducts';

export type Language = 'ro' | 'ru' | 'en';

export const translations = {
  ro: {
    ...businessProductsTranslations.ro,
    nav: ['Personal', 'Soluții Corporate', 'Reasigurare', 'Despre Noi', 'Contact'],
    clientAccount: 'Calculează Online',
    logoAlt: 'Logo ING Broker',
    hero: {
      segment: 'Asigurări pentru tine',
      title: 'Asigurări',
      titleItalic: 'pentru tine.',
      description: 'Te ajutăm să alegi asigurarea potrivită pentru mașină, locuință sau călătorii. Îți explicăm ce acoperă polița, ce nu acoperă și ce ai de făcut dacă apare o daună.',
      cta1: 'Calculează Online',
      cta2: 'Solicită consultanță',
      scroll: 'Vezi mai jos'
    },
    trustStripBenefits: [
      'Broker de asigurări în Moldova',
      "Consultanță personalizată",
      'Îndrumare în caz de daună',
      'Explicații pe înțelesul tău'
    ],
    intro: {
      title: 'Te ajutăm să alegi',
      titleItalic: 'asigurarea potrivită.',
      p1: 'La ING Broker găsești asigurări pentru mașină, locuință, călătorii și accidente. Discutăm despre ce ai nevoie și îți explicăm opțiunile disponibile.',
      p2: 'Înainte să alegi, verificăm împreună prețul, riscurile acoperite și situațiile în care polița nu oferă despăgubiri. Te îndrumăm și dacă ai nevoie să anunți o daună.'
    },
    productLabels: {
      destined: 'Destinat',
      coverage: 'Acoperire'
    },
    comparison: {
      title: 'Ce tip de asigurare ți se potrivește?',
      subtitle: 'Pornește de la ce vrei să asiguri: mașina, locuința, călătoria sau riscul de accident.',
      cards: [
        { title: 'Mașină', desc: 'Compară RCA, Carte Verde și CASCO. Fiecare are un rol diferit; verifică ce poliță îți trebuie.' },
        { title: 'Călătorii & Sănătate', desc: 'Verifică asigurarea medicală pentru călătorie și asigurarea de accidente. Acoperirea depinde de polița aleasă.' },
        { title: 'Locuință', desc: 'Verifică ce riscuri pot fi asigurate pentru casă, apartament și bunurile din locuință.' }
      ]
    },
    whyUs: {
      label: 'De ce ING Broker',
      title: 'De ce să alegi',
      titleItalic: 'ING Broker?',
      items: [
        { title: 'Începem cu nevoile tale', desc: 'Îți punem întrebări despre ce vrei să asiguri și îți explicăm ce opțiuni poți lua în calcul.' },
        { title: 'Comparăm ofertele', desc: 'Te ajutăm să compari prețul, limitele de despăgubire și excluderile, adică situațiile neacoperite de poliță.' },
        { title: 'Explicăm condițiile', desc: 'Discutăm despre ce plătești, ce acoperă polița și ce obligații ai, înainte să închei asigurarea.' },
        { title: 'Te îndrumăm la daună', desc: 'Îți explicăm pașii și documentele necesare pentru cererea de despăgubire. Asigurătorul analizează cererea potrivit contractului.' }
      ],
      years: 'Ani de activitate'
    },
    methodology: {
      title: 'Cum lucrăm la',
      titleItalic: 'ING Broker.',
      subtitle: 'Trei pași pentru a alege asigurarea și a înțelege cum o folosești.',
      steps: [
        {
          number: '01',
          title: 'Discutăm despre nevoile tale',
          desc: 'Ne spui ce vrei să asiguri și ce te preocupă. Clarificăm ce informații sunt necesare pentru ofertare.'
        },
        {
          number: '02',
          title: 'Comparăm opțiunile',
          desc: 'Îți prezentăm ofertele disponibile și diferențele dintre ele, ca să poți alege în cunoștință de cauză.'
        },
        {
          number: '03',
          title: 'Te ajutăm și după încheiere',
          desc: 'Îți răspundem la întrebări despre poliță, reînnoire și pașii de urmat în caz de daună.'
        }
      ]
    },
    faq: {
      title: 'Întrebări Frecvente',
      subtitle: 'Tot ce trebuie să știi despre asigurările tale personale.'
    },
    finalCta: {
      title: 'Ai nevoie de',
      subtitle: 'o asigurare?',
      cta1: 'Alege produsul potrivit',
      cta2: 'Discută cu un consultant'
    },
    corporateGateway: {
      label: 'Asigurări pentru companii',
      title: 'Ai o afacere?',
      desc: 'Te ajutăm să alegi asigurări pentru bunurile, activitatea și angajații companiei. Începem cu riscurile afacerii tale și verificăm opțiunile disponibile.',
      btnBusiness: 'Vezi asigurările pentru companii',
      btnReinsurance: 'Reasigurări & Fronting'
    },
    footer: {
      desc: 'ING Broker te ajută să alegi asigurări pentru tine și afacerea ta. Îți explicăm ofertele, condițiile poliței și pașii în caz de daună.',
      sections: {
        products: 'Produse',
        company: 'Companie',
        legal: 'Legal'
      },
      legal: ['Oferte', 'Termeni și Condiții', 'Politica de Confidențialitate'],
      designBy: 'Design de',
      rights: '© 2026 Insurance ING Broker SRL. Toate drepturile rezervate.'
    },
    insights: {
      label: 'Articole și sfaturi',
      title: 'Ghidul tău în asigurări.',
      cta: 'Vezi toate articolele',
      articles: [
        {
          title: 'RCA pentru șoferi tineri: riscuri financiare și costuri ascunse în Moldova',
          desc: 'Află totul despre provocările și costurile asigurării auto pentru tinerii șoferi din Republica Moldova.',
          link: '/news/rca-pentru-soferi-tineri-riscuri-financiare-si-costuri-ascunse-in-moldova',
          image: 'https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=800'
        },
        {
          title: 'Cum se determină prețul unei asigurări RCA? Ghid pentru un preț RCA accesibil',
          desc: "Vezi ce date influențează calculul RCA și cum verifici prețul și condițiile unei propuneri.",
          link: '/news/cum-se-determin%C4%83-pre%C8%9Bul-unei-asigur%C4%83ri-rca-ghid-pentru-un-pre%C8%9B-rca-accesibil',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    business: {
      title: 'Soluții Corporate',
      titleItalic: 'pentru afacerea ta.',
      subtitle: 'Te ajutăm să alegi asigurări pentru bunurile, activitatea și angajații companiei. Analizăm riscurile afacerii și comparăm condițiile ofertelor disponibile.',
      cta1: 'Solicită audit de risc',
      cta2: 'Discută cu un expert',
      faq: {
        title: 'Întrebări Frecvente',
        items: [
          { q: 'Ce tipuri de asigurări corporate oferiți?', a: "Putem discuta riscurile bunurilor, răspunderii, transportului și angajaților companiei. Disponibilitatea unui produs, activitățile acceptate și condițiile se confirmă pentru fiecare caz, înainte de ofertare." },
          { q: 'Cum mă ajută un broker de asigurări B2B?', a: "ING Broker te ajută să descrii riscurile și să compari ofertele disponibile, inclusiv prețul, limitele și excluderile. La daună, explicăm pașii și documentele necesare. Asigurătorul acceptă riscul și decide asupra cererii potrivit contractului." },
          { q: 'Oferiți soluții pentru riscuri complexe sau internaționale?', a: "Pentru riscuri complexe sau internaționale, pregătim întrebările și informațiile necesare analizei. Posibilitatea unei structuri de reasigurare sau fronting, participanții și capacitatea se confirmă separat; pagina nu promite acces la o anumită piață." },
          { q: 'Cât durează un audit de risc?', a: "Termenul se stabilește după clarificarea activității, documentelor disponibile și scopului analizei. Cere calendarul pentru dosarul tău; nu există pe această pagină un termen confirmat pentru toate companiile." }
        ]
      },
      lines: [
        { 
          id: 'property', 
          title: 'Bunuri și proprietăți', 
          desc: 'Asigurări pentru clădiri, echipamente și stocuri. Verificăm riscurile incluse și dacă pot fi acoperite pierderile cauzate de oprirea activității, conform contractului.',
          image: '/Construcții Comerciale.jpg', 
          category: 'ASSETS', 
          link: '/property-assets',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Incendiu, explozie, trăsnet', 'Calamități naturale (cutremur, inundații)', 'Furt și vandalism'] },
            advantages: { title: "Ce verificăm", items: ["Bunurile, valorile și locațiile acceptate", "Condițiile pierderii profitului, dacă este inclusă", "Limitele, franșizele și excluderile"] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru uzură normală', 'Necesitatea sistemelor de securitate funcționale', 'Franșize obligatorii pentru anumite riscuri'] }
          }
        },
        { 
          id: 'liability', 
          title: 'Răspunderi generale', 
          desc: 'Asigurări pentru situațiile în care activitatea companiei provoacă pagube altor persoane. Te ajutăm să verifici ce răspunderi, sume și cheltuieli pot fi incluse în poliță.',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2560', 
          category: 'LIABILITY', 
          link: '/business/liability',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Vătămări corporale cauzate terților', 'Daune materiale aduse bunurilor terților', 'Poluare accidentală'] },
            advantages: { title: "Ce verificăm", items: ["Activitățile și răspunderile acceptate", "Cheltuielile de apărare, dacă sunt incluse", "Limitele și teritoriul poliței"] },
            disadvantages: { title: 'Limitări', items: ['Nu acoperă răspunderea contractuală pură', 'Excluderi pentru daune intenționate', 'Limite geografice de acoperire'] }
          }
        },
        { 
          id: 'professional', 
          title: 'Răspundere profesională', 
          desc: 'Asigurări pentru cereri de despăgubire legate de erori sau omisiuni profesionale. Verificăm activitățile asigurate, limitele și excluderile pentru profesia ta.',
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200', 
          category: 'LIABILITY', 
          link: '/business/professional',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Erori și omisiuni profesionale', 'Neglijență în prestarea serviciilor', 'Încălcarea confidențialității datelor'] },
            advantages: { title: "Ce verificăm", items: ["Serviciile profesionale declarate", "Cerințele profesiei, de confirmat separat", "Pretențiile, perioadele și limitele acceptate"] },
            disadvantages: { title: 'Limitări', items: ['Nu acoperă activități în afara specializării', 'Excluderi pentru fapte penale', 'Principiul "claims-made" (cereri depuse în perioada poliței)'] }
          }
        },
        { 
          id: 'do', 
          title: 'D&O', 
          desc: 'Asigurări de răspundere pentru directori și administratori. Analizăm ce cereri de despăgubire și cheltuieli de apărare pot fi acoperite, în condițiile contractului.',
          image: '/d&o.jpg', 
          category: 'EXECUTIVE', 
          link: '/business/do',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Decizii manageriale eronate', 'Culpa în supraveghere', 'Litigii inițiate de acționari sau angajați'] },
            advantages: { title: "Ce verificăm", items: ["Persoanele și funcțiile acceptate", "Cheltuielile de apărare, dacă sunt incluse", "Investigațiile și perioadele prevăzute"] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru fraudă dovedită', 'Nu acoperă amenzile penale', 'Limitări pentru tranzacții de fuziuni și achiziții nedeclarate'] }
          }
        },
        { 
          id: 'cyber', 
          title: 'Cyber', 
          desc: 'Asigurări pentru riscuri cibernetice, precum atacuri informatice sau scurgeri de date. Verificăm cerințele de securitate și ce costuri pot fi acoperite prin poliță.',
          image: '/cyber-insurance-3.jpg', 
          category: 'TECH', 
          link: '/business/cyber',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Atacuri ransomware și hacking', 'Întreruperea activității din cauze IT', 'Scurgeri de date cu caracter personal'] },
            advantages: { title: "Ce verificăm", items: ["Serviciile de răspuns, dacă sunt incluse", "Costurile de notificare acceptate", "Condițiile și excluderile pentru extorcare"] },
            disadvantages: { title: 'Limitări', items: ['Necesită standarde minime de securitate IT', 'Nu acoperă pierderea valorii proprietății intelectuale', 'Excluderi pentru infrastructura publică'] }
          }
        },
        { 
          id: 'cargo', 
          title: 'Cargo și transport', 
          desc: 'Asigurări pentru mărfurile transportate. Verificăm traseul, tipul mărfii, ambalarea și riscurile care pot fi incluse, potrivit condițiilor asigurătorului.',
          image: '/logistica.jpg', 
          category: 'LOGISTICS', 
          link: '/business/cargo',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Avarierea mărfurilor în timpul transportului', 'Furtul sau dispariția încărcăturii', 'Accidente ale mijlocului de transport'] },
            advantages: { title: "Ce verificăm", items: ["Riscurile acceptate, inclusiv excluderile", "Traseul și etapele de transport incluse", "Evaluarea mărfii și documentele pentru daună"] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru ambalare necorespunzătoare', 'Limitări pentru mărfuri perisabile', 'Necesitatea respectării rutelor aprobate'] }
          }
        },
        { 
          id: 'fleet', 
          title: 'Auto flotă', 
          desc: 'Te ajutăm să gestionezi asigurările mașinilor companiei. Comparăm opțiunile RCA și CASCO și verificăm condițiile pentru fiecare vehicul din flotă.',
          image: '/camionete.jpg', 
          category: 'MOBILITY', 
          link: '/business/fleet',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Accidente rutiere multiple', 'Furtul vehiculelor din flotă', 'Răspundere civilă extinsă'] },
            advantages: { title: "Ce verificăm", items: ["Inventarul vehiculelor și perioadele polițelor", "Prețul calculat pentru dosarul concret", "Asistența rutieră, dacă este inclusă"] },
            disadvantages: { title: 'Limitări', items: ['Monitorizarea riguroasă a daunelor necesară', 'Franșize per eveniment', 'Restricții privind utilizatorii vehiculelor'] }
          }
        },
        { 
          id: 'credit', 
          title: 'Asigurarea creditelor', 
          desc: 'Asigurări pentru riscul ca un client să nu își plătească facturile. Verificăm ce cumpărători, sume și situații pot fi incluse în poliță.',
          image: '/credit insurance.jpg', 
          category: 'FINANCE', 
          link: '/business/credit',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Insolvența clienților', 'Întârzierea prelungită la plată', 'Riscuri politice în export'] },
            advantages: { title: "Ce verificăm", items: ["Cumpărătorii și facturile acceptate", "Limitele și perioada de așteptare contractuală", "Serviciile de monitorizare, dacă sunt incluse"] },
            disadvantages: { title: 'Limitări', items: ['Nu acoperă disputele comerciale', 'Limite de credit per cumpărător', 'Procent de co-asigurare obligatoriu'] }
          }
        },
        { 
          id: 'construction', 
          title: 'Construcții și montaj', 
          desc: 'Asigurări pentru lucrări de construcții și montaj. Verificăm proiectul, riscurile de pe șantier și cerințele contractului, pentru a solicita oferte potrivite.',
          image: '/Constructii-montaj.jpeg', 
          category: 'ENGINEERING', 
          link: '/business/construction',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Avarii accidentale ale lucrărilor', 'Distrugerea utilajelor de șantier', 'Răspunderea față de terți în perimetrul șantierului'] },
            advantages: { title: "Ce verificăm", items: ["Etapele și lucrările acceptate", "Mentenanța, dacă este inclusă", "Cerințele investitorului și limitele propuse"] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru erori de proiectare', 'Nu acoperă penalitățile contractuale', 'Necesitatea respectării normelor de protecție a muncii'] }
          }
        },
        { 
          id: 'benefits', 
          title: 'Asigurări de Sănătate și viață pentru angajați', 
          desc: 'Asigurări pentru angajații companiei. Discutăm nevoile echipei și verificăm opțiunile disponibile, serviciile incluse și limitele fiecărui contract.',
          image: '/health.png', 
          category: 'HUMAN RESOURCES', 
          link: '/business/benefits',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Boli profesionale și accidente de muncă', 'Deces sau invaliditate a angajaților', 'Costuri medicale ridicate'] },
            advantages: { title: "Ce verificăm", items: ["Persoanele și serviciile acceptate", "Tratamentul fiscal, de verificat separat", "Clinicile și procedura prevăzute în program"] },
            disadvantages: { title: 'Limitări', items: ['Perioade de așteptare pentru anumite afecțiuni', 'Excluderi pentru boli cronice nedeclarate', 'Limite anuale de decontare'] }
          }
        },
        { 
          id: 'renewable', 
          title: 'Energia Regenerabilă', 
          desc: 'Pregătim analiza riscurilor pentru proiecte fotovoltaice, eoliene și biogaz. Verificăm echipamentele, etapele proiectului și documentele necesare. Disponibilitatea, riscurile acceptate și condițiile se confirmă individual, cu asigurătorul.',
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200', 
          category: 'ENERGY', 
          link: '/renewable-energy',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Fenomene meteo extreme (grindină, furtună)', 'Defecțiuni tehnice și electrice', 'Pierderea profitului din lipsa producției'] },
            advantages: { title: "Ce verificăm", items: ["Etapele și echipamentele proiectului", "Cerințele finanțatorului, fără promisiune de finanțare", "Riscurile, limitele și excluderile propuse"] },
            disadvantages: { title: 'Limitări', items: ['Costuri variabile în funcție de locație', 'Cerințe stricte de mentenanță preventivă', 'Excluderi pentru degradare naturală'] }
          }
        },
        { 
          id: 'agriculture', 
          title: 'Riscuri agricole', 
          desc: 'Asigurări pentru culturi, animale și utilaje agricole. Verificăm ce riscuri sunt acceptate și ce condiții trebuie îndeplinite pentru activitatea ta.',
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200', 
          category: 'AGRICULTURE', 
          link: '/business/agriculture',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Secetă, îngheț, grindină', 'Boli ale animalelor și epidemii', 'Avarii ale utilajelor agricole'] },
            advantages: { title: "Ce verificăm", items: ["Condițiile unei eventuale subvenții, de verificat separat", "Culturile, animalele și riscurile acceptate", "Procedura de constatare și documentele cerute"] },
            disadvantages: { title: 'Limitări', items: ['Perioade de franșiză temporală', 'Excluderi pentru nerespectarea tehnologiei agricole', 'Limite de recoltă asigurată'] }
          }
        }
      ]
    },
    reinsurance: {
      title: 'Reasigurare & Fronting',
      titleItalic: 'pentru riscuri mari.',
      subtitle: "Discutăm pregătirea unui dosar pentru riscuri mari sau complexe. Disponibilitatea programului, participanții și capacitatea de reasigurare se confirmă separat, după analiza riscului.",
      cta1: "Discută despre dosarul de risc",
      cta2: "Solicită o analiză a posibilităților",
      faq: {
        title: 'Întrebări Frecvente - Reasigurări',
        items: [
          { q: 'Când are nevoie o companie de reasigurare facultativă?', a: "Reasigurarea facultativă poate fi analizată separat pentru un risc mare sau atipic. Asigurătorul și eventualii reasigurători verifică informațiile, capacitatea și condițiile propuse. Existența unui proiect mare nu confirmă singură acceptarea lui." },
          { q: 'Ce înseamnă Fronting în asigurări?', a: "Într-o structură de fronting, polița locală este emisă de un asigurător, iar transferul unei părți din risc este stabilit prin acordurile de reasigurare. Brokerul nu devine asigurătorul emitent. Participanții, procentele și cerințele locale trebuie verificate pentru programul concret." },
          { q: 'Cu ce piețe de reasigurare colaborați?', a: "Participarea unei anumite piețe sau a unui reasigurător se confirmă pentru fiecare dosar. Cere identificarea participanților, verificarea capacității disponibile și informațiile financiare relevante. Pagina nu confirmă acces direct la Lloyd's sau un rating minim garantat." },
          { q: 'Care este diferența dintre reasigurarea proporțională și neproporțională?', a: "O structură proporțională împarte primele și daunele potrivit proporțiilor convenite. O structură neproporțională folosește praguri și limite stabilite în acord. Mecanismul exact, evenimentele și obligațiile participanților se verifică în documentele programului." }
        ]
      },
      lines: [
        { 
          id: 'facultative', 
          title: 'Reasigurare Facultativă', 
          desc: "Pentru un risc sau proiect individual, pregătește descrierea, valorile și istoricul relevant. Posibilitatea unei plasări facultative și condițiile ei se confirmă după analiza participanților; nu sunt promise prin această pagină.",
          image: '/images/optimized-20261121-v1/reinsurance-1.webp',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Expuneri individuale care depășesc capacitatea pieței locale', 'Riscuri industriale complexe', 'Proiecte de infrastructură majore'] },
            advantages: { title: "Ce analizăm", items: ["Analiza separată a riscului propus", "Verificarea participanților și a informațiilor financiare", "Compararea limitelor și condițiilor disponibile"] },
            disadvantages: { title: 'Limitări', items: ['Proces de subscriere detaliat și riguros', 'Costuri influențate de condițiile pieței globale'] }
          }
        },
        { 
          id: 'treaty', 
          title: 'Tratate de Reasigurare', 
          desc: "Pentru un portofoliu de polițe, discută datele despre expuneri, daune și limitele urmărite. O structură de tratat, disponibilitatea ei și efectele financiare necesită analiză specifică, nu se deduc din denumire.",
          image: '/traty reinsurance-2.jpg', 
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Acumulări de riscuri catastrofale (Cutremur, Inundații)', 'Fluctuații majore ale ratei daunei', 'Protecția capitalului și a solvabilității'] },
            advantages: { title: "Ce analizăm", items: ["Analiza acumulării expunerilor", "Compararea limitelor și a capacității propuse", "Verificarea implicațiilor asupra capitalului cu specialiștii relevanți"] },
            disadvantages: { title: 'Limitări', items: ['Structuri contractuale complexe', 'Necesită analize actuariale avansate'] }
          }
        },
        { 
          id: 'fronting', 
          title: 'Programe de Fronting', 
          desc: "Pentru un program internațional, verifică dacă un asigurător poate emite polița locală și în ce condiții poate participa la structura de reasigurare. Rolul ING Broker este de intermediere, când posibilitatea este confirmată. Aspectele juridice și fiscale necesită verificare separată.", 
          image: '/fronting.png', 
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Cerințe stricte de conformitate locală', 'Managementul programelor globale de asigurare', 'Risc de credit al reasigurătorului'] },
            advantages: { title: "Ce analizăm", items: ["Verificarea cerințelor locale aplicabile", "Compararea poliței locale cu documentele programului", "Clarificarea costurilor și a rolurilor participanților"] },
            disadvantages: { title: 'Limitări', items: ['Costuri administrative de fronting (Fronting Fee)', 'Dependență de rating-ul asigurătorului local emitent'] }
          }
        }
      ]
    },
    about: {
      hero: { 
        title: 'Despre ING Broker',
        subtitle: 'Insurance ING Broker SRL este un broker de asigurări din Republica Moldova. Te ajutăm să înțelegi ofertele și să alegi o asigurare potrivită pentru tine sau afacerea ta.'
      },
      intro: 'Lucrăm cu persoane fizice și companii din Moldova. Îți explicăm opțiunile de asigurare, comparăm ofertele disponibile și te ajutăm să înțelegi condițiile înainte de a lua o decizie.',
      whoWeAre: {
        title: 'Cine Suntem',
        content: 'Suntem o echipă de brokeri de asigurări. Începem cu întrebările tale: ce vrei să asiguri, ce riscuri te preocupă și ce buget ai. Apoi discutăm ofertele și diferențele dintre ele.'
      },
      mission: { 
        title: 'Misiunea Noastră', 
        content: 'Vrem ca fiecare client să înțeleagă asigurarea pe care o alege: cât plătește, ce acoperă polița, ce nu acoperă și ce are de făcut în caz de daună.'
      },
      vision: { 
        title: 'Viziunea Noastră', 
        content: 'Ne dorim ca asigurările să fie mai ușor de înțeles și de accesat în Moldova. Explicăm termenii în cuvinte simple și căutăm opțiuni potrivite nevoilor clienților.'
      },
      history: {
        title: 'Istoricul Nostru',
        content: "Insurance ING Broker SRL este un broker de asigurări din Republica Moldova. Pentru informații despre istoricul, autorizarea sau certificările companiei, solicită documentele relevante și verifică perioada lor de valabilitate."
      },
      values: {
        title: 'Valorile Noastre',
        items: ['Atenție la nevoile clientului', 'Lucru bine organizat', 'Corectitudine', 'Explicații clare', 'Colaborare', 'Responsabilitate', 'Servicii ușor de folosit']
      },
      differentiators: {
        title: 'Ce Ne Diferențiază',
        items: [
          { title: "Date clare despre companie", desc: "Poți solicita datele actuale ale companiei și clarificări despre rolul brokerului înainte de colaborare." },
          { title: "Explicații accesibile", desc: "Explicăm termenii de asigurare și pașii practici, fără să presupunem că ai experiență în domeniu." },
          { title: "Verificarea documentelor", desc: "Comparăm documentele și condițiile disponibile. O certificare sau o autorizare se confirmă din documentele actuale, nu dintr-o promisiune comercială." },
          { title: "Analiza posibilităților", desc: "Pentru cerințe complexe, clarificăm participanții și opțiunile disponibile, fără să promitem acces la o anumită piață." },
          { title: "Sprijin pentru decizie", desc: "Discutăm riscurile, costurile și limitările relevante înainte să alegi o variantă." }
        ]
      },
      corporate: { title: 'Datele companiei', content: "Denumire: Insurance ING Broker SRL,\\nIDNO: 1017600019386,\\nAdresă: municipiul Chișinău, strada Pan Halippa 9, Republica Moldova,\\nCEO: Dascalu Ion" },
      cta: { title: 'Discută cu noi', subtitle: 'Spune-ne ce vrei să asiguri. Te ajutăm să înțelegi opțiunile și informațiile necesare pentru o ofertă.', btn: 'Cere o consultație' }
    },
    propertyAssets: {
      title: 'Asigurarea Bunurilor și Proprietăților',
      subtitle: "Analizăm asigurarea clădirilor, echipamentelor și stocurilor. Bunurile acceptate, riscurile și limitele depind de condițiile asigurătorului.",
      intro: "Pregătește inventarul bunurilor, locațiile, valorile și activitatea companiei. ING Broker te ajută să compari opțiunile disponibile. Acceptarea riscului și soluționarea daunelor aparțin asigurătorului, potrivit contractului.",
      industries: {
        title: "Bunuri și expuneri de analizat",
        items: [
          { title: 'Bunuri Imobile', desc: 'Construcții comerciale, clădiri de birouri, fabrici, depozite și alte structuri fizice.', image: '/Construcții Comerciale.jpg' },
          { title: 'Bunuri Mobile', desc: 'Utilaje pentru business, echipamente industriale, tehnică de calcul și inventar.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Stocuri și Mărfuri', desc: "Materii prime, produse finite și mărfuri depozitate: verifică inventarul, valorile și condițiile de păstrare.", image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Întreruperea Afacerii', desc: "Verifică separat dacă oprirea activității și pierderile financiare asociate pot fi incluse, pentru ce evenimente și perioade.", image: '/business-intrertuption.jpg' }
        ]
      },
      analysis: {
        risks: {
          title: "Riscuri de verificat în ofertă",
          items: [
            'Incendiu, trăsnet, explozie',
            'Calamități naturale (cutremur, inundații, furtună)',
            'Furt prin efracție sau tâlhărie',
            'Avarii accidentale ale echipamentelor',
            'Vandalism și daune intenționate'
          ]
        },
        advantages: {
          title: "Ce comparăm",
          items: [
            "Sumele și limitele pentru bunurile acceptate",
            "Condițiile privind întreruperea activității, dacă este inclusă",
            "Activitățile și locațiile declarate",
            "Procedura și documentele pentru notificarea unei daune",
            "Franșizele, excluderile și obligațiile contractuale"
          ]
        },
        disadvantages: {
          title: "Limitări de verificat în contract",
          items: [
            'Uzura normală și deprecierea în timp',
            'Daune intenționate provocate de asigurat',
            'Război, terorism sau confiscare (fără clauze speciale)',
            'Defecte de fabricație acoperite de garanție',
            'Nerespectarea normelor de siguranță'
          ]
        }
      },
      expertiseTitle: 'Asigurări pentru bunurile companiei',
      essentialTitle: 'De ce să alegi ING Broker?',
      whyUs: "Comparăm ofertele disponibile și explicăm prețul, limitele, franșiza și excluderile. La daună, te îndrumăm privind documentele și pașii de urmat; asigurătorul analizează cererea și stabilește plata potrivit contractului.",
      ctaTitle: "Discută despre bunurile companiei",
      ctaCall: 'Solicită ofertă',
      ctaEmail: 'Trimite email'
    },
    renewableEnergy: {
      title: 'Asigurarea Energiei Regenerabile',
      subtitle: "Pregătirea dosarului de risc pentru un proiect energetic. Disponibilitatea asigurării și condițiile se confirmă individual.",
      intro: "Separă construcția, exploatarea și mentenanța proiectului. Pregătește echipamentele, locația, valorile și responsabilitățile contractuale. Verificăm posibilitățile de analiză, fără să promitem acoperirea întregului proiect sau acceptarea unui risc.",
      industries: {
        title: "Tehnologii și riscuri de analizat",
        items: [
          { title: 'Panouri Solare (Fotovoltaice)', desc: "Pentru panouri fotovoltaice, descrie amplasarea, montajul și echipamentele. Grindina, incendiul, furtul și pierderea venitului se verifică separat în condițiile propuse." },
          { title: 'Turbine Eoliene', desc: "Pentru turbine eoliene, pregătește datele tehnice și mentenanța. Verifică separat avariile mecanice, trăsnetul, palele și consecințele opririi producției." },
          { title: 'Stocarea Energiei (Baterii)', desc: "Pentru baterii, descrie tehnologia, instalarea și măsurile de siguranță. Incendiul, degradarea și erorile de integrare nu sunt automat acoperite; condițiile și excluderile trebuie verificate." },
          { title: 'Hidrocentrale Electrice', desc: "Pentru infrastructura hidro, pregătește amplasarea, echipamentele și responsabilitățile proiectului. Inundațiile, avariile turbinelor și impactul asupra mediului necesită verificări distincte.", image: '/hidrocentrala.jpg' }
        ]
      },
      analysis: {
        risks: { title: "Expuneri de analizat, nu acoperiri confirmate", items: ['Fenomene meteo extreme (grindină, uragan)', 'Defecțiuni mecanice și electrice', 'Furt, vandalism și atacuri cibernetice', 'Pierderi de profit (Business Interruption)'] },
        advantages: { title: "Ce verificăm în propunere", items: ["Etapele, echipamentele și riscurile acceptate", "Cerințele finanțatorului, fără promisiunea obținerii finanțării", "Limitele, franșizele și procedura de notificare"] },
        disadvantages: { title: "Condiții de clarificat", items: ['Costuri de primă în funcție de locație', 'Complexitatea procesului de despăgubire', 'Necesitatea mentenanței riguroase'] }
      },
      whyUs: "Un proiect energetic poate avea contracte și perioade diferite pentru construcție, operare și mentenanță. Compară documentele pentru fiecare etapă și verifică separat eventualele pierderi de venit. Analiza nu confirmă disponibilitatea unei polițe sau plata unei daune.",
      expertiseTitle: "Înțelege riscurile proiectului",
      essentialTitle: "Cum pregătești analiza",
      ctaTitle: "Discută posibilitățile de analiză",
      ctaCall: 'Sună acum',
      ctaEmail: 'Trimite Email'
    },
    seo: {
      home: {
        title: 'ING Broker Moldova | Asigurări pentru persoane și companii',
        description: 'ING Broker te ajută să alegi asigurări pentru mașină, locuință, călătorii și afaceri în Moldova. Compară ofertele și înțelege condițiile poliței.'
      },
      business: {
        title: 'Asigurări Corporate și Managementul Riscului | ING Broker Moldova',
        description: 'Asigurări pentru bunuri, răspundere, transport și flote în Moldova. ING Broker te ajută să analizezi riscurile companiei și ofertele disponibile.'
      },
      reinsurance: {
        title: "Reasigurare și fronting: analiza posibilităților | ING Broker",
        description: "Pregătirea dosarului pentru riscuri complexe. Participanții, capacitatea și posibilitatea unei structuri de reasigurare sau fronting se confirmă separat."
      },
      about: {
        title: 'Despre Noi | Insurance ING Broker SRL | Expertiză și Încredere',
        description: 'Află cum lucrează Insurance ING Broker SRL, broker de asigurări din Republica Moldova. Explicații despre polițe și îndrumare pentru persoane și companii.'
      },
      propertyAssets: {
        title: 'Asigurarea Bunurilor și Proprietăților Corporate | ING Broker',
        description: "Asigurarea bunurilor companiei în Moldova: inventar, riscuri, limite și întreruperea activității de verificat în oferta asigurătorului."
      },
      renewableEnergy: {
        title: 'Asigurări Energie Regenerabilă | Parcuri Solare și Eoliene | ING Broker',
        description: "Dosarul de risc pentru proiecte energetice în Moldova: echipamente, etape și condiții de verificat. Disponibilitatea asigurării se confirmă separat."
      },
      terms: {
        title: 'Termeni și Condiții | Insurance ING Broker SRL',
        description: 'Cadrul legal pentru utilizarea serviciilor ING Broker. Transparență și profesionalism în relația cu clienții noștri.'
      },
      privacy: {
        title: 'Politica de Confidențialitate | Protecția Datelor | ING Broker',
        description: "Informații despre datele colectate prin site, scopurile prelucrării și opțiunile de contact. Consultă politica și condițiile aplicabile."
      }
    }
  },
  ru: {
    ...businessProductsTranslations.ru,
    nav: ['Персональное', 'Корпоративные решения', 'Перестрахование', 'О нас', 'Контакт'],
    clientAccount: 'Рассчитать Онлайн',
    logoAlt: 'Логотип ING Broker',
    hero: {
      segment: 'Персональный сегмент',
      title: 'Архитектура',
      titleItalic: 'Вашей Безопасности.',
      description: 'Глобальная экспертиза в управлении рисками, строго адаптированная к вашим личным потребностям. От передовой мобильности до безопасности имущества, Insurance ING Broker SRL определяет золотой стандарт защиты.',
      cta1: 'Рассчитать Онлайн',
      cta2: 'Запросить консультацию',
      scroll: 'Прокрутите для изучения'
    },
    trustStripBenefits: [
      "Брокер по страхованию в Молдове",
      "Индивидуальная консультация",
      "Разъяснение действий при убытке",
      "Понятное объяснение условий"
    ],
    intro: {
      title: 'Экспертиза в',
      titleItalic: 'Управлении Рисками.',
      p1: "В ING Broker можно обсудить страхование автомобиля, жилья, поездок и несчастных случаев. Уточняем ваши потребности и объясняем доступные варианты.",
      p2: "Перед выбором сравниваем цену, включенные риски и случаи, когда полис не предусматривает выплату. Также объясняем, как уведомить об убытке."
    },
    productLabels: {
      destined: 'Для кого',
      coverage: 'Покрытие'
    },
    comparison: {
      title: 'Какой тип страхования вам подходит?',
      subtitle: 'Краткий обзор ваших потребностей в защите для правильного выбора.',
      cards: [
        { title: 'Мобильность', desc: 'Выберите ОСАГО для обязательства, Зеленую карту для выездов за границу или КАСКО для защиты ваших инвестиций в автомобиль.' },
        { title: 'Путешествия и здоровье', desc: "Проверьте медицинское страхование для поездки и страхование от несчастных случаев. Покрытие зависит от выбранного полиса." },
        { title: 'Имущество', desc: 'Обезопасьте свой самый важный актив: дом. Защита от бедствий и гражданская ответственность перед соседями.' }
      ]
    },
    whyUs: {
      label: 'Почему ING Broker',
      title: 'Авторитет в Брокерских Услугах,',
      titleItalic: 'Посвященный Вам.',
      items: [
        { title: "Начинаем с ваших потребностей", desc: "Уточняем, что вы хотите застраховать, и объясняем возможные варианты." },
        { title: "Сравниваем предложения", desc: "Помогаем сравнить цену, лимиты выплат и исключения, то есть ситуации без покрытия." },
        { title: "Объясняем условия", desc: "До заключения договора обсуждаем платежи, покрытие и ваши обязанности." },
        { title: "Разъясняем действия при убытке", desc: "Объясняем порядок и документы для заявления. Страховщик рассматривает его согласно договору." }
      ],
      years: "Лет деятельности"
    },
    methodology: {
      title: 'Методология',
      titleItalic: 'ING Broker.',
      subtitle: 'Строгий процесс, извлеченный из стандартов корпоративного брокериджа, примененный для вашей личной безопасности.',
      steps: [
        {
          number: '01',
          title: 'Аудит Рисков',
          desc: 'Мы не продаем полисы, мы анализируем риски. Мы выявляем уязвимости вашего имущества и образа жизни, чтобы определить прочную основу защиты.'
        },
        {
          number: '02',
          title: 'Архитектура Решения',
          desc: "Объясняем доступные предложения и различия между ними, чтобы вы могли принять обоснованное решение."
        },
        {
          number: '03',
          title: 'Фидуциарное Управление',
          desc: "Отвечаем на вопросы о полисе, продлении и действиях при убытке. Решение по выплате принимает страховщик согласно договору."
        }
      ]
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Все, что вам нужно знать о вашем личном страховании.'
    },
    finalCta: {
      title: 'Готовы к',
      subtitle: 'новому уровню безопасности?',
      cta1: 'Выбрать подходящий продукт',
      cta2: 'Обсудить с консультантом'
    },
    corporateGateway: {
      label: 'B2B и Корпоративные Клиенты',
      title: 'Комплексные Решения для Бизнеса',
      desc: "Помогаем выбрать страхование имущества, деятельности и сотрудников компании. Начинаем с рисков бизнеса и проверяем доступные варианты.",
      btnBusiness: 'Узнать о Корпоративных Решениях',
      btnReinsurance: 'Перестрахование и Фронтинг'
    },
    footer: {
      desc: "ING Broker помогает выбрать страхование для вас и бизнеса. Объясняем доступные предложения, условия полиса и действия при убытке.",
      sections: {
        products: 'Продукты',
        company: 'Компания',
        legal: 'Юридическая информация'
      },
      legal: ['Предложения', 'Условия использования', 'Политика конфиденциальности'],
      designBy: 'Дизайн от',
      rights: '© 2026 Insurance ING Broker SRL. Все права защищены.'
    },
    insights: {
      label: 'Ресурсы и инсайты',
      title: 'Ваш гид в страховании.',
      cta: 'Посмотреть все статьи',
      articles: [
        {
          title: 'ОСАГО для молодых водителей: финансовые риски и скрытые расходы в Молдове',
          desc: 'Узнайте все о проблемах и стоимости автострахования для молодых водителей в Республике Молдова.',
          link: '/news/rca-pentru-soferi-tineri-riscuri-financiare-si-costuri-ascunse-in-moldova',
          image: 'https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=800'
        },
        {
          title: 'Как определяется цена страховки ОСАГО? Руководство по доступной цене ОСАГО',
          desc: "Узнайте, какие данные влияют на расчет RCA и как проверить цену и условия предложения.",
          link: '/news/cum-se-determin%C4%83-pre%C8%9Bul-unei-asigur%C4%83ri-rca-ghid-pentru-un-pre%C8%9B-rca-accesibil',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    business: {
      title: 'Корпоративные решения',
      titleItalic: 'для лидеров рынка.',
      subtitle: "Помогаем рассмотреть страхование имущества, деятельности и сотрудников компании. Анализируем риски бизнеса и сравниваем условия доступных предложений.",
      cta1: 'Запросить аудит рисков',
      cta2: 'Обсудить с экспертом',
      faq: {
        title: 'Часто задаваемые вопросы',
        items: [
          { q: 'Какие виды корпоративного страхования вы предлагаете?', a: "Можно обсудить риски имущества, ответственности, перевозок и сотрудников компании. Доступность продукта, принимаемые виды деятельности и условия подтверждаются по каждому случаю до предложения." },
          { q: 'Как мне поможет B2B страховой брокер?', a: "ING Broker помогает описать риски и сравнить доступные предложения, включая цену, лимиты и исключения. При убытке объясняем порядок и необходимые документы. Страховщик принимает риск и решает вопрос по заявлению согласно договору." },
          { q: 'Предлагаете ли вы решения для сложных или международных рисков?', a: "Для сложных или международных рисков готовим вопросы и сведения для оценки. Возможность перестраховочной или фронтинговой структуры, участники и емкость подтверждаются отдельно. Страница не обещает доступ к определенному рынку." },
          { q: 'Сколько времени занимает аудит рисков?', a: "Срок определяется после уточнения деятельности, доступных документов и цели оценки. Запросите график для своего досье. На странице нет подтвержденного срока для всех компаний." }
        ]
      },
      lines: [
        { 
          id: 'property', 
          title: 'Имущество и активы', 
          desc: "Страхование зданий, оборудования и запасов: проверяем включенные риски и возможность покрытия последствий остановки деятельности согласно договору.", 
          image: '/Construcții Comerciale.jpg', 
          category: 'АКТИВЫ', 
          link: '/property-assets',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Пожар, взрыв, удар молнии', 'Стихийные бедствия (землетрясение, наводнение)', 'Кража и вандализм'] },
            advantages: { title: "Что проверяем", items: ["Принятые имущество, стоимости и адреса", "Условия потери прибыли, если включена", "Лимиты, франшизы и исключения"] },
            disadvantages: { title: 'Ограничения', items: ['Исключения для естественного износа', 'Необходимость исправных систем безопасности', 'Обязательные франшизы для определенных рисков'] }
          }
        },
        { 
          id: 'liability', 
          title: 'Общая ответственность', 
          desc: "Для случаев, когда деятельность компании причиняет ущерб третьим лицам. Проверяем, какие виды ответственности, суммы и расходы могут быть включены в полис.", 
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2560', 
          category: 'ОТВЕТСТВЕННОСТЬ', 
          link: '/business/liability',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Телесные повреждения третьим лицам', 'Материальный ущерб имуществу третьих лиц', 'Случайное загрязнение'] },
            advantages: { title: "Что проверяем", items: ["Принятые виды деятельности и ответственности", "Расходы на защиту, если включены", "Лимиты и территория полиса"] },
            disadvantages: { title: 'Ограничения', items: ['Не покрывает чистую контрактную ответственность', 'Исключения для умышленного ущерба', 'Географические ограничения покрытия'] }
          }
        },
        { 
          id: 'professional', 
          title: 'Профессиональная ответственность', 
          desc: "Для претензий, связанных с профессиональными ошибками или упущениями. Проверяем принимаемые виды деятельности, лимиты и исключения для вашей профессии.", 
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200', 
          category: 'ОТВЕТСТВЕННОСТЬ', 
          link: '/business/professional',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Профессиональные ошибки и упущения', 'Небрежность при оказании услуг', 'Нарушение конфиденциальности данных'] },
            advantages: { title: "Что проверяем", items: ["Заявленные профессиональные услуги", "Требования профессии для отдельной проверки", "Принятые претензии, периоды и лимиты"] },
            disadvantages: { title: 'Ограничения', items: ['Не покрывает деятельность вне специализации', 'Исключения для уголовных преступлений', 'Принцип "claims-made" (претензии, предъявленные в период действия полиса)'] }
          }
        },
        { 
          id: 'renewable', 
          title: 'Энергия', 
          desc: "Готовим оценку рисков солнечных, ветровых и биогазовых проектов. Проверяем оборудование, этапы и документы. Доступность, принимаемые риски и условия подтверждаются отдельно со страховщиком.",
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200', 
          category: 'ЭНЕРГЕТИКА', 
          link: '/renewable-energy',
          analysis: {
            risks: { title: 'Основные риски', items: ['Экстремальные погодные явления (град, шторм)', 'Механические и электрические неисправности', 'Кража, вандализм и кибератаки', 'Перерыв в производстве'] },
            advantages: { title: "Что проверяем", items: ["Этапы и оборудование проекта", "Требования кредитора без обещания финансирования", "Предлагаемые риски, лимиты и исключения"] },
            disadvantages: { title: 'Проблемы и соображения', items: ['Стоимость премии зависит от локации', 'Сложность процесса урегулирования', 'Необходимость строгого тех. обслуживания'] }
          }
        },
        { 
          id: 'agriculture', 
          title: 'Сельскохозяйственные риски', 
          desc: "Обсуждаем риски культур, животных и сельскохозяйственной техники. Проверяем принимаемые риски и условия для конкретной деятельности. Субсидия не предоставляется автоматически.", 
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200', 
          category: 'СЕЛЬСКОЕ ХОЗЯЙСТВО', 
          link: '/business/agriculture',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Засуха, заморозки, град', 'Болезни животных и эпидемии', 'Поломки сельскохозяйственной техники'] },
            advantages: { title: "Что проверяем", items: ["Условия возможной субсидии для отдельной проверки", "Принятые культуры, животные и риски", "Порядок осмотра и требуемые документы"] },
            disadvantages: { title: 'Ограничения', items: ['Периоды временной франшизы', 'Исключения при нарушении агротехнологий', 'Лимиты застрахованного урожая'] }
          }
        }
      ]
    },
    about: {
      hero: { 
        title: 'Авторитет в области брокериджа и управления рисками в Молдове', 
        subtitle: 'Insurance ING Broker SRL - Ваш стратегический архитектор в управлении рисками и глобальном перестраховании.' 
      },
      intro: "Работаем с частными лицами и компаниями Молдовы. Объясняем варианты страхования, сравниваем доступные предложения и помогаем понять условия до принятия решения.",
      mission: { 
        title: 'Наша Миссия', 
        content: "Стремимся к тому, чтобы каждый клиент понимал выбранное страхование: платежи, покрытые риски, исключения и действия при убытке." 
      },
      vision: { 
        title: 'Наше Видение', 
        content: 'Развивать множество страховых услуг в Молдове. Импортировать страховые продукты, которых не хватает на местном рынке, адаптировать и развивать их здесь. Обучать граждан в области страхования, становясь базовым компонентом в развитии финансовой культуры нашего общества.' 
      },
      whyUs: {
        title: 'Почему мы?',
        subtitle: 'Наши конкурентные преимущества, которые делают нас вашим надежным партнером.',
        items: [
          { title: "Понятные данные компании", desc: "До сотрудничества можно запросить актуальные данные компании и уточнить роль брокера." },
          { title: "Доступные объяснения", desc: "Объясняем страховые термины и практические шаги без предположения, что у вас есть опыт в страховании." },
          { title: "Проверка документов", desc: "Сравниваем доступные документы и условия. Сертификация или разрешение подтверждаются актуальными документами, а не рекламным обещанием." },
          { title: "Оценка возможностей", desc: "Для сложных запросов уточняем участников и доступные варианты без обещаний доступа к определенному рынку." },
          { title: "Помощь в принятии решения", desc: "До выбора обсуждаем соответствующие риски, расходы и ограничения." }
        ]
      },
      corporate: { title: 'Реквизиты и Корпоративные Данные', content: "Наименование: Insurance ING Broker SRL,\\nIDNO: 1017600019386,\\nАдрес: municipiul Chișinău, strada Pan Halippa 9, Republica Moldova,\\nCEO: Dascalu Ion" },
      cta: { title: 'Стратегическое Партнерство', subtitle: "Расскажите, что вы хотите застраховать. Обсудим варианты и сведения, необходимые для оценки.", btn: 'Запросить Стратегический Консалтинг' }
    },
    propertyAssets: {
      title: 'Страхование Имущества и Активов',
      subtitle: "Анализируем страхование зданий, оборудования и запасов. Принятые объекты, риски и лимиты зависят от условий страховщика.",
      intro: "Подготовьте перечень имущества, адреса, стоимости и описание деятельности компании. ING Broker помогает сравнить доступные варианты. Страховщик принимает риск и рассматривает убытки согласно договору.",
      industries: {
        title: "Имущество и риски для оценки",
        items: [
          { title: 'Недвижимое имущество', desc: 'Коммерческие здания, офисные здания, фабрики, склады и другие физические структуры.', image: '/Construcții Comerciale.jpg' },
          { title: 'Движимое имущество', desc: 'Бизнес-оборудование, промышленное оборудование, вычислительная техника и инвентарь.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Запасы и товары', desc: "Сырье, готовая продукция и товары на складе: проверьте перечень, стоимости и условия хранения.", image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Перерыв в производстве', desc: "Отдельно проверьте, можно ли включить остановку деятельности и связанные финансовые потери, для каких событий и периодов.", image: '/business-intrertuption.jpg' }
        ]
      },
      analysis: {
        risks: {
          title: "Риски для проверки в предложении",
          items: [
            'Пожар, удар молнии, взрыв',
            'Стихийные бедствия (землетрясение, наводнение, буря)',
            'Кража со взломом или грабеж',
            'Случайное повреждение оборудования',
            'Вандализм и умышленный ущерб'
          ]
        },
        advantages: {
          title: "Что сравниваем",
          items: [
            "Суммы и лимиты по принятому имуществу",
            "Условия перерыва в деятельности, если он включен",
            "Заявленные виды деятельности и адреса",
            "Порядок и документы для уведомления об убытке",
            "Франшизы, исключения и договорные обязанности"
          ]
        },
        disadvantages: {
          title: "Ограничения для проверки в договоре",
          items: [
            'Нормальный износ и обесценивание с течением времени',
            'Умышленный ущерб, причиненный страхователем',
            'Война, терроризм или конфискация (без специальных оговорок)',
            'Производственные дефекты, покрываемые гарантией',
            'Несоблюдение правил техники безопасности'
          ]
        }
      },
      expertiseTitle: "Страхование имущества компании",
      essentialTitle: 'Почему стоит выбрать ING Broker?',
      whyUs: "Сравниваем доступные предложения и объясняем цену, лимиты, франшизу и исключения. При убытке разъясняем документы и дальнейшие действия. Страховщик рассматривает заявление и определяет выплату согласно договору.",
      ctaTitle: "Обсудите имущество компании",
      ctaCall: 'Запросить предложение',
      ctaEmail: 'Отправить email'
    },
    renewableEnergy: {
      title: 'Страхование возобновляемой энергии',
      subtitle: "Подготовка досье риска энергетического проекта. Доступность страхования и условия подтверждаются отдельно.",
      intro: "Разделите строительство, эксплуатацию и обслуживание проекта. Подготовьте сведения об оборудовании, месте, стоимости и договорных обязанностях. Проверяем возможности оценки без обещаний покрытия всего проекта или принятия риска.",
      industries: {
        title: "Технологии и риски для оценки",
        items: [
          { title: 'Солнечные панели (Фотоэлектрические)', desc: "Для фотоэлектрических панелей опишите размещение, монтаж и оборудование. Град, пожар, кража и потеря дохода проверяются отдельно в предлагаемых условиях." },
          { title: 'Ветряные турбины', desc: "Для ветровых турбин подготовьте технические данные и сведения об обслуживании. Отдельно проверьте механические повреждения, молнию, лопасти и последствия остановки производства." },
          { title: 'Хранение энергии (Батареи)', desc: "Для батарей опишите технологию, установку и меры безопасности. Пожар, деградация и ошибки интеграции не покрываются автоматически; проверьте условия и исключения." },
          { title: 'Гидроэлектростанции', desc: "Для гидроинфраструктуры подготовьте сведения о месте, оборудовании и обязанностях участников проекта. Наводнение, повреждение турбин и воздействие на среду требуют отдельных проверок.", image: '/hidrocentrala.jpg' }
        ]
      },
      analysis: {
        risks: { title: "Риски для оценки, не подтвержденное покрытие", items: ['Экстремальные погодные явления (град, ураган)', 'Механические и электрические неисправности', 'Кража, вандализм и кибератаки', 'Потеря прибыли (Business Interruption)'] },
        advantages: { title: "Что проверяем в предложении", items: ["Принятые этапы, оборудование и риски", "Требования кредитора без обещания финансирования", "Лимиты, франшизы и порядок уведомления"] },
        disadvantages: { title: "Условия для уточнения", items: ['Стоимость премии в зависимости от местоположения', 'Сложность процесса возмещения', 'Необходимость строгого технического обслуживания'] }
      },
      whyUs: "У энергетического проекта могут быть разные договоры и периоды строительства, эксплуатации и обслуживания. Сопоставьте документы по каждому этапу и отдельно проверьте возможную потерю дохода. Оценка не подтверждает доступность полиса или выплату по убытку.",
      expertiseTitle: "Разберитесь в рисках проекта",
      essentialTitle: "Как подготовить оценку",
      ctaTitle: "Обсудите возможности оценки",
      ctaCall: 'Позвонить сейчас',
      ctaEmail: 'Отправить Email'
    },
    reinsurance: {
      title: 'Перестрахование и Фронтинг',
      titleItalic: 'потенциал и экспертиза.',
      subtitle: "Обсуждаем подготовку досье для крупных или сложных рисков. Доступность программы, участники и перестраховочная емкость подтверждаются отдельно после оценки риска.",
      cta1: "Обсудить досье риска",
      cta2: "Запросить оценку возможностей",
      faq: {
        title: 'Часто задаваемые вопросы - Перестрахование',
        items: [
          { q: 'Когда компании необходимо факультативное перестрахование?', a: "Факультативное перестрахование может рассматриваться отдельно для крупного или нетипичного риска. Страховщик и возможные перестраховщики проверяют сведения, емкость и предлагаемые условия. Размер проекта сам по себе не подтверждает его принятие." },
          { q: 'Что такое Фронтинг в страховании?', a: "При фронтинге местный полис выпускает страховщик, а передача части риска определяется перестраховочными соглашениями. Брокер не становится страховщиком, выпускающим полис. Участники, доли и местные требования проверяются для конкретной программы." },
          { q: 'С какими рынками перестрахования вы сотрудничаете?', a: "Участие определенного рынка или перестраховщика подтверждается по каждому досье. Уточните участников, доступную емкость и соответствующие финансовые сведения. Страница не подтверждает прямой доступ к Lloyd's или гарантированный минимальный рейтинг." },
          { q: 'В чем разница между пропорциональным и непропорциональным перестрахованием?', a: "При пропорциональной структуре премии и убытки распределяются в согласованных долях. При непропорциональной структуре применяются предусмотренные соглашением пороги и лимиты. Точный механизм, события и обязанности участников проверяются в документах программы." }
        ]
      },
      lines: [
        { 
          id: 'facultative', 
          title: 'Факультативное перестрахование', 
          desc: "Для отдельного риска или проекта подготовьте описание, стоимости и соответствующую историю. Возможность факультативного размещения и его условия подтверждаются после оценки участниками, а не этой страницей.", 
          image: '/images/optimized-20261121-v1/reinsurance-1.webp',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Индивидуальные риски, превышающие емкость местного рынка', 'Сложные промышленные риски', 'Крупные инфраструктурные проекты'] },
            advantages: { title: "Что проверяем", items: ["Отдельная оценка предложенного риска", "Проверка участников и финансовых сведений", "Сравнение доступных лимитов и условий"] },
            disadvantages: { title: 'Ограничения', items: ['Детальный и строгий процесс андеррайтинга', 'Затраты зависят от конъюнктуры мирового рынка'] }
          }
        },
        { 
          id: 'treaty', 
          title: 'Облигаторное перестрахование', 
          desc: "Для страхового портфеля обсудите сведения об экспозициях, убытках и требуемых лимитах. Структура договора, ее доступность и финансовые последствия требуют отдельной оценки и не следуют из названия.", 
          image: '/traty reinsurance-2.jpg', 
          analysis: {
            risks: { title: 'Целевые риски', items: ['Кумуляция катастрофических рисков (Землетрясение, Наводнение)', 'Значительные колебания коэффициента убыточности', 'Защита капитала и платежеспособности'] },
            advantages: { title: "Что проверяем", items: ["Оценка накопления рисков", "Сравнение предлагаемых лимитов и емкости", "Проверка влияния на капитал профильными специалистами"] },
            disadvantages: { title: 'Ограничения', items: ['Сложные договорные структуры', 'Требует глубокого актуарного анализа'] }
          }
        },
        { 
          id: 'fronting', 
          title: 'Программы Фронтинга', 
          desc: "Для международной программы уточните, может ли страховщик выпустить местный полис и на каких условиях участвовать в перестраховочной структуре. ING Broker выступает посредником, когда такая возможность подтверждена. Юридические и налоговые вопросы требуют отдельной проверки.", 
          image: '/fronting.png', 
          analysis: {
            risks: { title: 'Целевые риски', items: ['Строгие требования к местному соответствию', 'Управление глобальными страховыми программами', 'Кредитный риск перестраховщика'] },
            advantages: { title: "Что проверяем", items: ["Проверка применимых местных требований", "Сопоставление местного полиса с документами программы", "Уточнение расходов и ролей участников"] },
            disadvantages: { title: 'Ограничения', items: ['Административные расходы на фронтинг (Fronting Fee)', 'Зависимость от рейтинга местного страховщика-эмитента'] }
          }
        }
      ]
    },
    seo: {
      home: {
        title: "ING Broker Молдова | Страхование для частных лиц и компаний",
        description: "ING Broker помогает выбрать страхование автомобиля, жилья, поездок и бизнеса в Молдове. Сравните доступные предложения и условия полиса."
      },
      business: {
        title: 'Корпоративное страхование и управление рисками | ING Broker Молдова',
        description: "Страхование имущества, ответственности, перевозок и автопарков в Молдове. Помогаем оценить риски компании и доступные предложения."
      },
      reinsurance: {
        title: "Перестрахование и фронтинг: оценка возможностей | ING Broker",
        description: "Подготовка досье сложного риска. Участники, емкость и возможность перестраховочной или фронтинговой структуры подтверждаются отдельно."
      },
      about: {
        title: 'О нас | Insurance ING Broker SRL | Экспертиза и Доверие',
        description: "Узнайте, как работает Insurance ING Broker SRL, страховой брокер в Молдове. Объясняем полисы и практические шаги частным лицам и компаниям."
      },
      propertyAssets: {
        title: 'Страхование корпоративного имущества и активов | ING Broker',
        description: "Страхование имущества компании в Молдове: перечень, риски, лимиты и условия перерыва в деятельности для проверки в предложении страховщика."
      },
      renewableEnergy: {
        title: 'Страхование возобновляемой энергии | Солнечные и ветропарки | ING Broker',
        description: "Досье риска энергетического проекта в Молдове: оборудование, этапы и условия для проверки. Доступность страхования подтверждается отдельно."
      },
      terms: {
        title: 'Условия и положения | Insurance ING Broker SRL',
        description: 'Юридическая база для использования услуг ING Broker. Прозрачность и профессионализм в отношениях с нашими клиентами.'
      },
      privacy: {
        title: 'Политика конфиденциальности | Защита данных | ING Broker',
        description: "Сведения о данных, собираемых через сайт, целях обработки и способах связи. Ознакомьтесь с политикой и применимыми условиями."
      }
    }
  },
  en: {
    ...businessProductsTranslations.en,
    nav: ['Personal', 'Corporate Solutions', 'Reinsurance', 'About Us', 'Contact'],
    clientAccount: 'Calculate Online',
    logoAlt: 'ING Broker Logo',
    hero: {
      segment: 'Personal Segment',
      title: 'The Architecture',
      titleItalic: 'of Your Safety.',
      description: 'Global risk management expertise, rigorously tailored to your personal needs. From advanced mobility to asset security, Insurance ING Broker SRL defines the gold standard in protection.',
      cta1: 'Calculate Online',
      cta2: 'Request Consultation',
      scroll: 'Scroll to explore'
    },
    trustStripBenefits: [
      "Insurance broker in Moldova",
      "Personalized advice",
      "Guidance if a loss occurs",
      "Clear explanations of conditions"
    ],
    intro: {
      title: 'Expertise in',
      titleItalic: 'Risk Management.',
      p1: "At ING Broker, you can discuss insurance for your car, home, travel and accidents. We clarify your needs and explain available options.",
      p2: "Before you choose, we compare prices, covered risks and situations where the policy does not provide payment. We also explain how to notify a loss."
    },
    productLabels: {
      destined: 'For whom',
      coverage: 'Coverage'
    },
    comparison: {
      title: 'Which type of insurance suits you?',
      subtitle: 'A quick look at your protection needs to make the right choice.',
      cards: [
        { title: 'Mobility', desc: 'Choose MTPL for obligation, Green Card for international trips, or CASCO to protect your auto investment.' },
        { title: 'Travel & Health', desc: "Check travel medical insurance and accident insurance. Cover depends on the selected policy." },
        { title: 'Assets', desc: 'Secure your most important asset: your home. Protection against disasters and civil liability towards neighbors.' }
      ]
    },
    whyUs: {
      label: 'Why ING Broker',
      title: 'Authority in Brokerage,',
      titleItalic: 'Dedicated to You.',
      items: [
        { title: "We start with your needs", desc: "We ask what you want to insure and explain the options you can consider." },
        { title: "We compare proposals", desc: "We help compare prices, payment limits and exclusions, meaning situations the policy does not cover." },
        { title: "We explain conditions", desc: "Before you take out insurance, we discuss payments, cover and your duties." },
        { title: "We provide claims guidance", desc: "We explain the steps and documents for a claim. The insurer assesses it under the contract." }
      ],
      years: "Years of activity"
    },
    methodology: {
      title: 'The Methodology',
      titleItalic: 'ING Broker.',
      subtitle: 'A rigorous process, extracted from the rigors of corporate brokerage, applied for your personal safety.',
      steps: [
        {
          number: '01',
          title: 'Risk Audit',
          desc: 'We don\'t sell policies; we analyze exposures. We identify the vulnerabilities of your assets and lifestyle to define a solid foundation of protection.'
        },
        {
          number: '02',
          title: 'Solution Architecture',
          desc: "We explain available proposals and their differences so you can make an informed choice."
        },
        {
          number: '03',
          title: 'Fiduciary Management',
          desc: "We answer questions about the policy, renewal and steps after a loss. The insurer decides payment under the contract."
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about your personal insurance.'
    },
    finalCta: {
      title: 'Ready for',
      subtitle: 'the next level of safety?',
      cta1: 'Choose the right product',
      cta2: 'Discuss with a consultant'
    },
    corporateGateway: {
      label: 'B2B & Corporate',
      title: 'Complex Solutions for Business',
      desc: "We help you consider insurance for company property, activities and employees. We start with business risks and check available options.",
      btnBusiness: 'Discover Corporate Solutions',
      btnReinsurance: 'Reinsurance & Fronting'
    },
    footer: {
      desc: "ING Broker helps you consider insurance for yourself and your business. We explain available proposals, policy conditions and the steps after a loss.",
      sections: {
        products: 'Products',
        company: 'Company',
        legal: 'Legal'
      },
      legal: ['Offers', 'Terms and Conditions', 'Privacy Policy'],
      designBy: 'Design by',
      rights: '© 2026 Insurance ING Broker SRL. All rights reserved.'
    },
    insights: {
      label: 'Resources & Insights',
      title: 'Your guide in insurance.',
      cta: 'See all articles',
      articles: [
        {
          title: 'RCA for young drivers: financial risks and hidden costs in Moldova',
          desc: 'Learn all about the challenges and costs of car insurance for young drivers in the Republic of Moldova.',
          link: '/news/rca-pentru-soferi-tineri-riscuri-financiare-si-costuri-ascunse-in-moldova',
          image: 'https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=800'
        },
        {
          title: 'How is the price of RCA insurance determined? Guide for an affordable RCA price',
          desc: "See which details affect an RCA calculation and how to check the price and conditions of a proposal.",
          link: '/news/cum-se-determin%C4%83-pre%C8%9Bul-unei-asigur%C4%83ri-rca-ghid-pentru-un-pre%C8%9B-rca-accesibil',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    business: {
      title: 'Corporate Solutions',
      titleItalic: 'for market leaders.',
      subtitle: "We help you consider insurance for company property, activities and employees. We assess business risks and compare the conditions of available proposals.",
      cta1: 'Request risk audit',
      cta2: 'Discuss with an expert',
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'What types of corporate insurance do you offer?', a: "We can discuss risks involving company property, liability, transport and employees. Product availability, accepted activities and conditions are confirmed for each case before a proposal." },
          { q: 'How does a B2B insurance broker help me?', a: "ING Broker helps describe risks and compare available proposals, including prices, limits and exclusions. If a loss occurs, we explain the steps and documents. The insurer accepts the risk and decides the claim under the contract." },
          { q: 'Do you offer solutions for complex or international risks?', a: "For complex or international risks, we prepare questions and information for assessment. A reinsurance or fronting structure, participants and capacity require separate confirmation; this page does not promise access to a particular market." },
          { q: 'How long does a risk audit take?', a: "Timing is agreed after clarifying activities, available documents and assessment scope. Request a schedule for your file; this page does not provide a confirmed timeline for every company." }
        ]
      },
      lines: [
        { 
          id: 'property', 
          title: 'Property and assets', 
          desc: "Insurance for buildings, equipment and stock. We check included risks and whether losses from interrupted operations may be covered under the contract.", 
          image: '/Construcții Comerciale.jpg', 
          category: 'ASSETS', 
          link: '/property-assets',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Fire, explosion, lightning', 'Natural disasters (earthquake, flood)', 'Theft and vandalism'] },
            advantages: { title: "What we check", items: ["Accepted property, values and locations", "Loss-of-profit conditions, if included", "Limits, deductibles and exclusions"] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for normal wear and tear', 'Need for functional security systems', 'Mandatory deductibles for certain risks'] }
          }
        },
        { 
          id: 'liability', 
          title: 'General liability', 
          desc: "For situations where company activities cause harm to others. We help check which liabilities, sums and expenses may be included in a policy.", 
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2560', 
          category: 'LIABILITY', 
          link: '/business/liability',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Bodily injury caused to third parties', 'Material damage to third-party property', 'Accidental pollution'] },
            advantages: { title: "What we check", items: ["Accepted activities and liabilities", "Defence costs, if included", "Policy limits and territory"] },
            disadvantages: { title: 'Limitations', items: ['Does not cover pure contractual liability', 'Exclusions for intentional damage', 'Geographical coverage limits'] }
          }
        },
        { 
          id: 'professional', 
          title: 'Professional liability', 
          desc: "For claims relating to professional errors or omissions. We check accepted activities, limits and exclusions for your profession.", 
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200', 
          category: 'LIABILITY', 
          link: '/business/professional',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Professional errors and omissions', 'Negligence in providing services', 'Breach of data confidentiality'] },
            advantages: { title: "What we check", items: ["Declared professional services", "Professional requirements to confirm separately", "Accepted claims, periods and limits"] },
            disadvantages: { title: 'Limitations', items: ['Does not cover activities outside specialization', 'Exclusions for criminal acts', '"Claims-made" principle (claims filed during the policy period)'] }
          }
        },
        { 
          id: 'do', 
          title: 'D&O', 
          desc: "Liability insurance questions for directors and officers. We assess which claims and defence costs may be included under the contract.", 
          image: '/d&o.jpg', 
          category: 'EXECUTIVE', 
          link: '/business/do',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Erroneous managerial decisions', 'Fault in supervision', 'Litigation initiated by shareholders or employees'] },
            advantages: { title: "What we check", items: ["Accepted people and roles", "Defence costs, if included", "Specified investigations and periods"] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for proven fraud', 'Does not cover criminal fines', 'Limitations for undeclared M&A transactions'] }
          }
        },
        { 
          id: 'cyber', 
          title: 'Cyber insurance', 
          desc: "We assess cyber-risk information, security requirements and which costs a proposed policy may cover. Availability and accepted risks require separate confirmation.", 
          image: '/cyber-insurance-3.jpg', 
          category: 'TECH', 
          link: '/business/cyber',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Ransomware and hacking attacks', 'Business interruption due to IT causes', 'Personal data breaches'] },
            advantages: { title: "What we check", items: ["Response services, if included", "Accepted notification costs", "Extortion conditions and exclusions"] },
            disadvantages: { title: 'Limitations', items: ['Requires minimum IT security standards', 'Does not cover loss of intellectual property value', 'Exclusions for public infrastructure'] }
          }
        },
        { 
          id: 'cargo', 
          title: 'Cargo and transport', 
          desc: "For goods in transit, we check the route, goods, packaging and risks that may be included under the insurer's conditions.", 
          image: '/logistica.jpg', 
          category: 'LOGISTICS', 
          link: '/business/cargo',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Damage to goods during transport', 'Theft or disappearance of cargo', 'Accidents of the means of transport'] },
            advantages: { title: "What we check", items: ["Accepted risks, including exclusions", "Included route and transport stages", "Goods valuation and claim documents"] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for improper packaging', 'Limitations for perishable goods', 'Need to follow approved routes'] }
          }
        },
        { 
          id: 'fleet', 
          title: 'Fleet auto', 
          desc: "We help organize insurance for company vehicles. We compare available RCA and CASCO options and check each vehicle's conditions, without promised discounts or claim times.", 
          image: '/camionete.jpg', 
          category: 'MOBILITY', 
          link: '/business/fleet',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Multiple road accidents', 'Theft of fleet vehicles', 'Extended civil liability'] },
            advantages: { title: "What we check", items: ["Vehicle inventory and policy periods", "The price calculated for the specific file", "Roadside assistance, if included"] },
            disadvantages: { title: 'Limitations', items: ['Rigorous claims monitoring required', 'Deductibles per event', 'Restrictions regarding vehicle users'] }
          }
        },
        { 
          id: 'credit', 
          title: 'Credit insurance', 
          desc: "We assess the risk of unpaid customer invoices and check which buyers, sums and situations may be accepted in a policy. Coverage and availability require confirmation.", 
          image: '/credit insurance.jpg', 
          category: 'FINANCE', 
          link: '/business/credit',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Client insolvency', 'Prolonged payment delay', 'Political risks in export'] },
            advantages: { title: "What we check", items: ["Accepted buyers and invoices", "Limits and contractual waiting periods", "Monitoring services, if included"] },
            disadvantages: { title: 'Limitations', items: ['Does not cover commercial disputes', 'Credit limits per buyer', 'Mandatory co-insurance percentage'] }
          }
        },
        { 
          id: 'construction', 
          title: 'Construction', 
          desc: "For construction and installation works, we check the project, site risks and contractual requirements before requesting suitable proposals. No automatic FIDIC compliance is promised.", 
          image: '/Constructii-montaj.jpeg', 
          category: 'ENGINEERING', 
          link: '/business/construction',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Accidental damage to works', 'Destruction of construction equipment', 'Liability towards third parties on site'] },
            advantages: { title: "What we check", items: ["Accepted stages and works", "Maintenance, if included", "Investor requirements and proposed limits"] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for design errors', 'Does not cover contractual penalties', 'Need to comply with labor protection rules'] }
          }
        },
        { 
          id: 'benefits', 
          title: 'Employee Benefits & Group Health Insurance | IT Talent Retention Moldova | ING Broker', 
          desc: "For company employees, we discuss team needs and check available options, included services and contractual limits. Tax treatment requires separate verification.", 
          image: '/health.png', 
          category: 'HUMAN RESOURCES', 
          link: '/business/benefits',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Occupational diseases and work accidents', 'Death or disability of employees', 'High medical costs'] },
            advantages: { title: "What we check", items: ["Accepted people and services", "Tax treatment to verify separately", "Clinics and procedures specified in the programme"] },
            disadvantages: { title: 'Limitations', items: ['Waiting periods for certain conditions', 'Exclusions for undeclared chronic diseases', 'Annual settlement limits'] }
          }
        },
        { 
          id: 'renewable', 
          title: 'Energy', 
          desc: "We prepare risk information for solar, wind and biogas projects. We check equipment, project stages and documents. Availability, accepted risks and conditions require individual insurer confirmation.", 
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200', 
          category: 'ENERGY', 
          link: '/renewable-energy',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Extreme weather events (hail, storm)', 'Technical and electrical faults', 'Loss of profit due to lack of production'] },
            advantages: { title: "What we check", items: ["Project stages and equipment", "Lender requirements without a financing promise", "Proposed risks, limits and exclusions"] },
            disadvantages: { title: 'Limitations', items: ['Variable costs depending on location', 'Strict preventive maintenance requirements', 'Exclusions for natural degradation'] }
          }
        },
        { 
          id: 'agriculture', 
          title: 'Agricultural risks', 
          desc: "We discuss risks involving crops, livestock and agricultural machinery. Accepted risks and conditions are checked for the activity. A subsidy is not automatic.", 
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200', 
          category: 'AGRICULTURE', 
          link: '/business/agriculture',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Drought, frost, hail', 'Animal diseases and epidemics', 'Damage to agricultural machinery'] },
            advantages: { title: "What we check", items: ["Any subsidy conditions to verify separately", "Accepted crops, livestock and risks", "Inspection procedures and required documents"] },
            disadvantages: { title: 'Limitations', items: ['Temporal deductible periods', 'Exclusions for non-compliance with agricultural technology', 'Insured harvest limits'] }
          }
        }
      ]
    },
    reinsurance: {
      title: 'Reinsurance & Fronting',
      titleItalic: 'capacity and expertise.',
      subtitle: "Discuss preparation of a file for large or complex risks. Programme availability, participants and reinsurance capacity require separate confirmation after risk assessment.",
      cta1: "Discuss the risk file",
      cta2: "Request an assessment of options",
      faq: {
        title: 'Frequently Asked Questions - Reinsurance',
        items: [
          { q: 'When does a company need facultative reinsurance?', a: "Facultative reinsurance may be considered separately for a large or unusual risk. The insurer and potential reinsurers assess the information, capacity and proposed conditions. A large project is not automatically accepted." },
          { q: 'What does Fronting mean in insurance?', a: "In a fronting arrangement, a local insurer issues the policy and reinsurance agreements determine the transfer of a share of the risk. The broker is not the issuing insurer. Participants, shares and local requirements must be checked for the specific programme." },
          { q: 'Which reinsurance markets do you work with?', a: "Participation by a particular market or reinsurer is confirmed for each file. Ask which participants are involved, what capacity is available and what financial information is relevant. This page does not confirm direct Lloyd's access or a guaranteed minimum rating." },
          { q: 'What is the difference between proportional and non-proportional reinsurance?', a: "A proportional structure shares premiums and losses in agreed proportions. A non-proportional structure uses thresholds and limits set out in the agreement. The precise mechanism, events and participants' obligations must be checked in the programme documents." }
        ]
      },
      lines: [
        { 
          id: 'facultative', 
          title: 'Facultative Reinsurance', 
          desc: "For an individual risk or project, prepare its description, values and relevant history. Participants must assess whether facultative placement is possible and on what terms; this page does not promise placement.", 
          image: '/images/optimized-20261121-v1/reinsurance-1.webp',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Individual exposures exceeding local market capacity', 'Complex industrial risks', 'Major infrastructure projects'] },
            advantages: { title: "What we assess", items: ["Individual assessment of the proposed risk", "Verification of participants and financial information", "Comparison of available limits and conditions"] },
            disadvantages: { title: 'Limitations', items: ['Detailed and rigorous underwriting process', 'Costs influenced by global market conditions'] }
          }
        },
        { 
          id: 'treaty', 
          title: 'Treaty Reinsurance', 
          desc: "For an insurance portfolio, discuss exposures, losses and the intended limits. A treaty structure, its availability and financial effects require specific assessment and cannot be inferred from its name.", 
          image: '/traty reinsurance-2.jpg', 
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Accumulations of catastrophic risks (Earthquake, Flood)', 'Major fluctuations in the loss ratio', 'Capital and solvency protection'] },
            advantages: { title: "What we assess", items: ["Assessment of accumulated exposures", "Comparison of proposed limits and capacity", "Review of capital implications with appropriate specialists"] },
            disadvantages: { title: 'Limitations', items: ['Complex contractual structures', 'Requires advanced actuarial analysis'] }
          }
        },
        { 
          id: 'fronting', 
          title: 'Fronting Programs', 
          desc: "For an international programme, check whether an insurer can issue the local policy and participate in the proposed reinsurance structure. ING Broker acts as intermediary where that possibility is confirmed. Legal and tax matters require separate review.", 
          image: '/fronting.png', 
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Strict local compliance requirements', 'Management of global insurance programs', 'Reinsurer credit risk'] },
            advantages: { title: "What we assess", items: ["Checking applicable local requirements", "Comparing the local policy with programme documents", "Clarifying costs and participants' roles"] },
            disadvantages: { title: 'Limitations', items: ['Administrative fronting costs (Fronting Fee)', 'Dependence on the rating of the issuing local insurer'] }
          }
        }
      ]
    },
    about: {
      hero: { title: 'About Us', subtitle: 'Insurance ING Broker SRL - Your strategic architect in risk management and global reinsurance.' },
      intro: "We work with individuals and companies in Moldova. We explain insurance options, compare available proposals and help you understand conditions before deciding.",
      whoWeAre: { title: 'Who We Are', content: "We are an insurance brokerage team. We start with your questions: what you want to insure, which risks concern you and your budget. We then discuss available proposals and their differences." },
      mission: { title: 'Our Mission', content: "We want each client to understand the insurance they choose: payments, covered risks, exclusions and the steps to take after a loss." },
      vision: { title: 'Our Vision', content: 'Our vision is to set the new standard of excellence in regional corporate brokerage, integrating global best practices and advanced analytical technologies. We aim to be the pioneers who import and develop niche insurance products, strengthening the financial security of the Republic of Moldova.' },
      history: { title: 'Our History', content: "Insurance ING Broker SRL is an insurance broker in Moldova. For information about the company's history, authorization or certifications, request the relevant documents and check their validity." },
      values: { title: 'Our Values', items: ['Advanced Risk Architecture', 'Operational Excellence', 'Absolute Fiduciary Integrity', 'Radical Transparency', 'Strategic Synergy', 'Unwavering Ethics', 'Disruptive Risk Innovation'] },
      differentiators: {
        title: 'What Sets Us Apart',
        items: [
          { title: "Clear company information", desc: "Before working together, you can request current company details and clarify the broker's role." },
          { title: "Accessible explanations", desc: "We explain insurance terms and practical steps without assuming prior insurance knowledge." },
          { title: "Document review", desc: "We compare available documents and conditions. Certification or authorization must be confirmed by current documents, not a marketing promise." },
          { title: "Assessment of options", desc: "For complex requirements, we clarify participants and available options without promising access to a particular market." },
          { title: "Support for your decision", desc: "We discuss relevant risks, costs and limitations before you choose an option." }
        ]
      },
      corporate: { title: 'Corporate Data & Governance', content: "Company: Insurance ING Broker SRL,\\nIDNO: 1017600019386,\\nAddress: municipiul Chișinău, strada Pan Halippa 9, Republica Moldova,\\nCEO: Dascalu Ion" },
      cta: { title: 'Strategic Partnership', subtitle: "Tell us what you want to insure. We can discuss options and the information needed for an assessment.", btn: 'Request Strategic Consulting' }
    },
    propertyAssets: {
      title: 'Property and Assets Insurance',
      subtitle: "Assess insurance for buildings, equipment and stock. Accepted property, risks and limits depend on the insurer's conditions.",
      intro: "Prepare an inventory, locations, values and a description of company activities. ING Broker helps compare available options. The insurer accepts risks and handles claims under the contract.",
      industries: {
        title: "Property and exposures to assess",
        items: [
          { title: 'Real Estate', desc: 'Commercial buildings, office buildings, factories, warehouses, and other physical structures.', image: '/Construcții Comerciale.jpg' },
          { title: 'Movable Property', desc: 'Business machinery, industrial equipment, computing technology, and inventory.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Stocks and Goods', desc: "Raw materials, finished products and stored goods: check the inventory, values and storage conditions.", image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Business Interruption', desc: "Check separately whether business interruption and related financial losses can be included, for which events and periods.", image: '/business-intrertuption.jpg' }
        ]
      },
      analysis: {
        risks: {
          title: "Risks to check in the proposal",
          items: [
            'Fire, lightning, explosion',
            'Natural disasters (earthquake, flood, storm)',
            'Burglary or robbery',
            'Accidental equipment breakdowns',
            'Vandalism and malicious damage'
          ]
        },
        advantages: {
          title: "What we compare",
          items: [
            "Sums and limits for accepted property",
            "Business interruption conditions, if included",
            "Declared activities and locations",
            "The procedure and documents for notifying a claim",
            "Deductibles, exclusions and contractual duties"
          ]
        },
        disadvantages: {
          title: "Limitations to check in the contract",
          items: [
            'Normal wear and tear and depreciation over time',
            'Intentional damage caused by the insured',
            'War, terrorism, or confiscation (without special clauses)',
            'Manufacturing defects covered by warranty',
            'Non-compliance with safety regulations'
          ]
        }
      },
      expertiseTitle: "Insurance for company property",
      essentialTitle: 'Why choose ING Broker?',
      whyUs: "We compare available proposals and explain prices, limits, deductibles and exclusions. If a loss occurs, we explain the documents and next steps; the insurer assesses the claim and determines payment under the contract.",
      ctaTitle: "Discuss company property",
      ctaCall: 'Request a quote',
      ctaEmail: 'Send an email'
    },
    renewableEnergy: {
      title: 'Renewable Energy Insurance',
      subtitle: "Preparing the risk file for an energy project. Insurance availability and conditions require individual confirmation.",
      intro: "Separate construction, operation and maintenance. Prepare equipment details, location, values and contractual responsibilities. We check assessment possibilities without promising whole-project coverage or risk acceptance.",
      industries: {
        title: "Technologies and risks to assess",
        items: [
          { title: 'Solar Panels (Photovoltaic)', desc: "For photovoltaic panels, describe the location, installation and equipment. Hail, fire, theft and lost income must be checked separately in the proposed conditions." },
          { title: 'Wind Turbines', desc: "For wind turbines, prepare technical and maintenance records. Check mechanical damage, lightning, blades and the consequences of a production stoppage separately." },
          { title: 'Energy Storage (Batteries)', desc: "For batteries, describe the technology, installation and safety measures. Fire, degradation and integration errors are not automatically covered; check conditions and exclusions." },
          { title: 'Hydroelectric Power Plants', desc: "For hydro infrastructure, prepare the location, equipment and project responsibilities. Flooding, turbine damage and environmental impact require separate checks.", image: '/hidrocentrala.jpg' }
        ]
      },
      analysis: {
        risks: { title: "Exposures to assess, not confirmed cover", items: ['Extreme weather events (hail, hurricane)', 'Mechanical and electrical failures', 'Theft, vandalism, and cyber attacks', 'Loss of profit (Business Interruption)'] },
        advantages: { title: "What we check in a proposal", items: ["Accepted stages, equipment and risks", "Lender requirements, without a promise of financing", "Limits, deductibles and notification procedures"] },
        disadvantages: { title: "Conditions to clarify", items: ['Premium costs based on location', 'Complexity of the claims process', 'Necessity of rigorous maintenance'] }
      },
      whyUs: "An energy project may have different contracts and periods for construction, operation and maintenance. Compare documents for each stage and check any loss-of-income provision separately. An assessment does not confirm policy availability or claim payment.",
      expertiseTitle: "Understand project risks",
      essentialTitle: "How to prepare an assessment",
      ctaTitle: "Discuss assessment possibilities",
      ctaCall: 'Call now',
      ctaEmail: 'Send Email'
    },
    seo: {
      home: {
        title: "ING Broker Moldova | Insurance for individuals and companies",
        description: "ING Broker helps you consider insurance for cars, homes, travel and business in Moldova. Compare available proposals and understand policy conditions."
      },
      business: {
        title: 'Corporate Insurance & Risk Management | ING Broker Moldova',
        description: "Property, liability, transport and fleet insurance in Moldova. We help assess company risks and available proposals."
      },
      reinsurance: {
        title: "Reinsurance and fronting: assessing options | ING Broker",
        description: "Preparing a complex-risk file. Participants, capacity and the possibility of a reinsurance or fronting structure require separate confirmation."
      },
      about: {
        title: 'About Us | Insurance ING Broker SRL | Expertise & Trust',
        description: "Learn how Insurance ING Broker SRL, an insurance broker in Moldova, works. Policy explanations and practical guidance for individuals and companies."
      },
      propertyAssets: {
        title: 'Corporate Property & Assets Insurance | ING Broker',
        description: "Company property insurance in Moldova: inventory, risks, limits and business interruption conditions to check in the insurer's proposal."
      },
      renewableEnergy: {
        title: 'Renewable Energy Insurance | Solar & Wind Parks | ING Broker',
        description: "Energy-project risk files in Moldova: equipment, stages and conditions to check. Insurance availability requires separate confirmation."
      },
      terms: {
        title: 'Terms & Conditions | Insurance ING Broker SRL',
        description: 'Legal framework for using ING Broker services. Transparency and professionalism in our relationship with clients.'
      },
      privacy: {
        title: 'Privacy Policy | Data Protection | ING Broker',
        description: "Information about data collected through the site, processing purposes and contact options. Read the policy and applicable conditions."
      }
    }
  }
};

export const productTranslations = {
  ro: [
    {
      id: 'rca',
      title: 'RCA',
      seoTitle: "RCA online Moldova: calculator și condiții | ING Broker",
      seoDescription: "Calculează RCA și verifică datele, perioada, prețul și condițiile înainte de plată. Confirmă emiterea și valabilitatea documentului final.",
      subtitle: 'RESPONSABILITATE CIVILĂ AUTO',
      description: "Te ajutăm să calculezi RCA și să verifici datele pentru poliță. Emiterea și începutul valabilității se confirmă în documentul final, nu prin simpla trimitere a cererii.",
      forWho: 'Toți proprietarii de vehicule înmatriculate în Moldova.',
      covers: 'Daunele cauzate terțelor persoane în urma accidentelor rutiere.',
      advantages: ["Verificarea datelor înainte de plată", "Explicarea prețului și a perioadei", "Îndrumare privind notificarea daunei"],
      cta: 'Calculează RCA',
      link: 'https://easigurari.com/ro/rca',
      image: '/images/optimized-20261121-v1/rca-red-car.webp',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Răspunderea civilă față de terți', 'Sancțiuni contravenționale pentru lipsa poliței', 'Cheltuieli de judecată în procese civile'] },
        advantages: { title: 'Avantaje', items: ["Verificarea documentului și a valabilității", "Compararea limitelor aplicabile", "Verificarea datelor folosite la calcul"] },
        disadvantages: { title: 'Limitări', items: ['Nu acoperă daunele propriei mașini', 'Limite de despăgubire stabilite prin lege', "Efectele situațiilor de conducere sub influența alcoolului, de verificat în regulile aplicabile"] }
      }
    },
    {
      id: 'carte-verde',
      title: 'Carte Verde',
      seoTitle: 'Asigurare Carte Verde Online | Călătorii Sigure în Străinătate | ING Broker',
      seoDescription: "Carte Verde pentru deplasări auto: verifică țările și perioada de valabilitate, datele vehiculului și documentele înainte de plată.",
      subtitle: 'SIGURANȚĂ PESTE HOTARE',
      description: "Pleci cu mașina peste hotare? Verifică traseul, țările și perioada pentru care ai nevoie de Carte Verde înainte să alegi polița.",
      forWho: 'Șoferii care călătoresc cu mașina în afara țării.',
      covers: "Răspunderea civilă auto, în teritoriul și condițiile indicate în documentele aplicabile.",
      advantages: ["Verificarea țărilor de pe traseu", "Clarificarea perioadei poliței", "Îndrumare privind documentele și notificarea"],
      cta: 'Calculează Carte Verde',
      link: 'https://easigurari.com/ro/green-card',
      image: '/images/optimized-20261121-v1/carte-verde.webp',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Accidente rutiere în afara Republicii Moldova', 'Răspundere civilă conform legislației țării de vizită', 'Costuri de repatriere a vehiculului (în funcție de clauze)'] },
        advantages: { title: 'Avantaje', items: ["Verificarea valabilității pentru țările vizitate", "Clarificarea informațiilor de contact la daună", "Păstrarea documentelor pentru deplasare"] },
        disadvantages: { title: 'Limitări', items: ['Valabilă doar în țările specificate în poliță', 'Nu înlocuiește asigurarea CASCO', "Cerințele traseului și ale frontierelor, de verificat înainte de plecare"] }
      }
    },
    {
      id: 'medicala',
      title: 'Asigurare Medicală',
      seoTitle: 'Asigurare Medicală de Călătorie | Protecție în Străinătate | ING Broker',
      seoDescription: "Asigurarea medicală de călătorie: verifică serviciile, teritoriul, limitele, franșiza și procedura de asistență în condițiile poliței.",
      subtitle: 'PROTECȚIE ÎN CĂLĂTORII',
      description: "Pentru vacanță sau deplasare de serviciu, compară serviciile medicale propuse, limitele și excluderile. Plata cheltuielilor și asistența depind de condițiile asigurătorului.",
      forWho: 'Turiști, studenți și profesioniști care călătoresc extern.',
      covers: "Servicii și cheltuieli medicale acceptate în condițiile poliței, în limitele și teritoriul stabilite.",
      advantages: ["Verificarea teritoriului și a perioadei", "Explicarea franșizei și a limitelor", "Clarificarea canalului și limbii de asistență"],
      cta: 'Calculează asigurarea',
      link: 'https://easigurari.com/ro/health-insurance',
      image: '/images/optimized-20261121-v1/asigurare-medicala-travel.webp',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Urgențe medicale și accidente în străinătate', 'Cheltuieli de spitalizare și intervenții chirurgicale', 'Repatriere medicală sau în caz de deces'] },
        advantages: { title: 'Avantaje', items: ["Condițiile pentru COVID-19, dacă riscul este inclus", "Programul și contactele serviciului de asistență", "Plata directă sau rambursarea, dacă sunt prevăzute"] },
        disadvantages: { title: 'Limitări', items: ["Condițiile și excluderile pentru afecțiuni preexistente", 'Excluderi pentru sporturi extreme (fără clauză specială)', 'Limite de vârstă pentru anumite planuri'] }
      }
    },
    {
      id: 'casco',
      title: 'CASCO',
      seoTitle: "CASCO Moldova: oferte și condiții | ING Broker",
      seoDescription: "Compară CASCO: riscurile acceptate, reparațiile, excluderile și franșiza. Acoperirea se confirmă prin condițiile asigurătorului și poliță.",
      subtitle: 'Asigurare pentru mașina ta',
      description: "Pentru propria mașină, comparăm ofertele CASCO și explicăm riscurile incluse, excluderile și partea din daună suportată de tine potrivit contractului.",
      forWho: "Proprietari de mașini noi sau rulate care vor să compare opțiunile disponibile.",
      covers: "Riscurile pentru mașina proprie acceptate în poliță, în condițiile și limitele contractului.",
      advantages: ["Verificarea condițiilor de reparație", "Clarificarea asistenței, dacă este inclusă", "Compararea riscurilor și franșizei"],
      cta: 'Vezi detalii CASCO',
      link: 'https://easigurari.com/ro/article/asigurarea-casco',
      image: '/images/optimized-20261121-v1/asigurare-casco.webp',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Avarii accidentale (coliziuni, răsturnări)', 'Furt total sau parțial al vehiculului', 'Vandalism și fenomene naturale (grindină, inundații)'] },
        advantages: { title: 'Avantaje', items: ["Situațiile de accident acceptate în contract", "Service-urile și procedura de reparație agreate", "Echipamentele suplimentare, dacă sunt incluse"] },
        disadvantages: { title: 'Limitări', items: ['Aplicarea franșizei conform contractului', 'Excluderi pentru uzură sau defecte mecanice', "Condițiile și excluderile legate de neglijența gravă"] }
      }
    },
    {
      id: 'locuinta',
      title: 'Asigurarea Locuinței',
      seoTitle: 'Asigurare Locuință și Bunuri | Protejează-ți Casa | ING Broker',
      seoDescription: "Asigurarea locuinței în Moldova: compară bunurile acceptate, riscurile, răspunderea față de vecini și limitele prevăzute în contract.",
      subtitle: 'Căminul tău, în siguranță',
      description: "Verifică separat structura locuinței, bunurile și răspunderea față de vecini. Includerea lor, limitele și plata daunelor depind de contractul ales.",
      forWho: 'Proprietari de apartamente și case la sol.',
      covers: "Bunurile și riscurile acceptate în poliță, cu verificarea separată a răspunderii civile.",
      advantages: ["Verificarea valorilor declarate", "Clarificarea răspunderii față de vecini", "Explicarea procedurii de notificare"],
      cta: 'Vezi detalii Locuință',
      link: 'https://easigurari.com/ro/article/asigurare-locuinta-si-bunuri-imobile-si-mobile-r-moldova',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Incendiu, explozie, trăsnet', 'Calamități naturale (cutremur, inundații)', 'Furtul bunurilor din locuință și vandalism'] },
        advantages: { title: 'Avantaje', items: ["Răspunderea față de vecini, dacă este inclusă", 'Protecție pentru finisaje și bunuri de preț', "Asistența tehnică la domiciliu, dacă este prevăzută"] },
        disadvantages: { title: 'Limitări', items: ['Excluderi pentru clădiri cu risc seismic ridicat', 'Nu acoperă banii cash sau bijuteriile neevaluate', 'Limitări pentru bunuri aflate în spații deschise'] }
      }
    },
    {
      id: 'accidente',
      title: 'Accidente',
      seoTitle: 'Asigurare de Accidente Persoane | Siguranță Financiară | ING Broker',
      seoDescription: "Asigurarea de accidente: persoane, evenimente, sume și limite de verificat în poliță. Plata se stabilește potrivit condițiilor asigurătorului.",
      subtitle: 'Siguranța personală',
      description: "Asigurarea de accidente poate oferi sprijin financiar pentru evenimentele acceptate în contract. Verifică persoanele, activitățile, sumele și excluderile înainte de alegere.",
      forWho: 'Persoane active, sportivi și familii prudente.',
      covers: "Consecințele accidentelor acceptate în contract, în limitele și condițiile stabilite.",
      advantages: ["Compararea sumelor asigurate", "Verificarea teritoriului și a activităților", "Clarificarea documentelor pentru cerere"],
      cta: 'Vezi detalii Accidente',
      link: 'https://easigurari.com/ro/article/asigurarea-de-accidente-angajatilor-r-moldova',
      image: '/images/optimized-20261121-v1/accidente2.webp',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Accidente casnice sau la locul de muncă', 'Accidente în timpul activităților sportive', 'Invaliditate permanentă sau temporară'] },
        advantages: { title: 'Avantaje', items: ["Plățile și evenimentele prevăzute în contract", "Teritoriul și perioadele acceptate", "Persoanele care pot fi incluse în poliță"] },
        disadvantages: { title: 'Limitări', items: ['Excluderi pentru boli profesionale', 'Nu acoperă accidentele sub influența substanțelor', 'Limite de vârstă la subscriere'] }
      }
    }
  ],
  ru: [
    {
      id: 'rca',
      title: 'ОСАГО',
      seoTitle: "RCA онлайн в Молдове: расчет и условия | ING Broker",
      seoDescription: "Рассчитайте RCA и до оплаты проверьте данные, период, цену и условия. Подтвердите выпуск и срок действия итогового документа.",
      subtitle: 'АВТОГРАЖДАНСКАЯ ОТВЕТСТВЕННОСТЬ',
      description: "Помогаем рассчитать RCA и проверить данные для полиса. Выпуск и начало действия подтверждаются итоговым документом, а не одной отправкой заявки.",
      forWho: 'Все владельцы транспортных средств, зарегистрированных в Молдове.',
      covers: 'Ущерб, причиненный третьим лицам в результате дорожно-транспортных происшествий.',
      advantages: ["Проверка данных до оплаты", "Объяснение цены и периода", "Разъяснение уведомления об убытке"],
      cta: 'Рассчитать ОСАГО',
      link: 'https://easigurari.com/ru/rca',
      image: '/images/optimized-20261121-v1/rca-red-car.webp',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Гражданская ответственность перед третьими лицами', 'Административные санкции за отсутствие полиса', 'Судебные издержки по гражданским делам'] },
        advantages: { title: 'Преимущества', items: ["Проверка документа и срока действия", "Сравнение применимых лимитов", "Проверка данных для расчета"] },
        disadvantages: { title: 'Ограничения', items: ['Не покрывает ущерб собственному автомобилю', 'Лимиты возмещения установлены законом', "Последствия управления под воздействием алкоголя для проверки в применимых правилах"] }
      }
    },
    {
      id: 'carte-verde',
      title: 'Зеленая карта',
      seoTitle: 'Страхование Зеленая Карта онлайн | Безопасные поездки за границу | ING Broker',
      seoDescription: "Зеленая карта для поездок на автомобиле: до оплаты проверьте страны, период действия, данные автомобиля и документы.",
      subtitle: 'БЕЗОПАСНОСТЬ ЗА ГРАНИЦЕЙ',
      description: "Едете на автомобиле за границу? До выбора Зеленой карты проверьте маршрут, страны и необходимый период.",
      forWho: 'Водители, путешествующие на автомобиле за границу.',
      covers: "Автогражданская ответственность на территории и условиях, указанных в применимых документах.",
      advantages: ["Проверка стран по маршруту", "Уточнение периода полиса", "Разъяснение документов и уведомления"],
      cta: 'Рассчитать Зеленую карту',
      link: 'https://easigurari.com/ru/green-card',
      image: '/images/optimized-20261121-v1/carte-verde.webp',
      analysis: {
        risks: { title: 'Целевые риски', items: ['ДТП за пределами Республики Молдова', 'Гражданская ответственность согласно законам страны пребывания', 'Расходы на репатриацию автомобиля (в зависимости от условий)'] },
        advantages: { title: 'Преимущества', items: ["Проверка действия в посещаемых странах", "Уточнение контактов при убытке", "Хранение документов для поездки"] },
        disadvantages: { title: 'Ограничения', items: ['Действует только в странах, указанных в полисе', 'Не заменяет страховку КАСКО', "Требования маршрута и границ для проверки до поездки"] }
      }
    },
    {
      id: 'medicala',
      title: 'Медицинская страховка',
      seoTitle: 'Медицинская страховка для путешествий | Защита за границей | ING Broker',
      seoDescription: "Медицинское страхование для поездок: проверьте услуги, территорию, лимиты, франшизу и порядок обращения за помощью в условиях полиса.",
      subtitle: 'ЗАЩИТА В ПУТЕШЕСТВИЯХ',
      description: "Для отпуска или командировки сравните предлагаемые медицинские услуги, лимиты и исключения. Оплата расходов и помощь зависят от условий страховщика.",
      forWho: 'Туристы, студенты и специалисты, выезжающие за рубеж.',
      covers: "Медицинские услуги и расходы, принятые по условиям полиса, в установленных лимитах и на указанной территории.",
      advantages: ["Проверка территории и периода", "Объяснение франшизы и лимитов", "Уточнение канала и языка помощи"],
      cta: 'Рассчитать страховку',
      link: 'https://easigurari.com/ru/health-insurance',
      image: '/images/optimized-20261121-v1/asigurare-medicala-travel.webp',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Медицинские экстренные случаи и несчастные случаи за рубежом', 'Расходы на госпитализацию и хирургические операции', 'Медицинская репатриация или в случае смерти'] },
        advantages: { title: 'Преимущества', items: ["Условия по COVID-19, если риск включен", "График и контакты службы помощи", "Прямая оплата или возмещение, если предусмотрены"] },
        disadvantages: { title: 'Ограничения', items: ["Условия и исключения для ранее существовавших заболеваний", 'Исключения для экстремальных видов спорта (без спец. условия)', 'Возрастные ограничения для определенных планов'] }
      }
    },
    {
      id: 'casco',
      title: 'КАСКО',
      seoTitle: "КАСКО в Молдове: предложения и условия | ING Broker",
      seoDescription: "Сравните КАСКО: принимаемые риски, ремонт, исключения и франшизу. Покрытие подтверждается условиями страховщика и полисом.",
      subtitle: 'Полная автозащита',
      description: "Для вашего автомобиля сравниваем предложения КАСКО и объясняем включенные риски, исключения и часть убытка, которую вы несете по договору.",
      forWho: "Владельцы новых или подержанных автомобилей, которые хотят сравнить доступные варианты.",
      covers: "Риски для собственного автомобиля, принятые в полисе, на условиях и в лимитах договора.",
      advantages: ["Проверка условий ремонта", "Уточнение помощи, если она включена", "Сравнение рисков и франшизы"],
      cta: 'Детали КАСКО',
      link: 'https://easigurari.com/ru/article/asigurarea-casco',
      image: '/images/optimized-20261121-v1/asigurare-casco.webp',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Случайные повреждения (столкновения, опрокидывания)', 'Полная или частичная кража автомобиля', 'Вандализм и природные явления (град, наводнения)'] },
        advantages: { title: 'Преимущества', items: ["Ситуации ДТП, принятые в договоре", "Согласованные сервисы и порядок ремонта", "Дополнительное оборудование, если включено"] },
        disadvantages: { title: 'Ограничения', items: ['Применение франшизы согласно договору', 'Исключения для износа или механических дефектов', "Условия и исключения, связанные с грубой неосторожностью"] }
      }
    },
    {
      id: 'locuinta',
      title: 'Страхование жилья',
      seoTitle: 'Страхование жилья и имущества | Защитите свой дом | ING Broker',
      seoDescription: "Страхование жилья в Молдове: сравните принимаемое имущество, риски, ответственность перед соседями и договорные лимиты.",
      subtitle: 'Ваш дом в безопасности',
      description: "Отдельно проверьте конструкцию жилья, имущество и ответственность перед соседями. Их включение, лимиты и выплата по убыткам зависят от выбранного договора.",
      forWho: 'Владельцы квартир и частных домов.',
      covers: "Имущество и риски, принятые в полисе, с отдельной проверкой гражданской ответственности.",
      advantages: ["Проверка заявленных стоимостей", "Уточнение ответственности перед соседями", "Объяснение порядка уведомления"],
      cta: 'Детали страхования жилья',
      link: 'https://easigurari.com/ru/article/asigurare-locuinta-si-bunuri-imobile-si-mobile-r-moldova',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Пожар, взрыв, удар молнии', 'Стихийные бедствия (землетрясение, наводнение)', 'Кража имущества из дома и вандализм'] },
        advantages: { title: 'Преимущества', items: ["Ответственность перед соседями, если включена", 'Защита отделки и ценного имущества', "Техническая помощь на дому, если предусмотрена"] },
        disadvantages: { title: 'Ограничения', items: ['Исключения для зданий с высоким сейсмическим риском', 'Не покрывает наличные деньги или неоцененные украшения', 'Ограничения для имущества в открытых пространствах'] }
      }
    },
    {
      id: 'accidente',
      title: 'Несчастные случаи',
      seoTitle: 'Страхование от несчастных случаев | Финансовая безопасность | ING Broker',
      seoDescription: "Страхование от несчастных случаев: лица, события, суммы и лимиты для проверки в полисе. Выплата определяется по условиям страховщика.",
      subtitle: 'Личная безопасность',
      description: "Страхование от несчастных случаев может предусматривать финансовую помощь по принятым в договоре событиям. До выбора проверьте лиц, занятия, суммы и исключения.",
      forWho: 'Активные люди, спортсмены и предусмотрительные семьи.',
      covers: "Последствия несчастных случаев, принятые в договоре, в установленных лимитах и на предусмотренных условиях.",
      advantages: ["Сравнение страховых сумм", "Проверка территории и занятий", "Уточнение документов для заявления"],
      cta: 'Детали страхования',
      link: 'https://easigurari.com/ru/article/asigurarea-de-accidente-angajatilor-r-moldova',
      image: '/images/optimized-20261121-v1/accidente2.webp',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Бытовые несчастные случаи или на рабочем месте', 'Несчастные случаи во время занятий спортом', 'Постоянная или временная инвалидность'] },
        advantages: { title: 'Преимущества', items: ["Выплаты и события, предусмотренные договором", "Принятые территория и периоды", "Лица, которых можно включить в полис"] },
        disadvantages: { title: 'Ограничения', items: ['Исключения для профессиональных заболеваний', 'Не покрывает несчастные случаи под влиянием веществ', 'Возрастные ограничения при оформлении'] }
      }
    }
  ],
  en: [
    {
      id: 'rca',
      title: 'RCA',
      seoTitle: "Online RCA in Moldova: calculator and conditions | ING Broker",
      seoDescription: "Calculate RCA and check details, period, price and conditions before payment. Confirm issuance and validity of the final document.",
      subtitle: 'MOTOR THIRD PARTY LIABILITY',
      description: "We help calculate RCA and check policy details. Issuance and the start of validity are confirmed by the final document, not merely by submitting a request.",
      forWho: 'All owners of vehicles registered in Moldova.',
      covers: 'Damage caused to third parties as a result of road accidents.',
      advantages: ["Checking details before payment", "Explanation of price and period", "Guidance on notifying a loss"],
      cta: 'Calculate RCA',
      link: 'https://easigurari.com/ro/rca',
      image: '/images/optimized-20261121-v1/rca-red-car.webp',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Third party liability', 'Administrative sanctions for lack of policy', 'Legal costs in civil lawsuits'] },
        advantages: { title: 'Advantages', items: ["Checking the document and validity", "Comparing applicable limits", "Checking calculation details"] },
        disadvantages: { title: 'Limitations', items: ['Does not cover own car damage', 'Compensation limits set by law', "The consequences of driving under the influence, to check in applicable rules"] }
      }
    },
    {
      id: 'carte-verde',
      title: 'Green Card',
      seoTitle: 'Online Green Card Insurance | Safe Travel Abroad | ING Broker',
      seoDescription: "Green Card for road travel: check countries, validity period, vehicle details and documents before payment.",
      subtitle: 'SAFETY ABROAD',
      description: "Driving abroad? Check the route, countries and required period before choosing a Green Card policy.",
      forWho: 'Drivers traveling by car outside the country.',
      covers: "Motor third-party liability within the territory and conditions stated in the applicable documents.",
      advantages: ["Checking countries on the route", "Clarifying the policy period", "Guidance on documents and notification"],
      cta: 'Calculate Green Card',
      link: 'https://easigurari.com/ro/green-card',
      image: '/images/optimized-20261121-v1/carte-verde.webp',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Road accidents outside the Republic of Moldova', 'Civil liability according to the laws of the visited country', 'Vehicle repatriation costs (depending on clauses)'] },
        advantages: { title: 'Advantages', items: ["Checking validity in visited countries", "Clarifying claims contact information", "Keeping travel documents"] },
        disadvantages: { title: 'Limitations', items: ['Valid only in countries specified in the policy', 'Does not replace CASCO insurance', "Route and border requirements to check before departure"] }
      }
    },
    {
      id: 'medicala',
      title: 'Medical Insurance',
      seoTitle: 'Travel Health Insurance | Protection Abroad | ING Broker',
      seoDescription: "Travel medical insurance: check services, territory, limits, deductibles and assistance procedures in the policy conditions.",
      subtitle: 'TRAVEL PROTECTION',
      description: "For holidays or business travel, compare proposed medical services, limits and exclusions. Payment of expenses and assistance depend on the insurer's conditions.",
      forWho: 'Tourists, students, and professionals traveling externally.',
      covers: "Medical services and expenses accepted under the policy, within its limits and territory.",
      advantages: ["Checking territory and period", "Explaining deductibles and limits", "Clarifying assistance channels and language"],
      cta: 'Calculate insurance',
      link: 'https://easigurari.com/ro/health-insurance',
      image: '/images/optimized-20261121-v1/asigurare-medicala-travel.webp',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Medical emergencies and accidents abroad', 'Hospitalization costs and surgical interventions', 'Medical repatriation or in case of death'] },
        advantages: { title: 'Advantages', items: ["COVID-19 conditions, if the risk is included", "Assistance service hours and contacts", "Direct payment or reimbursement, if provided"] },
        disadvantages: { title: 'Limitations', items: ["Conditions and exclusions for pre-existing conditions", 'Exclusions for extreme sports (without special clause)', 'Age limits for certain plans'] }
      }
    },
    {
      id: 'casco',
      title: 'CASCO',
      seoTitle: "CASCO in Moldova: proposals and conditions | ING Broker",
      seoDescription: "Compare CASCO: accepted risks, repairs, exclusions and deductibles. Cover is confirmed by the insurer's conditions and policy.",
      subtitle: 'Total car protection',
      description: "For your own car, we compare CASCO proposals and explain included risks, exclusions and the share of a loss you bear under the contract.",
      forWho: "Owners of new or used cars who want to compare available options.",
      covers: "Risks to your own car accepted in the policy, subject to contractual conditions and limits.",
      advantages: ["Checking repair conditions", "Clarifying assistance, if included", "Comparing risks and deductibles"],
      cta: 'See CASCO details',
      link: 'https://easigurari.com/ro/article/asigurarea-casco',
      image: '/images/optimized-20261121-v1/asigurare-casco.webp',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Accidental damage (collisions, rollovers)', 'Total or partial theft of the vehicle', 'Vandalism and natural phenomena (hail, floods)'] },
        advantages: { title: 'Advantages', items: ["Accident situations accepted in the contract", "Agreed repair providers and procedures", "Additional equipment, if included"] },
        disadvantages: { title: 'Limitations', items: ['Application of deductible according to contract', 'Exclusions for wear or mechanical defects', "Conditions and exclusions relating to gross negligence"] }
      }
    },
    {
      id: 'locuinta',
      title: 'Home Insurance',
      seoTitle: 'Home & Property Insurance | Protect Your House | ING Broker',
      seoDescription: "Home insurance in Moldova: compare accepted property, risks, liability towards neighbours and contractual limits.",
      subtitle: 'Your home, safe',
      description: "Check the home structure, contents and liability towards neighbours separately. Their inclusion, limits and claim payments depend on the selected contract.",
      forWho: 'Owners of apartments and houses.',
      covers: "Property and risks accepted in the policy, with a separate check of civil liability.",
      advantages: ["Checking declared values", "Clarifying liability towards neighbours", "Explaining notification procedures"],
      cta: 'See Home details',
      link: 'https://easigurari.com/ro/article/asigurare-locuinta-si-bunuri-imobile-si-mobile-r-moldova',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Fire, explosion, lightning', 'Natural disasters (earthquake, floods)', 'Theft of goods from home and vandalism'] },
        advantages: { title: 'Advantages', items: ["Liability towards neighbours, if included", 'Protection for finishes and valuable goods', "Home technical assistance, if provided"] },
        disadvantages: { title: 'Limitations', items: ['Exclusions for buildings with high seismic risk', 'Does not cover cash or unvalued jewelry', 'Limitations for goods in open spaces'] }
      }
    },
    {
      id: 'accidente',
      title: 'Accidents',
      seoTitle: 'Personal Accident Insurance | Financial Security | ING Broker',
      seoDescription: "Accident insurance: people, events, sums and limits to check in the policy. Payment is determined under the insurer's conditions.",
      subtitle: 'Personal safety',
      description: "Accident insurance may provide financial support for events accepted in the contract. Check people, activities, sums and exclusions before choosing.",
      forWho: 'Active people, athletes, and prudent families.',
      covers: "Accident consequences accepted in the contract, subject to its limits and conditions.",
      advantages: ["Comparing insured sums", "Checking territory and activities", "Clarifying claim documents"],
      cta: 'See Accident details',
      link: 'https://easigurari.com/ro/article/asigurarea-de-accidente-angajatilor-r-moldova',
      image: '/images/optimized-20261121-v1/accidente2.webp',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Home or workplace accidents', 'Accidents during sports activities', 'Permanent or temporary disability'] },
        advantages: { title: 'Advantages', items: ["Payments and events provided in the contract", "Accepted territories and periods", "People who may be included in the policy"] },
        disadvantages: { title: 'Limitations', items: ['Exclusions for occupational diseases', 'Does not cover accidents under influence of substances', 'Age limits at subscription'] }
      }
    }
  ]
};

export const faqTranslations = {
  ro: [
    { q: 'Cum pot încheia o asigurare RCA online?', a: "Accesează calculatorul și verifică datele, perioada, prețul și condițiile înainte de plată. Confirmă că polița a fost emisă și verifică data începutului valabilității în documentul final. Nu presupune emiterea instantanee." },
    { q: 'Ce documente sunt necesare pentru Cartea Verde?', a: 'Aveți nevoie de certificatul de înmatriculare al vehiculului și actul de identitate al persoanei care încheie asigurarea.' },
    { q: 'Asigurarea medicală acoperă și riscul de COVID-19?', a: "Nu presupune includerea COVID-19. Verifică explicit riscul, serviciile, limitele, excluderile și procedura de asistență în condițiile variantei propuse." },
    { q: 'Care este diferența între RCA și CASCO?', a: "RCA privește răspunderea față de terți, iar CASCO privește riscurile pentru mașina proprie acceptate contractual. Nu presupune că orice daună proprie este inclusă indiferent de împrejurări. Verifică documentele aplicabile fiecărei polițe." },
    { q: 'Pot asigura o locuință închiriată?', a: 'Da, atât proprietarul cât și chiriașul pot încheia asigurări pentru bunuri sau răspundere civilă față de terți.' }
  ],
  ru: [
    { q: 'Как я могу оформить страховку ОСАГО онлайн?', a: "Откройте расчет и до оплаты проверьте данные, период, цену и условия. Убедитесь, что полис выпущен, и проверьте начало действия в итоговом документе. Не рассчитывайте на мгновенный выпуск." },
    { q: 'Какие документы необходимы для Зеленой карты?', a: 'Вам понадобится свидетельство о регистрации транспортного средства и документ, удостоверяющий личность лица, оформляющего страховку.' },
    { q: 'Покрывает ли медицинская страховка риск COVID-19?', a: "Не предполагайте включение COVID-19. Отдельно проверьте риск, услуги, лимиты, исключения и порядок помощи в условиях предложенного варианта." },
    { q: 'В чем разница между ОСАГО и КАСКО?', a: "RCA касается ответственности перед третьими лицами, а КАСКО - рисков для собственного автомобиля, принятых по договору. Не любой ущерб автомобилю включен независимо от обстоятельств. Проверьте документы каждого полиса." },
    { q: 'Могу ли я застраховать арендованное жилье?', a: 'Да, как владелец, так и арендатор могут оформить страховку имущества или гражданской ответственности перед третьими лицами.' }
  ],
  en: [
    { q: 'How can I take out RCA insurance online?', a: "Open the calculator and check details, period, price and conditions before payment. Confirm that the policy has been issued and check its start date in the final document. Do not assume instant issuance." },
    { q: 'What documents are needed for the Green Card?', a: 'You need the vehicle registration certificate and the identity document of the person taking out the insurance.' },
    { q: 'Does medical insurance also cover the risk of COVID-19?', a: "Do not assume COVID-19 is included. Explicitly check the risk, services, limits, exclusions and assistance procedure in the proposed option." },
    { q: 'What is the difference between RCA and CASCO?', a: "RCA concerns liability to third parties, while CASCO concerns contractually accepted risks to your own car. Do not assume every loss to your own vehicle is included regardless of circumstances. Check each policy's applicable documents." },
    { q: 'Can I insure a rented home?', a: 'Yes, both the owner and the tenant can take out insurance for goods or civil liability towards third parties.' }
  ]
};
