import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { Gavel, FileText, Info, Download, ChevronRight, MapPin, Mail, Phone, ShieldCheck, Scale, Database, BookOpen, Building2, Library, Cookie, FileSignature, Handshake, Laptop, PenTool, Languages, CreditCard, Receipt, FileX, MessageSquareWarning, Edit3 } from 'lucide-react';
import { legalTranslations } from '../translations/legal';

const TermsPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = legalTranslations[lang].terms;

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
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920" 
            alt="Terms and Conditions" 
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
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-none bg-gray-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primary/20">
                    {index === 0 && <BookOpen className="w-5 h-5" />}
                    {index === 1 && <Building2 className="w-5 h-5" />}
                    {index === 2 && <Library className="w-5 h-5" />}
                    {index === 3 && <ShieldCheck className="w-5 h-5" />}
                    {index === 4 && <Cookie className="w-5 h-5" />}
                    {index === 5 && <FileSignature className="w-5 h-5" />}
                    {index === 6 && <Handshake className="w-5 h-5" />}
                    {index === 7 && <Laptop className="w-5 h-5" />}
                    {index === 8 && <PenTool className="w-5 h-5" />}
                    {index === 9 && <Languages className="w-5 h-5" />}
                    {index === 10 && <CreditCard className="w-5 h-5" />}
                    {index === 11 && <Receipt className="w-5 h-5" />}
                    {index === 12 && <FileX className="w-5 h-5" />}
                    {index === 13 && <MessageSquareWarning className="w-5 h-5" />}
                    {index === 14 && <Edit3 className="w-5 h-5" />}
                    {index > 14 && <ChevronRight className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 pt-1">
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

export default TermsPage;
