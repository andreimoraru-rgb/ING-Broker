import { businessProductsTranslations } from './translations/businessProducts';

export type Language = 'ro' | 'ru' | 'en';

export const translations = {
  ro: {
    ...businessProductsTranslations.ro,
    nav: ['Personal', 'Soluții Corporate', 'Reasigurare', 'Despre Noi', 'Contact'],
    clientAccount: 'Calculează Online',
    logoAlt: 'Logo ING Broker',
    hero: {
      segment: 'Broker Licențiat CNPF - 6 Asigurători Parteneri',
      title: 'Asigurări corporative',
      titleItalic: 'economisești 15-30%.',
      description: 'Broker licențiat CNPF. 6 companii partenere. Ofertă comparativă în 15 minute. Fără obligații.',
      cta1: 'Vreau audit gratuit',
      cta2: 'Sună acum - L-V 9:00-18:00',
      scroll: 'Scroll pentru explorare'
    },
    trustStripBenefits: [
      "200+ clienți B2B activi",
      "6 asigurători parteneri CNPF",
      "Ofertă în 15 minute",
      "20 de ani experiență Moldova"
    ],
    intro: {
      title: 'Expertiză în',
      titleItalic: 'Managementul Riscului.',
      p1: 'La ING Broker, segmentul Personal nu este doar o listă de produse, ci o arhitectură complexă de siguranță proiectată pentru a proteja ceea ce contează cu adevărat. Am selectat exclusiv soluții de elită, oferindu-ți acces la protecție de nivel internațional prin prisma unei consultanțe fiduciară, transparente și orientate spre rezultat.',
      p2: 'Indiferent de complexitatea nevoilor tale - de la mobilitate urbană la securizarea activelor de familie - structura noastră de brokeraj îți garantează nu doar polița optimă, ci și un parteneriat strategic în gestionarea oricărui eveniment neprevăzut.'
    },
    productLabels: {
      destined: 'Destinat',
      coverage: 'Acoperire'
    },
    comparison: {
      title: 'Ce tip de asigurare ți se potrivește?',
      subtitle: 'O privire rapidă asupra nevoilor tale de protecție pentru a face alegerea corectă.',
      cards: [
        { title: 'Mobilitate', desc: 'Alege RCA pentru obligativitate, Carte Verde pentru ieșiri externe sau CASCO pentru protecția investiției tale auto.' },
        { title: 'Călătorii & Sănătate', desc: 'Protecție medicală completă peste hotare sau siguranță financiară în caz de accidente neprevăzute în viața de zi cu zi.' },
        { title: 'Patrimoniu', desc: 'Securizează-ți cel mai important activ: locuința. Protecție împotriva dezastrelor și răspundere civilă față de vecini.' }
      ]
    },
    whyUs: {
      label: 'De ce ING Broker',
      title: 'Autoritate în Brokeraj,',
      titleItalic: 'Dedicată Ție.',
      items: [
        { title: 'Autoritate în Managementul Riscului', desc: 'Decenii de expertiză în gestionarea riscurilor complexe la nivel corporate, acum transpuse în soluții de elită pentru segmentul personal.' },
        { title: 'Specializare Sectorială Avansată', desc: 'Adaptăm arhitectura de asigurare la specificul fiecărui profil de risc, asigurând o acoperire fără zone gri sau ambiguități contractuale.' },
        { title: 'Integritate Fiduciară', desc: 'Transparență absolută. Îți oferim claritatea necesară pentru a înțelege exact mecanismele de protecție și valoarea reală a poliței tale.' },
        { title: 'Suport Strategic în caz de Daună', desc: 'Nu ești singur în fața riscului. Echipa noastră de experți preia managementul daunei, garantând o soluționare corectă și rapidă.' }
      ],
      years: 'Ani de Autoritate'
    },
    methodology: {
      title: 'Metodologia',
      titleItalic: 'ING Broker.',
      subtitle: 'Un proces riguros, extras din rigorile brokerajului corporate, aplicat pentru siguranța ta personală.',
      steps: [
        {
          number: '01',
          title: 'Audit de Risc',
          desc: 'Nu vindem polițe, ci analizăm expuneri. Identificăm vulnerabilitățile patrimoniului și stilului tău de viață pentru a defini o bază solidă de protecție.'
        },
        {
          number: '02',
          title: 'Arhitectura Soluției',
          desc: 'Structurăm un program de asigurare personalizat, selectând exclusiv clauzele care aduc valoare reală și eliminând costurile inutile.'
        },
        {
          number: '03',
          title: 'Management Fiduciar',
          desc: 'Suntem reprezentantul tău în fața asigurătorilor. Gestionăm contractele, monitorizăm riscurile și asigurăm succesul oricărei cereri de despăgubire.'
        }
      ]
    },
    faq: {
      title: 'Întrebări Frecvente',
      subtitle: 'Tot ce trebuie să știi despre asigurările tale personale.'
    },
    finalCta: {
      title: 'Reduci costul asigurărilor',
      subtitle: 'cu 15-30% față de piața liberă.',
      cta1: 'Vreau audit gratuit al asigurărilor',
      cta2: 'Sună acum: +(373) 69 526 003'
    },
    corporateGateway: {
      label: 'B2B & Corporate',
      title: 'Soluții Complexe pentru Afaceri',
      desc: 'Sunteți proprietarul unei afaceri? Dincolo de asigurările personale, ING Broker este lider în structurarea programelor complexe de asigurare și reasigurare pentru corporații. Protejăm activele, răspunderea și continuitatea afacerii dumneavoastră la standarde internaționale.',
      btnBusiness: 'Descoperă Soluțiile Corporate',
      btnReinsurance: 'Reasigurări & Fronting'
    },
    footer: {
      desc: 'Partenerul tău strategic în asigurări și reasigurări. Oferim soluții premium adaptate nevoilor tale de business și personale.',
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
      label: 'Resurse & Insights',
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
          desc: 'Descoperă factorii care influențează costul poliței tale RCA și cum poți obține cel mai bun preț.',
          link: '/news/cum-se-determin%C4%83-pre%C8%9Bul-unei-asigur%C4%83ri-rca-ghid-pentru-un-pre%C8%9B-rca-accesibil',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        },
        {
          title: 'Carte Verde Moldova 2026 - Prețuri, zone, digital vs tipărită',
          desc: 'Tot ce trebuie să știi despre Cartea Verde în 2026: noutăți legislative, prețuri și formatul digital.',
          link: '/news/carte-verde-moldova-2026-pre%C8%9Buri-zone-digital-vs-tip%C4%83rit%C4%83-tot-ce-trebuie-s%C4%83-%C8%99tii',
          image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    business: {
      title: 'Soluții Corporate',
      titleItalic: 'pentru lideri de piață.',
      subtitle: 'Protejăm activele, răspunderea și continuitatea afacerii tale. Abordarea noastră se bazează pe managementul integrat al riscului: Identificare, Evaluare, Transfer și Retenție. Oferim programe de asigurare complexe pentru corporații, adaptate fiecărei industrii.',
      cta1: 'Solicită audit de risc',
      cta2: 'Discută cu un expert',
      faq: {
        title: 'Întrebări Frecvente',
        items: [
          { q: 'Ce tipuri de asigurări corporate oferiți?', a: 'Oferim o gamă completă de soluții B2B, inclusiv asigurări de bunuri (Property), răspundere civilă generală și profesională (Liability, E&O), asigurări cibernetice (Cyber), asigurări pentru directori și administratori (D&O), asigurări auto flotă și Cargo.' },
          { q: 'Cum mă ajută un broker de asigurări B2B?', a: 'Un broker B2B precum ING Broker acționează ca un consultant de risc. Noi identificăm și evaluăm riscurile specifice industriei tale, negociem cele mai bune condiții și prime cu asigurătorii și te reprezentăm în caz de daună, economisindu-ți timp și resurse.' },
          { q: 'Oferiți soluții pentru riscuri complexe sau internaționale?', a: 'Da, prin departamentul nostru de Reasigurări & Fronting, structurăm programe pentru riscuri care depășesc capacitatea pieței locale, facilitând accesul la piețele internaționale (ex. Lloyd\'s) și oferind soluții de fronting pentru corporații multinaționale.' },
          { q: 'Cât durează un audit de risc?', a: 'Durata unui audit de risc variază în funcție de complexitatea și dimensiunea companiei, dar de obicei durează între câteva zile și câteva săptămâni. Implică o analiză detaliată a operațiunilor, activelor și expunerilor financiare.' }
        ]
      },
      lines: [
        { 
          id: 'property', 
          title: 'Bunuri și proprietăți', 
          desc: 'Protejăm activele fizice ale companiei tale împotriva incendiilor, calamităților și avariilor accidentale. Soluțiile noastre acoperă clădiri, echipamente și stocuri, incluzând protecție vitală pentru întreruperea afacerii. Destinat industriilor de producție, retail și logistică, ING Broker îți securizează investițiile pe piața din R. Moldova cu expertiză internațională.', 
          image: '/Construcții Comerciale.jpg', 
          category: 'ASSETS', 
          link: '/property-assets',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Incendiu, explozie, trăsnet', 'Calamități naturale (cutremur, inundații)', 'Furt și vandalism'] },
            advantages: { title: 'Avantaje', items: ['Protecția bazei materiale a afacerii', 'Acoperire pentru pierderea profitului', 'Flexibilitate în alegerea limitelor'] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru uzură normală', 'Necesitatea sistemelor de securitate funcționale', 'Franșize obligatorii pentru anumite riscuri'] }
          }
        },
        { 
          id: 'liability', 
          title: 'Răspunderi generale', 
          desc: 'Securizează-ți afacerea împotriva pretențiilor financiare rezultate din daune materiale sau vătămări corporale cauzate terților. Oferim polițe complexe de răspundere civilă, esențiale pentru construcții, HoReCa și servicii. Cu o înțelegere profundă a riscurilor locale, ING Broker negociază limite optime pentru a-ți proteja reputația și capitalul.', 
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2560', 
          category: 'LIABILITY', 
          link: '/business/liability',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Vătămări corporale cauzate terților', 'Daune materiale aduse bunurilor terților', 'Poluare accidentală'] },
            advantages: { title: 'Avantaje', items: ['Protecție împotriva cererilor de despăgubire masive', 'Acoperirea cheltuielilor de judecată', 'Menținerea reputației companiei'] },
            disadvantages: { title: 'Limitări', items: ['Nu acoperă răspunderea contractuală pură', 'Excluderi pentru daune intenționate', 'Limite geografice de acoperire'] }
          }
        },
        { 
          id: 'professional', 
          title: 'Răspundere profesională', 
          desc: 'Protecție financiară absolută pentru erori, omisiuni sau neglijență în prestarea serviciilor de consultanță și proiectare. Indispensabilă pentru IT, inginerie, arhitectură și servicii juridice. ING Broker structurează programe de asigurare personalizate, garantând siguranța profesioniștilor și continuitatea afacerilor pe piața din R. Moldova.', 
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200', 
          category: 'LIABILITY', 
          link: '/business/professional',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Erori și omisiuni profesionale', 'Neglijență în prestarea serviciilor', 'Încălcarea confidențialității datelor'] },
            advantages: { title: 'Avantaje', items: ['Siguranță pentru experți și consultanți', 'Cerință obligatorie pentru anumite profesii', 'Acoperire pentru daune financiare pure'] },
            disadvantages: { title: 'Limitări', items: ['Nu acoperă activități în afara specializării', 'Excluderi pentru fapte penale', 'Principiul "claims-made" (cereri depuse în perioada poliței)'] }
          }
        },
        { 
          id: 'do', 
          title: 'D&O', 
          desc: 'Scut de protecție pentru patrimoniul personal al managerilor și administratorilor în fața acuzațiilor de management defectuos. Acoperă costuri de apărare și litigii inițiate de acționari sau autorități. Vital pentru corporații și instituții financiare, ING Broker aduce expertiză de top pentru a asigura deciziile strategice ale liderilor tăi.', 
          image: '/d&o.jpg', 
          category: 'EXECUTIVE', 
          link: '/business/do',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Decizii manageriale eronate', 'Culpa în supraveghere', 'Litigii inițiate de acționari sau angajați'] },
            advantages: { title: 'Avantaje', items: ['Protecția patrimoniului personal al managerilor', 'Atragerea de talente în conducere', 'Acoperire pentru investigații oficiale'] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru fraudă dovedită', 'Nu acoperă amenzile penale', 'Limitări pentru tranzacții de fuziuni și achiziții nedeclarate'] }
          }
        },
        { 
          id: 'cyber', 
          title: 'Cyber', 
          desc: 'Răspuns rapid și acoperire financiară în fața atacurilor ransomware, scurgerilor de date și întreruperilor IT. Destinat companiilor de e-commerce, sănătate și tech. ING Broker îți aliniază afacerea la standardele globale de securitate cibernetică, minimizând impactul financiar și reputațional în mediul digital din R. Moldova.', 
          image: '/cyber-insurance-3.jpg', 
          category: 'TECH', 
          link: '/business/cyber',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Atacuri ransomware și hacking', 'Întreruperea activității din cauze IT', 'Scurgeri de date cu caracter personal'] },
            advantages: { title: 'Avantaje', items: ['Acces la echipe de intervenție rapidă', 'Acoperire pentru costurile de notificare', 'Protecție împotriva extorcării cibernetice'] },
            disadvantages: { title: 'Limitări', items: ['Necesită standarde minime de securitate IT', 'Nu acoperă pierderea valorii proprietății intelectuale', 'Excluderi pentru infrastructura publică'] }
          }
        },
        { 
          id: 'cargo', 
          title: 'Cargo și transport', 
          desc: 'Garantăm siguranța mărfurilor în tranzit rutier, maritim, aerian sau feroviar, acoperind riscuri de avariere, furt sau accidente. Soluții "All Risks" esențiale pentru logistică, import-export și producție. Cu ING Broker, lanțul tău de aprovizionare beneficiază de protecție internațională și decontare rapidă a daunelor.', 
          image: '/logistica.jpg', 
          category: 'LOGISTICS', 
          link: '/business/cargo',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Avarierea mărfurilor în timpul transportului', 'Furtul sau dispariția încărcăturii', 'Accidente ale mijlocului de transport'] },
            advantages: { title: 'Avantaje', items: ['Acoperire "All Risks" disponibilă', 'Protecție pe tot parcursul rutei internaționale', 'Decontare rapidă bazată pe valoarea facturii'] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru ambalare necorespunzătoare', 'Limitări pentru mărfuri perisabile', 'Necesitatea respectării rutelor aprobate'] }
          }
        },
        { 
          id: 'fleet', 
          title: 'Auto flotă', 
          desc: 'Management eficient al riscurilor pentru parcurile auto corporative, cu acoperiri CASCO și RCA optimizate. Protejăm flotele de distribuție, curierat și transport persoane împotriva accidentelor și furtului. ING Broker negociază tarife preferențiale și oferă administrare centralizată pentru a-ți menține afacerea în mișcare.', 
          image: '/camionete.jpg', 
          category: 'MOBILITY', 
          link: '/business/fleet',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Accidente rutiere multiple', 'Furtul vehiculelor din flotă', 'Răspundere civilă extinsă'] },
            advantages: { title: 'Avantaje', items: ['Administrare simplificată a polițelor', 'Reduceri de volum (fleet discount)', 'Asistență rutieră prioritară'] },
            disadvantages: { title: 'Limitări', items: ['Monitorizarea riguroasă a daunelor necesară', 'Franșize per eveniment', 'Restricții privind utilizatorii vehiculelor'] }
          }
        },
        { 
          id: 'credit', 
          title: 'Asigurarea creditelor', 
          desc: 'Protejează-ți fluxul de numerar împotriva neplății facturilor și a insolvenței clienților B2B. O soluție strategică pentru comerțul cu ridicata, producție și exportatori. ING Broker îți securizează încasările și facilitează extinderea comercială în siguranță, demonstrând un control riguros al riscului financiar.', 
          image: '/credit insurance.jpg', 
          category: 'FINANCE', 
          link: '/business/credit',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Insolvența clienților', 'Întârzierea prelungită la plată', 'Riscuri politice în export'] },
            advantages: { title: 'Avantaje', items: ['Îmbunătățirea cash-flow-ului', 'Acces mai ușor la finanțare bancară', 'Monitorizarea bonității clienților inclusă'] },
            disadvantages: { title: 'Limitări', items: ['Nu acoperă disputele comerciale', 'Limite de credit per cumpărător', 'Procent de co-asigurare obligatoriu'] }
          }
        },
        { 
          id: 'construction', 
          title: 'Construcții și montaj', 
          desc: 'Acoperire "Toate Riscurile" pentru proiecte de infrastructură, rezidențiale și industriale. Protejăm șantierele împotriva calamităților, incendiilor și erorilor de execuție. ING Broker oferă antreprenorilor și dezvoltatorilor din R. Moldova polițe complexe, conforme cu cerințele finanțatorilor și standardele internaționale FIDIC.', 
          image: '/Constructii-montaj.jpeg', 
          category: 'ENGINEERING', 
          link: '/business/construction',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Avarii accidentale ale lucrărilor', 'Distrugerea utilajelor de șantier', 'Răspunderea față de terți în perimetrul șantierului'] },
            advantages: { title: 'Avantaje', items: ['Protecție de la începerea lucrărilor până la recepție', 'Acoperire pentru perioada de mentenanță', 'Siguranță pentru investitori și bănci'] },
            disadvantages: { title: 'Limitări', items: ['Excluderi pentru erori de proiectare', 'Nu acoperă penalitățile contractuale', 'Necesitatea respectării normelor de protecție a muncii'] }
          }
        },
        { 
          id: 'benefits', 
          title: 'Asigurări de Sănătate și viață pentru angajați', 
          desc: 'Beneficii Angajați și Asigurări de Sănătate de Grup | Retenția Talentelor IT Moldova | ING Broker. Programe premium concepute pentru a crește retenția și loialitatea echipei. Indispensabile în sectorul IT, corporații și IMM-uri. ING Broker negociază pachete personalizate care transformă grija pentru angajați într-un avantaj competitiv major pe piața muncii.', 
          image: '/health.png', 
          category: 'HUMAN RESOURCES', 
          link: '/business/benefits',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Boli profesionale și accidente de muncă', 'Deces sau invaliditate a angajaților', 'Costuri medicale ridicate'] },
            advantages: { title: 'Avantaje', items: ['Creșterea loialității echipei', 'Deductibilitate fiscală (în limitele legii)', 'Acces la clinici private de top'] },
            disadvantages: { title: 'Limitări', items: ['Perioade de așteptare pentru anumite afecțiuni', 'Excluderi pentru boli cronice nedeclarate', 'Limite anuale de decontare'] }
          }
        },
        { 
          id: 'renewable', 
          title: 'Energia Regenerabilă', 
          desc: 'Securizăm investițiile în parcuri solare, eoliene și biogaz împotriva avariilor accidentale, fenomenelor meteo extreme și pierderii de profit. ING Broker susține tranziția verde a R. Moldova prin soluții de asigurare specializate, garantând protecția echipamentelor de înaltă tehnologie pe toată durata de viață a proiectului.', 
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200', 
          category: 'ENERGY', 
          link: '/renewable-energy',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Fenomene meteo extreme (grindină, furtună)', 'Defecțiuni tehnice și electrice', 'Pierderea profitului din lipsa producției'] },
            advantages: { title: 'Avantaje', items: ['Protecția investițiilor masive', 'Bankability ridicat pentru proiecte', 'Expertiză tehnică în evaluarea riscurilor verzi'] },
            disadvantages: { title: 'Limitări', items: ['Costuri variabile în funcție de locație', 'Cerințe stricte de mentenanță preventivă', 'Excluderi pentru degradare naturală'] }
          }
        },
        { 
          id: 'agriculture', 
          title: 'Riscuri agricole', 
          desc: 'Protecție vitală pentru culturi, animale și utilaje agricole în fața capriciilor naturii, bolilor și incendiilor. Destinat fermierilor și agribusiness-urilor locale. Cu expertiză aprofundată în sectorul agricol moldovenesc, ING Broker structurează polițe care garantează continuitatea afacerii tale, inclusiv accesarea subvențiilor de stat.', 
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200', 
          category: 'AGRICULTURE', 
          link: '/business/agriculture',
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Secetă, îngheț, grindină', 'Boli ale animalelor și epidemii', 'Avarii ale utilajelor agricole'] },
            advantages: { title: 'Avantaje', items: ['Subvenționarea primei de asigurare (unde e cazul)', 'Stabilitate financiară în ani agricoli dificili', 'Evaluare specializată a daunelor pe teren'] },
            disadvantages: { title: 'Limitări', items: ['Perioade de franșiză temporală', 'Excluderi pentru nerespectarea tehnologiei agricole', 'Limite de recoltă asigurată'] }
          }
        }
      ]
    },
    reinsurance: {
      title: 'Reasigurare & Fronting',
      titleItalic: 'capacitate și expertiză.',
      subtitle: 'Acces direct la piețele internaționale de reasigurare și capacitate de plasament pentru riscuri complexe. Structurăm programe de reasigurare facultativă și tratate, oferind soluții de fronting pentru corporații multinaționale și proiecte de infrastructură majore.',
      cta1: 'Contactează departamentul',
      cta2: 'Solicită capacitate',
      faq: {
        title: 'Întrebări Frecvente - Reasigurări',
        items: [
          { q: 'Când are nevoie o companie de reasigurare facultativă?', a: 'Reasigurarea facultativă este necesară atunci când o companie se confruntă cu un risc individual foarte mare (ex. o fabrică de proporții, un proiect de infrastructură major) care depășește capacitatea de reținere a asigurătorilor locali sau când riscul este atipic și necesită expertiză internațională.' },
          { q: 'Ce înseamnă Fronting în asigurări?', a: 'Fronting-ul este un mecanism prin care un asigurător local (Fronting Company) emite o poliță conform legislației locale pentru o corporație multinațională, dar transferă (cedează) 100% din risc către un reasigurător internațional sau către compania captivă a corporației. Este esențial pentru conformitatea legală.' },
          { q: 'Cu ce piețe de reasigurare colaborați?', a: 'Avem acces la piețele internaționale de top, inclusiv Lloyd\'s of London și marii reasigurători din Europa Continentală, asigurându-ne că riscurile sunt plasate la entități cu rating financiar excelent (A- sau mai mare).' },
          { q: 'Care este diferența dintre reasigurarea proporțională și neproporțională?', a: 'În reasigurarea proporțională (ex. Quota Share), reasigurătorul preia un procent fix din prime și daune. În cea neproporțională (ex. Excess of Loss), reasigurătorul intervine doar dacă dauna depășește o anumită sumă prestabilită (prioritate), protejând asigurătorul de evenimente catastrofale.' }
        ]
      },
      lines: [
        { 
          id: 'facultative', 
          title: 'Reasigurare Facultativă', 
          desc: 'Plasamente individuale pentru riscuri atipice, expuneri majore sau industrii cu grad ridicat de complexitate (Energie, Aviație, Construcții). Negociem direct cu piețele internaționale (Lloyd\'s, Europa Continentală) pentru a obține termeni optimi și capacitate extinsă.', 
          image: '/reinsurance-1.webp', 
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Expuneri individuale care depășesc capacitatea pieței locale', 'Riscuri industriale complexe', 'Proiecte de infrastructură majore'] },
            advantages: { title: 'Avantaje', items: ['Transfer de risc precis și personalizat', 'Acces la rating-uri financiare de top (A- și peste)', 'Protecție împotriva volatilității'] },
            disadvantages: { title: 'Limitări', items: ['Proces de subscriere detaliat și riguros', 'Costuri influențate de condițiile pieței globale'] }
          }
        },
        { 
          id: 'treaty', 
          title: 'Tratate de Reasigurare', 
          desc: 'Soluții structurate pentru protecția portofoliilor de asigurări. Oferim consultanță în designul programelor proporționale și neproporționale (Quota Share, Surplus, Excess of Loss), optimizând capitalul și protejând bilanțul împotriva evenimentelor catastrofale.', 
          image: '/traty reinsurance-2.jpg', 
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Acumulări de riscuri catastrofale (Cutremur, Inundații)', 'Fluctuații majore ale ratei daunei', 'Protecția capitalului și a solvabilității'] },
            advantages: { title: 'Avantaje', items: ['Stabilitate financiară pe termen lung', 'Creșterea capacității de subscriere', 'Management eficient al capitalului (Solvency II)'] },
            disadvantages: { title: 'Limitări', items: ['Structuri contractuale complexe', 'Necesită analize actuariale avansate'] }
          }
        },
        { 
          id: 'fronting', 
          title: 'Programe de Fronting', 
          desc: 'Emitem polițe locale conforme cu legislația din Republica Moldova pentru programe globale de asigurare (Master Policies). Asigurăm conformitatea legală și fiscală, facilitând transferul riscului către reasigurătorii captivi sau piețele internaționale agreate de corporație.', 
          image: '/fronting.png', 
          analysis: {
            risks: { title: 'Riscuri Vizate', items: ['Cerințe stricte de conformitate locală', 'Managementul programelor globale de asigurare', 'Risc de credit al reasigurătorului'] },
            advantages: { title: 'Avantaje', items: ['Conformitate legală 100% garantată', 'Integrare perfectă în programul global', 'Eficiență administrativă și fiscală'] },
            disadvantages: { title: 'Limitări', items: ['Costuri administrative de fronting (Fronting Fee)', 'Dependență de rating-ul asigurătorului local emitent'] }
          }
        }
      ]
    },
    about: {
      hero: { 
        title: 'Lideri în Brokeraj și Managementul Riscului în Moldova', 
        subtitle: 'Insurance ING Broker SRL – partenerul tău de încredere pentru siguranță și stabilitate. Îți protejăm afacerea și familia prin soluții de asigurare clare, sigure și adaptate la realitățile noastre, oferind acces la cele mai bune piețe locale și internaționale.' 
      },
      intro: 'Insurance ING Broker SRL reprezintă punctul de referință în managementul riscului și arhitectura de reasigurare din Republica Moldova. Suntem o structură de brokeraj de elită, specializată în consultanță strategică, soluții complexe de transfer al riscului și parteneriate fiduciară pe termen lung pentru corporații și instituții financiare. Cu o abordare centrată pe client, oferim siguranță și stabilitate într-un mediu economic dinamic.',
      whoWeAre: {
        title: 'Cine Suntem',
        content: 'Suntem ingineri de risc și consultanți fiduciari care redefinesc rolul brokerului în ecosistemul financiar. Pentru noi, brokerajul nu este o simplă tranzacție, ci un proces riguros de auditare, înțelegere a expunerilor financiare și structurare a celor mai avansate soluții de protecție disponibile pe piețele locale și internaționale. Echipa noastră de experți analizează fiecare detaliu pentru a asigura o acoperire optimă, fără zone gri.'
      },
      mission: { 
        title: 'Misiunea Noastră', 
        content: 'Misiunea ING Broker este de a lăsa o amprentă solidă în istoria asigurărilor din Moldova și din Europa de Est. Ne propunem să asigurăm reziliența financiară a clienților noștri prin transformarea complexității riscurilor corporate și personale în decizii strategice clare, oferind protecție absolută și liniște sufletească.' 
      },
      vision: { 
        title: 'Viziunea Noastră', 
        content: 'Să dezvoltăm o multitudine de servicii de asigurări inovatoare în Moldova. Să importăm produse de asigurare care lipsesc pe piața locală și să le adaptăm la necesitățile specifice ale clienților noștri. Să educăm cetățenii în domeniul asigurărilor, devenind o componentă de bază în dezvoltarea culturii financiare a societății noastre și un lider recunoscut în inovație.' 
      },
      history: {
        title: 'Istoricul Nostru',
        content: 'Fondată în 2006, Insurance ING Broker SRL a fost printre primii brokeri licențiați din Republica Moldova, fiind prima companie de profil care a obținut certificarea ISO. De la dezvoltarea aplicației eAsigurari până la pionieratul în digitalizarea sectorului, am evoluat constant ca o structură orientată spre guvernanță corporativă și servicii de elită.'
      },
      values: {
        title: 'Valorile Noastre',
        items: ['Arhitectură de Risc Avansată', 'Excelență Operațională', 'Integritate Fiduciară Absolută', 'Transparență Radicală', 'Sinergie Strategică', 'Etică de Neclintit', 'Inovație Disruptivă în Risc']
      },
      differentiators: {
        title: 'Ce Ne Diferențiază',
        items: [
          { title: 'Licență Oficială și Tradiție', desc: 'Suntem printre primii brokeri din Republica Moldova cu licență oficială, oferind stabilitate și siguranță juridică absolută.' },
          { title: 'Pionierat în Educație', desc: 'Suntem pionierii care au început să dezvolte serviciile de asigurări la nivel de școală în piața locală, ridicând standardele întregii industrii.' },
          { title: 'Garanția Calității ISO', desc: 'Primii și unicii în Moldova deținători de certificate ISO, o dovadă incontestabilă a rigorii și calității proceselor noastre interne.' },
          { title: 'Conectivitate Internațională', desc: 'Deținem o rețea solidă de parteneri europeni și internaționali, facilitând accesul la capacități de reasigurare globale.' },
          { title: '20 de Ani de Excelență', desc: 'Un background și o expertiză validată de două decenii de activitate neîntreruptă și succes în gestionarea riscurilor complexe.' }
        ]
      },
      corporate: { title: 'Rechizite și Date Corporate', content: 'Denumire completă: Insurance ING Broker SRL,\nIDNO: 1017600019386,\nAdresa: mun. Chișinău, str. Pan Halippa 9,\nCEO: Ion Dascălu,\nLicență: CNPF 000874 din 06.10.2016,\nCertificare: ISO 9001:2015, certificat RO-11645' },
      cta: { title: 'Parteneriat Strategic', subtitle: 'Ești gata să ridici standardul de protecție al companiei tale? Echipa noastră de experți este pregătită să îți ofere un audit de risc complet.', btn: 'Solicită Consultanță Strategică' }
    },
    propertyAssets: {
      title: 'Asigurarea Bunurilor și Proprietăților',
      subtitle: 'Protecție completă pentru activele companiei tale, asigurând continuitatea afacerii în orice situație.',
      intro: 'Fie că este vorba despre clădiri de birouri, spații comerciale, fabrici sau echipamente esențiale, activele companiei tale reprezintă fundamentul operațiunilor zilnice. Insurance ING Broker SRL oferă soluții personalizate pentru a proteja atât bunurile imobile, cât și cele mobile împotriva riscurilor neprevăzute.',
      industries: {
        title: 'Ce acoperim',
        items: [
          { title: 'Bunuri Imobile', desc: 'Construcții comerciale, clădiri de birouri, fabrici, depozite și alte structuri fizice.', image: '/Construcții Comerciale.jpg' },
          { title: 'Bunuri Mobile', desc: 'Utilaje pentru business, echipamente industriale, tehnică de calcul și inventar.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Stocuri și Mărfuri', desc: 'Protecție pentru materiile prime, produsele finite și mărfurile aflate în depozit.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Întreruperea Afacerii', desc: 'Acoperirea pierderilor financiare rezultate din oprirea temporară a activității.', image: '/business-intrertuption.jpg' }
        ]
      },
      analysis: {
        risks: {
          title: 'Riscuri Acoperite',
          items: [
            'Incendiu, trăsnet, explozie',
            'Calamități naturale (cutremur, inundații, furtună)',
            'Furt prin efracție sau tâlhărie',
            'Avarii accidentale ale echipamentelor',
            'Vandalism și daune intenționate'
          ]
        },
        advantages: {
          title: 'Avantaje',
          items: [
            'Protecție financiară împotriva pierderilor majore',
            'Continuitatea afacerii asigurată',
            'Polițe personalizate pe specificul industriei',
            'Asistență rapidă în caz de daună',
            'Liniște și siguranță pentru investitori'
          ]
        },
        disadvantages: {
          title: 'Excepții și Limitări',
          items: [
            'Uzura normală și deprecierea în timp',
            'Daune intenționate provocate de asigurat',
            'Război, terorism sau confiscare (fără clauze speciale)',
            'Defecte de fabricație acoperite de garanție',
            'Nerespectarea normelor de siguranță'
          ]
        }
      },
      expertiseTitle: 'Protejăm Fundamentul Afacerii Tale',
      essentialTitle: 'De ce să alegi ING Broker?',
      whyUs: 'Te ajutăm să găsești asigurătorul potrivit, negociem pentru tine cel mai bun raport preț-calitate și îți oferim consultanță juridică de specialitate la apariția unui caz asigurat.',
      ctaTitle: 'Securizează-ți activele astăzi',
      ctaCall: 'Solicită ofertă',
      ctaEmail: 'Trimite email'
    },
    renewableEnergy: {
      title: 'Asigurarea Energiei Regenerabile',
      subtitle: 'Protejăm viitorul sustenabil prin soluții de asigurare de elită.',
      intro: 'Industria energiei regenerabile se confruntă cu riscuri unice, de la fenomene meteo extreme la defecțiuni tehnice complexe. Insurance ING Broker SRL oferă programe de asigurare specializate care acoperă întregul ciclu de viață al unui proiect: construcție, operare și mentenanță.',
      industries: {
        title: 'Industrii și Tehnologii Acoperite',
        items: [
          { title: 'Panouri Solare (Fotovoltaice)', desc: 'Protecție completă pentru parcuri solare împotriva grindinei, furtunii, incendiului, furtului și pierderii de venit din cauza întreruperii producției.' },
          { title: 'Turbine Eoliene', desc: 'Acoperire pentru mori eoliene, incluzând defecțiuni mecanice, daune cauzate de trăsnet, avarii la pale și pierderi financiare operaționale.' },
          { title: 'Stocarea Energiei (Baterii)', desc: 'Siguranță pentru sistemele de stocare a energiei electrice, gestionând riscurile de incendiu chimic, degradare prematură și erori de integrare.' },
          { title: 'Hidrocentrale Electrice', desc: 'Protecție specializată pentru infrastructura hidro, acoperind riscurile de inundații extreme, avarii la turbine și impactul asupra mediului.', image: '/hidrocentrala.jpg' }
        ]
      },
      analysis: {
        risks: { title: 'Riscuri Principale', items: ['Fenomene meteo extreme (grindină, uragan)', 'Defecțiuni mecanice și electrice', 'Furt, vandalism și atacuri cibernetice', 'Pierderi de profit (Business Interruption)'] },
        advantages: { title: 'Avantaje Strategice', items: ['Stabilitate financiară pe termen lung', 'Bancabilitate ridicată pentru finanțări', 'Acces la experți în evaluarea riscurilor verzi'] },
        disadvantages: { title: 'Provocări și Considerații', items: ['Costuri de primă în funcție de locație', 'Complexitatea procesului de despăgubire', 'Necesitatea mentenanței riguroase'] }
      },
      whyUs: 'De ce este esențială această asigurare? Investițiile în energie regenerabilă sunt masive și expuse direct forțelor naturii. O singură furtună de grindină poate distruge un întreg parc fotovoltaic, iar o defecțiune la o turbină eoliană poate opri producția pentru luni de zile. Asigurarea nu este doar o cheltuială, ci fundamentul siguranței investiției tale.',
      expertiseTitle: 'Expertiză în Managementul Riscurilor Verzi',
      essentialTitle: 'De ce este esențială această asigurare?',
      ctaTitle: 'Protejați-vă investiția în viitor',
      ctaCall: 'Sună acum',
      ctaEmail: 'Trimite Email'
    },
    seo: {
      home: {
        title: 'ING Broker Moldova | Consultanță de Elită în Asigurări și Reasigurări',
        description: 'Lider în managementul riscului în Moldova. Oferim soluții premium de asigurare: RCA, CASCO, asigurări de bunuri, sănătate și reasigurări complexe pentru corporații și persoane fizice.'
      },
      business: {
        title: 'Asigurări Corporate și Managementul Riscului | ING Broker Moldova',
        description: 'Soluții B2B avansate pentru afaceri. Programe complexe de asigurare: Property, Liability, Cyber, D&O, Cargo și Flote. Audit de risc profesionist pentru continuitatea afacerii.'
      },
      reinsurance: {
        title: 'Reasigurări și Fronting | Capacitate Internațională | ING Broker',
        description: 'Acces strategic la piețele globale de reasigurare (Lloyd\'s). Structurăm programe facultative și treaty, oferind soluții de fronting pentru proiecte majore de infrastructură.'
      },
      about: {
        title: 'Despre Noi | Insurance ING Broker SRL | Expertiză și Încredere',
        description: 'Insurance ING Broker SRL este un broker de asigurare și reasigurare de elită în Republica Moldova, licențiat CNPF și certificat ISO 9001:2015. Oferim de peste 18 ani consultanță strategică, managementul riscurilor complexe și soluții de asigurare personalizate pentru persoane fizice și corporații.'
      },
      propertyAssets: {
        title: 'Asigurarea Bunurilor și Proprietăților Corporate | ING Broker',
        description: 'Protecție maximă pentru activele companiei: clădiri, utilaje, stocuri. Asigurare împotriva incendiilor și calamităților cu acoperire pentru întreruperea afacerii în Moldova.'
      },
      renewableEnergy: {
        title: 'Asigurări Energie Regenerabilă | Parcuri Solare și Eoliene | ING Broker',
        description: 'Securizăm investițiile în energie verde. Asigurări specializate pentru parcuri fotovoltaice și turbine eoliene împotriva riscurilor meteo și defecțiunilor tehnice.'
      },
      terms: {
        title: 'Termeni și Condiții | Insurance ING Broker SRL',
        description: 'Cadrul legal pentru utilizarea serviciilor ING Broker. Transparență și profesionalism în relația cu clienții noștri.'
      },
      privacy: {
        title: 'Politica de Confidențialitate | Protecția Datelor | ING Broker',
        description: 'Angajamentul nostru pentru securitatea datelor dumneavoastră. Informații despre colectarea și procesarea datelor cu caracter personal conform GDPR.'
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
      "Элитный брокер в Молдове",
      "Персонализированная консультация",
      "Реальная поддержка 24/7",
      "Международная экспертиза"
    ],
    intro: {
      title: 'Экспертиза в',
      titleItalic: 'Управлении Рисками.',
      p1: 'В ING Broker персональный сегмент - это не просто список продуктов, а сложная архитектура безопасности, разработанная для защиты того, что действительно важно. Мы отобрали исключительно элитные решения, предоставляя вам доступ к защите международного уровня через призму фидуциарного, прозрачного и ориентированного на результат консультирования.',
      p2: 'Независимо от сложности ваших потребностей - от городской мобильности до обеспечения безопасности семейных активов - наша брокерская структура гарантирует вам не только оптимальный полис, но и стратегическое партнерство в управлении любым непредвиденным событием.'
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
        { title: 'Путешествия и здоровье', desc: 'Полная медицинская защита за рубежом или финансовая безопасность в случае непредвиденных несчастных случаев в повседневной жизни.' },
        { title: 'Имущество', desc: 'Обезопасьте свой самый важный актив: дом. Защита от бедствий и гражданская ответственность перед соседями.' }
      ]
    },
    whyUs: {
      label: 'Почему ING Broker',
      title: 'Авторитет в Брокерских Услугах,',
      titleItalic: 'Посвященный Вам.',
      items: [
        { title: 'Авторитет в Управлении Рисками', desc: 'Десятилетия экспертизы в управлении сложными рисками на корпоративном уровне, теперь воплощенные в элитных решениях для персонального сегмента.' },
        { title: 'Продвинутая Отраслевая Специализация', desc: 'Мы адаптируем архитектуру страхования к специфике каждого профиля риска, обеспечивая покрытие без серых зон или контрактных двусмысленностей.' },
        { title: 'Фидуциарная Целостность', desc: 'Абсолютная прозрачность. Мы даем вам ясность, необходимую для точного понимания механизмов защиты и реальной стоимости вашего полиса.' },
        { title: 'Стратегическая Поддержка при Убытках', desc: 'Вы не одиноки перед лицом риска. Наша команда экспертов берет на себя управление убытками, гарантируя справедливое и быстрое урегулирование.' }
      ],
      years: 'Лет Авторитета'
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
          desc: 'Мы структурируем индивидуальную программу страхования, выбирая исключительно те условия, которые приносят реальную пользу, и исключая ненужные расходы.'
        },
        {
          number: '03',
          title: 'Фидуциарное Управление',
          desc: 'Мы - ваш представитель перед страховщиками. Мы управляем контрактами, отслеживаем риски и обеспечиваем успех любого требования о возмещении ущерба.'
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
      desc: 'Вы владелец бизнеса? Помимо личного страхования, ING Broker является лидером в структурировании комплексных программ страхования и перестрахования для корпораций. Мы защищаем ваши активы, ответственность и непрерывность бизнеса по международным стандартам.',
      btnBusiness: 'Узнать о Корпоративных Решениях',
      btnReinsurance: 'Перестрахование и Фронтинг'
    },
    footer: {
      desc: 'Ваш стратегический партнер в страховании и перестраховании. Мы предлагаем премиальные решения, адаптированные к вашим деловым и личным потребностям.',
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
          desc: 'Узнайте факторы, влияющие на стоимость вашего полиса ОСАГО и как получить лучшую цену.',
          link: '/news/cum-se-determin%C4%83-pre%C8%9Bul-unei-asigur%C4%83ri-rca-ghid-pentru-un-pre%C8%9B-rca-accesibil',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        },
        {
          title: 'Зеленая карта Молдова 2026 - Цены, зоны, цифровая против печатной',
          desc: 'Все, что вам нужно знать о Зеленой карте в 2026 году: законодательные новости, цены и цифровой формат.',
          link: '/news/carte-verde-moldova-2026-pre%C8%9Buri-zone-digital-vs-tip%C4%83rit%C4%83-tot-ce-trebuie-s%C4%83-%C8%99tii',
          image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    business: {
      title: 'Корпоративные решения',
      titleItalic: 'для лидеров рынка.',
      subtitle: 'Мы защищаем активы, ответственность и непрерывность вашего бизнеса. Наш подход основан на комплексном управлении рисками: Идентификация, Оценка, Передача и Удержание. Мы предлагаем сложные программы страхования для корпораций, адаптированные к каждой отрасли.',
      cta1: 'Запросить аудит рисков',
      cta2: 'Обсудить с экспертом',
      faq: {
        title: 'Часто задаваемые вопросы',
        items: [
          { q: 'Какие виды корпоративного страхования вы предлагаете?', a: 'Мы предлагаем полный спектр B2B решений, включая страхование имущества (Property), общую и профессиональную ответственность (Liability, E&O), киберстрахование (Cyber), страхование директоров и руководителей (D&O), автопарки и страхование грузов (Cargo).' },
          { q: 'Как мне поможет B2B страховой брокер?', a: 'B2B брокер, такой как ING Broker, выступает в роли консультанта по рискам. Мы выявляем и оцениваем специфические риски вашей отрасли, ведем переговоры о лучших условиях и премиях со страховщиками и представляем ваши интересы при наступлении страхового случая, экономя ваше время и ресурсы.' },
          { q: 'Предлагаете ли вы решения для сложных или международных рисков?', a: 'Да, через наш отдел Перестрахования и Фронтинга мы структурируем программы для рисков, превышающих емкость местного рынка, облегчая доступ к международным рынкам (например, Lloyd\'s) и предлагая решения по фронтингу для транснациональных корпораций.' },
          { q: 'Сколько времени занимает аудит рисков?', a: 'Продолжительность аудита рисков зависит от сложности и размера компании, но обычно занимает от нескольких дней до нескольких недель. Он включает в себя детальный анализ операций, активов и финансовых рисков.' }
        ]
      },
      lines: [
        { 
          id: 'property', 
          title: 'Имущество и активы', 
          desc: 'Мы защищаем физические активы вашей компании от пожаров, стихийных бедствий и случайных повреждений. Наши решения охватывают здания, оборудование и запасы, включая жизненно важную защиту от перерывов в производстве. Предназначено для производства, розничной торговли и логистики. ING Broker обеспечивает безопасность ваших инвестиций на рынке Молдовы с международным опытом.', 
          image: '/Construcții Comerciale.jpg', 
          category: 'АКТИВЫ', 
          link: '/property-assets',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Пожар, взрыв, удар молнии', 'Стихийные бедствия (землетрясение, наводнение)', 'Кража и вандализм'] },
            advantages: { title: 'Преимущества', items: ['Защита материальной базы бизнеса', 'Покрытие потери прибыли', 'Гибкость в выборе лимитов'] },
            disadvantages: { title: 'Ограничения', items: ['Исключения для естественного износа', 'Необходимость исправных систем безопасности', 'Обязательные франшизы для определенных рисков'] }
          }
        },
        { 
          id: 'liability', 
          title: 'Общая ответственность', 
          desc: 'Обезопасьте свой бизнес от финансовых претензий в результате материального ущерба или телесных повреждений, причиненных третьим лицам. Мы предлагаем комплексные полисы гражданской ответственности, необходимые для строительства, HoReCa и сферы услуг. Обладая глубоким пониманием местных рисков, ING Broker договаривается об оптимальных лимитах для защиты вашей репутации и капитала.', 
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2560', 
          category: 'ОТВЕТСТВЕННОСТЬ', 
          link: '/business/liability',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Телесные повреждения третьим лицам', 'Материальный ущерб имуществу третьих лиц', 'Случайное загрязнение'] },
            advantages: { title: 'Преимущества', items: ['Защита от крупных исков о возмещении ущерба', 'Покрытие судебных издержек', 'Сохранение репутации компании'] },
            disadvantages: { title: 'Ограничения', items: ['Не покрывает чистую контрактную ответственность', 'Исключения для умышленного ущерба', 'Географические ограничения покрытия'] }
          }
        },
        { 
          id: 'professional', 
          title: 'Профессиональная ответственность', 
          desc: 'Абсолютная финансовая защита от ошибок, упущений или халатности при оказании консалтинговых и проектных услуг. Незаменима для ИТ, инженерии, архитектуры и юридических услуг. ING Broker структурирует индивидуальные программы страхования, гарантируя безопасность профессионалов и непрерывность бизнеса на рынке Молдовы.', 
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200', 
          category: 'ОТВЕТСТВЕННОСТЬ', 
          link: '/business/professional',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Профессиональные ошибки и упущения', 'Небрежность при оказании услуг', 'Нарушение конфиденциальности данных'] },
            advantages: { title: 'Преимущества', items: ['Безопасность для экспертов и консультантов', 'Обязательное требование для определенных профессий', 'Покрытие чистых финансовых убытков'] },
            disadvantages: { title: 'Ограничения', items: ['Не покрывает деятельность вне специализации', 'Исключения для уголовных преступлений', 'Принцип "claims-made" (претензии, предъявленные в период действия полиса)'] }
          }
        },
        { 
          id: 'renewable', 
          title: 'Энергия', 
          desc: 'Мы обеспечиваем безопасность инвестиций в солнечные, ветровые и биогазовые парки от случайных поломок, экстремальных погодных явлений и потери прибыли. ING Broker поддерживает зеленый переход Молдовы с помощью специализированных страховых решений, гарантируя защиту высокотехнологичного оборудования на протяжении всего срока службы проекта.',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200', 
          category: 'ЭНЕРГЕТИКА', 
          link: '/renewable-energy',
          analysis: {
            risks: { title: 'Основные риски', items: ['Экстремальные погодные явления (град, шторм)', 'Механические и электрические неисправности', 'Кража, вандализм и кибератаки', 'Перерыв в производстве'] },
            advantages: { title: 'Стратегические преимущества', items: ['Долгосрочная финансовая стабильность', 'Высокая банковская привлекательность', 'Доступ к экспертам по оценке рисков'] },
            disadvantages: { title: 'Проблемы и соображения', items: ['Стоимость премии зависит от локации', 'Сложность процесса урегулирования', 'Необходимость строгого тех. обслуживания'] }
          }
        },
        { 
          id: 'agriculture', 
          title: 'Сельскохозяйственные риски', 
          desc: 'Жизненно важная защита сельскохозяйственных культур, животных и техники от капризов природы, болезней и пожаров. Предназначено для местных фермеров и агробизнеса. Обладая глубоким опытом в сельскохозяйственном секторе Молдовы, ING Broker структурирует полисы, гарантирующие непрерывность вашего бизнеса, включая доступ к государственным субсидиям.', 
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200', 
          category: 'СЕЛЬСКОЕ ХОЗЯЙСТВО', 
          link: '/business/agriculture',
          analysis: {
            risks: { title: 'Целевые риски', items: ['Засуха, заморозки, град', 'Болезни животных и эпидемии', 'Поломки сельскохозяйственной техники'] },
            advantages: { title: 'Преимущества', items: ['Субсидирование страховой премии', 'Финансовая стабильность в неурожайные годы', 'Специализированная оценка ущерба'] },
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
      intro: 'Insurance ING Broker SRL представляет собой эталон в управлении рисками и архитектуре перестрахования в Республике Молдова. Мы - элитная брокерская структура, специализирующаяся на стратегическом консалтинге, комплексных решениях по передаче рисков и долгосрочных фидуциарных партнерствах для корпораций и институтов.',
      mission: { 
        title: 'Наша Миссия', 
        content: 'Миссия ING Broker - оставить след (шаг) в истории страхования в Молдове и Восточной Европе. Мы стремимся обеспечить финансовую устойчивость наших клиентов путем превращения сложности корпоративных рисков в четкие стратегические решения.' 
      },
      vision: { 
        title: 'Наше Видение', 
        content: 'Развивать множество страховых услуг в Молдове. Импортировать страховые продукты, которых не хватает на местном рынке, адаптировать и развивать их здесь. Обучать граждан в области страхования, становясь базовым компонентом в развитии финансовой культуры нашего общества.' 
      },
      whyUs: {
        title: 'Почему мы?',
        subtitle: 'Наши конкурентные преимущества, которые делают нас вашим надежным партнером.',
        items: [
          { title: 'Официальная лицензия и традиции', desc: 'Мы входим в число первых брокеров в Республике Молдова с официальной лицензией, обеспечивая абсолютную стабильность и юридическую безопасность.' },
          { title: 'Пионерство в образовании', desc: 'Мы - пионеры, начавшие развивать страховые услуги на уровне школы на местном рынке, повышая стандарты всей отрасли.' },
          { title: 'Гарантия качества ISO', desc: 'Первые и единственные в Молдове обладатели сертификатов ISO, неоспоримое доказательство строгости и качества наших внутренних процессов.' },
          { title: 'Международная связь', desc: 'У нас есть солидная сеть европейских и международных партнеров, облегчающая доступ к глобальным перестраховочным мощностям.' },
          { title: '20 лет совершенства', desc: 'Бэкграунд и экспертиза, подтвержденные двумя десятилетиями непрерывной деятельности и успеха в управлении сложными рисками.' }
        ]
      },
      corporate: { title: 'Реквизиты и Корпоративные Данные', content: 'Полное наименование: Insurance ING Broker SRL,\nIDNO: 1017600019386,\nАдрес: мун. Кишинев, ул. Пан Халиппа 9,\nCEO: Ион Даскэлу,\nЛицензия: CNPF 000874 от 06.10.2016,\nСертификация: ISO 9001:2015, сертификат RO-11645' },
      cta: { title: 'Стратегическое Партнерство', subtitle: 'Готовы ли вы повысить стандарт защиты вашей компании? Наша команда экспертов готова предложить вам полный аудит рисков.', btn: 'Запросить Стратегический Консалтинг' }
    },
    propertyAssets: {
      title: 'Страхование Имущества и Активов',
      subtitle: 'Полная защита активов вашей компании, обеспечивающая непрерывность бизнеса в любой ситуации.',
      intro: 'Будь то офисные здания, коммерческие помещения, фабрики или необходимое оборудование, активы вашей компании являются основой повседневных операций. Insurance ING Broker SRL предлагает индивидуальные решения для защиты как недвижимого, так и движимого имущества от непредвиденных рисков.',
      industries: {
        title: 'Что мы покрываем',
        items: [
          { title: 'Недвижимое имущество', desc: 'Коммерческие здания, офисные здания, фабрики, склады и другие физические структуры.', image: '/Construcții Comerciale.jpg' },
          { title: 'Движимое имущество', desc: 'Бизнес-оборудование, промышленное оборудование, вычислительная техника и инвентарь.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Запасы и товары', desc: 'Защита сырья, готовой продукции и товаров на складе.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Перерыв в производстве', desc: 'Покрытие финансовых потерь в результате временной остановки деятельности.', image: '/business-intrertuption.jpg' }
        ]
      },
      analysis: {
        risks: {
          title: 'Покрываемые риски',
          items: [
            'Пожар, удар молнии, взрыв',
            'Стихийные бедствия (землетрясение, наводнение, буря)',
            'Кража со взломом или грабеж',
            'Случайное повреждение оборудования',
            'Вандализм и умышленный ущерб'
          ]
        },
        advantages: {
          title: 'Преимущества',
          items: [
            'Финансовая защита от крупных убытков',
            'Обеспечение непрерывности бизнеса',
            'Полисы, адаптированные к специфике отрасли',
            'Быстрая помощь в случае ущерба',
            'Спокойствие и безопасность для инвесторов'
          ]
        },
        disadvantages: {
          title: 'Исключения и ограничения',
          items: [
            'Нормальный износ и обесценивание с течением времени',
            'Умышленный ущерб, причиненный страхователем',
            'Война, терроризм или конфискация (без специальных оговорок)',
            'Производственные дефекты, покрываемые гарантией',
            'Несоблюдение правил техники безопасности'
          ]
        }
      },
      expertiseTitle: 'Мы защищаем основу вашего бизнеса',
      essentialTitle: 'Почему стоит выбрать ING Broker?',
      whyUs: 'Мы помогаем вам найти подходящего страховщика, договариваемся для вас о лучшем соотношении цены и качества и предлагаем специализированные юридические консультации при наступлении страхового случая.',
      ctaTitle: 'Защитите свои активы сегодня',
      ctaCall: 'Запросить предложение',
      ctaEmail: 'Отправить email'
    },
    renewableEnergy: {
      title: 'Страхование возобновляемой энергии',
      subtitle: 'Защита устойчивого будущего с помощью элитных страховых решений.',
      intro: 'Индустрия возобновляемой энергетики сталкивается с уникальными рисками: от экстремальных погодных явлений до сложных технических сбоев. Insurance ING Broker SRL предлагает специализированные программы страхования, охватывающие весь жизненный цикл проекта: строительство, эксплуатацию и техническое обслуживание.',
      industries: {
        title: 'Охватываемые отрасли и технологии',
        items: [
          { title: 'Солнечные панели (Фотоэлектрические)', desc: 'Полная защита солнечных парков от града, шторма, пожара, кражи и потери дохода из-за прерывания производства.' },
          { title: 'Ветряные турбины', desc: 'Покрытие для ветряных мельниц, включая механические поломки, повреждения от молнии, повреждения лопастей и операционные финансовые потери.' },
          { title: 'Хранение энергии (Батареи)', desc: 'Безопасность систем хранения электроэнергии, управление рисками химического пожара, преждевременной деградации и ошибок интеграции.' },
          { title: 'Гидроэлектростанции', desc: 'Специализированная защита гидроинфраструктуры, охватывающая риски экстремальных наводнений, повреждения турбин и воздействие на окружающую среду.', image: '/hidrocentrala.jpg' }
        ]
      },
      analysis: {
        risks: { title: 'Основные риски', items: ['Экстремальные погодные явления (град, ураган)', 'Механические и электрические неисправности', 'Кража, вандализм и кибератаки', 'Потеря прибыли (Business Interruption)'] },
        advantages: { title: 'Стратегические преимущества', items: ['Долгосрочная финансовая стабильность', 'Высокая банковская привлекательность для финансирования', 'Доступ к экспертам по оценке зеленых рисков'] },
        disadvantages: { title: 'Проблемы и соображения', items: ['Стоимость премии в зависимости от местоположения', 'Сложность процесса возмещения', 'Необходимость строгого технического обслуживания'] }
      },
      whyUs: 'Почему это страхование необходимо? Инвестиции в возобновляемую энергию огромны и напрямую подвержены силам природы. Один шторм с градом может уничтожить весь фотоэлектрический парк, а поломка ветряной турбины может остановить производство на месяцы. Страхование - это не просто расходы, а фундамент безопасности ваших инвестиций.',
      expertiseTitle: 'Экспертиза в управлении зелеными рисками',
      essentialTitle: 'Почему это страхование необходимо?',
      ctaTitle: 'Защитите свои инвестиции в будущее',
      ctaCall: 'Позвонить сейчас',
      ctaEmail: 'Отправить Email'
    },
    reinsurance: {
      title: 'Перестрахование и Фронтинг',
      titleItalic: 'потенциал и экспертиза.',
      subtitle: 'Прямой доступ к международным рынкам перестрахования и емкость для размещения сложных рисков. Мы структурируем факультативные и облигаторные программы перестрахования, предлагая решения по фронтингу для транснациональных корпораций и крупных инфраструктурных проектов.',
      cta1: 'Связаться с отделом',
      cta2: 'Запросить емкость',
      faq: {
        title: 'Часто задаваемые вопросы - Перестрахование',
        items: [
          { q: 'Когда компании необходимо факультативное перестрахование?', a: 'Факультативное перестрахование необходимо, когда компания сталкивается с очень крупным индивидуальным риском (например, крупный завод, крупный инфраструктурный проект), который превышает емкость удержания местных страховщиков, или когда риск нетипичен и требует международной экспертизы.' },
          { q: 'Что такое Фронтинг в страховании?', a: 'Фронтинг - это механизм, при котором местный страховщик (Fronting Company) выпускает полис в соответствии с местным законодательством для транснациональной корпорации, но передает (цедирует) 100% риска международному перестраховщику или кэптивной компании корпорации. Это необходимо для соблюдения законодательства.' },
          { q: 'С какими рынками перестрахования вы сотрудничаете?', a: 'Мы имеем доступ к ведущим международным рынкам, включая Lloyd\'s of London и крупным перестраховщикам континентальной Европы, гарантируя, что риски размещаются в организациях с отличным финансовым рейтингом (A- или выше).' },
          { q: 'В чем разница между пропорциональным и непропорциональным перестрахованием?', a: 'В пропорциональном перестраховании (например, Quota Share) перестраховщик берет на себя фиксированный процент премий и убытков. В непропорциональном (например, Excess of Loss) перестраховщик вмешивается только в том случае, если убыток превышает определенную заранее установленную сумму (приоритет), защищая страховщика от катастрофических событий.' }
        ]
      },
      lines: [
        { 
          id: 'facultative', 
          title: 'Факультативное перестрахование', 
          desc: 'Индивидуальные размещения для нетипичных рисков, крупных рисков или высокотехнологичных отраслей (Энергетика, Авиация, Строительство). Мы ведем прямые переговоры с международными рынками (Lloyd\'s, Континентальная Европа) для обеспечения оптимальных условий и расширенной емкости.', 
          image: '/reinsurance-1.webp', 
          analysis: {
            risks: { title: 'Целевые риски', items: ['Индивидуальные риски, превышающие емкость местного рынка', 'Сложные промышленные риски', 'Крупные инфраструктурные проекты'] },
            advantages: { title: 'Преимущества', items: ['Точная и индивидуальная передача риска', 'Доступ к высшим финансовым рейтингам (A- и выше)', 'Защита от волатильности'] },
            disadvantages: { title: 'Ограничения', items: ['Детальный и строгий процесс андеррайтинга', 'Затраты зависят от конъюнктуры мирового рынка'] }
          }
        },
        { 
          id: 'treaty', 
          title: 'Облигаторное перестрахование', 
          desc: 'Структурированные решения для защиты страховых портфелей. Мы предлагаем консалтинг в разработке пропорциональных и непропорциональных программ (Квота, Эксцедент суммы, Эксцедент убытка), оптимизируя капитал и защищая баланс от катастрофических событий.', 
          image: '/traty reinsurance-2.jpg', 
          analysis: {
            risks: { title: 'Целевые риски', items: ['Кумуляция катастрофических рисков (Землетрясение, Наводнение)', 'Значительные колебания коэффициента убыточности', 'Защита капитала и платежеспособности'] },
            advantages: { title: 'Преимущества', items: ['Долгосрочная финансовая стабильность', 'Увеличение емкости андеррайтинга', 'Эффективное управление капиталом (Solvency II)'] },
            disadvantages: { title: 'Ограничения', items: ['Сложные договорные структуры', 'Требует глубокого актуарного анализа'] }
          }
        },
        { 
          id: 'fronting', 
          title: 'Программы Фронтинга', 
          desc: 'Мы выпускаем локальные полисы, соответствующие законодательству Республики Молдова, для глобальных страховых программ (Master Policies). Мы обеспечиваем юридическое и налоговое соответствие, облегчая передачу риска кэптивным перестраховщикам или международным рынкам, одобренным корпорацией.', 
          image: '/fronting.png', 
          analysis: {
            risks: { title: 'Целевые риски', items: ['Строгие требования к местному соответствию', 'Управление глобальными страховыми программами', 'Кредитный риск перестраховщика'] },
            advantages: { title: 'Преимущества', items: ['100% гарантия юридического соответствия', 'Бесшовная интеграция в глобальную программу', 'Административная и налоговая эффективность'] },
            disadvantages: { title: 'Ограничения', items: ['Административные расходы на фронтинг (Fronting Fee)', 'Зависимость от рейтинга местного страховщика-эмитента'] }
          }
        }
      ]
    },
    seo: {
      home: {
        title: 'ING Broker Молдова | Элитный консалтинг в страховании и перестраховании',
        description: 'Лидер в управлении рисками в Молдове. Мы предлагаем премиальные страховые решения: ОСАГО, КАСКО, страхование имущества, здоровья и сложное перестрахование для корпораций и частных лиц.'
      },
      business: {
        title: 'Корпоративное страхование и управление рисками | ING Broker Молдова',
        description: 'Продвинутые B2B решения для бизнеса. Комплексные программы страхования: Имущество, Ответственность, Киберриски, D&O, Грузы и Автопарки. Профессиональный аудит рисков.'
      },
      reinsurance: {
        title: 'Перестрахование и Фронтинг | Международная емкость | ING Broker',
        description: 'Стратегический доступ к мировым рынкам перестрахования (Lloyd\'s). Мы структурируем факультативные и облигаторные программы, предлагая решения по фронтингу для крупных проектов.'
      },
      about: {
        title: 'О нас | Insurance ING Broker SRL | Экспертиза и Доверие',
        description: 'Элитный страховой брокер в Республике Молдова, лицензированный и сертифицированный по ISO. Более 18 лет опыта в стратегическом консалтинге и управлении сложными рисками.'
      },
      propertyAssets: {
        title: 'Страхование корпоративного имущества и активов | ING Broker',
        description: 'Максимальная защита активов компании: здания, оборудование, запасы. Страхование от пожаров и стихийных бедствий с покрытием перерыва в производстве в Молдове.'
      },
      renewableEnergy: {
        title: 'Страхование возобновляемой энергии | Солнечные и ветропарки | ING Broker',
        description: 'Мы защищаем инвестиции в "зеленую" энергию. Специализированное страхование для фотоэлектрических парков и ветряных турбин от погодных рисков и технических сбоев.'
      },
      terms: {
        title: 'Условия и положения | Insurance ING Broker SRL',
        description: 'Юридическая база для использования услуг ING Broker. Прозрачность и профессионализм в отношениях с нашими клиентами.'
      },
      privacy: {
        title: 'Политика конфиденциальности | Защита данных | ING Broker',
        description: 'Наше обязательство по безопасности ваших данных. Информация о сборе и обработке персональных данных в соответствии с GDPR.'
      }
    }
  },
  en: {
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
      "Elite broker in Moldova",
      "Personalized consultation",
      "Real 24/7 support",
      "International expertise"
    ],
    intro: {
      title: 'Expertise in',
      titleItalic: 'Risk Management.',
      p1: 'At ING Broker, the Personal segment is not just a list of products, but a complex safety architecture designed to protect what truly matters. We have exclusively selected elite solutions, offering you access to international-level protection through fiduciary, transparent, and result-oriented consultancy.',
      p2: 'Regardless of the complexity of your needs - from urban mobility to securing family assets - our brokerage structure guarantees not just the optimal policy, but a strategic partnership in managing any unforeseen event.'
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
        { title: 'Travel & Health', desc: 'Full medical protection abroad or financial safety in case of unforeseen accidents in daily life.' },
        { title: 'Assets', desc: 'Secure your most important asset: your home. Protection against disasters and civil liability towards neighbors.' }
      ]
    },
    whyUs: {
      label: 'Why ING Broker',
      title: 'Authority in Brokerage,',
      titleItalic: 'Dedicated to You.',
      items: [
        { title: 'Authority in Risk Management', desc: 'Decades of expertise in managing complex risks at the corporate level, now translated into elite solutions for the personal segment.' },
        { title: 'Advanced Sectoral Specialization', desc: 'We adapt the insurance architecture to the specifics of each risk profile, ensuring coverage without gray areas or contractual ambiguities.' },
        { title: 'Fiduciary Integrity', desc: 'Absolute transparency. We give you the clarity needed to understand exactly the protection mechanisms and the real value of your policy.' },
        { title: 'Strategic Support in Case of Claim', desc: 'You are not alone in the face of risk. Our team of experts takes over the claim management, guaranteeing a fair and rapid settlement.' }
      ],
      years: 'Years of Authority'
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
          desc: 'We structure a personalized insurance program, exclusively selecting the clauses that bring real value and eliminating unnecessary costs.'
        },
        {
          number: '03',
          title: 'Fiduciary Management',
          desc: 'We are your representative before insurers. We manage contracts, monitor risks, and ensure the success of any claim for compensation.'
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
      desc: 'Are you a business owner? Beyond personal insurance, ING Broker is a leader in structuring complex insurance and reinsurance programs for corporations. We protect your assets, liability, and business continuity to international standards.',
      btnBusiness: 'Discover Corporate Solutions',
      btnReinsurance: 'Reinsurance & Fronting'
    },
    footer: {
      desc: 'Your strategic partner in insurance and reinsurance. We offer premium solutions tailored to your business and personal needs.',
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
          desc: 'Discover the factors that influence the cost of your RCA policy and how you can get the best price.',
          link: '/news/cum-se-determin%C4%83-pre%C8%9Bul-unei-asigur%C4%83ri-rca-ghid-pentru-un-pre%C8%9B-rca-accesibil',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        },
        {
          title: 'Green Card Moldova 2026 - Prices, zones, digital vs printed',
          desc: 'Everything you need to know about the Green Card in 2026: legislative news, prices, and the digital format.',
          link: '/news/carte-verde-moldova-2026-pre%C8%9Buri-zone-digital-vs-tip%C4%83rit%C4%83-tot-ce-trebuie-s%C4%83-%C8%99tii',
          image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    business: {
      title: 'Corporate Solutions',
      titleItalic: 'for market leaders.',
      subtitle: 'We protect your assets, liability, and business continuity. Our approach is based on integrated risk management: Identification, Evaluation, Transfer, and Retention. We offer complex insurance programs for corporations, tailored to each industry.',
      cta1: 'Request risk audit',
      cta2: 'Discuss with an expert',
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'What types of corporate insurance do you offer?', a: 'We offer a full range of B2B solutions, including property insurance, general and professional liability (E&O), cyber insurance, Directors & Officers (D&O) insurance, commercial fleet, and Cargo insurance.' },
          { q: 'How does a B2B insurance broker help me?', a: 'A B2B broker like ING Broker acts as a risk consultant. We identify and evaluate industry-specific risks, negotiate the best terms and premiums with insurers, and represent you in the event of a claim, saving you time and resources.' },
          { q: 'Do you offer solutions for complex or international risks?', a: 'Yes, through our Reinsurance & Fronting department, we structure programs for risks that exceed local market capacity, facilitating access to international markets (e.g., Lloyd\'s) and offering fronting solutions for multinational corporations.' },
          { q: 'How long does a risk audit take?', a: 'The duration of a risk audit varies depending on the complexity and size of the company, but typically takes anywhere from a few days to a few weeks. It involves a detailed analysis of operations, assets, and financial exposures.' }
        ]
      },
      lines: [
        { 
          id: 'property', 
          title: 'Property and assets', 
          desc: 'We protect your company\'s physical assets against fires, natural disasters, and accidental damage. Our solutions cover buildings, equipment, and stock, including vital business interruption protection. Designed for manufacturing, retail, and logistics, ING Broker secures your investments in the Moldovan market with international expertise.', 
          image: '/Construcții Comerciale.jpg', 
          category: 'ASSETS', 
          link: '/property-assets',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Fire, explosion, lightning', 'Natural disasters (earthquake, flood)', 'Theft and vandalism'] },
            advantages: { title: 'Advantages', items: ['Protection of the business\'s material base', 'Coverage for loss of profit', 'Flexibility in choosing limits'] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for normal wear and tear', 'Need for functional security systems', 'Mandatory deductibles for certain risks'] }
          }
        },
        { 
          id: 'liability', 
          title: 'General liability', 
          desc: 'Secure your business against financial claims resulting from material damage or bodily injury caused to third parties. We offer comprehensive civil liability policies essential for construction, HoReCa, and services. With a deep understanding of local risks, ING Broker negotiates optimal limits to protect your reputation and capital.', 
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2560', 
          category: 'LIABILITY', 
          link: '/business/liability',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Bodily injury caused to third parties', 'Material damage to third-party property', 'Accidental pollution'] },
            advantages: { title: 'Advantages', items: ['Protection against massive compensation claims', 'Coverage of legal expenses', 'Maintaining company reputation'] },
            disadvantages: { title: 'Limitations', items: ['Does not cover pure contractual liability', 'Exclusions for intentional damage', 'Geographical coverage limits'] }
          }
        },
        { 
          id: 'professional', 
          title: 'Professional liability', 
          desc: 'Absolute financial protection for errors, omissions, or negligence in providing consulting and design services. Indispensable for IT, engineering, architecture, and legal services. ING Broker structures customized insurance programs, guaranteeing the safety of professionals and business continuity in the Moldovan market.', 
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200', 
          category: 'LIABILITY', 
          link: '/business/professional',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Professional errors and omissions', 'Negligence in providing services', 'Breach of data confidentiality'] },
            advantages: { title: 'Advantages', items: ['Safety for experts and consultants', 'Mandatory requirement for certain professions', 'Coverage for pure financial losses'] },
            disadvantages: { title: 'Limitations', items: ['Does not cover activities outside specialization', 'Exclusions for criminal acts', '"Claims-made" principle (claims filed during the policy period)'] }
          }
        },
        { 
          id: 'do', 
          title: 'D&O', 
          desc: 'A protective shield for the personal assets of managers and administrators facing allegations of mismanagement. Covers defense costs and litigation initiated by shareholders or authorities. Vital for corporations and financial institutions, ING Broker brings top expertise to secure the strategic decisions of your leaders.', 
          image: '/d&o.jpg', 
          category: 'EXECUTIVE', 
          link: '/business/do',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Erroneous managerial decisions', 'Fault in supervision', 'Litigation initiated by shareholders or employees'] },
            advantages: { title: 'Advantages', items: ['Protection of managers\' personal assets', 'Attracting talent to leadership', 'Coverage for official investigations'] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for proven fraud', 'Does not cover criminal fines', 'Limitations for undeclared M&A transactions'] }
          }
        },
        { 
          id: 'cyber', 
          title: 'Cyber insurance', 
          desc: 'Rapid response and financial coverage against ransomware attacks, data breaches, and IT interruptions. Designed for e-commerce, healthcare, and tech companies. ING Broker aligns your business with global cybersecurity standards, minimizing financial and reputational impact in Moldova\'s digital environment.', 
          image: '/cyber-insurance-3.jpg', 
          category: 'TECH', 
          link: '/business/cyber',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Ransomware and hacking attacks', 'Business interruption due to IT causes', 'Personal data breaches'] },
            advantages: { title: 'Advantages', items: ['Access to rapid response teams', 'Coverage for notification costs', 'Protection against cyber extortion'] },
            disadvantages: { title: 'Limitations', items: ['Requires minimum IT security standards', 'Does not cover loss of intellectual property value', 'Exclusions for public infrastructure'] }
          }
        },
        { 
          id: 'cargo', 
          title: 'Cargo and transport', 
          desc: 'We guarantee the safety of goods during road, sea, air, or rail transport, covering risks of damage, theft, or accidents. "All Risks" solutions essential for logistics, import-export, and production. With ING Broker, your supply chain benefits from international protection and rapid claims settlement.', 
          image: '/logistica.jpg', 
          category: 'LOGISTICS', 
          link: '/business/cargo',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Damage to goods during transport', 'Theft or disappearance of cargo', 'Accidents of the means of transport'] },
            advantages: { title: 'Advantages', items: ['"All Risks" coverage available', 'Protection throughout the international route', 'Rapid settlement based on invoice value'] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for improper packaging', 'Limitations for perishable goods', 'Need to follow approved routes'] }
          }
        },
        { 
          id: 'fleet', 
          title: 'Fleet auto', 
          desc: 'Effective risk management for corporate auto fleets with optimized CASCO and MTPL coverage. We protect distribution, courier, and passenger transport fleets against accidents and theft. ING Broker negotiates preferential rates and offers centralized management so your business never stops.', 
          image: '/camionete.jpg', 
          category: 'MOBILITY', 
          link: '/business/fleet',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Multiple road accidents', 'Theft of fleet vehicles', 'Extended civil liability'] },
            advantages: { title: 'Advantages', items: ['Simplified policy administration', 'Volume discounts (fleet discount)', 'Priority roadside assistance'] },
            disadvantages: { title: 'Limitations', items: ['Rigorous claims monitoring required', 'Deductibles per event', 'Restrictions regarding vehicle users'] }
          }
        },
        { 
          id: 'credit', 
          title: 'Credit insurance', 
          desc: 'Protect your cash flow against non-payment of invoices and B2B client insolvency. A strategic solution for wholesale trade, manufacturing, and exporters. ING Broker secures your revenues and facilitates safe commercial expansion, demonstrating rigorous financial risk control.', 
          image: '/credit insurance.jpg', 
          category: 'FINANCE', 
          link: '/business/credit',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Client insolvency', 'Prolonged payment delay', 'Political risks in export'] },
            advantages: { title: 'Advantages', items: ['Cash-flow improvement', 'Easier access to bank financing', 'Client creditworthiness monitoring included'] },
            disadvantages: { title: 'Limitations', items: ['Does not cover commercial disputes', 'Credit limits per buyer', 'Mandatory co-insurance percentage'] }
          }
        },
        { 
          id: 'construction', 
          title: 'Construction', 
          desc: '"All Risks" coverage for infrastructure, residential, and industrial projects. We protect construction sites against natural disasters, fires, and execution errors. ING Broker offers contractors and developers in Moldova comprehensive policies aligned with lender requirements and international FIDIC standards.', 
          image: '/Constructii-montaj.jpeg', 
          category: 'ENGINEERING', 
          link: '/business/construction',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Accidental damage to works', 'Destruction of construction equipment', 'Liability towards third parties on site'] },
            advantages: { title: 'Advantages', items: ['Protection from start of works to handover', 'Coverage for the maintenance period', 'Safety for investors and banks'] },
            disadvantages: { title: 'Limitations', items: ['Exclusions for design errors', 'Does not cover contractual penalties', 'Need to comply with labor protection rules'] }
          }
        },
        { 
          id: 'benefits', 
          title: 'Employee Benefits & Group Health Insurance | IT Talent Retention Moldova | ING Broker', 
          desc: 'Employee Benefits & Group Health Insurance | IT Talent Retention Moldova | ING Broker. Premium programs designed to increase team retention and loyalty. Indispensable in the IT sector, corporations, and SMEs. ING Broker negotiates customized packages that turn employee care into a major competitive advantage in the labor market.', 
          image: '/health.png', 
          category: 'HUMAN RESOURCES', 
          link: '/business/benefits',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Occupational diseases and work accidents', 'Death or disability of employees', 'High medical costs'] },
            advantages: { title: 'Advantages', items: ['Increased team loyalty', 'Tax deductibility (within legal limits)', 'Access to top private clinics'] },
            disadvantages: { title: 'Limitations', items: ['Waiting periods for certain conditions', 'Exclusions for undeclared chronic diseases', 'Annual settlement limits'] }
          }
        },
        { 
          id: 'renewable', 
          title: 'Energy', 
          desc: 'We secure investments in solar, wind, and biogas parks against accidental breakdowns, extreme weather events, and loss of profit. ING Broker supports Moldova\'s green transition through specialized insurance solutions, guaranteeing the protection of high-tech equipment throughout the project\'s lifespan.', 
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200', 
          category: 'ENERGY', 
          link: '/renewable-energy',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Extreme weather events (hail, storm)', 'Technical and electrical faults', 'Loss of profit due to lack of production'] },
            advantages: { title: 'Advantages', items: ['Protection of massive investments', 'High bankability for projects', 'Technical expertise in assessing green risks'] },
            disadvantages: { title: 'Limitations', items: ['Variable costs depending on location', 'Strict preventive maintenance requirements', 'Exclusions for natural degradation'] }
          }
        },
        { 
          id: 'agriculture', 
          title: 'Agricultural risks', 
          desc: 'Vital protection for crops, livestock, and agricultural machinery against the vagaries of nature, diseases, and fires. Designed for local farmers and agribusinesses. With deep expertise in the Moldovan agricultural sector, ING Broker structures policies that guarantee your business continuity, including access to state subsidies.', 
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200', 
          category: 'AGRICULTURE', 
          link: '/business/agriculture',
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Drought, frost, hail', 'Animal diseases and epidemics', 'Damage to agricultural machinery'] },
            advantages: { title: 'Advantages', items: ['Premium subsidy (where applicable)', 'Financial stability in difficult agricultural years', 'Specialized damage assessment in the field'] },
            disadvantages: { title: 'Limitations', items: ['Temporal deductible periods', 'Exclusions for non-compliance with agricultural technology', 'Insured harvest limits'] }
          }
        }
      ]
    },
    reinsurance: {
      title: 'Reinsurance & Fronting',
      titleItalic: 'capacity and expertise.',
      subtitle: 'Direct access to international reinsurance markets and placement capacity for complex risks. We structure facultative and treaty reinsurance programs, offering fronting solutions for multinational corporations and major infrastructure projects.',
      cta1: 'Contact department',
      cta2: 'Request capacity',
      faq: {
        title: 'Frequently Asked Questions - Reinsurance',
        items: [
          { q: 'When does a company need facultative reinsurance?', a: 'Facultative reinsurance is necessary when a company faces a very large individual risk (e.g., a massive factory, a major infrastructure project) that exceeds the retention capacity of local insurers, or when the risk is atypical and requires international expertise.' },
          { q: 'What does Fronting mean in insurance?', a: 'Fronting is a mechanism where a local insurer (Fronting Company) issues a policy according to local legislation for a multinational corporation, but transfers (cedes) 100% of the risk to an international reinsurer or the corporation\'s captive company. It is essential for legal compliance.' },
          { q: 'Which reinsurance markets do you work with?', a: 'We have access to top international markets, including Lloyd\'s of London and major reinsurers in Continental Europe, ensuring that risks are placed with entities holding an excellent financial rating (A- or higher).' },
          { q: 'What is the difference between proportional and non-proportional reinsurance?', a: 'In proportional reinsurance (e.g., Quota Share), the reinsurer takes a fixed percentage of premiums and losses. In non-proportional (e.g., Excess of Loss), the reinsurer intervenes only if the loss exceeds a certain pre-established amount (priority), protecting the insurer from catastrophic events.' }
        ]
      },
      lines: [
        { 
          id: 'facultative', 
          title: 'Facultative Reinsurance', 
          desc: 'Individual placements for atypical risks, major exposures, or highly complex industries (Energy, Aviation, Construction). We negotiate directly with international markets (Lloyd\'s, Continental Europe) to secure optimal terms and extended capacity.', 
          image: '/reinsurance-1.webp', 
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Individual exposures exceeding local market capacity', 'Complex industrial risks', 'Major infrastructure projects'] },
            advantages: { title: 'Advantages', items: ['Precise and customized risk transfer', 'Access to top financial ratings (A- and above)', 'Protection against volatility'] },
            disadvantages: { title: 'Limitations', items: ['Detailed and rigorous underwriting process', 'Costs influenced by global market conditions'] }
          }
        },
        { 
          id: 'treaty', 
          title: 'Treaty Reinsurance', 
          desc: 'Structured solutions for the protection of insurance portfolios. We offer consulting in the design of proportional and non-proportional programs (Quota Share, Surplus, Excess of Loss), optimizing capital and protecting the balance sheet against catastrophic events.', 
          image: '/traty reinsurance-2.jpg', 
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Accumulations of catastrophic risks (Earthquake, Flood)', 'Major fluctuations in the loss ratio', 'Capital and solvency protection'] },
            advantages: { title: 'Advantages', items: ['Long-term financial stability', 'Increased underwriting capacity', 'Efficient capital management (Solvency II)'] },
            disadvantages: { title: 'Limitations', items: ['Complex contractual structures', 'Requires advanced actuarial analysis'] }
          }
        },
        { 
          id: 'fronting', 
          title: 'Fronting Programs', 
          desc: 'We issue local policies compliant with the legislation of the Republic of Moldova for global insurance programs (Master Policies). We ensure legal and tax compliance, facilitating risk transfer to captive reinsurers or international markets approved by the corporation.', 
          image: '/fronting.png', 
          analysis: {
            risks: { title: 'Targeted Risks', items: ['Strict local compliance requirements', 'Management of global insurance programs', 'Reinsurer credit risk'] },
            advantages: { title: 'Advantages', items: ['100% guaranteed legal compliance', 'Seamless integration into the global program', 'Administrative and tax efficiency'] },
            disadvantages: { title: 'Limitations', items: ['Administrative fronting costs (Fronting Fee)', 'Dependence on the rating of the issuing local insurer'] }
          }
        }
      ]
    },
    about: {
      hero: { title: 'About Us', subtitle: 'Insurance ING Broker SRL - Your strategic architect in risk management and global reinsurance.' },
      intro: 'Insurance ING Broker SRL represents the benchmark in risk management and reinsurance architecture in the Republic of Moldova. We are an elite brokerage structure, specializing in strategic consulting, complex risk transfer solutions, and long-term fiduciary partnerships for corporations and institutions.',
      whoWeAre: { title: 'Who We Are', content: 'We are risk engineers and fiduciary consultants redefining the broker\'s role in the financial ecosystem. For us, brokerage is not a transaction, but a rigorous process of auditing, understanding financial exposures, and structuring the most advanced protection solutions available on local and international markets.' },
      mission: { title: 'Our Mission', content: 'Our mission is to ensure the financial resilience of our clients by transforming the complexity of corporate risks into clear strategic decisions. We protect our partners\' financial balance sheets through risk transfer solutions that exceed conventional market standards.' },
      vision: { title: 'Our Vision', content: 'Our vision is to set the new standard of excellence in regional corporate brokerage, integrating global best practices and advanced analytical technologies. We aim to be the pioneers who import and develop niche insurance products, strengthening the financial security of the Republic of Moldova.' },
      history: { title: 'Our History', content: 'Founded in 2006, Insurance ING Broker SRL was among the first licensed brokers in the Republic of Moldova, being the first company of its kind to obtain ISO certification. From developing the eAsigurari application to pioneering the digitalization of the sector, we have constantly evolved as a structure focused on corporate governance and elite services.' },
      values: { title: 'Our Values', items: ['Advanced Risk Architecture', 'Operational Excellence', 'Absolute Fiduciary Integrity', 'Radical Transparency', 'Strategic Synergy', 'Unwavering Ethics', 'Disruptive Risk Innovation'] },
      differentiators: {
        title: 'What Sets Us Apart',
        items: [
          { title: 'Official License and Tradition', desc: 'We are among the first brokers in the Republic of Moldova with an official license, providing absolute stability and legal security.' },
          { title: 'Pioneering in Education', desc: 'We are the pioneers who started developing insurance services at a school level in the local market, raising the standards of the entire industry.' },
          { title: 'ISO Quality Guarantee', desc: 'The first and only in Moldova to hold ISO certificates, indisputable proof of the rigor and quality of our internal processes.' },
          { title: 'International Connectivity', desc: 'We possess a solid network of European and international partners, facilitating access to global reinsurance capacities.' },
          { title: '20 Years of Excellence', desc: 'A background and expertise validated by two decades of uninterrupted activity and success in managing complex risks.' }
        ]
      },
      corporate: { title: 'Corporate Data & Governance', content: 'Full Name: Insurance ING Broker SRL,\nIDNO: 1017600019386,\nCNPF License: 000874\nCertification: ISO 9001:2015 (RO-11645)\nHeadquarters: 9 Pan Halippa St, Chisinau' },
      cta: { title: 'Strategic Partnership', subtitle: 'Are you ready to elevate your company\'s protection standard? Our team of experts is ready to offer you a complete risk audit.', btn: 'Request Strategic Consulting' }
    },
    propertyAssets: {
      title: 'Property and Assets Insurance',
      subtitle: 'Complete protection for your company\'s assets, ensuring business continuity in any situation.',
      intro: 'Whether it\'s office buildings, commercial spaces, factories, or essential equipment, your company\'s assets are the foundation of daily operations. Insurance ING Broker SRL offers customized solutions to protect both real estate and movable property against unforeseen risks.',
      industries: {
        title: 'What we cover',
        items: [
          { title: 'Real Estate', desc: 'Commercial buildings, office buildings, factories, warehouses, and other physical structures.', image: '/Construcții Comerciale.jpg' },
          { title: 'Movable Property', desc: 'Business machinery, industrial equipment, computing technology, and inventory.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Stocks and Goods', desc: 'Protection for raw materials, finished products, and goods in storage.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
          { title: 'Business Interruption', desc: 'Coverage for financial losses resulting from the temporary suspension of activity.', image: '/business-intrertuption.jpg' }
        ]
      },
      analysis: {
        risks: {
          title: 'Covered Risks',
          items: [
            'Fire, lightning, explosion',
            'Natural disasters (earthquake, flood, storm)',
            'Burglary or robbery',
            'Accidental equipment breakdowns',
            'Vandalism and malicious damage'
          ]
        },
        advantages: {
          title: 'Advantages',
          items: [
            'Financial protection against major losses',
            'Guaranteed business continuity',
            'Customized policies based on industry specifics',
            'Fast assistance in case of a claim',
            'Peace of mind and security for investors'
          ]
        },
        disadvantages: {
          title: 'Exceptions and Limitations',
          items: [
            'Normal wear and tear and depreciation over time',
            'Intentional damage caused by the insured',
            'War, terrorism, or confiscation (without special clauses)',
            'Manufacturing defects covered by warranty',
            'Non-compliance with safety regulations'
          ]
        }
      },
      expertiseTitle: 'We Protect the Foundation of Your Business',
      essentialTitle: 'Why choose ING Broker?',
      whyUs: 'We help you find the right insurer, negotiate the best price-quality ratio for you, and offer specialized legal advice when an insured event occurs.',
      ctaTitle: 'Secure your assets today',
      ctaCall: 'Request a quote',
      ctaEmail: 'Send an email'
    },
    renewableEnergy: {
      title: 'Renewable Energy Insurance',
      subtitle: 'Protecting the sustainable future through elite insurance solutions.',
      intro: 'The renewable energy industry faces unique risks, from extreme weather events to complex technical failures. Insurance ING Broker SRL offers specialized insurance programs covering the entire project lifecycle: construction, operation, and maintenance.',
      industries: {
        title: 'Covered Industries and Technologies',
        items: [
          { title: 'Solar Panels (Photovoltaic)', desc: 'Full protection for solar parks against hail, storms, fire, theft, and loss of income due to production interruption.' },
          { title: 'Wind Turbines', desc: 'Coverage for wind mills, including mechanical breakdown, lightning damage, blade failures, and operational financial losses.' },
          { title: 'Energy Storage (Batteries)', desc: 'Safety for electrical energy storage systems, managing risks of chemical fire, premature degradation, and integration errors.' },
          { title: 'Hydroelectric Power Plants', desc: 'Specialized protection for hydro infrastructure, covering risks of extreme floods, turbine damage, and environmental impact.', image: '/hidrocentrala.jpg' }
        ]
      },
      analysis: {
        risks: { title: 'Main Risks', items: ['Extreme weather events (hail, hurricane)', 'Mechanical and electrical failures', 'Theft, vandalism, and cyber attacks', 'Loss of profit (Business Interruption)'] },
        advantages: { title: 'Strategic Advantages', items: ['Long-term financial stability', 'High bankability for financing', 'Access to green risk assessment experts'] },
        disadvantages: { title: 'Challenges and Considerations', items: ['Premium costs based on location', 'Complexity of the claims process', 'Necessity of rigorous maintenance'] }
      },
      whyUs: 'Why is this insurance essential? Investments in renewable energy are massive and directly exposed to the forces of nature. A single hailstorm can destroy an entire photovoltaic park, and a wind turbine failure can stop production for months. Insurance is not just an expense, but the foundation of your investment security.',
      expertiseTitle: 'Expertise in Green Risk Management',
      essentialTitle: 'Why is this insurance essential?',
      ctaTitle: 'Protect your investment in the future',
      ctaCall: 'Call now',
      ctaEmail: 'Send Email'
    },
    seo: {
      home: {
        title: 'ING Broker Moldova | Elite Insurance & Reinsurance Consulting',
        description: 'Leader in risk management in Moldova. We offer premium insurance solutions: MTPL, CASCO, property, health, and complex reinsurance for corporations and individuals.'
      },
      business: {
        title: 'Corporate Insurance & Risk Management | ING Broker Moldova',
        description: 'Advanced B2B solutions for business. Complex insurance programs: Property, Liability, Cyber, D&O, Cargo, and Fleets. Professional risk audit for business continuity.'
      },
      reinsurance: {
        title: 'Reinsurance & Fronting | International Capacity | ING Broker',
        description: 'Strategic access to global reinsurance markets (Lloyd\'s). We structure facultative and treaty programs, offering fronting solutions for major infrastructure projects.'
      },
      about: {
        title: 'About Us | Insurance ING Broker SRL | Expertise & Trust',
        description: 'Elite insurance broker in the Republic of Moldova, licensed and ISO certified. Over 18 years of experience in strategic consulting and complex risk management.'
      },
      propertyAssets: {
        title: 'Corporate Property & Assets Insurance | ING Broker',
        description: 'Maximum protection for company assets: buildings, machinery, stocks. Insurance against fire and natural disasters with business interruption coverage in Moldova.'
      },
      renewableEnergy: {
        title: 'Renewable Energy Insurance | Solar & Wind Parks | ING Broker',
        description: 'We secure investments in green energy. Specialized insurance for photovoltaic parks and wind turbines against weather risks and technical failures.'
      },
      terms: {
        title: 'Terms & Conditions | Insurance ING Broker SRL',
        description: 'Legal framework for using ING Broker services. Transparency and professionalism in our relationship with clients.'
      },
      privacy: {
        title: 'Privacy Policy | Data Protection | ING Broker',
        description: 'Our commitment to your data security. Information about the collection and processing of personal data in accordance with GDPR.'
      }
    }
  }
};

