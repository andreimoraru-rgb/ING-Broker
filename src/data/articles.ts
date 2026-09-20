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
      id: 'energie-regenerabila-1',
      slug: 'asigurare-energie-regenerabila-moldova',
      title: 'Asigurarea Proiectelor de Energie Regenerabilă în Moldova: Solar, Eolian, BESS și Rețea',
      excerpt: 'Asigurări pentru parcuri fotovoltaice, eoliene, baterii BESS, EPC și O&M în Republica Moldova. Structurare tehnică, clauze negociate și acces la reasigurare internațională.',
      content: `<div class="prose prose-lg max-w-none">
<h2>Ce este asigurarea pentru energie regenerabilă și de ce contează în Moldova</h2>
<p>Dacă investești sau operezi un parc solar, eolian sau un sistem de stocare a energiei în Republica Moldova, ai nevoie de mai mult decât o poliță de bunuri. Ai nevoie de un program de asigurare structurat tehnic, care acoperă întregul ciclu de viață al proiectului: de la transport și montaj, până la exploatare comercială, obligații față de finanțatori și răspunderi față de terți.</p>
<p>Moldova a depășit în 2025 pragul de 650 MW capacitate instalată din surse regenerabile. Ministerul Energiei a lansat licitații pentru 170 MW eolian cu obligația instalării a minimum 44 MWh capacități de stocare. ANRE a operaționalizat registrul garanțiilor de origine. Sectorul energetic are o cifră de afaceri structurală de aproximativ 56,4 miliarde de lei. Piața nu mai este mică și nici riscurile nu mai sunt simple.</p>
<p>Tocmai de aceea, asigurarea unui proiect energetic nu se rezumă la un singur document semnat rapid. Ea trebuie să reflecte realitatea tehnică a proiectului, cerințele finanțatorilor, obligațiile contractuale față de rețea și expunerile reale la daune care pot opri producția luni întregi.</p>
<p>ING Broker SRL este partenerul tău pentru structurarea, negocierea și plasarea asigurărilor pentru proiecte de energie regenerabilă în Republica Moldova. Contactează-ne la <a href="mailto:andrei.moraru@ingbroker.md">andrei.moraru@ingbroker.md</a> sau vizitează <a href="https://ingbroker.md">ingbroker.md</a>.</p>

<h2>De ce sectorul energetic are un profil de risc complex</h2>
<p>Energia regenerabilă combină mai multe categorii de risc simultan: riscuri de construcție, riscuri tehnice și mecanice, riscuri meteorologice, riscuri de pierdere a veniturilor, riscuri cibernetice și riscuri de răspundere civilă față de terți. Fiecare proiect are o combinație unică de expuneri, în funcție de tehnologie, locație, structură de finanțare și contracte comerciale.</p>
<p>Spre deosebire de o clădire sau un depozit, un parc fotovoltaic sau eolian funcționează non-stop, este expus constant la intemperii, conține echipamente sofisticate cu o durată lungă de amortizare și este conectat la o rețea care impune standarde stricte de disponibilitate. O daună care oprește producția 60 de zile nu este doar un cost de reparație. Este și pierdere de venit, penalități față de cumpărători, costuri financiare suplimentare și, uneori, amenzi de rețea.</p>

<h2>Riscurile principale ale unui proiect de energie regenerabilă</h2>
<h3>1. Riscuri în faza de construcție și montaj</h3>
<p>Transportul panourilor fotovoltaice, turbinelor eoliene sau bateriilor BESS de la producător până la șantier implică riscuri de avarie fizică, pierdere sau furt. Pe șantier, montajul structurilor metalice, cablarea, instalarea invertoarelor și conectarea la rețea generează riscuri de accidente, avarii accidentale și daune față de terți.</p>

<h3>2. Riscuri meteorologice și de forță majoră</h3>
<p>Grindina este unul dintre cele mai frecvente pericole pentru panourile fotovoltaice. O furtună puternică poate deteriora simultan sute de panouri. Vântul puternic poate afecta structurile de montaj sau turbinele eoliene. Inundațiile pot distruge echipamentele electrice de la sol. Fulgerul poate produce supratensiuni care deteriorează invertori, transformatoare și sisteme de control.</p>

<h3>3. Avaria mecanică și defecțiunea echipamentelor</h3>
<p>Invertoarele au componente electronice cu durate de viață definite. Turbinele eoliene au componente de rotație care se uzează. Bateriile BESS au cicluri de încărcare/descărcare cu degradare progresivă.</p>

<h3>4. Pierderea de venit din producție</h3>
<p>Dacă un parc solar sau eolian nu produce energie, nu generează venit. Iar dacă nu generează venit, nu poate rambursa creditul, nu poate plăti O&M și nu poate onora PPA-ul. Asigurarea de întrerupere a activității (Business Interruption / Delay in Start-Up) acoperă tocmai această pierdere de marjă.</p>

<h3>5. Riscuri cibernetice</h3>
<p>Parcurile moderne de energie regenerabilă sunt controlate prin sisteme SCADA, platforme de monitorizare remote și interfețe digitale cu operatorul de rețea. Un atac cibernetic, o breșă de securitate sau o eroare software poate bloca producția.</p>

<h3>6. Răspunderea civilă față de terți</h3>
<p>Un incident pe un parc fotovoltaic sau eolian poate afecta proprietăți sau persoane din jur: vecini, lucrători terți, vizitatori autorizați sau persoane care trec prin zonă.</p>

<h2>Tipurile de asigurare recomandate</h2>
<ul>
<li><strong>CAR / EAR</strong> — Asigurarea standard pentru faza de construcție și montaj. Acoperă daunele materiale asupra lucrărilor, materialelor, echipamentelor și utilajelor, precum și răspunderea față de terți.</li>
<li><strong>Property All Risks (PAR)</strong> — Pentru faza operațională, acoperă daunele fizice accidentale produse asupra activelor: panouri, invertoare, structuri, transformatoare, cabluri, clădiri tehnice.</li>
<li><strong>Machinery Breakdown</strong> — Acoperă defecțiunile tehnice interne ale echipamentelor, care nu sunt cauzate de factori externi.</li>
<li><strong>Business Interruption / DSU / ALOP</strong> — Acoperă pierderea de venituri din producție pe perioada în care parcul nu poate funcționa din cauza unei daune materiale asigurate.</li>
<li><strong>Cargo / Transport</strong> — Acoperă echipamentele în tranzit de la producător până la șantier.</li>
<li><strong>Răspundere Civilă Generală</strong> — Acoperă pretențiile terților pentru vătămări corporale sau daune materiale.</li>
<li><strong>Cyber Insurance</strong> — Acoperă incidentele cibernetice care afectează sistemele SCADA și platformele de monitorizare.</li>
</ul>

<h2>Avantajele unui program corect structurat</h2>
<ul>
<li><strong>Conformitate cu cerințele finanțatorilor.</strong> Băncile și IFI-urile care finanțează proiecte de energie regenerabilă impun condiții stricte de asigurare.</li>
<li><strong>Recuperare rapidă după daune majore.</strong> Fără asigurare adecvată, o avarie majoră poate duce la incapacitate de plată a serviciului datoriei.</li>
<li><strong>Credibilitate față de parteneri comerciali.</strong> Cumpărătorii de energie, operatorii de rețea și partenerii de proiect vor verifica dacă proiectul este asigurat adecvat.</li>
<li><strong>Acces la limite mari prin reasigurare.</strong> Proiectele mari depășesc uneori capacitatea pieței locale.</li>
<li><strong>Negocierea clauzelor care contează la daună.</strong> Wording-ul contează enorm: ce este inclus, ce este exclus, cum se calculează despăgubirea.</li>
</ul>

<h2>Cazuri orientative</h2>
<h3>Cazul 1: Grindina distruge 40% din panourile unui parc fotovoltaic</h3>
<p>Un parc fotovoltaic de 5 MW este lovit de o grindină severă. Aproximativ 800 de panouri sunt distruse. Costul de înlocuire: 180.000 USD. Parcul nu produce energie timp de 45 de zile. Pierderea de venit: 65.000 USD. Fără asigurare adecvată, proprietarul trebuie să acopere singur costurile.</p>

<h3>Cazul 2: Defecțiunea unui invertor central oprește producția</h3>
<p>Un invertor central de 1,2 MW cedează după un scurtcircuit intern. Durata de reparație: 30 de zile. O poliță corect structurată acoperă costul pieselor, manopera și pierderea de venit.</p>

<h3>Cazul 3: Atacul cibernetic blochează sistemul SCADA al unui parc eolian</h3>
<p>Un operator de rețea raportează anomalii. Sistemul SCADA a fost compromis de un actor extern. Parcul este deconectat 10 zile, costuri de response IT: 25.000 EUR.</p>

<h3>Cazul 4: Un EPC subcontractant produce o daună accidentală la proprietatea unui vecin</h3>
<p>O macara răstoarnă o structură metalică care lovește un gard și deteriorează acoperișul unei gospodării vecine. Proprietarul solicită despăgubiri pentru 12.000 EUR.</p>

<h2>Rolul ING Broker SRL în asigurarea proiectelor de energie regenerabilă</h2>
<p>ING Broker SRL nu este un simplu distribuitor de polițe. Într-un proiect de energie regenerabilă, brokerul joacă rolul unui integrator al informației de risc și al unui negociator tehnic cu asigurătorii și reasigurătorii.</p>
<ul>
<li>Analizează structura proiectului și identifică toate expunerile.</li>
<li>Construiește dosarul de underwriting complet: tehnic, financiar și de risc.</li>
<li>Negociează clauzele care contează la daună: includerea fazei de testare, extinderea pentru cabluri subterane, acoperirea costurilor de îndepărtare a resturilor, interesul financiar al băncii.</li>
<li>Coordonează plasarea internațională când capacitatea locală nu este suficientă.</li>
<li>Administrează polița pe durata proiectului: reînnoire, modificări, raportare către finanțatori, gestionare daune.</li>
</ul>
<p>Moraru Andrei, expert în domeniul reasigurărilor și Managing Director al ING Broker SRL, coordonează personal structurarea programelor pentru proiecte energetice complexe.</p>

<div class="bg-gray-900 text-white p-8 rounded-xl mt-12">
<h3 class="text-white mt-0">Contact ING Broker SRL</h3>
<p>📧 <a href="mailto:andrei.moraru@ingbroker.md" class="text-primary">andrei.moraru@ingbroker.md</a></p>
<p>🌐 <a href="https://ingbroker.md" class="text-primary">ingbroker.md</a></p>
<p>📞 +373 69 526 003</p>
<p>📍 str. Pan Halippa 9, Chișinău, Republica Moldova</p>
</div>

<h2>Întrebări frecvente</h2>
<div class="space-y-6">
<div class="border-b border-gray-100 pb-4">
<h4 class="font-bold text-secondary">Ce polițe cer băncile sau IFI-urile pentru un proiect fotovoltaic finanțat?</h4>
<p>De regulă: CAR/EAR pe durata construcției (cu bancă ca beneficiar), property all risks pe durata operării, business interruption, răspundere civilă generală și, uneori, DSU/ALOP.</p>
</div>
<div class="border-b border-gray-100 pb-4">
<h4 class="font-bold text-secondary">Cum se asigură faza de testare și punere în funcțiune?</h4>
<p>Această fază este una dintre cele mai vulnerabile. CAR/EAR standard trebuie să includă explicit această fază. ING Broker SRL negociază includerea commissioning-ului în poliță ca etapă separată.</p>
</div>
<div class="border-b border-gray-100 pb-4">
<h4 class="font-bold text-secondary">Este obligatorie asigurarea pentru un proiect de energie regenerabilă în Moldova?</h4>
<p>Obligativitatea legală depinde de tipul proiectului. Chiar și fără obligație legală strictă, orice proiect cu finanțare bancară va impune asigurarea prin convenție.</p>
</div>
<div class="border-b border-gray-100 pb-4">
<h4 class="font-bold text-secondary">Poate ING Broker SRL să acceseze piețe internaționale de reasigurare?</h4>
<p>Da. Pentru proiecte cu sume asigurate care depășesc capacitatea locală, ING Broker SRL poate coordona plasarea cu parteneri internaționali specializați.</p>
</div>
<div class="border-b border-gray-100 pb-4">
<h4 class="font-bold text-secondary">Cât durează obținerea unui program complet de asigurare pentru un parc solar?</h4>
<p>Pentru proiecte standard, 2–4 săptămâni de la primirea documentației. Pentru proiecte complexe, 4–8 săptămâni. Recomandăm inițierea cu minimum 60 de zile înainte de start construcție.</p>
</div>
</div>
</div>`,
      image: '/asigurare-energie-regenerabila-moldova.jpg',
      date: '18 Mai 2026',
      author: 'Andrei Moraru',
      tags: ['Energie', 'Asigurare', 'Moldova'],
      seo: {
        title: 'Asigurare Energie Regenerabilă Moldova | Parc Solar, Eolian, BESS | ING Broker',
        description: 'Asigurări pentru parcuri fotovoltaice, eoliene, baterii BESS, EPC și O&M în Republica Moldova. Structurare tehnică, clauze negociate și acces la reasigurare internațională. Expert: Moraru Andrei.',
        keywords: 'asigurare energie regenerabila moldova, asigurare parc solar, asigurare parc eolian, asigurare BESS, asigurare fotovoltaice, ING Broker, Andrei Moraru'
      }
    },

    {
      id: '1',
      slug: 'rca-pentru-soferi-tineri-riscuri-financiare-si-costuri-ascunse-in-moldova',
      title: 'RCA pentru soferi tineri: riscuri financiare si costuri ascunse in Moldova',
      excerpt: 'Află totul despre provocările și costurile asigurării auto pentru tinerii șoferi din Republica Moldova.',
      content: `
        <h2>Provocările tinerilor șoferi</h2>
        <p>Tinerii șoferi din Republica Moldova se confruntă adesea cu prețuri mai ridicate pentru polițele RCA. Acest lucru se datorează statisticilor care indică un risc mai mare de accidente în rândul celor cu puțină experiență la volan.</p>
        <h2>Cum poți reduce costurile?</h2>
        <p>Există câteva strategii prin care tinerii pot obține prețuri mai bune, cum ar fi menținerea unui istoric curat de daune și alegerea unui vehicul cu o capacitate cilindrică mai mică.</p>
      `,
      image: 'https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=800',
      date: '15 Mar 2026',
      author: 'Andrei Moraru',
      tags: ['Auto', 'RCA', 'Tineri'],
      seo: {
        title: 'RCA pentru soferi tineri in Moldova | ING Broker',
        description: 'Ghid despre costurile RCA pentru tinerii șoferi din Moldova. Află cum poți economisi.',
        keywords: 'rca tineri moldova, asigurare auto tineri, pret rca moldova'
      }
    },
    {
id: '2',
          slug: 'cum-se-determina-pretul-unei-asigurari-rca-ghid-pentru-un-pret-rca-accesibil',
          title: 'Cum se determină prețul RCA în Moldova în 2026? Toți factorii și 7 strategii ca să plătești mai puțin',
          excerpt: 'Ghid complet 2026: toți factorii care influențează prima RCA, cum se calculează practic prima ta, tabel orientativ de prețuri pe categorii de vehicule și 7 strategii verificate ca să obții cea mai accesibilă poliță prin ING Broker.',
          content: `<div class="prose prose-lg max-w-none">

          <div class="bg-primary/5 border-l-4 border-primary p-6 my-8 not-prose">
          <p class="text-xs text-primary font-semibold uppercase tracking-widest mb-2">Răspuns rapid</p>
          <p class="text-secondary text-base leading-relaxed">Prețul unei polițe RCA în Moldova în 2026 se calculează pornind de la un tarif de bază reglementat de CNPF, înmulțit cu coeficienți individuali: clasa Bonus-Malus (de la -50% la +145%), categoria și cilindreea vehiculului, vârsta și experiența șoferului, zona de înmatriculare și durata poliței. Nu există un preț fix - doi șoferi cu același vehicul pot plăti diferențe de peste 100%, în funcție de istoricul de daune. Cel mai eficient mod de a obține prețul minim legal disponibil este compararea ofertelor de la toți asigurătorii autorizați CNPF printr-un broker, nu cumpărarea de la primul asigurător întâlnit.</p>
          </div>

          <p class="lead">Dacă te-ai întrebat vreodată de ce vecinul tău plătește jumătate din ce plătești tu pentru RCA, la un vehicul similar, răspunsul nu este întâmplător. Prețul RCA în Republica Moldova rezultă dintr-un calcul precis, bazat pe un tarif de referință stabilit de Comisia Națională a Pieței Financiare (CNPF) și pe o serie de coeficienți individuali care pot schimba prima finală cu sute de lei, uneori chiar cu mii. Acest ghid explică, pas cu pas, exact ce influențează prețul tău RCA în 2026 și, mai important, ce poți face concret ca să-l reduci legal.</p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
          <p class="text-2xl font-bold text-secondary leading-tight">9+</p>
          <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">factori</p>
          <p class="text-xs text-gray-500 mt-1">influențează prima RCA</p>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
          <p class="text-2xl font-bold text-secondary leading-tight">-50%</p>
          <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">clasa B8</p>
          <p class="text-xs text-gray-500 mt-1">reducere maximă Bonus-Malus</p>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
          <p class="text-2xl font-bold text-secondary leading-tight">+145%</p>
          <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">clasa M4</p>
          <p class="text-xs text-gray-500 mt-1">majorare pentru daune repetate</p>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
          <p class="text-2xl font-bold text-secondary leading-tight">24h</p>
          <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">ofertă</p>
          <p class="text-xs text-gray-500 mt-1">comparativă ING Broker</p>
          </div>
          </div>

          <h2>Cei 9 factori care determină prețul RCA în Moldova</h2>
          <p>Fiecare asigurător autorizat CNPF aplică propriul model de tarifare, dar toate modelele pornesc de la aceleași categorii de factori de risc. Înțelegerea lor te ajută să identifici exact de ce prima ta este cât este și unde ai marjă reală de optimizare.</p>

          <h3>1. Clasa Bonus-Malus</h3>
          <p>Este factorul cu impactul cel mai mare asupra prețului final. Un șofer fără daune din vină proprie urcă progresiv spre clase Bonus, cu reduceri de până la 50% din prima de bază. Un șofer cu accidente repetate coboară spre clase Malus, unde prima poate crește cu 145% sau mai mult. Clasa se transferă între asigurători, fiind gestionată centralizat prin baza de date a CNPF.</p>

          <h3>2. Categoria și cilindreea vehiculului</h3>
          <p>Autoturismele, microbuzele, camioanele și motocicletele au tarife de bază distincte. În interiorul categoriei autoturisme, cilindreea motorului rămâne un criteriu de departajare la majoritatea asigurătorilor - un motor de peste 2.000 cmc este asociat statistic cu o valoare de înlocuire mai mare a vehiculelor terțe implicate în accidente.</p>

          <h3>3. Vechimea vehiculului</h3>
          <p>Vehiculele foarte vechi sau foarte noi pot avea tratamente diferite de la un asigurător la altul - unele companii aplică ajustări pe baza vechimii, altele se bazează exclusiv pe categorie și cilindree. Acesta este unul dintre motivele pentru care ofertele pot varia semnificativ între companii pentru exact același vehicul.</p>

          <h3>4. Vârsta și experiența șoferului principal</h3>
          <p>Șoferii cu vechime mică la volan (de regulă sub 3 ani de la obținerea permisului) și cei sub 25 de ani sunt încadrați statistic într-o categorie de risc mai ridicat și plătesc prime majorate față de un șofer cu experiență de 10-15 ani și istoric curat.</p>

          <h3>5. Zona de înmatriculare</h3>
          <p>Chișinăul și marile centre urbane au densitate de trafic și frecvență de accidente mai ridicate decât zonele rurale, ceea ce se reflectă într-un coeficient teritorial mai mare la majoritatea asigurătorilor.</p>

          <h3>6. Durata poliței</h3>
          <p>O poliță anuală (12 luni) oferă, de regulă, cel mai bun raport preț-acoperire per lună de valabilitate. Polițele pe perioade scurte (1-3 luni) au un tarif proporțional mai ridicat, fiind gândite pentru utilizare ocazională, nu ca soluție economică pe termen lung.</p>

          <h3>7. Numărul și tipul șoferilor autorizați</h3>
          <p>Unele polițe permit conducerea de către orice persoană cu permis valid, altele limitează acoperirea la șoferi nominalizați. Extinderea listei de șoferi autorizați cu persoane tinere sau fără experiență poate influența prima finală la anumiți asigurători.</p>

          <h3>8. Scopul de utilizare a vehiculului</h3>
          <p>Un vehicul folosit exclusiv personal are, de regulă, un profil de risc diferit față de un vehicul utilizat pentru curierat, ride-sharing sau activități comerciale intensive, unde numărul de kilometri parcurși anual este semnificativ mai mare.</p>

          <h3>9. Asigurătorul ales și politica sa comercială</h3>
          <p>Fiecare companie autorizată CNPF își stabilește propriul tarif de bază și propriile grile de discount, în limitele reglementărilor legale. Diferența dintre cea mai scumpă și cea mai ieftină ofertă pentru exact același vehicul și șofer poate depăși frecvent 30-40%. Acesta este motivul central pentru care compararea ofertelor înainte de cumpărare este o economie reală, măsurabilă în bani.</p>

          <h2>Cum se calculează, în practică, prima ta RCA</h2>
          <p>Simplificat, formula pe care o folosesc asigurătorii poate fi descrisă astfel: <strong>Prima finală = Tarif de bază pe categorie x Coeficient Bonus-Malus x Coeficient teritorial x Coeficient vârstă/experiență șofer x Coeficient durată poliță.</strong> Tariful de bază diferă de la un asigurător la altul, pentru că fiecare companie își calculează propriul risc statistic pornind de la portofoliul propriu de daune. De aceea două oferte pentru același vehicul pot arăta radical diferit, chiar dacă toți coeficienții individuali ai șoferului rămân identici.</p>
          <p>Practic, asta înseamnă că nu poți afla prețul real fără să ceri o ofertă personalizată - orice cifră generică găsită online este strict orientativă. Tabelul de mai jos oferă un interval orientativ pentru 2026, pe categorii de vehicule, pentru un șofer cu clasă Bonus-Malus medie (B0) și poliță anuală.</p>

          <div class="overflow-x-auto -mx-4 sm:mx-0 my-8 not-prose">
          <table class="w-full text-sm border-collapse min-w-[540px]">
          <thead><tr class="bg-secondary text-white"><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Categorie vehicul</th><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Interval orientativ anual (MDL)</th><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Factor principal de variație</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
          <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Autoturism sub 1.600 cmc</td><td class="px-4 py-3 text-gray-600 align-top">~1.100 - 1.900 MDL</td><td class="px-4 py-3 text-gray-600 align-top">Bonus-Malus, zonă</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Autoturism 1.600 - 2.000 cmc</td><td class="px-4 py-3 text-gray-600 align-top">~1.400 - 2.400 MDL</td><td class="px-4 py-3 text-gray-600 align-top">Bonus-Malus, vârstă șofer</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Autoturism peste 2.000 cmc</td><td class="px-4 py-3 text-gray-600 align-top">~1.900 - 3.200 MDL</td><td class="px-4 py-3 text-gray-600 align-top">Cilindree, Bonus-Malus</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Microbuz / autoutilitară</td><td class="px-4 py-3 text-gray-600 align-top">~2.200 - 4.000 MDL</td><td class="px-4 py-3 text-gray-600 align-top">Utilizare comercială, greutate</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Motocicletă</td><td class="px-4 py-3 text-gray-600 align-top">~600 - 1.300 MDL</td><td class="px-4 py-3 text-gray-600 align-top">Cilindree, vârstă șofer</td></tr>
          </tbody>
          </table>
          </div>
          <p class="text-xs text-gray-500 italic">Valori orientative de piață pentru 2026, cu titlu informativ. Prețul real depinde de oferta fiecărui asigurător autorizat CNPF, clasa Bonus-Malus exactă și profilul complet al șoferului. Pentru o prezentare generală a RCA, vezi și <a href="/news/asigurari-corporative-companii-moldova-2026">ghidul complet despre asigurarea RCA în Moldova</a>.</p>

          <div class="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
          <strong>5 greșeli care umflă artificial prețul RCA - verifică înainte să semnezi:</strong><br/><br/>
          1. <strong>Cumperi de la primul asigurător găsit</strong>, fără nicio comparație - poți plăti cu 30-40% mai mult pentru aceeași acoperire legală.<br/>
          2. <strong>Nu îți verifici clasa Bonus-Malus reală</strong> înainte de a cere o ofertă - unii asigurători pot aplica implicit o clasă de start mai dezavantajoasă din lipsă de informație.<br/>
          3. <strong>Cumperi polițe scurte repetate</strong> (1-2 luni) în loc de o poliță anuală, plătind un tarif proporțional mai mare pe termen lung.<br/>
          4. <strong>Ignori impactul unei daune mici raportate</strong> - uneori o daună de valoare redusă costă mai puțin achitată direct decât diferența de primă cauzată de trecerea într-o clasă Malus pe următorii ani.<br/>
          5. <strong>Nu actualizezi datele vehiculului</strong> (schimbare motor, radiere temporară) care pot influența corect tariful aplicat.
          </div>

          <h2>7 strategii verificate ca să plătești mai puțin pentru RCA în 2026</h2>
          <ol>
          <li><strong>Compară ofertele de la toți asigurătorii autorizați CNPF înainte de reînnoire.</strong> Diferențele de tarif de bază între companii sunt reale și pot depăși cu ușurință 500-800 MDL anual pentru același vehicul.</li>
          <li><strong>Menține un istoric curat de daune cât mai mult timp posibil.</strong> Fiecare an suplimentar fără daună din vină proprie te apropie de o clasă Bonus superioară și de o reducere mai mare.</li>
          <li><strong>Alege poliță anuală în locul reînnoirilor scurte și repetate.</strong> Reduce costul administrativ proporțional și elimină riscul unei zile fără acoperire între polițe.</li>
          <li><strong>Verifică-ți corect clasa Bonus-Malus înainte de a cere o ofertă nouă</strong>, mai ales dacă ai schimbat recent asigurătorul sau ai avut o pauză fără vehicul înmatriculat.</li>
          <li><strong>Evită raportarea daunelor foarte mici din bugetul propriu</strong>, atunci când costul reparației este apropiat de diferența de primă pe care ai plăti-o în anii următori din cauza trecerii în clasă Malus.</li>
          <li><strong>Grupează polițele auto ale familiei sau ale companiei la același broker</strong>, pentru a obține o negociere unitară și, adesea, condiții comerciale mai bune pentru portofoliul agregat.</li>
          <li><strong>Lucrează cu un broker autorizat CNPF, nu direct cu un singur asigurător.</strong> Brokerul are acces simultan la toate ofertele pieței și este plătit din comisionul asigurătorului, nu din buzunarul tău - deci compararea este gratuită pentru tine.</li>
          </ol>

          <div class="not-prose my-8 bg-secondary text-white rounded-xl p-6">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
          <p class="font-bold text-white text-lg mb-1">Vrei prețul RCA real pentru vehiculul tău, nu o estimare generică?</p>
          <p class="text-gray-400 text-sm">ING Broker compară ofertele tuturor asigurătorilor autorizați CNPF și îți trimite cea mai bună opțiune în 24 ore lucrătoare</p>
          </div>
          <a href="tel:+37369526003" class="flex-shrink-0 bg-primary text-white font-bold px-6 py-3 rounded-lg text-sm text-center whitespace-nowrap">Sună: +(373) 69 526 003</a>
          </div>
          </div>

          <h2>De ce un broker autorizat CNPF obține un preț mai bun decât cumpărarea directă</h2>
          <p>Un asigurător își vinde propriile polițe și, în mod firesc, nu îți va recomanda niciodată oferta unui concurent, chiar dacă aceasta ar fi mai avantajoasă pentru tine. Un broker autorizat CNPF, precum ING Broker, funcționează diferit: are acces simultan la tarifele tuturor companiilor de pe piața moldovenească, poate compara obiectiv condițiile și îți recomandă soluția cu cel mai bun raport preț-acoperire pentru profilul tău exact. Comisionul brokerului este plătit de asigurător, nu de client, astfel încât serviciul de comparație și consultanță este, practic, gratuit pentru tine.</p>
          <p>În plus, un broker păstrează evidența datei de expirare a poliței tale și te alertează din timp, eliminând riscul de a circula fără RCA valabilă - o situație care, așa cum este detaliat în <a href="/news/asigurari-corporative-companii-moldova-2026">ghidul complet despre RCA în Moldova</a>, poate genera amenzi și răspundere financiară integrală pentru daunele produse.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
          <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
          <div class="text-4xl font-bold text-primary mb-3">01</div>
          <p class="font-bold text-secondary text-base mb-2">Ne spui datele vehiculului</p>
          <p class="text-sm text-gray-500 leading-relaxed">Categorie, cilindree, clasă Bonus-Malus dacă o cunoști. Fără angajament la prima discuție.</p>
          <p class="text-xs text-primary font-semibold mt-3">~10 minute</p>
          </div>
          <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
          <div class="text-4xl font-bold text-primary mb-3">02</div>
          <p class="font-bold text-secondary text-base mb-2">Primești oferta comparativă</p>
          <p class="text-sm text-gray-500 leading-relaxed">Solicităm cotații de la asigurătorii autorizați CNPF și îți arătăm prețul real, nu unul estimativ.</p>
          <p class="text-xs text-primary font-semibold mt-3">24 ore lucrătoare</p>
          </div>
          <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
          <div class="text-4xl font-bold text-primary mb-3">03</div>
          <p class="font-bold text-secondary text-base mb-2">Polița se emite imediat</p>
          <p class="text-sm text-gray-500 leading-relaxed">După ce alegi oferta, polița RCA se emite în aceeași zi, fără costuri suplimentare de intermediere.</p>
          <p class="text-xs text-primary font-semibold mt-3">suport 0-365 zile/an</p>
          </div>
          </div>

          <div class="not-prose flex flex-wrap items-center gap-3 my-8 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
          <span class="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 text-xs font-semibold rounded-full px-4 py-2">Broker autorizat CNPF Moldova</span>
          <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">Toți asigurătorii într-o singură cerere</span>
          <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">Română - Rusă - Engleză</span>
          <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">Comisionul plătit de asigurător, nu de tine</span>
          </div>

          <h2>Întrebări frecvente - Prețul RCA în Moldova</h2>

          <div class="not-prose border-t border-gray-100 mt-4">

          <div class="border-b border-gray-100 py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Care este cel mai important factor care influențează prețul RCA?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Clasa Bonus-Malus este, de departe, factorul cu impactul cel mai mare - poate reduce prima cu 50% pentru un șofer fără daune sau o poate majora cu 145% pentru un șofer cu accidente repetate din vină proprie. Următorii ca importanță sunt categoria și cilindreea vehiculului, urmate de vârsta și experiența șoferului principal.</div>
          </details>
          </div>

          <div class="border-b border-gray-100 py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cum aflu clasa mea Bonus-Malus înainte de a cere o ofertă RCA?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Clasa Bonus-Malus este înscrisă pe polița RCA curentă sau poate fi verificată de asigurătorul tău actual la cerere. Dacă nu o cunoști, ING Broker o poate verifica pentru tine în baza de date a asigurătorilor autorizați CNPF, ca parte din procesul gratuit de ofertare.</div>
          </details>
          </div>

          <div class="border-b border-gray-100 py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">De ce diferă atât de mult prețul RCA de la un asigurător la altul, pentru același vehicul?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Fiecare asigurător autorizat CNPF își calculează propriul tarif de bază pornind de la portofoliul propriu de daune și propria strategie comercială. Aceste diferențe de politică internă, nu neapărat de acoperire legală, explică de ce ofertele pentru exact același vehicul și șofer pot varia cu 30-40% sau chiar mai mult.</div>
          </details>
          </div>

          <div class="border-b border-gray-100 py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Este mai ieftin să cumpăr o poliță RCA anuală decât mai multe polițe scurte?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Da, în majoritatea cazurilor. Polițele pe perioade scurte (1-3 luni) au un tarif proporțional mai ridicat per lună de acoperire, fiind gândite pentru utilizare ocazională. O poliță anuală oferă, de regulă, cel mai bun raport preț-acoperire și elimină riscul unei zile fără RCA validă între reînnoiri.</div>
          </details>
          </div>

          <div class="border-b border-gray-100 py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Merită să raportez o daună mică la RCA sau e mai ieftin s-o plătesc singur?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Depinde de valoarea daunei. O daună din vină proprie te poate trece într-o clasă Malus, majorând prima pentru mai mulți ani următori. Dacă suma majorării cumulate pe termen mediu depășește costul reparației, poate fi mai avantajos să acoperi singur costul mic și să îți păstrezi clasa Bonus. ING Broker te poate ajuta să faci acest calcul concret, caz cu caz.</div>
          </details>
          </div>

          <div class="border-b border-gray-100 py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Vârsta șoferului chiar influențează prețul RCA la o poliță de companie?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Da, dacă polița nominalizează șoferi autorizați. Dacă vehiculul companiei poate fi condus de orice angajat cu permis valid, fără nominalizare, impactul vârstei individuale scade, dar unii asigurători pot totuși aplica un coeficient de risc pe baza vârstei medii a angajaților care conduc frecvent vehiculul respectiv.</div>
          </details>
          </div>

          <div class="border-b border-gray-100 py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Pot obține un preț mai bun dacă asigur mai multe vehicule ale familiei sau firmei împreună?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Adesea, da. Gruparea mai multor vehicule într-un singur program de asigurare, administrat printr-un broker, poate aduce condiții comerciale mai bune și o reînnoire sincronizată, simplificând gestionarea și reducând riscul unei polițe expirate neobservate.</div>
          </details>
          </div>

          <div class="py-1">
          <details class="group">
          <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
          <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">De ce să cer oferta prin ING Broker și nu direct de la un asigurător?</span>
          <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          </summary>
          <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Un asigurător îți vinde doar propriile polițe. Un broker autorizat CNPF, precum ING Broker, compară simultan ofertele tuturor asigurătorilor de pe piața moldovenească și îți recomandă obiectiv cea mai avantajoasă opțiune pentru profilul tău exact. Comisionul este plătit de asigurător, deci serviciul este gratuit pentru tine.</div>
          </details>
          </div>

          </div>

          <div class="bg-secondary text-white p-8 rounded-xl text-center mt-10 not-prose">
          <h2 class="text-white text-2xl font-bold mt-0 mb-2">Află exact cât ai plăti pentru RCA la vehiculul tău</h2>
          <p class="text-gray-400 text-sm mb-6">Insurance ING Broker SRL, Chișinău - comparăm ofertele tuturor asigurătorilor autorizați CNPF și îți recomandăm cel mai bun preț pentru profilul tău. Consultanță gratuită, răspuns în 24 ore lucrătoare.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <a href="tel:+37369526003" class="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg text-base">+(373) 69 526 003</a>
          <a href="mailto:andrei.moraru@ingbroker.md" class="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors">andrei.moraru@ingbroker.md</a>
          </div>
          <div class="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
          <span>Răspuns garantat în 24h lucrătoare</span>
          <span>Fără angajamente la prima discuție</span>
          <span>Consultanță gratuită</span>
          </div>
          </div>

          </div>`,

          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
          date: '3 Iul 2026',
          author: 'Andrei Moraru',
          tags: ['RCA', 'Auto', 'Pret', 'Moldova', 'Ghid'],
          seo: {
                  title: 'Cum se determină prețul RCA în Moldova 2026 - Factori și Calcul | ING Broker',
                  description: 'Ghid complet 2026: toți factorii care determină prețul RCA, cum se calculează prima, tabel de prețuri orientative pe categorii și 7 strategii ca să obții cea mai accesibilă poliță. Broker autorizat CNPF.',
                  keywords: 'calcul pret RCA Moldova 2026, cum se calculeaza RCA, factori pret RCA, bonus malus RCA Moldova, RCA ieftin Moldova, cat costa RCA 2026, tarif RCA Chisinau, pret RCA autoturism Moldova, ING Broker RCA'
          }
      
    },
    {
      id: 'transport-logistica-1',
      slug: 'asigurari-transport-logistica-cmr-cargo-moldova',
      title: 'Asigurari Transport si Logistica Moldova - CMR, Cargo, Flote Auto, Depozite',
      excerpt: 'Ghid complet de asigurari pentru companii de transport si logistica din Moldova: CMR, Cargo, RCA, Carte Verde, CASCO flota, asigurarea depozitelor si Business Interruption. Cum sa alegi protectia corecta pentru fiecare risc operational.',
      content: `<div class="prose prose-lg max-w-none">

<div class="bg-secondary text-white p-6 rounded-xl mb-8 not-prose">
  <p class="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Scenariu real de dauna - Moldova, 2025</p>
  <p class="text-white text-base leading-relaxed mb-3">O companie din Chisinau expediaza 34 de paleti cu electrocasnice - valoare totala 92.000 EUR - catre un client din Polonia. In parcarea unui TIR de langa Varsovia, incarcatura este furata partial in timpul noptii. Marfa lipsa: 58.000 EUR. Despagubire CMR primita de la transportator: <strong class="text-primary">~8.400 EUR</strong> (limita 8,33 DST/kg conform Conventiei CMR, art. 23). Pierdere neta a exportatorului: <strong class="text-white">49.600 EUR</strong> - deoarece nu exista o polita Cargo proprie.</p>
  <p class="text-gray-400 text-xs italic">Caz sintetic din practica de brokeraj. CMR protejeaza transportatorul, nu marfa ta.</p>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">12 mld</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">USD</p>
    <p class="text-xs text-gray-500 mt-1">Comert exterior Moldova 2024</p>
  </div>
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">8,33</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">DST/kg</p>
    <p class="text-xs text-gray-500 mt-1">Limita raspundere CMR art. 23</p>
  </div>
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">67%</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">exporturi</p>
    <p class="text-xs text-gray-500 mt-1">ajung in UE via DCFTA 2016</p>
  </div>
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">24h</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">oferta</p>
    <p class="text-xs text-gray-500 mt-1">raspuns ING Broker</p>
  </div>
</div>

<h2>De ce transportul si logistica din Moldova necesita asigurari specializate</h2>
<p>Republica Moldova a transportat si procesat in 2024 marfuri comerciale in valoare de peste <strong>12 miliarde USD</strong> - exporturi de 4,1 mld USD si importuri de 8,2 mld USD (Biroul National de Statistica, 2025). Acordul DCFTA cu Uniunea Europeana, in vigoare din 2016, a transformat Moldova intr-un coridor comercial activ catre pietele europene: 67% din exporturi ajung in UE, pe rute ce traverseaza Romania, Ungaria, Polonia sau partial Ucraina.</p>
<p>Pentru companiile de transport si logistica din Moldova, aceasta realitate inseamna riscuri concrete si costuri reale: accidente pe infrastructuri rutiere variabile, furturi de marfa in parcari de TIR (Romania si Ungaria sunt printre cele mai afectate tari din UE), deteriorari din manipulare gresita la punctele de transbordare, intarzieri la livrare care genereaza penalitati contractuale si avarii in depozite. Fiecare risc neasigurat este o pierdere directa din profitul companiei.</p>
<div class="bg-primary/5 border-l-4 border-primary p-6 my-8">
<strong>Risc critic ignorat frecvent:</strong> Un transportator moldovean care transporta marfa de 80.000 EUR are o raspundere legala CMR limitata la <em>~8,33 DST/kg brut</em>. La 2.000 kg de marfa, despagubirea maxima conform CMR este de <strong>~10.640 EUR</strong> - mai putin de 14% din valoarea marfii. Fara o polita Cargo separata a clientului, diferenta de ~69.360 EUR ramane neacoperita.
</div>

<h2>Harta completa a asigurarilor pentru transport si logistica</h2>
<p>O companie de transport sau logistica din Moldova poate activa in mai multe roluri simultan: transportator, depozitar, freight forwarder, operator logistic sau distribuitor. Fiecare rol genereaza un tip specific de expunere la risc si necesita un instrument distinct de asigurare.</p>
<div class="overflow-x-auto -mx-4 sm:mx-0 my-8 not-prose">
<table class="w-full text-sm border-collapse min-w-[540px]">
<thead><tr class="bg-secondary text-white"><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Tipul de asigurare</th><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Ce protejeaza</th><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Cine are nevoie</th></tr></thead>
<tbody class="divide-y divide-gray-100">
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Asigurare CMR</td><td class="px-4 py-3 text-gray-600 align-top">Raspunderea transportatorului pentru marfa conform Conventiei CMR</td><td class="px-4 py-3 text-gray-600 align-top">Transportatori rutieri internationali</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Asigurare Cargo</td><td class="px-4 py-3 text-gray-600 align-top">Valoarea comerciala a marfii (interesul proprietarului)</td><td class="px-4 py-3 text-gray-600 align-top">Exportatori, importatori, producatori, distribuitori</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">RCA + Carte Verde</td><td class="px-4 py-3 text-gray-600 align-top">Raspunderea civila auto fata de terti, national si international</td><td class="px-4 py-3 text-gray-600 align-top">Orice companie cu vehicule comerciale</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">CASCO flota</td><td class="px-4 py-3 text-gray-600 align-top">Daunele proprii ale vehiculelor (accidente, furt, avarii)</td><td class="px-4 py-3 text-gray-600 align-top">Companii cu camioane, autoutilitare, vehicule de distributie</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Property depozite</td><td class="px-4 py-3 text-gray-600 align-top">Cladiri, stocuri, echipamente logistice (incendiu, furt, inundatie)</td><td class="px-4 py-3 text-gray-600 align-top">Operatori logistici, depozitari, centre de distributie</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Business Interruption</td><td class="px-4 py-3 text-gray-600 align-top">Pierderea veniturilor dupa o dauna care blocheaza activitatea</td><td class="px-4 py-3 text-gray-600 align-top">Companii cu depozite sau centre logistice critice</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">Raspundere civila generala</td><td class="px-4 py-3 text-gray-600 align-top">Daune produse tertilor in cursul activitatii logistice</td><td class="px-4 py-3 text-gray-600 align-top">Operatori logistici, freight forwarderi, depozitari</td></tr>
</tbody>
</table>
</div>

<h2>Asigurarea CMR - ce protejeaza si unde sunt limitele</h2>
<p>Conventia CMR (Geneva, 1956), ratificata de Republica Moldova, stabileste cadrul uniform pentru contractele de transport rutier international de marfuri. Asigurarea CMR converteste raspunderea legala a transportatorului intr-un mecanism financiar actionabil.</p>
<h3>Ce acopera asigurarea CMR</h3>
<ul>
<li>Pierderea totala sau partiala a marfii preluate pentru transport</li>
<li>Deteriorarea marfii produsa intre preluare si livrare</li>
<li>Intarzierea livrarii, daca produce un prejudiciu dovedit</li>
<li>Cheltuielile de salvare sau limitare a daunei, in anumite conditii</li>
<li>Riscuri de furt, daca sunt acceptate explicit prin conditiile politei</li>
</ul>
<div class="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
<strong>Excluderi frecvente din politele CMR - verifica inainte de a semna:</strong><br/>
- Vicii proprii ale marfii sau ambalaj deficitar nementionat la preluare<br/>
- Riscuri de razboi si zone de conflict (ruta prin Ucraina necesita clauza separata)<br/>
- Marfuri excluse prin conditiile asiguratorului (obiecte de valoare, bani, documente)<br/>
- Camioane fara dotari de securitate impuse (GPS, parcare autorizata)<br/>
- Daune produse prin neglijenta grava sau frauda transportatorului
</div>

<h2>Asigurarea Cargo vs CMR - diferenta care costa milioane</h2>
<p>Asigurarea Cargo si asigurarea CMR nu sunt alternative - sunt instrumente complementare care protejeaza interese diferite. CMR protejeaza transportatorul; Cargo protejeaza proprietarul marfii.</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
  <div class="border-2 border-primary rounded-lg p-5">
    <h4 class="font-bold text-primary mt-0 mb-3">Asigurarea CMR</h4>
    <ul class="text-sm space-y-1 list-none pl-0">
      <li>Protejeaza: <strong>transportatorul</strong></li>
      <li>Acopera: raspunderea legala conform Conventiei CMR</li>
      <li>Limita: 8,33 DST/kg brut (~11 USD/kg)</li>
      <li>Conditie: transportatorul trebuie sa fie raspunzator</li>
      <li>Nu acopera: valoarea comerciala integrala a marfii</li>
    </ul>
  </div>
  <div class="border-2 border-primary rounded-lg p-5">
    <h4 class="font-bold text-primary mt-0 mb-3">Asigurarea Cargo</h4>
    <ul class="text-sm space-y-1 list-none pl-0">
      <li>Protejeaza: <strong>proprietarul marfii</strong></li>
      <li>Acopera: valoarea comerciala reala (CIF/factura)</li>
      <li>Clauza A (All Risks): acoperire completa</li>
      <li>Nu depinde de raspunderea transportatorului</li>
      <li>Open Cover pentru volume regulate de transport</li>
    </ul>
  </div>
</div>
<p>Un exportator de vinuri moldovenesti care trimite un container de 40.000 EUR spre Germania are nevoie de polita Cargo proprie. Daca marfa se deterioreaza in tranzit din cauza temperaturii, iar transportatorul demonstreaza ca a folosit echipamentul corect, polita CMR poate sa nu plateasca. Polita Cargo a exportatorului, cu clauza de refrigerare inclusa, acopera direct pierderea.</p>

<div class="not-prose my-8 bg-secondary text-white rounded-xl p-6">
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <p class="font-bold text-white text-lg mb-1">Transportati marfa international din Moldova?</p>
      <p class="text-gray-400 text-sm">Obtineti oferta CMR + Cargo comparativa - fara angajament, in 24 ore lucratoare</p>
    </div>
    <a href="tel:+37369526003" class="flex-shrink-0 bg-primary text-white font-bold px-6 py-3 rounded-lg text-sm text-center whitespace-nowrap">Suna: +(373) 69 526 003</a>
  </div>
</div>

<h2>Asigurarea flotei auto - RCA, Carte Verde si CASCO pentru vehicule comerciale</h2>
<p>O companie de transport activa din Moldova poate opera zeci sau sute de vehicule: TIR-uri, autoutilitare, remorci, semiremorci, vehicule frigorifice sau vehicule de distributie. Gestionarea asigurarilor pentru flote presupune mult mai mult decat simpla reinnoire anuala a politelor individuale.</p>
<h3>RCA - obligatoriu, Carte Verde - esentiala pentru international</h3>
<p>RCA este obligatorie pentru orice vehicul inmatriculat in Moldova. Carta Verde este esentiala pentru cursele internationale - o Carte Verde expirata inseamna interdictie de circulatie si imposibilitatea de a trece frontiera. ING Broker gestioneaza centralizat politele pentru flote, evita expirarile si negociaza conditii favorabile cu asiguratorii.</p>
<div class="bg-primary/5 border-l-4 border-primary p-6 my-8">
<strong>Calcul impact operational - CASCO pentru camioane:</strong> Un camion TIR imobilizat 3 saptamani din cauza unui accident genereaza pierderi de venit intre 3.000-8.000 EUR (in functie de ruta si client). CASCO cu asistenta si masina de inlocuire limiteaza semnificativ aceasta pierdere, pe langa costul reparatiei propriu-zise. Pentru vehicule in leasing, CASCO este impusa contractual de finantator.
</div>

<h2>Asigurarea depozitelor si stocurilor - riscuri ignorate pana in momentul daunei</h2>
<p>Un centru logistic sau depozit din Moldova poate gestiona simultan stocuri proprii si marfa a zeci de clienti. O dauna - incendiu, inundatie, furt sau avarie electrica - produce pierderi cumulate enorme si poate bloca activitatea saptamani intregi.</p>
<h3>Ce se asigura intr-un depozit logistic</h3>
<ul>
<li><strong>Cladiri si structuri:</strong> incendiu, explozie, inundatie, furtuna, calamitati naturale</li>
<li><strong>Stocuri si marfa:</strong> pierdere sau deteriorare din riscuri asigurate</li>
<li><strong>Echipamente logistice:</strong> stivuitoare, sisteme de rafturi, benzi transportoare</li>
<li><strong>Sisteme frigorifice:</strong> deteriorarea marfii perisabile din avaria echipamentului de racire</li>
<li><strong>Sisteme IT si securitate:</strong> calculatoare, servere, camere, sisteme de acces</li>
</ul>
<p>Pentru un operator logistic cu depozit propriu, un incendiu major nu inseamna doar costul reconstructiei. Inseamna si pierderea veniturilor pe durata reparatiilor, costuri de relocare temporara si penalitati fata de clienti. <strong>Asigurarea Business Interruption</strong> acopera aceasta diferenta, calculata pe o perioada de indemnizare negociata (de regula 12-24 luni).</p>

<h2>Cele mai frecvente greseli ale companiilor de transport din Moldova</h2>
<div class="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
<strong>Greseli costisitoare identificate de ING Broker:</strong><br/><br/>
1. <strong>Confundarea CMR cu Cargo</strong> - transportatorul are polita CMR, dar clientul nu are Cargo. La dauna, toata lumea pierde.<br/>
2. <strong>Limite prea mici la CMR</strong> - polita cu limita 50.000 EUR pentru transporturi obisnuite de 100.000-200.000 EUR.<br/>
3. <strong>Teritoriu insuficient</strong> - polita CMR fara acoperire pentru Ucraina sau tarile baltice, unde compania opereaza.<br/>
4. <strong>Depozit neasigurat</strong> - marfa clientilor sta in depozit fara nicio polita property activa.<br/>
5. <strong>CASCO expirat pe vehicule in leasing</strong> - incalcarea contractului de leasing si risc de reziliere.<br/>
6. <strong>Cumpararea dupa pret minim</strong> - polita ieftina cu franjize mari, excluderi extinse si limite insuficiente.
</div>

<h2>Cum obtineti protectia corecta - 3 pasi simpli cu ING Broker</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
  <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
    <div class="text-4xl font-bold text-primary mb-3">01</div>
    <p class="font-bold text-secondary text-base mb-2">Analiza gratuita a riscurilor</p>
    <p class="text-sm text-gray-500 leading-relaxed">Ne spuneti activitatea companiei: tipuri de marfa, rute, flota, depozite. Fara documente la prima discutie, fara angajamente.</p>
    <p class="text-xs text-primary font-semibold mt-3">~30 minute</p>
  </div>
  <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
    <div class="text-4xl font-bold text-primary mb-3">02</div>
    <p class="font-bold text-secondary text-base mb-2">Oferta comparativa</p>
    <p class="text-sm text-gray-500 leading-relaxed">Solicitam oferte de la mai multi asiguratori autorizati CNPF si va prezentam comparatia - pret, conditii, excluderi, limite.</p>
    <p class="text-xs text-primary font-semibold mt-3">24 ore lucratoare</p>
  </div>
  <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
    <div class="text-4xl font-bold text-primary mb-3">03</div>
    <p class="font-bold text-secondary text-base mb-2">Polita emisa + suport continuu</p>
    <p class="text-sm text-gray-500 leading-relaxed">Dupa aprobare, emitem polita in aceeasi zi. La orice dauna, ING Broker va asista de la notificare pana la incasarea despagubirii.</p>
    <p class="text-xs text-primary font-semibold mt-3">suport 0-365 zile/an</p>
  </div>
</div>

<div class="not-prose flex flex-wrap items-center gap-3 my-8 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
  <span class="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    Broker autorizat CNPF Moldova
  </span>
  <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    Acces la toti asiguratorii din Moldova
  </span>
  <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    Romana - Rusa - Engleza
  </span>
  <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    Comisionul platit de asigurator, nu de tine
  </span>
</div>

<h2>Intrebari frecvente - Asigurari Transport si Logistica Moldova</h2>

<div class="not-prose border-t border-gray-100 mt-4">

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Ce este asigurarea CMR si cine are nevoie de ea in Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Asigurarea CMR acopera raspunderea transportatorului rutier international pentru pierderea, deteriorarea sau intarzierea marfii, conform Conventiei CMR (Geneva, 1956), ratificata de Republica Moldova. Este necesara pentru orice companie moldoveneasca care transporta marfuri pe rute internationale: Moldova-Romania, Moldova-UE, Moldova-Ucraina, Moldova-Turcia. Limita legala CMR este 8,33 DST/kg brut - mult mai mica decat valoarea comerciala reala a multor marfuri.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Care este diferenta dintre asigurarea CMR si asigurarea Cargo?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">CMR protejeaza transportatorul - acopera raspunderea sa legala fata de proprietarul marfii, in limita a 8,33 DST/kg brut. Cargo protejeaza proprietarul marfii - acopera valoarea comerciala integrala a marfii, indiferent de raspunderea transportatorului. Companiile de transport din Moldova au nevoie de CMR propriu; clientii lor (exportatorii, importatorii) au nevoie de polita Cargo proprie. Cele doua asigurari sunt complementare, nu alternative.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Ce asigurari sunt obligatorii pentru un transportator din Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Obligatorii prin lege: RCA (Legea nr. 414/2006) pentru orice vehicul inmatriculat in Moldova si Carte Verde pentru vehiculele care circula in afara tarii. CMR este practic obligatorie pentru transport international - partenerii comerciali si expeditorii o solicita contractual. CASCO, asigurarea depozitelor si Business Interruption sunt facultative, dar recomandate in functie de activitate si valoarea activelor expuse.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cat costa asigurarea CMR pentru o companie de transport din Moldova in 2026?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Prima de asigurare CMR depinde de: numarul de vehicule, volumul anual de transporturi, limitele de raspundere solicitate, tarile in care se opereaza si istoricul daunelor. Orientativ: o polita CMR cu limita 250.000 EUR pentru un transportator cu 5 camioane active poate costa 800-2.500 EUR/an. ING Broker obtine comparatii de la mai multi asiguratori autorizati CNPF si prezinta ofertele in 24 de ore lucratoare.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cum aleg cea mai buna polita Cargo pentru firma mea din Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Factorii cheie: tipul si valoarea medie a marfii per transport, modalitatile de transport utilizate (rutier, aerian, multimodal), rutele principale si tarile de tranzit, conditia de acoperire dorita (All Risks recomandat pentru marfuri de valoare) si istoricul de daune. Un broker autorizat CNPF analizeaza toti acesti factori si recomanda solutia optima - raport calitate-pret - din ofertele pietei moldovenesti.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Trebuie asigurat depozitul logistic al companiei?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Da. Operatorul unui depozit logistic raspunde fata de clienti pentru marfa pastrata. Fara o polita property, o dauna prin incendiu, inundatie sau furt genereaza pierderi directe si litigii cu clientii. Asigurarea depozitului acopera structura, stocurile si echipamentele logistice. Business Interruption acopera suplimentar pierderea veniturilor pe durata reconstructiei - de regula 12-24 luni de profit operational garantat.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Ce este CASCO pentru flota comerciala si cum difera de RCA?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">CASCO pentru flota comerciala este o asigurare facultativa care acopera vehiculele proprii ale companiei: accidente, furt, incendiu, calamitati naturale. RCA acopera prejudiciile produse tertilor de catre soferul vinovat - nu vehiculul propriu. Pentru camioane TIR sau autoutilitare noi, CASCO este recomandat mai ales daca vehiculele sunt in leasing (impus contractual de finantator) sau au valoare ridicata.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Ce este Business Interruption pentru companii de transport si de ce conteaza?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Business Interruption acopera pierderea de profit si cheltuielile fixe (salarii, chirii, rate leasing) atunci cand activitatea este oprita sau redusa ca urmare a unui eveniment asigurat - incendiu, calamitate, accident grav. Fara aceasta polita, compania suporta luni de cheltuieli fixe fara venituri, chiar daca vehiculele sau depozitul sunt acoperite de alte asigurari. Recomandat companiilor cu cifra de afaceri anuala de peste 1 milion MDL.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Poate ING Broker gestiona asigurarea pentru o flota de 20-50 camioane?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Da. ING Broker structureaza programe centralizate pentru flote de orice dimensiune: RCA, Carte Verde, CASCO, CMR si asigurarea depozitelor intr-un singur contract coordonat. Avantaje: o singura data de reinnoire, administrare simplificata, negocierea conditiilor cu asiguratorii autorizati CNPF si eliminarea riscului de expirare neobservata a unei polite individuale.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cum functioneaza procedura de dauna la o asigurare de transport?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">(1) Notificati asiguratorul si ING Broker in 24-48 ore de la constatarea daunei; (2) Documentati cu fotografii detaliate si documente de transport originale (CMR, facturi, avize); (3) Nu efectuati reparatii majore fara acordul scris al asiguratorului; (4) ING Broker asista la constituirea dosarului de dauna si la negocierea cu asiguratorul; (5) Despagubirea se plateste conform limitelor politei. Interventia unui broker creste semnificativ sansele de despagubire corecta si rapida.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">De ce sa aleg un broker de asigurari in loc sa cumpar direct de la asigurator?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Un broker autorizat CNPF lucreaza in interesul tau, nu al asiguratorului. Avantaje concrete: acces la ofertele tuturor asiguratorilor de pe piata moldoveneasca dintr-o singura solicitare, analiza comparativa obiectiva, negocierea primelor si conditiilor speciale pentru flote mari, asistenta dedicata la daune si consultanta gratuita. Comisionul brokerului este platit de asigurator - serviciul este practic gratuit pentru compania de transport.</div>
</details>
</div>

<div class="py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cum obtin o oferta de asigurare transport de la ING Broker Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Trei variante: (1) Suna direct la +(373) 69 526 003 in zilele lucratoare 09:00-18:00; (2) Trimite email la andrei.moraru@ingbroker.md cu datele flotei si tipul de activitate; (3) Foloseste formularul de contact de pe ingbroker.md. Un consultant ING Broker va contacta compania ta in maximum 24 de ore lucratoare cu o analiza comparativa si o recomandare personalizata. ING Broker este autorizat CNPF (Comisia Nationala a Pietei Financiare), Republica Moldova.</div>
</details>
</div>

</div>

<div class="bg-secondary text-white p-8 rounded-xl text-center mt-10 not-prose">
  <h2 class="text-white text-2xl font-bold mt-0 mb-2">Obtineti o analiza completa de asigurare pentru compania voastra de transport</h2>
  <p class="text-gray-400 text-sm mb-6">Insurance ING Broker SRL, Chisinau - consultanta specializata si oferte comparative pentru CMR, Cargo, flote auto, CASCO, Carte Verde, depozite si Business Interruption. Autorizat CNPF. Raspuns in 24 ore lucratoare.</p>
  <div class="flex flex-col sm:flex-row justify-center gap-4 mb-6">
    <a href="tel:+37369526003" class="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg text-base">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      +(373) 69 526 003
    </a>
    <a href="mailto:andrei.moraru@ingbroker.md" class="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors">
      andrei.moraru@ingbroker.md
    </a>
  </div>
  <div class="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
    <span>Raspuns garantat in 24h lucratoare</span>
    <span>Fara angajamente la prima discutie</span>
    <span>Consultanta gratuita</span>
  </div>
</div>

</div>`,
      image: '/transport-triptych-new.jpeg',
      date: '20 Mai 2026',
      author: 'Andrei Moraru',
      tags: ['Transport', 'Logistica', 'CMR', 'Cargo', 'Flota', 'Depozite', 'Moldova'],
      seo: {
        title: 'Asigurari Transport si Logistica Moldova | ING Broker',
        description: 'Asigurari CMR, Cargo, CASCO flota si depozite pentru transportatori din Moldova. Oferta personalizata in 24h. Autorizat CNPF. Suna: +(373) 69 526 003 - ING Broker.',
        keywords: 'asigurare CMR Moldova 2026, asigurare cargo Moldova, broker asigurari transport Chisinau, asigurare transportator international Moldova, CASCO flota comerciala Moldova, asigurare depozit logistic Moldova, Business Interruption transport Moldova, asigurare logistica Moldova, asigurare flota auto Moldova, asigurare transportatori Moldova, asigurare marfa in tranzit Moldova, polita CMR pentru TIR Moldova, pret asigurare CMR Moldova 2026, asigurare raspundere transportator rutier, CMR obligatoriu Moldova, asigurare cargo multimodal Moldova, ING Broker asigurari transport, asigurare flota camioane Moldova, cotatie asigurare transport Moldova'
      }
    },
    {
      id: 'corporate-1',
      slug: 'asigurari-corporative-companii-moldova-2026',
      title: 'Asigurare RCA Moldova 2026 - Ce Este, Ce Acopera si Cat Costa',
      excerpt: 'Ghid complet despre asigurarea RCA obligatorie in Moldova: ce acopera, sistemul Bonus-Malus, Carta Verde, pretul real in 2026 si cum sa alegi polita corecta pentru vehiculul sau flota ta.',
      content: `<div class="prose prose-lg max-w-none">

<div class="bg-secondary text-white p-6 rounded-xl mb-8 not-prose">
  <p class="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Scenariu real de dauna - Chisinau, 2025</p>
  <p class="text-white text-base leading-relaxed mb-3">Un sofer din Chisinau conduce fara polita RCA valida - polita expirase cu 12 zile inainte. La o intersectie din sectorul Rascani, tamponarea din spate produce daune de <strong class="text-primary">~38.500 MDL</strong> vehiculului din fata si vatamari usoare soferului. Rezultat: amenda <strong class="text-white">1.500 MDL</strong> pentru lipsa RCA, plus obligatia de a plati personal toate daunele. Fondul de Garantare plateste victima, apoi recupereaza suma integral de la soferul vinovat. Total platit din buzunar: <strong class="text-primary">~42.000 MDL</strong>.</p>
  <p class="text-gray-400 text-xs italic">Caz sintetic din practica de brokeraj. O polita RCA valida pentru acel vehicul ar fi costat sub 1.500 MDL pe an.</p>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">25.000+</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">accidente/an</p>
    <p class="text-xs text-gray-500 mt-1">inregistrate in Moldova</p>
  </div>
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">3.000</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">MDL amenda</p>
    <p class="text-xs text-gray-500 mt-1">maxima pentru lipsa RCA</p>
  </div>
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">B8</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">bonus max</p>
    <p class="text-xs text-gray-500 mt-1">reducere pana la 50% din prima</p>
  </div>
  <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
    <p class="text-2xl font-bold text-secondary leading-tight">24h</p>
    <p class="text-xs text-primary font-semibold uppercase tracking-wide mt-1">oferta</p>
    <p class="text-xs text-gray-500 mt-1">raspuns ING Broker</p>
  </div>
</div>

<h2>Ce este RCA si de ce este obligatorie in Moldova</h2>
<p>Asigurarea de Raspundere Civila Auto (RCA) este singura asigurare de masina obligatorie prin lege in Republica Moldova. Orice vehicul inmatriculat in Moldova trebuie sa aiba o polita RCA valida pentru a circula legal pe drumurile publice. Legea nr. 414-XVI din 22 decembrie 2006 privind asigurarea obligatorie de raspundere civila auto stabileste cadrul legal, minimele de acoperire si conditiile pe care orice asigurator autorizat CNPF trebuie sa le respecte.</p>
<p>RCA nu protejeaza vehiculul propriu al soferului vinovat. Acopera prejudiciile produse altor persoane: daune materiale (reparatia vehiculului avariat, bunuri distruse) si vatamari corporale (cheltuieli medicale, invaliditate, compensatie pentru deces) pe care soferul vinovat le cauzeaza tertilor intr-un accident rutier. Daca esti victima unui accident produs de un sofer vinovat, asiguratorul RCA al acestuia iti plateste daunele.</p>

<div class="bg-primary/5 border-l-4 border-primary p-6 my-8">
<strong>Ce risca un sofer fara RCA valida in Moldova (2026):</strong><br/><br/>
- <strong>Amenda contraventionala:</strong> 1.000 - 3.000 MDL la controlul politiei<br/>
- <strong>Retinerea permisului de conducere</strong> pana la prezentarea politei valide<br/>
- <strong>Raspundere civila integrala:</strong> la accident, platesti personal toate daunele produse tertilor<br/>
- <strong>Actiune in regres:</strong> Fondul de Garantare plateste victima, apoi recupereaza suma integral de la tine<br/>
- La accident grav cu victime: <strong>dosar penal</strong> pentru vatamare corporala sau deces din culpa
</div>

<h2>Ce acopera RCA Moldova - acoperiri si limite</h2>
<p>Polita RCA acopera prejudiciile produse tertilor in urma unui accident rutier in care vina apartine detinatorului politei sau oricarui conducator auto autorizat al vehiculului. Acoperirea este valabila atat pe teritoriul Moldovei, cat si in tarile membre ale Sistemului Carte Verde daca polita include Carta Verde.</p>
<h3>Acoperiri incluse in RCA</h3>
<ul>
<li><strong>Daune materiale la vehicule terte:</strong> reparatia sau inlocuirea vehiculului avariat in accident</li>
<li><strong>Daune la bunuri:</strong> proprietati avariate - garduri, constructii, mobilier stradal, marfuri transportate</li>
<li><strong>Cheltuieli medicale si spitalizare</strong> pentru victimele accidentului</li>
<li><strong>Indemnizatie pentru invaliditate temporara sau permanenta</strong> a persoanelor ranite</li>
<li><strong>Compensatie in caz de deces</strong> - familia si urmasii persoanei decedate</li>
<li><strong>Daune morale</strong> - in limitele stabilite prin hotarare judecatoreasca</li>
<li><strong>Cheltuieli de salvare</strong> pentru limitarea daunei, in conditiile politei</li>
</ul>

<div class="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
<strong>Ce NU acopera RCA - confuzii frecvente:</strong><br/>
- Daunele produse propriului vehicul (pentru asta ai nevoie de CASCO)<br/>
- Vatamarea corporala a soferului vinovat (necesita asigurare de accidente separata)<br/>
- Daune produse intentionat sau in stare de ebrietate dovedita<br/>
- Daunele produse in curse de viteza sau competitii neautorizate<br/>
- Furturi si vandalism (acestea se acopera prin CASCO sau All Risks)<br/>
- Daune produse de sofer neautorizat (fara permis sau fara drept de conducere pentru acel vehicul)
</div>

<h2>RCA vs CASCO - diferenta pe care toti soferii trebuie sa o cunoasca</h2>
<p>RCA si CASCO sunt doua asigurari auto complementare care acopera riscuri diferite. Confuzia dintre ele este printre cele mai frecvente greseli pe care le fac soferii din Moldova.</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
  <div class="border-2 border-primary rounded-lg p-5">
    <h4 class="font-bold text-primary mt-0 mb-3">RCA - Obligatorie</h4>
    <ul class="text-sm space-y-1 list-none pl-0">
      <li>Protejeaza: <strong>tertele persoane</strong> (victimele)</li>
      <li>Acopera: raspunderea ta fata de altii</li>
      <li>Obligatorie: da, prin Legea 414/2006</li>
      <li>Valabila pe: teritoriul Moldovei</li>
      <li>Propria masina: NU este acoperita</li>
    </ul>
  </div>
  <div class="border-2 border-primary rounded-lg p-5">
    <h4 class="font-bold text-primary mt-0 mb-3">CASCO - Facultativa</h4>
    <ul class="text-sm space-y-1 list-none pl-0">
      <li>Protejeaza: <strong>propriul tau vehicul</strong></li>
      <li>Acopera: accident, furt, incendiu, calamitate</li>
      <li>Obligatorie: nu (dar impusa de leasing)</li>
      <li>Valabila pe: teritoriu conform politei</li>
      <li>Raspunderea fata de terti: NU (asta-i RCA)</li>
    </ul>
  </div>
</div>
<p>Concluzie practica: un sofer vinovat intr-un accident are nevoie de <strong>ambele</strong> - RCA plateste daunele produse celuilalt sofer, CASCO plateste reparatia propriei masini. Fara CASCO, propria masina o repari din buzunar.</p>

<h2>Sistemul Bonus-Malus - cum iti afecteaza prima RCA in Moldova</h2>
<p>Sistemul Bonus-Malus (B/M) este mecanismul reglementat de CNPF prin care prima RCA creste sau scade in functie de istoricul de daune al soferului. Soferii cu un istoric curat de daune primesc reduceri semnificative. Soferii cu accidente din vina proprie platesc mai mult.</p>
<h3>Clasele Bonus-Malus - impactul real asupra pretului RCA</h3>

<div class="overflow-x-auto -mx-4 sm:mx-0 my-8 not-prose">
<table class="w-full text-sm border-collapse min-w-[500px]">
<thead><tr class="bg-secondary text-white"><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Clasa B/M</th><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Coeficient</th><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Efect asupra primei</th><th class="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">Conditie de acordare</th></tr></thead>
<tbody class="divide-y divide-gray-100">
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-primary align-top">B8</td><td class="px-4 py-3 text-gray-600 align-top">0,50</td><td class="px-4 py-3 text-gray-600 align-top">-50% din prima de baza</td><td class="px-4 py-3 text-gray-600 align-top">8+ ani consecutivi fara daune din vina proprie</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-green-700 align-top">B4</td><td class="px-4 py-3 text-gray-600 align-top">0,75</td><td class="px-4 py-3 text-gray-600 align-top">-25% din prima de baza</td><td class="px-4 py-3 text-gray-600 align-top">4 ani consecutivi fara daune</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-secondary align-top">B0</td><td class="px-4 py-3 text-gray-600 align-top">1,00</td><td class="px-4 py-3 text-gray-600 align-top">Prima de baza (referinta)</td><td class="px-4 py-3 text-gray-600 align-top">Sofer la prima polita RCA</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-orange-600 align-top">M2</td><td class="px-4 py-3 text-gray-600 align-top">1,50</td><td class="px-4 py-3 text-gray-600 align-top">+50% din prima de baza</td><td class="px-4 py-3 text-gray-600 align-top">2 daune din vina proprie</td></tr>
<tr class="hover:bg-gray-50"><td class="px-4 py-3 font-semibold text-red-600 align-top">M4</td><td class="px-4 py-3 text-gray-600 align-top">2,45</td><td class="px-4 py-3 text-gray-600 align-top">+145% din prima de baza</td><td class="px-4 py-3 text-gray-600 align-top">Sofer cu daune repetate</td></tr>
</tbody>
</table>
</div>
<p>Clasa B/M se transfera intre asiguratori - daca schimbi compania de asigurari, iti pastrezi clasa obtinuta. Informatia este gestionata centralizat de CNPF prin baza de date nationala a asiguratorilor autorizati din Republica Moldova.</p>

<h2>Carta Verde - extensia internationala a RCA-ului moldovenesc</h2>
<p>Carta Verde (International Motor Insurance Certificate - Green Card) este documentul care confirma existenta unei asigurari de raspundere civila auto valabile in strainatate. Este obligatorie pentru orice vehicul inmatriculat in Moldova care traverseaza frontiera spre tarile membre ale Sistemului International Carte Verde.</p>
<div class="bg-primary/5 border-l-4 border-primary p-6 my-8">
<strong>Diferenta esentiala: RCA Moldova vs Carta Verde</strong><br/><br/>
<strong>RCA Moldova</strong> - valabila exclusiv pe teritoriul Republicii Moldova<br/>
<strong>Carta Verde</strong> - valabila in 47 tari membre: Romania, Ucraina, toate tarile UE, Turcia, Serbia, Maroc si altele<br/><br/>
Un sofer moldovean care merge in Romania, Germania, Turcia sau Ucraina are nevoie de Carta Verde valida. Fara ea: amenda la frontiera si obligatia de a cumpara o asigurare de frontiera locala, la pret dezavantajos.
</div>

<h2>Factorii care influenteaza pretul RCA in Moldova</h2>
<p>Prima de asigurare RCA in Moldova se calculeaza pe baza unui tarif reglementat de CNPF si a mai multor factori specifici fiecarui vehicul si sofer. Nu exista un pret unic fix - fiecare polita este calculata individual, iar ofertele pot diferi semnificativ intre asiguratori.</p>
<ul>
<li><strong>Categoria vehiculului:</strong> autoturism, microbuz, camion, motocicleta, remorca - categorii cu tarife distincte</li>
<li><strong>Cilindreea motorului:</strong> vehiculele cu motoare mai mari platesc prime mai ridicate</li>
<li><strong>Vechimea vehiculului:</strong> vehiculele mai vechi pot atrage prime diferite in functie de asigurator</li>
<li><strong>Zona de inmatriculare:</strong> Chisinau are densitate mai mare de trafic si risc mai ridicat fata de zonele rurale</li>
<li><strong>Varsta si experienta soferului principal:</strong> soferii tineri (sub 25 ani) platesc prime majorate</li>
<li><strong>Clasa Bonus-Malus:</strong> cel mai important factor - de la -50% (B8) la +145% (M4)</li>
<li><strong>Durata politei:</strong> 1 luna, 3 luni, 6 luni sau 12 luni - polita anuala ofera cel mai bun raport cost/acoperire</li>
<li><strong>Asiguratorul ales:</strong> tariful de baza si conditiile speciale difera intre companiile autorizate CNPF</li>
</ul>

<div class="not-prose my-8 bg-secondary text-white rounded-xl p-6">
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <p class="font-bold text-white text-lg mb-1">Vrei sa stii exact cat costa RCA pentru vehiculul sau flota ta?</p>
      <p class="text-gray-400 text-sm">ING Broker compara ofertele de la toti asiguratorii autorizati CNPF - calcul gratuit in 24 ore lucratoare</p>
    </div>
    <a href="tel:+37369526003" class="flex-shrink-0 bg-primary text-white font-bold px-6 py-3 rounded-lg text-sm text-center whitespace-nowrap">Suna: +(373) 69 526 003</a>
  </div>
</div>

<h2>RCA pentru flote - avantajele companiilor cu mai multe vehicule</h2>
<p>Companiile din Moldova cu flote de vehicule pot beneficia de conditii speciale la asigurarea RCA si Carta Verde prin gestionarea centralizata a unui program de flota. ING Broker negociaza direct cu asiguratorii autorizati CNPF conditii de tarif adaptate nevoilor corporative.</p>
<h3>Avantajele unui program de flota prin ING Broker</h3>
<ul>
<li><strong>O singura data de reinnoire</strong> pentru toata flota - nu mai urmaresti individual fiecare vehicul</li>
<li><strong>Conditii de pret mai bune</strong> - o flota este un client mai valoros pentru asigurator</li>
<li><strong>Raportare centralizata</strong> - stii in orice moment care vehicule au polita activa si care expira</li>
<li><strong>Alerte automate la expirare</strong> - elimini riscul de vehicule neasigurate in circulatie</li>
<li><strong>Un singur contact pentru daune</strong> - simplifica gestionarea incidentelor pentru departamentul auto</li>
<li><strong>Pachet complet:</strong> RCA + Carte Verde + CASCO + CMR (pentru transportatori) intr-un program unitar</li>
</ul>

<div class="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
<strong>Cele mai frecvente greseli cu RCA identificate de ING Broker Moldova:</strong><br/><br/>
1. <strong>Polita expirata neobservata</strong> - vehicule care circula zile intregi fara acoperire dupa data expirarii.<br/>
2. <strong>Cumpararea celei mai ieftine polite fara a verifica asiguratorul</strong> - nu toti asiguratorii au aceeasi capacitate de plata la daune.<br/>
3. <strong>Confundarea RCA cu CASCO</strong> - soferul crede ca RCA ii acopera si propria masina avariata.<br/>
4. <strong>Plecarea in strainatate fara Carta Verde</strong> - amenzi la frontiera si polite locale la preturi dezavantajoase.<br/>
5. <strong>Neraportarea clasei B/M corecte</strong> - poate duce la anularea politei sau refuzul despagubirii la dauna.<br/>
6. <strong>Flota gestionata vehicul cu vehicul</strong> - costuri mai mari si risc de expirare neobservata.
</div>

<h2>Cum obtineti RCA la cel mai bun pret - 3 pasi simpli cu ING Broker</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
  <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
    <div class="text-4xl font-bold text-primary mb-3">01</div>
    <p class="font-bold text-secondary text-base mb-2">Consultatie gratuita</p>
    <p class="text-sm text-gray-500 leading-relaxed">Ne spuneti datele vehiculului si clasa B/M curenta. Analizam situatia fara documente la prima discutie si fara niciun angajament.</p>
    <p class="text-xs text-primary font-semibold mt-3">~15 minute</p>
  </div>
  <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
    <div class="text-4xl font-bold text-primary mb-3">02</div>
    <p class="font-bold text-secondary text-base mb-2">Comparatie de oferte</p>
    <p class="text-sm text-gray-500 leading-relaxed">Solicitam oferte de la mai multi asiguratori autorizati CNPF si va prezentam comparatia completa - pret, conditii, asigurator, limite.</p>
    <p class="text-xs text-primary font-semibold mt-3">24 ore lucratoare</p>
  </div>
  <div class="text-center p-6 bg-white shadow-sm rounded-xl border-t-4 border-primary">
    <div class="text-4xl font-bold text-primary mb-3">03</div>
    <p class="font-bold text-secondary text-base mb-2">Polita emisa rapid</p>
    <p class="text-sm text-gray-500 leading-relaxed">Dupa alegerea ofertei, emitem polita RCA in aceeasi zi. La orice dauna, ING Broker va asista in relatia cu asiguratorul pana la incasarea despagubirii.</p>
    <p class="text-xs text-primary font-semibold mt-3">suport 0-365 zile/an</p>
  </div>
</div>

<div class="not-prose flex flex-wrap items-center gap-3 my-8 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
  <span class="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    Broker autorizat CNPF Moldova
  </span>
  <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    Toti asiguratorii autorizati CNPF
  </span>
  <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    Romana - Rusa - Engleza
  </span>
  <span class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full px-4 py-2">
    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    Comisionul platit de asigurator, nu de tine
  </span>
</div>

<h2>Intrebari frecvente - Asigurare RCA Moldova 2026</h2>

<div class="not-prose border-t border-gray-100 mt-4">

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Ce este RCA si este obligatorie in Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Da, RCA (Raspundere Civila Auto) este obligatorie prin Legea nr. 414-XVI din 22.12.2006. Orice vehicul inmatriculat in Moldova care circula pe drumurile publice trebuie sa aiba o polita RCA valida. RCA acopera prejudiciile produse altor persoane - vatamari corporale si daune materiale - in urma unui accident rutier in care esti vinovat. Fara RCA valida: amenda 1.000-3.000 MDL, retinerea permisului si raspundere civila integrala pentru toate daunele produse.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cat costa asigurarea RCA in Moldova in 2026?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Pretul RCA variaza in functie de: categoria si cilindreea vehiculului, clasa Bonus-Malus, varsta soferului, zona de inmatriculare si asiguratorul ales. Orientativ, pentru un autoturism de 1.600 cmc in clasa B0, o polita anuala poate fi intre 1.200-2.500 MDL, iar in clasa B8 (8 ani fara daune) prima se poate reduce cu pana la 50%. ING Broker compara ofertele de la toti asiguratorii autorizati CNPF si identifica cel mai bun raport pret-calitate pentru profilul tau specific.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Care este diferenta dintre RCA si CASCO?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">RCA este obligatorie si acopera prejudiciile produse altor persoane (daune la vehicule terte, vatamare corporala a victimelor). Propriul vehicul NU este acoperit de propria ta polita RCA. CASCO este facultativa si acopera daunele propriului vehicul: accidente, furt, incendiu, calamitati naturale, vandalism. Daca esti vinovat intr-un accident, propria masina o repari din CASCO - daca il ai - sau din buzunar. CASCO este recomandat mai ales pentru vehicule noi, in leasing sau cu valoare ridicata.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cum functioneaza sistemul Bonus-Malus in Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Sistemul Bonus-Malus recompenseaza soferii fara daune cu reduceri progresive la prima RCA si penalizeaza pe cei cu accidente din vina proprie cu majorari. Clasa de inceput este B0. Fiecare an fara daune din vina proprie avanseaza cu o clasa Bonus (B1-B8), cu reduceri pana la 50% in B8. Fiecare dauna din vina proprie retrage cu 2-3 clase. Clasa B/M se transfera intre asiguratori si este gestionata centralizat de CNPF.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Ce este Carta Verde si cand am nevoie de ea?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Carta Verde este extensia internationala a RCA-ului moldovenesc, obligatorie pentru orice vehicul care paraseste Moldova spre cele 47 tari membre ale Sistemului Green Card (Romania, Ucraina, toate tarile UE, Turcia si altele). RCA Moldova este valabila exclusiv pe teritoriul Republicii Moldova. Fara Carta Verde valida la frontiera: amenda si obligatia de a cumpara o asigurare de frontiera locala la pret dezavantajos. ING Broker emite Carta Verde impreuna cu RCA sau separat.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Ce se intampla la un accident daca nu am RCA valida in Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Daca esti vinovat intr-un accident fara RCA valida: (1) Victima este despagubita de Fondul de Garantare al Asiguratorilor din Moldova; (2) Fondul recupereaza integral suma platita prin actiune in regres impotriva ta; (3) Platesti amenda contraventionala 1.000-3.000 MDL; (4) Suporti integral costul reparatiei propriei masini (fara ajutor de la niciun asigurator); (5) La vatamare corporala grava: risc de dosar penal. Totalul obligatiilor financiare poate depasi cu usurinta 50.000-100.000 MDL si chiar mai mult la accidente grave.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cum procedez dupa un accident rutier cu RCA in Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">(1) Suni la politie (902) si ambulanta (903) daca sunt victime; (2) Documentezi locul accidentului cu fotografii detaliate din toate unghiurile; (3) Colectezi datele celuilalt sofer - permis, buletin, polita RCA, numar de inmatriculare; (4) Obtii procesul verbal al politiei sau completezi Constatarea Amiabila de Accident; (5) Notifici asiguratorul vinovatului si ING Broker in maximum 24-48 ore de la accident; (6) Nu repari vehiculul inainte de evaluarea asiguratorului. ING Broker te asista la fiecare pas pana la incasarea despagubirii corecte.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Cat timp este valabila o polita RCA in Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">O polita RCA in Moldova poate fi emisa pe perioade de 1 luna, 2 luni, 3 luni, 6 luni sau 12 luni. Polita anuala (12 luni) ofera cel mai bun raport cost-acoperire. Polita pe perioade mai scurte este utila pentru vehicule de uz sezonier sau ocazional. Dupa expirare nu exista nicio perioada de gratie - vehiculul nu mai are acoperire din prima secunda dupa data expirarii. ING Broker configureaza alerte de reinnoire pentru a elimina riscul expirarii neobservate.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Pot vinde masina cu polita RCA activa - ce se intampla?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">La vanzarea vehiculului, polita RCA nu se transfera automat noului proprietar. Noul proprietar trebuie sa isi incheie propria polita RCA inainte de a circula cu vehiculul. Vechea polita poate fi reziliata la cerere, cu rambursarea primei neconsumate pentru perioada ramasa (minus taxe administrative). ING Broker gestioneaza atat rezilierea politei vechi cat si emiterea celei noi, simplificand procesul de tranzactionare.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">RCA pentru masina cu numere straine care circula in Moldova?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Vehiculele inmatriculate in tari straine care intra in Moldova sunt acoperite de polita RCA sau Carta Verde emisa in tara de inmatriculare, in cadrul Sistemului International Carte Verde. Daca vehiculul strain nu are Carta Verde valabila, la frontiera i se solicita incheierea unei Asigurari de Frontiera, emisa de asiguratori moldovenesti autorizati CNPF. ING Broker poate emite Asigurarea de Frontiera pentru vehicule straine care circula pe teritoriul Moldovei.</div>
</details>
</div>

<div class="border-b border-gray-100 py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">Pot cumpara RCA si Carta Verde pentru flota companiei mele dintr-o singura cerere?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Da. ING Broker structureaza programe centralizate pentru flote de orice dimensiune: RCA, Carte Verde, CASCO si CMR (pentru transportatori) intr-un singur program coordonat, cu o singura data de reinnoire anuala. Avantaje: tarife mai bune negociate cu asiguratorii, administrare simplificata, raportare centralizata a tuturor politelor si eliminarea riscului de vehicule neasigurate. Contactati ING Broker pentru un audit gratuit al flotei voastre.</div>
</details>
</div>

<div class="py-1">
<details class="group">
  <summary class="flex justify-between items-center cursor-pointer list-none py-6 text-left gap-4">
    <span class="font-bold tracking-tight text-secondary group-open:text-primary transition-colors pr-4">De ce sa aleg ING Broker pentru RCA si nu direct o companie de asigurari?</span>
    <div class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-open:bg-primary group-open:border-primary flex items-center justify-center text-gray-400 group-open:text-white transition-all">
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </summary>
  <div class="pb-7 text-gray-500 leading-relaxed font-light max-w-3xl">Un broker autorizat CNPF lucreaza in interesul tau, nu al asiguratorului. Avantaje concrete: acces la ofertele tuturor asiguratorilor de pe piata moldoveneasca dintr-o singura solicitare, comparatie obiectiva pret-conditii-asigurator, asistenta dedicata la daune cu un singur punct de contact, si - pentru flote - negocierea conditiilor speciale imposibil de obtinut ca persoana individuala. Comisionul brokerului este platit de asigurator - serviciul este complet gratuit pentru tine.</div>
</details>
</div>

</div>

<div class="bg-secondary text-white p-8 rounded-xl text-center mt-10 not-prose">
  <h2 class="text-white text-2xl font-bold mt-0 mb-2">Obtineti oferta RCA comparativa pentru vehiculul sau flota voastra</h2>
  <p class="text-gray-400 text-sm mb-6">Insurance ING Broker SRL, Chisinau - RCA, Carta Verde, CASCO si asigurari auto pentru persoane fizice si companii din Moldova. Autorizat CNPF. Raspuns in 24 ore lucratoare.</p>
  <div class="flex flex-col sm:flex-row justify-center gap-4 mb-6">
    <a href="tel:+37369526003" class="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg text-base">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      +(373) 69 526 003
    </a>
    <a href="mailto:andrei.moraru@ingbroker.md" class="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors">
      andrei.moraru@ingbroker.md
    </a>
  </div>
  <div class="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
    <span>Raspuns garantat in 24h lucratoare</span>
    <span>Fara angajamente la prima discutie</span>
    <span>Consultanta gratuita</span>
  </div>
</div>

</div>`,
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1920',
      date: '21 Mai 2026',
      author: 'Andrei Moraru',
      tags: ['RCA', 'Auto', 'Moldova', 'Carta Verde', 'Bonus-Malus', 'Chisinau'],
      seo: {
        title: 'Asigurare RCA Moldova 2026 - Ghid Complet Pret si Acoperire | ING Broker',
        description: 'Tot ce trebuie sa stii despre RCA in Moldova: ce acopera, cat costa in 2026, sistemul Bonus-Malus, Carta Verde si ce se intampla fara polita valida. Broker autorizat CNPF Chisinau.',
        keywords: 'asigurare RCA Moldova 2026, pret RCA Moldova, RCA obligatorie Moldova, cat costa RCA Moldova 2026, RCA Chisinau, Carta Verde Moldova, sistem bonus malus Moldova, broker asigurare auto Moldova, RCA ieftina Moldova, asigurare auto obligatorie Moldova, RCA flota Moldova, RCA companie Moldova, asigurare auto Chisinau 2026, RCA online Moldova, ING Broker RCA, reinnoire RCA Moldova, RCA sofer nou Moldova, dauna RCA Moldova, CASCO vs RCA Moldova, asigurare frontiera Moldova, RCA pentru TIR Moldova, polita RCA Moldova, calculator RCA Moldova, asigurare auto obligatorie Chisinau'
      }
    },
    {
      id: 'flote-auto-corporate-moldova',
      slug: 'asigurare-flote-auto-corporate-moldova',
      title: 'Asigurare flote auto corporate in Moldova: RCA, Carte Verde, CASCO, CMR, Cargo',
      excerpt: 'Gestionezi o flota de vehicule? ING Broker ofera solutii complete pentru asigurarea flotelor auto corporate in Moldova - RCA, Carte Verde, CASCO, CMR si Cargo - dintr-o singura sursa, cu oferta personalizata si suport dedicat.',
      image: '/fleet-auto-corporate-hero.jpg',
      date: '15 Iun 2026',
      author: 'ING Broker',
      tags: ['Flote Auto', 'Corporate', 'RCA', 'CASCO', 'CMR', 'Cargo'],
      seo: {
        title: 'Asigurare Flote Auto Corporate Moldova | RCA, Carte Verde, CASCO, CMR | ING Broker',
        description: 'ING Broker ofera solutii pentru asigurarea flotelor auto corporate in Moldova: RCA, Carte Verde, CASCO, CMR, Cargo. Oferta personalizata, un singur contract, manager dedicat.',
        keywords: ['asigurare flote auto Moldova', 'RCA flota corporate', 'Carte Verde flota', 'CASCO flota Moldova', 'asigurare CMR Moldova', 'asigurare Cargo Moldova', 'cat costa carte verde camion Moldova', 'ING Broker flote']
      },
      content: `<div class="prose prose-lg max-w-none"><h2>De ce asigurarea flotei e diferita fata de o polita individuala</h2><p>O flota de 5, 20 sau 100 de vehicule nu e pur si simplu mai multe masini. E un risc concentrat, un buget anual predictibil si un parteneriat care trebuie sa functioneze cand conteaza.</p><p>Companiile care gestioneaza flote auto in Moldova se confrunta cu aceeasi problema: politele individuale emise la intamplare de diversi asiguratori, date de expirare diferite, fransize diferite, proceduri diferite de daune. Haos administrativ care costa timp si bani.</p><p><strong>ING Broker consolideaza asigurarea intregii flote</strong> - un singur interlocutor, un singur contract-cadru, termeni uniformi, reinnoire sincronizata.</p><h2>Tipuri de asigurari pentru flote auto corporate in Moldova</h2><h3>1. RCA - Asigurarea obligatorie de raspundere civila auto</h3><p>RCA este obligatorie prin lege pentru toate vehiculele inmatriculate in Republica Moldova. Calculeaza pretul RCA pentru vehiculele flotei: <a href="https://easigurari.com/ro/rca" target="_blank" rel="noopener">calculator RCA easigurari.com</a></p><ul><li>Tarif negociat per vehicul (mai mic decat RCA individual)</li><li>Date de expirare sincronizate pentru toata flota</li><li>Administrare centralizata - un singur document de referinta</li><li>Suport prioritar la daune pentru partenerii corporate</li></ul><h3>2. Carte Verde - Asigurarea internationala pentru flotele cu deplasari externe</h3><p>Daca vehiculele flotei traverseaza granita - fie ca e vorba de soferi de livrare, agenti comerciali sau manageri - Carta Verde este obligatorie in peste 48 de tari membre ale sistemului international, inclusiv toate statele UE, Romania, Ucraina, Georgia, Turcia.</p><p>Calculeaza pretul exact: <a href="https://easigurari.com/ro/green-card" target="_blank" rel="noopener">calculator Carte Verde easigurari.com</a></p><h3>3. CASCO - Protectia vehiculelor flotei</h3><p>CASCO este asigurarea facultativa care protejeaza vehiculele flotei tale - nu tertii, ci masinile propriu-zise. Acopera: accidente rutiere (inclusiv vina propriului sofer), furt, calamitati naturale (grindina, inundatii), vandalism, incendiu si daune in parcari.</p><p>Pentru flote, CASCO se poate structura cu <strong>fransiza colectiva</strong> - reducere semnificativa a primei totale.</p><h3>4. CMR - Asigurarea raspunderii transportatorului de marfa international</h3><p>Daca flota ta transporta marfa pentru terti in trafic international, CMR este obligatorie prin conventie internationala. Acopera raspunderea legala a transportatorului pentru pierderea, deteriorarea marfii sau intarzieri. O singura dauna CMR poate depasi 200.000 EUR.</p><h3>5. Cargo - Asigurarea marfii transportate</h3><p>CMR protejeaza transportatorul. Cargo protejeaza marfa. Pentru companiile care transporta propriile produse, Cargo acopera daune fizice, furt, pierdere totala si daune la incarcare/descarcare. Se emite per-calatorie sau anual (open policy).</p><h3>6. Asigurarea raspunderii fata de calatori</h3><p>Pentru flotele care transporta persoane, aceasta asigurare acopera prejudiciile corporale produse pasagerilor in accidente - complement necesar la RCA.</p><h2>Preturi orientative Carte Verde 2026 - asiguratori autorizati Moldova</h2><p>Preturi actuale pentru Carte Verde, <strong>Zona 3 (toate tarile sistemului Carte Verde)</strong> - optiunea standard pentru flote cu deplasari internationale.</p><h3>Autoturisme (categoria A) - Carte Verde 15 zile, Zona 3</h3><table><thead><tr><th>Asigurator</th><th>Prima (MDL)</th></tr></thead><tbody><tr><td>Asterra Grup S.A.</td><td><strong>703,20 MDL</strong></td></tr><tr><td>Grawe Carat Asigurari S.A.</td><td><strong>703,20 MDL</strong></td></tr><tr><td>Moldasig S.A.</td><td><strong>703,20 MDL</strong></td></tr><tr><td>Intact Asigurari Generale S.A.</td><td>703,20 MDL</td></tr><tr><td>General Asigurari S.A.</td><td>711,65 MDL</td></tr><tr><td>Acord Grup S.A.</td><td>714,87 MDL</td></tr><tr><td>Donaris Vienna Insurance Group S.A.</td><td>746,47 MDL</td></tr><tr><td>Moldcargo S.A.</td><td>1 343,40 MDL</td></tr></tbody></table><h3>Camioane si tractoare > 3,5 tone (categoria C2) - Carte Verde 12 luni, Zona 3</h3><table><thead><tr><th>Asigurator</th><th>Prima anuala (MDL)</th></tr></thead><tbody><tr><td>Intact Asigurari Generale S.A.</td><td><strong>10 887,31 MDL</strong></td></tr><tr><td>Asterra Grup S.A.</td><td><strong>12 353,28 MDL</strong></td></tr><tr><td>General Asigurari S.A.</td><td>13 165,56 MDL</td></tr><tr><td>Grawe Carat Asigurari S.A.</td><td>13 258,94 MDL</td></tr><tr><td>Acord Grup S.A.</td><td>13 403,85 MDL</td></tr><tr><td>Moldasig S.A.</td><td>15 032,64 MDL</td></tr><tr><td>Moldcargo S.A.</td><td>15 449,04 MDL</td></tr><tr><td>Donaris Vienna Insurance Group S.A.</td><td>17 580,38 MDL</td></tr></tbody></table><p><em>Preturi extrase din calculatorul oficial easigurari.com, iunie 2026. Pretul final depinde de categoria vehiculului, perioada asigurata si istoricul de daune.</em></p><div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1.5rem 0;"><a href="https://easigurari.com/ro/green-card" target="_blank" rel="noopener" style="display:inline-block;padding:0.75rem 1.5rem;background:#E31E24;color:#fff;font-weight:600;text-decoration:none;">Calculeaza Carte Verde online</a><a href="https://easigurari.com/ro/rca" target="_blank" rel="noopener" style="display:inline-block;padding:0.75rem 1.5rem;border:1px solid #141414;color:#141414;font-weight:600;text-decoration:none;">Calculeaza RCA online</a></div><h3>Cat costa Carte Verde pentru o flota de 10 camioane?</h3><table><thead><tr><th>Vehicule</th><th>Tip polita</th><th>Cost / vehicul</th><th>Total flota</th></tr></thead><tbody><tr><td>10 camioane > 3,5t</td><td>Carte Verde 12 luni</td><td>~10 887 MDL</td><td><strong>~108 870 MDL</strong></td></tr><tr><td>5 autoturisme</td><td>Carte Verde 12 luni</td><td>~2 800 MDL</td><td>~14 000 MDL</td></tr><tr><td colspan="3"><strong>Total estimat Carte Verde flota</strong></td><td><strong>~122 870 MDL</strong></td></tr></tbody></table><p>Prin contract de flota negociat, economiile pot ajunge la <strong>15-20%</strong> fata de polite individuale - adica ~18 000 - 24 000 MDL economisite anual.</p><h2>Avantajele unui contract de flota</h2><table><thead><tr><th>Criteriu</th><th>Polite individuale</th><th>Contract de flota ING Broker</th></tr></thead><tbody><tr><td>Tarif per vehicul</td><td>Standard (tarif retail)</td><td>Negociat (reducere 10-25%)</td></tr><tr><td>Administrare</td><td>Fiecare vehicul separat</td><td>Un singur contract-cadru</td></tr><tr><td>Expirare polite</td><td>Date diferite, risc de omisiuni</td><td>Sincronizat, notificari automate</td></tr><tr><td>Adaugare vehicule noi</td><td>Proces separat, intarzieri</td><td>Rider la contract, emitere in 24h</td></tr><tr><td>Suport la daune</td><td>Standard</td><td>Manager dedicat, prioritate</td></tr><tr><td>Raportare</td><td>Nu exista</td><td>Dashboard daune + costuri anuale</td></tr></tbody></table><h2>Sectoare care beneficiaza cel mai mult</h2><ul><li><strong>Logistica si transport marfa</strong> - camioane, furgonete, TIR-uri. Combinatie recomandata: RCA + Carte Verde + CMR + Cargo.</li><li><strong>Constructii si utilaje</strong> - vehicule de teren, utilaje grele, masini de santier.</li><li><strong>Distributie si retail</strong> - furgonete si autoturisme pentru agenti comerciali.</li><li><strong>Agricultura</strong> - tractoare, combine, vehicule agricole.</li><li><strong>Companii IT si servicii</strong> - flote de autoturisme pentru angajati si management.</li><li><strong>Institutii financiare</strong> - vehicule blindate cu clauze speciale pentru transport valori.</li></ul><h2>Procesul de asigurare a flotei la ING Broker</h2><ol><li><strong>Audit flota (gratuit)</strong> - analizam lista vehiculelor, rutele, istoricul de daune.</li><li><strong>Oferta personalizata (24h)</strong> - comparam oferte de la toti asiguratorii autorizati CNPF.</li><li><strong>Negociere conditii</strong> - fransize, limite, clauze suplimentare, modalitate de plata.</li><li><strong>Emitere polite</strong> - toate documentele emise electronic.</li><li><strong>Suport continuu</strong> - manager dedicat pentru daune, modificari de flota, reinnoire anuala.</li></ol><h2>Intrebari frecvente</h2><h3>Cate vehicule minim are o flota pentru contract special?</h3><p>La ING Broker, oferim conditii de flota de la 3 vehicule in sus.</p><h3>Pot asigura vehicule din mai multe categorii?</h3><p>Da. Un contract de flota poate include vehicule din categorii diferite cu polite adaptate fiecarei categorii.</p><h3>Ce se intampla cand adaug un vehicul nou?</h3><p>Vehiculul nou se adauga prin rider la contractul existent. Emiterea politei dureaza maxim 24 de ore lucratore.</p><h3>Cat dureaza sa obtin o oferta pentru flota mea?</h3><p>Analiza flotei si emiterea ofertei dureaza maximum 24 de ore lucratore de la transmiterea datelor vehiculelor.</p><h3>Ce documente sunt necesare?</h3><p>Lista vehiculelor (numar inmatriculare, an fabricatie, marca/model, tip utilizare), istoricul de daune ultimii 2-3 ani, datele companiei.</p><p style="margin-top:2rem;padding:1.5rem;background:#0B0F1A;color:#fff;border-left:4px solid #E31E24;"><strong>ING Broker - str. Pan Halippa 9, mun. Chisinau, MD-2009</strong><br/>Tel: <a href="tel:+37369526003" style="color:#E31E24;">+(373) 69 526 003</a><br/>Email: <a href="mailto:andrei.moraru@ingbroker.md" style="color:#E31E24;">andrei.moraru@ingbroker.md</a></p></div>`
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
