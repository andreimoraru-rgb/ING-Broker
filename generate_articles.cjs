const fs = require('fs');

const topics = [
  { slug: 'asigurare-viata-moldova', titleRo: 'Asigurarea de viață în Moldova: Investiție în viitorul familiei tale', titleRu: 'Страхование жизни в Молдове: Инвестиции в будущее вашей семьи', titleEn: 'Life Insurance in Moldova: Investing in your family\'s future', tag: 'Asigurare Viață' },
  { slug: 'asigurare-agricola-seceta', titleRo: 'Asigurarea agricolă împotriva secetei: Soluții pentru fermierii din Moldova', titleRu: 'Сельскохозяйственное страхование от засухи: Решения для фермеров Молдовы', titleEn: 'Agricultural insurance against drought: Solutions for Moldovan farmers', tag: 'Agricultură' },
  { slug: 'asigurare-cyber-companii', titleRo: 'Asigurarea Cyber: Protecție esențială pentru companiile digitalizate', titleRu: 'Киберстрахование: Важнейшая защита для цифровых компаний', titleEn: 'Cyber Insurance: Essential protection for digitized companies', tag: 'Cyber' },
  { slug: 'asigurare-raspundere-profesionala', titleRo: 'Asigurarea de răspundere profesională: Cine are nevoie de ea?', titleRu: 'Страхование профессиональной ответственности: Кому оно нужно?', titleEn: 'Professional liability insurance: Who needs it?', tag: 'Business' },
  { slug: 'asigurare-cargo-transport-marfa', titleRo: 'Asigurarea Cargo: Siguranța transportului de marfă internațional', titleRu: 'Страхование грузов: Безопасность международных грузоперевозок', titleEn: 'Cargo Insurance: Safety of international freight transport', tag: 'Transport' },
  { slug: 'asigurare-sanatate-privata', titleRo: 'Asigurarea de sănătate privată vs. de stat în Republica Moldova', titleRu: 'Частное и государственное медицинское страхование в Республике Молдова', titleEn: 'Private vs. state health insurance in the Republic of Moldova', tag: 'Sănătate' },
  { slug: 'asigurare-animale-companie', titleRo: 'Asigurarea pentru animale de companie: Merită costul?', titleRu: 'Страхование домашних животных: Стоит ли оно того?', titleEn: 'Pet insurance: Is it worth the cost?', tag: 'Animale' },
  { slug: 'asigurare-echipamente-it', titleRo: 'Protejarea echipamentelor IT prin asigurare dedicată', titleRu: 'Защита ИТ-оборудования с помощью специального страхования', titleEn: 'Protecting IT equipment through dedicated insurance', tag: 'IT' },
  { slug: 'asigurare-evenimente-corporate', titleRo: 'Asigurarea evenimentelor corporate: Minimizarea riscurilor', titleRu: 'Страхование корпоративных мероприятий: Минимизация рисков', titleEn: 'Corporate event insurance: Minimizing risks', tag: 'Evenimente' },
  { slug: 'asigurare-constructii-montaj', titleRo: 'Asigurarea de construcții-montaj (CAR/EAR): Ghid pentru dezvoltatori', titleRu: 'Страхование строительно-монтажных работ (CAR/EAR): Руководство для застройщиков', titleEn: 'Construction and erection insurance (CAR/EAR): Guide for developers', tag: 'Construcții' },
  { slug: 'asigurare-flota-auto', titleRo: 'Optimizarea costurilor pentru asigurarea flotei auto a companiei', titleRu: 'Оптимизация затрат на страхование автопарка компании', titleEn: 'Cost optimization for company car fleet insurance', tag: 'Auto' },
  { slug: 'asigurare-accidente-angajati', titleRo: 'Asigurarea de accidente pentru angajați: Beneficiu extra-salarial', titleRu: 'Страхование от несчастных случаев для сотрудников: Дополнительная льгота', titleEn: 'Accident insurance for employees: Extra-salary benefit', tag: 'HR' },
  { slug: 'asigurare-drone-comerciale', titleRo: 'Asigurarea dronelor comerciale: Reglementări și acoperiri', titleRu: 'Страхование коммерческих дронов: Правила и покрытия', titleEn: 'Commercial drone insurance: Regulations and coverages', tag: 'Tehnologie' },
  { slug: 'asigurare-pierdere-profit', titleRo: 'Asigurarea de pierdere a profitului (Business Interruption)', titleRu: 'Страхование от потери прибыли (Business Interruption)', titleEn: 'Business Interruption insurance', tag: 'Business' },
  { slug: 'asigurare-raspundere-directori', titleRo: 'Asigurarea D&O (Răspunderea Directorilor): Protecție pentru management', titleRu: 'Страхование D&O (Ответственность директоров): Защита для руководства', titleEn: 'D&O Insurance (Directors and Officers Liability): Protection for management', tag: 'Management' },
  { slug: 'asigurare-panouri-fotovoltaice', titleRo: 'Asigurarea panourilor fotovoltaice: Protejarea investițiilor verzi', titleRu: 'Страхование солнечных панелей: Защита зеленых инвестиций', titleEn: 'Photovoltaic panel insurance: Protecting green investments', tag: 'Energie' },
  { slug: 'asigurare-storno-calatorie', titleRo: 'Asigurarea Storno: Recuperează banii dacă anulezi vacanța', titleRu: 'Страхование от невыезда (Storno): Верните деньги, если отмените отпуск', titleEn: 'Storno Insurance: Recover your money if you cancel your vacation', tag: 'Călătorie' },
  { slug: 'asigurare-biciclete-trotinete', titleRo: 'Asigurarea pentru biciclete și trotinete electrice', titleRu: 'Страхование велосипедов и электросамокатов', titleEn: 'Insurance for bicycles and electric scooters', tag: 'Mobilitate' },
  { slug: 'asigurare-obiecte-arta', titleRo: 'Asigurarea obiectelor de artă și a colecțiilor de valoare', titleRu: 'Страхование предметов искусства и ценных коллекций', titleEn: 'Insurance of art objects and valuable collections', tag: 'Artă' },
  { slug: 'asigurare-riscuri-cibernetice-imm', titleRo: 'Ghid de asigurare a riscurilor cibernetice pentru IMM-uri', titleRu: 'Руководство по страхованию киберрисков для малого и среднего бизнеса', titleEn: 'Cyber risk insurance guide for SMEs', tag: 'Cyber' },
  { slug: 'asigurare-raspundere-civila-generala', titleRo: 'Asigurarea de răspundere civilă generală pentru afaceri', titleRu: 'Общее страхование гражданской ответственности для бизнеса', titleEn: 'General liability insurance for businesses', tag: 'Business' },
  { slug: 'asigurare-rca-moldova', titleRo: 'Asigurarea RCA în Moldova: Tot ce trebuie să știi în 2026', titleRu: 'Страхование ОСАГО в Молдове: Все, что вам нужно знать в 2026 году', titleEn: 'RCA Insurance in Moldova: Everything you need to know in 2026', tag: 'Auto' },
  { slug: 'asigurare-casco-moldova', titleRo: 'Ghid complet Asigurare CASCO: Protecție totală pentru mașina ta', titleRu: 'Полное руководство по страхованию КАСКО: Полная защита вашего автомобиля', titleEn: 'Complete CASCO Insurance Guide: Total protection for your car', tag: 'Auto' },
  { slug: 'asigurare-carte-verde', titleRo: 'Carte Verde: Asigurarea obligatorie pentru călătorii auto externe', titleRu: 'Зеленая карта: Обязательное страхование для поездок за границу на автомобиле', titleEn: 'Green Card: Mandatory insurance for international car travel', tag: 'Călătorie' },
  { slug: 'asigurare-locuinta-moldova', titleRo: 'Asigurarea locuinței în Moldova: Protejează-ți cel mai drag loc', titleRu: 'Страхование жилья в Молдове: Защитите свое самое дорогое место', titleEn: 'Home insurance in Moldova: Protect your most precious place', tag: 'Locuință' },
  { slug: 'asigurare-medicala-calatorii', titleRo: 'Asigurarea medicală de călătorie: Siguranță oriunde în lume', titleRu: 'Туристическая медицинская страховка: Безопасность в любой точке мира', titleEn: 'Travel medical insurance: Safety anywhere in the world', tag: 'Călătorie' }
];

