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
}h

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
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920',
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
      slug: 'cum-se-determină-prețul-unei-asigurări-rca-ghid-pentru-un-preț-rca-accesibil',
      title: 'Cum se determină prețul unei asigurări RCA? Ghid pentru un preț RCA accesibil',
      excerpt: 'Descoperă factorii care influențează costul poliței tale RCA și cum poți obține cel mai bun preț.',
      content: `
        <h2>Factorii care influențează prețul RCA</h2>
        <p>Prețul poliței RCA nu este fix și depinde de numeroși factori, de la istoricul șoferului până la caracteristicile tehnice ale mașinii.</p>
        <h2>Sistemul Bonus-Malus</h2>
        <p>Acesta este unul dintre cei mai importanți factori. Dacă nu ai provocat accidente, vei primi o reducere (Bonus). În caz contrar, prețul va crește (Malus).</p>
      `,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
      date: '10 Mar 2026',
      author: 'Andrei Moraru',
      tags: ['Auto', 'RCA', 'Ghid'],
      seo: {
        title: 'Cum se calculeaza pretul RCA in Moldova | ING Broker',
        description: 'Află factorii care determină prețul RCA și cum poți obține o asigurare mai ieftină.',
        keywords: 'calcul rca moldova, pret rca, bonus malus moldova'
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
