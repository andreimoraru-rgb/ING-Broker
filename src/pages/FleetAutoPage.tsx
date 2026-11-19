import React, { useState, useEffect } from 'react';
import { Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, ShieldCheck, ArrowRight, ArrowLeft, Truck, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FleetAutoPageProps {
  lang: Language;
}

const productImages = [
  "/flota_1.jpg",
  "/carte-verde-van.png",
  "/casco-012.jpg",
  "/transportatori-auto.jpg",
  "/cargo.jpg",
  "/bus.jpg",
];

const products = [
  {
    title: 'RCA Flotă',
    desc: 'Verificăm polițele RCA ale vehiculelor și datele lor de expirare. Programul de flotă pornește de la minimum 5 vehicule. Condițiile și prima fiecărui vehicul se confirmă în oferta asigurătorului.',
  },
  {
    title: 'Carte Verde',
    desc: 'Pentru deplasări internaționale, verificăm țările din traseu, categoria vehiculului și perioada solicitată. Teritoriul, valabilitatea și prima se confirmă înainte de emitere; nu presupune că orice frontieră sau destinație este inclusă.',
  },
  {
    title: 'CASCO',
    desc: 'Pentru daunele propriului vehicul, verificăm evenimentele incluse, franșiza, excluderile și condițiile de reparație. Brokerul poate sprijini comunicarea; asigurătorul analizează dosarul și decide despăgubirea potrivit contractului.',
  },
  {
    title: 'CMR',
    desc: 'Analizăm asigurarea răspunderii transportatorului rutier pentru marfa încredințată. Rutele, contractele, limitele și excluderile se verifică separat; aplicarea Convenției CMR nu dovedește singură existența unei polițe.',
  },
  {
    title: 'Cargo',
    desc: 'Asigurarea mărfii se analizează separat de răspunderea transportatorului. Verificăm bunurile, valorile, traseul, încărcarea, staționările și clauzele propuse, inclusiv eventualele condiții ICC, fără a presupune acoperire integrală.',
  },
  {
    title: 'Răspundere Călători',
    desc: 'Pentru transportul de persoane, verificăm cerințele aplicabile activității și condițiile poliței propuse. Limitele, persoanele asigurate și situațiile de daună trebuie confirmate în documente, nu deduse din denumirea produsului.',
  },
];

const risks = [
  'Accidente rutiere și coliziuni',
  'Furt vehicul sau piese',
  'Vandalism și acte malițioase',
  'Incendiu și explozie',
  'Grindină, inundații, vânt puternic',
  'Daune în parcare (hit and run)',
  'Răsturnare și ieșire din carosabil',
  'Daune provocate terților',
  'Pierdere sau avariere marfă',
  'Răspundere contractuală CMR',
  'Accidente transfrontaliere',
  'Daune la remorci și semiremorci',
];

const targets = [
  'Companii de logistică și transport rutier',
  'Firme de construcții cu utilaje și camioane',
  'Rețele de distribuție și retail',
  'Exploatații agricole cu mașini grele',
  'Companii IT cu flotă de serviciu',
  'Bănci, IFN-uri și leasing auto',
];

const advantages = [
  { num: '01', title: 'Oferte comparate pe aceleași condiții', desc: 'Pentru flote de minimum 5 vehicule, comparăm ofertele disponibile pentru aceleași vehicule, riscuri, limite, franșize și perioade de asigurare. Costul și eventualele economii se confirmă în oferta individuală.' },
  { num: '02', title: 'Contract unic de brokeraj', desc: 'Mandatul de brokeraj poate centraliza administrarea polițelor convenite. Contractele de asigurare, riscurile și condițiile fiecărei categorii de vehicule rămân distincte.' },
  { num: '03', title: 'Calendar de reînnoire', desc: 'Centralizăm datele de expirare. O eventuală aliniere a perioadelor se discută cu asigurătorii și nu modifică automat polițele existente. Verifică valabilitatea înaintea fiecărei deplasări.' },
  { num: '04', title: 'Contact pentru flota dvs.', desc: 'Stabilim persoana de contact și canalele de comunicare pentru programul convenit: telefon, email sau WhatsApp.' },
  { num: '05', title: 'Evidența polițelor și daunelor', desc: 'Datele centralizate pot include polițe, prime, expirări și stadiul dosarelor de daună. Formatul și frecvența raportării se convin înainte de începere.' },
  { num: '06', title: 'Adăugarea unui vehicul', desc: 'Trimiteți datele vehiculului înainte de utilizare. Acceptarea, prima și data intrării în vigoare depind de verificarea documentelor și confirmarea asigurătorului.' },
];

const steps = [
  { num: '01', title: 'Trimiteți lista flotei', desc: 'Începeți cu numărul de înmatriculare, tipul și anul vehiculului. Confirmăm apoi documentele și informațiile suplimentare necesare.' },
  { num: '02', title: 'Analizăm și negociem', desc: 'Solicităm ofertele disponibile pentru riscul descris și comparăm prima, limitele, franșizele și excluderile.' },
  { num: '03', title: 'Verificați ofertele primite', desc: 'Termenul depinde de informațiile complete și răspunsul asigurătorilor. Verificați condițiile, costurile și valabilitatea fiecărei oferte.' },
  { num: '04', title: 'Semnați contractul cadru', desc: 'Confirmați mandatul de brokeraj și, separat, polițele alese. Documentele de semnat depind de produsele și asigurătorii selectați.' },
  { num: '05', title: 'Confirmați intrarea în vigoare', desc: 'Înainte de utilizare, verificați emiterea, plata cerută și perioada de valabilitate. Stabiliți calendarul de reînnoire și modul de notificare.' },
];

const faqs = [
  {
    q: 'Ce este asigurarea de flotă auto și de câte vehicule am nevoie în Moldova?',
    a: 'Programul de flotă discutat aici pornește de la minimum 5 vehicule. Centralizarea prin broker nu înseamnă că RCA, Carte Verde, CASCO, CMR și Cargo sunt incluse automat într-o singură poliță. Selectăm produsele necesare după vehicule, activitate și rute, iar asigurătorul confirmă fiecare risc și condițiile sale.',
  },
  {
    q: 'Cât costă asigurarea de flotă auto în Moldova în 2026?',
    a: 'Prima de asigurare, adică suma plătită pentru poliță, depinde de produs, vehicule, utilizare, rute, istoricul daunelor și condițiile acceptate. Programul de flotă pornește de la minimum 5 vehicule. Eventualele economii se evaluează prin compararea ofertelor pe aceleași limite, franșize și perioade; nu folosi un tarif istoric drept ofertă actuală.',
  },
  {
    q: 'Cum verificați asigurătorul și oferta propusă?',
    a: 'Înainte de alegere, se verifică identitatea asigurătorului, dreptul de a practica tipul de asigurare relevant și documentele ofertei. Cere denumirea exactă a societății, condițiile, limitele, excluderile și perioada de valabilitate. Această pagină nu prezintă o listă exhaustivă sau o confirmare actuală a tuturor autorizațiilor din piață.',
  },
  {
    q: 'Se pot asigura tipuri mixte de vehicule în aceeași flotă?',
    a: 'Poți prezenta o flotă mixtă pentru analiză. Autoturismele, camioanele, microbuzele, remorcile sau utilajele pot avea cerințe și condiții diferite. Acceptarea fiecărei categorii și produsele disponibile se confirmă în ofertă; administrarea comună nu uniformizează automat acoperirea.',
  },
  {
    q: 'Cum se adaugă un vehicul nou în flotă?',
    a: 'Trimiteți datele vehiculului și data de la care aveți nevoie de asigurare, prin canalul convenit. Asigurătorul poate solicita documente sau inspecție. Prima, perioada și momentul intrării în vigoare se confirmă înainte de utilizare; nu presupuneți emiterea imediată ori calculul automat proporțional.',
  },
  {
    q: 'Ce se întâmplă la daună - cine mă ajută?',
    a: 'Asigurați mai întâi siguranța persoanelor și urmați instrucțiunile aplicabile incidentului și poliței. Contactați asigurătorul conform procedurii și brokerul pentru sprijinul convenit. Păstrați dovezile și documentele. Brokerul nu garantează durata sau suma; asigurătorul decide acoperirea și despăgubirea potrivit contractului.',
  },
  {
    q: 'Ce informații contează la o ofertă Carte Verde?',
    a: 'Prezentați categoria și datele vehiculului, țările din traseu, perioada și data de început dorită. Comparați oferte pentru aceleași date și verificați teritoriul înscris. Prima și condițiile valabile se confirmă în oferta actuală, nu într-un exemplu mai vechi sau într-o promisiune de economie.',
  },
  {
    q: 'Care este diferența dintre CMR și Cargo în asigurarea de transport?',
    a: 'Convenția CMR și polița de răspundere a transportatorului nu sunt același document. Asigurarea CMR privește răspunderea transportatorului în condițiile contractului, iar Cargo privește bunurile transportate și riscurile convenite. Verificați separat rutele, valorile, limitele și excluderile. Niciuna nu înlocuiește automat cealaltă și nu oferă siguranță totală.',
  },
  {
    q: 'Serviciul de brokeraj costă ceva în plus față de polița directă?',
    a: 'Înainte de acceptare, cereți explicarea primei de asigurare, a modului de remunerare a brokerului și a eventualelor costuri pentru servicii suplimentare. Acestea trebuie clarificate pentru relația concretă. Nu presupuneți automat nici gratuitatea tuturor serviciilor, nici un preț mai mic decât oferta directă.',
  },
  {
    q: 'Cât de rapid pot obține o ofertă de asigurare flotă?',
    a: 'Trimiteți lista flotei, utilizarea, rutele și datele de expirare prin email sau WhatsApp. După verificarea informațiilor, confirmăm documentele suplimentare și pașii de ofertare. Termenul depinde de complexitate și răspunsul asigurătorilor; această pagină nu promite emiterea unei oferte în 24 de ore.',
  },
];

export const FleetAutoPage: React.FC<FleetAutoPageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Insurance ING Broker SRL",
        "description": "Insurance ING Broker SRL - broker de asigurare în Republica Moldova. Analiza polițelor de flotă, RCA, Carte Verde, CASCO, CMR și Cargo pentru companii.",
        "url": "https://www.ingbroker.md",
        "telephone": "+37369526003",
        "email": "ingbroker@ingbroker.md",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "strada Pan Halippa 9",
          "addressLocality": "Chișinău",
          "addressCountry": "MD"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Republica Moldova"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Asigurări Flotă Auto Moldova",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RCA Flotă Auto Moldova" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carte Verde Flotă Moldova" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CASCO Flotă Corporativă Moldova" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CMR Transport Moldova" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cargo Transport Moldova" } }
          ]
        }
      },
      {
        "@type": "Service",
        "name": "Asigurare Flotă Auto Companii Moldova 2026",
        "description": "Program de analiză a asigurărilor de flotă pentru companii din Moldova. Produsele, acceptarea riscului, primele și limitele se confirmă separat cu asigurătorul.",
        "areaServed": [
          { "@type": "Country", "name": "Moldova" },
          { "@type": "City", "name": "Chișinău" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "Insurance ING Broker SRL",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "strada Pan Halippa 9",
            "addressLocality": "Chișinău",
            "addressCountry": "MD"
          },
          "telephone": "+37369526003"
        },
        "offers": {
          "@type": "Offer",
          "description": "Solicitare de analiză și comparare a ofertelor disponibile pentru flotă",
          "eligibleRegion": { "@type": "Country", "name": "Moldova" }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://www.ingbroker.md" },
          { "@type": "ListItem", "position": 2, "name": "Oferte", "item": "https://www.ingbroker.md/oferte" },
          { "@type": "ListItem", "position": 3, "name": "Asigurare Flotă Auto", "item": "https://www.ingbroker.md/oferte/flote-auto" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <main className="bg-white min-h-screen">
      <SEO
        title="Asigurare Flotă Auto Companii Moldova 2026 - RCA, CASCO, CMR, Carte Verde | ING Broker"
        description="Asigurare flotă auto pentru companii din Moldova: RCA, Carte Verde, CASCO, CMR și Cargo. Vezi informațiile, limitele și condițiile de verificat înainte de ofertare."
        keywords="asigurare flota auto moldova, asigurare flota companii moldova, rca flota moldova, carte verde flota moldova, casco flota moldova, cmr moldova, asigurare transport moldova, broker asigurari flota chisinau, asigurare auto corporativa moldova, program asigurare flota 2026, asigurare camioane moldova, analiza riscuri transport, asigurare vehicule companie"
        lang={lang}
        includeLanguageAlternates={false}
        schema={schema}
        image="https://www.ingbroker.md/camionete.jpg"
      />

      {/* Back Button */}
      <div className="fixed top-32 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/oferte')}
          className={`flex items-center gap-4 px-6 py-3 backdrop-blur-md border rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl group ${
            isScrolled
              ? 'bg-white border-gray-200 text-secondary hover:bg-gray-50'
              : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
          }`}
        >
          <div className="p-1 group-hover:-translate-x-1 transition-transform text-primary">
            <ArrowLeft size={16} strokeWidth={3} />
          </div>
          <span>
            {lang === 'ru' ? 'Назад к Предложениям' : lang === 'en' ? 'Back to Offers' : 'Înapoi la Oferte'}
          </span>
        </motion.button>
      </div>

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-start pt-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/camionete.jpg"
            alt="Flotă auto corporativă asigurată - Insurance ING Broker Moldova"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0a192f]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent opacity-70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Asigurări Corporate - Chișinău, Moldova</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              Asigurare Flotă <br />
              <span className="text-primary italic font-serif normal-case">Auto Moldova 2026</span>
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed mb-4 max-w-2xl">
              Trimiteți lista flotei și rutele. Verificăm documentele și ofertele disponibile; termenul și condițiile se confirmă după analiza informațiilor.
            </p>
            <p className="text-sm text-white/50 font-light mb-12 max-w-xl">
              RCA · Carte Verde · CASCO · CMR · Cargo - produse de analizat separat
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="tel:+37369526003"
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "#C4191F", boxShadow: "0 20px 40px -10px rgba(227,30,36,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-300 inline-flex items-center gap-4"
              >
                <Phone size={14} />
                Solicitați ofertă de flotă
              </motion.a>
              <motion.a
                href="mailto:ingbroker@ingbroker.md"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border border-white/30 text-white font-bold uppercase text-[10px] tracking-[0.3em] inline-flex items-center gap-4 hover:bg-white/10 transition-all"
              >
                <Mail size={14} />
                Trimiteți lista flotei
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              '5+ vehicule - program de flotă',
              'Condiții verificate în ofertă',
              'Compararea primelor și limitelor',
              'Contact de brokeraj convenit',
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-5 group cursor-default">
                <div className="w-14 h-14 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="w-16 h-1 bg-primary mb-10" />
              <motion.h2
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-5xl md:text-6xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8 cursor-default group"
              >
                Flota ta, <br />
                <span className="text-primary italic font-serif group-hover:text-secondary transition-colors duration-500">analizată individual</span>
              </motion.h2>
              <div className="mt-10 space-y-4">
                {[
                  { val: 'Rute', label: 'declarate pentru analiză' },
                  { val: 'Polițe', label: 'cu valabilitate verificată' },
                  { val: 'Limite', label: 'comparate în oferte' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="text-3xl font-black text-primary tracking-tighter">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 pt-4">
              <p className="text-2xl text-gray-700 font-light leading-relaxed mb-8">
                O poliță expirată sau nepotrivită activității poate lăsa compania expusă. Verificați vehiculele, șoferii, utilizarea și rutele înainte de alegere și înainte de fiecare reînnoire.
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                Insurance ING Broker SRL vă ajută să comparați ofertele disponibile pentru flotă: <strong className="text-secondary font-medium">prime, limite, franșize și excluderi</strong>. Franșiza este partea din daună suportată de asigurat potrivit contractului. Nu comparați numai prețul.
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Înainte de acceptare, clarificați serviciile de brokeraj, modul de remunerare și eventualele costuri. O ofertă mai ieftină nu înseamnă automat acoperire echivalentă, iar economia nu este garantată.
              </p>
              <div className="h-px w-full bg-gray-100 mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-primary" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">CE ASIGURĂM</h2>
          </div>
          <p className="text-4xl font-bold text-secondary tracking-tighter mb-16 max-w-2xl">
            6 teme de analizat pentru asigurarea flotei
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-white border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={productImages[i]}
                    alt={`${product.title} - asigurare flotă Moldova`}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 bg-primary px-3 py-1">
                    <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">{product.title}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis - 3 columns */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-left max-w-3xl mb-20">
            <h2 className="text-5xl font-bold text-secondary tracking-tighter mb-6">Riscuri, Clienți și Avantaje</h2>
            <p className="text-gray-500 font-light text-lg">Riscurile și produsele se verifică după activitate. Lista de mai jos este un punct de pornire pentru analiză, nu confirmarea că toate evenimentele sunt acoperite.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">RISCURI DE VERIFICAT</h3>
              </div>
              <ul className="space-y-5">
                {risks.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-600 font-light group">
                    <div className="w-1 h-1 bg-secondary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">PENTRU CINE</h3>
              </div>
              <ul className="space-y-5">
                {targets.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-600 font-light group">
                    <div className="w-1 h-1 bg-secondary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-10 border-t border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-6">Carte Verde - date pentru ofertare</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span className="font-medium">Categoria vehiculului</span>
                      <span className="font-bold text-secondary">Din actele vehiculului</span>
                    </div>
                    <div className="w-full bg-gray-100 h-0.5">
                      <div className="bg-primary h-0.5" style={{ width: '52%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span className="font-medium">Traseul și perioada</span>
                      <span className="font-bold text-secondary">De declarat integral</span>
                    </div>
                    <div className="w-full bg-gray-100 h-0.5">
                      <div className="bg-primary h-0.5" style={{ width: '62%' }} />
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-light pt-2">
                    Prima și teritoriul se verifică în oferta actuală. Confirmați țările din traseu și valabilitatea înainte de plecare.
                  </p>
                  <a
                    href="https://easigurari.com/ro/green-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:underline mt-1"
                  >
                    Calculator Carte Verde <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">AVANTAJELE COLABORĂRII</h3>
              </div>
              <ul className="space-y-6">
                {advantages.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-light group">
                    <span className="text-primary font-bold text-xs shrink-0 mt-0.5">{item.num}</span>
                    <div>
                      <p className="font-bold text-secondary text-sm mb-1">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us - dark section */}
      <section id="why-us" className="py-32 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Truck size={800} className="translate-x-1/4 -translate-y-1/4 text-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Ce verifici împreună cu brokerul?</span>
              </div>
              <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] mb-16">
                Serviciile se <br />
                <span className="text-primary italic font-serif">clarifică</span>
              </h2>

              <div className="space-y-16">
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Remunerarea se explică înainte de acceptare</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">Solicitați explicații despre prima de asigurare, remunerarea brokerului și eventualele servicii suplimentare. Condițiile se clarifică pentru relația concretă, înainte de decizie.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Compararea ofertelor disponibile</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">Comparăm ofertele primite pentru riscurile descrise. Numărul ofertelor și acceptarea fiecărui vehicul depind de disponibilitatea și evaluarea asigurătorilor.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Sprijin în relația cu asigurătorul</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">La daună, puteți solicita sprijinul convenit pentru notificare și documente. Asigurătorul verifică dosarul și decide plata potrivit poliței; brokerul nu garantează rezultatul.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-20 bg-primary/10 rounded-full blur-[120px] opacity-50" />
              <div className="relative z-10 border border-white/10 p-4 bg-white/5 backdrop-blur-sm group">
                <div className="overflow-hidden">
                  <img
                    src="/flota_1.jpg"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    alt="Flotă auto asigurată Moldova"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 -left-12 bg-primary p-6 shadow-2xl hidden xl:block z-20">
                  <p className="text-4xl font-bold tracking-tighter leading-none mb-2">Polițe</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Cu limite verificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">Cum funcționează</span>
            </div>
            <h2 className="text-5xl font-bold text-secondary tracking-tighter mb-6">De la lista flotei la polițe active - 5 pași simpli</h2>
            <p className="text-gray-500 font-light text-lg">Trimiteți lista flotei. Verificăm informațiile necesare, ofertele și documentele de semnat pentru fiecare produs ales.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 border-l border-gray-200 first:border-l-0 group hover:bg-white transition-all duration-300"
              >
                <div className="text-5xl font-light text-primary/15 font-serif italic mb-6">{step.num}</div>
                <h3 className="text-base font-bold text-secondary mb-3 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk audit checklist */}
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="flex items-center gap-4 mb-7"><div className="w-12 h-px bg-primary" /><span className="text-[10px] font-bold uppercase tracking-[0.4em]">Audit flotă, CMR și cargo</span></div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-7">Verifică lacunele înainte de următoarea cursă</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">Checklistul stabilește informațiile necesare pentru analiză. Nu înlocuiește condițiile poliței și nu confirmă acoperirea înainte de acceptarea riscului de către asigurător.</p>
            <a
              href="https://wa.me/37369526003?text=Solicit%20auditul%20flotei%20%C8%99i%20al%20programului%20CMR%2FCargo.%20Voi%20trimite%20lista%20vehiculelor%2C%20rutele%20%C8%99i%20datele%20poli%C8%9Belor%20actuale."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-5 bg-primary text-white font-bold uppercase text-xs tracking-widest items-center gap-3 hover:bg-primary-dark transition-colors"
            >Solicită auditul pe WhatsApp <ArrowRight size={16} /></a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Lista vehiculelor și utilizarea lor',
              'Țările, rutele și tipurile de marfă',
              'Contractele și limitele CMR cerute',
              'Valorile maxime transportate per cursă',
              'Polițele și datele actuale de expirare',
              'Daunele și incidentele relevante',
              'Depozitele și perioadele de staționare',
              'Cerințele clienților și partenerilor'
            ].map(item => (
              <div key={item} className="border border-white/10 p-5 flex gap-3 bg-white/5">
                <ShieldCheck className="text-primary shrink-0" size={20} />
                <span className="text-sm leading-relaxed text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-left mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">Întrebări frecvente</span>
            </div>
            <h2 className="text-4xl font-bold text-secondary tracking-tighter mb-4">Tot ce trebuie să știți despre asigurarea de flotă auto în Moldova</h2>
            <p className="text-gray-500 font-light max-w-2xl">Răspunsuri directe la cele mai comune întrebări despre RCA flotă, Carte Verde, CASCO, CMR și Cargo pentru companii din Republica Moldova.</p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-b border-gray-100 transition-all duration-500 ${openFaq === i ? 'bg-gray-50/50 px-4 -mx-4 shadow-inner' : 'hover:bg-gray-50/30'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-7 flex justify-between items-center text-left group"
                >
                  <span className={`text-lg font-bold tracking-tight transition-all duration-500 ${openFaq === i ? 'text-primary translate-x-4' : 'text-secondary group-hover:text-primary group-hover:translate-x-2'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${openFaq === i ? 'bg-primary border-primary text-white rotate-180 shadow-lg shadow-primary/30' : 'border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.3, delay: 0.1 } } }}
                      exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.2 } } }}
                      className="overflow-hidden"
                    >
                      <div className={`pb-8 text-gray-500 leading-relaxed font-light max-w-3xl transition-all duration-700 ${openFaq === i ? 'translate-x-2' : ''}`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter mb-10">
            Analiza flotei <br />
            <span className="text-gray-300">începe cu datele.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-4 max-w-2xl">
            Trimiteți numărul de înmatriculare, tipul, anul și utilizarea vehiculelor. Confirmăm documentele necesare și solicităm ofertele disponibile pentru riscurile descrise.
          </p>
          <p className="text-sm text-gray-400 font-light mb-12">
            Insurance ING Broker SRL - str. Pan Halippa 9, Chișinău, Republica Moldova
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <motion.a
              href="tel:+37369526003"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 group shadow-lg hover:shadow-primary/40"
            >
              <Phone size={14} />
              +(373) 69 526 003
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="mailto:ingbroker@ingbroker.md"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border border-primary/20 text-primary font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-sm hover:shadow-xl"
            >
              <Mail size={14} />
              ingbroker@ingbroker.md
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
};
