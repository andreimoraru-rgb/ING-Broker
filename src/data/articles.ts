export interface Article {
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

const generateLongContent = (title: string, lang: 'ro' | 'ru' | 'en') => {
  const intro = {
    ro: `În peisajul dinamic al asigurărilor din Republica Moldova, <strong>${title}</strong> reprezintă un pilon fundamental pentru stabilitatea financiară. Fie că ești o persoană fizică ce dorește să își protejeze familia, sau un antreprenor care caută să securizeze activele companiei, înțelegerea profundă a acestui produs este esențială. La ING Broker, oferim consultanță de elită pentru a naviga prin complexitatea pieței de asigurări, asigurându-ne că fiecare detaliu este analizat cu maximă rigoare profesională.`,
    ru: `В динамичном ландшафте страхования в Республике Молдова <strong>${title}</strong> является фундаментальной основой финансовой стабильности. Будь вы частным лицом, желающим защитить свою семью, или предпринимателем, стремящимся обезопасить активы компании, глубокое понимание этого продукта имеет важное значение. В ING Broker мы предлагаем элитные консультации для навигации по сложности страхового рынка, гарантируя, что каждая деталь анализируется с максимальной профессиональной строгостью.`,
    en: `In the dynamic insurance landscape of the Republic of Moldova, <strong>${title}</strong> represents a fundamental pillar for financial stability. Whether you are an individual looking to protect your family, or an entrepreneur seeking to secure company assets, a deep understanding of this product is essential. At ING Broker, we offer elite consulting to navigate the complexity of the insurance market, ensuring that every detail is analyzed with maximum professional rigor.`
  };

  const summarySection = {
    ro: `<div class="bg-primary/5 border-l-4 border-primary p-8 my-12">
           <h2 class="mt-0 text-primary">Rezumat</h2>
           <p class="text-lg"><strong>Ce este ${title}?</strong> Este un instrument financiar de protecție care transferă riscul daunelor neprevăzute către un asigurător, garantând continuitatea afacerii sau stabilitatea familiei.</p>
           <p class="text-lg"><strong>Cui se adresează?</strong> Tuturor persoanelor și companiilor din Moldova care dețin active valoroase sau desfășoară activități cu grad de risc.</p>
           <p class="text-lg"><strong>De ce ING Broker?</strong> Oferim acces la toate companiile de asigurări, audit de risc gratuit și asistență juridică la daună.</p>
         </div>`,
    ru: `<div class="bg-primary/5 border-l-4 border-primary p-8 my-12">
           <h2 class="mt-0 text-primary">Краткий обзор</h2>
           <p class="text-lg"><strong>Что такое ${title}?</strong> Это финансовый инструмент защиты, который переносит риск непредвиденного ущерба на страховщика, гарантируя непрерывность бизнеса или стабильность семьи.</p>
           <p class="text-lg"><strong>Для кого это?</strong> Для всех лиц и компаний в Молдове, которые владеют ценными активами или осуществляют деятельность с определенной степенью риска.</p>
           <p class="text-lg"><strong>Почему ING Broker?</strong> Мы предлагаем доступ ко всем страховым компаниям, бесплатный аудит рисков и юридическую помощь при страховом случае.</p>
         </div>`,
    en: `<div class="bg-primary/5 border-l-4 border-primary p-8 my-12">
           <h2 class="mt-0 text-primary">Summary</h2>
           <p class="text-lg"><strong>What is ${title}?</strong> It is a financial protection instrument that transfers the risk of unforeseen damages to an insurer, guaranteeing business continuity or family stability.</p>
           <p class="text-lg"><strong>Who is it for?</strong> To all individuals and companies in Moldova who own valuable assets or carry out activities with a degree of risk.</p>
           <p class="text-lg"><strong>Why ING Broker?</strong> We offer access to all insurance companies, free risk audit, and legal assistance in case of a claim.</p>
         </div>`
  };

  const section1 = {
    ro: `<h2>Importanța Strategică a ${title}</h2>
         <p>Riscurile fac parte din viața de zi cu zi, dar impactul lor financiar poate fi devastator fără o protecție adecvată. ${title} oferă un mecanism de transfer al riscului către un asigurător solid, permițându-vă să vă concentrați pe ceea ce contează cu adevărat. Statisticile arată că persoanele și companiile care investesc în prevenție și asigurări de calitate reușesc să depășească mult mai rapid perioadele de criză.</p>
         <p>În contextul economic actual din Republica Moldova, volatilitatea pieței și riscurile emergente necesită o abordare proactivă. Nu mai este suficient să ai o poliță de asigurare standard; este vital să ai o soluție care să răspundă nevoilor tale specifice. ING Broker înțelege aceste nuanțe și lucrează îndeaproape cu clienții pentru a identifica punctele vulnerabile și a oferi soluții de atenuare a riscurilor.</p>
         <h3>Beneficii cheie și avantaje competitive:</h3>
         <ul>
           <li><strong>Protecție financiară imediată:</strong> Acoperirea costurilor în caz de eveniment asigurat, evitând decapitalizarea și protejând fluxul de numerar.</li>
           <li><strong>Expertiză ING Broker:</strong> Acces la consultanță de specialitate și negocierea celor mai buni termeni contractuali cu toți asigurătorii de top.</li>
           <li><strong>Personalizare avansată:</strong> Adaptarea poliței la profilul exact de risc al clientului, eliminând acoperirile inutile și adăugând clauze specifice.</li>
           <li><strong>Liniște sufletească:</strong> Siguranța că viitorul tău este protejat de profesioniști cu experiență vastă în domeniu.</li>
           <li><strong>Suport la Daună:</strong> Reprezentare profesională în fața asigurătorului pentru a asigura o despăgubire corectă și rapidă.</li>
         </ul>`,
    ru: `<h2>Стратегическая важность ${title}</h2>
         <p>Риски являются частью повседневной жизни, но их финансовые последствия могут быть разрушительными без надлежащей защиты. ${title} предлагает механизм передачи риска надежному страховщику, позволяя вам сосредоточиться на том, что действительно важно. Статистика показывает, что люди и компании, которые инвестируют в профилактику и качественное страхование, гораздо быстрее преодолевают кризисные периоды.</p>
         <p>В текущем экономическом контексте Республики Молдова волатильность рынка и возникающие риски требуют проактивного подхода. Больше недостаточно иметь стандартный страховой полис; жизненно важно иметь решение, отвечающее вашим конкретным потребностям. ING Broker понимает эти нюансы и тесно сотрудничает с клиентами, чтобы выявить уязвимые места и предложить решения по снижению рисков.</p>
         <h3>Ключевые преимущества и конкурентные выгоды:</h3>
         <ul>
           <li><strong>Немедленная финансовая защита:</strong> Покрытие расходов в случае страхового случая, избегая декапитализации и защищая денежный поток.</li>
           <li><strong>Экспертиза ING Broker:</strong> Доступ к экспертным консультациям и ведение переговоров о лучших условиях контракта со всеми ведущими страховщиками.</li>
           <li><strong>Расширенная настройка:</strong> Адаптация полиса к точному профилю риска клиента, исключение ненужных покрытий и добавление специфических условий.</li>
           <li><strong>Душевное спокойствие:</strong> Уверенность в том, что ваше будущее защищено профессионалами с огромным опытом в этой области.</li>
           <li><strong>Поддержка при убытках:</strong> Профессиональное представительство перед страховщиком для обеспечения справедливого и быстрого возмещения.</li>
         </ul>`,
    en: `<h2>Strategic Importance of ${title}</h2>
         <p>Risks are part of everyday life, but their financial impact can be devastating without adequate protection. ${title} offers a mechanism for transferring risk to a solid insurer, allowing you to focus on what really matters. Statistics show that individuals and companies that invest in prevention and quality insurance manage to overcome crisis periods much faster.</p>
         <p>In the current economic context of the Republic of Moldova, market volatility and emerging risks require a proactive approach. It is no longer enough to have a standard insurance policy; it is vital to have a solution that meets your specific needs. ING Broker understands these nuances and works closely with clients to identify vulnerable points and offer risk mitigation solutions.</p>
         <h3>Key benefits and competitive advantages:</h3>
         <ul>
           <li><strong>Immediate financial protection:</strong> Covering costs in case of an insured event, avoiding decapitalization and protecting cash flow.</li>
           <li><strong>ING Broker Expertise:</strong> Access to expert advice and negotiation of the best contractual terms with all top insurers.</li>
           <li><strong>Advanced customization:</strong> Adapting the policy to the client's exact risk profile, eliminating unnecessary coverages and adding specific clauses.</li>
           <li><strong>Peace of mind:</strong> The security that your future is protected by professionals with vast experience in the field.</li>
           <li><strong>Claims Support:</strong> Professional representation before the insurer to ensure fair and fast compensation.</li>
         </ul>`
  };

  const section2 = {
    ro: `<h2>Analiza Pieței: Cum să alegi cea mai bună ofertă în Moldova?</h2>
         <p>Piața de asigurări din Republica Moldova este vastă, iar ofertele pot varia semnificativ. Nu întotdeauna cel mai mic preț înseamnă cea mai bună protecție. Este crucial să analizați excluderile, limitele de despăgubire și reputația companiei de asigurări. O poliță ieftină poate deveni extrem de scumpă în momentul unei daune dacă nu are acoperirile necesare.</p>
         <p>La ING Broker, noi facem această muncă pentru tine. Comparăm ofertele de la toți asigurătorii licențiați din Republica Moldova și îți prezentăm o analiză obiectivă, astfel încât să poți lua o decizie informată. Suntem partenerul tău strategic, nu doar un intermediar. Analizăm solvabilitatea asigurătorilor și istoricul lor de plată a daunelor, oferindu-ți o imagine clară asupra siguranței financiare pe care o cumperi.</p>
         <p>Procesul nostru de selecție implică:</p>
         <ol>
           <li><strong>Identificarea nevoilor:</strong> Înțelegem ce este cu adevărat important pentru tine sau afacerea ta.</li>
           <li><strong>Scanarea pieței:</strong> Interogăm baza de date a tuturor asigurătorilor relevanți.</li>
           <li><strong>Negocierea termenilor:</strong> Obținem clauze speciale și tarife preferențiale datorită volumului nostru de business.</li>
           <li><strong>Prezentarea comparativă:</strong> Îți oferim un raport detaliat cu pro și contra pentru fiecare opțiune.</li>
           <li><strong>Implementarea soluției:</strong> Ne ocupăm de toată birocrația emiterii poliței.</li>
         </ol>`,
    ru: `<h2>Анализ рынка: Как выбрать лучшее предложение в Молдове?</h2>
         <p>Страховой рынок Республики Молдова огромен, и предложения могут существенно различаться. Самая низкая цена не всегда означает лучшую защиту. Крайне важно проанализировать исключения, лимиты возмещения и репутацию страховой компании. Дешевый полис может стать чрезвычайно дорогим в момент страхового случая, если в нем нет необходимых покрытий.</p>
         <p>В ING Broker мы делаем эту работу за вас. Мы сравниваем предложения всех лицензированных страховщиков Республики Молдова и представляем вам объективный анализ, чтобы вы могли принять взвешенное решение. Мы ваш стратегический партнер, а не просто посредник. Мы анализируем платежеспособность страховщиков и их историю выплат по претензиям, давая вам четкое представление о финансовой безопасности, которую вы покупаете.</p>
         <p>Наш процесс отбора включает:</p>
         <ol>
           <li><strong>Идентификация потребностей:</strong> Мы понимаем, что действительно важно для вас или вашего бизнеса.</li>
           <li><strong>Сканирование рынка:</strong> Мы опрашиваем базу данных всех соответствующих страховщиков.</li>
           <li><strong>Переговоры об условиях:</strong> Мы получаем специальные условия и льготные тарифы благодаря нашему объему бизнеса.</li>
           <li><strong>Сравнительная презентация:</strong> Мы предоставляем вам подробный отчет с плюсами и минусами каждого варианта.</li>
           <li><strong>Внедрение решения:</strong> Мы берем на себя всю бюрократию по оформлению полиса.</li>
         </ol>`,
    en: `<h2>Market Analysis: How to choose the best offer in Moldova?</h2>
         <p>The insurance market in the Republic of Moldova is vast, and offers can vary significantly. The lowest price does not always mean the best protection. It is crucial to analyze exclusions, compensation limits, and the reputation of the insurance company. A cheap policy can become extremely expensive at the time of a claim if it does not have the necessary coverages.</p>
         <p>At ING Broker, we do this work for you. We compare offers from all licensed insurers in the Republic of Moldova and present you with an objective analysis, so you can make an informed decision. We are your strategic partner, not just an intermediary. We analyze the solvency of insurers and their claims payment history, giving you a clear picture of the financial security you are buying.</p>
         <p>Our selection process involves:</p>
         <ol>
           <li><strong>Needs identification:</strong> We understand what is truly important for you or your business.</li>
           <li><strong>Market scanning:</strong> We query the database of all relevant insurers.</li>
           <li><strong>Negotiating terms:</strong> We obtain special clauses and preferential rates due to our business volume.</li>
           <li><strong>Comparative presentation:</strong> We offer you a detailed report with pros and cons for each option.</li>
           <li><strong>Solution implementation:</strong> We take care of all the bureaucracy of policy issuance.</li>
         </ol>`
  };

  const section3 = {
    ro: `<h2>Managementul Riscului și Prevenția</h2>
         <p>Asigurarea este doar o parte a managementului riscului. La ING Broker, credem că cea mai bună daună este cea care nu se întâmplă niciodată. De aceea, oferim consultanță în prevenție. Pentru companii, acest lucru poate însemna implementarea unor sisteme de securitate mai bune, instruirea angajaților sau revizuirea proceselor operaționale. Pentru persoanele fizice, poate însemna sfaturi despre siguranța locuinței sau conducerea defensivă.</p>
         <p>O strategie solidă de management al riscului include:</p>
         <ul>
           <li><strong>Evitarea riscului:</strong> Eliminarea activităților care pot genera pierderi inacceptabile.</li>
           <li><strong>Reducerea riscului:</strong> Implementarea măsurilor de siguranță pentru a diminua probabilitatea sau impactul unui eveniment.</li>
           <li><strong>Transferul riscului:</strong> Utilizarea asigurărilor pentru a muta povara financiară către un terț.</li>
           <li><strong>Retenția riscului:</strong> Asumarea conștientă a riscurilor mici care pot fi acoperite din resurse proprii.</li>
         </ul>
         <p>Prin colaborarea cu ING Broker, beneficiați de un audit de risc profesionist care vă ajută să echilibrați aceste patru elemente, optimizând costurile și maximizând protecția.</p>`,
    ru: `<h2>Управление рисками и профилактика</h2>
         <p>Страхование - это лишь часть управления рисками. В ING Broker мы верим, что лучший страховой случай - это тот, который никогда не происходит. Поэтому мы предлагаем консультации по профилактике. Для компаний это может означать внедрение лучших систем безопасности, обучение сотрудников или пересмотр операционных процессов. Для частных лиц это может означать советы по безопасности дома или защитному вождению.</p>
         <p>Надежная стратегия управления рисками включает:</p>
         <ul>
           <li><strong>Избежание риска:</strong> Исключение деятельности, которая может привести к неприемлемым потерям.</li>
           <li><strong>Снижение риска:</strong> Внедрение мер безопасности для уменьшения вероятности или последствий события.</li>
           <li><strong>Передача риска:</strong> Использование страхования для переноса финансового бремени на третью сторону.</li>
           <li><strong>Удержание риска:</strong> Сознательное принятие небольших рисков, которые могут быть покрыты за счет собственных ресурсов.</li>
         </ul>
         <p>Сотрудничая с ING Broker, вы получаете профессиональный аудит рисков, который поможет вам сбалансировать эти четыре элемента, оптимизируя затраты и максимизируя защиту.</p>`,
    en: `<h2>Risk Management and Prevention</h2>
         <p>Insurance is just one part of risk management. At ING Broker, we believe the best claim is the one that never happens. That's why we offer prevention consulting. For companies, this can mean implementing better security systems, training employees, or reviewing operational processes. For individuals, it can mean advice on home safety or defensive driving.</p>
         <p>A solid risk management strategy includes:</p>
         <ul>
           <li><strong>Risk avoidance:</strong> Eliminating activities that can generate unacceptable losses.</li>
           <li><strong>Risk reduction:</strong> Implementing safety measures to decrease the probability or impact of an event.</li>
           <li><strong>Risk transfer:</strong> Using insurance to move the financial burden to a third party.</li>
           <li><strong>Risk retention:</strong> Consciously assuming small risks that can be covered from own resources.</li>
         </ul>
         <p>By collaborating with ING Broker, you benefit from a professional risk audit that helps you balance these four elements, optimizing costs and maximizing protection.`
  };

  const faq = {
    ro: `<h2>Întrebări frecvente (FAQ) - Tot ce trebuie să știi</h2>
         <div class="space-y-6">
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Cât costă o poliță de ${title}?</h4>
             <p>Costul variază în funcție de factori precum istoricul de daune, limitele de despăgubire alese și specificul riscului. La ING Broker, negociem tarife preferențiale pentru clienții noștri, asigurându-ne că obțineți cel mai bun preț de pe piață fără a sacrifica calitatea acoperirii.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Ce documente sunt necesare pentru emitere?</h4>
             <p>De regulă, avem nevoie de actele de identitate (pentru persoane fizice) sau actele de constituire (pentru companii), plus documentele ce atestă proprietatea sau interesul asigurat. Procesul nostru este digitalizat, deci puteți trimite documentele prin email sau WhatsApp pentru o emitere rapidă.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Cum procedez în caz de daună?</h4>
             <p>Primul pas este securizarea locației și anunțarea autorităților, dacă este cazul. Apoi, contactează imediat echipa ING Broker. Noi te vom ghida prin tot procesul, de la completarea formularelor până la programarea constatării și urmărirea plății despăgubirii.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Pot modifica polița după emitere?</h4>
             <p>Da, majoritatea polițelor permit modificări prin acte adiționale. Fie că doriți să măriți limitele de asigurare sau să adăugați noi riscuri, echipa noastră vă stă la dispoziție pentru a actualiza protecția conform noilor realități.</p>
           </div>
         </div>`,
    ru: `<h2>Часто задаваемые вопросы (FAQ) - Все, что вам нужно знать</h2>
         <div class="space-y-6">
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Сколько стоит полис ${title}?</h4>
             <p>Стоимость варьируется в зависимости от таких факторов, как история претензий, выбранные лимиты возмещения и специфика риска. В ING Broker мы договариваемся о льготных тарифах для наших клиентов, гарантируя, что вы получите лучшую цену на рынке без ущерба для качества покрытия.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Какие документы необходимы для оформления?</h4>
             <p>Как правило, нам нужны документы, удостоверяющие личность (для физических лиц) или учредительные документы (для компаний), а также документы, подтверждающие право собственности или застрахованный интерес. Наш процесс оцифрован, поэтому вы можете отправить документы по электронной почте или WhatsApp для быстрого оформления.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Что делать при наступлении страхового случая?</h4>
             <p>Первым шагом является обеспечение безопасности места происшествия и уведомление властей, если это необходимо. Затем немедленно свяжитесь с командой ING Broker. Мы проведем вас через весь процесс: от заполнения форм до назначения осмотра и отслеживания выплаты возмещения.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Могу ли я изменить полис после оформления?</h4>
             <p>Да, большинство полисов позволяют вносить изменения через дополнительные соглашения. Если вы хотите увеличить лимиты страхования или добавить новые риски, наша команда готова обновить вашу защиту в соответствии с новыми реалиями.</p>
           </div>
         </div>`,
    en: `<h2>Frequently Asked Questions (FAQ) - Everything you need to know</h2>
         <div class="space-y-6">
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">How much does a ${title} policy cost?</h4>
             <p>The cost varies depending on factors such as claims history, chosen compensation limits, and risk specifics. At ING Broker, we negotiate preferential rates for our clients, ensuring you get the best price on the market without sacrificing coverage quality.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">What documents are needed for issuance?</h4>
             <p>As a rule, we need identity documents (for individuals) or incorporation documents (for companies), plus documents proving ownership or insured interest. Our process is digitized, so you can send documents via email or WhatsApp for fast issuance.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">What do I do in case of a claim?</h4>
             <p>The first step is securing the location and notifying the authorities, if applicable. Then, immediately contact the ING Broker team. We will guide you through the entire process, from filling out forms to scheduling the assessment and tracking the compensation payment.</p>
           </div>
           <div class="border-b border-gray-100 pb-4">
             <h4 class="font-bold text-secondary">Can I modify the policy after issuance?</h4>
             <p>Yes, most policies allow modifications through addenda. Whether you want to increase insurance limits or add new risks, our team is at your disposal to update the protection according to new realities.</p>
           </div>
         </div>`
  };

  const footer = {
    ro: `<div class="bg-gray-900 text-white p-8 rounded-xl mt-12">
           <h3 class="text-white mt-0">Consultă un Expert ING Broker</h3>
           <p>Nu lăsa siguranța ta la voia întâmplării. Contactează-ne astăzi pentru un audit de risc gratuit și o ofertă personalizată. Echipa noastră de experți este gata să îți ofere claritatea de care ai nevoie pentru a lua cele mai bune decizii financiare.</p>
           <p><strong>Autor:</strong> Andrei Moraru, Senior Insurance & Reinsurance Expert</p>
           <p><strong>Locație:</strong> <a href="https://maps.google.com/?q=Insurance+ING+Broker+SRL+Chisinau" target="_blank" rel="noopener noreferrer" class="text-primary underline">Sediul Central Chișinău, str. Pan Halippa 9</a></p>
         </div>`,
    ru: `<div class="bg-gray-900 text-white p-8 rounded-xl mt-12">
           <h3 class="text-white mt-0">Проконсультируйтесь с экспертом ING Broker</h3>
           <p>Не оставляйте свою безопасность на волю случая. Свяжитесь с нами сегодня для бесплатного аудита рисков и индивидуального предложения. Наша команда экспертов готова предоставить вам ясность, необходимую для принятия лучших финансовых решений.</p>
           <p><strong>Автор:</strong> Андрей Морару, Старший эксперт по страхованию и перестрахованию</p>
           <p><strong>Локация:</strong> <a href="https://maps.google.com/?q=Insurance+ING+Broker+SRL+Chisinau" target="_blank" rel="noopener noreferrer" class="text-primary underline">Центральный офис в Кишиневе, ул. Пан Халиппа 9</a></p>
         </div>`,
    en: `<div class="bg-gray-900 text-white p-8 rounded-xl mt-12">
           <h3 class="text-white mt-0">Consult an ING Broker Expert</h3>
           <p>Don't leave your safety to chance. Contact us today for a free risk audit and a personalized offer. Our team of experts is ready to provide the clarity you need to make the best financial decisions.</p>
           <p><strong>Author:</strong> Andrei Moraru, Senior Insurance & Reinsurance Expert</p>
           <p><strong>Location:</strong> <a href="https://maps.google.com/?q=Insurance+ING+Broker+SRL+Chisinau" target="_blank" rel="noopener noreferrer" class="text-primary underline">Chisinau Headquarters, 9 Pan Halippa St.</a></p>
         </div>`
  };

  return `
    <div class="prose prose-lg max-w-none">
      <p class="lead">${intro[lang]}</p>
      ${summarySection[lang]}
      ${section1[lang]}
      <div class="my-12">
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" alt="${title} Analysis" class="rounded-2xl shadow-2xl" />
      </div>
      ${section2[lang]}
      <div class="bg-secondary text-white p-10 rounded-2xl my-12">
        <h2 class="text-white mt-0">De ce ING Broker este lider în Moldova?</h2>
        <p class="text-white/80">Cu peste 18 ani de experiență, suntem primul broker certificat ISO din Moldova și dezvoltatorii primei aplicații mobile de asigurări. Expertiza noastră în reasigurări internaționale ne permite să plasăm riscuri pe care alții le consideră imposibile. Ne mândrim cu o rată de retenție a clienților de peste 95%, ceea ce demonstrează calitatea serviciilor noastre și încrederea pe care o inspirăm.</p>
      </div>
      ${section3[lang]}
      <div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800" alt="Team Consultation" class="rounded-2xl shadow-lg" />
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" alt="Professional Support" class="rounded-2xl shadow-lg" />
      </div>
      ${faq[lang]}
      ${footer[lang]}
    </div>
  `;
};

const rawTopics = [
  "asigurare-viata-moldova", "asigurare-agricola-seceta", "asigurare-cyber-companii", "asigurare-raspundere-profesionala",
  "asigurare-cargo-transport-marfa", "asigurare-sanatate-privata", "asigurare-animale-companie", "asigurare-echipamente-it",
  "asigurare-evenimente-corporate", "asigurare-constructii-montaj", "asigurare-flota-auto", "asigurare-accidente-angajati",
  "asigurare-drone-comerciale", "asigurare-pierdere-profit", "asigurare-raspundere-directori", "asigurare-panouri-fotovoltaice",
  "asigurare-storno-calatorie", "asigurare-biciclete-trotinete", "asigurare-obiecte-arta", "asigurare-riscuri-cibernetice-imm",
  "asigurare-raspundere-civila-generala", "asigurare-rca-moldova", "asigurare-casco-moldova", "asigurare-carte-verde",
  "asigurare-locuinta-moldova", "asigurare-medicala-calatorii", "asigurare-malpraxis-medical", "asigurare-raspundere-civila-auto",
  "asigurare-bunuri-tranzit", "asigurare-utilaje-industriale", "asigurare-depozite-logistice", "asigurare-riscuri-politice",
  "asigurare-credit-comercial", "asigurare-garantii-licitatie", "asigurare-buna-executie", "asigurare-mentenanta-proiecte",
  "asigurare-raspundere-civila-legala", "asigurare-protectie-juridica", "asigurare-asistenta-rutiera", "asigurare-bagaje-calatorie",
  "asigurare-anulare-eveniment", "asigurare-raspundere-civila-familie", "asigurare-cladiri-birouri", "asigurare-centre-comerciale",
  "asigurare-hoteluri-pensiuni", "asigurare-restaurante-cafenele", "asigurare-saloane-infrumusetare", "asigurare-clinici-private",
  "asigurare-scoli-gradinite", "asigurare-sali-fitness", "asigurare-depozite-cereale", "asigurare-livezi-viticultura",
  "asigurare-ferme-zootehnice", "asigurare-serre-solarii", "asigurare-sisteme-irigatii", "asigurare-parcuri-eoliene",
  "asigurare-biogaz-biomasa", "asigurare-hidrocentrale-mici", "asigurare-stocare-energie", "asigurare-infrastructura-critica",
  "asigurare-poduri-tuneluri", "asigurare-drumuri-autostrazi", "asigurare-retele-electrice", "asigurare-conducte-gaz-apa",
  "asigurare-telecomunicatii", "asigurare-centre-date", "asigurare-software-as-a-service", "asigurare-e-commerce",
  "asigurare-fintech-banking", "asigurare-cripto-active", "asigurare-raspundere-civila-it", "asigurare-eroare-omisiune",
  "asigurare-infidelitate-angajati", "asigurare-bani-tranzit", "asigurare-seifuri-valori", "asigurare-expozitii-targuri",
  "asigurare-concerte-festivaluri", "asigurare-competitii-sportive", "asigurare-raspundere-civila-sportivi", "asigurare-yachturi-ambarcatiuni",
  "asigurare-avioane-private", "asigurare-elicoptere-utilitare", "asigurare-raspundere-civila-aeroportuara", "asigurare-maritima-hull",
  "asigurare-protectie-indemnizatie", "asigurare-riscuri-catastrofale", "asigurare-terorism-sabotaj", "asigurare-raspundere-civila-poluare",
  "asigurare-remediere-mediu", "asigurare-raspundere-civila-produs", "asigurare-rechemare-produs", "asigurare-studii-clinice",
  "asigurare-raspundere-civila-angajator", "asigurare-sanatate-expatriati", "asigurare-repatriere-deces", "asigurare-asistenta-medicala-vip",
  "asigurare-boli-grave", "asigurare-spitalizare-interventii", "asigurare-stomatologica-corporate", "asigurare-optica-medicala",
  "asigurare-maternitate-nastere", "asigurare-kinetoterapie-recuperare", "asigurare-sanatate-mentala", "asigurare-check-up-anual",
  "asigurare-viata-credit-ipotecar", "asigurare-viata-protectie-familie", "asigurare-viata-economisire", "asigurare-viata-studii-copii",
  "asigurare-viata-pensie-privata", "asigurare-viata-keyman", "asigurare-viata-parteneri-afaceri", "asigurare-viata-succesiune",
  "asigurare-viata-donatii-caritate", "asigurare-viata-unit-linked", "asigurare-viata-term-life", "asigurare-viata-whole-life",
  "asigurare-viata-anuitati", "asigurare-viata-invaliditate-permanenta", "asigurare-viata-scutire-prime", "asigurare-viata-clauze-suplimentare",
  "asigurare-viata-beneficiari", "asigurare-viata-fiscalitate-moldova", "asigurare-viata-reducere-impozit", "asigurare-viata-avantaje-angajator",
  "asigurare-viata-fidelizare-angajati", "asigurare-viata-pachete-executive", "asigurare-viata-grup-corporate", "asigurare-viata-microasigurari",
  "asigurare-viata-incluziune-financiara", "asigurare-viata-educatie-financiara", "asigurare-viata-mituri-realitati", "asigurare-viata-cum-alegi-brokerul",
  "asigurare-viata-ing-broker-expertiza", "asigurare-viata-daune-procedura", "asigurare-viata-documente-necesare", "asigurare-viata-termeni-cheie",
  "asigurare-viata-dictionar-asigurari", "asigurare-viata-legislatie-moldova", "asigurare-viata-cnpf-reglementari", "asigurare-viata-piata-moldova-2026",
  "asigurare-viata-tendinte-globale", "asigurare-viata-digitalizare-insurtech", "asigurare-viata-aplicatii-mobile", "asigurare-viata-easigurari-com",
  "asigurare-viata-suport-clienti", "asigurare-viata-recomandari-experti", "asigurare-viata-studii-caz", "asigurare-viata-testimoniale-clienti",
  "asigurare-viata-blog-ing-broker", "asigurare-viata-noutati-piata", "asigurare-viata-evenimente-seminarii", "asigurare-viata-webinare-gratuite",
  "asigurare-viata-ghid-incepatori", "asigurare-viata-ghid-avansati", "asigurare-viata-ghid-corporate", "asigurare-viata-ghid-imm",
  "asigurare-viata-ghid-startups", "asigurare-viata-ghid-freelancers", "asigurare-viata-ghid-it-professionals", "asigurare-viata-ghid-agricultori",
  "asigurare-viata-ghid-transportatori", "asigurare-viata-ghid-constructori", "asigurare-viata-ghid-medici", "asigurare-viata-ghid-avocati",
  "asigurare-viata-ghid-contabili", "asigurare-viata-ghid-arhitecti", "asigurare-viata-ghid-ingineri", "asigurare-viata-ghid-expatriati",
  "asigurare-viata-ghid-diaspora", "asigurare-viata-ghid-investitori", "asigurare-viata-ghid-manageri", "asigurare-viata-ghid-hr-managers",
  "asigurare-viata-ghid-cfo", "asigurare-viata-ghid-ceo", "asigurare-viata-ghid-antreprenori", "asigurare-viata-ghid-familie",
  "asigurare-viata-ghid-copii", "asigurare-viata-ghid-seniori", "asigurare-viata-ghid-tineri", "asigurare-viata-ghid-studenti",
  "asigurare-viata-ghid-sportivi", "asigurare-viata-ghid-calatori", "asigurare-viata-ghid-soferi", "asigurare-viata-ghid-proprietari-case",
  "asigurare-viata-ghid-proprietari-apartamente", "asigurare-viata-ghid-proprietari-afaceri", "asigurare-viata-ghid-asigurari-obligatorii", "asigurare-viata-ghid-asigurari-facultative",
  "asigurare-viata-ghid-reasigurari", "asigurare-viata-ghid-fronting", "asigurare-viata-ghid-claims-management", "asigurare-viata-ghid-risk-management",
  "asigurare-viata-ghid-audit-asigurari", "asigurare-viata-ghid-optimizare-costuri", "asigurare-viata-ghid-alegere-asigurator", "asigurare-viata-ghid-ing-broker-servicii",
  "asigurare-viata-ghid-contact-suport", "asigurare-viata-ghid-final"
];

const topics = rawTopics.map(slug => {
  const base = slug.replace(/-/g, ' ');
  const titleRo = base.charAt(0).toUpperCase() + base.slice(1) + ': Ghid complet pentru Moldova';
  const titleRu = base.charAt(0).toUpperCase() + base.slice(1) + ': Полное руководство для Молдовы';
  const titleEn = base.charAt(0).toUpperCase() + base.slice(1) + ': Complete guide for Moldova';
  
  let tag = 'Asigurare';
  if (slug.includes('viata')) tag = 'Viață';
  else if (slug.includes('agricola')) tag = 'Agricultură';
  else if (slug.includes('cyber')) tag = 'Cyber';
  else if (slug.includes('it')) tag = 'IT';
  else if (slug.includes('auto')) tag = 'Auto';
  else if (slug.includes('constructii')) tag = 'Construcții';
  else if (slug.includes('sanatate')) tag = 'Sănătate';
  else if (slug.includes('calatorie')) tag = 'Călătorie';
  else if (slug.includes('business')) tag = 'Business';
  else if (slug.includes('energie')) tag = 'Energie';
  
  return { slug, titleRo, titleRu, titleEn, tag };
});

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

export const articles: Record<string, Article[]> = {
  ro: [
{
      id: '101',
      slug: 'asigurare-constructii-montaj-car-ear-moldova-2026',
      title: 'Asigurare construcții-montaj CAR/EAR în Moldova: protecție completă pentru proiecte de orice dimensiune',
      excerpt: 'Ghid complet despre asigurarea CAR/EAR pentru constructori și investitori din Moldova. Ce acoperă, cine are nevoie, cum obții polița.',
      content: `
        <h2>Ce este asigurarea CAR/EAR și cum funcționează în Moldova?</h2>
        <p>Asigurarea CAR (Contractors All Risks) și EAR (Erection All Risks) este polița care protejează proiectele de construcții și montaj de la prima zi de lucru până la recepția finală. CAR acoperă lucrările de construcție (clădiri, drumuri, poduri, infrastructură), iar EAR acoperă montajul de echipamente și instalații industriale.</p>
        <p>În Republica Moldova, această asigurare capătă o importanță deosebită în contextul proiectelor finanțate din fonduri europene. Planul de creștere UE pentru Moldova, în valoare de 1,8 miliarde de euro, va genera sute de proiecte de infrastructură care necesită asigurare CAR/EAR obligatorie. Fiecare constructor care dorește să participe la aceste proiecte trebuie să prezinte dovada asigurării.</p>
        <p>Insurance ING Broker SRL facilitează obținerea polițelor CAR/EAR atât de la asigurătorii locali, cât și prin intermediul reasigurătorilor internaționali pentru proiectele de mare valoare care depășesc capacitatea pieței locale.</p>

        <h2>Ce acoperă polița CAR/EAR?</h2>
        <p><strong>Lucrările de construcție.</strong> Toate daunele materiale aduse lucrărilor în curs de execuție, inclusiv cele cauzate de incendiu, explozie, furtuni, inundații, cutremure, alunecări de teren, vandalism și furt de materiale de pe șantier.</p>
        <p><strong>Materialele și echipamentele de construcție.</strong> Macarale, excavatoare, cofraje, schele și alte echipamente utilizate pe șantier.</p>
        <p><strong>Răspunderea civilă față de terți.</strong> Dacă lucrările de construcție provoacă daune vecinilor sau trecătorilor — de exemplu, un perete care se prăbușește pe mașina unui vecin sau un tub de apă spart care inundă proprietatea adiacentă.</p>
        <p><strong>Perioada de întreținere.</strong> Daunele descoperite după recepția lucrării, pe perioada de garanție a constructorului.</p>
        <p><strong>Cheltuieli suplimentare.</strong> Costurile de demolare și evacuare a resturilor, orele suplimentare necesare pentru recuperarea întârzierii, și transportul de urgență al materialelor.</p>

        <h2>Cine are nevoie de CAR/EAR în Moldova?</h2>
        <p><strong>Companiile de construcții</strong> care execută lucrări civile, industriale sau de infrastructură. Indiferent dacă construiești un bloc de locuințe în Chișinău sau un drum județean în Bălți, riscurile de pe șantier sunt reale și costisitoare.</p>
        <p><strong>Investitorii și dezvoltatorii imobiliari</strong> care finanțează proiecte de construcție. Chiar dacă nu execuți lucrarea, investiția ta trebuie protejată de riscurile constructorului.</p>
        <p><strong>Companiile care montează echipamente industriale</strong> — linii de producție, turbine, transformatoare, sisteme de ventilație și climatizare. Montajul unor echipamente scumpe implică riscuri semnificative de deteriorare.</p>
        <p><strong>Subcontractorii</strong> care execută lucrări specializate: instalații electrice, sanitare, termice. Beneficiarii cer din ce în ce mai frecvent dovada asigurării subcontractorului.</p>
        <p><strong>Companiile care participă la licitații publice.</strong> Proiectele finanțate de stat sau din fonduri UE cer obligatoriu asigurare CAR/EAR ca o condiție de participare.</p>

        <h2>Exemple de situații acoperite de CAR/EAR</h2>
        <p>O furtună puternică lovește un șantier de construcție în Chișinău. Acoperișul parțial montat este distrus, schelele sunt răsturnate, iar materialele de pe șantier sunt deteriorate de apă. Costul pagubelor depășește 500.000 de lei. Polița CAR acoperă integral refacerea.</p>
        <p>Un muncitor greșește la montajul unui transformator industrial într-o fabrică din zona liberă. Transformatorul cade și se deteriorează. Valoarea echipamentului este de 200.000 de euro. Polița EAR acoperă înlocuirea echipamentului.</p>
        <p>La construcția unui bloc, excavatorul deteriorează conducta de gaz a blocului vecin. Locatarii sunt evacuați, iar pagubele depășesc 300.000 de lei. Secțiunea de răspundere civilă a poliței CAR acoperă despăgubirile.</p>

        <h2>Cât costă asigurarea CAR/EAR în Moldova?</h2>
        <p>Prima de asigurare se calculează ca procent din valoarea totală a proiectului. Orientativ, pentru proiecte de construcție standard, rata este de 0,15-0,5% din valoarea contractului. Pentru montaj industrial, rata poate fi de 0,3-0,8% din valoarea echipamentelor.</p>
        <p>Un proiect de construcție de 10 milioane de lei ar costa între 15.000 și 50.000 de lei pe toată durata execuției — o sumă modestă comparativ cu riscurile acoperite.</p>

        <h2>Avantaje și riscuri fără asigurare</h2>
        <p><strong>Avantajele asigurării CAR/EAR:</strong> protecție financiară completă a investiției, acoperirea răspunderii față de terți (vecini, trecători), conformitate cu cerințele licitațiilor publice, credibilitate sporită în fața investitorilor și beneficiarilor, și acoperirea perioadei de garanție post-recepție.</p>
        <p><strong>Riscuri fără asigurare:</strong> un singur incident pe șantier poate duce la falimentul constructorului, răspunderea personală a directorului pentru daunele cauzate terților, excluderea de la licitațiile publice și proiectele UE, și pierderea integrală a investiției în caz de catastrofă naturală.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente despre asigurarea CAR/EAR</h2>
          <h4 class="font-bold mt-4">Este obligatorie asigurarea CAR/EAR în Moldova?</h4>
          <p>Nu este obligatorie prin lege pentru toate proiectele, dar este cerută obligatoriu în majoritatea licitațiilor publice și în proiectele finanțate din fonduri europene. De asemenea, mulți beneficiari privați o cer ca o condiție contractuală.</p>
          <h4 class="font-bold mt-4">Cine plătește asigurarea — constructorul sau investitorul?</h4>
          <p>De regulă, constructorul include costul asigurării în devizul proiectului. Dar investitorul poate alege să încheie polița direct pentru a se asigura că acoperirea este adecvată.</p>
          <h4 class="font-bold mt-4">Polița acoperă și greșelile de proiectare?</h4>
          <p>Polița CAR/EAR standard nu acoperă erorile de proiectare, dar există extensii speciale care pot fi adăugate. ING Broker te consiliază privind extensiile necesare.</p>
          <h4 class="font-bold mt-4">Ce se întâmplă dacă proiectul este întârziat?</h4>
          <p>Polița poate fi prelungită pentru perioada suplimentară, de regulă cu o primă proporțională. Este important să notifici asigurătorul din timp.</p>
          <h4 class="font-bold mt-4">Cum obțin asigurare CAR/EAR prin ING Broker?</h4>
          <p>Contactează-ne cu devizul proiectului și contractul de execuție. Vom analiza riscurile, vom solicita oferte de la mai mulți asigurători și vom negocia cele mai bune condiții. Telefon: +373 69 526 003.</p>
        </div>

        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Solicită ofertă CAR/EAR gratuită</h3>
          <p><strong>Insurance ING Broker SRL</strong> — broker licențiat CNPF, experiență din 2006</p>
          <p>📍 str. Pan Halippa 9, Chișinău, MD-2059 | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/Constructii-montaj.jpeg',
      date: '15 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Construcții', 'CAR/EAR', 'Corporate', 'Moldova'],
      seo: {
        title: 'Asigurare construcții-montaj CAR/EAR Moldova 2026 | ING Broker',
        description: 'Asigurare CAR/EAR pentru proiecte de construcții și montaj în Moldova. Protecție completă pentru constructori și investitori. Broker licențiat CNPF.',
        keywords: 'asigurare constructii Moldova, CAR EAR insurance, asigurare montaj, asigurare proiecte constructie, asigurare constructor, ING Broker'
      }
    },
    {
      id: '102',
      slug: 'asigurare-raspundere-profesionala-pi-moldova-2026',
      title: 'Asigurare de răspundere profesională (PI) în Moldova: cine are nevoie și de ce',
      excerpt: 'Protecție pentru profesioniștii din IT, avocatură, contabilitate, arhitectură. Ce acoperă, cât costă, cum obții prin ING Broker.',
      content: `
        <h2>Ce este asigurarea de răspundere profesională?</h2>
        <p>Asigurarea de răspundere profesională, cunoscută internațional ca Professional Indemnity (PI) sau Errors & Omissions (E&O), protejează profesioniștii și companiile de servicii de pretențiile financiare ale clienților care consideră că au suferit pierderi din cauza unei erori, omisiuni sau neglijențe profesionale.</p>
        <p>În limbaj simplu: dacă ești consultant, programator, contabil sau avocat și clientul tău suferă o pierdere financiară din cauza unei greșeli pe care ai făcut-o în prestarea serviciilor, această asigurare acoperă despăgubirile și cheltuielile de apărare juridică.</p>
        <p>În Republica Moldova, acest tip de asigurare devine din ce în ce mai relevant pe măsură ce companiile locale prestează servicii pentru clienți europeni care cer explicit dovada asigurării profesionale.</p>

        <h2>Cine are nevoie de asigurare PI în Moldova?</h2>
        <p><strong>Companiile IT și de outsourcing software.</strong> Sectorul IT moldovenesc, cu peste 10% din PIB, este cel mai expus. O eroare într-un software livrat unui client european poate genera pierderi de milioane de euro. Clienții din UE cer din ce în ce mai frecvent certificatul de asigurare PI ca o condiție de colaborare.</p>
        <p><strong>Firmele de contabilitate și audit.</strong> O eroare în bilanțul unui client, o declarație fiscală incorectă sau o omisiune în raportul de audit pot genera pierderi financiare semnificative pentru clientul afectat.</p>
        <p><strong>Cabinetele de avocatură.</strong> Un sfat juridic greșit, o termenă ratată sau un document întocmit incorect pot prejudicia clientul și pot genera procese de malpraxis.</p>
        <p><strong>Birourile de arhitectură și inginerie.</strong> Erorile de proiectare pot duce la defecte de construcție, costuri suplimentare de remediere și chiar accidente pe șantier.</p>
        <p><strong>Agenții imobiliari și evaluatorii.</strong> Evaluări incorecte sau sfaturi eronate pot prejudicia financiar cumpărătorii sau vânzătorii de proprietăți.</p>
        <p><strong>Consultanții de management și business.</strong> Recomandări strategice greșite pot genera pierderi pentru companiile-client.</p>
        <p><strong>Brokerii de asigurare.</strong> Da, inclusiv brokerii de asigurare trebuie să aibă asigurare PI — este o cerință CNPF. ING Broker are această asigurare și înțelege importanța ei din experiență proprie.</p>

        <h2>Ce acoperă polița de răspundere profesională?</h2>
        <p><strong>Despăgubirile datorate clienților prejudiciați</strong> — sumele pe care instanța le acordă sau care sunt convenite prin tranzacție.</p>
        <p><strong>Cheltuielile de apărare juridică</strong> — onorarii avocați, taxe judiciare, costuri de expertiză. Aceste cheltuieli pot fi considerabile chiar și atunci când profesionistul nu este găsit vinovat.</p>
        <p><strong>Costurile de investigație</strong> — cheltuielile asociate investigațiilor efectuate de autoritățile de reglementare (CNPF, BNM, autorități fiscale).</p>
        <p><strong>Pierderea documentelor</strong> — costurile de reconstituire a documentelor clientului pierdute sau deteriorate din neglijența profesionistului.</p>
        <p><strong>Defăimarea profesională</strong> — pretențiile legate de declarații neintenționate care afectează reputația unui terț.</p>

        <h2>Exemple practice din piața moldovenească</h2>
        <p>O firmă IT din Chișinău livrează un modul de plăți online pentru un client din Germania. Modulul are o vulnerabilitate de securitate care permite accesul neautorizat la datele cardurilor. Clientul german suferă pierderi de 300.000 de euro și dă în judecată firma moldovenească. Fără asigurare PI, firma IT răspunde cu tot patrimoniul.</p>
        <p>Un birou de contabilitate din Bălți face o eroare în declarația fiscală a unui client. Serviciul Fiscal calculează o penalitate de 150.000 de lei. Clientul se întoarce împotriva contabilului pentru recuperarea prejudiciului.</p>
        <p>Un arhitect proiectează o clădire comercială. Din cauza unei erori de calcul structural, fundația cedează parțial la doi ani de la construcție. Costurile de remediere depășesc 2 milioane de lei. Proprietarul clădirii dă în judecată arhitectul.</p>

        <h2>Cât costă asigurarea PI în Moldova?</h2>
        <p>Prima depinde de tipul de activitate, cifra de afaceri, numărul de angajați, istoricul de daune și limita de acoperire. Orientativ:</p>
        <ul>
          <li>Firmă IT cu 20 angajați, limită 500.000 EUR: de la 2.000-5.000 EUR pe an</li>
          <li>Birou contabilitate cu 10 angajați, limită 200.000 EUR: de la 1.000-3.000 EUR pe an</li>
          <li>Cabinet de avocatură, limită 100.000 EUR: de la 800-2.500 EUR pe an</li>
        </ul>
        <p>Comparativ cu riscurile acoperite, costul este modest. Un singur proces de malpraxis poate depăși de zeci de ori prima anuală.</p>

        <h2>Asigurarea PI obligatorie — cerințe actuale și viitoare</h2>
        <p>În prezent, în Moldova, asigurarea PI este obligatorie pentru brokerii de asigurare (cerința CNPF), auditorii financiari, notarii publici și avocații (în anumite condiții). Pe măsură ce Moldova avansează în procesul de integrare europeană, lista profesiilor cu PI obligatorie se va extinde semnificativ, urmând modelul UE.</p>
        <p>Companiile IT care lucrează cu clienți din UE se confruntă deja cu cerința contractuală de a avea PI — chiar dacă legislația moldovenească nu o impune încă.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">Ce este asigurarea PI pe scurt?</h4>
          <p>PI (Professional Indemnity) este asigurarea care protejează profesioniștii de pretențiile financiare ale clienților care consideră că au suferit pierderi din cauza erorilor sau omisiunilor profesionale.</p>
          <h4 class="font-bold mt-4">Este obligatorie în Moldova?</h4>
          <p>Este obligatorie pentru brokeri de asigurare, auditori și notari. Pentru alte profesii nu este încă obligatorie prin lege, dar este cerută contractual de clienții din UE.</p>
          <h4 class="font-bold mt-4">Companiile IT trebuie să aibă PI?</h4>
          <p>Nu este obligatorie legal, dar clienții europeni o cer din ce în ce mai frecvent. Fără PI, companiile IT moldovenești pierd contracte.</p>
          <h4 class="font-bold mt-4">Acoperă și erorile angajaților mei?</h4>
          <p>Da. Polița acoperă erorile profesionale comise de toți angajații companiei, nu doar de directori.</p>
          <h4 class="font-bold mt-4">Cum obțin PI prin ING Broker?</h4>
          <p>Contactați-ne cu descrierea activității, cifra de afaceri și cerințele clientului. Vom solicita oferte și vom negocia cele mai bune condiții. Telefon: +373 69 526 003.</p>
        </div>

        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Solicită ofertă PI gratuită</h3>
          <p><strong>Insurance ING Broker SRL</strong> — broker licențiat CNPF, experiență din 2006</p>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/PI-insurance.jpg',
      date: '14 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Răspundere profesională', 'PI', 'IT', 'Corporate'],
      seo: {
        title: 'Asigurare răspundere profesională PI Moldova 2026 | ING Broker',
        description: 'Asigurare PI pentru IT, avocați, contabili, arhitecți din Moldova. Protecție erori și omisiuni. Cerută de clienții UE. Broker licențiat.',
        keywords: 'asigurare raspundere profesionala Moldova, PI insurance, errors omissions, asigurare profesionala IT, ING Broker'
      }
    },
    {
      id: '103',
      slug: 'asigurare-bunuri-proprietati-comerciale-moldova-2026',
      title: 'Asigurare bunuri și proprietăți comerciale în Moldova: cum îți protejezi afacerea',
      excerpt: 'Ghid complet despre asigurarea property pentru fabrici, depozite, birouri și echipamente. Ce acoperă, cum se evaluează, cât costă.',
      content: `
        <h2>De ce asigurarea proprietăților comerciale este esențială</h2>
        <p>Activele fizice ale unei companii — clădirea, echipamentele, stocurile, materiile prime — reprezintă baza pe care funcționează întreaga afacere. Un incendiu într-un depozit, o inundație într-o fabrică sau un furt din birou pot opri activitatea companiei pentru săptămâni sau luni și pot genera pierderi care depășesc capacitatea de recuperare a firmei.</p>
        <p>În 2025, piața asigurărilor de proprietăți din Moldova a crescut cu 21% — cea mai mare creștere din toate segmentele. Aceasta reflectă faptul că din ce în ce mai mulți antreprenori moldoveni înțeleg importanța protejării activelor comerciale.</p>
        <p>Insurance ING Broker SRL oferă soluții complete de asigurare property, comparând ofertele tuturor asigurătorilor din Moldova și, pentru riscurile mari, accesând piețele internaționale de reasigurare.</p>

        <h2>Ce tipuri de active comerciale pot fi asigurate?</h2>
        <p><strong>Clădiri comerciale și industriale.</strong> Birouri, fabrici, depozite, magazine, ateliere, hale de producție. Asigurarea acoperă structura clădirii, instalațiile fixe, finisajele interioare și exterioare.</p>
        <p><strong>Echipamente și utilaje.</strong> Linii de producție, mașini-unelte, calculatoare și servere, echipamente medicale, echipamente de laborator. Valoarea echipamentelor poate depăși valoarea clădirii în multe industrii.</p>
        <p><strong>Stocuri și mărfuri.</strong> Materii prime, produse în curs de fabricație, produse finite, mărfuri în depozit. Stocurile fluctuează sezonier, iar polița trebuie ajustată corespunzător.</p>
        <p><strong>Mobilier de birou și electronice.</strong> Mobilier, echipamente IT, sisteme de securitate, instalații de climatizare.</p>
        <p><strong>Amenajări și îmbunătățiri ale spațiilor închiriate.</strong> Dacă ai investit în amenajarea unui spațiu închiriat, aceste investiții trebuie protejate separat.</p>

        <h2>Ce riscuri acoperă asigurarea property?</h2>
        <p><strong>Incendiu și explozie</strong> — cel mai frecvent risc pentru proprietățile comerciale. Un scurtcircuit electric, o neglijență la sudură sau o defecțiune la instalația de gaz pot distruge ani de investiții în câteva ore.</p>
        <p><strong>Inundații și avarii de apă</strong> — conducte sparte, infiltrații, acumulări de apă pluvială. Riscul este deosebit de mare pentru depozitele subterane și parterurile clădirilor din Chișinău.</p>
        <p><strong>Furtuni și fenomene meteorologice extreme</strong> — grindină, vânt puternic, tornadă, ninsori abundente care pot deteriora acoperișurile și structurile.</p>
        <p><strong>Cutremure</strong> — Moldova se află în zona seismică Vrancea, cu risc moderat dar real de cutremure semnificative.</p>
        <p><strong>Furt și vandalism</strong> — efracția, jaful, distrugerea intenționată a proprietății. Riscul este mai mare pentru proprietățile izolate sau cu sisteme de securitate inadecvate.</p>
        <p><strong>Avarii ale instalațiilor și echipamentelor</strong> — defecțiuni mecanice, supratensiuni electrice, căderi de presiune.</p>

        <h2>Cât costă asigurarea property în Moldova?</h2>
        <p>Prima de asigurare depinde de valoarea activelor, tipul construcției, măsurile de protecție existente, istoricul de daune și locația. Orientativ:</p>
        <ul>
          <li>Birou comercial, valoare 2 milioane lei: primă de la 3.000-8.000 lei pe an</li>
          <li>Depozit industrial, valoare 10 milioane lei: primă de la 15.000-40.000 lei pe an</li>
          <li>Fabrică de producție, valoare 30 milioane lei: primă de la 45.000-120.000 lei pe an</li>
        </ul>
        <p>Raportul primă/valoare este de aproximativ 0,15-0,4%, ceea ce face asigurarea property una dintre cele mai accesibile forme de protecție a investiției.</p>

        <h2>Evaluarea corectă a activelor — de ce contează</h2>
        <p>Cea mai frecventă greșeală pe care o fac companiile din Moldova este subasigurarea — declararea unei valori a activelor mai mici decât valoarea reală, pentru a plăti o primă mai mică. Aceasta este o economie falsă.</p>
        <p>Dacă valoarea reală a depozitului tău este de 5 milioane de lei, dar ai declarat 3 milioane pentru a plăti mai puțin, în caz de daună vei primi despăgubirea proporțional redusă. Un incendiu care provoacă daune de 2 milioane de lei va fi despăgubit cu doar 1,2 milioane (proporțional cu raportul 3/5). Diferența de 800.000 de lei o plătești din buzunar.</p>
        <p>ING Broker te asistă în evaluarea corectă a activelor pentru a evita această capcană.</p>

        <h2>Industrii care au nevoie de asigurare property</h2>
        <p><strong>Producție și industrie.</strong> Fabrici de prelucrare alimentară, întreprinderi textile, ateliere de prelucrare a metalelor — echipamente scumpe și stocuri mari.</p>
        <p><strong>Retail și comerț.</strong> Magazine, supermarketuri, depozite de distribuție — mărfuri și echipamente comerciale.</p>
        <p><strong>Logistică și transport.</strong> Depozite, terminale cargo, baze de vehicule.</p>
        <p><strong>Agricultură.</strong> Silozuri, frigidere, utilaje agricole, producție agricolă depozitată.</p>
        <p><strong>HoReCa.</strong> Hoteluri, restaurante, cafenele — echipamente de bucătărie, mobilier, amenajări.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">Ce este property all risks?</h4>
          <p>Este polița care acoperă TOATE riscurile cu excepția celor explicit excluse (război, contaminare nucleară). Este forma cea mai completă de protecție a bunurilor comerciale.</p>
          <h4 class="font-bold mt-4">Asigurarea acoperă și stocurile?</h4>
          <p>Da, stocurile pot fi incluse în poliță. Valoarea declarată trebuie ajustată dacă stocurile fluctuează sezonier.</p>
          <h4 class="font-bold mt-4">Acoperă și echipamentele închiriate?</h4>
          <p>Echipamentele în leasing sau închiriate pot fi asigurate, de regulă la cererea companiei de leasing. ING Broker structurează polița corespunzător.</p>
          <h4 class="font-bold mt-4">Ce documente sunt necesare pentru ofertă?</h4>
          <p>Lista activelor cu valori, adresa proprietăților, tipul construcției, măsurile de protecție (alarme, sprinklere, pază) și istoricul de daune. ING Broker te ghidează prin proces.</p>
        </div>

        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Protejează activele companiei tale</h3>
          <p><strong>Insurance ING Broker SRL</strong> — comparăm ofertele tuturor asigurătorilor din Moldova</p>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/Constructii-Comerciale.jpg',
      date: '13 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Property', 'Bunuri', 'Corporate', 'Moldova'],
      seo: {
        title: 'Asigurare bunuri și proprietăți comerciale Moldova 2026 | ING Broker',
        description: 'Asigurare property pentru fabrici, depozite, birouri în Moldova. Acoperire incendiu, inundații, furt. Comparare gratuită de la ING Broker.',
        keywords: 'asigurare bunuri comerciale Moldova, asigurare proprietati, property insurance, asigurare fabrica depozit, ING Broker'
      }
    },
    {
      id: '104',
      slug: 'asigurare-cargo-transport-cmr-moldova-2026',
      title: 'Asigurare cargo și transport CMR în Moldova: protecție pentru transportatori și mărfuri',
      excerpt: 'Asigurare CMR pentru transportatori, asigurare mărfuri în tranzit, asigurare flote auto comerciale. Ghid complet pentru companiile de logistică.',
      content: `
        <h2>Moldova ca hub logistic — oportunități și riscuri</h2>
        <p>Republica Moldova ocupă o poziție strategică pe coridoarele de transport între Europa de Vest și piețele din Est. Companiile moldovenești de transport internațional operează pe rute care traversează România, Ungaria, Polonia, Germania, Franța, Italia și alte state europene. Sectorul transporturilor rutiere este unul dintre pilonii economiei moldovenești, generând venituri semnificative din servicii de export.</p>
        <p>Dar transportul internațional de mărfuri implică riscuri considerabile: accidente rutiere, furt de marfă, deteriorarea mărfurilor, întârzieri, avarii mecanice. Un singur incident poate genera pierderi de sute de mii de euro — suficient pentru a destabiliza financiar chiar și o companie de transport experimentată.</p>

        <h2>Ce tipuri de asigurare au nevoie companiile de transport?</h2>
        <p><strong>Asigurarea CMR (răspunderea transportatorului).</strong> Conform Convenției CMR, la care Republica Moldova este parte, transportatorul este responsabil pentru deteriorarea sau pierderea mărfurilor din momentul preluării până la livrare. Asigurarea CMR acoperă această răspundere. Fără ea, transportatorul plătește despăgubirile din patrimoniul propriu.</p>
        <p><strong>Asigurarea mărfurilor în tranzit (cargo insurance).</strong> Această poliță protejează proprietarul mărfurilor, nu transportatorul. Acoperă daunele aduse mărfurilor indiferent de cauză: accident, furt, incendiu, inundație, contaminare. Este esențială pentru importatorii și exportatorii moldoveni.</p>
        <p><strong>Asigurarea flotei auto (CASCO pentru vehicule comerciale).</strong> Acoperă daunele aduse camioanelor, remorcilor și semiremorcinelor. Pentru o flotă de 10-50 de vehicule, costurile de reparație fără asigurare pot fi devastatoare.</p>
        <p><strong>RCA pentru flote.</strong> Asigurarea obligatorie de răspundere civilă auto, cu tarife negociate pentru flote mari.</p>

        <h2>Asigurarea CMR — detalii esențiale</h2>
        <p>Convenția CMR stabilește răspunderea transportatorului la maximum 8,33 DST (Drepturi Speciale de Tragere) per kilogram brut de marfă pierdută sau deteriorată. Aceasta înseamnă că pentru un camion de 20 de tone, despăgubirea maximă poate fi de aproximativ 170.000 EUR.</p>
        <p>Asigurarea CMR acoperă: pierderea totală sau parțială a mărfii, deteriorarea mărfii în timpul transportului, întârzierea la livrare (în anumite condiții), și cheltuielile de apărare juridică în cazul unui litigiu cu expeditorul sau destinatarul.</p>
        <p>Ce NU acoperă: mărfurile interzise sau nedeclarate, daunele cauzate de ambalarea inadecvată a expeditorului, și pierderi din cauza forței majore (în anumite condiții).</p>

        <h2>Asigurarea mărfurilor în tranzit — pentru cine?</h2>
        <p><strong>Exportatorii moldoveni</strong> care livrează produse în UE, Ucraina, Rusia sau alte piețe. Vinurile, produsele alimentare, textilele și componentele IT exportate au nevoie de protecție pe tot traseul.</p>
        <p><strong>Importatorii</strong> care aduc echipamente, materii prime sau mărfuri de consum în Moldova. Marfa poate fi deteriorată în port, la transbordare sau pe drum.</p>
        <p><strong>Companiile de trading</strong> care cumpără și revând mărfuri internaționale fără a le procesa — riscul este în tranzit.</p>

        <h2>Asigurarea flotelor auto comerciale</h2>
        <p>O companie de transport cu 20 de camioane are investiții de milioane de lei în flotă. Fiecare vehicul circulă zilnic pe drumuri cu condiții variabile, în condiții meteorologice diferite, prin țări cu reguli de circulație diferite. Riscul de accident este constant.</p>
        <p>ING Broker negociază pachete speciale pentru flote: CASCO cu condiții preferențiale pentru mai multe vehicule, RCA cu tarife de volum, Carte Verde pentru toată flota, și asistență la dosarele de daună din orice țară europeană.</p>

        <h2>Cât costă asigurarea pentru transportatori?</h2>
        <ul>
          <li>CMR, limită 200.000 EUR per transport: de la 1.500-4.000 EUR pe an</li>
          <li>Cargo insurance pentru mărfuri, cursă individuală: 0,1-0,5% din valoarea mărfii</li>
          <li>CASCO flotă 10 camioane: negociabil, economii de 15-25% față de polițe individuale</li>
        </ul>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">Este CMR obligatorie pentru transportatori?</h4>
          <p>Asigurarea CMR nu este obligatorie prin lege, dar este cerută de majoritatea expeditorilor și clienților. Fără ea, transportatorul răspunde cu patrimoniul propriu pentru pierderea sau deteriorarea mărfii.</p>
          <h4 class="font-bold mt-4">Cine plătește cargo insurance — expeditorul sau destinatarul?</h4>
          <p>Depinde de termenii comerciali (Incoterms). La CIF sau CIP, vânzătorul plătește. La FOB sau FCA, cumpărătorul plătește. ING Broker te consiliază în funcție de contractul tău.</p>
          <h4 class="font-bold mt-4">Asigurarea acoperă și furtul din camion?</h4>
          <p>Da, atât CMR cât și cargo insurance acoperă furtul în anumite condiții. Este important ca transportatorul să ia măsuri rezonabile de securitate (parcare în locuri securizate, sigilii pe marfă).</p>
          <h4 class="font-bold mt-4">Pot asigura un singur transport sau doar anual?</h4>
          <p>Ambele variante sunt disponibile. Poliță per cursă (pentru transporturi ocazionale) sau poliță anuală (pentru companii cu transporturi regulate). Polița anuală este de regulă mai avantajoasă.</p>
          <h4 class="font-bold mt-4">Ce fac dacă am un accident cu marfa în alt stat?</h4>
          <p>Contactați imediat ING Broker la +373 69 526 003. Vă asistăm la completarea documentelor, la comunicarea cu asigurătorul și la gestionarea dosarului de daună, indiferent de țara în care s-a produs incidentul.</p>
        </div>

        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Solicită ofertă pentru transportul tău</h3>
          <p><strong>Insurance ING Broker SRL</strong> — soluții complete pentru transportatori</p>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/flota-2.jpg',
      date: '12 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Transport', 'Cargo', 'CMR', 'Flote auto', 'Corporate'],
      seo: {
        title: 'Asigurare cargo transport CMR Moldova 2026 | ING Broker',
        description: 'Asigurare CMR, cargo și flote auto pentru transportatori din Moldova. Protecție mărfuri în tranzit. Broker licențiat cu experiență internațională.',
        keywords: 'asigurare cargo Moldova, CMR insurance, asigurare transport, asigurare marfuri tranzit, asigurare flote auto, ING Broker'
      }
    },
    {
      id: '105',
      slug: 'asigurare-intrerupere-activitate-business-interruption-moldova-2026',
      title: 'Asigurare de întrerupere a activității (business interruption) în Moldova: protejează veniturile afacerii tale',
      excerpt: 'Ce se întâmplă cu veniturile companiei tale dacă un incendiu oprește producția 3 luni? Business interruption insurance acoperă pierderile financiare.',
      content: `
        <h2>Ce este asigurarea de întrerupere a activității?</h2>
        <p>Asigurarea de întrerupere a activității, cunoscută internațional ca Business Interruption (BI) Insurance, acoperă pierderile financiare pe care o companie le suferă atunci când activitatea ei este oprită sau redusă din cauza unui eveniment asigurat. Este polița care protejează nu clădirea sau echipamentele, ci veniturile și profitul companiei.</p>
        <p>Gândește-te la un scenariu simplu: un incendiu distruge parțial fabrica ta. Asigurarea property acoperă reparația clădirii și înlocuirea echipamentelor. Dar cine acoperă salariile angajaților pe care trebuie să le plătești în continuare? Ratele la credite? Chiriile? Pierderile de contracte? Clienții care se duc la concurență? Acestea sunt exact pierderile pe care le acoperă asigurarea BI.</p>

        <h2>De ce companiile din Moldova au nevoie de această asigurare?</h2>
        <p>Majoritatea companiilor din Moldova au asigurare property (bunuri), dar foarte puține au asigurare de întrerupere a activității. Aceasta este o lacună critică în protecția financiară. Statisticile internaționale arată că 40% din companiile care suferă o întrerupere majoră a activității fără asigurare BI nu își mai revin și dau faliment în termen de 12 luni.</p>
        <p>Un depozit frigorific din Chișinău suferă o avarie majoră la instalația de răcire în luna august, în plin sezon de fructe. Reparația durează 6 săptămâni. Mărfurile perisabile sunt pierdute (acoperite de property). Dar clienții — supermarketurile și restaurantele — nu mai așteaptă și trec la alți furnizori. Pierderea de contracte și venituri pe următoarele 6 luni depășește valoarea mărfurilor pierdute. Fără BI, compania poate intra în insolvență.</p>

        <h2>Ce acoperă polița BI?</h2>
        <p><strong>Profitul net pierdut.</strong> Diferența dintre veniturile pe care compania le-ar fi realizat în condiții normale și veniturile efectiv realizate în perioada de întrerupere.</p>
        <p><strong>Cheltuielile fixe continue.</strong> Salarii, chirii, rate la credite, utilități, asigurări — costurile care continuă să curgă chiar dacă activitatea s-a oprit.</p>
        <p><strong>Cheltuielile suplimentare de funcționare.</strong> Costurile de mutare temporară într-un alt spațiu, închirierea de echipamente de înlocuire, ore suplimentare pentru recuperarea producției.</p>
        <p><strong>Pierderea clienților cheie.</strong> În anumite condiții, polița poate acoperi pierderile rezultate din migrarea clienților la concurență.</p>

        <h2>Cum funcționează BI în practică?</h2>
        <p>BI Insurance nu funcționează singură — este întotdeauna legată de o poliță de asigurare property. Mecanismul este simplu: dacă un eveniment acoperit de polița property (incendiu, inundație, explozie) provoacă și întreruperea activității, polița BI se activează și acoperă pierderile financiare pe perioada de refacere.</p>
        <p>Perioada de despăgubire se stabilește la încheierea poliței — de obicei 6, 12 sau 24 de luni. Cu cât perioada este mai lungă, cu atât protecția este mai completă, dar și prima este mai mare.</p>

        <h2>Industrii care au cel mai mult nevoie de BI</h2>
        <p><strong>Producție și industrie alimentară.</strong> Oprirea liniei de producție înseamnă pierdere imediată de comenzi și clienți.</p>
        <p><strong>Logistică și depozitare.</strong> Indisponibilitatea depozitului blochează întregul lanț de distribuție.</p>
        <p><strong>HoReCa.</strong> Un hotel sau restaurant închis 3 luni din cauza unui incendiu pierde sezonul și clienții fideli.</p>
        <p><strong>Retail.</strong> Un magazin inundat pierde vânzările din perioada de reparație și riscă să piardă locația dacă nu poate plăti chiria.</p>
        <p><strong>IT și servicii.</strong> Chiar și companiile de servicii pot suferi întreruperi — un centru de date afectat de un incendiu oprește serviciile pentru toți clienții.</p>

        <h2>Cât costă asigurarea BI?</h2>
        <p>Prima se calculează în funcție de profitul brut anual al companiei, perioada de despăgubire aleasă și sectorul de activitate. De regulă, prima BI se adaugă la prima property și reprezintă un supliment de 20-50% din prima property.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">Pot cumpăra BI fără asigurare property?</h4>
          <p>Nu. BI funcționează ca o extensie a poliței de asigurare property. Evenimentul care declanșează BI trebuie să fie mai întâi acoperit de polița property.</p>
          <h4 class="font-bold mt-4">Acoperă BI și pandemia sau epidemia?</h4>
          <p>Polițele standard de BI nu acoperă pierderile din pandemie. Există extensii speciale, dar sunt rare și scumpe. ING Broker vă poate consilia privind opțiunile disponibile.</p>
          <h4 class="font-bold mt-4">Ce este perioada de indemnizare?</h4>
          <p>Este perioada maximă pentru care polița plătește despăgubiri după un eveniment. Se alege la încheierea poliței: 6, 12 sau 24 de luni. Recomandarea noastră: minim 12 luni.</p>
          <h4 class="font-bold mt-4">Cum se calculează suma asigurată?</h4>
          <p>Se bazează pe profitul brut anual al companiei (venituri minus costuri variabile). ING Broker vă ajută la calculul corect pentru a evita subasigurarea.</p>
        </div>

        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Nu lăsa un incendiu să îți oprească afacerea definitiv</h3>
          <p><strong>Insurance ING Broker SRL</strong> — asigurare BI pentru companii din Moldova</p>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/business-intrertuption.jpg',
      date: '11 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Business Interruption', 'Property', 'Corporate', 'Moldova'],
      seo: {
        title: 'Asigurare întrerupere activitate business interruption Moldova | ING Broker',
        description: 'Business interruption insurance pentru companii din Moldova. Acoperire pierderi financiare din oprirea activității. Complementară asigurării property.',
        keywords: 'business interruption Moldova, asigurare intrerupere activitate, pierderi financiare, asigurare continuitate business, ING Broker'
      }
    },
{
      id: '106',
      slug: 'employee-benefits-asigurare-sanatate-angajati-moldova-2026',
      title: 'Employee benefits în Moldova: asigurare de sănătate și viață pentru angajați — cum reții talentele',
      excerpt: 'Pachete employee benefits pentru companii IT și corporate din Moldova. Asigurare sănătate, viață, stomatologie. Avantaje fiscale. Retenție talente.',
      content: `
        <h2>De ce companiile din Moldova pierd angajați fără employee benefits?</h2>
        <p>Piața muncii din Republica Moldova se transformă rapid. Companiile IT, care generează peste 10% din PIB, concurează nu doar între ele, ci și cu angajatorii din România, Polonia și Europa de Vest pentru aceleași talente. Salariul competitiv nu mai este suficient. Angajații cer beneficii — iar pachetele de asigurare de sănătate sunt pe primul loc în preferințele lor.</p>
        <p>Companiile care oferă employee benefits au o rată de retenție a angajaților cu 35-40% mai mare decât cele care nu oferă. Costul înlocuirii unui specialist IT în Chișinău — recrutare, training, pierdere de productivitate — depășește echivalentul a 6-12 salarii lunare. Un pachet de beneficii costă o fracțiune din această sumă și se recuperează rapid prin stabilitatea echipei.</p>

        <h2>Ce includ pachetele employee benefits?</h2>
        <p><strong>Asigurare medicală privată.</strong> Consultații la medici specialiști, analize de laborator, investigații, tratamente ambulatorii și spitalizare în clinici private din Moldova. Angajatul nu mai stă la coadă la policlinică și are acces rapid la medici competenți. Limită anuală tipică: 30.000-50.000 lei per angajat.</p>
        <p><strong>Asigurare stomatologică.</strong> Tratamente dentare, profilaxie, ortodonție — servicii pe care sistemul public nu le acoperă. Este unul dintre cele mai apreciate beneficii de către angajați. Limită tipică: 5.000-10.000 lei pe an.</p>
        <p><strong>Asigurare de viață.</strong> Protecția financiară a familiei angajatului în cazul decesului sau invalidității permanente. Sumă asigurată tipică: 200.000-500.000 lei.</p>
        <p><strong>Asigurare de accidente.</strong> Indemnizație în cazul accidentelor care duc la incapacitate de muncă sau invaliditate.</p>
        <p><strong>Check-up medical anual.</strong> Examinare medicală completă pentru depistarea timpurie a problemelor de sănătate. Prevenția costă mai puțin decât tratamentul.</p>

        <h2>Avantaje fiscale în Moldova</h2>
        <p>Primele de asigurare de sănătate plătite de angajator sunt deductibile fiscal ca cheltuieli ale companiei. ING Broker colaborează cu consultanți fiscali pentru a optimiza pachetele astfel încât compania să beneficieze de deductibilitate maximă, iar angajații să nu fie impozitați suplimentar.</p>

        <h2>Cât costă employee benefits per angajat?</h2>
        <p>Prețul pornește de la 3.000 lei pe an per angajat pentru un pachet de bază și poate ajunge la 8.000-12.000 lei pentru pachete premium. Pentru o companie cu 50 de angajați, bugetul anual ar fi de 150.000-400.000 lei — echivalentul a 1-2 salarii lunare ale unui programator senior.</p>

        <h2>Cum implementezi — pas cu pas</h2>
        <p>Pasul 1: ING Broker analizează structura echipei și bugetul. Pasul 2: Propunem 2-3 variante de pachete. Pasul 3: Solicităm oferte de la toți asigurătorii. Pasul 4: Negociem cele mai bune condiții. Pasul 5: Implementăm programul și distribuim cardurile medicale. Pasul 6: Administrăm programul pe toată durata sa.</p>

        <h2>Industrii care beneficiază cel mai mult</h2>
        <p><strong>IT și outsourcing</strong> — piața cea mai competitivă pentru talente. <strong>Bănci și instituții financiare</strong> — tradiție de beneficii, necesitate de profesioniști experimentați. <strong>Companii internaționale</strong> — standardele globale cer pachete de beneficii. <strong>Consultanță și audit</strong> — program intens, stres profesional. <strong>Producție</strong> — riscuri profesionale care fac din asigurarea de accidente o necesitate.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">Companiile mici pot beneficia de employee benefits?</h4>
          <p>Da. ING Broker structurează pachete și pentru companii cu 5-10 angajați, la prețuri avantajoase.</p>
          <h4 class="font-bold mt-4">Employee benefits sunt deductibile fiscal?</h4>
          <p>Da, primele de asigurare plătite de angajator pentru sănătatea angajaților sunt deductibile fiscal.</p>
          <h4 class="font-bold mt-4">Cât durează implementarea?</h4>
          <p>De la analiza inițială până la emiterea polițelor — aproximativ 2-4 săptămâni.</p>
          <h4 class="font-bold mt-4">Angajații pot adăuga și membrii familiei?</h4>
          <p>Da, majoritatea pachetelor permit extinderea acoperirii pentru soț/soție și copii, cu o primă suplimentară.</p>
        </div>
        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Construiește un pachet de beneficii pentru echipa ta</h3>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/Group_Health_Insurance.png',
      date: '10 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Employee Benefits', 'Sănătate', 'Corporate', 'IT'],
      seo: {
        title: 'Employee benefits Moldova 2026 — asigurare sănătate angajați | ING Broker',
        description: 'Pachete employee benefits pentru companii din Moldova. Asigurare sănătate, viață, stomatologie. Avantaje fiscale. Consultanță gratuită ING Broker.',
        keywords: 'employee benefits Moldova, asigurare sanatate angajati, beneficii extrasalariale, asigurare medicala corporate, retentie angajati IT'
      }
    },
    {
      id: '107',
      slug: 'surety-bonds-garantii-licitatii-vama-contracte-moldova-2026',
      title: 'Surety bonds în Moldova: garanții pentru licitații, vamă și contracte — alternativa la garanția bancară',
      excerpt: 'Bid bond, performance bond, customs bond, advance payment bond — toate tipurile de garanții de asigurare disponibile pentru companiile din Moldova.',
      content: `
        <h2>Ce sunt surety bonds și de ce contează pentru afacerea ta?</h2>
        <p>Companiile din Moldova care participă la licitații publice, importă mărfuri sau execută contracte mari se confruntă cu necesitatea de a prezenta garanții financiare. Până acum, singura opțiune practică era scrisoarea de garanție bancară — un instrument scump care blochează capital și limitează accesul la credit. Surety bonds oferă o alternativă modernă și mai eficientă.</p>
        <p>Un surety bond este un contract prin care o companie de asigurare garantează beneficiarului (statul, clientul) că principalul (compania ta) își va îndeplini obligațiile contractuale. Spre deosebire de garanția bancară, surety bond nu blochează capitalul companiei.</p>

        <h2>Tipurile de surety bonds</h2>
        <h3>Bid bond (garanție de participare la licitație)</h3>
        <p>Garantează organizatorului licitației că ofertantul câștigător va semna contractul. Valoare tipică: 2-5% din ofertă. Cu planul de creștere UE de 1,8 miliarde euro pentru Moldova, cererea de bid bonds va crește semnificativ.</p>

        <h3>Performance bond (garanție de bună execuție)</h3>
        <p>Garantează beneficiarului că contractul va fi executat conform specificațiilor. Valoare tipică: 5-10% din contract. Cerut în majoritatea proiectelor de infrastructură și construcții finanțate din fonduri europene.</p>

        <h3>Advance payment bond (garanție pentru plata în avans)</h3>
        <p>Protejează beneficiarul care face o plată anticipată. Dacă executantul primește avansul dar nu livrează, garantul rambursează avansul. Valoare: egală cu avansul (10-30% din contract).</p>

        <h3>Customs bond (garanție vamală)</h3>
        <p>Permite importatorilor să elibereze mărfurile din vamă fără a plăti integral taxele vamale în avans. În loc să plătești 500.000 lei taxe vamale la fiecare import, plătești doar prima de asigurare de 5.000-15.000 lei pe an. Capitalul rămâne în circulație.</p>

        <h2>Surety bond vs garanție bancară — comparație directă</h2>
        <p><strong>Capital blocat:</strong> garanția bancară blochează 100% depozit colateral. Surety bond — zero capital blocat, doar prima de asigurare.</p>
        <p><strong>Linia de credit:</strong> fiecare garanție bancară reduce limita de credit disponibilă. Cu surety bonds, linia de credit rămâne intactă.</p>
        <p><strong>Cost real:</strong> ambele au comision de 1-3% pe an, dar garanția bancară are costul ascuns al capitalului blocat.</p>
        <p><strong>Viteza:</strong> garanția bancară necesită 2-4 săptămâni. Surety bond poate fi emis în 5-10 zile.</p>

        <h2>Industrii care beneficiază de surety bonds</h2>
        <p><strong>Construcții și infrastructură</strong> — cel mai mare utilizator global. <strong>Import și distribuție</strong> — customs bonds pentru economii la capital. <strong>Energie și energie regenerabilă</strong> — performance bonds pentru proiecte mari. <strong>IT și telecomunicații</strong> — contracte de implementare software pentru stat. <strong>Furnizori agroalimentari</strong> — garanții de livrare și plată în avans.</p>

        <h2>Cum obții surety bonds prin ING Broker?</h2>
        <p>Piața locală de asigurări nu are capacitatea de a emite surety bonds de valoare mare. ING Broker plasează aceste riscuri la reasigurători internaționali specializați. Procesul: analiză financiară, structurarea garanției, plasarea la reasigurători, emiterea în 5-10 zile.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">Sunt surety bonds legale în Moldova?</h4>
          <p>Da. Legislația achizițiilor publice acceptă garanțiile de asigurare ca alternativă la garanțiile bancare.</p>
          <h4 class="font-bold mt-4">Cât costă un surety bond?</h4>
          <p>Prima de asigurare este de 1-3% din valoarea garanției pe an. Nu necesită depozit colateral.</p>
          <h4 class="font-bold mt-4">Care este valoarea maximă?</h4>
          <p>Prin partenerii internaționali, ING Broker facilitează garanții de la câteva mii de euro până la zeci de milioane de euro.</p>
          <h4 class="font-bold mt-4">Ce documente sunt necesare?</h4>
          <p>Bilanțul pe 2-3 ani, contractul sau documentația licitației, experiența companiei în proiecte similare. ING Broker te ghidează prin tot procesul.</p>
        </div>
        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Eliberează-ți capitalul cu surety bonds</h3>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/analiza-riscurilor.webp',
      date: '9 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Surety Bonds', 'Garanții', 'Licitații', 'Corporate'],
      seo: {
        title: 'Surety bonds Moldova 2026 — garanții licitații vamă contracte | ING Broker',
        description: 'Surety bonds: bid bond, performance bond, customs bond, advance payment bond. Alternativă la garanția bancară. ING Broker Moldova.',
        keywords: 'surety bond Moldova, bid bond, performance bond, customs bond, advance payment bond, garantie licitatie, garantie vamala'
      }
    },
    {
      id: '108',
      slug: 'asigurare-energie-regenerabila-parcuri-eoliene-solare-moldova-2026',
      title: 'Asigurare pentru proiecte de energie regenerabilă în Moldova: parcuri eoliene, panouri solare și biomasă',
      excerpt: 'Protecție specializată pentru investiții în energie verde. Acoperire construcție, operare și răspundere civilă pentru proiecte energetice în Moldova.',
      content: `
        <h2>Energia regenerabilă în Moldova — creștere accelerată</h2>
        <p>Republica Moldova și-a asumat obiective ambițioase în domeniul energiei regenerabile, în contextul integrării europene și al necesității de a reduce dependența de sursele tradiționale de energie. Proiectele de parcuri eoliene, centrale fotovoltaice și stații de biomasă se multiplică pe teritoriul țării, atrăgând investiții locale și internaționale.</p>
        <p>Fiecare proiect energetic implică investiții semnificative și riscuri specifice care necesită protecție de asigurare specializată. Un parc solar cu capacitate de 5 MW implică o investiție de 3-5 milioane de euro. O furtună de grindină sau un incendiu pot provoca daune de sute de mii de euro într-o singură zi.</p>

        <h2>Ce riscuri specifice au proiectele de energie regenerabilă?</h2>
        <p><strong>Riscuri în faza de construcție:</strong> deteriorarea echipamentelor la transport și montaj, furtuni și fenomene naturale pe șantier, furt de materiale (cabluri, panouri), accidente de muncă, întârzieri din cauza condițiilor meteo.</p>
        <p><strong>Riscuri în faza de operare:</strong> avarii mecanice la turbine eoliene sau invertoare solare, grindină care deteriorează panourile fotovoltaice, incendiu la instalațiile electrice, furtuni care distrug structurile de montaj, întreruperea producției și pierderea veniturilor din vânzarea de energie.</p>
        <p><strong>Riscuri de răspundere civilă:</strong> daunele provocate terților de fragmentele unei pale de turbină, poluarea solului sau a apelor subterane, impactul vizual sau sonor asupra comunităților locale.</p>

        <h2>Ce tipuri de asigurare sunt necesare?</h2>
        <p><strong>CAR/EAR pentru faza de construcție.</strong> Acoperă toate riscurile din perioada de construcție și montaj a proiectului energetic.</p>
        <p><strong>Property all risks pentru faza operațională.</strong> Protejează echipamentele și instalațiile în funcțiune împotriva tuturor riscurilor cu excepția celor explicit excluse.</p>
        <p><strong>Business interruption.</strong> Acoperă pierderile de venituri din vânzarea de energie electrică atunci când instalația este indisponibilă din cauza unui eveniment asigurat.</p>
        <p><strong>Machinery breakdown.</strong> Acoperă defecțiunile mecanice și electrice ale echipamentelor — turbine, invertoare, transformatoare.</p>
        <p><strong>Răspundere civilă.</strong> Protejează operatorul de pretențiile terților pentru daunele provocate de instalația energetică.</p>

        <h2>Cine are nevoie?</h2>
        <p>Investitorii în parcuri solare fotovoltaice, dezvoltatorii de parcuri eoliene, operatorii de stații de biomasă și biogaz, companiile care instalează sisteme solare pe acoperișuri comerciale, și băncile care finanțează proiecte energetice (cer asigurare ca o condiție de creditare).</p>

        <h2>Rolul ING Broker</h2>
        <p>Asigurarea proiectelor de energie regenerabilă necesită expertiză tehnică și acces la piețele internaționale de reasigurare. Companiile de asigurare locale din Moldova nu au capacitatea de a acoperi proiecte de milioane de euro. ING Broker plasează aceste riscuri la reasigurători internaționali specializați în energie, oferind acoperiri identice cu cele disponibile în Europa de Vest.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">Asigurarea este obligatorie pentru proiecte energetice?</h4>
          <p>Nu este obligatorie prin lege, dar este cerută de bănci ca o condiție de finanțare și de reglementările tehnice de operare.</p>
          <h4 class="font-bold mt-4">Acoperă și grindina care deteriorează panourile solare?</h4>
          <p>Da, polița property all risks acoperă daunele provocate de grindină, furtuni și alte fenomene naturale.</p>
          <h4 class="font-bold mt-4">Cât costă asigurarea unui parc solar?</h4>
          <p>Prima depinde de valoarea proiectului, locație și acoperiri. Orientativ: 0,2-0,5% din valoarea instalației pe an.</p>
        </div>
        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Asigurare pentru proiecte de energie verde</h3>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/hidrocentrala.jpg',
      date: '8 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Energie', 'Regenerabilă', 'Solar', 'Eolian', 'Corporate'],
      seo: {
        title: 'Asigurare energie regenerabilă Moldova 2026 — solar eolian | ING Broker',
        description: 'Asigurare pentru parcuri solare, eoliene și biomasă în Moldova. Protecție construcție și operare. Acces la piețe internaționale de reasigurare.',
        keywords: 'asigurare energie regenerabila Moldova, asigurare parcuri solare, asigurare eoliene, asigurare panouri fotovoltaice, ING Broker'
      }
    },
    {
      id: '109',
      slug: 'asigurare-medicala-facultativa-corporate-moldova-2026',
      title: 'Asigurare medicală facultativă pentru companii în Moldova: mai mult decât o poliță — o investiție în echipă',
      excerpt: 'Asigurare medicală voluntară pentru angajați și manageri. Acces la clinici private, stomatologie, recuperare. De la 2.000 lei pe an per angajat.',
      content: `
        <h2>Ce este asigurarea medicală facultativă?</h2>
        <p>Asigurarea medicală facultativă (voluntară) este polița de sănătate pe care compania o achiziționează pentru angajații săi, suplimentar față de asigurarea medicală obligatorie de stat (CNAM). Spre deosebire de CNAM, care oferă acces la sistemul public de sănătate cu toate limitările sale, asigurarea facultativă oferă acces la clinici private, medici specialiști, analize rapide și tratamente de calitate superioară.</p>
        <p>În practică, diferența este enormă. Cu polița CNAM, un angajat care are nevoie de o consultație la cardiolog poate aștepta 2-3 săptămâni pentru o programare. Cu asigurarea facultativă, consultația poate fi obținută în 1-2 zile, la o clinică privată, cu medic ales de angajat.</p>

        <h2>Ce acoperă asigurarea medicală facultativă?</h2>
        <p><strong>Consultații medicale.</strong> Medic de familie, specialiști (cardiolog, endocrinolog, ortoped, ginecolog, urolog, dermatolog etc.), consultații de urgență. Angajatul alege clinica și medicul din rețeaua asigurătorului.</p>
        <p><strong>Analize de laborator și investigații.</strong> Analize de sânge, radiografii, ecografii, RMN, CT, EKG — fără a aștepta săptămâni în sistemul public.</p>
        <p><strong>Tratament ambulator.</strong> Medicamente prescrise, proceduri medicale, fizioterapie, recuperare.</p>
        <p><strong>Spitalizare.</strong> Internare în clinici private sau saloane VIP ale spitalelor publice, intervenții chirurgicale, anestezie, post-operatoriu.</p>
        <p><strong>Stomatologie.</strong> Consultații, tratamente, extracții, profilaxie, în unele pachete și implantologie sau ortodonție.</p>
        <p><strong>Servicii de prevenție.</strong> Check-up anual, vaccinări, screening-uri de sănătate.</p>

        <h2>De ce companiile aleg asigurarea facultativă?</h2>
        <p><strong>Retenție angajați.</strong> Beneficiul de sănătate este pe locul 1 în preferințele angajaților din Moldova, conform studiilor de piață. Companiile care oferă asigurare medicală au o fluctuație de personal cu 30-40% mai mică.</p>
        <p><strong>Productivitate crescută.</strong> Angajații care au acces rapid la medici se tratează mai repede, au mai puține zile de concediu medical și sunt mai productivi.</p>
        <p><strong>Avantaje fiscale.</strong> Primele sunt deductibile fiscal ca cheltuieli ale companiei.</p>
        <p><strong>Imagine de angajator.</strong> O companie care oferă asigurare medicală este percepută ca un angajator serios, responsabil și stabil.</p>

        <h2>Cât costă?</h2>
        <p>Prețul depinde de nivelul de acoperire, numărul de angajați și vârsta medie a grupului. Orientativ:</p>
        <ul>
          <li>Pachet de bază (consultații + analize): de la 2.000-3.500 lei pe an per angajat</li>
          <li>Pachet standard (+ spitalizare + stomatologie): de la 4.000-6.000 lei</li>
          <li>Pachet premium (+ recuperare + VIP): de la 7.000-12.000 lei</li>
        </ul>
        <p>ING Broker compară ofertele tuturor asigurătorilor și negociază cele mai bune condiții pentru grupul tău.</p>

        <h2>Pentru cine?</h2>
        <p>Companii IT cu echipe tinere care apreciază accesul rapid la sănătate. Companii de producție unde sănătatea angajaților afectează direct productivitatea. Companii internaționale cu standarde de beneficii impuse de compania-mamă. Orice companie care dorește să fie un angajator de top în Moldova.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">De câți angajați am nevoie pentru un pachet corporate?</h4>
          <p>Minim 5 angajați pentru majoritatea asigurătorilor. ING Broker poate negocia pachete și pentru grupuri mai mici.</p>
          <h4 class="font-bold mt-4">Angajații pot alege clinica?</h4>
          <p>Da, din rețeaua de clinici partenere ale asigurătorului. Rețelele includ cele mai importante clinici private din Chișinău și din țară.</p>
          <h4 class="font-bold mt-4">Acoperă și membrii familiei?</h4>
          <p>Da, majoritatea pachetelor permit extinderea pentru soț/soție și copii cu o primă suplimentară.</p>
          <h4 class="font-bold mt-4">Cum funcționează decontarea?</h4>
          <p>De regulă direct: angajatul prezintă cardul de asigurare la clinică și nu plătește nimic. Clinica decontează direct cu asigurătorul.</p>
        </div>
        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Oferă echipei tale acces la sănătate de calitate</h3>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/health.png',
      date: '7 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Sănătate', 'Medicală', 'Corporate', 'Facultativă'],
      seo: {
        title: 'Asigurare medicală facultativă corporate Moldova 2026 | ING Broker',
        description: 'Asigurare medicală voluntară pentru angajați. Acces clinici private, stomatologie, check-up. De la 2.000 lei/an. ING Broker Moldova.',
        keywords: 'asigurare medicala facultativa Moldova, asigurare voluntara angajati, asigurare corporate sanatate, clinici private Moldova'
      }
    },
    {
      id: '110',
      slug: 'asigurare-flote-auto-comerciale-moldova-2026',
      title: 'Asigurare flote auto comerciale în Moldova: CASCO, RCA și CMR pentru companii de transport',
      excerpt: 'Pachete speciale de asigurare pentru flote de camioane, autoutilitare și vehicule comerciale. Prețuri negociate, asistență la daune în toată Europa.',
      content: `
        <h2>De ce asigurarea flotei este diferită de asigurarea individuală?</h2>
        <p>O companie de transport din Moldova cu 20 de camioane are o situație fundamental diferită de un proprietar individual. Flota este un activ de valoare mare (milioane de lei), vehiculele circulă zilnic pe drumuri din mai multe țări, riscul este distribuit pe un număr mare de vehicule, și fiecare incident afectează capacitatea operațională a companiei.</p>
        <p>Asigurarea individuală a fiecărui vehicul separat este ineficientă și costisitoare. Pachetele de asigurare pentru flote oferă prețuri negociate, condiții uniforme, administrare centralizată și asistență coordonată la daune.</p>

        <h2>Ce include un pachet de asigurare pentru flotă?</h2>
        <p><strong>CASCO flotă.</strong> Asigurarea voluntară a tuturor vehiculelor din flotă. Avantaje față de polițele individuale: reduceri de volum de 15-25%, franșiză unificată, condiții de despăgubire accelerate, un singur interlocutor pentru toate daunele.</p>
        <p><strong>RCA flotă.</strong> Asigurarea obligatorie de răspundere civilă pentru toate vehiculele. Negociere centralizată pentru cel mai bun preț pe toată flota.</p>
        <p><strong>Carte verde flotă.</strong> Pentru companiile de transport internațional, Carte verde pe toată flota cu condiții preferențiale.</p>
        <p><strong>CMR (răspunderea transportatorului).</strong> Polița care acoperă răspunderea companiei pentru mărfurile transportate.</p>
        <p><strong>Asigurare gap.</strong> Acoperă diferența dintre valoarea de piață a vehiculului și soldul creditului de leasing, în cazul daunei totale.</p>

        <h2>Pentru cine?</h2>
        <p><strong>Companii de transport internațional</strong> cu camioane pe rute europene. <strong>Companii de distribuție</strong> cu autoutilitare în Moldova. <strong>Firme de curierat și livrare.</strong> <strong>Companii de construcții</strong> cu vehicule speciale (excavatoare, basculante). <strong>Companii de taxi și ride-sharing.</strong> <strong>Orice companie cu 5+ vehicule comerciale.</strong></p>

        <h2>Avantajele asigurării prin broker pentru flote</h2>
        <p>Brokerul negociază cu toți asigurătorii simultan pentru cel mai bun preț pe întreaga flotă. Administrarea tuturor polițelor este centralizată — un singur interlocutor. Asistență la dosarele de daună din orice țară europeană. Raportare periodică privind daunele și costurile — informații esențiale pentru managementul flotei.</p>

        <h2>Cât economisești cu pachet de flotă?</h2>
        <p>Față de polițe individuale, un pachet de flotă negociat de ING Broker poate economisi 15-30% din prima totală. Pentru o flotă de 20 de camioane cu prime individuale de 500.000 lei pe an, economia poate fi de 75.000-150.000 lei anual.</p>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <h2>Întrebări frecvente</h2>
          <h4 class="font-bold mt-4">De câte vehicule am nevoie pentru un pachet de flotă?</h4>
          <p>De regulă, minim 5 vehicule pentru a beneficia de condiții de flotă. ING Broker negociază și pentru flote mai mici.</p>
          <h4 class="font-bold mt-4">Pot include și vehicule în leasing?</h4>
          <p>Da. Vehiculele în leasing sunt incluse în polița de flotă, cu cesiunea drepturilor în favoarea companiei de leasing.</p>
          <h4 class="font-bold mt-4">Ce se întâmplă dacă adaug vehicule noi în cursul anului?</h4>
          <p>Vehiculele noi sunt adăugate la poliță prin supliment, cu primă proporțională. Procesul durează 1-2 zile.</p>
          <h4 class="font-bold mt-4">ING Broker asistă la daune în străinătate?</h4>
          <p>Da. Avem experiență în gestionarea dosarelor de daună din România, Ungaria, Germania, Italia, Franța și alte state europene.</p>
        </div>
        <div class="mt-8 p-6 bg-red-50 rounded-xl">
          <h3>Optimizează costul asigurării flotei tale</h3>
          <p>📍 str. Pan Halippa 9, Chișinău | 📞 +373 69 526 003 | 🌐 ingbroker.md</p>
        </div>
      `,
      image: '/flota_1.jpg',
      date: '6 Apr 2026',
      author: 'Andrei Moraru',
      tags: ['Flote auto', 'Transport', 'CASCO', 'Corporate'],
      seo: {
        title: 'Asigurare flote auto comerciale Moldova 2026 | ING Broker',
        description: 'Asigurare CASCO, RCA și CMR pentru flote auto comerciale. Reduceri 15-30% față de polițe individuale. ING Broker Moldova.',
        keywords: 'asigurare flote auto Moldova, asigurare camioane, CASCO flota, asigurare transport comercial, ING Broker'
      }
    },
        ...topics.map((t, index) => ({
      id: (10 + index).toString(),
      slug: t.slug,
      title: t.titleRo,
      excerpt: `Ghid complet despre ${t.titleRo.toLowerCase()}. Află cum să îți protejezi viitorul și afacerea în Republica Moldova cu expertiza ING Broker.`,
      content: generateLongContent(t.titleRo, 'ro'),
      image: images[index % images.length],
      date: `${(index % 28) + 1} Apr 2026`.padStart(11, '0'),
      author: 'Andrei Moraru',
      tags: [t.tag, 'Asigurări', 'Moldova'],
      seo: {
        title: `${t.titleRo} | ING Broker Moldova`,
        description: `Tot ce trebuie să știi despre ${t.titleRo.toLowerCase()} în Republica Moldova. Consultanță gratuită și cele mai bune prețuri de la ING Broker.`,
        keywords: `${t.slug.replace(/-/g, ', ')}, asigurari moldova, broker asigurari chisinau, ING Broker, Andrei Moraru, expert asigurari`
      }
    }))
  ],
  ru: [
    ...topics.map((t, index) => ({
      id: (10 + index).toString(),
      slug: t.slug,
      title: t.titleRu,
      excerpt: `Полное руководство по ${t.titleRu.toLowerCase()}. Узнайте, как защитить свое будущее и бизнес в Молдове с помощью опыта ING Broker.`,
      content: generateLongContent(t.titleRu, 'ru'),
      image: images[index % images.length],
      date: `${(index % 28) + 1} Apr 2026`.padStart(11, '0').replace('Apr', 'Апр'),
      author: 'Андрей Морару',
      tags: [t.tag, 'Страхование', 'Молдова'],
      seo: {
        title: `${t.titleRu} | ING Broker Молдова`,
        description: `Все, что вам нужно знать о ${t.titleRu.toLowerCase()} в Республике Молдова. Бесплатные консультации и лучшие цены от ING Broker.`,
        keywords: `${t.slug.replace(/-/g, ', ')}, страхование молдова, страховой брокер кишинев, ING Broker, Андрей Морару`
      }
    }))
  ],
  en: [
    ...topics.map((t, index) => ({
      id: (10 + index).toString(),
      slug: t.slug,
      title: t.titleEn,
      excerpt: `Complete guide about ${t.titleEn.toLowerCase()}. Learn how to protect your future and business in Moldova with ING Broker expertise.`,
      content: generateLongContent(t.titleEn, 'en'),
      image: images[index % images.length],
      date: `${(index % 28) + 1} Apr 2026`.padStart(11, '0'),
      author: 'Andrei Moraru',
      tags: [t.tag, 'Insurance', 'Moldova'],
      seo: {
        title: `${t.titleEn} | ING Broker Moldova`,
        description: `Everything you need to know about ${t.titleEn.toLowerCase()} in the Republic of Moldova. Free consultancy and best prices from ING Broker.`,
        keywords: `${t.slug.replace(/-/g, ', ')}, insurance moldova, insurance broker chisinau, ING Broker, Andrei Moraru`
      }
    }))
  ]
};
