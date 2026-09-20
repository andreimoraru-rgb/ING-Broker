import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Users,
  Briefcase,
  Scale,
  Landmark,
  TrendingUp,
  Gavel,
  Building2,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { Language } from '../translations';

interface DirectorsOfficersPageProps {
  lang: Language;
}

const roContent = {
  badge: 'Asigurare D&O',
  heroTitle: 'Asigurare D&O în Moldova',
  heroSubtitle: 'Răspunderea Directorilor și Administratorilor',
  heroDesc:
    'Protejează patrimoniul personal al directorilor, administratorilor și membrilor board-ului pentru deciziile luate în conducerea companiei. Consultanță și structurare a programului prin broker autorizat CNPF, cu acces la reasigurători internaționali.',
  ctaPrimary: 'Evaluare gratuită a riscului',
  ctaSecondary: '+373 69 526 003',

  stats: [
    { val: 'D&O', label: 'Directors & Officers Liability' },
    { val: 'SA / SRL', label: 'Companii cu board, investitori sau finanțare' },
    { val: 'CNPF', label: 'Intermediar autorizat, acces reasigurare' }
  ],

  whatTitle: 'Ce este asigurarea D&O?',
  whatLead:
    'D&O (Directors & Officers Liability) este asigurarea care protejează averea personală a persoanelor care conduc o companie.',
  whatParas: [
    'Un director sau un administrator ia zilnic decizii care angajează compania: aprobă bugete, semnează contracte, decide investiții, raportează către acționari și autorități. În dreptul societăților comerciale, aceste persoane răspund personal atunci când o decizie de conducere produce un prejudiciu - iar răspunderea nu se oprește la patrimoniul firmei, ci ajunge la casa, conturile și economiile administratorului.',
    'Asigurarea D&O acoperă tocmai această expunere personală. Ea intervine pentru cheltuielile de apărare juridică și pentru sumele datorate ca urmare a unei pretenții formulate împotriva unui director sau administrator pentru o faptă săvârșită în calitatea sa de conducător - o eroare de management, o omisiune, o declarație inexactă sau o presupusă încălcare a atribuțiilor.',
    'Spre deosebire de asigurarea de răspundere profesională, care privește serviciile prestate clienților, D&O privește actul de conducere în sine. De aceea este considerată o componentă de bază a guvernanței corporative moderne și o cerință frecventă atunci când o companie atrage investitori, contractează finanțare sau își constituie un consiliu de administrație.'
  ],

  protectsTitle: 'Ce protejează asigurarea D&O',
  protectsIntro:
    'Programul D&O acoperă, în mod informativ, trei planuri de expunere - de la persoana fizică a administratorului până la compania care rambursează aceste costuri.',
  protectsItems: [
    {
      icon: 'shield',
      title: 'Patrimoniul personal al conducătorilor',
      desc:
        'Acoperă costurile suportate de directori și administratori atunci când sunt acționați personal și compania nu îi poate despăgubi - de exemplu în caz de insolvență a firmei. Aici se protejează efectiv averea personală a persoanei.'
    },
    {
      icon: 'building',
      title: 'Rambursarea companiei',
      desc:
        'Când compania își despăgubește propriii conducători pentru pretențiile formulate împotriva lor, programul poate prelua aceste costuri, protejând lichiditatea și bilanțul companiei.'
    },
    {
      icon: 'file',
      title: 'Cheltuielile de apărare juridică',
      desc:
        'Onorariile avocaților, costurile de investigație și cele procedurale apar imediat ce este formulată o pretenție, chiar dacă aceasta se dovedește ulterior neîntemeiată. Apărarea este adesea cea mai frecventă componentă activată.'
    },
    {
      icon: 'gavel',
      title: 'Investigații și proceduri administrative',
      desc:
        'Anchete și solicitări din partea autorităților de reglementare, fiscale sau de concurență adresate personal unui administrator sunt tratate ca situații acoperite informativ de un program D&O bine structurat.'
    }
  ],

  whoTitle: 'Cine are nevoie de asigurare D&O',
  whoIntro:
    'D&O nu este rezervată doar marilor corporații. Devine relevantă în momentul în care apare o structură de conducere care răspunde în fața unor terți - acționari, finanțatori, autorități.',
  whoItems: [
    {
      icon: 'landmark',
      title: 'SA și SRL cu investitori',
      desc:
        'Din momentul în care intră un investitor extern sau un fond, board-ul răspunde față de acesta. Investitorii solicită frecvent un program D&O ca precondiție a intrării în capital.'
    },
    {
      icon: 'users',
      title: 'Companii cu consiliu de administrație',
      desc:
        'Existența unui board, a unor directori numiți și a unor membri independenți multiplică numărul persoanelor expuse personal. Fiecare membru al consiliului răspunde pentru deciziile colective.'
    },
    {
      icon: 'trending',
      title: 'Companii în finanțare sau expansiune',
      desc:
        'Contractarea de credite, emisiuni de obligațiuni, achiziții, fuziuni sau intrarea pe piețe noi cresc expunerea deciziilor de conducere și, implicit, riscul de pretenții.'
    },
    {
      icon: 'briefcase',
      title: 'IFN, instituții financiare, fintech',
      desc:
        'Organizațiile de creditare nebancară și instituțiile financiare operează sub supraveghere de reglementare intensă, unde conducătorii sunt vizați personal de anchete și sancțiuni.'
    },
    {
      icon: 'building',
      title: 'Startup-uri și companii tech',
      desc:
        'Fondatorii care devin administratori și atrag capital de risc au un patrimoniu personal expus timpuriu, adesea înainte ca firma să aibă rezerve suficiente pentru a-i proteja.'
    },
    {
      icon: 'shield',
      title: 'ONG-uri, asociații, entități cu board',
      desc:
        'Membrii consiliilor de conducere ale organizațiilor non-profit răspund la fel de personal pentru deciziile administrative ca administratorii unei companii comerciale.'
    }
  ],

  claimsTitle: 'Tipuri de pretenții împotriva conducerii',
  claimsIntro:
    'Pretențiile împotriva directorilor și administratorilor pot veni din direcții foarte diferite. Un program D&O este construit pentru a răspunde acestei diversități de reclamanți.',
  claimsCategories: [
    {
      title: 'Din partea acționarilor',
      items: [
        'Reproșul unei decizii de investiție sau strategice considerate păgubitoare',
        'Contestarea distribuirii profitului sau a operațiunilor cu capitalul',
        'Pretenții legate de informarea incompletă sau inexactă a acționarilor'
      ]
    },
    {
      title: 'Din partea angajaților (EPL)',
      items: [
        'Reclamații de concediere considerată nelegală',
        'Acuzații de discriminare sau hărțuire la locul de muncă',
        'Litigii privind tratamentul aplicat de conducere personalului'
      ]
    },
    {
      title: 'Din partea autorităților',
      items: [
        'Investigații ale autorităților de reglementare sau de concurență',
        'Anchete fiscale adresate personal administratorului',
        'Proceduri sancționatorii pentru presupuse încălcări ale atribuțiilor'
      ]
    },
    {
      title: 'Din partea creditorilor',
      items: [
        'Pretenții în caz de insolvență privind gestionarea companiei',
        'Acuzații de continuare a activității în stare de dificultate financiară',
        'Reproșuri legate de tratamentul aplicat creditorilor și furnizorilor'
      ]
    }
  ],

  capitalTitle: 'De ce contează pentru capital și guvernanță',
  capitalParas: [
    'Pentru o companie care vrea să crească, D&O nu este doar o poliță de protecție - este un semnal de maturitate. Investitorii instituționali, fondurile de investiții și băncile evaluează calitatea guvernanței înainte de a angaja capital. Un program D&O bine structurat arată că firma își tratează serios responsabilitatea conducerii și că nu expune persoanele-cheie la un risc personal care le-ar putea determina să părăsească board-ul.',
    'În practica atragerii de capital, prezența unei asigurări D&O este frecvent o condiție de tip term sheet: fără ea, negocierea se blochează sau se prelungește. Pentru companiile care intenționează o rundă de finanțare, o achiziție sau o listare, structurarea din timp a programului D&O elimină un punct de fricțiune în procesul de due diligence.',
    'La fel de important, D&O permite companiei să atragă și să rețină administratori și membri independenți valoroși. Puțini profesioniști competenți acceptă o poziție de conducere sau un mandat în consiliu dacă acest lucru le pune în joc averea personală. Asigurarea transformă poziția de administrator dintr-un risc personal într-o responsabilitate asumată în condiții rezonabile.'
  ],

  brokerTitle: 'Rolul brokerului ING Broker',
  brokerIntro:
    'D&O este un produs de nișă, unde formularea poliței și structura programului fac diferența. Rolul nostru de broker autorizat CNPF este să reprezentăm interesul companiei și al conducătorilor, nu al unui singur asigurător.',
  brokerItems: [
    {
      title: 'Evaluarea expunerii',
      desc:
        'Analizăm structura de conducere, acționariatul, planurile de finanțare și profilul de risc pentru a înțelege unde este expusă real compania.'
    },
    {
      title: 'Structurarea programului',
      desc:
        'Configurăm acoperirile, definițiile persoanelor asigurate și mecanismele de rambursare astfel încât programul să răspundă situației concrete a companiei.'
    },
    {
      title: 'Acces la piața de reasigurare',
      desc:
        'Prin afilierile internaționale accesăm capacitate de reasigurare pentru programe care depășesc apetitul pieței locale, potrivite companiilor mari și grupurilor.'
    },
    {
      title: 'Asistență la formularea pretenției',
      desc:
        'Când apare o pretenție, sprijinim notificarea corectă și la timp către asigurător - moment critic care determină buna desfășurare a dosarului.'
    }
  ],

  cnpfNote:
    'Informațiile de pe această pagină au caracter general și informativ. Acoperirile, excluderile și mecanismul de funcționare al asigurării D&O sunt stabilite exclusiv prin polița și condițiile contractuale, care primează asupra oricărui material de prezentare. Insurance ING Broker SRL este intermediar de asigurare autorizat CNPF.',

  faqTitle: 'Întrebări frecvente despre asigurarea D&O',
  faqs: [
    {
      q: 'Ce este, pe scurt, asigurarea D&O?',
      a: 'Este asigurarea care protejează patrimoniul personal al directorilor, administratorilor și membrilor consiliului pentru deciziile luate în calitatea lor de conducători. Acoperă costurile de apărare juridică și sumele datorate ca urmare a unei pretenții formulate împotriva lor pentru o presupusă eroare de management, o omisiune sau o încălcare a atribuțiilor.'
    },
    {
      q: 'Prin ce diferă D&O de asigurarea de răspundere profesională (PI)?',
      a: 'Răspunderea profesională privește serviciile prestate clienților - o eroare tehnică în munca livrată. D&O privește actul de conducere a companiei: decizii de strategie, investiții, raportare, relația cu acționarii și autoritățile. O companie poate avea nevoie de ambele, întrucât acoperă expuneri distincte.'
    },
    {
      q: 'Compania noastră este un SRL mic. Avem cu adevărat nevoie de D&O?',
      a: 'Relevanța apare din momentul în care există o structură de conducere care răspunde în fața unor terți - un investitor intrat în capital, o bancă finanțatoare, un consiliu de administrație. Dacă administratorul ia decizii care angajează personal răspunderea sa, dimensiunea firmei contează mai puțin decât expunerea deciziilor.'
    },
    {
      q: 'Pe cine acoperă concret polița - firma sau persoanele?',
      a: 'În mod informativ, un program D&O acoperă trei planuri: persoanele fizice ale conducătorilor atunci când compania nu îi poate despăgubi, rambursarea companiei care își despăgubește proprii directori și, în anumite structuri, compania însăși pentru anumite pretenții. Cine anume și în ce condiții este acoperit se stabilește prin condițiile contractuale.'
    },
    {
      q: 'De ce cer investitorii un program D&O?',
      a: 'Pentru că protejează persoanele-cheie din conducere și semnalează o guvernanță matură. În practica atragerii de capital, D&O apare frecvent ca o condiție în term sheet: fără ea, membrii board-ului sunt expuși personal, iar procesul de due diligence identifică acest lucru ca un risc.'
    },
    {
      q: 'Sunt acoperite investigațiile autorităților adresate personal unui administrator?',
      a: 'Anchetele și solicitările autorităților de reglementare, fiscale sau de concurență adresate personal unui conducător sunt, în general, situații pe care un program D&O bine structurat le tratează informativ ca fiind acoperite, inclusiv la nivelul cheltuielilor de apărare. Domeniul concret de acoperire rămâne stabilit prin poliță.'
    },
    {
      q: 'Cum ajută un broker față de contactarea directă a unui asigurător?',
      a: 'D&O este un produs de nișă în care formularea poliței și structura programului fac diferența. Ca broker autorizat CNPF, reprezentăm interesul companiei și al conducătorilor - evaluăm expunerea, structurăm acoperirile și, prin afilierile internaționale, accesăm capacitate de reasigurare pentru programe care depășesc piața locală.'
    }
  ],

  ctaTitle: 'Cât de expusă este conducerea companiei tale?',
  ctaDesc:
    'Completezi evaluarea gratuită a riscului și îți conturăm un program D&O potrivit structurii de conducere, planurilor de finanțare și profilului companiei.',
  ctaBtn: 'Evaluare gratuită a riscului',
  ctaBtn2: 'Discută cu un consultant',
  ctaPhone: 'Sună acum',

  crumbHome: 'Acasă',
  crumbServices: 'Servicii',
  backHome: 'Înapoi la Acasă',
  internalTitle: 'Servicii corporative conexe',
  internalItems: [
    { title: 'Asigurări corporative Moldova', desc: 'Programul complet de asigurări pentru companii - de la răspundere la property.', href: '/servicii/asigurari-corporative-moldova' },
    { title: 'Reasigurare și capacitate internațională', desc: 'Acces la reasigurători pentru riscuri și limite care depășesc piața locală.', href: '/reinsurance' },
    { title: 'Evaluare gratuită a riscului', desc: 'Chestionar rapid care conturează expunerea și programul potrivit companiei.', href: '/evaluare-risc' }
  ]
};