const images = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1500835595327-8307e770df2a?auto=format&fit=crop&q=80&w=1920'
];

const generateLongContent = (title, lang) => {
  const intro = {
    ro: `În peisajul dinamic al asigurărilor din Republica Moldova, <strong>\${title}</strong> reprezintă un pilon fundamental pentru stabilitatea financiară. Fie că ești o persoană fizică ce dorește să își protezeze familia, sau un antreprenor care caută să securizeze activele companiei, înțelegerea profundă a acestui produs este esențială.`,
    ru: `В динамичном ландшафте страхования в Республике Молдова <strong>\${title}</strong> является фундаментальной основой финансовой стабильности. Будь вы частным лицом, желающим защитить свою семью, или предпринимателем, стремящимся обезопасить активы компании, глубокое понимание этого продукта имеет важное значение.`,
    en: `In the dynamic insurance landscape of the Republic of Moldova, <strong>\${title}</strong> represents a fundamental pillar for financial stability. Whether you are an individual looking to protect your family, or an entrepreneur seeking to secure company assets, a deep understanding of this product is essential.`
  };

  const section1 = {
    ro: \`<h2>De ce este necesară această asigurare?</h2>
         <p>Riscurile fac parte din viața de zi cu zi, dar impactul lor financiar poate fi devastator fără o protecție adecvată. \${title} oferă un mecanism de transfer al riscului către un asigurător solid, permițându-vă să vă concentrați pe ceea ce contează cu adevărat. Statisticile arată că persoanele și companiile care investesc în prevenție și asigurări de calitate reușesc să depășească mult mai rapid perioadele de criză.</p>
         <h3>Beneficii cheie:</h3>
         <ul>
           <li>Protecție financiară imediată în caz de eveniment asigurat.</li>
           <li>Acces la consultanță de specialitate prin ING Broker.</li>
           <li>Personalizarea acoperirilor în funcție de nevoile specifice.</li>
           <li>Liniște sufletească pentru tine și cei dragi.</li>
         </ul>\`,
    ru: \`<h2>Почему эта страховка необходима?</h2>
         <p>Риски являются частью повседневной жизни, но их финансовые последствия могут быть разрушительными без надлежащей защиты. \${title} предлагает механизм передачи риска надежному страховщику, позволяя вам сосредоточиться на том, что действительно важно. Статистика показывает, что люди и компании, которые инвестируют в профилактику и качественное страхование, гораздо быстрее преодолевают кризисные периоды.</p>
         <h3>Ключевые преимущества:</h3>
         <ul>
           <li>Немедленная финансовая защита в случае страхового случая.</li>
           <li>Доступ к экспертным консультациям через ING Broker.</li>
           <li>Настройка покрытия в соответствии с конкретными потребностями.</li>
           <li>Душевное спокойствие для вас и ваших близких.</li>
         </ul>\`,
    en: \`<h2>Why is this insurance necessary?</h2>
         <p>Risks are part of everyday life, but their financial impact can be devastating without adequate protection. \${title} offers a mechanism for transferring risk to a solid insurer, allowing you to focus on what really matters. Statistics show that individuals and companies that invest in prevention and quality insurance manage to overcome crisis periods much faster.</p>
         <h3>Key benefits:</h3>
         <ul>
           <li>Immediate financial protection in case of an insured event.</li>
           <li>Access to expert advice through ING Broker.</li>
           <li>Customization of coverages according to specific needs.</li>
           <li>Peace of mind for you and your loved ones.</li>
         </ul>\`
  };

  const section2 = {
    ro: \`<h2>Cum să alegi cea mai bună ofertă?</h2>
         <p>Piața de asigurări din Moldova este vastă, iar ofertele pot varia semnificativ. Nu întotdeauna cel mai mic preț înseamnă cea mai bună protecție. Este crucial să analizați excluderile, limitele de despăgubire și reputația companiei de asigurări.</p>
         <p>La ING Broker, noi facem această muncă pentru tine. Comparăm ofertele de la toți asigurătorii licențiați din Republica Moldova și îți prezentăm o analiză obiectivă, astfel încât să poți lua o decizie informată.</p>\`,
    ru: \`<h2>Как выбрать лучшее предложение?</h2>
         <p>Страховой рынок Молдовы огромен, и предложения могут существенно различаться. Самая низкая цена не всегда означает лучшую защиту. Крайне важно проанализировать исключения, лимиты возмещения и репутацию страховой компании.</p>
         <p>В ING Broker мы делаем эту работу за вас. Мы сравниваем предложения всех лицензированных страховщиков Республики Молдова и представляем вам объективный анализ, чтобы вы могли принять взвешенное решение.</p>\`,
    en: \`<h2>How to choose the best offer?</h2>
         <p>The insurance market in Moldova is vast, and offers can vary significantly. The lowest price does not always mean the best protection. It is crucial to analyze exclusions, compensation limits, and the reputation of the insurance company.</p>
         <p>At ING Broker, we do this work for you. We compare offers from all licensed insurers in the Republic of Moldova and present you with an objective analysis, so you can make an informed decision.</p>\`
  };

  const faq = {
    ro: \`<h2>Întrebări frecvente (FAQ)</h2>
         <div class="space-y-4">
           <div>
             <h4 class="font-bold">Cât costă o astfel de poliță?</h4>
             <p>Costul variază în funcție de factori precum istoricul de daune, limitele alese și specificul riscului. Contactează-ne pentru o cotație exactă.</p>
           </div>
           <div>
             <h4 class="font-bold">Ce documente sunt necesare?</h4>
             <p>De regulă, avem nevoie de actele de identitate și documentele ce atestă proprietatea sau interesul asigurat.</p>
           </div>
         </div>\`,
    ru: \`<h2>Часто задаваемые вопросы (FAQ)</h2>
         <div class="space-y-4">
           <div>
             <h4 class="font-bold">Сколько стоит такой полис?</h4>
             <p>Стоимость варьируется в зависимости от таких факторов, как история претензий, выбранные лимиты и специфика риска. Свяжитесь с нами для получения точного расчета.</p>
           </div>
           <div>
             <h4 class="font-bold">Какие документы необходимы?</h4>
             <p>Как правило, нам нужны документы, удостоверяющие личность, и документы, подтверждающие право собственности или застрахованный интерес.</p>
           </div>
         </div>\`,
    en: \`<h2>Frequently Asked Questions (FAQ)</h2>
         <div class="space-y-4">
           <div>
             <h4 class="font-bold">How much does such a policy cost?</h4>
             <p>The cost varies depending on factors such as claims history, chosen limits, and risk specifics. Contact us for an exact quote.</p>
           </div>
           <div>
             <h4 class="font-bold">What documents are needed?</h4>
             <p>As a rule, we need identity documents and documents proving ownership or insured interest.</p>
           </div>
         </div>\`
  };

  const footer = {
    ro: \`<p><strong>Autor:</strong> Andrei Moraru, Expert Asigurări & Reasigurări</p>
         <p><strong>Locație:</strong> <a href="https://maps.google.com/?q=Insurance+ING+Broker+SRL+Chisinau" target="_blank" rel="noopener noreferrer" class="text-primary underline">Vizitează sediul nostru din Chișinău</a></p>\`,
    ru: \`<p><strong>Автор:</strong> Андрей Морару, Эксперт по страхованию и перестрахованию</p>
         <p><strong>Локация:</strong> <a href="https://maps.google.com/?q=Insurance+ING+Broker+SRL+Chisinau" target="_blank" rel="noopener noreferrer" class="text-primary underline">Посетите наш офис в Кишиневе</a></p>\`,
    en: \`<p><strong>Author:</strong> Andrei Moraru, Insurance & Reinsurance Expert</p>
         <p><strong>Location:</strong> <a href="https://maps.google.com/?q=Insurance+ING+Broker+SRL+Chisinau" target="_blank" rel="noopener noreferrer" class="text-primary underline">Visit our office in Chisinau</a></p>\`
  };

  return \`
    <div class="prose prose-lg max-w-none">
      <p class="lead">\${intro[lang]}</p>
      \${section1[lang]}
      \${section2[lang]}
      <div class="bg-gray-50 p-6 rounded-xl my-8">
        <h2 class="mt-0">Expertiza ING Broker</h2>
        <p>Cu peste 20 de ani de experiență colectivă, echipa noastră nu doar vinde polițe, ci construiește strategii de protecție. Suntem lideri în Republica Moldova pe segmentul de reasigurări și soluții corporate, aducând aceleași standarde înalte și în segmentul de asigurări personale.</p>
      </div>
      \${faq[lang]}
      <div class="mt-12 pt-8 border-t border-gray-100">
        \${footer[lang]}
      </div>
    </div>
  \`;
};

let roArticles = [];
let ruArticles = [];
let enArticles = [];

topics.forEach((t, index) => {
  const id = (10 + index).toString();
  const date = \`\${(index % 28) + 1} Apr 2026\`.padStart(11, '0');
  const img = images[index % images.length];

  roArticles.push(\`    {
      id: '\${id}',
      slug: '\${t.slug}',
      title: '\${t.titleRo}',
      excerpt: 'Ghid complet despre \${t.titleRo.toLowerCase()}. Află cum să îți protejezi viitorul și afacerea în Republica Moldova cu expertiza ING Broker.',
      content: \\\`\${generateLongContent(t.titleRo, 'ro')}\\\`,
      image: '\${img}',
      date: '\${date}',
      author: 'Andrei Moraru',
      tags: ['\${t.tag}', 'Asigurări', 'Moldova'],
      seo: {
        title: '\${t.titleRo} | ING Broker Moldova',
        description: 'Tot ce trebuie să știi despre \${t.titleRo.toLowerCase()} în Republica Moldova. Consultanță gratuită și cele mai bune prețuri de la ING Broker.',
        keywords: '\${t.slug.replace(/-/g, ', ')}, asigurari moldova, broker asigurari chisinau, ING Broker, Andrei Moraru, expert asigurari'
      }
    }\`);

  ruArticles.push(\`    {
      id: '\${id}',
      slug: '\${t.slug}',
      title: '\${t.titleRu}',
      excerpt: 'Полное руководство по \${t.titleRu.toLowerCase()}. Узнайте, как защитить свое будущее и бизнес в Молдове с помощью опыта ING Broker.',
      content: \\\`\${generateLongContent(t.titleRu, 'ru')}\\\`,
      image: '\${img}',
      date: '\${date.replace('Apr', 'Апр')}',
      author: 'Андрей Морару',
      tags: ['\${t.tag}', 'Страхование', 'Молдова'],
      seo: {
        title: '\${t.titleRu} | ING Broker Молдова',
        description: 'Все, что вам нужно знать о \${t.titleRu.toLowerCase()} в Республике Молдова. Бесплатные консультации и лучшие цены от ING Broker.',
        keywords: '\${t.slug.replace(/-/g, ', ')}, страхование молдова, страховой брокер кишинев, ING Broker, Андрей Морару'
      }
    }\`);

  enArticles.push(\`    {
      id: '\${id}',
      slug: '\${t.slug}',
      title: '\${t.titleEn}',
      excerpt: 'Complete guide about \${t.titleEn.toLowerCase()}. Learn how to protect your future and business in Moldova with ING Broker expertise.',
      content: \\\`\${generateLongContent(t.titleEn, 'en')}\\\`,
      image: '\${img}',
      date: '\${date}',
      author: 'Andrei Moraru',
      tags: ['\${t.tag}', 'Insurance', 'Moldova'],
      seo: {
        title: '\${t.titleEn} | ING Broker Moldova',
        description: 'Everything you need to know about \${t.titleEn.toLowerCase()} in the Republic of Moldova. Free consultancy and best prices from ING Broker.',
        keywords: '\${t.slug.replace(/-/g, ', ')}, insurance moldova, insurance broker chisinau, ING Broker, Andrei Moraru'
      }
    }\`);
});

// Clear existing articles and write new ones to ensure fresh state
const baseContent = \`export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const articles: Record<string, Article[]> = {
  ro: [
\${roArticles.join(',\\n')}
  ],
  ru: [
\${ruArticles.join(',\\n')}
  ],
  en: [
\${enArticles.join(',\\n')}
  ]
};
\`;

fs.writeFileSync('src/data/articles.ts', baseContent);
console.log('Articles regenerated successfully with deep SEO content!');
