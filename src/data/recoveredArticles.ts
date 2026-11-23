import {editorialCatalog20261112} from './editorialCatalog20261112';
import { applySeoContentReview20261121 } from './seoContentReview20261121';
/** Original editorial revisions. See docs/content-recovery-2026-10-15.md for mandatory approval gates. */
import { editorialBatch20261107 } from './editorialBatch20261107';
import { editorialDepth20261107 } from './editorialDepth20261107';
import { editorialSectors20261107 } from './editorialSectors20261107';
import { editorialLogistics20261108 } from './editorialLogistics20261108';
import { editorialIndustry20261108 } from './editorialIndustry20261108';
import { editorialLiability20261108 } from './editorialLiability20261108';
import { editorialProjects20261108 } from './editorialProjects20261108';
import { editorialRisks20261108 } from './editorialRisks20261108';
import { editorialDemand20261108 } from './editorialDemand20261108';
import { editorialRemaining20261109 } from './editorialRemaining20261109';
import { editorialSearch20261109 } from './editorialSearch20261109';
import { editorialTech20261109 } from './editorialTech20261109';
import { editorialEnergy20261110 } from './editorialEnergy20261110';
import { editorialOperations20261111 } from './editorialOperations20261111';

export interface ArticleRevision {
  title: string;
  /** Titlu SEO separat, când H1 e prea lung pentru „titlu | ING Broker”. */
  seoTitle?: string;
  /** Metadata only; keep the owner-approved visible hero introduction. */
  seoDescription?: string;
  /** Autor nominal; implicit „Echipa editorială ING Broker”. */
  author?: string;
  updatedAt?: string;
  sourcesCheckedAt?: string;
  preserveLegacyLayout?: boolean;
  description: string;
  body: string;
  related: [string, string];
  sources: Array<[string, string]>;
}

const bnm = ['BNM: ce verifici într-un contract de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'] as [string, string];
const property = ['MOLDASIG: bunuri, utilaje și întreruperea producției - exemplu de produs din Moldova', 'https://moldasig.md/property-insurance-for-legal-persons'] as [string, string];
const life = ['GRAWE Moldova: prezentarea categoriilor de asigurări de viață', 'https://www.grawe.md/asigurare-viata/'] as [string, string];

