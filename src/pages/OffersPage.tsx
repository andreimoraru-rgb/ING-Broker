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
      title: 'SoluÈii Sectoriale',
      subtitle: 'Programe de asigurare specializate, adaptate riscurilor specifice fiecÄrei industrii.',
      offers: [
        {
          id: 'saloane-auto',
          title: 'Saloane Auto',
          desc: 'Pachete complete de asigurare pentru dealeri auto, acoperind stocul de vehicule, rÄspunderea civilÄ Èi riscurile operaÈionale.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto.html'
        },
        {
          id: 'companii-it',
          title: 'Companii IT',
          desc: 'ProtecÈie specializatÄ pentru sectorul tehnologic, incluzÃ¢nd rÄspunderea profesionalÄ (E&O) Èi riscurile cibernetice.',
          image: '/it-companies.jpg',
          link: '/business/professional'
        },
        {
          id: 'regenerare-energie',
          title: 'Regenerare Energie',
          desc: 'AsigurÄri dedicate proiectelor de energie regenerabilÄ: parcuri eoliene, panouri solare Èi infrastructurÄ verde.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/oferte/energie-regenerabila'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'Programe de sÄnÄtate Èi viaÈÄ pentru angajaÈi, esenÈiale pentru retenÈia talentelor Ã®n sectorul IT Èi corporate.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'transportatori-auto',
          title: 'Transportatori Auto',
          desc: 'SoluÈii pentru flote comerciale Èi transportatori, acoperind marfa (CMR), vehiculele (CASCO) Èi rÄspunderea.',
          image: '/transportatori-auto.jpg'
        },
        {
          id: 'cyber-insurance',
          title: 'Cyber Insurance',
          desc: 'ProtecÈie avansatÄ Ã®mpotriva atacurilor cibernetice, scurgerilor de date Èi Ã®ntreruperii afacerii din cauze informatice.',
          image: '/cyber-insurance-3.jpg'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - Asigurare CAR/EAR + GaranÈii',
          desc: 'Pachet integrat All Risks pentru construcÈii Èi montaj, incluzÃ¢nd garanÈii contractuale (Bid/Performance/Advance Bonds). SoluÈie completÄ pentru proiecte finanÈate de BERD, FMI Èi bÄnci comerciale.',
          image: '/Constructii-montaj.jpeg',
          link: '/construction-shield'
        }
      ],
      cta: 'SolicitÄ OfertÄ'
    },
    ru: {
      title: 'ÐÑÑÐ°ÑÐ»ÐµÐ²ÑÐµ ÑÐµÑÐµÐ½Ð¸Ñ',
      subtitle: 'Ð¡Ð¿ÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐµ Ð¿ÑÐ¾Ð³ÑÐ°Ð¼Ð¼Ñ ÑÑÑÐ°ÑÐ¾Ð²Ð°Ð½Ð¸Ñ, Ð°Ð´Ð°Ð¿ÑÐ¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐµ Ðº ÑÐ¿ÐµÑÐ¸ÑÐ¸ÑÐµÑÐºÐ¸Ð¼ ÑÐ¸ÑÐºÐ°Ð¼ ÐºÐ°Ð¶Ð´Ð¾Ð¹ Ð¾ÑÑÐ°ÑÐ»Ð¸.',
      offers: [
        {
          id: 'saloane-auto',
          title: 'ÐÐ²ÑÐ¾ÑÐ°Ð»Ð¾Ð½Ñ',
          desc: 'ÐÐ¾Ð¼Ð¿Ð»ÐµÐºÑÐ½ÑÐµ Ð¿Ð°ÐºÐµÑÑ ÑÑÑÐ°ÑÐ¾Ð²Ð°Ð½Ð¸Ñ Ð´Ð»Ñ Ð°Ð²ÑÐ¾Ð´Ð¸Ð»ÐµÑÐ¾Ð², Ð¿Ð¾ÐºÑÑÐ²Ð°ÑÑÐ¸Ðµ ÑÐºÐ»Ð°Ð´ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»ÐµÐ¹, Ð³ÑÐ°Ð¶Ð´Ð°Ð½ÑÐºÑÑ Ð¾ÑÐ²ÐµÑÑÑÐ²ÐµÐ½Ð½Ð¾ÑÑÑ Ð¸ Ð¾Ð¿ÐµÑÐ°ÑÐ¸Ð¾Ð½Ð½ÑÐµ ÑÐ¸ÑÐºÐ¸.',
          image: '/salon-auto.jpg',
          link: '/saloane-auto.html'
        },
        {
          id: 'companii-it',
          title: 'IT-ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸',
          desc: 'Ð¡Ð¿ÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð¸ÑÐ¾Ð²Ð°Ð½Ð½Ð°Ñ Ð·Ð°ÑÐ¸ÑÐ° Ð´Ð»Ñ ÑÐµÑÐ½Ð¾Ð»Ð¾Ð³Ð¸ÑÐµÑÐºÐ¾Ð³Ð¾ ÑÐµÐºÑÐ¾ÑÐ°, Ð²ÐºÐ»ÑÑÐ°Ñ Ð¿ÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÑ Ð¾ÑÐ²ÐµÑÑÑÐ²ÐµÐ½Ð½Ð¾ÑÑÑ (E&O) Ð¸ ÐºÐ¸Ð±ÐµÑÑÐ¸ÑÐºÐ¸.',
          image: '/it-companies.jpg',
          link: '/business/professional'
        },
        {
          id: 'regenerare-energie',
          title: 'ÐÐ¾Ð·Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÐ¼Ð°Ñ ÑÐ½ÐµÑÐ³Ð¸Ñ',
          desc: 'Ð¡ÑÑÐ°ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ Ð¿ÑÐ¾ÐµÐºÑÐ¾Ð² Ð²Ð¾Ð·Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÐ¼Ð°Ñ ÑÐ½ÐµÑÐ³ÐµÑÐ¸ÐºÐ¸: Ð²ÐµÑÑÐ¾Ð¿Ð°ÑÐºÐ¾Ð², ÑÐ¾Ð»Ð½ÐµÑÐ½ÑÑ Ð¿Ð°Ð½ÐµÐ»ÐµÐ¹ Ð¸ Ð·ÐµÐ»ÐµÐ½Ð¾Ð¹ Ð¸Ð½ÑÑÐ°ÑÑÑÑÐºÑÑÑÑ.',
          image: '/Wind-Turbines---Energy.jpg',
          link: '/ru/predlozheniya/vozobnovlyaemaya-energetika'
        },
        {
          id: 'employee-benefits',
          title: 'Employee Benefits',
          desc: 'ÐÑÐ¾Ð³ÑÐ°Ð¼Ð¼Ñ ÑÑÑÐ°ÑÐ¾Ð²Ð°Ð½Ð¸Ñ Ð·Ð´Ð¾ÑÐ¾Ð²ÑÑ Ð¸ Ð¶Ð¸Ð·Ð½Ð¸ Ð´Ð»Ñ ÑÐ¾ÑÑÑÐ´Ð½Ð¸ÐºÐ¾Ð², Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼ÑÐµ Ð´Ð»Ñ ÑÐ´ÐµÑÐ¶Ð°Ð½Ð¸Ñ ÑÐ°Ð»Ð°Ð½ÑÐ¾Ð² Ð² ÐÐ¢ Ð¸ ÐºÐ¾ÑÐ¿Ð¾ÑÐ°ÑÐ¸Ð²Ð½Ð¾Ð¼ ÑÐµÐºÑÐ¾ÑÐµ.',
          image: '/employer.jpg',
          link: '/business/benefits'
        },
        {
          id: 'transportatori-auto',
          title: 'ÐÐ²ÑÐ¾Ð¿ÐµÑÐµÐ²Ð¾Ð·ÑÐ¸ÐºÐ¸',
          desc: 'Ð ÐµÑÐµÐ½Ð¸Ñ Ð´Ð»Ñ ÐºÐ¾Ð¼Ð¼ÐµÑÑÐµÑÐºÐ¸Ñ Ð°Ð²ÑÐ¾Ð¿Ð°ÑÐºÐ¾Ð² Ð¸ Ð¿ÐµÑÐµÐ²Ð¾Ð·ÑÐ¸ÐºÐ¾Ð², Ð¿Ð¾ÐºÑÑÐ²Ð°ÑÑÐ¸Ðµ Ð³ÑÑÐ·Ñ (CMR), ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ½ÑÐµ ÑÑÐµÐ´ÑÑÐ²Ð° (CASCO) Ð¸ Ð¾ÑÐ²ÐµÑÑÑÐ²ÐµÐ½Ð½Ð¾ÑÑÑ.',
          image: '/transportatori-auto.jpg'
        },
        {
          id: 'cyber-insurance',
          title: 'ÐÐ¸Ð±ÐµÑÑÑÑÐ°ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ',
          desc: 'ÐÐµÑÐµÐ´Ð¾Ð²Ð°Ñ Ð·Ð°ÑÐ¸ÑÐ° Ð¾Ñ ÐºÐ¸Ð±ÐµÑÐ°ÑÐ°Ðº, ÑÑÐµÑÐµÐº Ð´Ð°Ð½Ð½ÑÑ Ð¸ Ð¿ÑÐµÑÑÐ²Ð°Ð½Ð¸Ñ Ð±Ð¸Ð·Ð½ÐµÑÐ° Ð¿Ð¾ ÐÐ¢-Ð¿ÑÐ¸ÑÐ¸Ð½Ð°Ð¼.',
          image: '/cyber-insurance-3.jpg'
        },
        {
          id: 'car-ear',
          title: 'Construction Shield 360 - Ð¡ÑÑÐ°ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ CAR/EAR + ÐÐ°ÑÐ°Ð½ÑÐ¸Ð¸',
          desc: 'ÐÐ½ÑÐµÐ³ÑÐ¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ Ð¿Ð°ÐºÐµÑ All Risks Ð´Ð»Ñ ÑÑÑÐ¾Ð¸ÑÐµÐ»ÑÐ½Ð¾-Ð¼Ð¾Ð½ÑÐ°Ð¶Ð½ÑÑ ÑÐ°Ð±Ð¾Ñ, Ð²ÐºÐ»ÑÑÐ°Ñ ÐºÐ¾Ð½ÑÑÐ°ÐºÑÐ½ÑÐµ Ð³Ð°ÑÐ°Ð½ÑÐ¸Ð¸ (Bid/Performance/Advance Bonds). Ð ÐµÑÐµÐ½Ð¸Ðµ Ð´Ð»Ñ Ð¿ÑÐ¾ÐµÐºÑÐ¾Ð², ÑÐ¸Ð½Ð°Ð½ÑÐ¸ÑÑÐµÐ¼ÑÑ ÐÐÐ Ð , ÐÐÐ¤ Ð¸ Ð±Ð°Ð½ÐºÐ°Ð¼Ð¸.',
          image: '/Constructii-montaj.jpeg',
          link: '/construction-shield'
        }
      ],
      cta: 'ÐÐ°Ð¿ÑÐ¾ÑÐ¸ÑÑ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ'
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
          link: '/en/offers/renewable-energy'
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
                {lang === 'ro' ? 'SoluÈii Sectoriale' : lang === 'ru' ? 'ÐÑÑÐ°ÑÐ»ÐµÐ²ÑÐµ ÑÐµÑÐµÐ½Ð¸Ñ' : 'Industry Solutions'}
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
                            {lang === 'ro' ? 'Vezi Detalii Construction Shield' : lang === 'ru' ? 'ÐÐ¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ Ð¾ Construction Shield' : 'View Construction Shield Details'}
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
                            {lang === 'ro' ? 'Vezi Detalii Construction Shield' : lang === 'ru' ? 'ÐÐ¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ Ð¾ Construction Shield' : 'View Construction Shield Details'}
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
