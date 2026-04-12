import React, { useState } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, ExternalLink, ChevronDown } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

interface BusinessPageProps {
  lang: Language;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ lang }) => {
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const t = translations[lang].business;
  const cg = translations[lang].corporateGateway;
  const seo = translations[lang].seo.business;

  const navigate = useNavigate();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": seo.title,
        "description": seo.description,
        "provider": {
          "@type": "Organization",
          "name": "Insurance ING Broker SRL"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": t.faq?.items.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        })) || []
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={seo.title} 
        description={seo.description} 
        lang={lang} 
        schema={schema}
      />
      
      {/* Full-screen Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-start pt-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/building 2.png" 
            alt="Corporate Gateway" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0a192f]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent opacity-70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-white/60">
                {cg.label}
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter mb-8 leading-[0.9]">
              {cg.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-display font-light leading-relaxed mb-12 max-w-2xl">
              {cg.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-primary text-white font-display font-bold uppercase text-[10px] tracking-[0.3em] transition-all shadow-xl shadow-primary/20 hover:bg-primary-dark text-center"
              >
                {cg.btnBusiness}
              </motion.button>
              <motion.button 
                onClick={() => navigate('/reinsurance')}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-white/5 border border-white/20 text-white font-display font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-white/10 hover:border-white/40 text-center"
              >
                {cg.btnReinsurance}
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {t.lines.map((line, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => {
                  if (line.link && line.link !== '#') {
                    if (line.link.startsWith('http')) {
                      window.open(line.link, '_blank');
                    } else {
                      navigate(line.link);
                    }
                  } else {
                    navigate(`/business/${line.id}`);
                  }
                }}
                className="group bg-white border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] z-10 cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={line.image} 
                    alt={line.title} 
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-secondary text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                      {line.category || 'BUSINESS'}
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-secondary tracking-tighter group-hover:text-primary transition-colors duration-300 mb-6">{line.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-10 flex-grow text-lg">{line.desc}</p>
                  <div className="mt-auto pt-6 border-t border-gray-100">
                     <span className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary group-hover:text-primary transition-colors">
                      {lang === 'ro' ? 'AFLĂ MAI MULTE' : lang === 'ru' ? 'УЗНАТЬ БОЛЬШЕ' : 'LEARN MORE'}
                      <div className="w-10 h-[1px] bg-primary group-hover:w-16 transition-all duration-500" />
                      {line.link && <ExternalLink size={12} className="opacity-30" />}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter mb-6">
              {t.faq?.title || 'FAQ'}
            </h2>
          </div>
          <div className="space-y-4">
            {t.faq?.items.map((item, i) => (
              <div key={i} className={`border-b border-gray-100 transition-all duration-500 ${activeFaqIdx === i ? 'bg-white px-4 -mx-4 shadow-inner rounded-xl' : 'hover:bg-white/50'}`}>
                <button 
                  onClick={() => setActiveFaqIdx(activeFaqIdx === i ? null : i)}
                  className="w-full py-7 flex justify-between items-center text-left group"
                >
                  <span className={`text-lg font-bold tracking-tight transition-all duration-500 ${activeFaqIdx === i ? 'text-primary translate-x-4' : 'text-secondary group-hover:text-primary group-hover:translate-x-2'}`}>
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${activeFaqIdx === i ? 'bg-primary border-primary text-white rotate-180 shadow-lg shadow-primary/30' : 'border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {activeFaqIdx === i && (
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
                      <div className={`pb-8 text-gray-500 leading-relaxed font-light max-w-3xl transition-all duration-700 ${activeFaqIdx === i ? 'translate-x-2' : ''}`}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter mb-12">
            {lang === 'ro' ? 'Contactează-ne pentru o ofertă' : lang === 'ru' ? 'Свяжитесь с нами для предложения' : 'Contact us for a quote'}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.a 
              href="tel:+37369526003"
              whileHover={{ y: -8, scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-6 bg-gray-50 border border-gray-100 p-6 pr-12 rounded-xl hover:border-primary/30 transition-all duration-300 w-full md:w-auto group"
            >
              <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{lang === 'ro' ? 'Telefon' : lang === 'ru' ? 'Телефон' : 'Phone'}</div>
                <div className="font-bold text-2xl text-secondary group-hover:text-primary transition-colors">+373 69 526 003</div>
              </div>
            </motion.a>

            <motion.a 
              href="mailto:andrei.moraru@ingbroker.md"
              whileHover={{ y: -8, scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-6 bg-gray-50 border border-gray-100 p-6 pr-12 rounded-xl hover:border-primary/30 transition-all duration-300 w-full md:w-auto group"
            >
              <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                <Mail className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Email</div>
                <div className="font-bold text-2xl text-secondary group-hover:text-primary transition-colors">andrei.moraru@ingbroker.md</div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>


    </div>
  );
};
