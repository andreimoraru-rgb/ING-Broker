import React, { useEffect, useState } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Smartphone, Download, ShieldAlert } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[lang];

  const content = {
    ro: {
      title: 'Contact',
      subtitle: 'Suntem aici pentru a vă oferi soluții strategice de asigurare și reasigurare.',
      phone: 'Telefon',
      email: 'Email',
      address: 'Adresă',
      addressText: 'str. Pan Halippa 9, Chișinău, MD',
      hours: 'Program',
      hoursText: 'Luni - Vineri: 09:00 - 18:00',
      formTitle: 'Solicită o Consultanță',
      name: 'Nume și Prenume',
      company: 'Companie',
      service: 'Serviciu de Interes',
      serviceOptions: ['Soluții Corporate', 'Reasigurări & Fronting', 'Asigurări Personale', 'Suport Daune'],
      message: 'Detalii despre nevoile companiei',
      send: 'Trimite Solicitarea',
      deptPersonal: 'Asigurări Personale',
      deptBusiness: 'Soluții Corporate',
      deptReinsurance: 'Reasigurări & Fronting',
      deptFinancial: 'Financiar',
      claimsTitle: 'Asistență Daune Corporate',
      claimsDesc: 'Echipa noastră de experți juridici și tehnici vă reprezintă interesele în fața asigurătorilor pentru o soluționare rapidă.',
      appTitle: 'Aplicația eAsigurari',
      appDesc: 'Gestionează-ți polițele, primește notificări de expirare și raportează daune direct de pe telefonul tău mobil.',
      appBtn: 'Descarcă Acum'
    },
    ru: {
      title: 'Контакты',
      subtitle: 'Мы здесь, чтобы предложить вам стратегические решения по страхованию и перестрахованию.',
      phone: 'Телефон',
      email: 'Email',
      address: 'Адрес',
      addressText: 'ул. Пан Халиппа 9, Кишинев, MD',
      hours: 'График работы',
      hoursText: 'Понедельник - Пятница: 09:00 - 18:00',
      formTitle: 'Запросить консультацию',
      name: 'Имя и Фамилия',
      company: 'Компания',
      service: 'Интересующая услуга',
      serviceOptions: ['Корпоративные решения', 'Перестрахование и фронтинг', 'Личное страхование', 'Поддержка при убытках'],
      message: 'Подробности о потребностях компании',
      send: 'Отправить запрос',
      deptPersonal: 'Личное страхование',
      deptBusiness: 'Корпоративные решения',
      deptReinsurance: 'Перестрахование и фронтинг',
      deptFinancial: 'Финансовый отдел',
      claimsTitle: 'Корпоративная поддержка при убытках',
      claimsDesc: 'Наша команда юридических и технических экспертов представляет ваши интересы перед страховщиками для быстрого урегулирования.',
      appTitle: 'Приложение eAsigurari',
      appDesc: 'Управляйте своими полисами, получайте уведомления об истечении срока и сообщайте об убытках прямо с мобильного телефона.',
      appBtn: 'Скачать сейчас'
    },
    en: {
      title: 'Contact',
      subtitle: 'We are here to provide you with strategic insurance and reinsurance solutions.',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressText: '9 Pan Halippa St, Chisinau, MD',
      hours: 'Business Hours',
      hoursText: 'Monday - Friday: 09:00 - 18:00',
      formTitle: 'Request a Consultation',
      name: 'Full Name',
      company: 'Company',
      service: 'Service of Interest',
      serviceOptions: ['Corporate Solutions', 'Reinsurance & Fronting', 'Personal Insurance', 'Claims Support'],
      message: 'Details about your company\'s needs',
      send: 'Send Request',
      deptPersonal: 'Personal Insurance',
      deptBusiness: 'Corporate Solutions',
      deptReinsurance: 'Reinsurance & Fronting',
      deptFinancial: 'Financial Department',
      claimsTitle: 'Corporate Claims Assistance',
      claimsDesc: 'Our team of legal and technical experts represents your interests before insurers for a swift resolution.',
      appTitle: 'eAsigurari App',
      appDesc: 'Manage your policies, receive expiration notifications and report claims directly from your mobile phone.',
      appBtn: 'Download Now'
    }
  };

  const c = content[lang];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Insurance ING Broker SRL",
    "image": "https://www.ingbroker.md/Logo%20ING%20Broker.png",
    "@id": "https://www.ingbroker.md",
    "url": "https://www.ingbroker.md",
    "telephone": "+37379526003",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "str. Pan Halippa 9",
      "addressLocality": "Chișinău",
      "addressCountry": "MD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.0111,
      "longitude": 28.8258
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${c.title} | Insurance ING Broker SRL`} 
        description={c.subtitle} 
        lang={lang} 
        schema={schema}
      />
      
      {/* Hero Section - Personal Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-start pt-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact us 2.png" 
            alt={c.title} 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
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
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
                {lang === 'ro' ? 'Contactează-ne' : lang === 'ru' ? 'Свяжитесь с нами' : 'Get in Touch'}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              {c.title} <br />
              <span className="text-primary italic font-serif normal-case">{lang === 'ro' ? 'Suport' : lang === 'ru' ? 'Поддержка' : 'Support'}</span>
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl">
              {c.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* Asigurări Personale */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-6">{c.deptPersonal}</h3>
              <div className="space-y-4">
                <a href="tel:+37379526003" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">+373 79 526 003</span>
                </a>
                <a href="mailto:ingbroker@ingbroker.md" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Mail className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">ingbroker@ingbroker.md</span>
                </a>
              </div>
            </div>

            {/* Asigurări Business */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-6">{c.deptBusiness}</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <a href="tel:+37369526003" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                      <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                    </div>
                    <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">+373 69 526 003</span>
                  </a>
                  <a href="mailto:andrei.moraru@ingbroker.md" className="flex items-center gap-4 group ml-14">
                    <Mail className="text-primary group-hover:text-primary transition-colors duration-300" size={16} />
                    <span className="text-gray-600 group-hover:text-primary transition-colors">andrei.moraru@ingbroker.md</span>
                  </a>
                </div>
                
                <div className="w-full h-px bg-gray-100 my-2"></div>

                <div className="flex flex-col gap-2">
                  <a href="tel:+37379030209" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                      <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                    </div>
                    <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">+373 79 030 209</span>
                  </a>
                  <a href="mailto:ion.dascalu@ingbroker.md" className="flex items-center gap-4 group ml-14">
                    <Mail className="text-primary group-hover:text-primary transition-colors duration-300" size={16} />
                    <span className="text-gray-600 group-hover:text-primary transition-colors">ion.dascalu@ingbroker.md</span>
                  </a>
                </div>
                
                <div className="w-full h-px bg-gray-100 my-2"></div>

                <div className="flex flex-col gap-2">
                  <a href="tel:+37378915555" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                      <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                    </div>
                    <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">+373 78 91 5555</span>
                  </a>
                  <a href="mailto:ingbroker@ingbroker.md" className="flex items-center gap-4 group ml-14">
                    <Mail className="text-primary group-hover:text-primary transition-colors duration-300" size={16} />
                    <span className="text-gray-600 group-hover:text-primary transition-colors">ingbroker@ingbroker.md</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Reasigurări */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-6">{c.deptReinsurance}</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <a href="tel:+37369526003" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                      <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                    </div>
                    <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">+373 69 526 003</span>
                  </a>
                  <a href="mailto:andrei.moraru@ingbroker.md" className="flex items-center gap-4 group ml-14">
                    <Mail className="text-primary group-hover:text-primary transition-colors duration-300" size={16} />
                    <span className="text-gray-600 group-hover:text-primary transition-colors">andrei.moraru@ingbroker.md</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Financiar */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-6">{c.deptFinancial}</h3>
              <div className="space-y-4">
                <a href="tel:+37379024333" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">+373 79 024 333</span>
                </a>
                <a href="mailto:ingbroker@ingbroker.md" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Mail className="text-primary group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">ingbroker@ingbroker.md</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white border border-gray-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-lg">
                <MapPin className="text-primary" size={28} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{c.address}</div>
                <div className="font-bold text-xl text-secondary">{c.addressText}</div>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white border border-gray-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-lg">
                <Clock className="text-primary" size={28} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{c.hours}</div>
                <div className="font-bold text-xl text-secondary">{c.hoursText}</div>
              </div>
            </div>

            {/* Corporate Details */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-6">
                {lang === 'ro' ? 'Rechizite și date corporate' : lang === 'ru' ? 'Реквизиты и корпоративные данные' : 'Corporate Details'}
              </h3>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <p><strong className="text-secondary">{lang === 'ro' ? 'Denumire completă:' : lang === 'ru' ? 'Полное наименование:' : 'Full Name:'}</strong> Insurance ING Broker SRL,</p>
                <p><strong className="text-secondary">IDNO:</strong> 1017600019386,</p>
                <p><strong className="text-secondary">{lang === 'ro' ? 'Adresa:' : lang === 'ru' ? 'Адрес:' : 'Address:'}</strong> {lang === 'ro' ? 'mun. Chișinău, str. Pan Halippa 9,' : lang === 'ru' ? 'мун. Кишинев, ул. Пан Халиппа 9,' : 'mun. Chisinau, 9 Pan Halippa str.,'}</p>
                <p><strong className="text-secondary">CEO:</strong> {lang === 'ro' ? 'Ion Dascălu,' : lang === 'ru' ? 'Ион Даскэлу,' : 'Ion Dascalu,'}</p>
                <p><strong className="text-secondary">{lang === 'ro' ? 'Licență:' : lang === 'ru' ? 'Лицензия:' : 'License:'}</strong> {lang === 'ro' ? 'CNPF 000874 din 06.10.2016,' : lang === 'ru' ? 'CNPF 000874 от 06.10.2016,' : 'CNPF 000874 from 06.10.2016,'}</p>
                <p><strong className="text-secondary">{lang === 'ro' ? 'Certificare:' : lang === 'ru' ? 'Сертификация:' : 'Certification:'}</strong> {lang === 'ro' ? 'ISO 9001:2015, certificat RO-11645' : lang === 'ru' ? 'ISO 9001:2015, сертификат RO-11645' : 'ISO 9001:2015, certificate RO-11645'}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col h-full">
            {/* Contact Form Placeholder */}
            <div className="bg-white border border-gray-100 p-10 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-secondary mb-2">
                    {lang === 'ro' ? 'Solicitare trimisă!' : lang === 'ru' ? 'Запрос отправлен!' : 'Request sent!'}
                  </h4>
                  <p className="text-gray-600">
                    {lang === 'ro' ? 'Vă vom contacta în cel mai scurt timp.' : lang === 'ru' ? 'Мы свяжемся с вами в ближайшее время.' : 'We will contact you shortly.'}
                  </p>
                </div>
              )}
              <h3 className="text-3xl font-bold text-secondary mb-8">{c.formTitle}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{c.name}</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{c.company}</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Company SRL"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{c.email}</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{c.service}</label>
                    <select className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                      {c.serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{c.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="..."
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-primary text-white font-bold uppercase text-xs tracking-widest hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/40 rounded-lg"
                >
                  {c.send}
                </motion.button>
              </form>
            </div>

            {/* Claims Support */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                <ShieldAlert size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {c.claimsTitle}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {c.claimsDesc}
                </p>
                <a href="tel:+37379526003" className="inline-flex items-center gap-2 font-bold text-lg text-secondary hover:text-primary transition-colors">
                  <Phone size={20} className="text-primary" />
                  +373 79 526 003
                </a>
              </div>
            </div>

            {/* App Promo */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Smartphone className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {c.appTitle}
              </h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-sm">
                {c.appDesc}
              </p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.amp.broker&hl=ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                <Download size={18} />
                {c.appBtn}
              </a>
            </div>

            {/* Map */}
            <div className="bg-white border border-gray-100 p-2 rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col relative group">
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <iframe 
                  src="https://maps.google.com/maps?q=str.%20Pan%20Halippa%209,%20Chi%C8%99in%C4%83u,%20MD&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 absolute inset-0"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

