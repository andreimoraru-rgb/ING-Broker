import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Car, 
  Plane, 
  Home, 
  HeartPulse, 
  ChevronRight, 
  ChevronDown,
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Send,
  Phone, 
  Globe, 
  Facebook,
  Linkedin,
  Instagram,
  Users, 
  Clock,
  HelpCircle,
  ExternalLink,
  Languages
} from 'lucide-react';
import { translations, productTranslations, faqTranslations, Language } from './translations';
import { SEO } from './components/SEO';
import { SchemaMarkup } from './components/SchemaMarkup';
import { localBusinessSchema, faqSchema, howToSchema } from './utils/schema';
import { BusinessPage } from './pages/BusinessPage';
import { BusinessProductPage } from './pages/BusinessProductPage';
import { ReinsurancePage } from './pages/ReinsurancePage';
import { AIStudio } from './pages/AIStudio';
import { RenewableEnergyPage } from './pages/RenewableEnergyPage';
import { FleetAutoPage } from './pages/FleetAutoPage';
import { PropertyAssetsPage } from './pages/PropertyAssetsPage';
import { GenericProductPage } from './pages/GenericProductPage';
import { ContactPage } from './pages/ContactPage';
import { OffersPage } from './pages/OffersPage';
import { NewsInsightsPage } from './pages/NewsInsightsPage';
import { ArticlePage } from './pages/ArticlePage';
import { AdminAITools } from './pages/AdminAITools';
import { ConstructionShieldPage } from './pages/ConstructionShieldPage';
import { CarEarPage } from './pages/CarEarPage';
import { CorporatePage } from './pages/CorporatePage';
import { ProfessionalIndemnityPage } from './pages/ProfessionalIndemnityPage';
import { CyberInsurancePage } from './pages/CyberInsurancePage';
import { EmployeeBenefits } from './pages/EmployeeBenefits';
import AboutPage from './components/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import { INGReLogo } from './components/INGReLogo';
import { WhatsAppButton } from './components/WhatsAppButton';


// --- Assets & Colors ---
const LOGO_URL = "/Logo ING Broker.png"; // header logo
const COLORS = {
  primary: '#E31E24', // Red from logo
  primaryDark: '#C4191F',
  secondary: '#222222', // Dark gray from logo
  lightGray: '#F5F5F5',
  white: '#FFFFFF'
};

// --- Types & Data ---

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  forWho: string;
  covers: string;
  advantages: string[];
  cta: string;
  link: string;
  image: string;
  analysis?: {
    risks?: { title: string; items: string[] };
    advantages?: { title: string; items: string[] };
    disadvantages?: { title: string; items: string[] };
  };
}

