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
    desc: 'Asigurare obligatorie pentru toate vehiculele companiei. La 3+ vehicule negociem tarife cu toți cei 6 asigurători autorizați din Moldova - economii reale de 10 -25% față de polița la ghișeu.',
  },
  {
    title: 'Carte Verde',
    desc: 'Circulație în 47 de țări, obligatorie la traversarea frontierei. Prețuri 2026: 703 -1.343 MDL (autoturism 15 zile). Brokerul compară și emite în 30 de minute.',
  },
  {
    title: 'CASCO',
    desc: 'Daune proprii: coliziuni, furt, grindină, vandalism, incendiu - indiferent de vinovăție. Francize negociate, daune gestionate direct de brokerul dvs. cu asigurătorul.',
  },
  {
    title: 'CMR',
    desc: 'Răspunderea legală față de marfa clienților pe coridorul Moldova -România -UE. Obligatorie pentru orice transport rutier internațional de marfă.',
  },
  {
    title: 'Cargo',
    desc: 'Marfa asigurată de la depozit la destinatar, independent de culpa transportatorului. Condiții ICC A, B sau C adaptate tipului de produs și riscurilor de traseu.',
  },
  {
    title: 'Răspundere Călători',
    desc: 'Cerință legală pentru microbuze, autocare și transport comercial persoane. Acoperă prejudiciile fizice și materiale ale pasagerilor în caz de accident.',
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
  { num: '01', title: 'Tarif negociat cu asigurătorii', desc: 'Economii de 15 -25% față de polițe individuale prin volum și relații directe cu toți asigurătorii autorizați CNPF din Moldova.' },
  { num: '02', title: 'Contract unic de brokeraj', desc: 'O singură relație contractuală pentru toată flota, indiferent de numărul sau tipul vehiculelor - autoturisme, camioane, utilaje.' },
  { num: '03', title: 'Polițe sincronizate ca dată', desc: 'Toate polițele expiră în aceeași zi. Un singur calendar de reînnoire, zero riscul de a circula fără asigurare valabilă.' },
  { num: '04', title: 'Manager dedicat flotei dvs.', desc: 'Un specialist ING Broker răspunde exclusiv de portofoliul dvs. - telefon, email, WhatsApp. Nu căutați nimănui.' },
  { num: '05', title: 'Raportare lunară transparentă', desc: 'Situația exactă a tuturor polițelor, daunele deschise și stadiul lor, costul per vehicul și economiile obținute.' },
  { num: '06', title: 'Vehicul nou - poliță în 2 ore', desc: 'Adăugați un vehicul nou în flotă - trimiteți datele managerului și aveți polița emisă în mai puțin de 2 ore.' },
];

const steps = [
  { num: '01', title: 'Trimiteți lista flotei', desc: 'Nr. înmatriculare, tip vehicul, an fabricație. Un email sau WhatsApp este suficient.' },
  { num: '02', title: 'Analizăm și negociem', desc: 'Comparăm ofertele de la toți asigurătorii autorizați din Moldova și negociem tariful optim.' },
  { num: '03', title: 'Primiți oferta în 24h', desc: 'Ofertă detaliată cu prețuri finale, condiții și comparativ pe toți asigurătorii disponibili.' },
  { num: '04', title: 'Semnați contractul cadru', desc: 'Un singur contract de brokeraj - o semnătură pentru întreaga flotă, indiferent de tipuri și asigurători.' },
  { num: '05', title: 'Polițele sunt active', desc: 'Emitem polițele, le gestionăm activ și vă anunțăm cu 30 de zile înainte de orice expirare.' },
];