export const articleRevisions: Record<string, ArticleRevision> = {
  'asigurare-raspundere-directori': {
    title: 'Asigurarea D&O în Moldova: când răspund personal administratorii și ce acoperă polița',
    seoTitle: 'Asigurare D&O administratori Moldova | ING Broker Moldova',
    author: 'Andrei Moraru, CFO Insurance ING Broker SRL',
    description: 'Asigurarea D&O în Moldova, explicată simplu: când răspund personal administratorii, ce acoperă polița, ce nu se plătește și ce acte sunt necesare.',
    updatedAt: '2026-11-23', sourcesCheckedAt: '23 noiembrie 2026', preserveLegacyLayout: true,
    related: ['asigurare-raspundere-profesionala', 'Asigurarea de răspundere profesională în Moldova'],
    sources: [
      ['Legea nr. 135/2007 privind societățile cu răspundere limitată, art. 76, versiunea 2026 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=153674&lang=ro'],
      ['Legea nr. 1134/1997 privind societățile pe acțiuni, art. 73, versiunea 2026 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=154797&lang=ro'],
      ['Legea insolvabilității nr. 149/2012, art. 248, versiunea 2026 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=156843&lang=ro'],
      ['Codul civil al Republicii Moldova nr. 1107/2002, art. 1851, 1874, 1875 și 1878, versiunea 2026 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=150498&lang=ro'],
      ['Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare, art. 4 și anexa, clasele 13 și 17 (BNM)', 'https://bnm.md/files/Lege%20asigur%C4%83ri%2092_2022%20(RO).pdf'],
      ['BNM: situația financiară a sectorului asigurărilor pentru anul 2025', 'https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025'],
    ],
    body: `<p>Asigurarea D&amp;O protejează administratorii, directorii și membrii consiliului când cineva le cere personal despăgubiri pentru o decizie de conducere. În limitele și condițiile poliței, asigurătorul poate plăti apărarea juridică și suma datorată. În Republica Moldova, polița este, ca regulă, facultativă.</p>

<h2>Ce acoperă asigurarea D&amp;O</h2>
<p>D&amp;O vine de la „Directors and Officers”, adică directori și persoane cu funcții de conducere. Polița intră în discuție când o societate, un asociat, un creditor sau o autoritate formulează o pretenție legată de modul în care persoana a condus firma. Exemple tipice sunt o plată contestată, un contract păgubos sau raportări financiare incorecte.</p>
<p>De regulă, polița poate include:</p>
<ul><li>Onorariile avocaților și cheltuielile de judecată.</li><li>Suma stabilită prin hotărâre sau prin tranzacție acceptată de asigurător.</li><li>Costurile de apărare într-o investigație a unei autorități, dacă polița o prevede.</li><li>Foștii directori, pentru deciziile din perioada mandatului, dacă sunt incluși.</li></ul>
<p>Lista persoanelor asigurate și a situațiilor acoperite se citește în ofertă. Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare nu prevede o clasă separată pentru D&amp;O. Cel mai apropiat reper este clasa 13, „Asigurările de răspundere civilă generală”, iar apărarea juridică poate ține de clasa 17. Încadrarea exactă se confirmă la asigurător.</p>

<h2>Când răspunde personal un administrator</h2>
<p>Societatea are patrimoniu propriu, dar legea poate îndrepta o pretenție și spre persoana care a condus-o. Trei legi sunt importante pentru conducerea unei firme:</p>
<table>
<thead><tr><th>Lege</th><th>Pe cine privește</th><th>Ce prevede, pe scurt</th></tr></thead>
<tbody>
<tr><td>Legea nr. 135/2007, art. 76</td><td>Administratorul unui SRL</td><td>Răspundere materială deplină pentru prejudiciile cauzate societății, inclusiv prin plăți ilegale către asociați. Mai mulți administratori răspund solidar, dacă instanța nu stabilește altfel.</td></tr>
<tr><td>Legea nr. 1134/1997, art. 73</td><td>Persoanele cu funcții de răspundere dintr-o societate pe acțiuni</td><td>Răspund pentru prejudiciul cauzat societății și, între altele, pentru ascunderea sau denaturarea premeditată a informațiilor financiare.</td></tr>
<tr><td>Legea nr. 149/2012, art. 248</td><td>Membrii organelor de conducere ale unui debitor insolvabil și alte persoane care i-au cauzat insolvabilitatea</td><td>La cerere, instanța poate dispune să suporte o parte din datorii, dacă au cauzat insolvabilitatea prin faptele enumerate în lege.</td></tr>
</tbody>
</table>
<p>O pretenție nu dovedește vinovăția. Chiar și o reclamație neîntemeiată poate însemna însă luni de apărare și costuri pe care persoana le suportă, dacă societatea nu le preia. Aici apare utilitatea practică a poliței.</p>

<h2>Cine are nevoie de D&amp;O</h2>
<table>
<thead><tr><th>Situația firmei</th><th>De unde poate veni pretenția</th></tr></thead>
<tbody>
<tr><td>Are mai mulți asociați sau acționari</td><td>Un asociat contestă o decizie a conducerii</td></tr>
<tr><td>Are investitori sau este filiala unui grup</td><td>Investitorul ori grupul cere socoteală pentru rezultate sau raportări</td></tr>
<tr><td>Are director angajat, fără părți sociale</td><td>Societatea sau noii proprietari îi cer despăgubiri</td></tr>
<tr><td>Are credite mari sau dificultăți financiare</td><td>Creditorii ori administratorul insolvabilității</td></tr>
<tr><td>Activează într-un domeniu reglementat</td><td>O autoritate deschide o verificare a conducerii</td></tr>
</tbody>
</table>
<p>Riscul nu ține doar de mărimea firmei. Exemplu ipotetic: într-un SRL cu doi asociați, administratorul aprobă o plată mare către un furnizor, iar lucrarea nu se mai execută. După o schimbare de asociați, noua conducere îi cere să acopere paguba. Administratorul are nevoie de avocat și de documentele deciziei, chiar dacă în final câștigă procesul. O poliță D&amp;O poate prelua, în condițiile ei, costurile de apărare și suma stabilită, dacă nu exclude pretențiile venite de la societate sau de la asociați.</p>
<p>Polița nu înlocuiește buna organizare. Hotărârile asociaților, procesele-verbale și evidența deciziilor importante ajută la apărare și arată asigurătorului cum este condusă firma.</p>
<p>Unii finanțatori, investitori sau parteneri străini pot cere polița prin contract. Înainte de semnarea unei finanțări se verifică dacă documentele conțin o astfel de cerință.</p>

<h2>Prin ce diferă D&amp;O de alte asigurări</h2>
<p>Polița obișnuită de <a href="/news/asigurare-raspundere-civila-generala">răspundere civilă generală</a> privește, de regulă, vătămările și pagubele materiale produse altor persoane prin activitatea firmei. <a href="/news/asigurare-raspundere-profesionala">Răspunderea profesională</a> privește erorile din serviciile prestate clienților. D&amp;O privește deciziile de conducere și persoanele care le iau. O firmă poate avea nevoie de mai multe polițe, cu delimitare scrisă între ele. Incidentele informatice se analizează la <a href="/servicii/asigurare-cyber-moldova">asigurarea cyber</a>.</p>

<h2>Ce nu se plătește, de regulă</h2>
<ul><li>Daunele cauzate cu intenție, frauda și câștigul personal ilegal, de obicei după o hotărâre definitivă.</li><li>Amenzile și sancțiunile penale.</li><li>Faptele și reclamațiile pe care solicitantul le cunoștea sau trebuia să le cunoască la încheierea poliței.</li><li>Pretențiile legate de insolvabilitate, dacă polița le exclude sau le limitează.</li><li>Vătămările corporale și pagubele materiale, care țin de alte asigurări.</li><li>Datoriile personale fără legătură cu funcția.</li><li>Unele pretenții între persoanele asigurate sau din partea firmei, dacă polița le exclude.</li></ul>
<p>Art. 1874 din Codul civil prevede că asiguratul nu are drept la despăgubire în măsura în care a acționat cu intenția de a cauza acea daună. Unele fapte din art. 248 al Legii insolvabilității pot îndeplini această condiție, caz în care polița poate să nu plătească suma finală. Se verifică separat dacă poate plăti apărarea până la hotărâre.</p>

<h2>De ce contează data reclamației</h2>
<p>Polițele D&amp;O se leagă, de regulă, de momentul în care reclamația este formulată și anunțată asigurătorului, nu de data deciziei contestate. O decizie din 2024 poate fi contestată în 2026. Atunci se analizează polița în vigoare în 2026, dacă 2024 intră în perioada acceptată, și, dacă reclamația intră în termenul adițional, polița expirată anterior. Din acest motiv se verifică trei lucruri:</p>
<ul><li>De la ce dată sunt acceptate deciziile anterioare.</li><li>Dacă această dată se păstrează la schimbarea asigurătorului.</li><li>Ce se întâmplă după expirarea poliței sau după plecarea directorului și cum se anunță o situație care poate duce la o reclamație.</li></ul>
<p>Pentru polițele legate de înaintarea pretenției, art. 1878 alin. (2) din Codul civil include pretențiile înaintate într-un termen adițional cel puțin egal cu termenul de prescripție aplicabil răspunderii, dacă se bazează pe un fapt survenit înainte de expirarea perioadei de asigurare. O durată mai scurtă în poliță se analizează față de această normă înainte de semnare.</p>

<h2>Suma asigurată, prima și actele pentru ofertă</h2>
<p>Suma asigurată se alege după mărimea firmei, datorii, numărul de asociați și riscurile reale. Se verifică dacă suma este comună pentru toate persoanele și reclamațiile din perioada poliței și dacă avocații și cheltuielile de judecată o reduc sau se plătesc peste ea. Prima depinde de domeniu, situația financiară, structura asociaților, istoricul litigiilor și suma aleasă.</p>
<ul><li>Chestionarul asigurătorului, completat și semnat.</li><li>Structura asociaților și a grupului.</li><li>Lista funcțiilor de conducere care vor fi asigurate.</li><li>Situațiile financiare pe ultimii ani.</li><li>Litigiile, investigațiile, reclamațiile și dificultățile financiare cunoscute.</li><li>Cerința de asigurare din contracte, dacă există.</li></ul>
<p>Documentele juridice sensibile se transmit prin canalul stabilit cu brokerul. Potrivit <a href="https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025">raportului Băncii Naționale a Moldovei pentru 2025</a>, asigurările auto depășesc 71,6% din primele generale, iar raportul nu prezintă date separate pentru D&amp;O. Disponibilitatea produsului și condițiile lui se confirmă pentru fiecare firmă. Banca Națională a Moldovei supraveghează piața (art. 4 din Legea nr. 92/2022).</p>

<h2>Ce face administratorul când primește o reclamație</h2>
<ol><li>Păstrează scrisoarea, citația sau notificarea și data primirii.</li><li>Anunță asigurătorul de îndată (art. 1851 din Codul civil) și respectă termenul din poliță.</li><li>Strânge documentele despre decizia contestată și respectă termenele din citație sau notificare.</li><li>Stabilește cu asigurătorul avocatul și cheltuielile de apărare, dacă polița cere acest lucru.</li><li>Discută întâi cu asigurătorul orice recunoaștere sau tranzacție. Clauza care îl exonerează pe asigurător doar pentru recunoaștere este nulă (art. 1875 alin. (1) din Codul civil), dar un acord la care asigurătorul nu a consimțit nu îl obligă pe acesta (alin. (2)).</li></ol>
<h3>Rolul brokerului și al asigurătorului</h3>
<p>Brokerul analizează structura firmei, pregătește dosarul, solicită oferte de la asigurători licențiați, în funcție de risc, și compară condițiile pe aceeași bază. La daună, brokerul asistă la notificare și la comunicarea cu asigurătorul. Asigurătorul acceptă riscul, stabilește prima și condițiile și decide plata.</p>

<h2>Întrebări frecvente despre asigurarea D&amp;O</h2>
<h3>Este obligatorie asigurarea D&amp;O în Moldova?</h3><p>Ca regulă, nu. Firma decide dacă încheie polița pentru persoanele care o conduc. Cerința poate apărea dintr-un contract de finanțare, de la investitori sau de la grupul din care face parte societatea. Pentru o activitate reglementată se verifică și legea specială aplicabilă acelei activități.</p>
<h3>Poate răspunde personal administratorul unui SRL?</h3><p>Da, în condițiile legii. Art. 76 din Legea nr. 135/2007 prevede răspunderea materială deplină a administratorului pentru prejudiciile cauzate societății. În insolvabilitate, art. 248 din Legea nr. 149/2012 permite instanței, la cerere, să pună o parte din datorii în sarcina membrilor conducerii care au cauzat insolvabilitatea prin faptele enumerate în lege.</p>
<h3>Prin ce diferă D&amp;O de răspunderea civilă generală?</h3><p>Polița obișnuită de răspundere civilă generală privește, de regulă, vătămările și pagubele materiale produse altor persoane prin activitatea firmei. D&amp;O privește pretențiile legate de deciziile de conducere și persoanele care le-au luat, inclusiv pierderile financiare. O firmă poate avea nevoie de ambele polițe, cu limite și condiții separate.</p>
<h3>Acoperă polița o decizie luată înainte de semnare?</h3><p>Poate acoperi, în condițiile poliței. Contractul poate exclude împrejurările pe care solicitantul le cunoștea sau trebuia să le cunoască la încheiere. Dacă polița are o dată de la care acceptă deciziile anterioare, se verifică și această limită, mai ales la schimbarea asigurătorului.</p>
<h3>Sunt protejați și foștii directori?</h3><p>Pot fi protejați pentru deciziile din perioada mandatului, dacă polița îi include, iar reclamația apare în perioada de asigurare sau în termenul adițional. Înainte de plecarea unui director, de vânzarea firmei sau de încetarea activității se verifică ce se întâmplă cu acoperirea și cât timp mai pot fi anunțate reclamații.</p>
<h3>Ce se face la primirea unei reclamații?</h3><p>Persoana păstrează documentul și data primirii, anunță asigurătorul de îndată și strânge actele despre decizia contestată. Avocatul, cheltuielile, orice recunoaștere sau tranzacție se discută întâi cu asigurătorul. Un acord cu terțul la care asigurătorul nu a consimțit nu îl obligă, potrivit art. 1875 alin. (2) din Codul civil.</p>

<h2>Ofertă D&amp;O prin ING Broker</h2>
<p>ING Broker pregătește dosarul companiei și solicită oferte de la asigurători licențiați, în funcție de risc. Acceptarea riscului, prima și condițiile se stabilesc de asigurător. Materialul are caracter general și nu înlocuiește analiza contractului sau consultanța juridică pentru un caz concret. Produsul este prezentat pe pagina <a href="/business/do">asigurare D&amp;O pentru companii</a>.</p>
<p><a href="/contact">Solicită o ofertă D&amp;O → ingbroker.md/contact</a></p>
<p>Broker de Asigurare-Reasigurare „INSURANCE ING BROKER” SRL, str. Pan Halippa 9, MD-2009, mun. Chișinău. Telefon: +373 79 526 003, +373 69 526 003. E-mail: andrei.moraru@ingbroker.md. Activitate supravegheată de Banca Națională a Moldovei.</p>`
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
    sources: [bnm],
    body: `<p>O garanție de bună execuție este analizată în raport cu obligațiile dintr-un contract și cerințele beneficiarului. Nu o confunda cu asigurarea daunelor produse pe șantier. Înainte de a cere o ofertă, verifică forma de garanție acceptată, emitentul eligibil și textul solicitat de beneficiar.</p>
<h2>Începe cu documentația beneficiarului</h2>
<p>Pentru o firmă de construcții sau un furnizor de servicii, o garanție ieftină, dar neacceptată contractual, nu rezolvă nevoia. În achiziții publice din Republica Moldova, forma garanției și emitentul acceptat trebuie verificate în documentația procedurii, cu sprijinul unui specialist în cadrul juridic aplicabil.</p>
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
    related: ['asigurare-accidente-angajati', 'Asigurarea de accidente pentru angajați - categorie distinctă'],
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
    sources: [bnm],
    body: `<p>Pentru o companie care depozitează combustibili, folosește substanțe în producție sau operează pe un teren industrial, analiza riscului de mediu începe cu amplasamentul. Întrebarea utilă nu este doar „există asigurare de poluare?”, ci ce situații, cheltuieli și responsabilități pot fi evaluate în cazul concret.</p>
<h2>Separă patru componente ale expunerii</h2>
<p>Construiește o fișă pentru fiecare locație: bunurile proprii, vecinătățile, posibilele lucrări de remediere și impactul asupra operațiunilor. Aceasta este o structură de analiză propusă, nu o listă de acoperiri confirmate. Existența unei polițe generale de răspundere nu demonstrează includerea tuturor acestor componente.</p>
<ul><li>Care sunt activitățile actuale și utilizările istorice cunoscute ale terenului?</li><li>Ce substanțe, rezervoare, conducte și puncte de evacuare există?</li><li>Ce informații documentate sunt disponibile despre contaminare?</li><li>Cine deține terenul și cine are obligații contractuale de intervenție?</li><li>Există un plan de răspuns, persoane responsabile și furnizori de intervenție?</li></ul>
<h2>Întrebări pentru o ofertă comparabilă</h2>
<p>Cere delimitarea dintre situații preexistente și evenimente viitoare, dintre poluare bruscă și graduală, precum și dintre terenul propriu și prejudiciile către terți. Solicită explicit tratamentul costurilor de investigație, curățare și apărare. Nu considera aceste cheltuieli acceptate fără confirmarea condițiilor.</p>
<h2>Întrebări frecvente despre remedierea mediului</h2>
<h3>O poliță nouă plătește curățarea unei contaminări deja identificate?</h3><p>Nu presupune acest lucru. Istoricul cunoscut trebuie prezentat și analizat înainte de orice concluzie privind eligibilitatea.</p>
<h3>Ce verificări sunt necesare pentru un amplasament din Moldova?</h3><p>Pregătește documentele amplasamentului și descrierea activității. Cere verificarea obligațiilor aplicabile în Republica Moldova și, separat, a condițiilor de asigurare propuse pentru riscul respectiv.</p>
<h3>Asigurarea înlocuiește planul de intervenție?</h3><p>Nu. Prevenția, procedurile operaționale și analiza contractului au roluri diferite. Un incident real necesită intervenția specialiștilor și a autorităților competente, după caz.</p>`
  },
  'asigurare-drumuri-autostrazi': {
    title: 'Asigurarea lucrărilor rutiere: checklist pentru antreprenori',
    description: 'Cum pregătești analiza unui șantier rutier în Moldova: tronsoane, utilaje, trafic, răspunderi și delimitarea față de garanția de bună execuție.',
    related: ['asigurare-buna-executie', 'Garanția de bună execuție nu este asigurarea lucrării'],
    sources: [bnm],
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
    sources: [bnm],
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
    sources: [life, ['BNM: Ghidul asiguratului - explicații generale, nu legislație actualizată', 'https://www.bnm.md/files/Ghidul%20Asiguratului.pdf'], ['BNM: situația sectorului asigurări în 2025', 'https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025']],
    body: `<p>Asigurarea de viață este o categorie distinctă de asigurarea de accidente. În Republica Moldova există produse de viață care combină protecția contractuală cu economisirea. GRAWE Moldova prezintă public asemenea produse, iar BNM raportează separat activitatea de asigurări de viață. Disponibilitatea unei soluții pentru o anumită persoană se verifică la asigurător; articolul nu confirmă intermedierea ei de către ING Broker.</p>
<h2>Viață și accidente: care este diferența?</h2>
<p>La asigurarea de viață se verifică evenimentele prevăzute în contract, inclusiv decesul și, pentru produsele care o prevăd, plata la scadență. Nu este corect să o definim numai prin fracturi, traumatisme sau invaliditate rezultată din accident.</p>
<p>Asigurarea de accidente privește evenimente accidentale și consecințele acceptate prin condițiile sale. Faptul că un contract menționează decesul din accident nu transformă automat acel produs într-o asigurare de viață cu economisire. Componentele suplimentare se citesc separat de protecția principală.</p>
<h2>Ce verifici într-o ofertă din Moldova</h2>
<p>Folosește condițiile produsului oferit în Republica Moldova. Pentru compararea ofertelor, cere aceeași structură de informații:</p>
<ul><li>Denumirea asigurătorului și a produsului, durata și moneda contractului.</li><li>Persoana asigurată, contractantul și beneficiarul desemnat.</li><li>Evenimentele incluse, excluderile și condițiile de acceptare.</li><li>Prima, frecvența plății și consecințele întreruperii plăților.</li><li>Ce sume sunt prevăzute contractual și ce valori sunt doar proiecții.</li><li>Ce se întâmplă la încetarea înainte de termen și cum se determină eventuala valoare de răscumpărare.</li></ul>
<h2>Economisirea se analizează împreună cu durata</h2>
<p>Dacă oferta include acumulare, cere o explicație scrisă a plăților, costurilor și sumelor aferente diferitelor momente ale contractului. Nu presupune că retragerea anticipată restituie toate primele achitate. Un exemplu comercial sau un rezultat proiectat nu trebuie prezentat ca randament garantat.</p>
<h2>Întrebări frecvente</h2>
<h3>Asigurarea de viață este aceeași cu asigurarea de accidente?</h3><p>Nu. Compară obiectul și evenimentele contractului. Accidentul poate fi o componentă suplimentară, dar nu definește singur toate produsele de viață.</p>
<h3>Orice asigurare de viață include economisire?</h3><p>Nu deduce acest lucru din denumire. Verifică structura produsului propus și ce plăți prevede la scadență sau la producerea evenimentului asigurat.</p>
<h3>Există o poliță identică pentru toate persoanele?</h3><p>Nu presupune condiții universale. Vârsta, durata solicitată și criteriile produsului trebuie analizate înainte de ofertare. Datele medicale nu se trimit într-un formular public.</p>`
  },
};

Object.assign(articleRevisions, editorialBatch20261107);
Object.assign(articleRevisions, editorialSectors20261107);
for (const [slug, depth] of Object.entries(editorialDepth20261107)) {
  const revision = articleRevisions[slug];
  if (!revision) throw new Error(`Missing reviewed article: ${slug}`);
  revision.body = revision.body.replace(/<h2>Întrebări frecvente/, `${depth}<h2>Întrebări frecvente`);
  revision.updatedAt = '2026-11-07';
  revision.sourcesCheckedAt = '7 noiembrie 2026';
  if (['asigurare-sisteme-irigatii', 'asigurare-serre-solarii'].includes(slug)) {
    revision.sources.push(['MOLDASIG: echipamente și riscuri agricole', 'https://moldasig.md/agricultural-risk-insurance']);
  }
}

Object.assign(articleRevisions, editorialLogistics20261108, editorialIndustry20261108, editorialLiability20261108, editorialProjects20261108);
Object.assign(articleRevisions, editorialRisks20261108);
Object.assign(articleRevisions, editorialDemand20261108);
Object.assign(articleRevisions, editorialRemaining20261109);
Object.assign(articleRevisions, editorialSearch20261109);
Object.assign(articleRevisions, editorialTech20261109);
Object.assign(articleRevisions, editorialEnergy20261110);
Object.assign(articleRevisions, editorialOperations20261111);
Object.assign(articleRevisions, editorialCatalog20261112);
applySeoContentReview20261121(articleRevisions);

export function renderArticleRevision(revision: ArticleRevision): string {
  const sources = revision.sources.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join('');
  return `${revision.body}
<h2>Următorul pas</h2>
<p><a href="/contact">Solicită o discuție cu ING Broker</a> pentru verificarea posibilităților de analiză și intermediere. Brokerul intermediază și explică opțiunile; acceptarea riscului, condițiile și soluționarea daunelor aparțin asigurătorului, conform contractului. Acest ghid nu confirmă disponibilitatea unui produs sau acoperirea unui caz.</p>
<p>Citește și: <a href="/news/${revision.related[0]}">${revision.related[1]}</a>.</p>
<h2>Surse și limitele informației</h2>
<ul>${sources}</ul>
<p>Surse consultate la ${revision.sourcesCheckedAt || (revision.updatedAt === '2026-10-16' ? '16 octombrie 2026' : '15 octombrie 2026')}. Listele de pregătire sunt recomandări editoriale, nu condiții ale unei polițe. Exemplele de produse aparțin furnizorilor citați; nu reprezintă o ofertă ING Broker. Pentru obligații legale sau o situație individuală este necesară verificarea de specialitate.</p>`;
}
