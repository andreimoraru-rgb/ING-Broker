import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Clock, 
  Globe, 
  Building2, 
  HardHat, 
  Zap, 
  Droplets, 
  Flame, 
  CloudLightning, 
  Construction,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowLeft
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../utils/schema';
import { Language } from '../translations';

interface ConstructionShieldPageProps {
  lang: Language;
}

export const ConstructionShieldPage: React.FC<ConstructionShieldPageProps> = ({ lang }) => {
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

  const t = {
    ro: {
      title: 'Construction Shield 360',
      subtitle: 'Analiza CAR/EAR și garanțiilor | ING Broker Moldova',
      heroTitle: 'Riscuri Construcții-Montaj + Cerințe de Garanții',
      heroDesc: 'Analizăm separat riscurile CAR/EAR și cerințele de garanții contractuale. Disponibilitatea, limitele, termenele și acceptarea documentelor se confirmă pentru proiectul concret.',
      cta: 'Solicită o discuție',
      details: 'Aspecte de verificat',
      stats: [
        { val: 'Riscuri', label: 'De evaluat' },
        { val: 'Limite', label: 'De confirmat' },
        { val: 'Termene', label: 'De stabilit' }
      ],
      ebrdTitle: 'Ce cerințe de asigurare are contractul proiectului?',
      ebrdDesc: 'Verifică documentele beneficiarului și finanțatorului: ce polițe sau garanții solicită, pentru ce perioadă și în ce formă. Nu presupune aceeași obligație pentru toate proiectele.',
      productsTitle: '6 direcții de verificare',
      productsSubtitle: 'Construction Shield 360 prezintă teme pentru analiza proiectului, nu confirmă un pachet emis. Fiecare poliță, garanție sau extensie necesită verificare separată.',
      products: [
        { title: 'All Risks - Secțiunea I', desc: 'Verifică lucrările, materialele și structurile declarate, perioada, limitele și excluderile. All Risks nu înseamnă orice situație.', tag: 'CAR/EAR' },
        { title: 'Răspundere Terți - Sect. II', desc: 'Verifică persoanele asigurate, răspunderea față de terți, limita și excluderile acestei secțiuni.', tag: 'TPL' },
        { title: 'Bid + Performance + Advance', desc: 'Garanția de ofertă, de bună execuție și de avans au scopuri diferite. Verifică emitentul acceptat, forma și cerințele contractului.', tag: 'BONDS' },
        { title: 'Retention + Customs', desc: 'Verifică separat cerințele privind retențiile și garanțiile vamale. Disponibilitatea și acceptarea emitentului nu sunt confirmate de această pagină.', tag: 'BONDS' },
        { title: 'DSU / ALoP', desc: 'DSU/ALoP privește analiza pierderilor din întârziere. O eventuală extensie, evenimentul declanșator și limitele trebuie confirmate separat.', tag: 'SEPARAT' },
        { title: 'Cerințe ale finanțatorului', desc: 'Verifică documentele și cerințele beneficiarului sau finanțatorului. Brokerul nu certifică prin această pagină conformitatea juridică a proiectului.', tag: 'SEPARAT' }
      ],
      risksTitle: 'Riscuri de verificat',
      risks: [
        { title: 'Incendiu, explozie, fulger', desc: 'Distrugeri la lucrări și materiale' },
        { title: 'Furtuni, inundații, seisme', desc: 'Fenomene atmosferice, alunecări teren' },
        { title: 'Avarii accidentale', desc: 'Daune structuri în timpul execuției' },
        { title: 'Furt, vandalism', desc: 'Pierderi materiale și echipamente' }
      ],
      pricingTitle: 'Ce informații trebuie pregătite?',
      pricing: [
        { tier: 'Pasul 1', name: 'Descrierea proiectului', range: 'De documentat', items: ['Activitatea și lucrările', 'Valorile și amplasamentul', 'Contractele relevante'] },
        { tier: 'Pasul 2', name: 'Condițiile propuse', range: 'De verificat', items: ['Riscurile și excluderile', 'Limitele și franșizele', 'Perioada și prima'], popular: true },
        { tier: 'Pasul 3', name: 'Confirmările necesare', range: 'De obținut', items: ['Acceptarea asigurătorului', 'Cerințele beneficiarului', 'Documentele și valabilitatea'] }
      ]
    },
    ru: {
      title: 'Construction Shield 360',
      subtitle: 'Анализ CAR/EAR и гарантий | ING Broker Moldova',
      heroTitle: 'Риски строительства + Требования к гарантиям',
      heroDesc: 'Отдельно рассматриваем риски CAR/EAR и требования к договорным гарантиям. Доступность, лимиты, сроки и приемлемость документов подтверждаются для конкретного проекта.',
      cta: 'Обсудить проект',
      details: 'Что проверить',
      stats: [
        { val: 'Риски', label: 'Для оценки' },
        { val: 'Лимиты', label: 'Для проверки' },
        { val: 'Сроки', label: 'Для согласования' }
      ],
      ebrdTitle: 'Какие страховые требования предусмотрены договором проекта?',
      ebrdDesc: 'Проверьте документы заказчика и финансирующей стороны: какие полисы или гарантии требуются, на какой срок и в какой форме. Нельзя считать требования одинаковыми для всех проектов.',
      productsTitle: '6 направлений проверки',
      productsSubtitle: 'Construction Shield 360 описывает вопросы для анализа проекта, а не подтверждает выданный пакет. Каждый полис, гарантия или расширение требуют отдельной проверки.',
      products: [
        { title: 'All Risks - Секция I', desc: 'Проверьте заявленные работы, материалы и конструкции, период, лимиты и исключения. All Risks не означает покрытие любой ситуации.', tag: 'CAR/EAR' },
        { title: 'Ответственность - Секц. II', desc: 'Проверьте застрахованных лиц, ответственность перед третьими лицами, лимит и исключения этого раздела.', tag: 'TPL' },
        { title: 'Bid + Performance + Advance', desc: 'Тендерная гарантия, гарантия исполнения и возврата аванса имеют разные цели. Проверьте допустимого эмитента, форму и требования договора.', tag: 'BONDS' },
        { title: 'Retention + Customs', desc: 'Отдельно проверьте требования к удержаниям и таможенным гарантиям. Эта страница не подтверждает доступность или приемлемость эмитента.', tag: 'BONDS' },
        { title: 'DSU / ALoP', desc: 'DSU/ALoP относится к анализу потерь из-за задержки. Возможное расширение, событие, запускающее покрытие, и лимиты подтверждаются отдельно.', tag: 'ОТДЕЛЬНО' },
        { title: 'Требования финансирующей стороны', desc: 'Проверьте документы и требования заказчика или финансирующей стороны. Эта страница не является заключением о юридическом соответствии проекта.', tag: 'ОТДЕЛЬНО' }
      ],
      risksTitle: 'Риски для проверки',
      risks: [
        { title: 'Пожар, взрыв, молния', desc: 'Разрушения на объекте и материалов' },
        { title: 'Штормы, наводнения, землетрясения', desc: 'Атмосферные явления, оползни' },
        { title: 'Случайные аварии', desc: 'Повреждения конструкций при выполнении' },
        { title: 'Кража, вандализм', desc: 'Потери материалов и оборудования' }
      ],
      pricingTitle: 'Какие сведения подготовить?',
      pricing: [
        { tier: 'Шаг 1', name: 'Описание проекта', range: 'Подготовить', items: ['Деятельность и работы', 'Стоимость и место работ', 'Условия договоров'] },
        { tier: 'Шаг 2', name: 'Предлагаемые условия', range: 'Проверить', items: ['Риски и исключения', 'Лимиты и франшизы', 'Период и премия'], popular: true },
        { tier: 'Шаг 3', name: 'Нужные подтверждения', range: 'Получить', items: ['Согласие страховщика', 'Требования заказчика', 'Документы и сроки действия'] }
      ]
    },
    en: {
      title: 'Construction Shield 360',
      subtitle: 'CAR/EAR and bond assessment | ING Broker Moldova',
      heroTitle: 'Construction Risks + Bond Requirements',
      heroDesc: 'Review CAR/EAR risks and contractual bond requirements separately. Availability, limits, timing and document acceptance must be confirmed for the individual project.',
      cta: 'Discuss your project',
      details: 'Points to check',
      stats: [
        { val: 'Risks', label: 'To assess' },
        { val: 'Limits', label: 'To confirm' },
        { val: 'Timing', label: 'To agree' }
      ],
      ebrdTitle: 'What insurance requirements does the project contract contain?',
      ebrdDesc: 'Check the client and funder documents: which policies or bonds are required, for what period and in which form. Do not assume that every project has the same obligations.',
      productsTitle: '6 areas to review',
      productsSubtitle: 'Construction Shield 360 outlines project review topics; it does not confirm an issued package. Each policy, bond or extension requires separate assessment.',
      products: [
        { title: 'All Risks - Section I', desc: 'Check declared works, materials and structures, the period, limits and exclusions. All Risks does not mean cover for every situation.', tag: 'CAR/EAR' },
        { title: 'Third Party Liability - Sect. II', desc: 'Check insured parties, third-party liability, the limit and exclusions of this section.', tag: 'TPL' },
        { title: 'Bid + Performance + Advance', desc: 'Bid, performance and advance payment bonds serve different purposes. Check the accepted issuer, wording and contract requirements.', tag: 'BONDS' },
        { title: 'Retention + Customs', desc: 'Review retention and customs guarantee requirements separately. This page does not confirm availability or acceptance of an issuer.', tag: 'BONDS' },
        { title: 'DSU / ALoP', desc: 'DSU/ALoP concerns assessment of delay-related losses. Any extension, triggering event and limits must be confirmed separately.', tag: 'SEPARATE' },
        { title: 'Funder requirements', desc: 'Check client or funder documents and requirements. This page does not certify the legal compliance of a project.', tag: 'SEPARATE' }
      ],
      risksTitle: 'Risks to check',
      risks: [
        { title: 'Fire, Explosion, Lightning', desc: 'Damage to works and materials' },
        { title: 'Storms, Floods, Earthquakes', desc: 'Atmospheric phenomena, landslides' },
        { title: 'Accidental Damage', desc: 'Structural damage during execution' },
        { title: 'Theft, Vandalism', desc: 'Loss of materials and equipment' }
      ],
      pricingTitle: 'What information should you prepare?',
      pricing: [
        { tier: 'Step 1', name: 'Project description', range: 'Document', items: ['Activity and works', 'Values and location', 'Relevant contracts'] },
        { tier: 'Step 2', name: 'Proposed terms', range: 'Review', items: ['Risks and exclusions', 'Limits and deductibles', 'Period and premium'], popular: true },
        { tier: 'Step 3', name: 'Required confirmations', range: 'Obtain', items: ['Insurer acceptance', 'Client requirements', 'Documents and validity'] }
      ]
    }
  };

  const c = t[lang];

  const carEarServiceSchema = serviceSchema({
    name: lang === 'ro'
      ? 'Asigurare CAR/EAR Construcții Moldova'
      : lang === 'ru'
      ? 'Страхование CAR/EAR Строительства Молдова'
      : 'CAR/EAR Construction Insurance Moldova',
    description: c.heroDesc,
    url: 'https://ingbroker.md/construction-shield'
  });

  const carEarBreadcrumb = breadcrumbSchema([
    { name: lang === 'ro' ? 'Acasă' : lang === 'ru' ? 'Главная' : 'Home', url: 'https://ingbroker.md' },
    { name: lang === 'ro' ? 'Servicii' : lang === 'ru' ? 'Услуги' : 'Services', url: 'https://ingbroker.md/business' },
    {
      name: lang === 'ro'
        ? 'Asigurare Construcții CAR/EAR'
        : lang === 'ru'
        ? 'Страхование строительства CAR/EAR'
        : 'Construction Insurance CAR/EAR',
      url: 'https://ingbroker.md/construction-shield'
    }
  ]);

  const carEarFaqSchema = faqSchema(
    lang === 'ro'
      ? [
          {
            question: 'Ce este asigurarea CAR/EAR în Moldova?',
            answer: 'CAR (Contractors All Risks) privește riscurile lucrărilor de construcții, iar EAR (Erection All Risks) riscurile de montaj. Obiectul, perioada, limitele, franșizele și excluderile se confirmă în poliță. Cerințele beneficiarului și finanțatorului se verifică în contractul concret; nu există acoperire automată pentru orice eveniment.'
          },
          {
            question: 'Cât costă asigurarea CAR/EAR în Moldova?',
            answer: 'Prima este suma plătită pentru asigurare. Asigurătorul o stabilește după analiza proiectului și a condițiilor solicitate. Pagina nu prezintă tarife sau un termen garantat. Compară prima împreună cu limitele, franșiza și excluderile.'
          },
          {
            question: 'Ce trebuie verificat pentru o garanție contractuală?',
            answer: 'Verifică tipul garanției, emitentul acceptat, suma, perioada, formularea și cerințele beneficiarului. Disponibilitatea, aprobarea și termenul se confirmă separat. Insurance ING Broker SRL este broker; această pagină nu confirmă emiterea unei garanții sau acceptarea ei la o licitație.'
          }
        ]
      : lang === 'ru'
      ? [
          {
            question: 'Что такое страхование CAR/EAR в Молдове?',
            answer: 'CAR (Contractors All Risks) относится к рискам строительных работ, а EAR (Erection All Risks) - к рискам монтажа. Объект, период, лимиты, франшизы и исключения подтверждаются в полисе. Требования заказчика и финансирующей стороны проверяются по конкретному договору; автоматического покрытия любого события нет.'
          },
          {
            question: 'Сколько стоит страхование CAR/EAR в Молдове?',
            answer: 'Премия - сумма, уплачиваемая за страхование. Страховщик определяет ее после анализа проекта и запрошенных условий. Страница не содержит тарифов или гарантированного срока. Сравнивайте премию вместе с лимитами, франшизой и исключениями.'
          },
          {
            question: 'Что проверить для договорной гарантии?',
            answer: 'Проверьте вид гарантии, допустимого эмитента, сумму, период, формулировки и требования заказчика. Доступность, одобрение и срок подтверждаются отдельно. Insurance ING Broker SRL является брокером; страница не подтверждает выдачу гарантии или ее принятие на тендере.'
          }
        ]
      : [
          {
            question: 'What is CAR/EAR insurance in Moldova?',
            answer: 'CAR (Contractors All Risks) concerns construction risks, while EAR (Erection All Risks) concerns installation risks. The insured subject, period, limits, deductibles and exclusions must be confirmed in the policy. Check client and funder requirements against the actual contract; cover for every event is not automatic.'
          },
          {
            question: 'How much does CAR/EAR insurance cost in Moldova?',
            answer: 'The premium is the amount paid for insurance. The insurer determines it after assessing the project and requested terms. This page provides neither rates nor a guaranteed turnaround. Compare the premium alongside limits, deductibles and exclusions.'
          },
          {
            question: 'What should be checked for a contractual bond?',
            answer: 'Check the bond type, accepted issuer, amount, period, wording and client requirements. Availability, approval and timing need separate confirmation. Insurance ING Broker SRL is a broker; this page confirms neither bond issuance nor acceptance at a tender.'
          }
        ]
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <SEO
        title={c.title}
        description={c.heroDesc}
        lang={lang}
      />
      <SchemaMarkup schemas={[carEarServiceSchema, carEarBreadcrumb]} />
      {/* Back to Home Button */}
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
          <span>{lang === 'ro' ? 'Înapoi la Acasă' : lang === 'ru' ? 'Назад на Главную' : 'Back to Home'}</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=90" 
            alt="Construction site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
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
              Construction Shield 360
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-6">
              {c.heroTitle.split('+')[0]} <br />
              <span className="text-primary">+{c.heroTitle.split('+')[1]}</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10 max-w-2xl">
              {c.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button onClick={() => navigate('/contact')} className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                {c.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.getElementById('detalii-program')?.scrollIntoView({behavior:'smooth'})} className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-md">
                {c.details}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {c.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EBRD Banner */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-24 h-24 flex-shrink-0 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center">
              <Building2 size={48} className="text-primary" />
            </div>
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                {lang === 'ro' ? 'Cerințe de verificat' : lang === 'ru' ? 'Требования для проверки' : 'Requirements to check'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                {c.ebrdTitle}
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-3xl">
                {c.ebrdDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="detalii-program" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">{c.productsTitle}</h2>
          <p className="text-lg text-slate-500 font-light">{c.productsSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.products.map((product, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded-md mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {product.tag}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{product.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-12 flex items-center gap-4">
                <Shield className="text-primary" size={40} />
                {c.risksTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {c.risks.map((risk, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{risk.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{risk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85" 
                alt="Construction coverage" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">{lang === 'ro' ? 'Condiții' : lang === 'ru' ? 'Условия' : 'Terms'}</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-70">{lang === 'ro' ? 'De verificat' : lang === 'ru' ? 'Для проверки' : 'To review'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">{c.pricingTitle}</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {c.pricing.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white p-10 rounded-3xl border transition-all ${plan.popular ? 'border-primary shadow-xl scale-105 relative z-10' : 'border-slate-200 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    {lang === 'ro' ? 'De analizat' : lang === 'ru' ? 'Для анализа' : 'For review'}
                  </div>
                )}
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{plan.tier}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-8">{plan.range}</div>
                <div className="h-px bg-slate-100 mb-8" />
                <ul className="space-y-4 mb-10">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('/contact')} className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {c.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 italic">
            {lang === 'ro' ? 'Pregătit pentru următorul proiect?' : lang === 'ru' ? 'Готовы к следующему проекту?' : 'Ready for your next project?'}
          </h2>
          <p className="text-xl text-white/80 font-light mb-12">
            {lang === 'ro' ? 'Trimite descrierea proiectului și cerințele contractuale. Confirmăm ce poate fi analizat, documentele și eventualele costuri, fără promisiunea emiterii unei garanții.' : lang === 'ru' ? 'Отправьте описание проекта и договорные требования. Уточним возможности анализа, документы и возможные расходы, без обещания выдачи гарантии.' : 'Send the project description and contractual requirements. We will clarify the scope of assessment, documents and any costs, without promising bond issuance.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-12 py-5 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all shadow-2xl">
              {c.cta}
            </button>
            <a href="tel:+37379030209" className="px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <Phone size={20} />
              {lang === 'ro' ? 'Sună acum' : lang === 'ru' ? 'Позвонить' : 'Call now'}
            </a>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-white/40 text-xs">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              municipiul Chișinău, strada Pan Halippa 9, Republica Moldova
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
