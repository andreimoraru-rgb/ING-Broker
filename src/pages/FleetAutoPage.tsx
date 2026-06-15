import React, { useState, useEffect } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Phone, Mail, ShieldCheck, ArrowRight, ArrowLeft, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FleetAutoPageProps {
  lang: Language;
}

const productImages = [
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
];

const products = [
  {
    title: 'RCA Flotă',
    desc: 'Asigurare obligatorie de răspundere civilă pentru toată flota. Tarif negociat per lot, gestiune centralizată a polițelor.',
  },
  {
    title: 'Carte Verde',
    desc: 'Circulație internațională în 47 țări. Obligatorie pentru vehiculele care traversează frontiera. Preț 2026: 703–1.343 MDL (15 zile, autoturisme).',
  },
  {
    title: 'CASCO',
    desc: 'Protecție pentru daune proprii - coliziuni, furt, vandalism, calamități naturale. Esențial pentru vehiculele de valoare ridicată.',
  },
  {
    title: 'CMR',
    desc: 'Răspunderea transportatorului față de marfa clientului. Obligatorie pentru transport internațional rutier de marfă.',
  },
  {
    title: 'Cargo',
    desc: 'Asigurarea mărfii în tranzit - pe drum, în depozit, pe mare sau aer. Acoperă pierderile și daunele de-a lungul lanțului logistic.',
  },
  {
    title: 'Răspundere Călători',
    desc: 'Protecție pentru pasagerii transportați. Obligatorie pentru microbuze, autocare și servicii de transport persoane.',
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
  { num: '01', title: 'Tarif negociat', desc: 'Economii de 15–20% față de polițe individuale, prin volum și relații directe cu asigurătorii.' },
  { num: '02', title: 'Contract unic', desc: 'O singură relație contractuală pentru toată flota, indiferent de tipul vehiculelor.' },
  { num: '03', title: 'Polițe sincronizate', desc: 'Toate polițele expiră în aceeași zi - nu mai ratați nicio reînnoire.' },
  { num: '04', title: 'Manager dedicat', desc: 'Un specialist ING Broker se ocupă exclusiv de flota dvs. - disponibil telefonic sau email.' },
  { num: '05', title: 'Raportare lunară', desc: 'Rapoarte clare cu situația polițelor, daunele deschise și costul per vehicul.' },
  { num: '06', title: 'Adăugare rapidă', desc: 'Vehicul nou în flotă - poliță emisă în 2 ore, fără birocrație.' },
];

const steps = [
  { num: '01', title: 'Trimiteți lista flotei', desc: 'Nr. înmatriculare, tip vehicul, an fabricație. Un email sau WhatsApp e suficient.' },
  { num: '02', title: 'Analizăm și negociem', desc: 'Comparăm ofertele de la toți asigurătorii autorizați din Moldova și negociem tariful.' },
  { num: '03', title: 'Primiți oferta în 24h', desc: 'Ofertă detaliată cu prețuri finale, condiții și comparativ pe asigurători.' },
  { num: '04', title: 'Semnați contractul', desc: 'Contract cadru de brokeraj - o singură semnătură pentru toată flota.' },
  { num: '05', title: 'Polițele sunt active', desc: 'Emitem polițele, le gestionăm și vă anunțăm cu 30 zile înainte de orice expirare.' },
];

const faqs = [
  {
    q: 'Câte vehicule sunt necesare pentru o asigurare de flotă?',
    a: 'Minimum 3 vehicule. De la 10 vehicule în sus, negociem condiții preferențiale suplimentare cu asigurătorii.',
  },
  {
    q: 'Se pot asigura tipuri mixte de vehicule (autoturisme + camioane)?',
    a: 'Da. Gestionăm flote mixte - autoturisme, camioane, microbuze, utilaje. Fiecare categorie are tariful ei, dar contractul de brokeraj e unic.',
  },
  {
    q: 'Cum se adaugă un vehicul nou în flotă?',
    a: 'Sunați sau scrieți managerului dedicat. Poliță emisă în 2 ore, prima calculată pro-rata pentru perioada rămasă.',
  },
  {
    q: 'Ce se întâmplă la daună pentru mai multe vehicule simultan?',
    a: 'Intervenim direct cu asigurătorul. Experiența noastră în daune de flotă scurtează procesul de la luni la săptămâni.',
  },
  {
    q: 'Carte Verde - de ce diferă prețul atât de mult între asigurători?',
    a: 'Fiecare asigurător calculează riscul diferit. Diferența poate fi 100% pentru aceleași condiții. De aceea un broker care compară piața vă salvează bani reali.',
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
    "@type": "Service",
    "name": "Asigurare Flotă Auto Corporativă Moldova",
    "description": "Asigurare flotă auto pentru companii din Moldova - RCA, Carte Verde, CASCO, CMR. Tarife negociate, contract unic, manager dedicat.",
    "provider": {
      "@type": "Organization",
      "name": "Insurance ING Broker SRL"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Asigurare Flotă Auto Corporativă - ING Broker Moldova"
        description="Asigurare flotă auto pentru companii din Moldova. RCA, Carte Verde, CASCO, CMR - tarife negociate, contract unic, manager dedicat. Economii 15-20% față de polițe individuale."
        lang={lang}
        schema={schema}
      />

      {/* Back Button */}
      <div className="fixed top-32 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
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
            {lang === 'ru' ? 'Назад на Главную' : lang === 'en' ? 'Back to Home' : 'Înapoi la Acasă'}
          </span>
        </motion.button>
      </div>

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-start pt-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920"
            alt="Flotă Auto Corporativă"
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
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Soluții Corporate</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              Asigurăm flota. <br />
              <span className="text-primary italic font-serif normal-case">Protejăm afacerea.</span>
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl">
              RCA, Carte Verde, CASCO, CMR - toate polițele flotei dvs. negociate și gestionate de un singur broker.
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
              '3+ vehicule - minim flotă',
              'Ofertă în 24 ore',
              '15-20% economii vs individual',
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
                <span className="text-primary italic font-serif group-hover:text-secondary transition-colors duration-500">protejată</span>
              </motion.h2>
            </div>
            <div className="lg:col-span-7 pt-4">
              <p className="text-2xl text-gray-700 font-light leading-relaxed mb-10">
                O companie cu 10 vehicule poate plăti cu 20% mai puțin dacă asigură flota printr-un broker față de polițe individuale la ghișeu. Negociem direct cu asigurătorii, comparăm toate ofertele din piața moldovenească și vă livrăm un pachet complet - un contract, un manager, o dată de reînnoire.
              </p>
              <div className="h-px w-full bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-[1px] bg-primary" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              CE ASIGURĂM
            </h2>
          </div>
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={productImages[i]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed text-xs">
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
            <p className="text-gray-500 font-light text-lg">O imagine completă a ce acoperă asigurarea de flotă, cine are nevoie de ea și ce câștigați lucrând cu un broker.</p>
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
              <ul className="space-y-6">
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
              <ul className="space-y-6">
                {targets.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-600 font-light group">
                    <div className="w-1 h-1 bg-secondary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-10 border-t border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-6">Carte Verde 2026 - Prețuri orientative</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="font-light">Autoturism 15 zile</span>
                    <span className="font-bold text-secondary">703–1.343 MDL</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="font-light">Camion C2 12 luni</span>
                    <span className="font-bold text-secondary">10.887–17.580 MDL</span>
                  </div>
                  <div className="h-px bg-gray-100 my-3" />
                  <p className="text-[10px] text-gray-400 font-light">
                    Prețuri valabile 2026. Variază în funcție de asigurător, destinație și perioadă.
                  </p>
                  <a
                    href="https://easigurari.com/ro/green-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:underline mt-2"
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
                  <li key={i} className="flex items-start gap-4 text-sm font-light group">
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
                    <p className="text-white/50 font-light leading-relaxed max-w-md">Nu plătiți extra pentru serviciile noastre de brokeraj. Comisionul nostru e inclus în prima pe care o plătiți oricum - dar noi negociem un tarif mai bun.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Acces la toți asigurătorii din Moldova</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">Comparăm prețurile de la toți asigurătorii autorizați CNPF și alegem cea mai bună combinație raport calitate/preț pentru flota dvs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-20 bg-primary/10 rounded-full blur-[120px] opacity-50" />
              <div className="relative z-10 border border-white/10 p-4 bg-white/5 backdrop-blur-sm group">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    alt="Transport Fleet"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 -left-12 bg-primary p-6 shadow-2xl hidden xl:block z-20">
                  <p className="text-4xl font-bold tracking-tighter leading-none mb-2">20%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Economii</p>
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
            <h2 className="text-5xl font-bold text-secondary tracking-tighter mb-6">De la lista flotei la polițe active - 5 pași</h2>
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <div className="w-16 h-1 bg-primary mb-10" />
              <h2 className="text-5xl font-bold text-secondary tracking-tighter leading-[0.9]">
                Întrebări frecvente
              </h2>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left py-8 flex items-center justify-between gap-8 group"
                  >
                    <span className="text-base font-bold text-secondary group-hover:text-primary transition-colors tracking-tight">
                      {faq.q}
                    </span>
                    <div className={`shrink-0 w-8 h-8 border border-gray-200 flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-primary border-primary rotate-45' : 'group-hover:border-primary'}`}>
                      <ArrowRight size={12} className={`transition-colors ${openFaq === i ? 'text-white' : 'text-gray-400 group-hover:text-primary'}`} />
                    </div>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pb-8"
                    >
                      <p className="text-gray-500 font-light leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter mb-10">
            Trimiteți lista flotei <br />
            <span className="text-gray-300">astăzi.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-12 max-w-2xl">
            Ofertă personalizată în 24 de ore. Fără obligații.
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