export const productTranslations = {
  ro: [
    {
      id: 'rca',
      title: 'RCA',
      seoTitle: 'Asigurare RCA Online Moldova | Calculator și Emitere Rapidă | ING Broker',
      seoDescription: 'Încheie asigurarea RCA online în Moldova prin ING Broker. Află prețul instant cu calculatorul nostru, bucură-te de emitere rapidă și suport dedicat în caz de daună.',
      subtitle: 'RESPONSABILITATE CIVILĂ AUTO',
      description: 'Asigurarea obligatorie care îți oferă liniștea necesară la volan în Republica Moldova. Ne asigurăm că ești protejat legal și că procesul de emitere este cel mai rapid din piață.',
      forWho: 'Toți proprietarii de vehicule înmatriculate în Moldova.',
      covers: 'Daunele cauzate terțelor persoane în urma accidentelor rutiere.',
      advantages: ['Emitere instantanee online', 'Consultant dedicat în caz de daună', 'Prețuri reglementate, proces premium'],
      cta: 'Calculează RCA',
      link: 'https://easigurari.com/ro/rca',
      image: '/rca-red-car.jpg',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Răspunderea civilă față de terți', 'Sancțiuni contravenționale pentru lipsa poliței', 'Cheltuieli de judecată în procese civile'] },
        advantages: { title: 'Avantaje', items: ['Conformitate legală 100%', 'Protecție financiară împotriva daunelor cauzate altora', 'Acces la sistemul Bonus-Malus'] },
        disadvantages: { title: 'Limitări', items: ['Nu acoperă daunele propriei mașini', 'Limite de despăgubire stabilite prin lege', 'Excluderi pentru conducere sub influența alcoolului'] }
      }
    },
    {
      id: 'carte-verde',
      title: 'Carte Verde',
      seoTitle: 'Asigurare Carte Verde Online | Călătorii Sigure în Străinătate | ING Broker',
      seoDescription: 'Cumpără asigurarea Carte Verde pentru călătorii auto internaționale. Acoperire extinsă, prețuri competitive și suport 24/7 oriunde te-ai afla. Alege ING Broker.',
      subtitle: 'SIGURANȚĂ PESTE HOTARE',
      description: 'Partenerul tău de încredere pentru călătoriile auto internaționale. Indiferent de destinație, Cartea Verde de la ING Broker îți garantează protecția necesară în afara granițelor.',
      forWho: 'Șoferii care călătoresc cu mașina în afara țării.',
      covers: 'Răspunderea civilă auto în statele membre ale sistemului Carte Verde.',
      advantages: ['Valabilitate internațională extinsă', 'Suport 24/7 în străinătate', 'Livrare rapidă sau ridicare imediată'],
      cta: 'Calculează Carte Verde',
      link: 'https://easigurari.com/ro/green-card',
      image: '/carte_verde.jpg',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Accidente rutiere în afara Republicii Moldova', 'Răspundere civilă conform legislației țării de vizită', 'Costuri de repatriere a vehiculului (în funcție de clauze)'] },
        advantages: { title: 'Avantaje', items: ['Recunoaștere internațională în peste 40 de țări', 'Protecție împotriva legilor străine complexe', 'Asistență multilingvă în caz de incident'] },
        disadvantages: { title: 'Limitări', items: ['Valabilă doar în țările specificate în poliță', 'Nu înlocuiește asigurarea CASCO', 'Obligatorie la trecerea frontierei'] }
      }
    },
    {
      id: 'medicala',
      title: 'Asigurare Medicală',
      seoTitle: 'Asigurare Medicală de Călătorie | Protecție în Străinătate | ING Broker',
      seoDescription: 'Asigurare medicală pentru călătorii peste hotare. Acoperire pentru urgențe, spitalizare și repatriere. Călătorește fără griji cu ING Broker.',
      subtitle: 'PROTECȚIE ÎN CĂLĂTORII',
      description: 'Vacanțele și delegațiile tale merită o protecție fără compromisuri. Acoperim cheltuielile medicale neprevăzute, astfel încât tu să te concentrezi pe experiențe, nu pe griji.',
      forWho: 'Turiști, studenți și profesioniști care călătoresc extern.',
      covers: 'Urgențe medicale, spitalizare, tratamente și repatriere.',
      advantages: ['Acoperire globală completă', 'Fără franșiză la urgențe', 'Asistență telefonică în limba română'],
      cta: 'Calculează asigurarea',
      link: 'https://easigurari.com/ro/health-insurance',
      image: '/asigurare-medicala-travel.jpg',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Urgențe medicale și accidente în străinătate', 'Cheltuieli de spitalizare și intervenții chirurgicale', 'Repatriere medicală sau în caz de deces'] },
        advantages: { title: 'Avantaje', items: ['Acoperire pentru COVID-19 inclusă', 'Asistență 24/7 prin companii de asistență globală', 'Decontare directă cu clinicile partenere'] },
        disadvantages: { title: 'Limitări', items: ['Nu acoperă afecțiunile preexistente', 'Excluderi pentru sporturi extreme (fără clauză specială)', 'Limite de vârstă pentru anumite planuri'] }
      }
    },
    {
      id: 'casco',
      title: 'CASCO',
      seoTitle: 'Asigurare CASCO Moldova | Protecție Totală Auto | ING Broker',
      seoDescription: 'Protejează-ți mașina cu o asigurare CASCO premium de la ING Broker. Acoperire completă pentru accidente, furt, vandalism și calamități. Cere o ofertă personalizată!',
      subtitle: 'Protecție totală auto',
      description: 'Vehiculul tău este o investiție care merită protejată împotriva oricărui risc: accident, furt, vandalism sau fenomene naturale. CASCO de la ING Broker este scutul tău premium.',
      forWho: 'Proprietarii de mașini noi sau rulate care vor protecție maximă.',
      covers: 'Daune proprii, furt, vandalism, incendiu, calamități naturale.',
      advantages: ['Reparații în service-uri autorizate', 'Asistență rutieră inclusă', 'Flexibilitate în alegerea riscurilor'],
      cta: 'Vezi detalii CASCO',
      link: 'https://easigurari.com/ro/article/asigurarea-casco',
      image: '/asigurare-casco.jpg',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Avarii accidentale (coliziuni, răsturnări)', 'Furt total sau parțial al vehiculului', 'Vandalism și fenomene naturale (grindină, inundații)'] },
        advantages: { title: 'Avantaje', items: ['Protecție indiferent de vinovăție', 'Reparații la reprezentanțe oficiale', 'Acoperire pentru echipamente suplimentare'] },
        disadvantages: { title: 'Limitări', items: ['Aplicarea franșizei conform contractului', 'Excluderi pentru uzură sau defecte mecanice', 'Pierderea acoperirii în caz de neglijență gravă'] }
      }
    },
    {
      id: 'locuinta',
      title: 'Asigurarea Locuinței',
      seoTitle: 'Asigurare Locuință și Bunuri | Protejează-ți Casa | ING Broker',
      seoDescription: 'Asigurare completă pentru apartamente și case în Moldova. Protejează-ți locuința și bunurile împotriva incendiilor, inundațiilor și furtului cu ING Broker.',
      subtitle: 'Căminul tău, în siguranță',
      description: 'Locuința este mai mult decât o clădire, este spațiul tău de siguranță. Oferim soluții complete pentru protejarea structurii, a bunurilor și a răspunderii față de vecini.',
      forWho: 'Proprietari de apartamente și case la sol.',
      covers: 'Incendiu, inundații, cutremur, furt, răspundere civilă.',
      advantages: ['Evaluare corectă a bunurilor', 'Protecție pentru vecini inclusă', 'Despăgubire rapidă în caz de daună'],
      cta: 'Vezi detalii Locuință',
      link: 'https://easigurari.com/ro/article/asigurare-locuinta-si-bunuri-imobile-si-mobile-r-moldova',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Incendiu, explozie, trăsnet', 'Calamități naturale (cutremur, inundații)', 'Furtul bunurilor din locuință și vandalism'] },
        advantages: { title: 'Avantaje', items: ['Acoperire pentru răspunderea civilă față de vecini', 'Protecție pentru finisaje și bunuri de preț', 'Asistență tehnică de urgență la domiciliu'] },
        disadvantages: { title: 'Limitări', items: ['Excluderi pentru clădiri cu risc seismic ridicat', 'Nu acoperă banii cash sau bijuteriile neevaluate', 'Limitări pentru bunuri aflate în spații deschise'] }
      }
    },
    {
      id: 'accidente',
      title: 'Accidente',
      seoTitle: 'Asigurare de Accidente Persoane | Siguranță Financiară | ING Broker',
      seoDescription: 'Asigurare de accidente pentru tine și familia ta. Sprijin financiar în caz de invaliditate, spitalizare sau deces din accident. Alege siguranța cu ING Broker.',
      subtitle: 'Siguranța personală',
      description: 'Imprevizibilul face parte din viață, dar impactul financiar poate fi controlat. O asigurare de accidente oferă suportul necesar ție și familiei tale în momentele critice.',
      forWho: 'Persoane active, sportivi și familii prudente.',
      covers: 'Invaliditate, fracturi, arsuri sau deces din accident.',
      advantages: ['Sume asigurate flexibile', 'Acoperire 24/7 oriunde în lume', 'Plată rapidă a indemnizației'],
      cta: 'Vezi detalii Accidente',
      link: 'https://easigurari.com/ro/article/asigurarea-de-accidente-angajatilor-r-moldova',
      image: '/Accidente2.png',
      analysis: {
        risks: { title: 'Riscuri Vizate', items: ['Accidente casnice sau la locul de muncă', 'Accidente în timpul activităților sportive', 'Invaliditate permanentă sau temporară'] },
        advantages: { title: 'Avantaje', items: ['Suport financiar imediat pentru tratament', 'Acoperire globală, indiferent de locație', 'Protecție pentru întreaga familie pe o singură poliță'] },
        disadvantages: { title: 'Limitări', items: ['Excluderi pentru boli profesionale', 'Nu acoperă accidentele sub influența substanțelor', 'Limite de vârstă la subscriere'] }
      }
    }
  ],
  ru: [
    {
      id: 'rca',
      title: 'ОСАГО',
      seoTitle: 'Страхование ОСАГО онлайн в Молдове | Калькулятор и быстрое оформление | ING Broker',
      seoDescription: 'Оформите страховку ОСАГО онлайн в Молдове через ING Broker. Узнайте цену мгновенно с помощью нашего калькулятора, наслаждайтесь быстрым оформлением и поддержкой при ДТП.',
      subtitle: 'АВТОГРАЖДАНСКАЯ ОТВЕТСТВЕННОСТЬ',
      description: 'Обязательное страхование, обеспечивающее необходимое спокойствие за рулем в Республике Молдова. Мы гарантируем вашу юридическую защиту и самый быстрый процесс оформления на рынке.',
      forWho: 'Все владельцы транспортных средств, зарегистрированных в Молдове.',
      covers: 'Ущерб, причиненный третьим лицам в результате дорожно-транспортных происшествий.',
      advantages: ['Мгновенное онлайн-оформление', 'Выделенный консультант при страховом случае', 'Регулируемые цены, премиальный процесс'],
      cta: 'Рассчитать ОСАГО',
      link: 'https://easigurari.com/ru/rca',
      image: '/rca-red-car.jpg',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Гражданская ответственность перед третьими лицами', 'Административные санкции за отсутствие полиса', 'Судебные издержки по гражданским делам'] },
        advantages: { title: 'Преимущества', items: ['100% соответствие закону', 'Финансовая защита от ущерба, причиненного другим', 'Доступ к системе Бонус-Малус'] },
        disadvantages: { title: 'Ограничения', items: ['Не покрывает ущерб собственному автомобилю', 'Лимиты возмещения установлены законом', 'Исключения при вождении в нетрезвом виде'] }
      }
    },
    {
      id: 'carte-verde',
      title: 'Зеленая карта',
      seoTitle: 'Страхование Зеленая Карта онлайн | Безопасные поездки за границу | ING Broker',
      seoDescription: 'Купите страховку Зеленая Карта для международных автомобильных поездок. Расширенное покрытие, конкурентные цены и круглосуточная поддержка. Выбирайте ING Broker.',
      subtitle: 'БЕЗОПАСНОСТЬ ЗА ГРАНИЦЕЙ',
      description: 'Ваш надежный партнер для международных автомобильных поездок. Независимо от пункта назначения, Зеленая карта от ING Broker гарантирует вам необходимую защиту за пределами страны.',
      forWho: 'Водители, путешествующие на автомобиле за границу.',
      covers: 'Гражданская ответственность владельцев автотранспорта в странах-членах системы Зеленая карта.',
      advantages: ['Расширенное международное действие', 'Поддержка 24/7 за рубежом', 'Быстрая доставка или немедленное получение'],
      cta: 'Рассчитать Зеленую карту',
      link: 'https://easigurari.com/ru/green-card',
      image: '/carte_verde.jpg',
      analysis: {
        risks: { title: 'Целевые риски', items: ['ДТП за пределами Республики Молдова', 'Гражданская ответственность согласно законам страны пребывания', 'Расходы на репатриацию автомобиля (в зависимости от условий)'] },
        advantages: { title: 'Преимущества', items: ['Международное признание в более чем 40 странах', 'Защита от сложных иностранных законов', 'Многоязычная поддержка при инцидентах'] },
        disadvantages: { title: 'Ограничения', items: ['Действует только в странах, указанных в полисе', 'Не заменяет страховку КАСКО', 'Обязательна при пересечении границы'] }
      }
    },
    {
      id: 'medicala',
      title: 'Медицинская страховка',
      seoTitle: 'Медицинская страховка для путешествий | Защита за границей | ING Broker',
      seoDescription: 'Медицинское страхование для поездок за границу. Покрытие неотложной помощи, госпитализации и репатриации. Путешествуйте без забот с ING Broker.',
      subtitle: 'ЗАЩИТА В ПУТЕШЕСТВИЯХ',
      description: 'Ваши отпуска и командировки заслуживают бескомпромиссной защиты. Мы покрываем непредвиденные медицинские расходы, чтобы вы могли сосредоточиться на впечатлениях, а не на заботах.',
      forWho: 'Туристы, студенты и специалисты, выезжающие за рубеж.',
      covers: 'Неотложная медицинская помощь, госпитализация, лечение и репатриация.',
      advantages: ['Полное глобальное покрытие', 'Без франшизы при экстренных случаях', 'Телефонная поддержка на русском языке'],
      cta: 'Рассчитать страховку',
      link: 'https://easigurari.com/ru/health-insurance',
      image: '/asigurare-medicala-travel.jpg',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Медицинские экстренные случаи и несчастные случаи за рубежом', 'Расходы на госпитализацию и хирургические операции', 'Медицинская репатриация или в случае смерти'] },
        advantages: { title: 'Преимущества', items: ['Покрытие COVID-19 включено', 'Поддержка 24/7 через глобальные ассистанс-компании', 'Прямые расчеты с клиниками-партнерами'] },
        disadvantages: { title: 'Ограничения', items: ['Не покрывает существующие заболевания', 'Исключения для экстремальных видов спорта (без спец. условия)', 'Возрастные ограничения для определенных планов'] }
      }
    },
    {
      id: 'casco',
      title: 'КАСКО',
      seoTitle: 'Страхование КАСКО Молдова | Полная автозащита | ING Broker',
      seoDescription: 'Защитите свой автомобиль с помощью премиального страхования КАСКО от ING Broker. Полное покрытие от ДТП, угона, вандализма и стихийных бедствий. Запросите предложение!',
      subtitle: 'Полная автозащита',
      description: 'Ваш автомобиль - это инвестиция, которая заслуживает защиты от любого риска: аварии, кражи, вандализма или природных явлений. КАСКО от ING Broker - ваш премиальный щит.',
      forWho: 'Владельцы новых или подержанных автомобилей, желающие максимальной защиты.',
      covers: 'Собственный ущерб, кража, вандализм, пожар, стихийные бедствия.',
      advantages: ['Ремонт в авторизованных сервисах', 'Включенная помощь на дорогах', 'Гибкость в выборе рисков'],
      cta: 'Детали КАСКО',
      link: 'https://easigurari.com/ru/article/asigurarea-casco',
      image: '/asigurare-casco.jpg',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Случайные повреждения (столкновения, опрокидывания)', 'Полная или частичная кража автомобиля', 'Вандализм и природные явления (град, наводнения)'] },
        advantages: { title: 'Преимущества', items: ['Защита независимо от вины', 'Ремонт в официальных представительствах', 'Покрытие дополнительного оборудования'] },
        disadvantages: { title: 'Ограничения', items: ['Применение франшизы согласно договору', 'Исключения для износа или механических дефектов', 'Потеря покрытия при грубой неосторожности'] }
      }
    },
    {
      id: 'locuinta',
      title: 'Страхование жилья',
      seoTitle: 'Страхование жилья и имущества | Защитите свой дом | ING Broker',
      seoDescription: 'Комплексное страхование квартир и домов в Молдове. Защитите свое жилье и имущество от пожаров, затоплений и краж с ING Broker.',
      subtitle: 'Ваш дом в безопасности',
      description: 'Дом - это больше, чем здание, это ваше пространство безопасности. Мы предлагаем комплексные решения для защиты конструкции, имущества и ответственности перед соседями.',
      forWho: 'Владельцы квартир и частных домов.',
      covers: 'Пожар, наводнение, землетрясение, кража, гражданская ответственность.',
      advantages: ['Справедливая оценка имущества', 'Защита соседей включена', 'Быстрая выплата при ущербе'],
      cta: 'Детали страхования жилья',
      link: 'https://easigurari.com/ru/article/asigurare-locuinta-si-bunuri-imobile-si-mobile-r-moldova',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Пожар, взрыв, удар молнии', 'Стихийные бедствия (землетрясение, наводнение)', 'Кража имущества из дома и вандализм'] },
        advantages: { title: 'Преимущества', items: ['Покрытие гражданской ответственности перед соседями', 'Защита отделки и ценного имущества', 'Экстренная техническая помощь на дому'] },
        disadvantages: { title: 'Ограничения', items: ['Исключения для зданий с высоким сейсмическим риском', 'Не покрывает наличные деньги или неоцененные украшения', 'Ограничения для имущества в открытых пространствах'] }
      }
    },
    {
      id: 'accidente',
      title: 'Несчастные случаи',
      seoTitle: 'Страхование от несчастных случаев | Финансовая безопасность | ING Broker',
      seoDescription: 'Страхование от несчастных случаев для вас и вашей семьи. Финансовая поддержка в случае инвалидности, госпитализации или смерти в результате ДТП. Выбирайте безопасность.',
      subtitle: 'Личная безопасность',
      description: 'Непредсказуемое - часть жизни, но финансовое влияние можно контролировать. Страхование от несчастных случаев обеспечивает необходимую поддержку вам и вашей семье в критические моменты.',
      forWho: 'Активные люди, спортсмены и предусмотрительные семьи.',
      covers: 'Инвалидность, переломы, ожоги или смерть в результате несчастного случая.',
      advantages: ['Гибкие страховые суммы', 'Покрытие 24/7 в любой точке мира', 'Быстрая выплата возмещения'],
      cta: 'Детали страхования',
      link: 'https://easigurari.com/ru/article/asigurarea-de-accidente-angajatilor-r-moldova',
      image: '/Accidente2.png',
      analysis: {
        risks: { title: 'Целевые риски', items: ['Бытовые несчастные случаи или на рабочем месте', 'Несчастные случаи во время занятий спортом', 'Постоянная или временная инвалидность'] },
        advantages: { title: 'Преимущества', items: ['Немедленная финансовая поддержка при лечении', 'Глобальное покрытие, независимо от местоположения', 'Защита всей семьи по одному полису'] },
        disadvantages: { title: 'Ограничения', items: ['Исключения для профессиональных заболеваний', 'Не покрывает несчастные случаи под влиянием веществ', 'Возрастные ограничения при оформлении'] }
      }
    }
  ],
  en: [
    {
      id: 'rca',
      title: 'RCA',
      seoTitle: 'Online RCA Insurance Moldova | Calculator & Fast Issuance | ING Broker',
      seoDescription: 'Buy your RCA insurance online in Moldova through ING Broker. Get an instant price with our calculator, enjoy fast issuance and dedicated claims support.',
      subtitle: 'MOTOR THIRD PARTY LIABILITY',
      description: 'Mandatory insurance that gives you the necessary peace of mind behind the wheel in the Republic of Moldova. We ensure you are legally protected and that the issuance process is the fastest on the market.',
      forWho: 'All owners of vehicles registered in Moldova.',
      covers: 'Damage caused to third parties as a result of road accidents.',
      advantages: ['Instant online issuance', 'Dedicated claims consultant', 'Regulated prices, premium process'],
      cta: 'Calculate RCA',
      link: 'https://easigurari.com/ro/rca',
      image: '/rca-red-car.jpg',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Third party liability', 'Administrative sanctions for lack of policy', 'Legal costs in civil lawsuits'] },
        advantages: { title: 'Advantages', items: ['100% legal compliance', 'Financial protection against damage caused to others', 'Access to the Bonus-Malus system'] },
        disadvantages: { title: 'Limitations', items: ['Does not cover own car damage', 'Compensation limits set by law', 'Exclusions for driving under influence'] }
      }
    },
    {
      id: 'carte-verde',
      title: 'Green Card',
      seoTitle: 'Online Green Card Insurance | Safe Travel Abroad | ING Broker',
      seoDescription: 'Buy Green Card insurance for international road trips. Extended coverage, competitive prices, and 24/7 support wherever you are. Choose ING Broker.',
      subtitle: 'SAFETY ABROAD',
      description: 'Your reliable partner for international car trips. Regardless of the destination, the Green Card from ING Broker guarantees you the necessary protection outside the borders.',
      forWho: 'Drivers traveling by car outside the country.',
      covers: 'Motor third party liability in the member states of the Green Card system.',
      advantages: ['Extended international validity', '24/7 support abroad', 'Fast delivery or immediate pickup'],
      cta: 'Calculate Green Card',
      link: 'https://easigurari.com/ro/green-card',
      image: '/carte_verde.jpg',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Road accidents outside the Republic of Moldova', 'Civil liability according to the laws of the visited country', 'Vehicle repatriation costs (depending on clauses)'] },
        advantages: { title: 'Advantages', items: ['International recognition in over 40 countries', 'Protection against complex foreign laws', 'Multilingual assistance in case of incident'] },
        disadvantages: { title: 'Limitations', items: ['Valid only in countries specified in the policy', 'Does not replace CASCO insurance', 'Mandatory when crossing the border'] }
      }
    },
    {
      id: 'medicala',
      title: 'Medical Insurance',
      seoTitle: 'Travel Health Insurance | Protection Abroad | ING Broker',
      seoDescription: 'Health insurance for traveling abroad. Coverage for emergencies, hospitalization, and repatriation. Travel worry-free with ING Broker.',
      subtitle: 'TRAVEL PROTECTION',
      description: 'Your vacations and business trips deserve uncompromising protection. We cover unforeseen medical expenses so you can focus on experiences, not worries.',
      forWho: 'Tourists, students, and professionals traveling externally.',
      covers: 'Medical emergencies, hospitalization, treatments, and repatriation.',
      advantages: ['Complete global coverage', 'No deductible for emergencies', 'Telephone assistance in English'],
      cta: 'Calculate insurance',
      link: 'https://easigurari.com/ro/health-insurance',
      image: '/asigurare-medicala-travel.jpg',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Medical emergencies and accidents abroad', 'Hospitalization costs and surgical interventions', 'Medical repatriation or in case of death'] },
        advantages: { title: 'Advantages', items: ['COVID-19 coverage included', '24/7 support through global assistance companies', 'Direct settlement with partner clinics'] },
        disadvantages: { title: 'Limitations', items: ['Does not cover pre-existing conditions', 'Exclusions for extreme sports (without special clause)', 'Age limits for certain plans'] }
      }
    },
    {
      id: 'casco',
      title: 'CASCO',
      seoTitle: 'CASCO Insurance Moldova | Total Auto Protection | ING Broker',
      seoDescription: 'Protect your car with premium CASCO insurance from ING Broker. Full coverage for accidents, theft, vandalism, and natural disasters. Request a custom quote!',
      subtitle: 'Total car protection',
      description: 'Your vehicle is an investment that deserves to be protected against any risk: accident, theft, vandalism, or natural phenomena. CASCO from ING Broker is your premium shield.',
      forWho: 'Owners of new or used cars who want maximum protection.',
      covers: 'Own damage, theft, vandalism, fire, natural disasters.',
      advantages: ['Repairs in authorized service centers', 'Roadside assistance included', 'Flexibility in choosing risks'],
      cta: 'See CASCO details',
      link: 'https://easigurari.com/ro/article/asigurarea-casco',
      image: '/asigurare-casco.jpg',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Accidental damage (collisions, rollovers)', 'Total or partial theft of the vehicle', 'Vandalism and natural phenomena (hail, floods)'] },
        advantages: { title: 'Advantages', items: ['Protection regardless of fault', 'Repairs at official dealerships', 'Coverage for additional equipment'] },
        disadvantages: { title: 'Limitations', items: ['Application of deductible according to contract', 'Exclusions for wear or mechanical defects', 'Loss of coverage in case of gross negligence'] }
      }
    },
    {
      id: 'locuinta',
      title: 'Home Insurance',
      seoTitle: 'Home & Property Insurance | Protect Your House | ING Broker',
      seoDescription: 'Comprehensive insurance for apartments and houses in Moldova. Protect your home and belongings against fire, floods, and theft with ING Broker.',
      subtitle: 'Your home, safe',
      description: 'Home is more than a building, it is your space of safety. We offer complete solutions for protecting the structure, belongings, and liability towards neighbors.',
      forWho: 'Owners of apartments and houses.',
      covers: 'Fire, floods, earthquake, theft, civil liability.',
      advantages: ['Fair asset valuation', 'Neighbor protection included', 'Fast compensation in case of damage'],
      cta: 'See Home details',
      link: 'https://easigurari.com/ro/article/asigurare-locuinta-si-bunuri-imobile-si-mobile-r-moldova',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Fire, explosion, lightning', 'Natural disasters (earthquake, floods)', 'Theft of goods from home and vandalism'] },
        advantages: { title: 'Advantages', items: ['Civil liability coverage towards neighbors', 'Protection for finishes and valuable goods', 'Emergency technical assistance at home'] },
        disadvantages: { title: 'Limitations', items: ['Exclusions for buildings with high seismic risk', 'Does not cover cash or unvalued jewelry', 'Limitations for goods in open spaces'] }
      }
    },
    {
      id: 'accidente',
      title: 'Accidents',
      seoTitle: 'Personal Accident Insurance | Financial Security | ING Broker',
      seoDescription: 'Accident insurance for you and your family. Financial support in case of disability, hospitalization, or death from an accident. Choose safety with ING Broker.',
      subtitle: 'Personal safety',
      description: 'The unpredictable is part of life, but the financial impact can be controlled. Accident insurance provides the necessary support for you and your family in critical moments.',
      forWho: 'Active people, athletes, and prudent families.',
      covers: 'Disability, fractures, burns, or death from accident.',
      advantages: ['Flexible insured sums', '24/7 coverage anywhere in the world', 'Fast indemnity payment'],
      cta: 'See Accident details',
      link: 'https://easigurari.com/ro/article/asigurarea-de-accidente-angajatilor-r-moldova',
      image: '/Accidente2.png',
      analysis: {
        risks: { title: 'Targeted Risks', items: ['Home or workplace accidents', 'Accidents during sports activities', 'Permanent or temporary disability'] },
        advantages: { title: 'Advantages', items: ['Immediate financial support for treatment', 'Global coverage, regardless of location', 'Protection for the whole family on one policy'] },
        disadvantages: { title: 'Limitations', items: ['Exclusions for occupational diseases', 'Does not cover accidents under influence of substances', 'Age limits at subscription'] }
      }
    }
  ]
};

