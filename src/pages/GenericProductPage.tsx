import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { translations, Language, productTranslations } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Target, Scale, FileCheck, Headset, TrendingUp, Award, Zap, Briefcase, BarChart } from 'lucide-react';

interface GenericProductPageProps {
  lang: Language;
}

export const GenericProductPage: React.FC<GenericProductPageProps> = ({ lang }) => {
  const { category, productId } = useParams<{ category: string, productId: string }>();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [productId]);

  let product: any = null;
  let backLink = '/';
  let backLabel = lang === 'ro' ? 'Înapoi la Personal' : lang === 'ru' ? 'Назад к Персональному' : 'Back to Personal';

  if (category === 'personal') {
    product = productTranslations[lang].find(p => p.id === productId);
    backLink = '/#personal';
  } else if (category === 'business') {
    product = translations[lang].business.lines.find(p => p.id === productId);
    backLink = '/business';
    backLabel = lang === 'ro' ? 'Înapoi la Business' : lang === 'ru' ? 'Назад к Бизнесу' : 'Back to Business';
  } else if (category === 'reinsurance') {
    product = translations[lang].reinsurance.lines.find(p => p.id === productId);
    backLink = '/reinsurance';
    backLabel = lang === 'ro' ? 'Înapoi la Reasigurări' : lang === 'ru' ? 'Назад к Перестрахованию' : 'Back to Reinsurance';
  }

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const productTitle = product.title;
  const productDesc = product.description || product.desc;
  const seoTitle = product.seoTitle || `${productTitle} | ING Broker`;
  const seoDesc = product.seoDescription || productDesc;
  const image = product.image;
  const link = product.link;
  const analysis = product.analysis || (translations[lang] as any)[productId]?.analysis;

  const getContent = () => {
    if (lang === 'ro') {
      return {
        intro: `Asigurarea pentru ${productTitle} reprezintă un instrument financiar strategic, esențial pentru protejarea capitalului și garantarea continuității operaționale. Într-un mediu de afaceri marcat de volatilitate, transferul riscurilor majore către un asigurător solid nu este doar o măsură de prudență, ci o cerință de guvernanță corporativă. ${productDesc} Acest produs este structurat pentru a absorbi șocurile financiare generate de evenimente imprevizibile, protejând bilanțul companiei și menținând încrederea acționarilor și a partenerilor de afaceri.`,
        roleMoldova: `Pe piața din Republica Moldova, expusă la riscuri specifice de tranziție și vulnerabilități regionale, ${productTitle} acționează ca un scut vital. Conform cerințelor prudențiale și de guvernanță, companiile trebuie să demonstreze reziliență. Această poliță facilitează accesul la finanțare bancară, participarea la licitații publice și atragerea investițiilor străine, demonstrând un management al riscului matur și aliniat la standardele europene.`,
        roleBroker: `În calitate de broker autorizat, Insurance ING Broker SRL acționează exclusiv în interesul dumneavoastră. Efectuăm un audit de risc riguros, structurăm programul de asigurare și negociem termeni derogatorii cu asigurătorii de top. Valoarea noastră adăugată maximă se reflectă în gestionarea daunelor: instrumentăm dosarul, purtăm corespondența tehnică și ne asigurăm că despăgubirea este plătită integral și la timp, conform obligațiilor contractuale.`,
        advantages: [
          `Protecție directă a capitalului și a fluxului de numerar în scenarii de criză.`,
          `Polițe "Tailor-Made", structurate pe baza analizei de risc specifice industriei.`,
          `Asistență juridică și reprezentare tehnică pe toată durata contractului.`,
          `Îndeplinirea cerințelor de conformitate solicitate de bănci și investitori.`,
          `Management externalizat al daunelor prin departamentul nostru specializat.`,
          `Optimizarea bugetului de asigurări prin negociere profesionistă.`
        ],
        risks: `Polița acoperă un spectru larg de expuneri critice: de la daune materiale directe (incendiu, explozie, calamități naturale), la pierderi financiare consecutive (întreruperea activității) și angajarea răspunderii civile sau profesionale față de terți. Structura acoperirii este calibrată pentru a preveni riscul de insolvență generat de evenimente catastrofale sau erori operaționale majore.`,
        riskAnalysisTitle: 'Analiza Riscurilor',
        exceptions: `Pentru o transparență totală și conform practicilor internaționale, excluderile standard vizează: prejudiciile cauzate cu intenție de către asigurat, uzura naturală și defectele de fabricație, riscurile de război, terorism sau radiații nucleare (exceptând cazurile cu clauze speciale de raliere), precum și amenzile sau penalitățile penale.`,
        claimsProcess: `Gestionarea daunelor este prioritatea noastră zero. La producerea riscului asigurat, echipa noastră intervine imediat pentru avizarea daunei, organizarea constatărilor cu experți independenți și asistența în întocmirea devizelor. Monitorizăm strict respectarea termenelor legale de plată de către asigurător, garantând o soluționare echitabilă și rapidă.`,
        legislation: `Produsul este avizat și structurat în strictă conformitate cu Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare și actele normative emise de Banca Națională a Moldovei (BNM). Aceasta garantează un cadru legal sigur, protecția drepturilor dumneavoastră în calitate de consumator și certitudinea solvabilității asigurătorului.`,
        ctaTitle: `Solicită o Ofertă Personalizată pentru ${productTitle}`,
        ctaDesc: `Nu lăsați neprevăzutul să vă dicteze viitorul. Protejați-vă afacerea și activele cu o soluție de asigurare robustă, intermediată de profesioniști. Contactați-ne astăzi pentru o evaluare gratuită a riscurilor și o ofertă croită pe nevoile dumneavoastră.`,
        company: 'Insurance ING Broker SRL',
        phone: '+37369526003',
        email: 'andrei.moraru@ingbroker.md',
        btnText: 'SOLICITĂ OFERTA ACUM'
      };
    } else if (lang === 'ru') {
      return {
        intro: `Страхование ${productTitle} представляет собой стратегический финансовый инструмент, необходимый для защиты капитала и обеспечения непрерывности деятельности. В условиях волатильной бизнес-среды передача крупных рисков надежному страховщику - это не просто мера предосторожности, а требование корпоративного управления. ${productDesc} Этот продукт структурирован для поглощения финансовых шоков, вызванных непредвиденными событиями, защищая баланс компании и поддерживая доверие акционеров и деловых партнеров.`,
        roleMoldova: `На рынке Республики Молдова, подверженном специфическим переходным рискам и региональным уязвимостям, ${productTitle} действует как жизненно важный щит. В соответствии с пруденциальными требованиями, компании должны демонстрировать устойчивость. Этот полис облегчает доступ к банковскому финансированию, участие в государственных тендерах и привлечение иностранных инвестиций, демонстрируя зрелое управление рисками, соответствующее европейским стандартам.`,
        roleBroker: `Как лицензированный брокер, Insurance ING Broker SRL действует исключительно в ваших интересах. Мы проводим строгий аудит рисков, структурируем программу страхования и ведем переговоры об особых условиях с ведущими страховщиками. Наша максимальная добавленная стоимость отражается в урегулировании убытков: мы формируем дело, ведем техническую переписку и гарантируем, что компенсация будет выплачена в полном объеме и в срок, согласно договорным обязательствам.`,
        advantages: [
          `Прямая защита капитала и денежных потоков в кризисных сценариях.`,
          `Полисы "Tailor-Made", структурированные на основе анализа рисков конкретной отрасли.`,
          `Юридическая поддержка и техническое представительство на протяжении всего срока действия договора.`,
          `Выполнение требований комплаенса, запрашиваемых банками и инвесторами.`,
          `Аутсорсинг управления убытками через наш специализированный отдел.`,
          `Оптимизация страхового бюджета путем профессиональных переговоров.`
        ],
        risks: `Полис покрывает широкий спектр критических рисков: от прямого материального ущерба (пожар, взрыв, стихийные бедствия) до косвенных финансовых потерь (перерыв в производстве) и гражданской или профессиональной ответственности перед третьими лицами. Структура покрытия откалибрована для предотвращения риска неплатежеспособности, вызванного катастрофическими событиями или крупными операционными ошибками.`,
        riskAnalysisTitle: 'Анализ Рисков',
        exceptions: `Для полной прозрачности и в соответствии с международной практикой, стандартные исключения касаются: умышленного ущерба, причиненного страхователем, естественного износа и производственных дефектов, рисков войны, терроризма или ядерной радиации (за исключением случаев со специальными оговорками), а также штрафов или уголовных наказаний.`,
        claimsProcess: `Урегулирование убытков - наш главный приоритет. При наступлении страхового случая наша команда немедленно вмешивается для уведомления об ущербе, организации осмотров с независимыми экспертами и помощи в составлении смет. Мы строго следим за соблюдением страховщиком установленных законом сроков выплаты, гарантируя справедливое и быстрое решение.`,
        legislation: `Продукт утвержден и структурирован в строгом соответствии с Законом № 92/2022 о страховой и перестраховочной деятельности и нормативными актами, изданными Национальным банком Молдовы (НБМ). Это гарантирует надежную правовую базу, защиту ваших прав как потребителя и уверенность в платежеспособности страховщика.`,
        ctaTitle: `Запросите индивидуальное предложение для ${productTitle}`,
        ctaDesc: `Не позволяйте непредвиденным обстоятельствам диктовать ваше будущее. Защитите свой бизнес и активы с помощью надежного страхового решения при посредничестве профессионалов. Свяжитесь с нами сегодня для бесплатной оценки рисков и предложения, адаптированного к вашим потребностям.`,
        company: 'Insurance ING Broker SRL',
        phone: '+37369526003',
        email: 'andrei.moraru@ingbroker.md',
        btnText: 'ЗАПРОСИТЬ ПРЕДЛОЖЕНИЕ СЕЙЧАС'
      };
    } else {
      return {
        intro: `Insurance for ${productTitle} represents a strategic financial instrument, essential for protecting capital and guaranteeing operational continuity. In a business environment marked by volatility, transferring major risks to a solid insurer is not just a precautionary measure, but a corporate governance requirement. ${productDesc} This product is structured to absorb financial shocks generated by unforeseen events, protecting the company's balance sheet and maintaining the trust of shareholders and business partners.`,
        roleMoldova: `In the Republic of Moldova's market, exposed to specific transition risks and regional vulnerabilities, ${productTitle} acts as a vital shield. According to prudential and governance requirements, companies must demonstrate resilience. This policy facilitates access to bank financing, participation in public tenders, and attracting foreign investments, demonstrating mature risk management aligned with European standards.`,
        roleBroker: `As a licensed broker, Insurance ING Broker SRL acts exclusively in your interest. We conduct a rigorous risk audit, structure the insurance program, and negotiate derogatory terms with top insurers. Our maximum added value is reflected in claims management: we handle the file, conduct technical correspondence, and ensure that the compensation is paid in full and on time, according to contractual obligations.`,
        advantages: [
          `Direct protection of capital and cash flow in crisis scenarios.`,
          `"Tailor-Made" policies, structured based on industry-specific risk analysis.`,
          `Legal assistance and technical representation throughout the contract duration.`,
          `Fulfillment of compliance requirements requested by banks and investors.`,
          `Outsourced claims management through our specialized department.`,
          `Optimization of the insurance budget through professional negotiation.`
        ],
        risks: `The policy covers a wide spectrum of critical exposures: from direct material damage (fire, explosion, natural disasters), to consequential financial losses (business interruption) and civil or professional liability towards third parties. The coverage structure is calibrated to prevent the risk of insolvency generated by catastrophic events or major operational errors.`,
        riskAnalysisTitle: 'Risk Analysis',
        exceptions: `For total transparency and in accordance with international practices, standard exclusions target: damages caused intentionally by the insured, natural wear and tear and manufacturing defects, risks of war, terrorism, or nuclear radiation (except for cases with special buy-back clauses), as well as fines or criminal penalties.`,
        claimsProcess: `Claims management is our top priority. Upon the occurrence of the insured risk, our team intervenes immediately to notify the claim, organize assessments with independent experts, and assist in drafting estimates. We strictly monitor the insurer's compliance with legal payment deadlines, guaranteeing a fair and swift resolution.`,
        legislation: `The product is approved and structured in strict compliance with Law No. 92/2022 on insurance and reinsurance activity and the normative acts issued by the National Bank of Moldova (NBM). This guarantees a secure legal framework, the protection of your rights as a consumer, and the certainty of the insurer's solvency.`,
        ctaTitle: `Request a Custom Quote for ${productTitle}`,
        ctaDesc: `Don't let the unexpected dictate your future. Protect your business and assets with a robust insurance solution, brokered by professionals. Contact us today for a free risk assessment and a quote tailored to your needs.`,
        company: 'Insurance ING Broker SRL',
        phone: '+37369526003',
        email: 'andrei.moraru@ingbroker.md',
        btnText: 'REQUEST QUOTE NOW'
      };
    }
  };

  const content = getContent();

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={seoTitle} 
        description={seoDesc} 
        lang={lang} 
      />
      
      {/* Back Button */}
      <div className="fixed top-32 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(backLink)}
          className={`flex items-center gap-4 px-6 py-3 backdrop-blur-md border rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl group ${
            isScrolled 
              ? 'bg-white border-gray-200 text-secondary hover:bg-gray-50' 
              : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
          }`}
        >
          <div className={`p-1 group-hover:-translate-x-1 transition-transform ${
            isScrolled ? 'text-primary' : 'text-primary'
          }`}>
            <ArrowLeft size={16} strokeWidth={3} />
          </div>
          <span>
            {backLabel}
          </span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-start pt-64 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={productTitle} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply" />
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
                {category === 'personal' ? 'Personal Solutions' : category === 'business' ? 'Business Solutions' : 'Reinsurance Solutions'}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              {productTitle.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-primary italic font-serif normal-case">{productTitle.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl">
              {productDesc}
            </p>
            {link && link !== '#' && (
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5, backgroundColor: "#C4191F", boxShadow: "0 20px 40px -10px rgba(227,30,36,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (link.startsWith('http')) {
                      window.open(link, '_blank');
                    } else {
                      navigate(link);
                    }
                  }}
                  className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-300"
                >
                  {product.cta || (lang === 'ro' ? 'SOLICITĂ OFERTA' : lang === 'ru' ? 'ЗАПРОСИТЬ ПРЕДЛОЖЕНИЕ' : 'REQUEST QUOTE')}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="w-16 h-1 bg-primary mb-10" />
            <motion.h2 
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-5xl md:text-6xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8 cursor-default group"
            >
              {lang === 'ro' ? 'Expertiză și' : lang === 'ru' ? 'Экспертиза и' : 'Expertise and'} <br />
              <span className="text-primary italic font-serif group-hover:text-secondary transition-colors duration-500">
                {lang === 'ro' ? 'Protecție' : lang === 'ru' ? 'Защита' : 'Protection'}
              </span>
            </motion.h2>
          </div>
          <div className="lg:col-span-7 pt-4">
            <p className="text-2xl text-gray-700 font-light leading-relaxed mb-10">
              {content.intro}
            </p>
            <div className="h-px w-full bg-gray-100 mb-10" />
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
              {content.roleMoldova}
            </p>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
          {content.advantages.map((adv, i) => {
            const advantageImages = [
              "/reinsurance-trends.jpg", // Modern Office
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000", // Business Meeting
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", // Financial Analysis
              "/complinace.jpg", // Handshake
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000", // Modern Architecture
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"  // Professional Team
            ];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-white border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={advantageImages[i % advantageImages.length]} 
                    alt="Advantage" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {adv}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Analysis Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <h2 className="text-5xl font-bold text-secondary tracking-tighter">
              {content.riskAnalysisTitle}
            </h2>
            <p className="text-xl text-gray-500 font-light">
              {content.risks}
            </p>
          </div>

          {analysis && (
            <div className="grid lg:grid-cols-3 gap-8">
              {(['risks', 'advantages', 'disadvantages'] as const).map((type, index) => {
                const images = [
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000", // Risks (Legal/Contract)
                  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000", // Advantages (Professional)
                  "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1000"  // Disadvantages (Analysis)
                ];
                return (
                <div key={type} className="bg-white border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={images[index]} 
                      alt={analysis[type].title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-12 flex-grow">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">
                      {analysis[type].title}
                    </h3>
                    <ul className="space-y-4">
                      {analysis[type].items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                          <div className="w-1.5 h-1.5 bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )})}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-secondary p-16 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <Shield size={600} className="translate-x-1/4 -translate-y-1/4 text-primary" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
                {content.ctaTitle}
              </h2>
              <p className="text-xl text-white/60 font-light mb-12 leading-relaxed">
                {content.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a 
                  href={`tel:${content.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] text-center"
                >
                  {content.btnText}
                </motion.a>
                <motion.a 
                  href={`mailto:${content.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.3em] text-center hover:bg-white/5 transition-colors"
                >
                  {lang === 'ro' ? 'CONTACTEAZĂ-NE' : lang === 'ru' ? 'СВЯЖИТЕСЬ С НАМИ' : 'CONTACT US'}
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
