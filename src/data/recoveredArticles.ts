/** Original editorial revisions. See docs/content-recovery-2026-10-15.md for mandatory approval gates. */
export interface ArticleRevision {
  title: string;
  updatedAt?: string;
  description: string;
  body: string;
  related: [string, string];
  sources: Array<[string, string]>;
}

const bnm = ['BNM: ce verifici într-un contract de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'] as [string, string];
const property = ['MOLDASIG: bunuri, utilaje și întreruperea producției — exemplu de produs din Moldova', 'https://moldasig.md/property-insurance-for-legal-persons'] as [string, string];
const life = ['GRAWE Moldova: prezentarea categoriilor de asigurări de viață', 'https://www.grawe.md/asigurare-viata/'] as [string, string];
const construction = ['Marsh România: riscuri în construcții — referință internațională, nu ofertă pentru Moldova', 'https://www.marsh.com/ro-ro/industries/construction.html'] as [string, string];

export const articleRevisions: Record<string, ArticleRevision> = {
  'asigurare-raspundere-directori': {
    title: 'Asigurarea D&O: ce verifică directorii și administratorii',
    description: 'Ghid D&O pentru companii din Moldova: persoane asigurate, notificarea pretențiilor, costuri de apărare și documente pentru analiza riscului.',
    related: ['asigurare-raspundere-civila-angajator', 'Răspunderea angajatorului: o analiză separată'],
    sources: [bnm, ['Allianz-Țiriac: IPID D&O, versiunea 01.10.2018 — exemplu românesc cu eligibilitate teritorială limitată', 'https://www.allianztiriac.ro/content/dam/onemarketing/cee/azro/documente/ipid/IPID_Raspundere_civila_a_managerilor_ALLIANZ_PROTECT.pdf']],
    body: `<p>Asigurarea D&O privește răspunderea persoanelor care conduc o companie, în limitele contractului. Nu trebuie confundată cu asigurarea bunurilor firmei sau cu răspunderea profesională pentru serviciile prestate clienților. Pentru o companie din Moldova, prima întrebare este dacă există o soluție eligibilă pentru entitatea, conducătorii și jurisdicțiile sale.</p>
<h2>Ce trebuie clarificat înainte de a compara prețuri</h2>
<p>O ofertă intitulată „D&O” nu spune singură cine este protejat. Cere identificarea funcțiilor asigurate, a societăților din grup și a situațiilor în care compania însăși este inclusă. Documentul românesc citat mai jos ilustrează tocmai această delimitare; nu dovedește disponibilitatea aceluiași produs în Moldova.</p>
<ul><li>Ce persoane și mandate sunt incluse, inclusiv foști directori sau funcții în filiale?</li><li>Ce dată și ce notificare declanșează analiza unei pretenții?</li><li>Costurile de apărare consumă limita totală? Cine aprobă avocatul și cheltuielile?</li><li>Cum sunt tratate faptele cunoscute, investigațiile și schimbarea controlului societății?</li><li>Ce teritorii și instanțe sunt acceptate?</li></ul>
<h2>Dosarul util pentru o primă discuție</h2>
<p>Pregătește structura grupului, domeniul de activitate, țările în care lucrează compania, situațiile financiare și descrierea funcțiilor de conducere. Existența unor litigii sau circumstanțe cunoscute trebuie discutată printr-un canal confidențial; nu transmite documente juridice sensibile într-un formular public.</p>
<h2>Întrebări frecvente despre D&O</h2>
<h3>O poliță nouă rezolvă un litigiu deja cunoscut?</h3><p>Nu presupune acest lucru. Solicită o analiză scrisă a cronologiei și a condițiilor aplicabile; simpla cumpărare a poliței nu confirmă acceptarea unui caz existent.</p>
<h3>D&O înlocuiește consultanța juridică?</h3><p>Nu. Evaluarea obligațiilor directorului și strategia unui litigiu țin de consilierea juridică. Polița trebuie analizată separat pentru costurile și pretențiile prevăzute contractual.</p>
<h3>Ce cer concret brokerului?</h3><p>O verificare a eligibilității și o comparație pe aceleași funcții, teritorii, limite și perioade, cu punctele neconfirmate marcate explicit. Nu doar un preț și numele produsului.</p>`
  },
  'asigurare-pierdere-profit': {
    title: 'Întreruperea activității: cum analizezi pierderea profitului',
    description: 'Ce verifică o companie din Moldova pentru întreruperea activității: legătura cu dauna materială, perioada de revenire și datele financiare.',
    related: ['asigurare-sisteme-irigatii', 'Exemplu de dependență operațională: sistemele de irigații'],
    sources: [property, bnm],
    body: `<p>Asigurarea pentru întreruperea activității urmărește consecințele financiare ale unei opriri definite în poliță. Nu este o garanție a cifrei de afaceri. În exemplul public MOLDASIG, protecția este prezentată ca supliment la asigurarea bunurilor și este legată de evenimente asigurate care opresc producția.</p>
<h2>Separă reparația bunului de reluarea afacerii</h2>
<p>Un utilaj reparat nu înseamnă automat producție reluată la nivelul anterior. Pentru analiza propriei companii, construiește o cronologie: constatare, comandă de piese, livrare, montaj, testare și refacerea comenzilor. Aceasta este o metodă de pregătire a discuției, nu o estimare a despăgubirii.</p>
<ul><li>Identifică procesul fără alternativă și furnizorul de care depinde.</li><li>Separă cheltuielile care continuă de cele care se reduc în timpul opririi.</li><li>Documentează sezonalitatea și comenzile confirmate, fără a trata toate veniturile estimate drept profit.</li><li>Solicită definiția contractuală a bazei de calcul, limita și perioada maximă luată în considerare.</li><li>Întreabă despre franșiza temporală și despre costurile suplimentare de funcționare.</li></ul>
<h2>Ce date pregătești pentru ofertare</h2>
<p>Un dosar de lucru poate include situații financiare, venituri lunare, costuri fixe și variabile, inventarul echipamentelor critice și un plan realist de continuitate. Documentele contabile se transmit numai prin canalul convenit, după clarificarea accesului și confidențialității.</p>
<h2>Întrebări frecvente despre pierderea profitului</h2>
<h3>Scăderea vânzărilor este suficientă pentru despăgubire?</h3><p>Nu poți deduce acoperirea din scăderea încasărilor. Trebuie identificat evenimentul prevăzut în contract și legătura sa cu pierderea solicitată.</p>
<h3>Oprirea unui furnizor este inclusă automat?</h3><p>Nu o considera inclusă. Descrie furnizorul, amplasamentul și dependența, apoi cere confirmarea expresă a oricărei extensii propuse.</p>
<h3>Cum aleg perioada analizată?</h3><p>Pornește de la durata documentată de refacere a operațiunilor, nu doar de la timpul de reparație. Compară apoi această durată cu opțiunile efectiv oferite de asigurător.</p>`
  },
  'asigurare-buna-executie': {
    title: 'Garanția de bună execuție: verificări înainte de contract',
    description: 'Checklist pentru antreprenori din Moldova: cerințele beneficiarului, valoarea, valabilitatea și condițiile unei garanții de bună execuție.',
    related: ['asigurare-drumuri-autostrazi', 'Pregătirea asigurărilor pentru lucrări rutiere'],
    sources: [bnm, ['Marsh România: explicații generale despre garanții — nu confirmă admisibilitatea în Moldova', 'https://www.marsh.com/ro-ro/services/surety.html']],
    body: `<p>O garanție de bună execuție este analizată în raport cu obligațiile dintr-un contract și cerințele beneficiarului. Nu o confunda cu asigurarea daunelor produse pe șantier. Înainte de a cere o ofertă, verifică forma de garanție acceptată, emitentul eligibil și textul solicitat de beneficiar.</p>
<h2>Începe cu documentația beneficiarului</h2>
<p>Pentru o firmă de construcții sau un furnizor de servicii, o garanție ieftină, dar neacceptată contractual, nu rezolvă nevoia. În achiziții publice, admisibilitatea trebuie verificată în documentația concretă și de un specialist în cadrul juridic aplicabil. Un exemplu internațional nu poate înlocui această verificare.</p>
<ol><li>Extrage clauza de garanție din contract și orice model obligatoriu.</li><li>Notează suma, moneda, beneficiarul și obligațiile garantate.</li><li>Separă perioada de execuție de perioada de remediere a defectelor.</li><li>Verifică prelungirea, reducerea și eliberarea garanției.</li><li>Cere explicații despre condițiile unei cereri de plată și eventualele obligații de rambursare către emitent.</li></ol>
<h2>Ce trebuie să poată evalua emitentul</h2>
<p>Pregătește contractul, calendarul lucrării, experiența în proiecte similare, situațiile financiare și angajamentele deja asumate. Solicită în scris lista documentelor și eventualele cerințe de contragaranție. Acestea nu trebuie presupuse inexistente doar pentru că instrumentul este emis de un asigurător.</p>
<h2>Întrebări frecvente despre buna execuție</h2>
<h3>Este același lucru cu o poliță CAR/EAR?</h3><p>Nu trata documentele ca interschimbabile. Cere separarea obligației de a executa contractul de riscurile materiale ale lucrării și de răspunderea față de terți.</p>
<h3>Pot înlocui garanția bancară fără acordul beneficiarului?</h3><p>Nu presupune acceptarea. Verifică documentele contractuale, cerințele legale și confirmarea beneficiarului înainte de emitere.</p>
<h3>Ce fac dacă termenul lucrării se prelungește?</h3><p>Semnalează schimbarea din timp și cere procedura aplicabilă garanției existente. Prelungirea contractului comercial nu dovedește, singură, prelungirea instrumentului de garanție.</p>`
  },
  'asigurare-raspundere-civila-angajator': {
    title: 'Răspunderea angajatorului: ce întrebări pui la asigurare',
    description: 'Pentru angajatori din Moldova: diferențe față de accidente și beneficii medicale, descrierea ocupațiilor și verificarea condițiilor propuse.',
    related: ['asigurare-accidente-angajati', 'Asigurarea de accidente pentru angajați — categorie distinctă'],
    sources: [bnm],
    body: `<p>Analiza răspunderii angajatorului pornește de la activitatea firmei și posibilele pretenții ale angajaților. Nu presupune că o asigurare de accidente sau un beneficiu medical răspunde aceleiași nevoi. Cere o delimitare scrisă între aceste produse și obligațiile care rămân în sarcina angajatorului.</p>
<h2>Descrie munca reală, nu doar domeniul firmei</h2>
<p>O companie poate avea personal de birou, șoferi și echipe de intervenție. Pentru evaluare, pregătește un inventar pe ocupații, locuri de muncă și activități, fără nume sau date medicale în etapa inițială. Menționează lucrul la înălțime, deplasările și participarea subcontractorilor, dacă sunt relevante.</p>
<ul><li>Cine intră în categoria de persoane prevăzută în ofertă?</li><li>Ce tipuri de pretenții sunt analizate și ce condiție trebuie îndeplinită?</li><li>Cum sunt tratate activitățile în afara sediului și în alte țări?</li><li>Ce limite, franșize și proceduri de notificare sunt propuse?</li><li>Ce rol au polițele de accidente, sănătate și răspundere deja existente?</li></ul>
<h2>Construiește un dosar de prevenție și asigurare</h2>
<p>Centralizează evaluările de risc, instruirile și istoricul incidentelor într-un dosar intern. Acesta ajută discuția cu specialiștii, dar nu înlocuiește verificarea obligațiilor legale de securitate a muncii. Pentru un accident sau litigiu concret, solicită asistență juridică și urmează procedurile aplicabile; articolul nu stabilește termene sau răspunderi legale.</p>
<h2>Întrebări frecvente ale angajatorilor</h2>
<h3>Un abonament medical acoperă răspunderea companiei?</h3><p>Nu deduce acest lucru din accesul la servicii medicale. Cere o comparație explicită a obiectului fiecărui contract.</p>
<h3>Trebuie trimiși de la început toți angajații nominal?</h3><p>Începe cu date agregate despre efectiv și ocupații. Datele nominale se transmit numai dacă sunt necesare, printr-un canal convenit și cu respectarea cerințelor de confidențialitate.</p>
<h3>Este obligatorie o anumită poliță pentru firma mea?</h3><p>Obligativitatea nu se deduce din denumirea articolului. Ea trebuie verificată pentru activitatea și jurisdicția concretă, separat de analiza unei soluții facultative.</p>`
  },
  'asigurare-remediere-mediu': {
    title: 'Riscuri de mediu și remediere: dosarul de asigurare',
    description: 'Checklist pentru companii din Moldova cu riscuri de contaminare: amplasamente, istoric, responsabilități și întrebări pentru asigurător.',
    related: ['asigurare-pierdere-profit', 'Legătura cu întreruperea activității'],
    sources: [bnm, ['Marsh România: analiza riscurilor de mediu — context internațional', 'https://www.marsh.com/ro-ro/services/environmental-risk.html']],
    body: `<p>Pentru o companie care depozitează combustibili, folosește substanțe în producție sau operează pe un teren industrial, analiza riscului de mediu începe cu amplasamentul. Întrebarea utilă nu este doar „există asigurare de poluare?”, ci ce situații, cheltuieli și responsabilități pot fi evaluate în cazul concret.</p>
<h2>Separă patru componente ale expunerii</h2>
<p>Construiește o fișă pentru fiecare locație: bunurile proprii, vecinătățile, posibilele lucrări de remediere și impactul asupra operațiunilor. Aceasta este o structură de analiză propusă, nu o listă de acoperiri confirmate. Existența unei polițe generale de răspundere nu demonstrează includerea tuturor acestor componente.</p>
<ul><li>Care sunt activitățile actuale și utilizările istorice cunoscute ale terenului?</li><li>Ce substanțe, rezervoare, conducte și puncte de evacuare există?</li><li>Ce informații documentate sunt disponibile despre contaminare?</li><li>Cine deține terenul și cine are obligații contractuale de intervenție?</li><li>Există un plan de răspuns, persoane responsabile și furnizori de intervenție?</li></ul>
<h2>Întrebări pentru o ofertă comparabilă</h2>
<p>Cere delimitarea dintre situații preexistente și evenimente viitoare, dintre poluare bruscă și graduală, precum și dintre terenul propriu și prejudiciile către terți. Solicită explicit tratamentul costurilor de investigație, curățare și apărare. Nu considera aceste cheltuieli acceptate fără confirmarea condițiilor.</p>
<h2>Întrebări frecvente despre remedierea mediului</h2>
<h3>O poliță nouă plătește curățarea unei contaminări deja identificate?</h3><p>Nu presupune acest lucru. Istoricul cunoscut trebuie prezentat și analizat înainte de orice concluzie privind eligibilitatea.</p>
<h3>Regulile europene se aplică automat unei locații din Moldova?</h3><p>Nu folosi un ghid străin pentru a stabili obligațiile locale. Cere verificarea juridică pentru amplasamentul, activitatea și contractele respective.</p>
<h3>Asigurarea înlocuiește planul de intervenție?</h3><p>Nu. Prevenția, procedurile operaționale și analiza contractului au roluri diferite. Un incident real necesită intervenția specialiștilor și a autorităților competente, după caz.</p>`
  },
  'asigurare-drumuri-autostrazi': {
    title: 'Asigurarea lucrărilor rutiere: checklist pentru antreprenori',
    description: 'Cum pregătești analiza unui șantier rutier în Moldova: tronsoane, utilaje, trafic, răspunderi și delimitarea față de garanția de bună execuție.',
    related: ['asigurare-buna-executie', 'Garanția de bună execuție nu este asigurarea lucrării'],
    sources: [bnm, construction],
    body: `<p>Un proiect rutier trebuie analizat după faza lucrărilor, amplasament și responsabilitățile părților. Asigurarea construcției, utilajele antreprenorului, pretențiile terților și garanția de bună execuție reprezintă întrebări diferite. Nu presupune că un singur titlu de poliță le rezolvă pe toate.</p>
<h2>Descrie fiecare tronson și interfața cu traficul</h2>
<p>Pentru ofertare, pregătește planul amplasamentului, lungimea tronsoanelor, etapele de execuție și modul de separare a lucrării de circulația publică. Un șantier nou și reabilitarea unui drum utilizat au contexte operaționale diferite. Include podurile, podețele, rețelele existente și lucrările temporare în descriere, fără a presupune că sunt automat asigurate.</p>
<ul><li>Cine este beneficiarul și cine execută fiecare categorie de lucrări?</li><li>Care este valoarea contractului și ce bunuri sunt ale beneficiarului?</li><li>Ce utilaje, depozite și transporturi trebuie discutate separat?</li><li>Când începe, se suspendă și se recepționează fiecare etapă?</li><li>Ce vecinătăți, utilități și accesuri pot fi afectate?</li></ul>
<h2>Transformă cerințele contractuale într-o listă verificabilă</h2>
<p>Extrage din contract cerințele de asigurare și cere corespondența lor cu oferta: persoane asigurate, perioade, limite și excluderi. Dacă beneficiarul solicită un certificat, compară-l cu documentele complete ale poliței. Certificatul nu trebuie folosit pentru a presupune clauze care nu apar în contract.</p>
<h2>Întrebări frecvente pentru lucrări rutiere</h2>
<h3>Polița pentru șantier rămâne aceeași după darea în exploatare?</h3><p>Cere delimitarea între execuție, eventualele perioade ulterioare și exploatare. Recepția trebuie discutată în raport cu termenii poliței.</p>
<h3>Sunt incluse pagubele la rețelele subterane?</h3><p>Descrie rețelele cunoscute și cere condițiile specifice. Nu deduce acoperirea din simpla includere a răspunderii civile.</p>
<h3>Cu ce încep discuția?</h3><p>Cu contractul, devizul, graficul și planul de organizare a șantierului. Pentru clauzele juridice sau cerințele unei achiziții, este necesară și revizuirea de specialitate.</p>`
  },
  'asigurare-poduri-tuneluri': {
    title: 'Poduri și tuneluri: informații pentru analiza asigurării',
    description: 'Checklist pentru proiecte de poduri și tuneluri: geotehnică, structuri existente, lucrări temporare, testare și responsabilități contractuale.',
    related: ['asigurare-drumuri-autostrazi', 'Integrarea lucrării într-un proiect rutier'],
    sources: [construction, bnm],
    body: `<p>Analiza asigurării unui pod sau tunel are nevoie de date despre lucrare și mediul în care este executată. Valoarea contractului nu este suficientă pentru a descrie riscul. Pentru o solicitare din Moldova, pregătește separat documentele tehnice, calendarul și obligațiile de asigurare ale participanților.</p>
<h2>Delimitează structura nouă de bunurile existente</h2>
<p>La o reabilitare, notează ce parte a structurii există deja, ce se demolează și ce se reconstruiește. La un tunel nou, descrie vecinătățile, investigațiile disponibile și metoda de execuție. Aceste informații formează un brief tehnic; articolul nu înlocuiește expertiza inginerului sau studiul geotehnic.</p>
<ul><li>Studii geotehnice și, unde este relevant, hidrologice disponibile.</li><li>Metoda de execuție, lucrările provizorii și măsurile de monitorizare.</li><li>Clădiri, infrastructură și rețele aflate în vecinătate.</li><li>Antreprenori, proiectanți și subcontractori, cu rolurile lor contractuale.</li><li>Etapele de încercare, recepție și deschidere pentru utilizare.</li></ul>
<h2>Întrebări pentru condițiile propuse</h2>
<p>Cere explicații pentru tratamentul infiltrațiilor, condițiilor de teren, defectelor de proiectare și costurilor de refacere, fără a considera aceste situații acoperite implicit. Discută separat pagubele materiale, pretențiile terților și consecințele întârzierii. Solicită clarificarea eventualelor cerințe de inspecție și notificare a schimbărilor tehnice.</p>
<h2>Întrebări frecvente pentru proiecte complexe</h2>
<h3>Toate lucrările subcontractate sunt incluse?</h3><p>Verifică lista persoanelor asigurate, activitățile declarate și clauzele aplicabile. Prezența unui subcontractor pe șantier nu este o confirmare a protecției sale.</p>
<h3>Pot folosi oferta unui proiect anterior?</h3><p>Doar ca listă de întrebări. Amplasamentul, metoda și contractul nou trebuie evaluate separat.</p>
<h3>Asigurarea garantează respectarea termenului?</h3><p>Nu. Nu confunda managementul proiectului, o garanție contractuală și o eventuală acoperire financiară. Fiecare presupune o analiză distinctă.</p>`
  },
  'asigurare-sisteme-irigatii': {
    title: 'Asigurarea sistemelor de irigații: ce incluzi în inventar',
    description: 'Ghid pentru ferme din Moldova: pompe, conducte, automatizări, echipamente mobile și separarea daunelor instalației de pierderile culturilor.',
    related: ['asigurare-serre-solarii', 'Structura, instalațiile și culturile din sere'],
    sources: [property, bnm],
    body: `<p>Pentru asigurarea unui sistem de irigații, descrie instalația pe componente și amplasamente: pompe, alimentare electrică, conducte, automatizări și echipamente mobile. O daună la instalație și pierderea unei culturi sunt expuneri diferite; nu presupune că aceeași poliță le include pe amândouă.</p>
<h2>Un inventar util fermei și evaluatorului</h2>
<p>Împarte sistemul în echipamente fixe, mobile și componente aflate în afara spațiilor păzite. Pentru fiecare, notează proprietarul, anul, valoarea documentată și locul de utilizare. Evidențiază echipamentele în leasing sau comune mai multor utilizatori și verifică ce obligații contractuale există.</p>
<ul><li>Stațiile de pompare și sursa de energie.</li><li>Conductele îngropate și cele de suprafață, cu traseele disponibile.</li><li>Pivoții, tamburii sau alte elemente deplasabile.</li><li>Senzorii, tablourile electrice și sistemele de control.</li><li>Depozitarea în afara sezonului și istoricul intervențiilor.</li></ul>
<h2>Pregătește scenariul de oprire</h2>
<p>Identifică piesa a cărei defectare oprește întregul sistem, alternativa de alimentare și timpul estimat de procurare a unei piese. Cere apoi explicații despre tratamentul avariei mecanice sau electrice, furtului și fenomenelor naturale în oferta concretă. Uzura, întreținerea și disponibilitatea apei trebuie discutate distinct, nu prezentate drept riscuri acceptate automat.</p>
<h2>Întrebări frecvente despre irigații</h2>
<h3>Dacă pompa se oprește, sunt plătite și culturile afectate?</h3><p>Nu rezultă automat din asigurarea pompei. Descrie dependența culturilor de instalație și cere delimitarea exactă a contractelor analizate.</p>
<h3>Un echipament mutat pe alt teren rămâne inclus?</h3><p>Verifică teritoriul și procedura de declarare a mutării înainte de utilizare. Păstrează evidența amplasamentelor.</p>
<h3>Ce trimit pentru prima discuție?</h3><p>Inventarul, fotografii tehnice fără persoane, amplasamentele și o descriere a întreținerii. Documentele finale cerute sunt stabilite în procesul de evaluare, nu de această listă orientativă.</p>`
  },
  'asigurare-serre-solarii': {
    title: 'Asigurarea serelor și solariilor: separă bunurile și culturile',
    description: 'Pentru horticultori din Moldova: structura serei, folia, instalațiile, culturile și scenariile de oprire care trebuie discutate la ofertare.',
    related: ['asigurare-sisteme-irigatii', 'Inventarul instalațiilor de irigații'],
    sources: [bnm, property],
    body: `<p>O seră sau un solar nu este un singur bun omogen. Structura, învelitoarea, instalațiile și plantele trebuie descrise separat atunci când ceri analiza unei asigurări. Faptul că există o ofertă pentru clădire nu confirmă protecția culturilor sau pierderilor produse de oprirea încălzirii.</p>
<h2>Împarte dosarul în patru categorii</h2>
<ol><li><strong>Construcția:</strong> amplasament, dimensiuni, materiale, ancorare și anul realizării.</li><li><strong>Învelitoarea:</strong> sticlă, policarbonat sau folie, starea și modul de înlocuire.</li><li><strong>Instalațiile:</strong> încălzire, ventilație, alimentare electrică, irigații și automatizare.</li><li><strong>Culturile:</strong> specii, cicluri de producție și valorile documentate pentru discuția de specialitate.</li></ol>
<h2>Verifică punctele de dependență ale producției</h2>
<p>Pentru propria planificare, notează ce se întâmplă dacă lipsește energia, se oprește o pompă sau se deteriorează învelitoarea. Pregătește măsurile de rezervă și istoricul întreținerii. Aceste scenarii ajută evaluatorul să înțeleagă activitatea; nu reprezintă o afirmație că fiecare cauză sau consecință este asigurabilă.</p>
<p>Cere o explicație explicită pentru vânt, grindină, încărcarea cu zăpadă și defecțiunile instalațiilor, raportată la construcția concretă. Discută limitele, condițiile de întreținere și documentele solicitate în caz de incident.</p>
<h2>Întrebări frecvente despre sere și solarii</h2>
<h3>O poliță pentru bunuri include folia și plantele?</h3><p>Nu presupune acest lucru. Solicită identificarea fiecărei categorii în ofertă și a oricăror limitări aplicabile.</p>
<h3>Există o soluție identică pentru toate construcțiile?</h3><p>Nu poate fi confirmată fără evaluare. Materialele, amplasamentul și modul de exploatare trebuie prezentate înainte de o concluzie privind eligibilitatea.</p>
<h3>Cum compar două propuneri?</h3><p>Folosește același inventar și aceleași valori. Marchează separat ce este acceptat, exclus sau încă neclar, înainte de compararea primei.</p>`
  },
  'asigurare-viata-moldova': {
    title: 'Asigurarea de viață în Republica Moldova',
    updatedAt: '2026-10-16',
    description: 'Asigurarea de viață în Moldova: diferența față de accidente, componenta de economisire și întrebările utile înainte de alegerea unei polițe.',
    related: ['asigurare-accidente-angajati', 'Asigurarea de accidente pentru angajați: un produs diferit'],
    sources: [life, ['BNM: Ghidul asiguratului — explicații generale, nu legislație actualizată', 'https://www.bnm.md/files/Ghidul%20Asiguratului.pdf'], ['BNM: situația sectorului asigurări în 2025', 'https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025']],
    body: `<p>Asigurarea de viață este o categorie distinctă de asigurarea de accidente. În Republica Moldova există produse de viață care combină protecția contractuală cu economisirea. GRAWE Moldova prezintă public asemenea produse, iar BNM raportează separat activitatea de asigurări de viață. Disponibilitatea unei soluții pentru o anumită persoană se verifică la asigurător; articolul nu confirmă intermedierea ei de către ING Broker.</p>
<h2>Viață și accidente: care este diferența?</h2>
<p>La asigurarea de viață se verifică evenimentele prevăzute în contract, inclusiv decesul și, pentru produsele care o prevăd, plata la scadență. Nu este corect să o definim numai prin fracturi, traumatisme sau invaliditate rezultată din accident.</p>
<p>Asigurarea de accidente privește evenimente accidentale și consecințele acceptate prin condițiile sale. Faptul că un contract menționează decesul din accident nu transformă automat acel produs într-o asigurare de viață cu economisire. Componentele suplimentare se citesc separat de protecția principală.</p>
<h2>Ce verifici într-o ofertă din Moldova</h2>
<p>Folosește condițiile produsului local, nu descrierea unui produs din Marea Britanie, SUA sau altă piață. Pentru compararea ofertelor, cere aceeași structură de informații:</p>
<ul><li>Denumirea asigurătorului și a produsului, durata și moneda contractului.</li><li>Persoana asigurată, contractantul și beneficiarul desemnat.</li><li>Evenimentele incluse, excluderile și condițiile de acceptare.</li><li>Prima, frecvența plății și consecințele întreruperii plăților.</li><li>Ce sume sunt prevăzute contractual și ce valori sunt doar proiecții.</li><li>Ce se întâmplă la încetarea înainte de termen și cum se determină eventuala valoare de răscumpărare.</li></ul>
<h2>Economisirea se analizează împreună cu durata</h2>
<p>Dacă oferta include acumulare, cere o explicație scrisă a plăților, costurilor și sumelor aferente diferitelor momente ale contractului. Nu presupune că retragerea anticipată restituie toate primele achitate. Un exemplu comercial sau un rezultat proiectat nu trebuie prezentat ca randament garantat.</p>
<h2>Întrebări frecvente</h2>
<h3>Asigurarea de viață este aceeași cu asigurarea de accidente?</h3><p>Nu. Compară obiectul și evenimentele contractului. Accidentul poate fi o componentă suplimentară, dar nu definește singur toate produsele de viață.</p>
<h3>Orice asigurare de viață include economisire?</h3><p>Nu deduce acest lucru din denumire. Verifică structura produsului propus și ce plăți prevede la scadență sau la producerea evenimentului asigurat.</p>
<h3>Există o poliță identică pentru toate persoanele?</h3><p>Nu presupune condiții universale. Vârsta, durata solicitată și criteriile produsului trebuie analizate înainte de ofertare. Datele medicale nu se trimit într-un formular public.</p>`
  },
};

export function renderArticleRevision(revision: ArticleRevision): string {
  const sources = revision.sources.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join('');
  return `${revision.body}
<h2>Următorul pas</h2>
<p><a href="/contact">Solicită o discuție cu ING Broker</a> pentru verificarea posibilităților de analiză și intermediere. Brokerul intermediază și explică opțiunile; acceptarea riscului, condițiile și soluționarea daunelor aparțin asigurătorului, conform contractului. Acest ghid nu confirmă disponibilitatea unui produs sau acoperirea unui caz.</p>
<p>Citește și: <a href="/news/${revision.related[0]}">${revision.related[1]}</a>.</p>
<h2>Surse și limitele informației</h2>
<ul>${sources}</ul>
<p>Surse consultate la ${revision.updatedAt === '2026-10-16' ? '16' : '15'} octombrie 2026. Listele de pregătire sunt recomandări editoriale, nu condiții ale unei polițe. Exemplele de produse aparțin furnizorilor citați; nu reprezintă o ofertă ING Broker. Pentru obligații legale sau o situație individuală este necesară verificarea de specialitate.</p>`;
}