export const faqTranslations = {
  ro: [
    { q: 'Cum pot încheia o asigurare RCA online?', a: 'Procesul este simplu: accesați link-ul de calcul, introduceți datele vehiculului și ale proprietarului, alegeți perioada și achitați online. Polița va fi emisă instantaneu.' },
    { q: 'Ce documente sunt necesare pentru Cartea Verde?', a: 'Aveți nevoie de certificatul de înmatriculare al vehiculului și actul de identitate al persoanei care încheie asigurarea.' },
    { q: 'Asigurarea medicală acoperă și riscul de COVID-19?', a: 'Da, majoritatea polițelor noastre medicale de călătorie includ acoperire pentru tratamentul COVID-19 în străinătate.' },
    { q: 'Care este diferența între RCA și CASCO?', a: 'RCA este obligatorie și despăgubește terții accidentați de dumneavoastră. CASCO este facultativă și despăgubește daunele propriei mașini, indiferent de vină.' },
    { q: 'Pot asigura o locuință închiriată?', a: 'Da, atât proprietarul cât și chiriașul pot încheia asigurări pentru bunuri sau răspundere civilă față de terți.' }
  ],
  ru: [
    { q: 'Как я могу оформить страховку ОСАГО онлайн?', a: 'Процесс прост: перейдите по ссылке для расчета, введите данные автомобиля и владельца, выберите период и оплатите онлайн. Полис будет выдан мгновенно.' },
    { q: 'Какие документы необходимы для Зеленой карты?', a: 'Вам понадобится свидетельство о регистрации транспортного средства и документ, удостоверяющий личность лица, оформляющего страховку.' },
    { q: 'Покрывает ли медицинская страховка риск COVID-19?', a: 'Да, большинство наших медицинских полисов для путешествий включают покрытие лечения COVID-19 за рубежом.' },
    { q: 'В чем разница между ОСАГО и КАСКО?', a: 'ОСАГО является обязательным и возмещает ущерб третьим лицам, пострадавшим по вашей вине. КАСКО является добровольным и возмещает ущерб вашему собственному автомобилю, независимо от вины.' },
    { q: 'Могу ли я застраховать арендованное жилье?', a: 'Да, как владелец, так и арендатор могут оформить страховку имущества или гражданской ответственности перед третьими лицами.' }
  ],
  en: [
    { q: 'How can I take out RCA insurance online?', a: 'The process is simple: access the calculation link, enter the vehicle and owner details, choose the period, and pay online. The policy will be issued instantly.' },
    { q: 'What documents are needed for the Green Card?', a: 'You need the vehicle registration certificate and the identity document of the person taking out the insurance.' },
    { q: 'Does medical insurance also cover the risk of COVID-19?', a: 'Yes, most of our travel medical policies include coverage for COVID-19 treatment abroad.' },
    { q: 'What is the difference between RCA and CASCO?', a: 'RCA is mandatory and compensates third parties injured by you. CASCO is optional and compensates damage to your own car, regardless of fault.' },
    { q: 'Can I insure a rented home?', a: 'Yes, both the owner and the tenant can take out insurance for goods or civil liability towards third parties.' }
  ]
};