const faqs = [
  {
    q: 'Ce este asigurarea de flotă auto și de câte vehicule am nevoie în Moldova?',
    a: 'Asigurarea de flotă auto este un program centralizat de asigurare pentru companii cu minimum 3 vehicule înmatriculate în Republica Moldova. Într-un singur contract de brokeraj se acoperă RCA, Carte Verde, CASCO, CMR și Cargo pentru toată flota, cu un singur manager dedicat și o singură dată de reînnoire anuală. De la 10 vehicule se negociază reduceri suplimentare de volum; flote mari (50+ vehicule) pot obține tarife individuale negociate direct cu conducerea asigurătorilor.',
  },
  {
    q: 'Cât costă asigurarea de flotă auto în Moldova în 2026?',
    a: 'Costul depinde de tipul vehiculelor, vechime, istoricul de daune și dimensiunea flotei. Față de polițe individuale, economiile prin program de flotă sunt de 15 -25%. Exemplu orientativ: RCA pentru un autoturism 2022 - aproximativ 1.800 -2.400 MDL/an în program de flotă față de 2.200 -3.000 MDL individual. Carte Verde autoturism 15 zile: 703 -1.343 MDL în funcție de asigurător (comparăm toți cei 6 - Acord, Asterra, Moldasig, Moldcargo, Donaris, Grawe Carat). Trimiteți lista flotei și primiți oferta exactă în 24 de ore.',
  },
  {
    q: 'Care sunt asigurătorii auto autorizați în Moldova în 2026?',
    a: 'În Republica Moldova activează 6 companii de asigurare auto autorizate de CNPF (Comisia Națională a Pieței Financiare): Acord Grup SA, Asterra Grup SA, Moldasig VIG SA, Moldcargo SA, Donaris VIG SA și Grawe Carat SA. Insurance ING Broker SRL compară simultan ofertele tuturor celor 6 asigurători și selectează tariful optim pentru fiecare tip de vehicul din flota dvs.',
  },
  {
    q: 'Se pot asigura tipuri mixte de vehicule în aceeași flotă?',
    a: 'Da. Gestionăm flote mixte - autoturisme, camioane, microbuze, semiremorci, tractoare și utilaje agricole. Fiecare categorie are tariful specific, dar există un singur contract de brokeraj și un singur manager de cont dedicat. Companiile de logistică cu camioane și autoturisme de serviciu sunt cel mai frecvent tip de flotă mixtă cu care lucrăm.',
  },
  {
    q: 'Cum se adaugă un vehicul nou în flotă?',
    a: 'Trimiteți seria de șasiu, numărul de înmatriculare și tipul vehiculului managerului dvs. dedicat prin email sau WhatsApp. Polița nouă este emisă în maximum 2 ore, prima calculată pro-rata pentru perioada rămasă din contractul de flotă. Nu există drumuri la asigurător - gestionăm totul online.',
  },
  {
    q: 'Ce se întâmplă la daună - cine mă ajută?',
    a: 'La orice daună sunați managerul dvs. dedicat de la Insurance ING Broker SRL. Intervenim direct ca intermediar al clientului cu asigurătorul - nu al asigurătorului cu clientul. Experiența noastră în gestionarea daunelor de flotă din Chișinău și toată Moldova reduce durata procesului și maximizează despăgubirea. Aveți un singur punct de contact pentru toate vehiculele, indiferent de asigurător.',
  },
  {
    q: 'Carte Verde - de ce variază prețul între asigurători?',
    a: 'Fiecare asigurător calculează riscul diferit. La 15 zile autoturism, diferența ajunge la 91% - între 703 MDL (Moldcargo) și 1.343 MDL (Grawe Carat) în 2026. La o flotă de 20 camioane cu Carte Verde anuală (C2, 12 luni: 10.887 -17.580 MDL), diferența poate fi 130.000+ MDL pe an între cel mai ieftin și cel mai scump asigurător. Brokerul ING alege întotdeauna tariful optim pentru ruta și tipul vehiculului dvs.',
  },
  {
    q: 'Care este diferența dintre CMR și Cargo în asigurarea de transport?',
    a: 'CMR (Convenția privind Contractul de Transport Internațional de Mărfuri) acoperă răspunderea legală a transportatorului față de marfa clientului - este obligatorie pentru orice transport internațional rutier din Moldova spre România, UE sau Ucraina. Cargo acoperă marfa în sine, independent de culpa transportatorului - o plătește proprietarul mărfii (importatorul sau exportatorul). O companie de logistică din Moldova are nevoie de ambele: CMR pentru a se proteja pe sine și Cargo pentru a oferi clienților siguranță totală.',
  },
  {
    q: 'Serviciul de brokeraj costă ceva în plus față de polița directă?',
    a: 'Nu. Serviciul de brokeraj este 100% gratuit pentru compania dvs. Comisionul Insurance ING Broker SRL este plătit de asigurător din prima de asigurare - aceeași primă pe care ați plăti-o oricum dacă ați merge direct la asigurător. Diferența: brokerul negociază un tarif final mai mic și vă gestionează toate polițele, daunele și reînnoirile. Practic, primiți un serviciu profesional fără niciun cost suplimentar.',
  },
  {
    q: 'Cât de rapid pot obține o ofertă de asigurare flotă?',
    a: 'Trimiteți lista flotei (nr. înmatriculare, tip vehicul, an fabricație) prin email la ingbroker@ingbroker.md sau WhatsApp la +(373) 69 526 003. În maximum 24 de ore primiți oferta comparativă completă de la toți cei 6 asigurători autorizați din Moldova, cu prețuri finale și recomandarea noastră pentru fiecare tip de vehicul. Fără costuri, fără obligații.',
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
        "description": "Broker de asigurări autorizat CNPF în Republica Moldova. Asigurare flotă auto, RCA, Carte Verde, CASCO, CMR, Cargo pentru companii din Chișinău și toată Moldova.",
        "url": "https://www.ingbroker.md",
        "telephone": "+37369526003",
        "email": "ingbroker@ingbroker.md",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "str. Pan Halippa, 9",
          "addressLocality": "Chișinău",
          "postalCode": "MD-2009",
          "addressCountry": "MD"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "47.0245",
          "longitude": "28.8322"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "18:00"
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
        "description": "Program de asigurare flotă auto pentru companii din Moldova. RCA, Carte Verde, CASCO, CMR, Cargo - tarife negociate cu toți cei 6 asigurători autorizați CNPF: Acord, Asterra, Moldasig, Moldcargo, Donaris, Grawe Carat. Manager dedicat, contract unic, economii 15-25%. Ofertă comparativă în 24h.",
        "areaServed": [
          { "@type": "Country", "name": "Moldova" },
          { "@type": "City", "name": "Chișinău" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "Insurance ING Broker SRL",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "str. Pan Halippa, 9",
            "addressLocality": "Chișinău",
            "addressCountry": "MD"
          },
          "telephone": "+37369526003"
        },
        "offers": {
          "@type": "Offer",
          "description": "Ofertă comparativă gratuită în 24h pentru asigurare flotă auto",
          "price": "0",
          "priceCurrency": "MDL",
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
    <div className="bg-white min-h-screen">
      <SEO
        title="Asigurare Flotă Auto Companii Moldova 2026 - RCA, CASCO, CMR, Carte Verde | ING Broker"
        description="Asigurare flotă auto pentru companii din Moldova - ofertă comparativă în 24h. RCA flotă, Carte Verde, CASCO, CMR, Cargo - comparăm toți cei 6 asigurători autorizați CNPF: Acord, Asterra, Moldasig, Moldcargo, Donaris, Grawe Carat. Economii 15-25%. Broker autorizat Chișinău."
        keywords="asigurare flota auto moldova, asigurare flota companii moldova, rca flota moldova, carte verde flota moldova, casco flota moldova, cmr moldova, asigurare transport moldova, broker asigurari flota chisinau, asigurare auto corporativa moldova, program asigurare flota 2026, asiguratori moldova cnpf, asigurare camioane moldova, acord asterra moldasig donaris grawe carat moldcargo"
        lang={lang}
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
              Trimiteți lista flotei astăzi. Primiți ofertă comparativă de la toți cei 6 asigurători autorizați din Moldova în 24 de ore.
            </p>
            <p className="text-sm text-white/50 font-light mb-12 max-w-xl">
              RCA · Carte Verde · CASCO · CMR · Cargo - Acord, Asterra, Moldasig, Moldcargo, Donaris, Grawe Carat
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="tel:+37369526003"
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "#C4191F", boxShadow: "0 20px 40px -10px rgba(227,30,36,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-300 inline-flex items-center gap-4"
              >
                <Phone size={14} />
                Calculez costul pentru flota mea
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
              '3+ vehicule - minim flotă',
              'Ofertă personalizată în 24h',
              '15-25% economii vs individual',
              'Manager dedicat flotei',
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
                <span className="text-primary italic font-serif group-hover:text-secondary transition-colors duration-500">protejată complet</span>
              </motion.h2>
              <div className="mt-10 space-y-4">
                {[
                  { val: '6', label: 'asigurători comparați' },
                  { val: '24h', label: 'ofertă personalizată' },
                  { val: '20%', label: 'economii medii flotă' },
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
                Fiecare vehicul neacoperit este un risc financiar direct. Un accident cu un camion neasigurat poate costa 500.000+ MDL - mai mult decât prima pentru întreaga flotă pe 5 ani.
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                Insurance ING Broker SRL, autorizat CNPF în Republica Moldova, compară simultan ofertele tuturor celor 6 asigurători auto: <strong className="text-secondary font-medium">Acord Grup, Asterra Grup, Moldasig VIG, Moldcargo, Donaris VIG și Grawe Carat</strong>. Alegeți cel mai bun tarif pentru fiecare vehicul - nu un singur asigurător.
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Serviciul de brokeraj este 100% gratuit pentru compania dvs. Comisionul vine de la asigurător - noi negociem un tarif final mai mic decât ați obține direct la ghișeu, din Chișinău sau oriunde în Moldova.
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
            6 tipuri de asigurare pentru orice tip de flotă
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
            <p className="text-gray-500 font-light text-lg">Tot ce acoperă asigurarea de flotă auto, cine are nevoie de ea în Moldova și ce câștigați concret lucrând cu un broker față de direct.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">RISCURI ACOPERITE</h3>
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
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-6">Carte Verde 2026 - Prețuri piață Moldova</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span className="font-medium">Autoturism - 15 zile</span>
                      <span className="font-bold text-secondary">703 -1.343 MDL</span>
                    </div>
                    <div className="w-full bg-gray-100 h-0.5">
                      <div className="bg-primary h-0.5" style={{ width: '52%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span className="font-medium">Camion C2 - 12 luni</span>
                      <span className="font-bold text-secondary">10.887 -17.580 MDL</span>
                    </div>
                    <div className="w-full bg-gray-100 h-0.5">
                      <div className="bg-primary h-0.5" style={{ width: '62%' }} />
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-light pt-2">
                    Prețuri valabile 2026. Variază pe asigurător, destinație și perioadă. Brokerul selectează cel mai avantajos.
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
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">De ce broker și nu direct?</span>
              </div>
              <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] mb-16">
                Un broker costă <br />
                <span className="text-primary italic font-serif">zero</span>
              </h2>

              <div className="space-y-16">
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Comisionul vine de la asigurător</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">Nu plătiți nimic extra față de ceea ce ați plăti la ghișeul asigurătorului. Comisionul de brokeraj e inclus în prima pe care oricum o plătiți - dar noi negociem un tarif final mai mic.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Acces la toți cei 6 asigurători autorizați din Moldova</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">Comparăm prețurile și condițiile de la toți asigurătorii autorizați din Moldova și alegem combinația optimă pentru fiecare vehicul din flota dvs. - nu un singur asigurător.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Reprezentăm interesele dvs., nu ale asigurătorului</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">La daune, brokerul intervine de partea clientului. Un agent al asigurătorului lucrează pentru asigurător. Diferența se simte cel mai mult când aveți nevoie de despăgubire rapidă.</p>
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
                  <p className="text-4xl font-bold tracking-tighter leading-none mb-2">20%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Economii medii</p>
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
            <p className="text-gray-500 font-light text-lg">Fără drumuri la asigurători, fără formulare complicate. Trimiteți lista, primiți oferta, semnați o dată.</p>
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
            Ofertă completă <br />
            <span className="text-gray-300">în 24 de ore.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-4 max-w-2xl">
            Trimiteți lista flotei acum - nr. de înmatriculare, tip vehicul, an fabricație. Primiți comparativ complet de prețuri de la toți asigurătorii din Moldova.
          </p>
          <p className="text-sm text-gray-400 font-light mb-12">
            Insurance ING Broker SRL - str. Pan Halippa 9, Chișinău, Moldova - CNPF autorizat
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
    </div>
  );
};