const products: Product[] = [
  {
    id: 'rca',
    title: 'RCA',
    subtitle: 'Responsabilitate Civilă Auto',
    description: 'Asigurarea obligatorie care îți oferă liniștea necesară la volan în Republica Moldova. Ne asigurăm că ești protejat legal și că procesul de emitere este cel mai rapid din piață.',
    forWho: 'Toți proprietarii de vehicule înmatriculate în Moldova.',
    covers: 'Daunele cauzate terțelor persoane în urma accidentelor rutiere.',
    advantages: ['Emitere instantanee online', 'Consultant dedicat în caz de daună', 'Prețuri reglementate, proces premium'],
    cta: 'Calculează RCA',
    link: 'https://easigurari.com/ro/rca',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'carte-verde',
    title: 'Carte Verde',
    subtitle: 'Siguranță peste hotare',
    description: 'Partenerul tău de încredere pentru călătoriile auto internaționale. Indiferent de destinație, Cartea Verde de la ING Broker îți garantează protecția necesară în afara granițelor.',
    forWho: 'Șoferii care călătoresc cu mașina în afara țării.',
    covers: 'Răspunderea civilă auto în statele membre ale sistemului Carte Verde.',
    advantages: ['Valabilitate internațională extinsă', 'Suport 24/7 în străinătate', 'Livrare rapidă sau ridicare imediată'],
    cta: 'Calculează Carte Verde',
    link: 'https://easigurari.com/ro/green-card',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'medicala',
    title: 'Asigurare Medicală',
    subtitle: 'Protecție în călătorii',
    description: 'Vacanțele și delegațiile tale merită o protecție fără compromisuri. Acoperim cheltuielile medicale neprevăzute, astfel încât tu să te concentrezi pe experiențe, nu pe griji.',
    forWho: 'Turiști, studenți și profesioniști care călătoresc extern.',
    covers: 'Urgențe medicale, spitalizare, tratamente și repatriere.',
    advantages: ['Acoperire globală completă', 'Fără franșiză la urgențe', 'Asistență telefonică în limba română'],
    cta: 'Calculează asigurarea',
    link: 'https://easigurari.com/ro/health-insurance',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'casco',
    title: 'CASCO',
    subtitle: 'Protecție totală auto',
    description: 'Vehiculul tău este o investiție care merită protejată împotriva oricărui risc: accident, furt, vandalism sau fenomene naturale. CASCO de la ING Broker este scutul tău premium.',
    forWho: 'Proprietarii de mașini noi sau rulate care vor protecție maximă.',
    covers: 'Daune proprii, furt, vandalism, incendiu, calamități naturale.',
    advantages: ['Reparații în service-uri autorizate', 'Asistență rutieră inclusă', 'Flexibilitate în alegerea riscurilor'],
    cta: 'Vezi detalii CASCO',
    link: '#',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'locuinta',
    title: 'Asigurarea Locuinței',
    subtitle: 'Căminul tău, în siguranță',
    description: 'Locuința este mai mult decât o clădire, este spațiul tău de siguranță. Oferim soluții complete pentru protejarea structurii, a bunurilor și a răspunderii față de vecini.',
    forWho: 'Proprietari de apartamente și case la sol.',
    covers: 'Incendiu, inundații, cutremur, furt, răspundere civilă.',
    advantages: ['Evaluare corectă a bunurilor', 'Protecție pentru vecini inclusă', 'Despăgubire rapidă în caz de daună'],
    cta: 'Vezi detalii Locuință',
    link: '#',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'accidente',
    title: 'Accidente',
    subtitle: 'Siguranța personală',
    description: 'Imprevizibilul face parte din viață, dar impactul financiar poate fi controlat. O asigurare de accidente oferă suportul necesar ție și familiei tale în momentele critice.',
    forWho: 'Persoane active, sportivi și familii prudente.',
    covers: 'Invaliditate, fracturi, arsuri sau deces din accident.',
    advantages: ['Sume asigurate flexibile', 'Acoperire 24/7 oriunde în lume', 'Plată rapidă a indemnizației'],
    cta: 'Vezi detalii Accidente',
    link: '#',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000'
  }
];

const faqs = [
  { q: 'Cum pot încheia o asigurare RCA online?', a: 'Procesul este simplu: accesați link-ul de calcul, introduceți datele vehiculului și ale proprietarului, alegeți perioada și achitați online. Polița va fi emisă instantaneu.' },
  { q: 'Ce documente sunt necesare pentru Cartea Verde?', a: 'Aveți nevoie de certificatul de înmatriculare al vehiculului și actul de identitate al persoanei care încheie asigurarea.' },
  { q: 'Asigurarea medicală acoperă și riscul de COVID-19?', a: 'Da, majoritatea polițelor noastre medicale de călătorie includ acoperire pentru tratamentul COVID-19 în străinătate.' },
  { q: 'Care este diferența între RCA și CASCO?', a: 'RCA este obligatorie și despăgubește terții accidentați de dumneavoastră. CASCO este facultativă și despăgubește daunele propriei mașini, indiferent de vină.' },
  { q: 'Pot asigura o locuință închiriată?', a: 'Da, atât proprietarul cât și chiriașul pot încheia asigurări pentru bunuri sau răspundere civilă față de terți.' }
];

