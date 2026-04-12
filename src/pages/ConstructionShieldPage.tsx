import React, { useEffect } from 'react';
import { motion } from 'motion/react';
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
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Language } from '../translations';

interface ConstructionShieldPageProps {
  lang: Language;
}

export const ConstructionShieldPage: React.FC<ConstructionShieldPageProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    ro: {
      title: 'Construction Shield 360',
      subtitle: 'CAR/EAR + Bonds | ING Broker Moldova',
      heroTitle: 'Asigurare Construcții-Montaj + Garanții',
      heroDesc: 'Pachet integrat CAR/EAR + Bid/Performance/Advance Bonds. Acoperire All Risks. Emitere garanții în 24-48 ore. Conformitate donatori internaționali.',
      cta: 'Solicită Ofertă',
      details: 'Detalii Produs',
      stats: [
        { val: '24-48h', label: 'Emitere Bonds' },
        { val: '€500K+', label: 'Limită maximă' },
        { val: '8+', label: 'Ani experiență' }
      ],
      ebrdTitle: 'Companiile finanțate de BERD, FMI și bănci sunt obligate să dețină asigurare CAR/EAR',
      ebrdDesc: 'Toate contractele de construcții finanțate prin credite internaționale sau bancare conțin clauze obligatorii. Fără polița CAR/EAR, finanțarea nu se debursează.',
      productsTitle: 'O platformă - 6 instrumente',
      productsSubtitle: 'Construction Shield 360 combină asigurarea All Risks cu garanții contractuale într-un singur pachet modular.',
      products: [
        { title: 'All Risks - Secțiunea I', desc: 'Acoperire pentru lucrări, materiale pe șantier, structuri temporare. Protejează investiția.', tag: 'CAR/EAR' },
        { title: 'Răspundere Terți - Sect. II', desc: 'Vătămări corporale și daune materiale terți. Reduce risc litigii.', tag: 'TPL' },
        { title: 'Bid + Performance + Advance', desc: 'Garanție ofertă (24h) + bună execuție până la 15%. Acces rapid licitații MTender.', tag: 'BONDS' },
        { title: 'Retention + Customs', desc: 'Eliberarea retențiilor și garanție vamală globală. Optimizează cash-flow.', tag: 'BONDS' },
        { title: 'DSU / ALoP', desc: 'Pierderi din întârzierea punerii în funcțiune. Protejează cash-flow-ul investitorilor.', tag: 'OPTIONAL' },
        { title: 'Donor Compliance Pack', desc: 'BO, screening sancțiuni, FIDIC - EBRD, EIB, World Bank.', tag: 'OPTIONAL' }
      ],
      risksTitle: 'Riscuri acoperite',
      risks: [
        { title: 'Incendiu, explozie, fulger', desc: 'Distrugeri la lucrări și materiale' },
        { title: 'Furtuni, inundații, seisme', desc: 'Fenomene atmosferice, alunecări teren' },
        { title: 'Avarii accidentale', desc: 'Daune structuri în timpul execuției' },
        { title: 'Furt, vandalism', desc: 'Pierderi materiale și echipamente' }
      ],
      pricingTitle: 'Preț transparent - pe niveluri',
      pricing: [
        { tier: 'Tier A', name: 'Top Contractor', range: '0,2% - 0,6%', items: ['Istoric impecabil', 'Capitalizare solidă', 'Contracte FIDIC'] },
        { tier: 'Tier B', name: 'Mid Contractor', range: '0,6% - 1,5%', items: ['CAR/EAR inclus', 'TPL până la €500K', 'Emitere prioritară 24h'], popular: true },
        { tier: 'Tier C', name: 'Entry / Special', range: '1,5% - 4,0%', items: ['CAR + TPL + DSU', 'Conformitate donor', 'Companie nouă'] }
      ]
    },
    ru: {
      title: 'Construction Shield 360',
      subtitle: 'CAR/EAR + Bonds | ING Broker Moldova',
      heroTitle: 'Страхование Строительства + Гарантии',
      heroDesc: 'Интегрированный пакет CAR/EAR + Bid/Performance/Advance Bonds. Покрытие All Risks. Выдача гарантий за 24-48 часов. Соответствие международным донорам.',
      cta: 'Запросить предложение',
      details: 'Детали',
      stats: [
        { val: '24-48ч', label: 'Выдача гарантий' },
        { val: '€500K+', label: 'Макс. лимит' },
        { val: '8+', label: 'Лет опыта' }
      ],
      ebrdTitle: 'Компании, финансируемые ЕБРР, МВФ и банками, обязаны иметь страхование CAR/EAR',
      ebrdDesc: 'Все строительные контракты с международным финансированием содержат обязательные страховые условия. Без полиса CAR/EAR финансирование не выделяется.',
      productsTitle: 'Одна платформа - 6 инструментов',
      productsSubtitle: 'Construction Shield 360 объединяет страхование All Risks с контрактными гарантиями в единый модульный пакет.',
      products: [
        { title: 'All Risks - Секция I', desc: 'Покрытие для работ, материалов, временных конструкций. Защищает инвестиции.', tag: 'CAR/EAR' },
        { title: 'Ответственность - Секц. II', desc: 'Телесные повреждения и ущерб третьих лиц. Снижает риск споров.', tag: 'TPL' },
        { title: 'Bid + Performance + Advance', desc: 'Тендерная гарантия (24ч) + исполнение до 15%. Быстрый доступ к тендерам.', tag: 'BONDS' },
        { title: 'Retention + Customs', desc: 'Освобождение удержаний и таможенная гарантия. Оптимизирует кэш-флоу.', tag: 'BONDS' },
        { title: 'DSU / ALoP', desc: 'Убытки от задержки ввода в эксплуатацию. Защищает инвесторов.', tag: 'ОПЦИЯ' },
        { title: 'Donor Compliance Pack', desc: 'BO, санкции, FIDIC - EBRD, EIB, World Bank.', tag: 'ОПЦИЯ' }
      ],
      risksTitle: 'Покрываемые риски',
      risks: [
        { title: 'Пожар, взрыв, молния', desc: 'Разрушения на объекте и материалов' },
        { title: 'Штормы, наводнения, землетрясения', desc: 'Атмосферные явления, оползни' },
        { title: 'Случайные аварии', desc: 'Повреждения конструкций при выполнении' },
        { title: 'Кража, вандализм', desc: 'Потери материалов и оборудования' }
      ],
      pricingTitle: 'Прозрачные цены - по уровням',
      pricing: [
        { tier: 'Уровень A', name: 'Top Contractor', range: '0,2% - 0,6%', items: ['Безупречная история', 'Надежная капитализация', 'Контракты FIDIC'] },
        { tier: 'Уровень B', name: 'Mid Contractor', range: '0,6% - 1,5%', items: ['CAR/EAR включено', 'TPL до €500K', 'Приоритет 24ч'], popular: true },
        { tier: 'Уровень C', name: 'Entry / Special', range: '1,5% - 4,0%', items: ['CAR + TPL + DSU', 'Комплаенс донора', 'Новая компания'] }
      ]
    },
    en: {
      title: 'Construction Shield 360',
      subtitle: 'CAR/EAR + Bonds | ING Broker Moldova',
      heroTitle: 'Construction Insurance + Guarantees',
      heroDesc: 'Integrated CAR/EAR + Bid/Performance/Advance Bonds package. All Risks coverage. Bond issuance in 24-48 hours. International donor compliance.',
      cta: 'Request Quote',
      details: 'Product Details',
      stats: [
        { val: '24-48h', label: 'Bond Issuance' },
        { val: '€500K+', label: 'Max Limit' },
        { val: '8+', label: 'Years Experience' }
      ],
      ebrdTitle: 'Companies funded by EBRD, IMF, and banks are required to have CAR/EAR insurance',
      ebrdDesc: 'All construction contracts funded by international or bank loans contain mandatory insurance clauses. Without a CAR/EAR policy, funding is not disbursed.',
      productsTitle: 'One Platform - 6 Tools',
      productsSubtitle: 'Construction Shield 360 combines All Risks insurance with contractual guarantees in a single modular package.',
      products: [
        { title: 'All Risks - Section I', desc: 'Coverage for works, site materials, temporary structures. Protects investment.', tag: 'CAR/EAR' },
        { title: 'Third Party Liability - Sect. II', desc: 'Bodily injury and property damage to third parties. Reduces litigation risk.', tag: 'TPL' },
        { title: 'Bid + Performance + Advance', desc: 'Bid bond (24h) + performance bond up to 15%. Fast access to MTender auctions.', tag: 'BONDS' },
        { title: 'Retention + Customs', desc: 'Release of retentions and global customs guarantee. Optimizes cash flow.', tag: 'BONDS' },
        { title: 'DSU / ALoP', desc: 'Loss of profits from delayed commissioning. Protects investor cash flow.', tag: 'OPTIONAL' },
        { title: 'Donor Compliance Pack', desc: 'BO, sanctions screening, FIDIC - EBRD, EIB, World Bank.', tag: 'OPTIONAL' }
      ],
      risksTitle: 'Covered Risks',
      risks: [
        { title: 'Fire, Explosion, Lightning', desc: 'Damage to works and materials' },
        { title: 'Storms, Floods, Earthquakes', desc: 'Atmospheric phenomena, landslides' },
        { title: 'Accidental Damage', desc: 'Structural damage during execution' },
        { title: 'Theft, Vandalism', desc: 'Loss of materials and equipment' }
      ],
      pricingTitle: 'Transparent Pricing - Tiers',
      pricing: [
        { tier: 'Tier A', name: 'Top Contractor', range: '0.2% - 0.6%', items: ['Impeccable history', 'Solid capitalization', 'FIDIC contracts'] },
        { tier: 'Tier B', name: 'Mid Contractor', range: '0.6% - 1.5%', items: ['CAR/EAR included', 'TPL up to €500K', '24h priority issuance'], popular: true },
        { tier: 'Tier C', name: 'Entry / Special', range: '1.5% - 4.0%', items: ['CAR + TPL + DSU', 'Donor compliance', 'New company'] }
      ]
    }
  };

  const c = t[lang];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <SEO 
        title={c.title} 
        description={c.heroDesc} 
        lang={lang} 
      />

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
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                {c.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-md">
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
                {lang === 'ro' ? 'Cerință Obligatorie' : lang === 'ru' ? 'Обязательное требование' : 'Mandatory Requirement'}
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
      <section className="py-32 max-w-7xl mx-auto px-6">
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
                <div className="text-4xl font-bold mb-1">All Risks</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-70">Coverage Standard</div>
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
                    Popular
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
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
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
            {lang === 'ro' ? 'Solicită o consultație gratuită. Analizăm documentația și emitem garanțiile înainte de deadline.' : lang === 'ru' ? 'Запросите бесплатную консультацию. Мы проанализируем документацию и выдадим гарантии до дедлайна.' : 'Request a free consultation. We analyze documentation and issue guarantees before the deadline.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-5 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all shadow-2xl">
              {c.cta}
            </button>
            <button className="px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <Phone size={20} />
              {lang === 'ro' ? 'Sună acum' : lang === 'ru' ? 'Позвонить' : 'Call now'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-white/40 text-xs">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              9, str. Pan Halippa, Chisinau, R. Moldova
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
