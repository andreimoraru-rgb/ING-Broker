import type { ArticleRevision } from './recoveredArticles';

// Individual Romanian revisions. Existing IDs, H1, intro, layout and locale
// releases are retained. This branch is a review candidate, not a release log.
const bnm = ['BNM: ce verifici în contractul de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'] as [string, string];
const pi = ['INTACT: prezentarea locală a răspunderii profesionale', 'https://intact.md/ro/services/about/professional-civil-liability'] as [string, string];
const car = ['INTACT: prezentarea lucrărilor de construcții și montaj', 'https://www.intact.md/ro/news/car-asigurare-constructii-montaj'] as [string, string];
const rcg = ['DONARIS VIG: răspundere civilă generală', 'https://donaris.md/ro/service/raspundere-civila-generala'] as [string, string];
const transport = ['GENERAL Asigurări: diferența dintre CMR și CARGO', 'https://general.md/cmr'] as [string, string];
const property = ['MOLDASIG: bunuri și întreruperea producției', 'https://moldasig.md/property-insurance-for-legal-persons'] as [string, string];

type Review = Pick<ArticleRevision, 'body' | 'seoTitle' | 'seoDescription' | 'sources'> & Pick<Partial<ArticleRevision>, 'title'>;
export const seoContentReview20261121: Record<string, Review> = {
  'asigurare-raspundere-profesionala': {
    seoTitle: 'Răspundere profesională Moldova: PI, IT și E&O | ING Broker',
    seoDescription: 'PI și E&O pentru servicii profesionale în Moldova: ce verifici la erori, contracte IT, preț, limite și acte. Diferența dintre PI și cyber.',
    sources: [bnm, pi],
    body: `<p><strong>Asigurarea de răspundere profesională privește pretențiile pentru prejudicii legate de erori sau omisiuni în serviciile declarate.</strong> PI înseamnă Professional Indemnity, iar E&amp;O înseamnă Errors and Omissions. Denumirile nu confirmă singure acoperirea: activitatea, persoanele, prejudiciile și perioadele acceptate se verifică în contract.</p>
<p>Pentru o firmă din Republica Moldova, punctul de plecare este serviciul prestat clientului. Un proiectant, un consultant și un dezvoltator software au livrabile diferite. O poliță potrivită unei profesii nu este automat potrivită celeilalte. Prezentarea locală INTACT descrie erori și omisiuni profesionale; condițiile unei oferte concrete rămân de verificat separat.</p>
<h2>PI pentru IT și software: ce trebuie analizat</h2>
<p>Dacă un client cere „PI insurance” sau „technology E&amp;O”, trimite cerința exactă, nu doar denumirea produsului. Descrie dacă firma dezvoltă aplicații, integrează sisteme, administrează infrastructură ori oferă consultanță. Precizează cine livrează rezultatul și ce obligații își asumă firma prin contract.</p>
<ul><li>Serviciile și livrabilele pentru care clientul solicită asigurare.</li><li>Limita cerută și moneda, fără a confunda valoarea contractului cu limita poliței.</li><li>Țările clienților, locul folosirii serviciului și jurisdicția contractului.</li><li>Subcontractorii, verificarea codului și procedura de acceptare a livrabilelor.</li><li>Data începerii lucrării, pretențiile primite și problemele deja cunoscute.</li></ul>
<p>Într-un exemplu ipotetic, clientul susține că o configurare greșită a aplicației i-a produs o pierdere financiară. Aceasta este o întrebare pentru analiza PI, nu o confirmare de despăgubire. O garanție contractuală de performanță sau o penalitate de întârziere nu devine asigurată doar fiindcă firma are o poliță.</p>
<h2>Răspundere profesională, cyber sau răspundere generală?</h2>
<table><thead><tr><th>Situația de analizat</th><th>Direcția de verificare</th></tr></thead><tbody><tr><td>Clientul reclamă o eroare în serviciul profesional</td><td>PI/E&amp;O, pentru activitatea și prejudiciul acceptate</td></tr><tr><td>Un incident de securitate afectează date sau sisteme</td><td><a href="/servicii/asigurare-cyber-moldova">Analiza riscurilor cyber</a>, fără includere automată în PI</td></tr><tr><td>Activitatea firmei afectează bunul unui vizitator</td><td><a href="/news/asigurare-raspundere-civila-generala">Răspunderea civilă generală</a>, după împrejurări și condiții</td></tr></tbody></table>
<p>Un incident poate ridica mai multe întrebări. Cere delimitarea dintre polițe și verifică eventualele suprapuneri sau goluri. Nu presupune că toate pierderile financiare ori toate incidentele informatice sunt incluse într-un singur contract.</p>
<h2>Cât costă asigurarea de răspundere profesională în Moldova?</h2>
<p>Nu există în acest ghid un tarif universal. Pentru ofertare contează serviciile, dimensiunea activității, tipurile de clienți, teritoriile, istoricul pretențiilor și limita solicitată. <strong>Prima de asigurare</strong> este suma plătită pentru asigurare. Compară prețul numai pentru aceleași servicii, perioade și condiții.</p>
<p><strong>Franșiza</strong> este partea din daună suportată de asigurat potrivit contractului. <strong>Excluderile</strong> sunt situațiile sau riscurile pentru care nu există acoperire. Verifică limita pentru o pretenție și totalul perioadei, dacă sunt diferențiate, precum și tratamentul cheltuielilor de apărare.</p>
<h2>Ce acte pregătești pentru discuția cu brokerul?</h2>
<p>Pregătește descrierea serviciilor, datele firmei, cerința de asigurare a clientului, un model de contract anonimizat și informațiile despre proiecte și pretenții. Lista finală se stabilește după activitate. Nu trimite cod sursă, parole, dosare ale clienților sau documente confidențiale într-un formular public.</p>
<p>Verifică cine trebuie numit asigurat: firma, specialistul, angajații ori alte persoane acceptate. La schimbarea asigurătorului, compară cronologia lucrărilor, data retroactivă și notificarea pretențiilor, dacă asemenea clauze există. O poliță nouă nu confirmă acoperirea unei reclamații deja cunoscute.</p>
<h2>Întrebări frecvente despre PI și E&amp;O</h2>
<h3>Asigurarea PI este potrivită pentru orice firmă IT?</h3><p>Nu automat. Serviciile efective, contractele, teritoriile și cerința clientului trebuie analizate. Acceptarea și condițiile sunt confirmate de asigurător pentru situația concretă.</p>
<h3>PI acoperă amenzile și penalitățile din contract?</h3><p>Nu le considera incluse implicit. Verifică separat excluderile și răspunderea suplimentară asumată față de client. O obligație contractuală nu este prin ea însăși o acoperire de asigurare.</p>
<h3>PI și cyber sunt aceeași asigurare?</h3><p>Nu. PI pornește de la serviciul profesional și pretenția clientului. Cyber privește riscurile informatice acceptate. Delimitarea se face după condițiile celor două produse.</p>
<h3>Ce fac dacă am primit deja o reclamație?</h3><p>Păstrează contractul, livrabilele, mesajele și cronologia. Urmează instrucțiunile și termenele de notificare din polița existentă. Cere sprijin juridic când este necesar; nu presupune acceptarea automată a daunei.</p>
<h3>Cine plătește despăgubirea?</h3><p>Asigurătorul analizează dosarul și plătește dacă sunt îndeplinite condițiile aplicabile. Insurance ING Broker SRL este broker, nu asigurător și nu garant al plății.</p>`,
  },
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
  'asigurare-constructii-montaj': {
    title: 'Asigurare construcții și montaj CAR/EAR',
    seoTitle: 'Asigurare construcții și montaj CAR/EAR Moldova | ING Broker',
    seoDescription: 'CAR/EAR pentru șantiere din Moldova: lucrări, montaj, terți, utilaje, preț și acte. Checklist înainte de semnare, fără tarife ipotetice.',
    sources: [bnm, car],
    body: `<p><strong>Asigurarea lucrărilor de construcții și montaj se analizează pentru proiectul, bunurile, perioada și riscurile acceptate în contract.</strong> CAR (Contractors' All Risks) este denumirea folosită pentru riscuri de construcții, iar EAR (Erection All Risks) pentru montaj. Expresia „all risks” nu înseamnă că orice pierdere este plătită: există excluderi, limite și condiții.</p>
<p>Ghidul ajută antreprenorii, beneficiarii și firmele de montaj din Republica Moldova să pregătească un dosar comparabil. Cerința din contractul de execuție, obligațiile legale ale participanților și acoperirea poliței sunt lucruri distincte. Pentru interpretarea unei obligații juridice se verifică actele aplicabile și documentele proiectului cu un specialist.</p>
<h2>Ce diferență este între CAR și EAR?</h2>
<p>Pentru o clădire în execuție, întrebările privesc lucrarea, materialele, amplasamentul și vecinătățile. Pentru montajul unei instalații, devin importante echipamentele, probele, testele și punerea în funcțiune. Denumirea ofertei nu este suficientă: cere confirmarea etapelor efective ale proiectului.</p>
<p>Pagina locală INTACT prezintă daune la lucrări, răspundere față de terți și opțiuni pentru perioada ulterioară predării. Nu toate componentele trebuie considerate incluse automat. Structura finală se verifică în oferta și anexele propuse pentru șantier.</p>
<h2>Ce verifici la lucrări, terți și utilaje?</h2>
<table><thead><tr><th>Componenta</th><th>Ce declari</th><th>Ce clarifici în ofertă</th></tr></thead><tbody><tr><td>Lucrări și materiale</td><td>Valoarea proiectului, etapele și materialele beneficiarului</td><td>Bunurile acceptate, cauzele de daună și excluderile</td></tr><tr><td>Răspundere față de terți</td><td>Clădiri vecine, acces public, rețele și operațiuni</td><td>Limita, persoanele considerate terți și condițiile speciale</td></tr><tr><td>Utilaje de șantier</td><td>Proprietarul, inventarul și valorile</td><td>Dacă sunt incluse și pentru ce situații</td></tr><tr><td>Probe și montaj</td><td>Calendarul testelor și echipamentele instalate</td><td>Începutul și sfârșitul protecției pentru fiecare etapă</td></tr><tr><td>Intervenții după recepție</td><td>Lucrările de remediere planificate</td><td>Existența, durata și conținutul unei extensii acceptate</td></tr></tbody></table>
<p>Discută separat incendiul, fenomenele naturale, furtul și daunele accidentale din execuție. Nu transforma această listă într-o enumerare de riscuri garantat incluse. Pentru săpături, vibrații, lucrări cu foc sau instalații aflate deja în funcțiune, descrie operațiunea concretă și cere răspunsul raportat la clauze.</p>
<h2>Ce nu trebuie presupus ca fiind acoperit?</h2>
<p>Verifică tratamentul defectului de proiectare sau execuție, costului refacerii lucrării necorespunzătoare, uzurii și defecțiunilor interne ale utilajelor. Separă prejudiciul accidental de obligația de a livra o lucrare conformă. Penalitățile, amenzile și pierderile din întârziere nu se consideră implicit incluse.</p>
<p>Polița CAR/EAR nu înlocuiește automat <a href="/news/asigurare-buna-executie">garanția de bună execuție</a>, <a href="/news/asigurare-raspundere-profesionala">răspunderea proiectantului</a> sau asigurarea utilajelor. Un termen de garanție din contractul lucrării nu este automat o perioadă de asigurare.</p>
<h2>Cât costă asigurarea unui șantier în Moldova?</h2>
<p>Prețul se confirmă după evaluarea proiectului. Pregătește valoarea lucrărilor și materialelor, amplasamentul, durata, stadiul actual, tehnologia, subcontractorii și istoricul daunelor. Pentru montaj, adaugă calendarul probelor și specificația echipamentelor. Un procent ipotetic publicat online nu este o ofertă pentru șantierul tău.</p>
<p>Compară prima de asigurare, adică suma plătită pentru asigurare, cu limitele și franșizele. Franșiza este partea din daună suportată de asigurat conform contractului. Verifică dacă diferă între riscuri, bunuri sau etape. Cere aceeași bază de comparație pentru fiecare ofertă.</p>
<h2>Checklist: actele și informațiile pentru analiză</h2>
<ol><li>Descrierea lucrărilor și adresa amplasamentului.</li><li>Contractul sau cerința de asigurare, cu documentele sensibile anonimizate inițial.</li><li>Devizul și împărțirea valorilor între lucrări, materiale și echipamente.</li><li>Calendarul execuției, probelor și recepțiilor, inclusiv etapele deja începute.</li><li>Rolurile beneficiarului, antreprenorului și subcontractorilor.</li><li>Vecinătățile, rețelele și măsurile de protecție relevante.</li><li>Inventarul utilajelor și cerințele finanțatorului, când există.</li><li>Daunele sau problemele deja cunoscute, fără omisiuni.</li></ol>
<p>Lista este orientativă, nu o cerință contractuală universală. După emitere, verifică datele, bunurile, perioadele și persoanele înscrise. O prelungire a șantierului ori o modificare a proiectului necesită verificarea poliței; nu presupune actualizarea automată.</p>
<h2>Ce faci dacă apare o daună pe șantier?</h2>
<p>Asigură protecția persoanelor și solicită ajutorul competent. Păstrează documentele, cronologia și dovezile obținute în siguranță. Urmează notificarea și aprobările din poliță. Brokerul poate sprijini comunicarea, dar asigurătorul analizează și soluționează cererea.</p>
<h2>Întrebări frecvente despre CAR/EAR</h2>
<h3>Este suficientă valoarea contractului pentru a primi prețul?</h3><p>Nu. Sunt necesare și informații despre lucrări, amplasament, perioadă, stadiu și riscuri. Prima și franșizele se confirmă prin oferta pentru proiectul concret.</p>
<h3>Lucrările începute sunt acceptate automat?</h3><p>Nu. Declară stadiul real și orice incident cunoscut. Cere verificarea posibilității de asigurare, a inspecției și a datei efective de început.</p>
<h3>Sunt incluși toți subcontractorii?</h3><p>Verifică persoanele asigurate și activitățile lor. Participarea la șantier nu dovedește singură includerea. Cerința din contract se compară cu documentele poliței.</p>
<h3>Polița acoperă toate obligațiile din perioada de garanție?</h3><p>Nu presupune echivalența. Eventuala extensie are perioada, evenimentele și excluderile proprii, care trebuie confirmate în scris.</p>
<h3>Unde găsesc prezentarea serviciului CAR/EAR?</h3><p>Consultă <a href="/servicii/asigurari-constructii-car-ear">pagina construcții și montaj</a>, apoi pregătește datele proiectului pentru analiza individuală. Prezentarea nu înlocuiește condițiile asigurătorului.</p>`,
  },
  'asigurare-flote-auto-corporate-moldova': {
    seoTitle: 'Asigurare flotă auto Moldova: CASCO, RCA și acte | ING Broker',
    seoDescription: 'Cum organizezi asigurarea flotei în Moldova: CASCO, RCA, Carte Verde, expirări, leasing și documente. Compară condițiile, nu doar prețul total.',
    sources: [bnm, transport],
    body: `<p><strong>Asigurarea flotei auto începe cu inventarul vehiculelor și utilizarea lor, nu cu promisiunea unei reduceri.</strong> RCA, Carte Verde, CASCO, CMR și CARGO răspund unor nevoi diferite. Administrarea comună a dosarului nu le transformă automat într-o singură poliță și nu înseamnă același tarif pentru toate vehiculele.</p>
<p>Ghidul este pentru companii din Republica Moldova cu autoturisme de serviciu, furgonete, camioane sau un parc mixt. Separă vehiculele agenților comerciali de livrări, transport de marfă și utilizare pe șantier. O descriere clară ajută compararea ofertelor și evidența expirărilor.</p>
<h2>Ce asigurări verifici pentru flota companiei?</h2>
<table><thead><tr><th>Produs</th><th>Întrebarea principală</th></tr></thead><tbody><tr><td>RCA</td><td>Care este documentul de răspundere auto pentru circulația în Moldova?</td></tr><tr><td>Carte Verde</td><td>Ce document este necesar pentru traseul și perioada deplasării externe?</td></tr><tr><td>CASCO</td><td>Ce riscuri pentru vehicul sunt acceptate și în ce condiții?</td></tr><tr><td>CMR</td><td>Cum este analizată răspunderea transportatorului pentru marfa altuia?</td></tr><tr><td>CARGO</td><td>Ce interes asupra mărfii și ce etape de transport sunt acceptate?</td></tr></tbody></table>
<p>Verifică separat utilizarea specială, țările de circulație, vehiculele în leasing și echipamentele suplimentare. Nu folosi o listă veche de țări ori un tarif istoric pentru a confirma valabilitatea unei polițe. Pentru transporturi citește <a href="/news/asigurari-transport-logistica-cmr-cargo-moldova">diferența dintre CMR și CARGO</a>.</p>
<h2>Inventarul flotei: ce informații pregătești?</h2>
<ul><li>Marca, modelul, anul, categoria și numărul de înmatriculare.</li><li>Proprietarul, leasingul ori dreptul de folosință.</li><li>Utilizarea, traseele și locul obișnuit de parcare.</li><li>Valoarea documentată pentru analiza CASCO.</li><li>Polițele actuale și data expirării fiecăreia.</li><li>Istoricul daunelor și achizițiile sau vânzările planificate.</li></ul>
<p>Un rând pentru fiecare vehicul este mai util decât un total al parcului. Nu transmite acte personale ale tuturor șoferilor fără o cerință justificată. Stabilește lista necesară și canalul pentru documente sensibile cu persoana care pregătește evaluarea.</p>
<h2>Cât costă asigurarea unei flote auto?</h2>
<p>Costul se verifică pe produse și pe vehicule. Pentru asigurările facultative, compară utilizarea, valorile, riscurile, teritoriile, limitele și istoricul daunelor. Numărul de vehicule nu dovedește singur dreptul la reducere. Nu extinde la RCA sau Carte Verde o condiție comercială discutată pentru alt produs.</p>
<p>Prima este suma plătită pentru asigurare. Franșiza este partea din daună suportată de asigurat conform contractului. La CASCO verifică dacă franșiza diferă după eveniment, dacă reparația are condiții speciale și cum se tratează echipamentele suplimentare. Un preț total mai mic nu dovedește o protecție echivalentă.</p>
<h2>Ce verifici înainte de a accepta oferta?</h2>
<ol><li>Aceleași vehicule, perioade și utilizări în toate ofertele comparate.</li><li>Riscurile acceptate și excluderile pentru fiecare produs.</li><li>Franșizele și limitele, cu explicația bazei de calcul.</li><li>Teritoriul și condițiile deplasărilor externe.</li><li>Procedura de adăugare, înlocuire sau scoatere a vehiculelor.</li><li>Pașii și termenele de notificare a unei daune.</li></ol>
<p>La un vehicul nou, trimiterea tabelului către broker nu confirmă singură intrarea în vigoare. Cere documentul și data efectivă înainte de utilizarea care necesită asigurare. Nu există în acest ghid o promisiune de emitere sau ofertare în 24 de ore.</p>
<h2>Reînnoirea și organizarea daunelor</h2>
<p>Păstrează un calendar comun al expirărilor și un responsabil pentru schimbările din parc. Datele nu se sincronizează automat doar fiindcă vehiculele aparțin aceleiași firme. Înainte de reînnoire, verifică inventarul, valorile, traseele și pretențiile încă în analiză.</p>
<p>Șoferii trebuie să poată găsi polițele valabile și instrucțiunile de notificare. Într-un incident, siguranța și ajutorul competent au prioritate. Păstrează documentele și urmează procedura asigurătorului; nu transfera automat termenele unui produs asupra altuia.</p>
<h2>Întrebări frecvente despre flotele auto</h2>
<h3>Primesc automat reducere dacă am mai multe mașini?</h3><p>Nu. Eligibilitatea și eventualele condiții comerciale se confirmă în oferta scrisă. Compară aceleași vehicule și condiții, fără procente promise în avans.</p>
<h3>Pot include vehicule proprii și în leasing?</h3><p>Prezintă ambele categorii în inventar. Dreptul de folosință, beneficiarul și cerințele finanțatorului se verifică pentru fiecare situație concretă.</p>
<h3>O singură poliță înlocuiește toate asigurările flotei?</h3><p>Nu presupune acest lucru. Administrarea comună nu schimbă obiectul produselor și nici condițiile documentelor emise.</p>
<h3>Ce trimit pentru prima discuție?</h3><p>Numărul și categoriile vehiculelor, utilizarea, țările de circulație, expirările și produsele dorite. Consultă și <a href="/oferte/flote-auto">pagina pentru analiza flotei companiei</a>.</p>`,
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
