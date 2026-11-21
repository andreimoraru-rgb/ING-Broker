import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Users,
  Briefcase,
  Scale,
  Code2,
  Building2,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowLeft
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Language } from '../translations';
import { piContent, piSeo } from '../data/piPageContent';
import { localizedPath } from '../utils/localizedRoutes';
import { RelatedResources } from '../components/RelatedResources';

interface ProfessionalIndemnityPageProps {
  lang: Language;
}

export const ProfessionalIndemnityPage: React.FC<ProfessionalIndemnityPageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = piContent;
  const seoData = piSeo;

  const c = content[lang];
  const seo = seoData[lang];
  const brokerReviewSteps = {
    ro: ['Pornim de la serviciile efectiv prestate și de la cerința scrisă a clientului, nu de la o listă generică de profesii.', 'Pregătim întrebările de clarificat cu asigurătorul și comparăm răspunsurile din documentele propuse.', 'Separăm ce este confirmat în ofertă de ce rămâne condiționat sau exclus, înainte de luarea unei decizii.', 'Acceptarea riscului și soluționarea unei daune aparțin asigurătorului. Rolul brokerului nu înseamnă garantarea despăgubirii.'],
    ru: ['Начинаем с фактически оказываемых услуг и письменного требования клиента, а не с общего перечня профессий.', 'Готовим вопросы для уточнения у страховщика и сопоставляем ответы в предложенных документах.', 'До принятия решения отделяем подтверждённые условия предложения от ограничений, исключений и вопросов, требующих уточнения.', 'Риск принимает и требование о возмещении рассматривает страховщик. Участие брокера не означает гарантии выплаты.'],
    en: ['Start with the services actually delivered and the client’s written requirement, not a generic list of professions.', 'Prepare questions for the insurer and compare the answers in the proposed documents.', 'Before a decision, distinguish confirmed proposal terms from limitations, exclusions and points that still need clarification.', 'The insurer accepts the risk and assesses any claim. The broker’s involvement does not guarantee compensation.'],
  }[lang];

  const iconMap: Record<string, React.ReactNode> = {
    code: <Code2 size={24} className="text-primary" />,
    briefcase: <Briefcase size={24} className="text-primary" />,
    scale: <Scale size={24} className="text-primary" />,
    building: <Building2 size={24} className="text-primary" />,
    users: <Users size={24} className="text-primary" />,
    file: <FileText size={24} className="text-primary" />
  };

  const piSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": lang === 'ro' ? "Asigurare Răspundere Profesională Moldova" : lang === 'ru' ? "Страхование Профессиональной Ответственности Молдова" : "Professional Indemnity Insurance Moldova",
    "provider": {
      "@type": "InsuranceAgency",
      "name": "Insurance ING Broker SRL",
      "url": "https://www.ingbroker.md",
      "telephone": "+37369526003"
    },
    "areaServed": { "@type": "Country", "name": "Moldova" },
    "serviceType": "Professional Indemnity Insurance",
    "url": `https://www.ingbroker.md${localizedPath('/servicii/asigurare-raspundere-profesionala', lang)}`
  };

  return (
    <main className="product-review bg-slate-50 min-h-screen font-sans text-slate-900">
      <SEO
        title={seo.title}
        description={seo.description}
        lang={lang}
        keywords={seo.keywords}
        schema={piSchema}
      />

      {/* Back button */}
      <div className="absolute top-32 left-6 z-30">
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
          <span>{lang === 'ro' ? 'Înapoi la Acasă' : lang === 'ru' ? 'Назад на Главную' : 'Back to Home'}</span>
        </motion.button>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-52 pb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=90"
            alt={lang === 'ro' ? 'Documente și calculatoare pe masa unei echipe la birou' : lang === 'ru' ? 'Документы и ноутбуки на рабочем столе команды' : 'Documents and laptops on a team desk'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/72 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-8 backdrop-blur-md">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {c.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95] mb-4">
              {c.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary mb-6">{c.heroSubtitle}</p>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-10 max-w-2xl">
              {c.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
              >
                {c.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+37369526003"
                className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-3"
              >
                <Phone size={18} /> +373 69 526 003
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {c.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alert banner */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-24 h-24 flex-shrink-0 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center">
              <Scale size={48} className="text-primary" />
            </div>
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                {lang === 'ro' ? 'Cerință Contractuală' : lang === 'ru' ? 'Договорное требование' : 'Contractual Requirement'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                {c.alertTitle}
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-3xl">
                {c.alertDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is PI */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                  {lang === 'ro' ? 'Ce este PI' : lang === 'ru' ? 'Что такое PI' : 'What is PI'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
                {c.whatIsTitle}
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                {c.whatIsDesc}
              </p>
              <div className="mt-10 p-6 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {lang === 'ro' ? 'Disponibilitate și acceptare' : lang === 'ru' ? 'Доступность и принятие' : 'Availability and acceptance'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {c.pricingNote}
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=85"
                alt={lang === 'ro' ? 'Persoane discutând în jurul unei mese' : lang === 'ru' ? 'Люди обсуждают вопросы за общим столом' : 'People talking around a table'}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <div className="text-3xl font-bold mb-1">PI Insurance</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-70">{lang === 'ro' ? 'Răspundere Profesională' : lang === 'ru' ? 'Проф. ответственность' : 'Professional Indemnity'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who needs PI */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">{c.whoNeedsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.whoNeedsItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-12 flex items-center gap-4">
                <Shield className="text-primary" size={40} />
                {c.coversTitle}
              </h2>
              <div className="space-y-6">
                {c.covers.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-8">
                {lang === 'ro' ? 'De ce prin ING Broker?' : lang === 'ru' ? 'Почему через ING Broker?' : 'Why through ING Broker?'}
              </h3>
              <div className="space-y-6">
                {brokerReviewSteps.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">{c.pricingTitle}</h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">{c.pricingDesc}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {c.pricingItems.map((plan, i) => (
              <div
                key={i}
                className={`bg-white p-10 rounded-3xl border transition-all ${plan.popular ? 'border-primary shadow-xl scale-105 relative z-10' : 'border-slate-200 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    {lang === 'ro' ? 'Popular' : lang === 'ru' ? 'Популярный' : 'Popular'}
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.segment}</h3>
                <div className="text-sm text-slate-400 mb-4">{plan.ca}</div>
                <div className="text-2xl font-bold text-primary mb-2">{plan.range}</div>
                <div className="text-xs text-slate-400 mb-8">{plan.limit}</div>
                <div className="h-px bg-slate-100 mb-8" />
                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  {c.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 italic">{c.pricingNote}</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">{c.processTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {c.steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center p-10 border border-slate-200 rounded-2xl hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                <span className="inline-block text-xs text-primary font-bold uppercase tracking-widest">{step.time}</span>
              </motion.div>
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
                  aria-expanded={activeIdx === i}
                  aria-controls={`pi-answer-${i}`}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className={`text-base font-bold tracking-tight transition-all duration-300 ${activeIdx === i ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeIdx === i ? 'bg-primary border-primary text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <div id={`pi-answer-${i}`} hidden={activeIdx !== i} className="pb-6 text-slate-600 leading-relaxed text-sm">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedResources lang={lang} topic="professional" />

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 italic">
            {c.ctaTitle}
          </h2>
          <p className="text-xl text-white/80 font-light mb-12">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-12 py-5 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all shadow-2xl"
            >
              {c.ctaBtn}
            </button>
            <a
              href="tel:+37369526003"
              className="px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              {c.ctaPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer info */}
      <footer className="py-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-white/70 text-xs">
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
    </main>
  );
};
