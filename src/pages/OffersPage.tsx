import React, { useEffect } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localizedPath } from '../utils/localizedRoutes';

interface OffersPageProps {
  lang: Language;
}

export const OffersPage: React.FC<OffersPageProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ro: {
      title: 'Soluții Sectoriale',
      subtitle: 'Programe de asigurare specializate, adaptate riscurilor specifice fiecărei industrii.',
      offers: [
        {
          id: 'saloane-auto',
          title: 'Saloane Auto',
          desc: 'Discuție despre colaborarea cu salonul auto: solicitări CASCO pentru clienți, responsabilități și condiții stabilite în scris.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto'
        },
        {
          id: 'companii-it',
          title: 'Companii IT',
          desc: 'Evaluarea distinctă a erorilor profesionale (E&O) și a incidentelor cibernetice. Activitatea, limitele și excluderile se verifică în documente.',
          image: '/it-companies.jpg',
          link: '/servicii/asigurare-raspundere-profesionala'
        },
        {
          id: 'regenerare-energie',
          title: 'Energie regenerabilă',
          desc: 'Analiza proiectelor de energie regenerabilă: echipamente, lucrări, exploatare și venituri. Fiecare componentă necesită confirmarea condițiilor.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/renewable-energy'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'Opțiuni de beneficii pentru angajați. Disponibilitatea produselor, persoanele eligibile, serviciile și limitele se verifică înainte de alegere.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'flote-auto',
          title: 'Flotă Auto Corporativă',
          desc: 'Analiza flotei de minimum 5vehicule: RCA, Carte Verde, CASCO, CMR și CARGO, după activitate. Termenul, ofertele disponibile și condițiile se confirmă separat.',
          image: '/camionete.jpg',
          link: '/oferte/flote-auto'
        },
        {
          id: 'drone-liability',
          title: 'Asigurare Răspundere Drone',
          desc: 'Verificarea răspunderii față de terți și a eventualelor opțiuni pentru dronă. Tipul operațiunilor, teritoriul și condițiile trebuie confirmate.',
          image: '/asigurare-drone-moldova/assets/business.webp',
          link: '/asigurare-drone-moldova/'
        },
        {
          id: 'cyber-insurance',
          title: 'Cyber Insurance',
          desc: 'Evaluarea incidentelor cibernetice, a datelor și a întreruperii serviciilor. Nu orice incident sau cost este acceptat automat în asigurare.',
          image: '/cyber-insurance-3.jpg',
          link: '/servicii/asigurare-cyber-moldova'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - Asigurare CAR/EAR + Garanții',
          desc: 'Analiza separată a lucrărilor CAR/EAR și a garanțiilor contractuale. Acceptarea riscului și cerințele finanțatorului se verifică pentru proiectul concret.',
          image: '/Constructii-montaj.jpeg',
          link: '/construction-shield'
        }
      ],
      cta: 'Solicită Ofertă'
    },
    ru: {
      title: 'Отраслевые решения',
      subtitle: 'Специализированные программы страхования, адаптированные к специфическим рискам каждой отрасли.',
      offers: [
        {
          id: 'saloane-auto',
          title: 'Автосалоны',
          desc: 'Оценка автомобилей на складе, гражданской ответственности и деятельности дилера. Имущество, риски и принимаемые условия подтверждаются в предложении.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto.html'
        },
        {
          id: 'companii-it',
          title: 'IT-компании',
          desc: 'Раздельная оценка профессиональных ошибок (E&O) и киберинцидентов. Деятельность, лимиты и исключения проверяются по документам.',
          image: '/it-companies.jpg',
          link: '/servicii/asigurare-raspundere-profesionala'
        },
        {
          id: 'regenerare-energie',
          title: 'Возобновляемая энергия',
          desc: 'Оценка проектов возобновляемой энергетики: оборудование, работы, эксплуатация и доходы. Условия по каждой части необходимо подтвердить отдельно.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/renewable-energy'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'Варианты льгот для сотрудников. Доступность продуктов, круг участников, услуги и лимиты проверяются до выбора.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'flote-auto',
          title: 'Корпоративный автопарк',
          desc: 'Оценка автопарка минимум из 5 автомобилей: ОСАГО, Зелёная карта, КАСКО, CMR и CARGO с учётом деятельности. Срок, доступные предложения и условия подтверждаются отдельно.',
          image: '/camionete.jpg',
          link: '/business/transport-logistica'
        },
        {
          id: 'drone-liability',
          title: 'Страхование ответственности дронов',
          desc: 'Проверка ответственности перед третьими лицами и возможных вариантов для самого дрона. Операции, территория и условия требуют подтверждения.',
          image: '/asigurare-drone-moldova/assets/business.webp',
          link: '/ru/asigurare-drone-moldova/'
        },
        {
          id: 'cyber-insurance',
          title: 'Киберстрахование',
          desc: 'Оценка киберинцидентов, данных и перерывов в работе сервисов. Не любой инцидент или расход автоматически принимается на страхование.',
          image: '/cyber-insurance-3.jpg',
          link: '/servicii/asigurare-cyber-moldova'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - Страхование CAR/EAR + Гарантии',
          desc: 'Раздельная оценка строительно-монтажных работ CAR/EAR и договорных гарантий. Принятие риска и требования финансирующей стороны проверяются для конкретного проекта.',
          image: '/Constructii-montaj.jpeg',
          link: '/construction-shield'
        }
      ],
      cta: 'Запросить предложение'
    },
    en: {
      title: 'Industry Solutions',
      subtitle: 'Specialized insurance programs tailored to the specific risks of each industry.',
      offers: [
        {
          id: 'saloane-auto',
          title: 'Auto Showrooms',
          desc: 'Assessment of vehicle stock, liability and dealership activities. The property, risks and accepted conditions must be confirmed in the proposal.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto.html'
        },
        {
          id: 'companii-it',
          title: 'IT Companies',
          desc: 'Separate assessment of professional errors (E&O) and cyber incidents. Check the activities, limits and exclusions in the actual documents.',
          image: '/it-companies.jpg',
          link: '/servicii/asigurare-raspundere-profesionala'
        },
        {
          id: 'regenerare-energie',
          title: 'Renewable Energy',
          desc: 'Assessment of renewable energy projects: equipment, construction, operation and revenue. Conditions for each component need separate confirmation.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/renewable-energy'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'Employee benefit options. Check product availability, eligible participants, services and limits before selecting an arrangement.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'flote-auto',
          title: 'Corporate Fleet Insurance',
          desc: 'Assessment of fleets with at least 5 vehicles: RCA, Green Card, CASCO, CMR and CARGO according to the activities. Timing, available proposals and conditions require separate confirmation.',
          image: '/camionete.jpg',
          link: '/business/transport-logistica'
        },
        {
          id: 'drone-liability',
          title: 'Drone Liability Insurance',
          desc: 'Review of third-party liability and possible options for the drone itself. Operations, territory and conditions need to be confirmed.',
          image: '/asigurare-drone-moldova/assets/business.webp',
          link: '/en/asigurare-drone-moldova/'
        },
        {
          id: 'cyber-insurance',
          title: 'Cyber Insurance',
          desc: 'Assessment of cyber incidents, data and service interruption. Not every incident or expense is automatically accepted for insurance.',
          image: '/cyber-insurance-3.jpg',
          link: '/servicii/asigurare-cyber-moldova'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - CAR/EAR Insurance + Bonds',
          desc: 'Separate assessment of CAR/EAR works and contractual guarantees. Risk acceptance and financing requirements must be checked for the actual project.',
          image: '/Constructii-montaj.jpeg',
          link: '/construction-shield'
        }
      ],
      cta: 'Request Quote'
    }
  };

  const c = content[lang];

  return (
    <main className="bg-white min-h-screen">
      <SEO 
        title={`${c.title} | Insurance ING Broker SRL`} 
        description={c.subtitle} 
        lang={lang} 
      />
      
      {/* Corporate Hero Section */}
      <section className="relative pt-64 pb-32 overflow-hidden mb-16 min-h-[600px] flex items-start">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/optimized-20261121-v1/solutii-1.webp"
            alt="Corporate Solutions" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0a192f]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent opacity-80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-white/70">
                {lang === 'ro' ? 'Soluții Sectoriale' : lang === 'ru' ? 'Отраслевые решения' : 'Industry Solutions'}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter mb-8 leading-[0.9]"
            >
              {c.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/60 font-display font-light leading-relaxed max-w-2xl"
            >
              {c.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.offers.map((offer, idx) => {
            return (
              <motion.div 
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
              >
                {offer.link && (offer.link.startsWith('http') || offer.link.endsWith('.html') || offer.link.endsWith('.pdf') || offer.link.startsWith('/')) ? (
                  <a 
                    href={offer.link.endsWith('.html') ? offer.link : localizedPath(offer.link, lang)}
                    target={(offer.link.endsWith('.html') || offer.link.endsWith('.pdf')) ? "_blank" : undefined}
                    rel={(offer.link.endsWith('.html') || offer.link.endsWith('.pdf')) ? "noopener noreferrer" : undefined}
                    className="flex flex-col flex-grow"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        style={offer.id === 'drone-liability' ? { objectPosition: 'center 25%' } : undefined}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                        {offer.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                        {offer.desc}
                      </p>
                      {offer.id === 'car-ear' && (
                        <div className="mb-6">
                          <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-primary/20">
                            {lang === 'ro' ? 'Vezi Detalii Construction Shield' : lang === 'ru' ? 'Подробнее о Construction Shield' : 'View Construction Shield Details'}
                          </button>
                        </div>
                      )}
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors mt-auto">
                        {c.cta}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </a>
                ) : (
                  <Link 
                    to={offer.link || "/contact"} 
                    className="flex flex-col flex-grow"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        style={offer.id === 'drone-liability' ? { objectPosition: 'center 25%' } : undefined}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                        {offer.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                        {offer.desc}
                      </p>
                      {offer.id === 'car-ear' && (
                        <div className="mb-6">
                          <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-primary/20">
                            {lang === 'ro' ? 'Vezi Detalii Construction Shield' : lang === 'ru' ? 'Подробнее о Construction Shield' : 'View Construction Shield Details'}
                          </button>
                        </div>
                      )}
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors mt-auto">
                        {c.cta}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