const content: Record<Language, typeof roContent> = {
  ro: roContent,
  ru: roContent,
  en: roContent
};

export const DirectorsOfficersPage: React.FC<DirectorsOfficersPageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const c = content[lang];

  const seo = {
    title: 'Asigurare D&O Moldova | Răspunderea Directorilor și Administratorilor - ING Broker CNPF',
    description:
      'Asigurare D&O în Moldova: protejează patrimoniul personal al directorilor și administratorilor pentru deciziile de conducere. Broker autorizat CNPF, acces reasigurare. Evaluare gratuită a riscului.',
    keywords:
      'asigurare do moldova, raspunderea directorilor si administratorilor, directors and officers moldova, asigurare d&o, asigurare administratori moldova, guvernanta corporativa asigurare, broker asigurari corporate moldova, CNPF'
  };

  const baseUrl = 'https://www.ingbroker.md';
  const pageUrl = `${baseUrl}/servicii/asigurare-do-directori-administratori`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Asigurare D&O - Răspunderea Directorilor și Administratorilor Moldova',
    description:
      'Asigurare de răspundere a directorilor și administratorilor (Directors & Officers Liability) pentru companii din Moldova, structurată prin broker autorizat CNPF, cu acces la reasigurare internațională.',
    serviceType: "Directors & Officers Liability Insurance",
    provider: {
      '@type': 'InsuranceAgency',
      name: 'Insurance ING Broker SRL',
      url: baseUrl,
      telephone: '+37369526003',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'str. Pan Halippa 9',
        addressLocality: 'Chișinău',
        addressCountry: 'MD'
      }
    },
    areaServed: { '@type': 'Country', name: 'Moldova' },
    url: pageUrl
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.crumbHome, item: baseUrl },
      { '@type': 'ListItem', position: 2, name: c.crumbServices, item: `${baseUrl}/business` },
      { '@type': 'ListItem', position: 3, name: 'Asigurare D&O', item: pageUrl }
    ]
  };

  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield size={28} className="text-primary" />,
    building: <Building2 size={28} className="text-primary" />,
    file: <FileText size={28} className="text-primary" />,
    gavel: <Gavel size={28} className="text-primary" />,
    landmark: <Landmark size={28} className="text-primary" />,
    users: <Users size={28} className="text-primary" />,
    trending: <TrendingUp size={28} className="text-primary" />,
    briefcase: <Briefcase size={28} className="text-primary" />
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <SEO title={seo.title} description={seo.description} lang={lang} keywords={seo.keywords} />
      <SchemaMarkup schemas={[serviceSchema, faqSchema, breadcrumbSchema]} />

      {/* Back button */}
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
          <span>{c.backHome}</span>
        </motion.button>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=90"
            alt="Board de directori"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb visible */}
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-[11px] text-white/50 uppercase tracking-[0.2em] mb-6">
              <button onClick={() => navigate('/')} className="hover:text-white transition-colors">{c.crumbHome}</button>
              <span>/</span>
              <button onClick={() => navigate('/business')} className="hover:text-white transition-colors">{c.crumbServices}</button>
              <span>/</span>
              <span className="text-primary">D&amp;O</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-8 backdrop-blur-md">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {c.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95] mb-4">
              {c.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary mb-6">{c.heroSubtitle}</p>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-10 max-w-2xl">{c.heroDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => navigate('/evaluare-risc')}
                className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
              >
                {c.ctaPrimary} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+37369526003"
                className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-3"
              >
                <Phone size={18} /> {c.ctaSecondary}
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {c.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is D&O */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{c.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">{c.whatTitle}</h2>
          <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{c.whatLead}</p>
          <div className="space-y-6">
            {c.whatParas.map((p, i) => (
              <p key={i} className="text-lg text-slate-600 font-light leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What it protects */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/3 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 flex items-center gap-4">
              <ShieldCheck className="text-primary" size={40} />
              {c.protectsTitle}
            </h2>
            <p className="text-lg text-white/50 font-light leading-relaxed">{c.protectsIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {c.protectsItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/8 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">{c.whoTitle}</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">{c.whoIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.whoItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-base">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of claims */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 flex items-center justify-center gap-4">
              <Scale className="text-primary" size={40} />
              {c.claimsTitle}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">{c.claimsIntro}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {c.claimsCategories.map((cat, ci) => (
              <div key={ci} className="bg-slate-50 rounded-2xl p-8">
                <h3 className="font-bold text-slate-900 text-lg mb-6 pb-4 border-b border-slate-200 flex items-center gap-3">
                  <AlertTriangle size={20} className="text-primary" />
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((it, ii) => (
                    <div key={ii} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-sm leading-relaxed">{it}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital & governance */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-primary" size={32} />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Capital &amp; Guvernanță</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-10 leading-tight">{c.capitalTitle}</h2>
          <div className="space-y-6">
            {c.capitalParas.map((p, i) => (
              <p key={i} className="text-lg text-white/60 font-light leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Broker role */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">{c.brokerTitle}</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">{c.brokerIntro}</p>
              <button
                onClick={() => navigate('/evaluare-risc')}
                className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group"
              >
                {c.ctaPrimary} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.brokerItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4 text-primary font-bold">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-10">{c.internalTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.internalItems.map((item, i) => (
              <button
                key={i}
                onClick={() => navigate(item.href)}
                className="text-left bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {item.title}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-16">{c.faqTitle}</h2>
          <div className="space-y-2">
            {c.faqs.map((faq, i) => (
              <div key={i} className={`border-b border-slate-200 transition-all duration-300 ${activeIdx === i ? 'bg-slate-100/50 px-4 -mx-4' : ''}`}>
                <button
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className={`text-base font-bold tracking-tight transition-all duration-300 ${activeIdx === i ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${activeIdx === i ? 'bg-primary border-primary text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="pb-6 text-slate-600 leading-relaxed text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CNPF note */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 flex gap-4">
            <Shield size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <p className="text-slate-500 text-xs leading-relaxed italic">{c.cnpfNote}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 italic">{c.ctaTitle}</h2>
          <p className="text-xl text-white/80 font-light mb-12">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/evaluare-risc')}
              className="px-12 py-5 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all shadow-2xl"
            >
              {c.ctaBtn}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              {c.ctaBtn2} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer info */}
      <footer className="py-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-white/40 text-xs">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              9, str. Pan Halippa, Chișinău, R. Moldova
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              andrei.moraru@ingbroker.md
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              +373 69 526 003
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
