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

  const seoData = {
    ro: {
      title: 'Asigurare Răspundere Profesională Moldova | ING Broker CNPF',
      description: 'Asigurare PI pentru firme IT, consultanți, avocați, arhitecți în Moldova. Broker licențiat CNPF. Ofertă în 15 minute de la 6 asigurători parteneri.',
      keywords: 'asigurare raspundere profesionala moldova, asigurare PI moldova, asigurare erori omisiuni, asigurare IT moldova, broker asigurari moldova, CNPF'
    },
    ru: {
      title: 'Страхование Профессиональной Ответственности Молдова | ING Broker',
      description: 'Страхование PI для IT-компаний, консультантов, юристов, архитекторов в Молдове. Лицензированный брокер CNPF. Предложение за 15 минут.',
      keywords: 'страхование профессиональной ответственности молдова, страхование PI, брокер страхование молдова'
    },
    en: {
      title: 'Professional Indemnity Insurance Moldova | ING Broker CNPF',
      description: 'PI insurance for IT companies, consultants, lawyers, architects in Moldova. CNPF licensed broker. Quote in 15 minutes from 6 partner insurers.',
      keywords: 'professional indemnity insurance moldova, PI insurance moldova, errors omissions insurance, broker insurance moldova'
    }
  };

  const content = {
    ro: {
      badge: 'Răspundere Profesională',
      heroTitle: 'Asigurare de Răspundere Profesională (PI) în Moldova',
      heroSubtitle: 'Protecție pentru Firma Ta',
      heroDesc: 'Acoperire pentru erori, omisiuni și neglijență profesională. Obligatorie pentru contracte UE. Ofertă comparativă de la 6 asigurători CNPF în 24 de ore.',
      cta: 'Solicită Ofertă PI',
      stats: [
        { val: '15 min', label: 'Timp ofertă' },
        { val: '6', label: 'Asigurători parteneri CNPF' },
        { val: '24h', label: 'Emitere poliță' }
      ],
      alertTitle: 'Clienții internaționali cer tot mai des polița PI ca cerință contractuală',
      alertDesc: 'Companiile din UE, băncile internaționale și fondurile de investiții includ în contracte clauze de asigurare PI obligatorie. Fără această poliță, nu poți semna contracte cu parteneri serioși din Europa.',
      whatIsTitle: 'Ce este asigurarea de răspundere profesională?',
      whatIsDesc: 'Asigurarea PI (Professional Indemnity) acoperă prejudiciile financiare cauzate clienților din erori, omisiuni sau neglijență profesională. Spre deosebire de răspunderea civilă generală - care acoperă daune fizice - asigurarea PI protejează activitatea intelectuală și profesională: sfaturi greșite, erori în proiectare, cod defectuos, calcule incorecte.',
      whoNeedsTitle: 'Cine are nevoie de asigurare PI în Moldova?',
      whoNeedsItems: [
        {
          icon: 'code',
          title: 'Firme IT și software',
          desc: 'Erori în cod, întârzieri de proiect, breșe de date la client. Clienții internacionali cer PI obligatoriu în contracte.'
        },
        {
          icon: 'briefcase',
          title: 'Consultanți de management și financiari',
          desc: 'Sfaturi greșite care duc la pierderi financiare pentru client. O singură recomandare greșită poate costa milioane.'
        },
        {
          icon: 'scale',
          title: 'Avocați și notari',
          desc: 'Erori în redactarea contractelor, ratarea termenelor legale, sfaturi juridice incorecte. Barourile europene cer PI standard.'
        },
        {
          icon: 'building',
          title: 'Arhitecți și ingineri proiectanți',
          desc: 'Erori de proiectare care duc la costuri suplimentare sau accidente. Obligatoriu pentru proiecte finanțate internațional.'
        },
        {
          icon: 'users',
          title: 'Contabili și auditori',
          desc: 'Calcule fiscale greșite, rapoarte eronate, audit incorect. Clienții corporativi cer PI pentru toți furnizorii de servicii financiare.'
        },
        {
          icon: 'file',
          title: 'Agenții de marketing și publicitate',
          desc: 'Campanii care nu ating KPI-urile promise, erori creative cu impact reputational, utilizare neautorizată de drepturi de autor.'
        }
      ],
      coversTitle: 'Ce acoperă polița PI?',
      covers: [
        { title: 'Erori și omisiuni profesionale', desc: 'Greșeli tehnice, sfaturi incorecte, livrabile care nu corespund specificațiilor contractuale.' },
        { title: 'Costuri de apărare juridică', desc: 'Inclusiv dacă pretențiile sunt nefondate - asigurătorul numește un avocat și suportă toate costurile procesului.' },
        { title: 'Prejudicii financiare ale clienților', desc: 'Pierderi directe ale clientului cauzate de erori sau omisiuni în prestarea serviciilor profesionale.' },
        { title: 'Pierderea documentelor și datelor', desc: 'Pierderea dosarelor, documentelor contractuale sau datelor clienților din cauza erorilor sau neglijenței.' },
        { title: 'Nerespectarea termenelor contractuale', desc: 'Penalitățile contractuale cauzate de întârzieri imputabile firmei (cu clauze specifice în poliță).' },
        { title: 'Subcontractori și angajați', desc: 'Acoperire pentru activitatea tuturor persoanelor care prestează servicii în numele firmei.' }
      ],
      pricingTitle: 'Cât costă asigurarea PI?',
      pricingDesc: 'Prima depinde de: cifra de afaceri anuală, tipul activității, limita de acoperire solicitată și istoricul de daune. Iată câteva exemple orientative:',
      pricingItems: [
        {
          segment: 'Firmă IT mică',
          ca: 'CA 200.000 EUR/an',
          range: '1.000 - 4.000 EUR/an',
          limit: 'Limită 100.000 EUR',
          popular: false
        },
        {
          segment: 'Firmă IT / Consultanță medie',
          ca: 'CA 500.000 EUR/an',
          range: '2.500 - 10.000 EUR/an',
          limit: 'Limită 500.000 EUR',
          popular: true
        },
        {
          segment: 'Companie mare / Multinațională',
          ca: 'CA 2.000.000+ EUR/an',
          range: 'La cerere, underwriting individual',
          limit: 'Limită 1.000.000+ EUR',
          popular: false
        }
      ],
      pricingNote: '* Prețurile sunt orientative. Prima finală depinde de activitatea concretă, istoricul de daune și asigurătorul ales. Limita minimă recomandată: valoarea celui mai mare contract activ.',
      processTitle: 'Procesul de obținere a poliței PI prin ING Broker',
      steps: [
        { num: '1', title: 'Completezi formularul', desc: 'Datele firmei, cifra de afaceri, tipul activității. Durează 5 minute. Câmpuri minime, fără birocrație.', time: '~ 5 minute' },
        { num: '2', title: 'Primești oferte comparate', desc: 'Analizăm piața și obținem oferte de la 3-4 asigurători parteneri CNPF cu cele mai bune condiții pentru profilul tău.', time: '~ 24-48 ore' },
        { num: '3', title: 'Alegi și semnezi', desc: 'Selectezi varianta optimă. Polița se semnează digital sau fizic. Protecția este activă din ziua emiterii.', time: '~ 24 ore' }
      ],
      faqTitle: 'Întrebări frecvente despre asigurarea PI',
      faqs: [
        {
          q: 'Este obligatorie asigurarea PI în Moldova?',
          a: 'Nu există obligativitate legală generală în Moldova, dar mulți clienți internaționali și contracte cu parteneri din UE o cer explicit. Băncile și fondurile de investiții o cer tot mai frecvent pentru furnizorii de servicii financiare, IT și consultanță.'
        },
        {
          q: 'Câți ani în urmă acoperă polița PI?',
          a: 'Polițele PI funcționează pe principiul "claims-made" - acoperă pretențiile formulate în perioada poliței, indiferent când a avut loc eroarea. Există clauze "retroactive date" care pot extinde acoperirea și pentru erori profesionale din trecut.'
        },
        {
          q: 'Ce se întâmplă dacă un client face o pretenție nejustificată?',
          a: 'Polița PI acoperă și costurile de apărare juridică, chiar dacă pretențiile sunt complet nefondate. Asigurătorul numește un avocat, coordonează apărarea și suportă toate costurile procesului - indiferent de rezultat.'
        },
        {
          q: 'Putem include mai mulți profesioniști în aceeași poliță?',
          a: 'Da, polița PI poate acoperi toți angajații și subcontractorii care prestează servicii profesionale în numele firmei, printr-o singură poliță de grup. Aceasta simplifică administrarea și reduce costul total.'
        },
        {
          q: 'Cum se raportează o daună PI?',
          a: 'Notifici ING Broker imediat ce primești o pretenție de la un client sau devii conștient de o eroare care ar putea genera o pretenție. Noi coordonăm cu asigurătorul și îți asigurăm reprezentare juridică de la primul semnal.'
        }
      ],
      ctaTitle: 'Ai nevoie de o poliță PI pentru un contract nou?',
      ctaDesc: 'Spune-ne despre firmă și contract. Îți pregătim oferta comparativă în 24 de ore.',
      ctaBtn: 'Solicită Ofertă PI',
      ctaPhone: 'Sună acum'
    },
    ru: {
      badge: 'Профессиональная Ответственность',
      heroTitle: 'Страхование Профессиональной Ответственности (PI) в Молдове',
      heroSubtitle: 'Защита для Вашей Компании',
      heroDesc: 'Покрытие ошибок, упущений и профессиональной халатности. Обязательно для контрактов ЕС. Сравнительное предложение от 6 страховщиков CNPF за 24 часа.',
      cta: 'Запросить предложение PI',
      stats: [
        { val: '15 мин', label: 'Время предложения' },
        { val: '6', label: 'Партнёры CNPF' },
        { val: '24ч', label: 'Выдача полиса' }
      ],
      alertTitle: 'Международные клиенты всё чаще требуют полис PI как договорное условие',
      alertDesc: 'Компании из ЕС, международные банки и инвестиционные фонды включают в контракты обязательные условия о страховании PI. Без этого полиса невозможно подписать серьёзные контракты с европейскими партнёрами.',
      whatIsTitle: 'Что такое страхование профессиональной ответственности?',
      whatIsDesc: 'Страхование PI покрывает финансовый ущерб, причинённый клиентам вследствие ошибок, упущений или профессиональной халатности. В отличие от общей гражданской ответственности, PI защищает интеллектуальную и профессиональную деятельность: неверные советы, ошибки в проектировании, дефектный код, неправильные расчёты.',
      whoNeedsTitle: 'Кому нужно страхование PI в Молдове?',
      whoNeedsItems: [
        { icon: 'code', title: 'IT-компании и разработчики ПО', desc: 'Ошибки в коде, задержки проектов, утечки данных клиентов. Международные клиенты требуют PI обязательно.' },
        { icon: 'briefcase', title: 'Управленческие и финансовые консультанты', desc: 'Неверные советы, влекущие финансовые потери клиентов. Одна неправильная рекомендация может стоить миллионы.' },
        { icon: 'scale', title: 'Юристы и нотариусы', desc: 'Ошибки в составлении договоров, пропуск правовых сроков. Европейские адвокатуры требуют PI стандартно.' },
        { icon: 'building', title: 'Архитекторы и инженеры-проектировщики', desc: 'Ошибки проектирования, влекущие дополнительные расходы или аварии. Обязательно для международных проектов.' },
        { icon: 'users', title: 'Бухгалтеры и аудиторы', desc: 'Ошибки в налоговых расчётах, неверные отчёты. Корпоративные клиенты требуют PI от всех поставщиков финансовых услуг.' },
        { icon: 'file', title: 'Маркетинговые и рекламные агентства', desc: 'Кампании, не достигающие обещанных KPI, ошибки с авторскими правами, репутационный ущерб.' }
      ],
      coversTitle: 'Что покрывает полис PI?',
      covers: [
        { title: 'Профессиональные ошибки и упущения', desc: 'Технические ошибки, неверные советы, результаты, не соответствующие договорным требованиям.' },
        { title: 'Расходы на юридическую защиту', desc: 'Включая случаи необоснованных претензий - страховщик назначает адвоката и берёт на себя все судебные расходы.' },
        { title: 'Финансовые убытки клиентов', desc: 'Прямые потери клиента, вызванные ошибками или упущениями при оказании профессиональных услуг.' },
        { title: 'Утрата документов и данных', desc: 'Потеря файлов, договорной документации или данных клиентов в результате ошибок или халатности.' },
        { title: 'Нарушение договорных сроков', desc: 'Договорные штрафы из-за задержек по вине компании (с конкретными оговорками в полисе).' },
        { title: 'Субподрядчики и сотрудники', desc: 'Покрытие деятельности всех лиц, оказывающих услуги от имени компании.' }
      ],
      pricingTitle: 'Сколько стоит страхование PI?',
      pricingDesc: 'Премия зависит от: годового оборота, вида деятельности, запрошенного лимита покрытия и истории убытков. Ориентировочные примеры:',
      pricingItems: [
        { segment: 'Малая IT-компания', ca: 'Оборот 200 000 EUR/год', range: '1 000 - 4 000 EUR/год', limit: 'Лимит 100 000 EUR', popular: false },
        { segment: 'Средняя IT / Консалтинг', ca: 'Оборот 500 000 EUR/год', range: '2 500 - 10 000 EUR/год', limit: 'Лимит 500 000 EUR', popular: true },
        { segment: 'Крупная компания', ca: 'Оборот 2 000 000+ EUR/год', range: 'По запросу, индивидуальный андеррайтинг', limit: 'Лимит 1 000 000+ EUR', popular: false }
      ],
      pricingNote: '* Цены ориентировочные. Итоговая премия зависит от конкретной деятельности, истории убытков и выбранного страховщика.',
      processTitle: 'Процесс получения полиса PI через ING Broker',
      steps: [
        { num: '1', title: 'Заполняете анкету', desc: 'Данные компании, оборот, вид деятельности. Занимает 5 минут. Минимум полей, без бюрократии.', time: '~ 5 минут' },
        { num: '2', title: 'Получаете сравнительные предложения', desc: 'Анализируем рынок и получаем предложения от 3-4 партнёров CNPF с лучшими условиями для вашего профиля.', time: '~ 24-48 часов' },
        { num: '3', title: 'Выбираете и подписываете', desc: 'Выбираете оптимальный вариант. Полис подписывается в электронном или физическом формате.', time: '~ 24 часа' }
      ],
      faqTitle: 'Часто задаваемые вопросы о страховании PI',
      faqs: [
        { q: 'Обязательно ли страхование PI в Молдове?', a: 'Общей законодательной обязанности в Молдове нет, но многие международные клиенты и контракты с партнёрами из ЕС требуют его явно. Банки и инвестиционные фонды всё чаще требуют PI от поставщиков финансовых, IT-услуг и консалтинга.' },
        { q: 'На сколько лет назад распространяется покрытие PI?', a: 'Полисы PI работают по принципу "claims-made" - покрывают претензии, заявленные в период действия полиса, независимо от того, когда произошла ошибка. Оговорки "retroactive date" могут расширить покрытие на прошлые периоды.' },
        { q: 'Что происходит при необоснованной претензии клиента?', a: 'Полис PI покрывает и расходы на юридическую защиту, даже если претензии полностью необоснованны. Страховщик назначает адвоката и берёт на себя все расходы.' },
        { q: 'Можно ли включить несколько специалистов в один полис?', a: 'Да, полис PI может покрывать всех сотрудников и субподрядчиков, оказывающих профессиональные услуги от имени компании, в рамках единого группового полиса.' },
        { q: 'Как сообщить об убытке PI?', a: 'Уведомите ING Broker сразу же, как только получите претензию от клиента или узнаете об ошибке. Мы координируем работу со страховщиком и обеспечиваем юридическое представительство с первого сигнала.' }
      ],
      ctaTitle: 'Нужен полис PI для нового контракта?',
      ctaDesc: 'Расскажите нам о компании и контракте. Подготовим сравнительное предложение за 24 часа.',
      ctaBtn: 'Запросить предложение PI',
      ctaPhone: 'Позвонить сейчас'
    },
    en: {
      badge: 'Professional Indemnity',
      heroTitle: 'Professional Indemnity Insurance (PI) in Moldova',
      heroSubtitle: 'Protection for Your Business',
      heroDesc: 'Coverage for errors, omissions and professional negligence. Required for EU contracts. Comparative quote from 6 CNPF insurers in 24 hours.',
      cta: 'Request PI Quote',
      stats: [
        { val: '15 min', label: 'Quote time' },
        { val: '6', label: 'CNPF partner insurers' },
        { val: '24h', label: 'Policy issuance' }
      ],
      alertTitle: 'International clients increasingly require PI as a contractual requirement',
      alertDesc: 'EU companies, international banks and investment funds include mandatory PI insurance clauses in contracts. Without this policy, you cannot sign contracts with serious European partners.',
      whatIsTitle: 'What is professional indemnity insurance?',
      whatIsDesc: 'PI insurance covers financial losses caused to clients through errors, omissions or professional negligence. Unlike general civil liability - which covers physical damage - PI insurance protects intellectual and professional activity: wrong advice, design errors, faulty code, incorrect calculations.',
      whoNeedsTitle: 'Who needs PI insurance in Moldova?',
      whoNeedsItems: [
        { icon: 'code', title: 'IT and software companies', desc: 'Code errors, project delays, client data breaches. International clients require PI as standard in contracts.' },
        { icon: 'briefcase', title: 'Management and financial consultants', desc: 'Wrong advice leading to financial losses for clients. One bad recommendation can cost millions.' },
        { icon: 'scale', title: 'Lawyers and notaries', desc: 'Errors in contract drafting, missing legal deadlines, incorrect legal advice. European bar associations require PI as standard.' },
        { icon: 'building', title: 'Architects and design engineers', desc: 'Design errors leading to additional costs or accidents. Mandatory for internationally funded projects.' },
        { icon: 'users', title: 'Accountants and auditors', desc: 'Incorrect tax calculations, erroneous reports. Corporate clients require PI from all financial service providers.' },
        { icon: 'file', title: 'Marketing and advertising agencies', desc: 'Campaigns not reaching promised KPIs, copyright issues, reputational impact errors.' }
      ],
      coversTitle: 'What does the PI policy cover?',
      covers: [
        { title: 'Professional errors and omissions', desc: 'Technical mistakes, incorrect advice, deliverables that do not meet contractual specifications.' },
        { title: 'Legal defence costs', desc: 'Even for unfounded claims - the insurer appoints a lawyer and covers all legal costs.' },
        { title: 'Clients\' financial losses', desc: 'Direct client losses caused by errors or omissions in professional services delivery.' },
        { title: 'Loss of documents and data', desc: 'Loss of files, contractual documents or client data due to errors or negligence.' },
        { title: 'Failure to meet contractual deadlines', desc: 'Contractual penalties caused by delays attributable to the company (with specific policy clauses).' },
        { title: 'Subcontractors and employees', desc: 'Coverage for all persons providing services on behalf of the company.' }
      ],
      pricingTitle: 'How much does PI insurance cost?',
      pricingDesc: 'The premium depends on: annual turnover, type of activity, requested coverage limit and claims history. Some indicative examples:',
      pricingItems: [
        { segment: 'Small IT firm', ca: 'Turnover €200,000/year', range: '€1,000 - €4,000/year', limit: 'Limit €100,000', popular: false },
        { segment: 'Medium IT / Consultancy', ca: 'Turnover €500,000/year', range: '€2,500 - €10,000/year', limit: 'Limit €500,000', popular: true },
        { segment: 'Large company', ca: 'Turnover €2,000,000+/year', range: 'On request, individual underwriting', limit: 'Limit €1,000,000+', popular: false }
      ],
      pricingNote: '* Prices are indicative. The final premium depends on the specific activity, claims history and chosen insurer.',
      processTitle: 'The process of obtaining a PI policy through ING Broker',
      steps: [
        { num: '1', title: 'Complete the form', desc: 'Company details, turnover, type of activity. Takes 5 minutes. Minimum fields, no bureaucracy.', time: '~ 5 minutes' },
        { num: '2', title: 'Receive comparative quotes', desc: 'We analyse the market and obtain quotes from 3-4 CNPF partner insurers with the best conditions for your profile.', time: '~ 24-48 hours' },
        { num: '3', title: 'Choose and sign', desc: 'Select the optimal option. Policy is signed digitally or physically. Protection is active from the day of issuance.', time: '~ 24 hours' }
      ],
      faqTitle: 'Frequently asked questions about PI insurance',
      faqs: [
        { q: 'Is PI insurance mandatory in Moldova?', a: 'There is no general legal requirement in Moldova, but many international clients and contracts with EU partners explicitly require it. Banks and investment funds increasingly require PI from financial services, IT and consulting providers.' },
        { q: 'How many years back does PI coverage apply?', a: 'PI policies work on a "claims-made" basis - they cover claims made during the policy period, regardless of when the error occurred. "Retroactive date" clauses can extend coverage to past periods.' },
        { q: 'What happens if a client makes an unjustified claim?', a: 'The PI policy covers legal defence costs even if claims are completely unfounded. The insurer appoints a lawyer and covers all legal costs - regardless of outcome.' },
        { q: 'Can multiple professionals be included in the same policy?', a: 'Yes, a PI policy can cover all employees and subcontractors providing professional services on behalf of the company, under a single group policy.' },
        { q: 'How do I report a PI claim?', a: 'Notify ING Broker immediately upon receiving a client claim or becoming aware of an error that could generate a claim. We coordinate with the insurer and provide legal representation from the first signal.' }
      ],
      ctaTitle: 'Need a PI policy for a new contract?',
      ctaDesc: 'Tell us about your company and contract. We will prepare a comparative quote within 24 hours.',
      ctaBtn: 'Request PI Quote',
      ctaPhone: 'Call now'
    }
  };

  const c = content[lang];
  const seo = seoData[lang];

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
    "url": "https://www.ingbroker.md/servicii/asigurare-raspundere-profesionala"
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <SEO
        title={seo.title}
        description={seo.description}
        lang={lang}
        keywords={seo.keywords}
        schema={piSchema}
      />

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
          <span>{lang === 'ro' ? 'Înapoi la Acasă' : lang === 'ru' ? 'Назад на Главную' : 'Back to Home'}</span>
        </motion.button>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=90"
            alt="Professional services"
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
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
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
                    {lang === 'ro' ? 'Asigurători parteneri CNPF' : lang === 'ru' ? 'Партнёры CNPF' : 'CNPF Partner Insurers'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Acord Grup SA, Asterra Grup SA, Moldasig VIG SA, Moldcargo SA, Donaris VIG SA, Grawe Carat SA
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=85"
                alt="Professional services office"
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
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
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
                {[
                  lang === 'ro' ? 'Broker licențiat CNPF - reprezentăm interesele tale, nu ale asigurătorului' : lang === 'ru' ? 'Лицензированный брокер CNPF - защищаем ваши интересы, не страховщика' : 'CNPF licensed broker - we represent your interests, not the insurer\'s',
                  lang === 'ro' ? 'Acces la toate cele 6 companii de asigurare din Moldova - cea mai bună ofertă garantat' : lang === 'ru' ? 'Доступ ко всем 6 страховым компаниям Молдовы - лучшее предложение гарантировано' : 'Access to all 6 insurance companies in Moldova - best offer guaranteed',
                  lang === 'ro' ? 'Consultanță gratuită pentru alegerea limitei și franșizei optime' : lang === 'ru' ? 'Бесплатная консультация по выбору оптимального лимита и франшизы' : 'Free consultation for choosing the optimal limit and deductible',
                  lang === 'ro' ? 'Asistență la daune - suntem alături de tine în procesul de despăgubire' : lang === 'ru' ? 'Поддержка при убытках - сопровождаем в процессе возмещения' : 'Claims assistance - we support you through the compensation process'
                ].map((item, i) => (
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
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className={`text-base font-bold tracking-tight transition-all duration-300 ${activeIdx === i ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeIdx === i ? 'bg-primary border-primary text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pb-6 text-slate-600 leading-relaxed text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
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