// --- Components ---

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Navbar = ({ lang, setLang, scrolled, onOpenCalculator }: { lang: Language, setLang: (l: Language) => void, scrolled: boolean, onOpenCalculator: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const isDarkHero = !['/termeni-si-conditii', '/politica-de-confidentialitate', '/ai-studio', '/admin/ai-tools'].includes(location.pathname);

  const changeLanguage = (l: Language) => {
    setLang(l);
    const path = location.pathname;
    if (path === '/despre-noi' || path === '/o-nas' || path === '/about-us') {
      if (l === 'ro') navigate('/despre-noi');
      else if (l === 'ru') navigate('/o-nas');
      else if (l === 'en') navigate('/about-us');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || !isDarkHero ? 'bg-white shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            {location.pathname.startsWith('/reinsurance') ? (
              <INGReLogo isDark={!scrolled && isDarkHero} className="h-8 md:h-10 lg:h-16" />
            ) : (
              <img 
                src={LOGO_URL} 
                alt={t.logoAlt} 
                className={`h-8 md:h-10 lg:h-16 transition-all object-contain ${!scrolled && isDarkHero ? 'brightness-0 invert' : ''}`}
              />
            )}
          </a>
        </div>

        {/* Center: Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap mx-auto">
          {t.nav.map((item, idx) => {
            const getAboutLink = (l: Language) => {
              if (l === 'ro') return '/despre-noi';
              if (l === 'ru') return '/o-nas';
              return '/about-us';
            };
            const hrefs = ['/', '/business', '/reinsurance', getAboutLink(lang), '/contact'];
            const isInternal = hrefs[idx].startsWith('#');
            const isActive = location.pathname === hrefs[idx] || (hrefs[idx] === '/' && location.pathname === '') || (hrefs[idx] === getAboutLink(lang) && ['/despre-noi', '/o-nas', '/about-us'].includes(location.pathname));
            const className = `text-[11px] font-display font-semibold uppercase tracking-[0.15em] transition-all duration-300 relative inline-block group/nav whitespace-nowrap ${scrolled || !isDarkHero ? 'text-secondary' : 'text-white/80'}`;
            
            return isInternal ? (
              <a 
                key={item} 
                href={hrefs[idx]} 
                className={className}
              >
                <span className="relative z-10 block">
                  {item}
                </span>
                <span className={`absolute bottom-[-6px] left-0 h-[2px] transition-all duration-300 ${isActive ? 'w-full bg-primary' : `w-0 group-hover/nav:w-full ${scrolled || !isDarkHero ? 'bg-primary' : 'bg-white'}`}`} />
              </a>
            ) : (
              <Link
                key={item}
                to={hrefs[idx]}
                className={className}
              >
                <span className="relative z-10 block">
                  {item}
                </span>
                <span className={`absolute bottom-[-6px] left-0 h-[2px] transition-all duration-300 ${isActive ? 'w-full bg-primary' : `w-0 group-hover/nav:w-full ${scrolled || !isDarkHero ? 'bg-primary' : 'bg-white'}`}`} />
              </Link>
            );
          })}
        </div>

        {/* Right: Language + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4 border-r pr-8 border-gray-100/20">
            {(['ro', 'ru', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => changeLanguage(l)}
                className={`text-[10px] font-display font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary ${lang === l ? 'text-primary' : scrolled || !isDarkHero ? 'text-secondary/60' : 'text-white/60'}`}
              >
                {l}
              </button>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenCalculator}
            className={`px-8 py-3 rounded-none text-[10px] font-display font-bold uppercase tracking-[0.2em] transition-all border whitespace-nowrap ${scrolled || !isDarkHero ? 'bg-primary border-primary text-white hover:bg-primary-dark shadow-sm' : 'bg-white border-white text-primary hover:bg-transparent hover:text-white'}`}
          >
            {t.clientAccount}
          </motion.button>
        </div>

        <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className={scrolled || !isDarkHero ? 'text-secondary' : 'text-white'} /> : <Menu size={24} className={scrolled || !isDarkHero ? 'text-secondary' : 'text-white'} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl p-8 flex flex-col gap-6 md:hidden"
          >
            <div className="flex gap-4 mb-4 border-b border-gray-100 pb-4">
              {(['ro', 'ru', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { changeLanguage(l); setIsOpen(false); }}
                  className={`text-xs font-bold uppercase tracking-widest ${lang === l ? 'text-primary' : 'text-secondary'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            {t.nav.map((item, idx) => {
              const getAboutLink = (l: Language) => {
                if (l === 'ro') return '/despre-noi';
                if (l === 'ru') return '/o-nas';
                return '/about-us';
              };
              const hrefs = ['/', '/business', '/reinsurance', getAboutLink(lang), '/contact'];
              const isActive = location.pathname === hrefs[idx];
              return (
                <Link
                  key={item}
                  to={hrefs[idx]}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold border-b border-gray-100 pb-2 transition-colors ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}
                >
                  {item}
                </Link>
              );
            })}
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { onOpenCalculator(); setIsOpen(false); }}
              className="mt-4 px-8 py-4 bg-primary text-white font-bold uppercase text-xs tracking-widest hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/40"
            >
              {t.clientAccount}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const CalculatorModal = ({ lang, onClose }: { lang: Language, onClose: () => void }) => {
  const products = productTranslations[lang].filter(p => ['rca', 'carte-verde', 'medicala'].includes(p.id));
  const t = translations[lang];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-secondary/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-xl p-12 relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-400 hover:text-primary transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-secondary tracking-tighter mb-4">{t.clientAccount}</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>

        <div className="grid gap-6">
          {products.map((p) => (
            <motion.a 
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-8 border border-gray-100 hover:border-primary hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mt-2 transition-colors duration-300">{p.subtitle}</p>
              </div>
              <ArrowRight size={24} className="text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = ({ lang, onOpenCalculator }: { lang: Language, onOpenCalculator: () => void }) => {
  const t = translations[lang].hero;
  const navigate = useNavigate();
  return (
    <section className="relative h-screen min-h-[700px] flex items-start pt-64 overflow-hidden">
      {/* Background Video Simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/corporate_business_property.jpg.webp" 
          className="w-full h-full object-cover brightness-110"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-[#0a192f]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div 
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-4 mb-12 cursor-default group"
          >
            <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500" />
            <span className="text-white/60 text-[10px] font-display font-bold uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
              {t.segment}
            </span>
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-heading font-bold text-white leading-[0.85] tracking-tighter mb-10">
            {t.title} <br />
            <span className="text-primary italic font-serif normal-case">{t.titleItalic}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-display font-light leading-relaxed mb-12 max-w-xl">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenCalculator}
              className="px-12 py-5 bg-primary text-white font-display font-bold uppercase text-[10px] tracking-[0.3em] transition-all shadow-xl shadow-primary/20 hover:bg-primary-dark flex items-center justify-center gap-4 group"
            >
              {t.cta1} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-12 py-5 bg-white/5 border border-white/20 text-white font-display font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-4"
            >
              {t.cta2}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-6 z-10 hidden lg:flex items-center gap-8">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{t.scroll}</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustStrip = ({ lang }: { lang: Language }) => {
  const t = translations[lang].trustStripBenefits;
  const icons = [<Shield size={24} />, <Users size={24} />, <Clock size={24} />, <Globe size={24} />];

  return (
    <section className="bg-white border-b border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {t.map((text, i) => (
            <div key={i} className="flex items-center gap-6 group cursor-default">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className="w-16 h-16 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"
              >
                {icons[i]}
              </motion.div>
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntroSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].intro;
  return (
    <section id="personal-intro" className="py-40 bg-white relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-primary">
                {lang === 'ro' ? 'Viziune' : lang === 'ru' ? 'Видение' : 'Vision'}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-bold text-secondary tracking-tighter leading-[0.85] mb-8 cursor-default group"
            >
              {t.title} <br />
              <span className="text-primary italic font-serif normal-case group-hover:text-secondary transition-colors duration-500">{t.titleItalic}</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-7 pt-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-700 font-display font-light leading-relaxed mb-12"
            >
              {t.p1}
            </motion.p>
            <div className="h-px w-24 bg-primary/20 mb-12" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-500 font-display font-light leading-relaxed max-w-2xl"
            >
              {t.p2}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: any, lang: Language }> = ({ product, lang }) => {
  const labels = translations[lang].productLabels;
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-white border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] z-10 cursor-pointer"
      onClick={() => {
        if (product.link && product.link !== '#') {
          if (product.link.startsWith('http')) {
            window.open(product.link, '_blank');
          } else {
            navigate(product.link);
          }
        } else {
          navigate(`/product/personal/${product.id}`);
        }
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <div className="block w-full h-full">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-6 left-6 pointer-events-none">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-secondary text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
            {product.id}
          </span>
        </div>
      </div>
      
      <div className="p-12 flex flex-col flex-grow">
        <div className="mb-8 block group/title">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 block group-hover/title:underline underline-offset-4">
            {product.subtitle}
          </span>
          <h3 className="text-4xl font-bold text-secondary tracking-tighter group-hover/title:text-primary transition-colors duration-300">
            {product.title}
          </h3>
        </div>
        
        <p className="text-gray-600 font-light leading-relaxed mb-10 line-clamp-3">
          {product.description}
        </p>

        <div className="space-y-8 mb-12">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">{labels.destined}</h4>
              <p className="text-xs text-secondary font-medium leading-tight">{product.forWho}</p>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">{labels.coverage}</h4>
              <p className="text-xs text-secondary font-medium leading-tight">{product.covers}</p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100">
            <ul className="space-y-4">
              {product.advantages.map((adv: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-gray-500 group/adv cursor-default">
                  <div className="w-1.5 h-1.5 bg-primary mt-1.5 flex-shrink-0 group-hover/adv:scale-150 group-hover/adv:rotate-45 transition-transform duration-300" />
                  <span className="group-hover/adv:text-secondary transition-colors duration-300">{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <a 
            href={product.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary group/btn hover:text-primary transition-colors"
          >
            {product.cta} 
            <div className="w-10 h-[1px] bg-primary group-hover/btn:w-16 transition-all duration-500" />
            <ArrowRight size={12} className="opacity-30" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const MethodologySection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].methodology;
  if (!t) return null;

  return (
    <section className="py-40 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-end mb-32">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-primary">
                {lang === 'ro' ? 'Proces' : lang === 'ru' ? 'Процесс' : 'Process'}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter leading-[0.85] cursor-default"
            >
              {t.title} <br />
              <span className="text-primary italic font-serif normal-case">{t.titleItalic}</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/40 font-display font-light leading-relaxed"
            >
              {t.subtitle}
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {t.steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary p-16 group hover:bg-white/5 transition-colors duration-500"
            >
              <div className="text-6xl font-heading font-bold text-white/5 mb-12 group-hover:text-primary/20 transition-colors duration-500">
                {step.number}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-white/40 font-display font-light leading-relaxed text-lg">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].comparison;
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-secondary tracking-tighter mb-6">{t.title}</h2>
          <p className="text-gray-500 font-light">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((card, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white p-10 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <h3 className="text-xl font-bold text-secondary mb-4">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{card.desc}</p>
              <ul className="space-y-3">
                <li className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {productTranslations[lang].filter(p => {
                    if (i === 0) return ['rca', 'carte-verde', 'casco'].includes(p.id);
                    if (i === 1) return ['medicala', 'accidente'].includes(p.id);
                    if (i === 2) return ['locuinta'].includes(p.id);
                    return false;
                  }).map(p => p.title).join(' / ')}
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].whyUs;
  return (
    <section id="why-us" className="py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Architectural Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/reinsurance 3-1.jpeg" 
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="Architecture"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">{t.label}</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-20">
              {t.title} <br />
              <span className="text-primary italic font-serif">{t.titleItalic}</span>
            </h2>
            
            <div className="space-y-16">
              {t.items.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-10 group"
                >
                  {/* Numbers: Red 50% transparent */}
                  <div className="text-6xl font-bold text-primary/50 font-serif italic transition-all duration-500 group-hover:text-primary group-hover:translate-x-2">0{i + 1}</div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative lg:col-span-6">
            <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 border border-white/10 p-4 bg-white/5 backdrop-blur-md group shadow-2xl"
            >
              <div className="overflow-hidden aspect-[4/5] lg:aspect-square">
                <img 
                  src="/team4.png" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                  alt="Team"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 shadow-2xl hidden md:block z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-5xl font-bold tracking-tighter leading-none mb-2">19+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{t.years}</p>
              </div>
              
              {/* Decorative border elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/50" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CorporateGatewaySection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].corporateGateway;
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/building 2.png" 
          className="w-full h-auto object-cover opacity-40"
          alt="Corporate Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">{t.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">{t.title}</h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed mb-12">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/business"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase text-xs tracking-widest hover:bg-[#C4191F] transition-all duration-300"
            >
              {t.btnBusiness} <ArrowRight size={16} />
            </Link>
            <Link 
              to="/reinsurance"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-secondary transition-all duration-300"
            >
              {t.btnReinsurance} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ lang }: { lang: Language }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const t = translations[lang].faq;
  const faqs = faqTranslations[lang];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-secondary tracking-tighter mb-4">{t.title}</h2>
          <p className="text-gray-500 font-light">{t.subtitle}</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-b border-gray-100 transition-all duration-500 ${activeIdx === i ? 'bg-gray-50/50 px-4 -mx-4 shadow-inner' : 'hover:bg-gray-50/30'}`}>
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full py-7 flex justify-between items-center text-left group"
              >
                <span className={`text-lg font-bold tracking-tight transition-all duration-500 ${activeIdx === i ? 'text-primary translate-x-4' : 'text-secondary group-hover:text-primary group-hover:translate-x-2'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${activeIdx === i ? 'bg-primary border-primary text-white rotate-180 shadow-lg shadow-primary/30' : 'border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary'}`}>
                  <ChevronDown size={16} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {activeIdx === i && (
                  <motion.div 
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: 'auto', 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className={`pb-8 text-gray-500 leading-relaxed font-light max-w-3xl transition-all duration-700 ${activeIdx === i ? 'translate-x-2' : ''}`}>
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
  );
};

const FinalCTA = ({ lang, onOpenCalculator }: { lang: Language, onOpenCalculator: () => void }) => {
  const t = translations[lang].finalCta;
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter mb-10">
          {t.title} <br />
          <span className="text-gray-300">{t.subtitle}</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('personal')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/40"
          >
            {t.cta1}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const whatsappUrl = "https://wa.me/37379030209";
              window.open(whatsappUrl, '_blank');
            }}
            className="px-12 py-6 border border-primary/20 text-primary font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-sm hover:shadow-xl"
          >
            {t.cta2}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const FooterLink = ({ children, href = "#" }: { children: React.ReactNode, href?: string }) => {
  const isInternal = href.startsWith('/');
  const className = "group text-xs text-gray-400 font-medium transition-all duration-500 hover:text-secondary relative inline-block py-1 hover:scale-110";
  
  if (isInternal) {
    return (
      <Link to={href} className={className}>
        <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-1">
          {children}
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-1">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
    </a>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  const location = useLocation();

  return (
    <footer className="bg-white pt-32 pb-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start text-left">
            <a href="/" className="flex items-center gap-2 mb-10">
              {location.pathname.startsWith('/reinsurance') ? (
                <INGReLogo isDark={false} className="h-14 lg:h-20" />
              ) : (
                <img src={LOGO_URL} alt={translations[lang].logoAlt} className="h-12 lg:h-16" loading="lazy" />
              )}
            </a>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs mb-10">
              {t.desc}
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <motion.a 
                href="https://t.me/INGBroker" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ 
                  y: -12,
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#229ED9] hover:bg-white hover:border-[#229ED9] transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(34,158,217,0.4)]"
              >
                <Send size={20} className="transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
              <motion.a 
                href="https://wa.me/37369526003" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ 
                  y: -12,
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:bg-white hover:border-[#25D366] transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)]"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/67107674/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ 
                  y: -12,
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:bg-white hover:border-[#0A66C2] transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(10,102,194,0.4)]"
              >
                <Linkedin size={20} className="transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/ingbroker.md/" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ 
                  y: -12,
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#E4405F] hover:bg-white hover:border-[#E4405F] transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(228,64,95,0.4)]"
              >
                <Instagram size={20} className="transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
            </div>
          </div>
          
          <div className="flex flex-col items-start text-left">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-10 relative inline-block group/header">
              {t.sections.products}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover/header:w-full" />
            </h5>
            <ul className="space-y-4">
              {productTranslations[lang].map(p => (
                <li key={p.id}>
                  <FooterLink href={p.link}>{p.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-start text-left">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-10 relative inline-block group/header">
              {t.sections.company}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover/header:w-full" />
            </h5>
            <ul className="space-y-4">
              {translations[lang].nav.map((item, idx) => {
                const getAboutLink = (l: Language) => {
                  if (l === 'ro') return '/despre-noi';
                  if (l === 'ru') return '/o-nas';
                  return '/about-us';
                };
                const hrefs = ['/', '/business', '/reinsurance', getAboutLink(lang), '/contact'];
                return (
                  <li key={item}>
                    <FooterLink href={hrefs[idx]}>{item}</FooterLink>
                  </li>
                );
              })}
              <li>
                <FooterLink href="/news">
                  {lang === 'ro' ? 'Noutăți & Insights' : lang === 'ru' ? 'Новости & Аналитика' : 'News & Insights'}
                </FooterLink>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-start text-left">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-10 relative inline-block group/header">
              {t.sections.legal}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover/header:w-full" />
            </h5>
            <ul className="space-y-4">
              {t.legal.map(item => {
                const isTerms = item === 'Termeni și Condiții' || item === 'Условия использования' || item === 'Условия и положения' || item === 'Terms and Conditions';
                const isPrivacy = item === 'Politica de Confidențialitate' || item === 'Политика конфиденциальности' || item === 'Privacy Policy';
                const isOffers = item === 'Oferte' || item === 'Предложения' || item === 'Offers';
                
                let href = '#';
                if (isTerms) href = '/termeni-si-conditii';
                if (isPrivacy) href = '/politica-de-confidentialitate';
                if (isOffers) href = '/oferte';

                return (
                  <li key={item}>
                    <FooterLink href={href}>{item}</FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{t.rights}</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{t.designBy}</span>
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-primary relative group inline-block transition-all duration-500 hover:scale-110">
              <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-1">
                Creative Director AI
              </span>
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('ro');
  const [scrolled, setScrolled] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];
  const insightsT = translations[lang].insights;
  const seo = translations[lang].seo.home;

  // Schema LocalBusiness completă (din utils/schema.ts)
  const lbSchema = localBusinessSchema();

  // Schema HowTo pentru homepage - "Cum obții o ofertă de asigurare B2B în 15 minute"
  const homepageHowToSchema = howToSchema({
    name: "Cum obții o ofertă de asigurare B2B în 15 minute",
    description: "Procesul simplu prin care compania ta primește o ofertă comparativă de asigurare de la toți cei 6 asigurători autorizați CNPF din Moldova.",
    totalTime: "PT15M",
    steps: [
      {
        name: "Completezi formularul online",
        text: "Completezi prenumele și telefonul în formularul de pe site. Durează 2 minute. Câmpuri minime, fără informații inutile."
      },
      {
        name: "Consultantul nostru te contactează",
        text: "Un specialist ING Broker te sună în maxim 15 minute pentru a înțelege necesitățile companiei tale. Nu lăsăm robotul să vorbească în locul nostru."
      },
      {
        name: "Primești oferta comparativă",
        text: "Comparăm ofertele de la toți cei 6 asigurători autorizați CNPF parteneri - Acord Grup, Asterra Grup, Moldasig VIG, Moldcargo, Donaris VIG și Grawe Carat - și îți trimitem varianta optimă cu explicații clare."
      }
    ]
  });

  // Schema FAQ pentru homepage
  const homepageFaqSchema = faqSchema([
    {
      question: "Ce este un broker de asigurări în Moldova?",
      answer: "Un broker de asigurări este un intermediar licențiat de CNPF care reprezintă interesele clientului, nu ale asigurătorului. ING Broker compară ofertele de la toți asigurătorii parteneri și îți recomandă cea mai bună soluție pentru compania ta."
    },
    {
      question: "Cât costă serviciile unui broker de asigurări?",
      answer: "Serviciile brokerului sunt gratuite pentru client. ING Broker este remunerat de asigurătorul ales, printr-un comision inclus în prima de asigurare - fără costuri suplimentare pentru tine."
    },
    {
      question: "Ce asigurări corporative oferă ING Broker în Moldova?",
      answer: "ING Broker oferă asigurări CAR/EAR pentru construcții, asigurare de răspundere profesională (PI), asigurare cyber, flote auto corporative și asigurare cargo CMR pentru transport internațional."
    },
    {
      question: "Cât timp durează să obțin o ofertă de asigurare?",
      answer: "Oferta comparativă se emite în maxim 15 minute de la trimiterea datelor. Pentru proiecte complexe (CAR/EAR mari, cyber corporate), analiza poate dura 24-48 ore."
    },
    {
      question: "Ce asigurători sunt parteneri ai ING Broker?",
      answer: "ING Broker colaborează cu toți asigurătorii autorizați de CNPF: Acord Grup SA, Asterra Grup SA, Moldasig VIG SA, Moldcargo SA, Donaris VIG SA și Grawe Carat SA."
    }
  ]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <Router>
        <SEO
          title={seo.title}
          description={seo.description}
          lang={lang}
          schema={lbSchema}
        />
        <SchemaMarkup schemas={[homepageHowToSchema, homepageFaqSchema]} />
        <ScrollToTop />
        <Navbar lang={lang} setLang={setLang} scrolled={scrolled} onOpenCalculator={() => setIsCalculatorOpen(true)} />
        
        <AnimatePresence>
          {isCalculatorOpen && (
            <CalculatorModal lang={lang} onClose={() => setIsCalculatorOpen(false)} />
          )}
        </AnimatePresence>


        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero lang={lang} onOpenCalculator={() => setIsCalculatorOpen(true)} />
              <TrustStrip lang={lang} />
              <IntroSection lang={lang} />
              <MethodologySection lang={lang} />
              
              {/* Product Grid */}
              <section id="personal" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                      <span className="text-xs font-bold tracking-[0.1em] text-primary mb-4 block">Insurance ING Broker SRL</span>
                      <h2 className="text-5xl font-bold text-secondary tracking-tighter">Soluții Premium</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100 border border-gray-100">
                    {productTranslations[lang].map((translatedProduct) => {
                      const baseProduct = products.find(p => p.id === translatedProduct.id);
                      const product = { ...baseProduct, ...translatedProduct };
                      return (
                        <ProductCard key={product.id} product={product} lang={lang} />
                      );
                    })}
                  </div>
                </div>
              </section>

              <ComparisonSection lang={lang} />
              <WhyUsSection lang={lang} />
              
              {/* Insights Section (Placeholder for Wix CMS) */}
              <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex justify-between items-end mb-16">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">{insightsT.label}</span>
                      <h2 className="text-4xl font-bold text-secondary tracking-tighter">{insightsT.title}</h2>
                    </div>
                    <Link to="/news" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all">
                      {insightsT.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-12">
                    {insightsT.articles.map((article, i) => (
                      <a key={i} href={article.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                        <div className="aspect-[16/10] overflow-hidden mb-6">
                          <img 
                            src={article.image} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            alt={article.title}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">{insightsT.category}</span>
                        <h4 className="text-xl font-bold text-secondary mb-4 group-hover:underline decoration-1 underline-offset-4 hover:text-primary transition-colors">{article.title}</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{article.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <FAQSection lang={lang} />
              <FinalCTA lang={lang} onOpenCalculator={() => setIsCalculatorOpen(true)} />
            </main>
          } />
          <Route path="/product/:category/:productId" element={<GenericProductPage lang={lang} />} />
          <Route path="/business" element={<BusinessPage lang={lang} />} />
          <Route path="/business/:productId" element={<BusinessProductPage lang={lang} />} />
          <Route path="/reinsurance" element={<ReinsurancePage lang={lang} />} />
          <Route path="/construction-shield" element={<ConstructionShieldPage lang={lang} />} />
          <Route path="/oferte" element={<OffersPage lang={lang} />} />
          <Route path="/news" element={<NewsInsightsPage lang={lang} />} />
          <Route path="/news/:slug" element={<ArticlePage lang={lang} />} />
          <Route path="/admin/ai-tools" element={<AdminAITools />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route path="/ai-studio" element={<AIStudio />} />
          <Route path="/despre-noi" element={<AboutPage lang="ro" />} />
          <Route path="/o-nas" element={<AboutPage lang="ru" />} />
          <Route path="/about-us" element={<AboutPage lang="en" />} />
          <Route path="/termeni-si-conditii" element={<TermsPage />} />
          <Route path="/politica-de-confidentialitate" element={<PrivacyPage />} />
          <Route path="/renewable-energy" element={<RenewableEnergyPage lang={lang} />} />
          <Route path="/property-assets" element={<PropertyAssetsPage lang={lang} />} />
          <Route path="/oferte/flote-auto" element={<FleetAutoPage lang={lang} />} />
          <Route path="/oferte/transportatori-auto" element={<FleetAutoPage lang={lang} />} />
          <Route path="/servicii/asigurari-constructii-car-ear" element={<CarEarPage lang={lang} />} />
          <Route path="/servicii/asigurari-corporative-moldova" element={<CorporatePage lang={lang} />} />
          <Route path="/servicii/asigurare-raspundere-profesionala" element={<ProfessionalIndemnityPage lang={lang} />} />
          <Route path="/servicii/asigurare-cyber-moldova" element={<CyberInsurancePage lang={lang} />} />
          <Route path="/employee-benefits" element={<EmployeeBenefits />} />
        </Routes>

        {/* WhatsApp flotant */}
        <WhatsAppButton />

        {/* Back to Top */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-secondary transition-all duration-500 group"
        >
          <ChevronDown className="rotate-180 group-hover:-translate-y-1 transition-transform" size={24} />
        </motion.button>

        <Footer lang={lang} />
      </Router>
    </div>
  );
}
