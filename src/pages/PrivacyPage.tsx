import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Database, FileText, Gavel, MapPin, Mail, Phone, Scale, Info, Download, ChevronRight } from 'lucide-react';
import { legalTranslations } from '../translations/legal';

const PrivacyPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = legalTranslations[lang].privacy;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 selection:bg-blue-100">
      <SEO 
        lang={lang}
        title={`${t.title} ${t.titleItalic} | ING Broker`}
        description={t.subtitle}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1920" 
            alt="Privacy Policy" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent opacity-90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
                {t.officialDocument}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              {t.title} <br />
              <span className="text-primary italic font-serif normal-case">{t.titleItalic}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl">
              {t.subtitle}
            </p>
            <div className="flex items-center text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Info className="w-4 h-4 mr-3 text-primary" />
              {t.lastUpdate}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16 mb-24">
        <div>
          {/* Main Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {t.sections.map((section, index) => (
              <motion.section 
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-secondary tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h2>
                    <div className="prose prose-gray max-w-none text-gray-700 leading-normal whitespace-pre-line font-normal">
                      {section.content}
                    </div>
                  </div>
                </div>
                {index < t.sections.length - 1 && (
                  <div className="mt-12 border-b border-gray-200"></div>
                )}
              </motion.section>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
