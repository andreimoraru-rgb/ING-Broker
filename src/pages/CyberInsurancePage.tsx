import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Lock,
  AlertTriangle,
  Server,
  Database,
  Globe,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Eye,
  Wifi
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Language } from '../translations';

interface CyberInsurancePageProps {
  lang: Language;
}

export const CyberInsurancePage: React.FC<CyberInsurancePageProps> = ({ lang }) => {
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
      title: 'Asigurare Cyber Moldova 2026 | ING Broker - Broker Licențiat CNPF',
      description: 'Asigurare împotriva atacurilor ransomware, breșelor de date și fraudei online. Broker CNPF Moldova. Evaluare gratuită a riscului cyber. Ofertă în 48 ore.',
      keywords: 'asigurare cyber moldova, asigurare ransomware moldova, asigurare bresa date, asigurare risc cibernetic, broker asigurari moldova, CNPF'
    },
    ru: {
      title: 'Киберстрахование Молдова 2026 | ING Broker CNPF',
      description: 'Страхование от атак ransomware, утечек данных и онлайн-мошенничества. Лицензированный брокер CNPF Молдова. Бесплатная оценка киберрисков.',
      keywords: 'киберстрахование молдова, страхование ransomware молдова, страхование утечка данных, брокер страхование молдова'
    },
    en: {
      title: 'Cyber Insurance Moldova 2026 | ING Broker CNPF Licensed Broker',
      description: 'Insurance against ransomware attacks, data breaches and online fraud. CNPF broker Moldova. Free cyber risk assessment. Quote in 48 hours.',
      keywords: 'cyber insurance moldova, ransomware insurance moldova, data breach insurance, cyber risk insurance, broker insurance moldova'
    }
  };

  const content = {
    ro: {
      badge: 'Asigurare Cyber',
      heroTitle: 'Asigurare Cyber în Moldova',
      heroSubtitle: 'Protejează Compania de Atacuri Informatice',
      heroDesc: 'Acoperire pentru ransomware, breșe de date, fraudă BEC și întrerupere activitate. Evaluare gratuită a riscului cyber. Ofertă de la 6 asigurători CNPF în 48 ore.',
      cta: 'Evaluare Gratuită Cyber',
      stats: [
        { val: '340%', label: 'Creștere incidente cyber MD 2024-2025' },
        { val: '60%', label: 'IMM-uri închise în 6 luni după atac major' },
        { val: '48h', label: 'Timp emitere poliță cyber' }
      ],
      whyTitle: 'De ce ai nevoie de asigurare cyber în 2026?',
      whyItems: [
        {
          icon: 'alert',
          stat: '100.000 - 500.000 USD',
          title: 'Costul mediu al unui atac ransomware',
          desc: 'Pentru o companie medie din Moldova sau România. Plata răscumpărării e doar o parte - costurile de remediere, recuperare date și reputație pot fi și mai mari.'
        },
        {
          icon: 'server',
          stat: '60%',
          title: 'Companii mici care se închid după atac',
          desc: 'Șase din zece IMM-uri care suferă un atac cibernetic major nu supraviețuiesc primelor 6 luni. Asigurarea cyber acoperă tocmai costurile care duc la faliment.'
        },
        {
          icon: 'globe',
          stat: '340%',
          title: 'Creștere incidente cyber în Moldova',
          desc: 'Datele CERT-MD arată o creștere dramatică a atacurilor raportate în 2024-2025. Firmele moldovenești sunt ținte mai accesibile față de companiile cu securitate IT maturizată.'
        },
        {
          icon: 'database',
          stat: 'până la 4%',
          title: 'Amenzi GDPR pentru breșe de date',
          desc: 'Legea 133/2011 și GDPR prevăd amenzi de până la 4% din cifra de afaceri globală pentru breșe de date neraportate în termen. Polița cyber acoperă și aceste costuri.'
        }
      ],
      coversTitle: 'Ce acoperă asigurarea cyber?',
      coversCategories: [
        {
          category: lang === 'ro' ? 'Răspundere față de terți' : '',
          items: [
            { title: 'Notificarea clienților afectați', desc: 'Costurile legale și operaționale de informare a persoanelor afectate de o breșă de date.' },
            { title: 'Amenzi ANPDCP și GDPR', desc: 'Penalitățile impuse de autorități pentru breșe de date și încălcări ale protecției datelor personale.' },
            { title: 'Costuri juridice externe', desc: 'Reprezentare juridică în fața autorităților și în litigiile cu persoanele afectate.' }
          ]
        },
        {
          category: lang === 'ro' ? 'Daune proprii' : '',
          items: [
            { title: 'Pierderi din întreruperea activității', desc: 'Venituri pierdute în perioada în care sistemele sunt nefuncționale după un atac cibernetic.' },
            { title: 'Restaurarea datelor și sistemelor', desc: 'Costurile tehnice de recuperare a datelor, reinstalare sisteme și remediere vulnerabilități exploatate.' },
            { title: 'Ransomware - plata răscumpărării', desc: 'Plata cererii de răscumpărare (cu restricții legale și după evaluare), plus costurile de negociere.' }
          ]
        },
        {
          category: lang === 'ro' ? 'Fraudă și managementul crizei' : '',
          items: [
            { title: 'Fraudă BEC (Business Email Compromise)', desc: 'Transferuri bancare neautorizate inițiate prin email fraudulos care imită un director sau furnizor.' },
            { title: 'Servicii PR și managementul reputației', desc: 'Costurile agențiilor de comunicare pentru gestionarea crizei publice după un incident major.' },
            { title: 'Criminalistică digitală (forensics)', desc: 'Investigarea tehnica a incidentului, identificarea vectorului de atac și documentarea pentru autorități.' }
          ]
        }
      ],
      assessTitle: 'Evaluare gratuită a riscului cyber',
      assessDesc: 'ING Broker oferă un chestionar de evaluare gratuit (15 minute) care determină profilul de risc al companiei tale. Pe baza lui, selectăm oferta optimă.',
      assessItems: [
        { title: 'Nivelul de expunere', desc: 'Câte date sensibile procesezi, ce sisteme critice ai, câți angajați au acces la date externe.' },
        { title: 'Controale IT existente', desc: 'MFA activat, backup regulat testat, soluție EDR, politici BYOD - fiecare reduce prima de asigurare.' },
        { title: 'Limita recomandată', desc: 'Pe baza profilului de risc, recomandăm suma asigurată optimă față de bugetul disponibil.' },
        { title: 'Oferta estimată', desc: 'Prima anuală estimativă înainte de a cheltui timp pe propuneri formale de la asigurători.' }
      ],
      pricingTitle: 'Cât costă asigurarea cyber în Moldova?',
      pricingDesc: 'Prima depinde de: cifra de afaceri, numărul de angajați, tipul datelor procesate și controalele IT existente. Exemple orientative:',
      pricingItems: [
        {
          segment: 'IMM - servicii / comerț',
          ca: 'CA sub 5 mil. MDL/an',
          range: '3.000 - 15.000 MDL/an',
          note: 'Emitere în 48-72 ore pe baza chestionarului',
          popular: false
        },
        {
          segment: 'Companie medie IT / date',
          ca: 'CA 5-50 mil. MDL/an',
          range: '15.000 - 80.000 MDL/an',
          note: 'Underwriting 1-2 săptămâni, audit IT inclus',
          popular: true
        },
        {
          segment: 'Corporație / Bancă / IFN',
          ca: 'CA peste 50 mil. MDL/an',
          range: 'La cerere individuală',
          note: 'Underwriting complet, audit tehnic, limită 1M+ EUR',
          popular: false
        }
      ],
      discountTitle: 'Reduceri pentru controale de securitate:',
      discounts: [
        'ISO 27001 certificat - reducere 15-25% la primă',
        'MFA activat pentru toți utilizatorii - reducere 10%',
        'Backup testat și segregat offline - reducere 10%',
        'EDR / antivirus enterprise activ - reducere 5-10%'
      ],
      pricingNote: '* Prețurile sunt orientative. Prima finală depinde de activitatea concretă și asigurătorul ales.',
      faqTitle: 'Întrebări frecvente despre asigurarea cyber',
      faqs: [
        {
          q: 'Are sens asigurarea cyber pentru firme mici din Moldova?',
          a: 'Da - firmele mici sunt ținta preferată a hackerilor tocmai pentru că au securitate IT mai slabă și nu au resurse pentru recuperare rapidă. O breșă de date sau un atac ransomware poate opri complet activitatea. Prima anuală pentru un IMM mic este adesea mai mică decât costul unui singur incident.'
        },
        {
          q: 'Asigurarea cyber acoperă și angajații care lucrează remote?',
          a: 'Da, polițele moderne acoperă activitatea angajaților indiferent de locație, inclusiv lucrul de acasă și pe dispozitive personale (BYOD), cu anumite condiții privind securitatea conexiunii și politicile interne ale firmei.'
        },
        {
          q: 'Ce nu acoperă asigurarea cyber?',
          a: 'Excluderile tipice includ: atacuri sponsorizate de state (cyber warfare), pierderi din criptomonede și active digitale speculative, daune cauzate intenționat de angajați proprii, sisteme informatice cu software expirat (EOL) cunoscut și neremediat, și incidente produse înainte de data poliței.'
        },
        {
          q: 'Cât durează să obțin o poliță cyber?',
          a: 'Pentru companii cu CA sub 5 mil. MDL, polița poate fi emisă în 48-72 ore pe baza chestionarului de evaluare. Pentru companii mai mari cu sisteme complexe și date sensibile, underwriting-ul implică un audit tehnic și poate dura 1-2 săptămâni.'
        }
      ],
      ctaTitle: 'Vrei să știi cât de expusă este firma ta?',
      ctaDesc: 'Completezi chestionarul de evaluare cyber gratuit - 15 minute. Îți spunem care e nivelul de risc și cât ar costa o poliță.',
      ctaBtn: 'Evaluare Gratuită Cyber',
      ctaPhone: 'Sună acum'
    },
    ru: {
      badge: 'Киберстрахование',
      heroTitle: 'Киберстрахование в Молдове',
      heroSubtitle: 'Защитите Компанию от Кибератак',
      heroDesc: 'Покрытие ransomware, утечек данных, мошенничества BEC и перерывов в работе. Бесплатная оценка киберрисков. Предложение от 6 страховщиков CNPF за 48 часов.',
      cta: 'Бесплатная Оценка Рисков',
      stats: [
        { val: '340%', label: 'Рост инцидентов в Молдове 2024-2025' },
        { val: '60%', label: 'МСБ закрылись в течение 6 мес. после атаки' },
        { val: '48ч', label: 'Время выдачи полиса' }
      ],
      whyTitle: 'Зачем нужно киберстрахование в 2026 году?',
      whyItems: [
        { icon: 'alert', stat: '100 000 - 500 000 USD', title: 'Средняя стоимость атаки ransomware', desc: 'Для средней компании. Выкуп - лишь часть расходов. Восстановление, потери репутации и простой могут стоить ещё дороже.' },
        { icon: 'server', stat: '60%', title: 'Малый бизнес закрывается после атаки', desc: 'Шесть из десяти МСБ, переживших серьёзную кибератаку, не выживают в течение 6 месяцев. Киберстрахование покрывает именно те расходы, которые приводят к банкротству.' },
        { icon: 'globe', stat: '340%', title: 'Рост кибератак в Молдове', desc: 'Данные CERT-MD показывают резкий рост атак в 2024-2025. Молдавские компании - более доступные цели по сравнению с организациями с зрелой IT-безопасностью.' },
        { icon: 'database', stat: 'до 4%', title: 'Штрафы GDPR за утечки данных', desc: 'Закон 133/2011 и GDPR предусматривают штрафы до 4% от глобального оборота за нераскрытые утечки данных. Полис покрывает и эти расходы.' }
      ],
      coversTitle: 'Что покрывает киберстрахование?',
      coversCategories: [
        {
          category: 'Ответственность перед третьими лицами',
          items: [
            { title: 'Уведомление пострадавших клиентов', desc: 'Юридические и операционные расходы на информирование лиц, пострадавших от утечки данных.' },
            { title: 'Штрафы ANPDCP и GDPR', desc: 'Санкции, наложенные властями за утечки данных и нарушения защиты персональных данных.' },
            { title: 'Внешние юридические расходы', desc: 'Юридическое представительство перед регуляторами и в спорах с пострадавшими.' }
          ]
        },
        {
          category: 'Собственные убытки',
          items: [
            { title: 'Убытки от простоя', desc: 'Потери выручки в период нефункционирования систем после кибератаки.' },
            { title: 'Восстановление данных и систем', desc: 'Технические расходы на восстановление данных, переустановку систем и устранение уязвимостей.' },
            { title: 'Ransomware - выплата выкупа', desc: 'Оплата требований о выкупе (с правовыми ограничениями и после оценки), плюс расходы на переговоры.' }
          ]
        },
        {
          category: 'Мошенничество и антикризисное управление',
          items: [
            { title: 'Мошенничество BEC', desc: 'Несанкционированные банковские переводы, инициированные через мошеннические письма, имитирующие руководство или поставщиков.' },
            { title: 'PR и управление репутацией', desc: 'Расходы коммуникационных агентств на управление публичным кризисом после крупного инцидента.' },
            { title: 'Цифровая криминалистика (forensics)', desc: 'Техническое расследование инцидента, выявление вектора атаки и документирование для властей.' }
          ]
        }
      ],
      assessTitle: 'Бесплатная оценка киберрисков',
      assessDesc: 'ING Broker предлагает бесплатный опросник оценки рисков (15 минут), определяющий профиль риска вашей компании. На его основе подбираем оптимальное предложение.',
      assessItems: [
        { title: 'Уровень воздействия', desc: 'Сколько персональных данных вы обрабатываете, какие критические системы имеются, сколько сотрудников имеют внешний доступ к данным.' },
        { title: 'Существующие IT-контроли', desc: 'MFA, регулярное тестирование резервных копий, EDR, BYOD-политики - каждый снижает страховую премию.' },
        { title: 'Рекомендуемый лимит', desc: 'На основе профиля риска рекомендуем оптимальную страховую сумму в соотношении с доступным бюджетом.' },
        { title: 'Оценочное предложение', desc: 'Предварительная годовая премия до подачи формальных предложений страховщикам.' }
      ],
      pricingTitle: 'Сколько стоит киберстрахование в Молдове?',
      pricingDesc: 'Премия зависит от: оборота, числа сотрудников, типа обрабатываемых данных и существующих IT-контролей.',
      pricingItems: [
        { segment: 'МСБ - услуги / торговля', ca: 'Оборот до 5 млн MDL/год', range: '3 000 - 15 000 MDL/год', note: 'Выдача в 48-72 часа на основании опросника', popular: false },
        { segment: 'Средняя IT / данные компания', ca: 'Оборот 5-50 млн MDL/год', range: '15 000 - 80 000 MDL/год', note: 'Андеррайтинг 1-2 недели, IT-аудит включён', popular: true },
        { segment: 'Корпорация / Банк / МФО', ca: 'Оборот свыше 50 млн MDL/год', range: 'По индивидуальному запросу', note: 'Полный андеррайтинг, технический аудит, лимит 1M+ EUR', popular: false }
      ],
      discountTitle: 'Скидки за контроли безопасности:',
      discounts: [
        'Сертификат ISO 27001 - скидка 15-25% на премию',
        'MFA для всех пользователей - скидка 10%',
        'Регулярное тестирование офлайн-резервных копий - скидка 10%',
        'Корпоративный EDR / антивирус - скидка 5-10%'
      ],
      pricingNote: '* Цены ориентировочные. Итоговая премия зависит от конкретной деятельности и выбранного страховщика.',
      faqTitle: 'Часто задаваемые вопросы о киберстраховании',
      faqs: [
        { q: 'Нужно ли киберстрахование для малого бизнеса в Молдове?', a: 'Да - малый бизнес является предпочтительной целью хакеров именно потому, что у него слабее IT-защита и нет ресурсов для быстрого восстановления. Утечка данных или атака ransomware могут полностью остановить деятельность. Годовая премия для небольшого МСБ часто меньше стоимости одного инцидента.' },
        { q: 'Покрывает ли киберстрахование удалённых сотрудников?', a: 'Да, современные полисы покрывают деятельность сотрудников вне зависимости от местонахождения, включая работу из дома и личные устройства (BYOD), при соблюдении определённых условий безопасности подключения.' },
        { q: 'Что НЕ покрывает киберстрахование?', a: 'Типичные исключения: атаки, спонсируемые государствами (кибервойна), потери от криптовалют и спекулятивных цифровых активов, ущерб, намеренно причинённый собственными сотрудниками, известные необновлённые системы (EOL-ПО), инциденты до даты начала действия полиса.' },
        { q: 'Сколько времени занимает получение полиса?', a: 'Для компаний с оборотом до 5 млн MDL полис может быть выдан в течение 48-72 часов на основании опросника. Для более крупных компаний с комплексными системами андеррайтинг занимает 1-2 недели.' }
      ],
      ctaTitle: 'Хотите узнать, насколько уязвима ваша компания?',
      ctaDesc: 'Заполните бесплатный опросник оценки киберрисков - 15 минут. Сообщим об уровне риска и стоимости полиса.',
      ctaBtn: 'Бесплатная Оценка Рисков',
      ctaPhone: 'Позвонить сейчас'
    },
    en: {
      badge: 'Cyber Insurance',
      heroTitle: 'Cyber Insurance in Moldova',
      heroSubtitle: 'Protect Your Company from Cyber Attacks',
      heroDesc: 'Coverage for ransomware, data breaches, BEC fraud and business interruption. Free cyber risk assessment. Quote from 6 CNPF insurers in 48 hours.',
      cta: 'Free Cyber Assessment',
      stats: [
        { val: '340%', label: 'Growth in MD cyber incidents 2024-2025' },
        { val: '60%', label: 'SMEs closed within 6 months after major attack' },
        { val: '48h', label: 'Cyber policy issuance time' }
      ],
      whyTitle: 'Why do you need cyber insurance in 2026?',
      whyItems: [
        { icon: 'alert', stat: '$100,000 - $500,000', title: 'Average cost of a ransomware attack', desc: 'For a medium-sized company. The ransom payment is just part of the cost - remediation, data recovery and reputation damage can be even higher.' },
        { icon: 'server', stat: '60%', title: 'SMEs that close after a major attack', desc: 'Six out of ten SMEs that suffer a major cyber attack do not survive the first 6 months. Cyber insurance covers exactly the costs that lead to closure.' },
        { icon: 'globe', stat: '340%', title: 'Growth in cyber incidents in Moldova', desc: 'CERT-MD data shows a dramatic increase in reported attacks in 2024-2025. Moldovan companies are more accessible targets compared to those with mature IT security.' },
        { icon: 'database', stat: 'up to 4%', title: 'GDPR fines for data breaches', desc: 'Law 133/2011 and GDPR provide fines of up to 4% of global turnover for unreported data breaches. The cyber policy covers these costs too.' }
      ],
      coversTitle: 'What does cyber insurance cover?',
      coversCategories: [
        {
          category: 'Third-party liability',
          items: [
            { title: 'Notifying affected clients', desc: 'Legal and operational costs of informing persons affected by a data breach.' },
            { title: 'ANPDCP and GDPR fines', desc: 'Penalties imposed by authorities for data breaches and violations of personal data protection.' },
            { title: 'External legal costs', desc: 'Legal representation before authorities and in disputes with affected persons.' }
          ]
        },
        {
          category: 'Own losses',
          items: [
            { title: 'Business interruption losses', desc: 'Revenue lost during the period when systems are non-functional following a cyber attack.' },
            { title: 'Data and system restoration', desc: 'Technical costs of recovering data, reinstalling systems and remediating exploited vulnerabilities.' },
            { title: 'Ransomware - ransom payment', desc: 'Payment of ransom demands (with legal restrictions and after assessment), plus negotiation costs.' }
          ]
        },
        {
          category: 'Fraud and crisis management',
          items: [
            { title: 'BEC (Business Email Compromise) fraud', desc: 'Unauthorised bank transfers initiated through fraudulent emails impersonating a director or supplier.' },
            { title: 'PR and reputation management', desc: 'Communication agency costs for managing the public crisis after a major incident.' },
            { title: 'Digital forensics', desc: 'Technical investigation of the incident, identifying the attack vector and documenting for authorities.' }
          ]
        }
      ],
      assessTitle: 'Free cyber risk assessment',
      assessDesc: 'ING Broker offers a free assessment questionnaire (15 minutes) that determines your company\'s risk profile. Based on it, we select the optimal offer.',
      assessItems: [
        { title: 'Exposure level', desc: 'How much sensitive data you process, what critical systems you have, how many employees have external data access.' },
        { title: 'Existing IT controls', desc: 'Active MFA, regularly tested backup, EDR solution, BYOD policies - each reduces the insurance premium.' },
        { title: 'Recommended limit', desc: 'Based on the risk profile, we recommend the optimal coverage amount relative to the available budget.' },
        { title: 'Estimated quote', desc: 'Annual premium estimate before spending time on formal proposals from insurers.' }
      ],
      pricingTitle: 'How much does cyber insurance cost in Moldova?',
      pricingDesc: 'The premium depends on: turnover, number of employees, type of data processed and existing IT controls.',
      pricingItems: [
        { segment: 'SME - services / retail', ca: 'Turnover under 5M MDL/year', range: '3,000 - 15,000 MDL/year', note: 'Issuance in 48-72 hours based on questionnaire', popular: false },
        { segment: 'Medium IT / data company', ca: 'Turnover 5-50M MDL/year', range: '15,000 - 80,000 MDL/year', note: 'Underwriting 1-2 weeks, IT audit included', popular: true },
        { segment: 'Corporation / Bank / MFI', ca: 'Turnover over 50M MDL/year', range: 'On individual request', note: 'Full underwriting, technical audit, limit 1M+ EUR', popular: false }
      ],
      discountTitle: 'Discounts for security controls:',
      discounts: [
        'ISO 27001 certified - 15-25% premium discount',
        'MFA active for all users - 10% discount',
        'Regularly tested offline backup - 10% discount',
        'Enterprise EDR / antivirus active - 5-10% discount'
      ],
      pricingNote: '* Prices are indicative. The final premium depends on the specific activity and chosen insurer.',
      faqTitle: 'Frequently asked questions about cyber insurance',
      faqs: [
        { q: 'Does cyber insurance make sense for small businesses in Moldova?', a: 'Yes - small businesses are hackers\' preferred target precisely because they have weaker IT security and fewer resources for rapid recovery. A data breach or ransomware attack can completely halt operations. The annual premium for a small SME is often less than the cost of a single incident.' },
        { q: 'Does cyber insurance cover employees working remotely?', a: 'Yes, modern policies cover employee activity regardless of location, including working from home and on personal devices (BYOD), with certain conditions regarding connection security and internal company policies.' },
        { q: 'What does cyber insurance NOT cover?', a: 'Typical exclusions include: state-sponsored attacks (cyber warfare), losses from cryptocurrencies and speculative digital assets, damage intentionally caused by own employees, known unpatched systems (EOL software), and incidents occurring before the policy start date.' },
        { q: 'How long does it take to get a cyber policy?', a: 'For companies with turnover under 5M MDL, the policy can be issued within 48-72 hours based on the assessment questionnaire. For larger companies with complex systems and sensitive data, underwriting involves a technical audit and can take 1-2 weeks.' }
      ],
      ctaTitle: 'Want to know how exposed your company is?',
      ctaDesc: 'Complete the free cyber risk assessment questionnaire - 15 minutes. We will tell you the risk level and what a policy would cost.',
      ctaBtn: 'Free Cyber Assessment',
      ctaPhone: 'Call now'
    }
  };

  const c = content[lang];
  const seo = seoData[lang];

  const iconMap: Record<string, React.ReactNode> = {
    alert: <AlertTriangle size={32} className="text-primary" />,
    server: <Server size={32} className="text-primary" />,
    globe: <Globe size={32} className="text-primary" />,
    database: <Database size={32} className="text-primary" />
  };

  const cyberSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": lang === 'ro' ? "Asigurare Cyber Moldova" : lang === 'ru' ? "Киберстрахование Молдова" : "Cyber Insurance Moldova",
    "provider": {
      "@type": "InsuranceAgency",
      "name": "Insurance ING Broker SRL",
      "url": "https://www.ingbroker.md",
      "telephone": "+37369526003"
    },
    "areaServed": { "@type": "Country", "name": "Moldova" },
    "serviceType": "Cyber Insurance",
    "url": "https://www.ingbroker.md/servicii/asigurare-cyber-moldova"
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <SEO
        title={seo.title}
        description={seo.description}
        lang={lang}
        keywords={seo.keywords}
        schema={cyberSchema}
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
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=90"
            alt="Cyber security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/78 backdrop-blur-[2px]" />
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
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why cyber insurance */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/3 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">{c.whyTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {c.whyItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/8 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">{item.stat}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 flex items-center justify-center gap-4">
              <Shield className="text-primary" size={40} />
              {c.coversTitle}
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {c.coversCategories.map((cat, ci) => (
              <div key={ci} className="bg-slate-50 rounded-2xl p-8">
                <h3 className="font-bold text-slate-900 text-lg mb-6 pb-4 border-b border-slate-200">
                  {cat.category}
                </h3>
                <div className="space-y-6">
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free assessment */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                  {lang === 'ro' ? 'Gratuit' : lang === 'ru' ? 'Бесплатно' : 'Free'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
                {c.assessTitle}
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                {c.assessDesc}
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group"
              >
                {c.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.assessItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    {[<Eye size={20} className="text-primary" />, <Lock size={20} className="text-primary" />, <Shield size={20} className="text-primary" />, <Wifi size={20} className="text-primary" />][i]}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">{c.pricingTitle}</h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">{c.pricingDesc}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {c.pricingItems.map((plan, i) => (
              <div
                key={i}
                className={`bg-white p-10 rounded-3xl border transition-all relative ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    {lang === 'ro' ? 'Cel mai solicitat' : lang === 'ru' ? 'Наиболее востребован' : 'Most requested'}
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.segment}</h3>
                <div className="text-sm text-slate-400 mb-4">{plan.ca}</div>
                <div className="text-2xl font-bold text-primary mb-2">{plan.range}</div>
                <div className="text-xs text-slate-400 mb-6">{plan.note}</div>
                <div className="h-px bg-slate-100 mb-6" />
                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  {c.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Discounts */}
          <div className="bg-slate-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-bold text-slate-900 mb-6 text-lg">{c.discountTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {c.discounts.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{d}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-slate-400 italic mt-6">{c.pricingNote}</p>
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
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${activeIdx === i ? 'bg-primary border-primary text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary'}`}>
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

      {/* CTA */}
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
