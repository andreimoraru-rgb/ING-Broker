import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations, Language } from '../translations';
import { SEO } from './SEO';
import { Shield, Target, Eye, History, Award, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  lang?: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ lang: propLang }) => {
  const { lang: contextLang } = useLanguage();
  const lang = propLang || contextLang;
  const content = translations[lang].about;
  const seo = translations[lang].seo.about;

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": seo.title,
    "description": seo.description,
    "mainEntity": {
      "@type": "Organization",
      "name": "Insurance ING Broker SRL",
      "foundingDate": "2006",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "str. Pan Halippa 9",
        "addressLocality": "Chișinău",
        "addressCountry": "MD"
      }
    }
  };

  return (
    <div className="bg-white text-secondary font-sans min-h-screen">
      <SEO 
        title={seo.title} 
        description={seo.description} 
        lang={lang} 
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about us-2.png" 
            alt={content.hero.title} 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
                {lang === 'ro' ? 'Despre Noi' : lang === 'ru' ? 'О нас' : 'About Us'}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              {content.hero.title.split(' ').slice(0, -2).join(' ')} <br />
              <span className="text-primary italic font-serif normal-case">
                {content.hero.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
              {content.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Who We Are */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <div className="lg:col-span-5">
              <div className="w-16 h-1 bg-primary mb-10" />
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8"
              >
                {content.whoWeAre.title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-primary italic font-serif normal-case">
                  {content.whoWeAre.title.split(' ').slice(-1)}
                </span>
              </motion.h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-8 text-justify">
                {content.intro}
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed text-justify">
                {content.whoWeAre.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Target size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-secondary mb-6 tracking-tight">
                  {content.mission.title}
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {content.mission.content}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 md:p-16 shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Eye size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <Eye className="text-primary" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-secondary mb-6 tracking-tight">
                  {content.vision.title}
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {content.vision.content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="w-16 h-1 bg-primary mb-10" />
              <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter mb-8">
                {content.history.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
                {content.history.content}
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-1">2006</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {lang === 'ro' ? 'Fondare' : lang === 'ru' ? 'Основание' : 'Founded'}
                  </div>
                </div>
                <div className="w-[1px] h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-1">ISO</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {lang === 'ro' ? 'Certificare' : lang === 'ru' ? 'Сертификация' : 'Certification'}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="ING Broker History" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-12 hidden md:block">
                <History className="text-white" size={48} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-16 h-1 bg-primary mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              {content.values.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.items.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-white/10 hover:border-primary/50 transition-colors duration-300 group"
              >
                <CheckCircle2 className="text-primary mb-6 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-lg font-medium leading-tight">
                  {value}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-5">
              <div className="w-16 h-1 bg-primary mb-10" />
              <h2 className="text-4xl md:text-6xl font-bold text-secondary tracking-tighter leading-[0.9]">
                {content.differentiators.title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-primary italic font-serif normal-case">
                  {content.differentiators.title.split(' ').slice(-1)}
                </span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.differentiators.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-gray-100 group"
              >
                <div className="mb-8">
                  {index === 0 && <Award className="text-primary" size={32} />}
                  {index === 1 && <Target className="text-primary" size={32} />}
                  {index === 2 && <Shield className="text-primary" size={32} />}
                  {index === 3 && <Globe className="text-primary" size={32} />}
                  {index === 4 && <History className="text-primary" size={32} />}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Data */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xl">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-8">
                {content.corporate.title}
              </h3>
              <p className="text-lg text-gray-600 whitespace-pre-line leading-relaxed font-light">
                {content.corporate.content}
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="/certificat_iso.pdf" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-primary hover:shadow-md transition-all cursor-pointer">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">ISO 9001:2015</div>
                <div className="text-secondary font-medium">Certified Excellence</div>
              </a>
              <a href="/licenta_ing.pdf" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-primary hover:shadow-md transition-all cursor-pointer">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">CNPF License</div>
                <div className="text-secondary font-medium">Official Authority</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="w-16 h-1 bg-primary mb-10" />
            <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8">
              {content.cta.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-primary italic font-serif normal-case">
                {content.cta.title.split(' ').slice(-1)}
              </span>
            </h2>
            <p className="text-2xl text-gray-500 mb-12 font-light leading-relaxed">
              {content.cta.subtitle}
            </p>
            <motion.button 
              whileHover={{ x: 10 }}
              className="group flex items-center gap-4 text-secondary font-bold uppercase text-xs tracking-[0.3em] transition-all"
            >
              <span className="px-8 py-5 bg-primary text-white shadow-xl shadow-primary/20 group-hover:bg-secondary transition-colors">
                {content.cta.btn}
              </span>
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowRight className="text-primary" size={18} />
              </div>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
