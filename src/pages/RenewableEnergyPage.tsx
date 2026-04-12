import React, { useState, useEffect } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Phone, Mail, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RenewableEnergyPageProps {
  lang: Language;
}

const industryImages = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
  "/hidrocentrala.jpg"
];

export const RenewableEnergyPage: React.FC<RenewableEnergyPageProps> = ({ lang }) => {
  const t = translations[lang].renewableEnergy;
  const seo = translations[lang].seo.renewableEnergy;
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": seo.title,
    "description": seo.description,
    "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200",
    "provider": {
      "@type": "Organization",
      "name": "Insurance ING Broker SRL"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={seo.title} 
        description={seo.description} 
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
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1920" 
            alt="Renewable Energy Infrastructure" 
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
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Business Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              {t.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-primary italic font-serif normal-case">{t.title.split(' ').slice(-1)}</span>
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
                {t.expertiseTitle} <br />
                <span className="text-primary italic font-serif group-hover:text-secondary transition-colors duration-500">Expertise</span>
              </motion.h2>
            </div>
            <div className="lg:col-span-7 pt-4">
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
            {t.industries.items.map((item, i) => (
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
                    src={industryImages[i]} 
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
            <h2 className="text-5xl font-bold text-secondary tracking-tighter mb-6">Analiza Riscurilor și Beneficiilor</h2>
            <p className="text-gray-500 font-light text-lg">O evaluare strategică a factorilor critici în asigurarea infrastructurii de energie regenerabilă.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Risks */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">{t.analysis.risks.title}</h3>
              </div>
              <ul className="space-y-6">
                {t.analysis.risks.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-600 font-light group">
                    <div className="w-1 h-1 bg-secondary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Advantages */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">{t.analysis.advantages.title}</h3>
              </div>
              <ul className="space-y-6">
                {t.analysis.advantages.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-600 font-light group">
                    <div className="w-1 h-1 bg-secondary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Disadvantages */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">{t.analysis.disadvantages.title}</h3>
              </div>
              <ul className="space-y-6">
                {t.analysis.disadvantages.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-600 font-light group">
                    <div className="w-1 h-1 bg-secondary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
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
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Importanță Strategică</span>
              </div>
              <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] mb-16">
                {t.essentialTitle.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-primary italic font-serif">{t.essentialTitle.split(' ').slice(-1)}</span>
              </h2>
              
              <div className="space-y-16">
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Expertiză Tehnică</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">{t.whyUs}</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-5xl font-light text-primary/20 font-serif italic">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Acoperire Globală</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-md">Acces la piețele internaționale de reasigurare pentru riscuri complexe.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-20 bg-primary/10 rounded-full blur-[120px] opacity-50" />
              <div className="relative z-10 border border-white/10 p-4 bg-white/5 backdrop-blur-sm group">
                <div className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    alt="Solar Infrastructure"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 -left-12 bg-primary p-6 shadow-2xl hidden xl:block z-20">
                  <p className="text-4xl font-bold tracking-tighter leading-none mb-2">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Protecție</p>
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
