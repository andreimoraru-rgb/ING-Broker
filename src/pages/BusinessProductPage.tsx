import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface BusinessProductPageProps {
  lang: Language;
}

export const BusinessProductPage: React.FC<BusinessProductPageProps> = ({ lang }) => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Find the product in the business lines to get the hero image
  const productLine = translations[lang].business.lines.find(p => p.id === productId);
  
  // Get the detailed translations for this product
  // @ts-ignore - we know the keys exist in businessProductsTranslations
  const t = translations[lang][productId];
  
  // Get SEO data if it exists, otherwise fallback to generic business SEO
  // @ts-ignore
  const seo = translations[lang].seo[productId] || translations[lang].seo.business;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [productId]);

  if (!t || !productLine) {
    return <Navigate to="/#business" replace />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": seo.title || t.title,
    "description": seo.description || t.subtitle,
    "image": productLine.image,
    "provider": {
      "@type": "Organization",
      "name": "Insurance ING Broker SRL"
    }
  };

  const aggressiveKeywords = `${t.title}, asigurare ${t.title.toLowerCase()}, asigurare business moldova, ing broker, asigurare companii, ${t.industries.items.map((i: any) => i.title.toLowerCase()).join(', ')}`;

  const productIndustryImages: Record<string, string[]> = {
    liability: [
      "/LIABILITY.jpg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2560",
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2560",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2560"
    ],
    professional: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
    ],
    do: [
      "/d&o.jpg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    ],
    cyber: [
      "/cyber-insurance-3.jpg",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000"
    ],
    cargo: [
      "/LOGISTICA.png",
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000"
    ],
    fleet: [
      "/casco-012.jpg",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1580674684081-77673ce86c15?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
    ],
    credit: [
      "/credit insurance.jpg",
      "/credit insurance.jpg",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    ],
    construction: [
      "/Constructii-montaj.jpeg",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      "/infrastructura.jpeg",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: [
      "/accident.png",
      "/employer.jpg",
      "/employer.jpg",
      "/employer.jpg"
    ],
    agriculture: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
      "/horticultura.png",
      "/zootehnie.webp",
      "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=1000"
    ]
  };

  const industryImages = productId && productIndustryImages[productId] ? productIndustryImages[productId] : [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=1000"
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={seo.title || t.title} 
        description={seo.description || t.subtitle} 
        lang={lang} 
        schema={schema}
        keywords={aggressiveKeywords}
      />
      
      {/* Back Button */}
      <div className="fixed top-32 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/business')}
          className={`flex items-center gap-4 px-6 py-3 backdrop-blur-md border rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl group ${
            isScrolled 
              ? 'bg-white border-gray-200 text-secondary hover:bg-gray-50' 
              : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
          }`}
        >
          <div className={`p-1 group-hover:-translate-x-1 transition-transform ${
            isScrolled ? 'text-primary' : 'text-primary'
          }`}>
            <ArrowLeft size={16} strokeWidth={3} />
          </div>
          <span>
            {lang === 'ro' ? 'Înapoi la Business' : lang === 'ru' ? 'Назад к Бизнесу' : 'Back to Business'}
          </span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-start pt-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={industryImages[0] || productLine.image} 
            alt={t.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-secondary/${productId === 'liability' ? '20' : '50'} mix-blend-multiply`} />
          <div className={`absolute inset-0 bg-gradient-to-r from-secondary ${productId === 'liability' ? 'via-secondary/5' : 'via-secondary/20'} to-transparent opacity-70`} />
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
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Business Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
                            {t.title.split(' ')[0]} <br />
              <span className="text-primary italic font-serif normal-case">{t.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "#C4191F", boxShadow: "0 20px 40px -10px rgba(227,30,36,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-300"
              >
                {t.ctaCall}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {translations[lang].trustStripBenefits.map((text, i) => (
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

      {/* Intro Section */}
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
                {t.expertiseTitle.split(' ').slice(0, -2).join(' ')} <br />
                <span className="text-primary italic font-serif group-hover:text-secondary transition-colors duration-500">{t.expertiseTitle.split(' ').slice(-2).join(' ')}</span>
              </motion.h2>
            </div>
            <div className="lg:col-span-7 pt-4">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {t.title}
              </h2>
              <p className="text-2xl text-gray-700 font-light leading-relaxed mb-10">
                {t.intro}
              </p>
              <div className="h-px w-full bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-[1px] bg-primary" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              {t.industries.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.industries.items.map((item: any, i: number) => (
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
                    src={item.image || industryImages[i % industryImages.length]} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed text-xs">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks, Advantages, Disadvantages Analysis */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-left max-w-3xl mb-20">
            <h2 className="text-5xl font-bold text-secondary tracking-tighter mb-6">{lang === 'ro' ? 'Analiza Riscurilor și Beneficiilor' : lang === 'ru' ? 'Анализ рисков и преимуществ' : 'Risk and Benefit Analysis'}</h2>
            <p className="text-gray-500 font-light text-lg">{lang === 'ro' ? 'O evaluare strategică a factorilor critici pentru acest produs de asigurare.' : lang === 'ru' ? 'Стратегическая оценка критических факторов для этого страхового продукта.' : 'A strategic assessment of critical factors for this insurance product.'}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {(['risks', 'advantages', 'disadvantages'] as const).map((type, index) => {
              const images = [
                "/Riscurile Produsului.avif", // Risks
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000", // Advantages
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000"  // Disadvantages
              ];
              const data = t.analysis[type];
              return (
                <motion.div 
                  key={type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group bg-white border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={(data as any).image || images[index]} 
                      alt={data.title} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-secondary">
                        {data.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <ul className="space-y-4">
                      {data.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                          <div className="w-1.5 h-1.5 bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us / Importance */}
      <section id="why-us" className="py-32 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <ShieldCheck size={800} className="translate-x-1/4 -translate-y-1/4 text-primary" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">{lang === 'ro' ? 'Importanță Strategică' : lang === 'ru' ? 'Стратегическое значение' : 'Strategic Importance'}</span>
              </div>
              <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] mb-16">
                {t.essentialTitle.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-primary italic font-serif">{t.essentialTitle.split(' ').slice(-1)}</span>
              </h2>
              
              <div className="space-y-16">
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">{lang === 'ro' ? 'Expertiză Tehnică' : lang === 'ru' ? 'Техническая экспертиза' : 'Technical Expertise'}</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">{t.whyUs}</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">{lang === 'ro' ? 'Acoperire Globală' : lang === 'ru' ? 'Глобальный охват' : 'Global Coverage'}</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">{lang === 'ro' ? 'Acces la piețele internaționale de reasigurare pentru riscuri complexe.' : lang === 'ru' ? 'Доступ к международным рынкам перестрахования для сложных рисков.' : 'Access to international reinsurance markets for complex risks.'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`relative ${productId === 'liability' ? 'lg:scale-110 lg:translate-x-12' : ''}`}>
              <div className="absolute -inset-20 bg-primary/10 rounded-full blur-[120px] opacity-50" />
              <div className={`relative z-10 border border-white/10 ${productId === 'liability' ? 'p-0' : 'p-4'} bg-white/5 backdrop-blur-sm group`}>
                <div className="overflow-hidden">
                  <img 
                    src={productLine.image} 
                    className={`w-full h-auto ${productId === 'liability' ? 'aspect-[4/3] object-cover' : 'grayscale'} hover:grayscale-0 transition-all duration-1000 group-hover:scale-105`}
                    alt={t.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className={`absolute bottom-4 ${productId === 'liability' ? '-left-6' : '-left-12'} bg-primary p-6 shadow-2xl hidden xl:block z-20`}>
                  <p className="text-4xl font-bold tracking-tighter leading-none mb-2">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{lang === 'ro' ? 'Protecție' : lang === 'ru' ? 'Защита' : 'Protection'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter mb-10">
            {t.ctaTitle.split(' ').slice(0, -1).join(' ')} <br />
            <span className="text-gray-300">{t.ctaTitle.split(' ').slice(-1)}</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <motion.a 
              href="tel:+37379030209"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 group shadow-lg hover:shadow-primary/40"
            >
              {t.ctaCall} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="mailto:ingbroker@ingbroker.md"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border border-primary/20 text-primary font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-sm hover:shadow-xl"
            >
              {t.ctaEmail}
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};
