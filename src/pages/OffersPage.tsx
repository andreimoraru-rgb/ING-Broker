import React, { useEffect } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          desc: 'Pachete complete de asigurare pentru dealeri auto, acoperind stocul de vehicule, răspunderea civilă și riscurile operaționale.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto.html'
        },
        {
          id: 'companii-it',
          title: 'Companii IT',
          desc: 'Protecție specializată pentru sectorul tehnologic, incluzând răspunderea profesională (E&O) și riscurile cibernetice.',
          image: '/it-companies.jpg',
          link: '/business/professional'
        },
        {
          id: 'regenerare-energie',
          title: 'Regenerare Energie',
          desc: 'Asigurări dedicate proiectelor de energie regenerabilă: parcuri eoliene, panouri solare și infrastructură verde.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/Securing_Renewable_Capital_(3).pdf'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'Programe de sănătate și viață pentru angajați, esențiale pentru retenția talentelor în sectorul IT și corporate.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'transportatori-auto',
          title: 'Transportatori Auto',
          desc: 'Soluții pentru flote comerciale și transportatori, acoperind marfa (CMR), vehiculele (CASCO) și răspunderea.',
          image: '/transportatori-auto.jpg'
        },
        {
          id: 'cyber-insurance',
          title: 'Cyber Insurance',
          desc: 'Protecție avansată împotriva atacurilor cibernetice, scurgerilor de date și întreruperii afacerii din cauze informatice.',
          image: '/cyber-insurance-3.jpg'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - Asigurare CAR/EAR + Garanții',
          desc: 'Pachet integrat All Risks pentru construcții și montaj, incluzând garanții contractuale (Bid/Performance/Advance Bonds). Soluție completă pentru proiecte finanțate de BERD, FMI și bănci comerciale.',
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
          desc: 'Комплексные пакеты страхования для автодилеров, покрывающие склад автомобилей, гражданскую ответственность и операционные риски.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto.html'
        },
        {
          id: 'companii-it',
          title: 'IT-компании',
          desc: 'Специализированная защита для технологического сектора, включая профессиональную ответственность (E&O) и киберриски.',
          image: '/it-companies.jpg',
          link: '/business/professional'
        },
        {
          id: 'regenerare-energie',
          title: 'Возобновляемая энергия',
          desc: 'Страхование проектов возобновляемая энергетики: ветропарков, солнечных панелей и зеленой инфраструктуры.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/Securing_Renewable_Capital_(3).pdf'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'Программы страхования здоровья и жизни для сотрудников, необходимые для удержания талантов в ИТ и корпоративном секторе.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'transportatori-auto',
          title: 'Автоперевозчики',
          desc: 'Решения для коммерческих автопарков и перевозчиков, покрывающие грузы (CMR), транспортные средства (CASCO) и ответственность.',
          image: '/transportatori-auto.jpg'
        },
        {
          id: 'cyber-insurance',
          title: 'Киберстрахование',
          desc: 'Передовая защита от кибератак, утечек данных и прерывания бизнеса по ИТ-причинам.',
          image: '/cyber-insurance-3.jpg'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - Страхование CAR/EAR + Гарантии',
          desc: 'Интегрированный пакет All Risks для строительно-монтажных работ, включая контрактные гарантии (Bid/Performance/Advance Bonds). Решение для проектов, финансируемых ЕБРР, МВФ и банками.',
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
          desc: 'Comprehensive insurance packages for auto dealers, covering vehicle inventory, liability, and operational risks.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto.html'
        },
        {
          id: 'companii-it',
          title: 'IT Companies',
          desc: 'Specialized protection for the technology sector, including professional liability (E&O) and cyber risks.',
          image: '/it-companies.jpg',
          link: '/business/professional'
        },
        {
          id: 'regenerare-energie',
          title: 'Renewable Energy',
          desc: 'Insurance dedicated to renewable energy projects: wind farms, solar panels, and green infrastructure.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/Securing_Renewable_Capital_(3).pdf'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'Health and life insurance programs for employees, essential for talent retention in the IT and corporate sectors.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'transportatori-auto',
          title: 'Auto Transporters',
          desc: 'Solutions for commercial fleets and transporters, covering cargo (CMR), vehicles (CASCO), and liability.',
          image: '/transportatori-auto.jpg'
        },
        {
          id: 'cyber-insurance',
          title: 'Cyber Insurance',
          desc: 'Advanced protection against cyber attacks, data breaches, and IT-related business interruption.',
          image: '/cyber-insurance-3.jpg'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - CAR/EAR Insurance + Bonds',
          desc: 'Integrated All Risks package for construction and erection works, including contractual guarantees (Bid/Performance/Advance Bonds). Complete solution for projects funded by EBRD, IMF, and banks.',
          image: '/Constructii-montaj.jpeg',
          link: '/construction-shield'
        }
      ],
      cta: 'Request Quote'
    }
  };

  const c = content[lang];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${c.title} | Insurance ING Broker SRL`} 
        description={c.subtitle} 
        lang={lang} 
      />
      
      {/* Corporate Hero Section */}
      <section className="relative pt-64 pb-32 overflow-hidden mb-16 min-h-[600px] flex items-start">
        <div className="absolute inset-0 z-0">
          <img 
            src="/solutii-1.png" 
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
                {offer.link && (offer.link.startsWith('http') || offer.link.endsWith('.html') || offer.link.endsWith('.pdf')) ? (
                  <a 
                    href={offer.link}
                    target={(offer.link.endsWith('.html') || offer.link.endsWith('.pdf')) ? "_blank" : undefined}
                    rel={(offer.link.endsWith('.html') || offer.link.endsWith('.pdf')) ? "noopener noreferrer" : undefined}
                    className="flex flex-col flex-grow"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
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
    </div>
  );
};
