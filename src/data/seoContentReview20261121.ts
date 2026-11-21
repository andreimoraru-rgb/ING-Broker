import type { ArticleRevision } from './recoveredArticles';

// Individual Romanian revisions. Existing IDs, H1, intro, layout and locale
// releases are retained. This branch is a review candidate, not a release log.
const bnm = ['BNM: ce verifici în contractul de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'] as [string, string];
const rcg = ['DONARIS VIG: răspundere civilă generală', 'https://donaris.md/ro/service/raspundere-civila-generala'] as [string, string];
const property = ['MOLDASIG: bunuri și întreruperea producției', 'https://moldasig.md/property-insurance-for-legal-persons'] as [string, string];

type Review = Pick<ArticleRevision, 'body' | 'seoTitle' | 'seoDescription' | 'sources'> & Pick<Partial<ArticleRevision>, 'title'>;
export const seoContentReview20261121: Record<string, Review> = {
  'asigurare-raspundere-civila-generala': {
    seoTitle: 'Răspundere civilă generală Moldova: firme | ING Broker',
    seoDescription: 'Asigurarea răspunderii față de terți în Moldova: bunuri ale clienților, vizitatori, lucrări la client, preț și documente pentru analiza firmei.',
    sources: [bnm, rcg],
    body: `<p><strong>Asigurarea de răspundere civilă generală privește pretențiile altor persoane pentru prejudicii legate de activitatea companiei, în condițiile acceptate în poliță.</strong> Nu este asigurarea propriilor clădiri sau stocuri și nu înlocuiește automat răspunderea auto, profesională ori riscurile cyber.</p>
<p>Pentru un magazin, atelier, depozit sau prestator de servicii din Moldova, analiza începe cu activitățile și persoanele care pot fi afectate. Un terț este o altă persoană față de asigurat, potrivit definițiilor contractului. Încadrarea concretă și răspunderea nu se stabilesc numai din denumirea poliței.</p>
<h2>Ce situații merită discutate înainte de ofertare?</h2>
<p>O instalație din spațiul firmei poate afecta bunurile unui vecin. O intervenție la client poate deteriora un obiect aflat în apropiere. Un vizitator poate formula o pretenție după un incident în zona accesibilă publicului. Acestea sunt exemple ipotetice pentru evaluare, nu cazuri reale și nu promisiuni de acoperire.</p>
<p>Prezentarea DONARIS VIG descrie vătămări corporale și pagube materiale față de terți, cu delimitări pentru utilizarea vehiculelor și activitatea de transportator. Acesta este un exemplu local de produs, nu o regulă identică pentru toate polițele. Cere definițiile, excluderile și activitățile acceptate în propunerea firmei tale.</p>
<h2>Ce verifici în oferta de răspundere civilă?</h2>
<table><thead><tr><th>Element</th><th>Întrebarea pentru ofertă</th></tr></thead><tbody><tr><td>Activitatea</td><td>Sunt descrise vânzarea, livrarea, montajul și întreținerea efectiv prestate?</td></tr><tr><td>Amplasamentele</td><td>Analiza include sediul, spațiile comune și lucrările la client?</td></tr><tr><td>Persoanele și bunurile</td><td>Cine este terț? Cum sunt tratate bunurile primite în păstrare sau reparație?</td></tr><tr><td>Limitele</td><td>Ce plafon se aplică unui eveniment și întregii perioade?</td></tr><tr><td>Costurile</td><td>Care sunt franșiza, cheltuielile de apărare și excluderile?</td></tr></tbody></table>
<h2>Bunurile clienților și lucrările terminate sunt incluse?</h2>
<p>Nu presupune includerea. Un bun predat expres pentru reparație sau depozitare poate avea un tratament diferit față de bunul unui vizitator. Precizează ce primește firma, în baza căror documente și la ce valoare maximă. Cere delimitarea bunurilor încredințate, folosite ori prelucrate.</p>
<p>Separă incidentul din timpul montajului de o pretenție apărută după predarea lucrării. Produsele livrate, lucrările terminate și activitățile subcontractate necesită întrebări distincte. Pentru șantiere citește și <a href="/news/asigurare-constructii-montaj">ghidul CAR/EAR pentru construcții și montaj</a>.</p>
<h2>De ce depinde prețul?</h2>
<p>Prima de asigurare, adică suma plătită pentru asigurare, se confirmă după analiza activității. Pregătește informații despre amplasamente, operațiuni, lucrări la clienți, istoricul pretențiilor și limita cerută. Nu compara două prețuri dacă ofertele descriu activități sau limite diferite.</p>
<p>Franșiza este partea din daună suportată de asigurat conform contractului. Citește și excluderile, adică situațiile fără acoperire. O primă mai mică poate veni cu o franșiză mai mare sau cu mai puține operațiuni acceptate. Cere diferențele în scris.</p>
<h2>Documentele pentru analiza unei companii din Moldova</h2>
<ul><li>Descrierea activităților și a punctelor de lucru.</li><li>Lucrările efectuate la clienți și operațiunile subcontractate.</li><li>Bunurile altora primite în grijă, cu valori și operațiuni descrise.</li><li>Cerințele de asigurare din contractele comerciale.</li><li>Incidentele și pretențiile cunoscute, prezentate factual.</li><li>Polițele existente și limitele solicitate.</li></ul>
<p>Pentru spații închiriate, explică cine administrează instalațiile și zonele comune. Polița proprietarului nu dovedește automat protecția activității chiriașului. Pentru prima discuție sunt preferabile descrieri și documente anonimizate; datele sensibile se transmit prin canalul stabilit.</p>
<h2>Ce faci după un incident?</h2>
<p>Prioritizează siguranța și ajutorul competent. Păstrează faptele, documentele și fotografiile obținute în siguranță, apoi urmează procedura poliței. Verifică înaintea unei înțelegeri, reparații ori plăți din inițiativă proprie dacă sunt necesare aprobări. Nu există un termen universal de notificare valabil pentru orice produs.</p>
<h2>Întrebări frecvente despre răspunderea generală</h2>
<h3>Polița bunurilor firmei acoperă și paguba vecinului?</h3><p>Nu presupune acest lucru. Dauna la bunurile proprii și răspunderea pentru paguba altuia sunt analize diferite. Verifică secțiunile și condițiile contractelor relevante.</p>
<h3>Este inclus orice client care intră în sediu?</h3><p>Definiția terțului, activitatea, amplasamentul și împrejurările incidentului se verifică în poliță. Prezența în sediu nu confirmă singură acoperirea.</p>
<h3>Răspunderea generală înlocuiește PI pentru consultanți sau IT?</h3><p>Nu. Pentru erori ale serviciului profesional este necesară <a href="/news/asigurare-raspundere-profesionala">analiza răspunderii profesionale</a>. Obiectele și excluderile produselor nu sunt identice.</p>
<h3>Poate brokerul garanta despăgubirea?</h3><p>Nu. Brokerul sprijină analiza și comunicarea. Asigurătorul soluționează cererea potrivit contractului și cadrului aplicabil.</p>`,
  },
  'asigurare-pierdere-profit': {
    seoTitle: 'Întreruperea activității și profitul: Moldova | ING Broker',
    seoDescription: 'Asigurarea întreruperii activității în Moldova: legătura cu bunurile, perioada de revenire, costuri, documente și limite. Fără profit garantat.',
    sources: [bnm, property],
    body: `<p><strong>Asigurarea întreruperii activității privește consecințele financiare ale unei opriri prevăzute în contract.</strong> Nu garantează vânzările și nu compensează automat orice scădere a profitului. Analiza începe cu evenimentul declanșator, bunurile de care depinde firma și timpul documentat necesar revenirii.</p>
<p>Pentru producători, depozite și alte companii din Moldova, repararea clădirii sau utilajului este o problemă diferită de reluarea afacerii. Pagina locală MOLDASIG prezintă întreruperea producției ca supliment la asigurarea bunurilor, legat de evenimentele acceptate. Oferta concretă stabilește dacă există o asemenea componentă și ce include.</p>
<h2>Asigurarea bunurilor include automat pierderea profitului?</h2>
<p>Nu presupune includerea. Cere identificarea expresă a componentei financiare, a sumei, perioadei și bazei de calcul. O valoare înscrisă pentru hală sau linia de producție nu confirmă singură protecția rezultatului financiar. Citește și <a href="/news/asigurare-utilaje-industriale">analiza utilajelor industriale</a>.</p>
<p>Într-un exemplu ipotetic, o linie de ambalare este oprită după o daună. Pe lângă reparație, pot fi necesare livrarea unei piese, montajul, probele și refacerea comenzilor. Acest exemplu ajută pregătirea dosarului; nu reprezintă un client real sau confirmarea unei despăgubiri.</p>
<h2>Patru întrebări înainte de ofertare</h2>
<table><thead><tr><th>Întrebarea</th><th>Ce pregătești</th></tr></thead><tbody><tr><td>Ce eveniment poate opri activitatea?</td><td>Bunul afectat, amplasamentul și legătura cu dauna materială analizată</td></tr><tr><td>Ce pierdere financiară se măsoară?</td><td>Definiția contractuală și datele verificate de contabilitate</td></tr><tr><td>Cât durează revenirea?</td><td>Calendarul reparației, aprovizionării, probelor și repornirii</td></tr><tr><td>Ce rămâne în sarcina firmei?</td><td>Franșiza, limitele, excluderile și cheltuielile neacceptate</td></tr></tbody></table>
<p>Cifra de afaceri, încasările și profitul contabil nu sunt sinonime. Dacă oferta folosește „profit brut asigurat” sau alt termen financiar, cere explicația definiției și verificarea datelor de către responsabilul financiar. Nu calcula singur suma asigurată dintr-o formulă găsită într-un articol general.</p>
<h2>Perioada de indemnizare și calendarul de revenire</h2>
<p>Perioada de indemnizare este intervalul relevant pentru calculul pierderii în condițiile contractului. Nu o confunda cu durata poliței. Cere exemple pe calendarul firmei și verifică eventualele perioade de așteptare sau alte delimitări.</p>
<ol><li>Evaluarea tehnică a bunului și alegerea reparației sau înlocuirii.</li><li>Confirmarea furnizorului, pieselor și termenului de livrare.</li><li>Pregătirea spațiului, montajul și probele.</li><li>Refacerea stocurilor, echipei și comenzilor.</li><li>Revenirea la nivelul de activitate analizat.</li></ol>
<p>Pentru fiecare etapă, notează responsabilul și documentul pe care se bazează estimarea. Un utilaj de rezervă sau o locație alternativă poate ajuta continuitatea, fără să confirme automat rambursarea costurilor respective.</p>
<h2>Ce documente financiare și tehnice pregătești?</h2>
<ul><li>Veniturile și cheltuielile pe perioade comparabile, cu explicația sezonalității.</li><li>Inventarul bunurilor esențiale și amplasamentele.</li><li>Estimări documentate pentru reparație, livrare și repornire.</li><li>Contractele relevante pentru spații, utilaje și servicii esențiale.</li><li>Costurile care continuă, cele care se reduc și cheltuielile suplimentare posibile.</li><li>Planul de continuitate și alternativele disponibile, dacă există.</li></ul>
<p>Lista este pentru pregătire, nu o cerință universală. Pentru prima discuție ajung o descriere a procesului critic și o listă a informațiilor disponibile. Situațiile financiare și contractele confidențiale se transmit numai prin canalul stabilit.</p>
<h2>Furnizori, energie și lipsa comenzilor</h2>
<p>Firma poate avea bunurile intacte și totuși să nu poată lucra. Lipsa energiei, o problemă la furnizor sau pierderea unui client nu se includ automat în aceeași explicație cu o daună la bunurile proprii. Descrie dependența și cere confirmarea expresă a oricărei extensii discutate.</p>
<p>Asigurarea nu înlocuiește contractele bine pregătite, întreținerea și măsurile de continuitate. Pentru bunuri, spații și procesul de producție consultă și <a href="/property-assets">pagina bunurilor companiei</a>.</p>
<h2>Cât costă asigurarea întreruperii activității?</h2>
<p>Prima, adică suma plătită pentru asigurare, se stabilește după analiza activității, amplasamentelor, bunurilor, datelor financiare și perioadelor solicitate. Compară oferte pe aceeași bază. Franșiza este partea din daună suportată de asigurat potrivit contractului; verifică și excluderile, adică situațiile fără acoperire.</p>
<h2>Întrebări frecvente despre întreruperea activității</h2>
<h3>Este suficient că vânzările au scăzut?</h3><p>Nu. Trebuie verificat evenimentul prevăzut în poliță și legătura cu pierderea cerută. O perioadă comercială slabă nu este automat un eveniment acceptat.</p>
<h3>Se plătesc toate cheltuielile din perioada de oprire?</h3><p>Nu presupune acest lucru. Categoriile de costuri, limitele și aprobările necesare se verifică în contract. Păstrează documentele și explicația fiecărei cheltuieli.</p>
<h3>Ce fac dacă activitatea s-a oprit deja?</h3><p>Prioritizează siguranța, urmează notificarea din polița existentă și păstrează cronologia tehnică și financiară. O poliță nouă nu confirmă protecția unui eveniment deja produs.</p>
<h3>Cine stabilește despăgubirea?</h3><p>Asigurătorul analizează dosarul conform condițiilor aplicabile. Brokerul poate sprijini pregătirea informațiilor și comunicarea, fără să garanteze acceptarea sau suma plătită.</p>`,
  },
};

export function applySeoContentReview20261121(revisions: Record<string, ArticleRevision>) {
  for (const [slug, update] of Object.entries(seoContentReview20261121)) {
    if (!revisions[slug]) throw new Error(`Missing existing article: ${slug}`);
    Object.assign(revisions[slug], update, { updatedAt: '2026-11-21', sourcesCheckedAt: '21 noiembrie 2026' });
  }
}
