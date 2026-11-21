import type {ArticleRevision} from './recoveredArticles';
const bnm:[string,string]=['BNM: verificarea condițiilor contractului de asigurare','https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'];

// Product-specific revisions; publication and live QA are tracked in the canonical ledger.
export const editorialLiability20261108:Record<string,ArticleRevision>={
  'asigurare-raspundere-profesionala': {
    title: 'Asigurarea de răspundere profesională în Moldova: ce acoperă polița PI și când este obligatorie',
    seoTitle: 'Răspundere profesională PI Moldova | ING Broker Moldova',
    author: 'Andrei Moraru, CFO Insurance ING Broker SRL',
    description: 'Asigurarea de răspundere profesională (PI, E&O) în Moldova: profesii cu obligație legală, claims-made, data retroactivă, excluderi și acte pentru ofertă.',
    updatedAt: '2026-11-21', sourcesCheckedAt: '21 noiembrie 2026', preserveLegacyLayout: true,
    related: ['asigurare-raspundere-civila-generala', 'Răspunderea civilă generală a companiei'],
    sources: [
      ['Legea nr. 69/2016 cu privire la organizarea activității notarilor, art. 11 și art. 56 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=125333&lang=ro'],
      ['Legea nr. 271/2017 privind auditul situațiilor financiare, art. 26 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=136835&lang=ro'],
      ['Legea nr. 1260/2002 cu privire la avocatură, art. 61 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=126609&lang=ro'],
      ['Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare, art. 4, art. 5 și art. 18 (BNM)', 'https://bnm.md/files/Lege%20asigur%C4%83ri%2092_2022%20(RO).pdf'],
      ['BNM: situația financiară a sectorului asigurărilor pentru anul 2025', 'https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025'],
      ['BNM: ce verifici în contractul de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'],
    ],
    body: `<p>Asigurarea de răspundere profesională (PI, Professional Indemnity, sau E&amp;O) acoperă pretențiile clienților pentru prejudicii financiare cauzate de erori, omisiuni sau neglijență în serviciile profesionale declarate. În Republica Moldova nu există o obligație generală, iar acolo unde există, obligația rezultă din legea specială a profesiei, de exemplu pentru notari.</p>

<h2>Ce acoperă asigurarea de răspundere profesională</h2>
<p>Polița preia, în limitele contractului, sumele pe care asiguratul le datorează unui client sau unui terț pentru o greșeală profesională: un calcul eronat, un termen ratat, o recomandare greșită, un proiect cu erori, o configurare de software care produce pierderi. Spre deosebire de răspunderea civilă generală, care privește în principal vătămările corporale și pagubele materiale produse terților, PI se concentrează pe pierderea financiară pură, adică paguba care nu provine dintr-un bun distrus sau dintr-o persoană vătămată.</p>
<p>Profesiile pentru care se discută cel mai des sunt consultanții în management și fiscalitate, contabilii și auditorii, firmele IT și dezvoltatorii de software, arhitecții și proiectanții, evaluatorii, agențiile de marketing și juriștii. Denumirea profesiei nu descrie singură riscul. Asigurătorul analizează serviciile efectiv prestate, contractele semnate, clienții și țările în care este folosit rezultatul.</p>

<h2>Când asigurarea PI este obligatorie prin lege</h2>
<p>Potrivit art. 5 alin. (2) din Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare, în asigurarea obligatorie raporturile, drepturile și obligațiile părților se stabilesc prin lege. Pentru răspunderea profesională nu există o lege generală, iar obligația apare, acolo unde există, în legea fiecărei profesii.</p>
<ul><li>Notarii: art. 56 alin. (1) din Legea nr. 69/2016 cu privire la organizarea activității notarilor obligă notarul să încheie contract de asigurare obligatorie de răspundere profesională, iar art. 11 lit. d) trece această obligație printre îndatoririle notarului. Suma minimă asigurată se stabilește de Consiliul Camerei Notariale (art. 56 alin. (2)).</li><li>Auditorii: art. 26 din Legea nr. 271/2017 privind auditul situațiilor financiare obligă entitatea de audit să asigure riscul de audit pentru prejudiciul cauzat printr-o opinie de audit necorespunzătoare. Riscul de audit se asigură, în condițiile art. 26, prin contract de asigurare a răspunderii civile profesionale și/sau prin constituirea de provizioane.</li><li>Avocații: art. 61 alin. (1) din Legea nr. 1260/2002 cu privire la avocatură prevede că avocatul este în drept să încheie contract de asigurare de răspundere civilă. Legea permite asigurarea, dar nu o impune.</li></ul>
<p>Pentru alte profesii, obligația se verifică în legea specială și în actele organului profesional, nu se presupune. Pentru consultanți, firme IT, agenții sau proiectanți, polița este cerută cel mai des prin contract: clientul corporativ, finanțatorul unui proiect sau autoritatea contractantă într-o achiziție publică stabilește o limită minimă, o perioadă și uneori jurisdicția acceptată.</p>

<h2>Piața asigurărilor din Moldova și autoritatea de supraveghere</h2>
<p>Potrivit Băncii Naționale a Moldovei, în 2025 cele 9 societăți de asigurare care activau în Republica Moldova au subscris prime brute de 3 351,2 milioane MDL, cu 3,1% mai mult decât în anul precedent. Raportul public al BNM nu prezintă distinct răspunderea profesională, deci ponderea acestei clase nu poate fi calculată din el. Potrivit art. 4 din Legea nr. 92/2022, autoritatea de supraveghere a pieței asigurărilor este Banca Națională a Moldovei, care ține și registrul asigurătorilor și al intermediarilor licențiați (art. 18).</p>

<h2>Baza claims-made, data retroactivă și perioada extinsă de raportare</h2>
<p>Polițele PI se emit de regulă pe bază claims-made: acoperirea se declanșează de pretenția formulată și notificată în perioada de asigurare, nu de momentul în care s-a produs eroarea. Polițele pe bază de eveniment (occurrence) leagă acoperirea de data faptei. Diferența devine vizibilă la reînnoire, la schimbarea asigurătorului și la încetarea activității.</p>
<table>
<thead><tr><th>Element</th><th>Ce înseamnă</th><th>Ce se verifică în poliță</th></tr></thead>
<tbody>
<tr><td>Bază claims-made</td><td>Contează data pretenției și a notificării ei</td><td>Definiția pretenției, termenul de notificare, tratamentul circumstanțelor anunțate</td></tr>
<tr><td>Bază occurrence</td><td>Contează data faptei care a produs prejudiciul</td><td>Cum se stabilește data faptei și termenul de prescripție în care poate fi formulată pretenția</td></tr>
<tr><td>Data retroactivă</td><td>Data de la care erorile anterioare sunt acceptate</td><td>Dacă se păstrează la reînnoire și la schimbarea asigurătorului</td></tr>
<tr><td>Perioada extinsă de raportare</td><td>Interval după expirare în care se pot notifica pretenții noi pentru fapte săvârșite înainte de expirare și după data retroactivă; de regulă nu adaugă o limită nouă</td><td>Durata, prima suplimentară, situațiile în care se activează (nereînnoire, încetarea activității)</td></tr>
<tr><td>Circumstanțe cunoscute</td><td>Fapte știute de asigurat înainte de începutul poliței</td><td>Declarația din chestionar; de regulă sunt excluse</td></tr>
</tbody>
</table>
<p>Exemplu ipotetic: o eroare de calcul făcută într-un raport din 2024 este reclamată de client în 2026. Pe bază claims-made se aplică, de regulă, polița în vigoare în 2026, în condițiile ei și cu condiția ca pretenția să fie notificată în perioada acestei polițe, ca data retroactivă să fie cel târziu data lucrării din 2024 și ca firma să nu fi cunoscut problema la încheierea poliței. Dacă la schimbarea asigurătorului data retroactivă a fost mutată în 2026, lucrarea din 2024 rămâne fără acoperire.</p>

<h2>Limite, cheltuieli de apărare și teritoriu</h2>
<p>Limita pe pretenție este plafonul pentru o singură pretenție sau pentru o serie de pretenții legate, după clauza de agregare din poliță. Limita agregată este totalul disponibil pentru întreaga perioadă de asigurare. După o daună mare, limita agregată se reduce pentru restul perioadei, dacă polița nu prevede reîntregirea. Nivelul limitelor se stabilește după cerințele clienților și după expunerea reală, nu doar după valoarea unui singur contract.</p>
<p>Cheltuielile de apărare (avocați, expertize, taxe de judecată) apar și atunci când pretenția este neîntemeiată. Se verifică dacă sunt incluse în limită, caz în care o reduc, sau acordate peste ea, dacă franșiza se aplică și lor, cine alege avocatul și dacă o tranzacție cu clientul cere acordul prealabil al asigurătorului.</p>
<p>Teritoriul arată unde este prestat serviciul, iar jurisdicția arată instanțele ale căror hotărâri sunt acceptate. O formulă frecventă este acoperirea mondială cu excepția SUA și Canadei. Pretențiile aduse în instanțele acestor state sau judecate după legea lor sunt acceptate, de regulă, doar cu acord separat al asigurătorului. Clauza de jurisdicție din contractul clientului se compară cu cea din poliță înainte de semnare.</p>

<h2>Ce acoperă de regulă o poliță PI și ce se exclude</h2>
<p>Tabelul descrie practica obișnuită de pe piață, nu condițiile unui produs anume. Riscurile incluse și excluderile se confirmă în propunerea concretă.</p>
<table>
<thead><tr><th>Situație</th><th>Ce acoperă de regulă</th><th>Ce se verifică / excluderi tipice</th></tr></thead>
<tbody>
<tr><td>Eroare sau omisiune într-un raport, calcul sau proiect</td><td>Prejudiciul financiar pretins de client și cheltuielile de apărare</td><td>Serviciul să fie declarat în poliță; obligațiile asumate contractual peste răspunderea legală</td></tr>
<tr><td>Termen ratat la o depunere sau declarație</td><td>Pierderea cauzată clientului prin întârziere</td><td>Tratamentul amenzilor și penalităților transferate de client asupra asiguratului</td></tr>
<tr><td>Software sau configurare care produce pierderi clientului</td><td>Pretenția pentru pierderea financiară</td><td>Delimitarea față de incidentele cyber; garanțiile de performanță și de nivel al serviciului</td></tr>
<tr><td>Proiect de arhitectură sau inginerie cu erori</td><td>Costurile de remediere pretinse de beneficiar</td><td>Vătămarea corporală și paguba materială, tratate adesea în altă poliță; refacerea propriei lucrări și disputele privind onorariul, excluse frecvent</td></tr>
<tr><td>Pierderea documentelor clientului</td><td>Uneori, costul refacerii lor</td><td>Dacă extensia există și în ce limită</td></tr>
<tr><td>Faptă intenționată sau fraudă a asiguratului</td><td>Nu este acoperită</td><td>Dacă polița protejează asociații nevinovați când fapta aparține unui angajat</td></tr>
</tbody>
</table>
<p>Excluderile întâlnite frecvent sunt actele intenționate, garanțiile de rezultat și penalitățile contractuale peste răspunderea legală, amenzile și sancțiunile aplicate asiguratului, circumstanțele cunoscute la încheiere, vătămarea corporală și paguba materială, cu excepția cazului în care polița le include expres, cum se întâmplă la profesiile medicale și la unele polițe pentru proiectanți, pretențiile între firme ale aceluiași grup și insolvența asiguratului.</p>

<h2>PI și asigurarea cyber</h2>
<p>PI pornește de la serviciul profesional și de la pretenția clientului. Asigurarea cyber privește incidentele informatice: atacuri, scurgeri de date, întreruperea sistemelor, costurile proprii de restaurare și de notificare, precum și răspunderea față de terți pentru date compromise. O firmă IT poate avea nevoie de ambele polițe, cu delimitarea scrisă a zonei comune. Riscurile informatice sunt prezentate pe pagina despre <a href="/servicii/asigurare-cyber-moldova">asigurarea cyber pentru companii</a>.</p>

<h2>Documentele pentru ofertă și procedura la daună</h2>
<ul><li>Chestionarul asigurătorului, completat și semnat.</li><li>Extrasul din Registrul de stat al persoanelor juridice.</li><li>Descrierea serviciilor și cifra de afaceri pe activități și pe țări.</li><li>Un model de contract cu clienții și cerința de asigurare primită.</li><li>Calificările specialiștilor și modul de lucru cu subcontractorii.</li><li>Istoricul pretențiilor și polița anterioară, cu data retroactivă.</li></ul>
<p>La primirea unei pretenții sau la aflarea unei circumstanțe care o poate produce, asigurătorul se anunță în scris, în termenul din poliță. Polițele PI prevăd, de regulă, că recunoașterea răspunderii sau o tranzacție cu clientul cer acordul prealabil al asigurătorului, iar nerespectarea condiției poate afecta plata. Se păstrează contractul, livrabilele, corespondența și cronologia lucrării.</p>

<h2>Rolul brokerului și al asigurătorului</h2>
<p>Brokerul analizează activitatea clientului, pregătește dosarul, cere oferte de la mai mulți asigurători și compară condițiile pe aceeași bază: servicii, persoane asigurate, data retroactivă, limite și excluderi. La daună, brokerul asistă la notificare și la comunicarea cu asigurătorul. Asigurătorul acceptă riscul, stabilește prima și condițiile și decide plata. Serviciul este descris pe pagina <a href="/servicii/asigurare-raspundere-profesionala">asigurare de răspundere profesională</a>.</p>
<p>Pentru proiectanți și diriginți de șantier, polița PI se discută împreună cu asigurarea lucrării, prezentată în ghidul despre <a href="/news/asigurare-constructii-montaj">asigurarea construcțiilor și montajului</a>. Pentru casele de expediție, răspunderea pentru serviciile de organizare a transportului se delimitează de răspunderea transportatorului, explicată în articolul despre <a href="/news/asigurari-transport-logistica-cmr-cargo-moldova">asigurarea CMR și cargo</a>.</p>

<h2>Întrebări frecvente despre asigurarea de răspundere profesională în Moldova</h2>
<h3>Este obligatorie asigurarea de răspundere profesională în Moldova?</h3><p>Nu există o obligație generală. Legea nr. 69/2016 o impune notarilor (art. 56 alin. (1)), iar Legea nr. 271/2017 obligă entitățile de audit să asigure riscul de audit prin asigurare și/sau provizioane (art. 26). Pentru avocați, Legea nr. 1260/2002 o permite fără să o impună. Pentru alte profesii, obligația poate rezulta din legea specială sau, mai des, din contract.</p>
<h3>Care este diferența dintre baza claims-made și baza occurrence?</h3><p>Pe bază claims-made, polița se aplică pretențiilor formulate și notificate în perioada de asigurare, cu condiția ca fapta să fie ulterioară datei retroactive. Pe bază occurrence, contează data faptei care a produs prejudiciul, chiar dacă pretenția apare după expirarea poliței, în limitele termenului de prescripție și ale condițiilor poliței. Asigurarea PI se emite, de regulă, pe bază claims-made.</p>
<h3>Ce este data retroactivă într-o poliță PI?</h3><p>Data retroactivă este momentul de la care erorile anterioare începutului poliței sunt acceptate, dacă pretenția apare în perioada de asigurare. Păstrarea ei la reînnoire și la schimbarea asigurătorului protejează lucrările din anii trecuți. Mutarea datei retroactive lasă fără acoperire serviciile prestate înainte de noua dată.</p>
<h3>Acoperă asigurarea PI amenzile și penalitățile din contract?</h3><p>Amenzile și sancțiunile aplicate asiguratului, garanțiile de rezultat și penalitățile asumate contractual peste răspunderea legală sunt excluderi frecvente. O amendă plătită de client din cauza unei erori a asiguratului poate fi pretinsă ca prejudiciu al clientului, iar tratamentul ei depinde de condițiile poliței și de lege.</p>
<h3>Asigurarea PI și asigurarea cyber sunt același produs?</h3><p>Nu. PI acoperă pretențiile clienților pentru erori în serviciul profesional. Asigurarea cyber privește incidentele informatice, cum sunt atacurile, scurgerile de date și întreruperea sistemelor, inclusiv costurile proprii ale firmei. O firmă IT poate avea nevoie de ambele, cu delimitarea scrisă a zonei în care se suprapun.</p>
<h3>Ce documente se cer pentru o ofertă de asigurare PI?</h3><p>De regulă, chestionarul asigurătorului, extrasul din registrul persoanelor juridice, descrierea serviciilor, cifra de afaceri pe activități și țări, un model de contract cu clienții, cerința de asigurare primită, istoricul pretențiilor și polița anterioară cu data retroactivă. Asigurătorul poate cere și calificările specialiștilor.</p>

<h2>Ofertă personalizată prin ING Broker</h2>
<p>ING Broker pregătește dosarul firmei de servicii și cere oferte de la mai mulți asigurători din Moldova. Acceptarea riscului, prima și condițiile se stabilesc de asigurător.</p>
<p><a href="/contact">Solicită o ofertă personalizată → ingbroker.md/contact</a></p>
<p>Insurance ING Broker SRL, str. Pan Halippa 9, MD-2009, mun. Chișinău. Telefon: +373 79 526 003, +373 69 526 003. E-mail: andrei.moraru@ingbroker.md. Activitate supravegheată de Banca Națională a Moldovei.</p>`
  },
 'asigurare-raspundere-civila-generala':{
  title:'Asigurarea de răspundere civilă generală',
  description:'Răspunderea civilă față de terți în Moldova: activități, spații, bunuri ale clienților, limite și notificarea unei pretenții. Ce verifici înainte de ofertare.',
  updatedAt:'2026-11-08',sourcesCheckedAt:'8 noiembrie 2026',preserveLegacyLayout:true,
  related:['asigurare-raspundere-profesionala','Răspunderea profesională pentru serviciile prestate'],
  sources:[bnm,['MOLDCARGO: răspunderea civilă față de terți','https://moldcargo.md/asigurari/raspundere-civila']],
  body:`<p>Asigurarea de răspundere civilă generală privește răspunderea companiei pentru prejudicii produse altor persoane, în activitățile și condițiile acceptate în poliță. Nu este asigurarea propriilor clădiri sau stocuri. Pentru o firmă din Republica Moldova, analiza începe cu locurile în care lucrează, operațiunile efectuate și persoanele care pot fi afectate.</p>
<p>Materialul este destinat magazinelor, atelierelor, operatorilor de servicii și altor companii care interacționează cu vizitatori, clienți ori vecini. Ajută pregătirea întrebărilor, fără să stabilească răspunderea într-un incident și fără să confirme acoperirea oricărui prejudiciu. Situația concretă se verifică după fapte, documentele contractuale și cadrul juridic aplicabil.</p>
<h2>Ce înseamnă un prejudiciu față de un terț</h2>
<p>În această discuție, terțul este o altă persoană față de cea asigurată, potrivit definițiilor poliței. Poate apărea o solicitare privind un bun deteriorat sau o vătămare. Identifică cine invocă prejudiciul, cui îi aparține bunul și ce operațiune a companiei este vizată. Relațiile dintre părți trebuie descrise, nu presupuse.</p>
<p>Pagina publică MOLDCARGO prezintă prejudicii materiale și vătămări corporale în cadrul răspunderii față de terți. Această prezentare este un reper local, nu o confirmare că toate persoanele și situațiile sunt acceptate. Cere definițiile din propunerea analizată, inclusiv delimitarea angajaților, colaboratorilor și persoanelor aflate în aceeași relație contractuală.</p>
<h2>Asigurarea bunurilor firmei are un alt obiect</h2>
<p>Dacă un incident afectează atât bunurile companiei, cât și bunurile vecinului, separă cele două categorii de pierderi. Pentru propriul mobilier, echipament sau stoc contează analiza asigurării de bunuri. Pentru pretenția vecinului trebuie clarificată răspunderea firmei și protecția prevăzută de polița relevantă.</p>
<p>Exemplul este o metodă de organizare a întrebărilor, nu o promisiune privind un dosar de daună. Folosirea aceluiași sediu și existența unei cauze comune nu transformă două contracte în acoperiri identice. Cere o comparație în care obiectul fiecărei propuneri și punctele neconfirmate sunt vizibile.</p>
<h2>Descrie toate activitățile care pot afecta alte persoane</h2>
<p>Înregistrează operațiunile obișnuite, inclusiv livrarea, montajul, întreținerea și intervențiile la sediul clientului. Un magazin care doar vinde produse nu are exact același profil ca unul care și instalează echipamente. Descrierea comercială scurtă de pe un bon sau o factură poate să nu fie suficientă pentru evaluare.</p>
<p>Arată activitățile sezoniere, lucrările noi și serviciile realizate de subcontractori. Dacă firma folosește utilaje mobile sau efectuează lucrări în spații comune, include aceste detalii. Nu declara o activitate redusă doar pentru a primi un preț mai mic. Propunerea trebuie analizată pe baza operațiunilor reale și a amplasamentelor relevante.</p>
<h2>Sediul, spațiile comune și lucrările la client</h2>
<p>Pregătește o descriere a intrării, zonelor accesibile publicului, căilor de circulație și spațiilor învecinate. Notează cine administrează zonele comune și cine efectuează lucrările de întreținere. Aceste informații ajută analiza, dar nu stabilesc automat vinovăția unei părți într-o situație concretă.</p>
<p>Pentru echipele care lucrează în afara sediului, explică operațiunile și durata lor. Verifică dacă propunerea acceptă asemenea lucrări, în ce teritoriu și cu ce delimitări. O poliță descrisă prin adresa magazinului nu dovedește singură protecția tuturor intervențiilor făcute la clienți sau în alte amplasamente.</p>
<h2>Bunurile clienților aflate în grijă se discută separat</h2>
<p>Un atelier, un depozit sau o firmă de service poate primi bunuri care aparțin altora. Arată ce bunuri sunt preluate, unde sunt păstrate și în baza căror documente. Identifică diferența dintre un bun al vizitatorului aflat lângă zona de lucru și un bun predat expres firmei pentru o operațiune.</p>
<p>Cere clarificarea situațiilor în care bunurile altora se află în păstrare, folosință ori prelucrare. Nu considera că termenul „terți” rezolvă singur toate aceste cazuri. Propunerea poate necesita delimitări sau o analiză distinctă. Păstrează evidența primirii și stării bunului, fără fotografii sau date personale colectate inutil.</p>
<h2>Produsele livrate și lucrările terminate</h2>
<p>Descrie dacă riscul discutat apare în timpul activității la sediu, în timpul montajului sau după predarea lucrării. Menționează verificarea rezultatului, documentele de recepție și instrucțiunile date clientului. Momentul în care apare o pretenție și cauza invocată pot ridica întrebări diferite față de incidentul petrecut în magazin.</p>
<p>Întreabă dacă sunt necesare analize separate pentru răspunderea legată de produse, de lucrări terminate sau de servicii profesionale. Nu presupune includerea din simpla denumire „răspundere civilă generală”. Pentru o comparație corectă, cere în scris delimitarea acestor situații și păstrează răspunsurile împreună cu propunerea.</p>
<h2>Nu confunda răspunderea generală cu alte asigurări</h2>
<p>RCA privește un cadru distinct de răspundere auto. Răspunderea profesională analizează serviciile profesionale declarate. Pretențiile angajaților, conducerii companiei ori cele legate de incidente cyber pot necesita alte verificări. Identifică operațiunea și persoana afectată înainte de a decide ce document trebuie citit.</p>
<p>O poliță nu ar trebui prezentată ca soluție pentru toate obligațiile firmei. Pentru un proiect de construcții, de exemplu, compară cerințele beneficiarului cu asigurările lucrărilor și răspunderea analizată. O listă de denumiri comerciale nu confirmă continuitatea protecției între toate activitățile, perioadele și persoanele implicate.</p>
<h2>Cum compari limita, franșiza și prima</h2>
<p>Prima de asigurare este suma plătită pentru asigurare. Cere comparația pe aceleași activități, amplasamente, perioade și categorii de prejudicii solicitate. Verifică limita aplicabilă unui eveniment și totalul perioadei, dacă propunerea le diferențiază. Explică dacă o singură operațiune poate afecta mai multe persoane sau bunuri.</p>
<p>Franșiza este partea din daună suportată de asigurat potrivit contractului. Citește și excluderile, adică situațiile pentru care nu există acoperire. Solicită un exemplu ipotetic de calcul și tratamentul cheltuielilor de apărare. Nici valoarea limitei, nici exemplul numeric nu confirmă o despăgubire pentru un eveniment real.</p>
<h2>Prevenirea și evidența incidentelor</h2>
<p>Păstrează un mod clar de raportare internă pentru defecțiuni și pericole observate. Documentează întreținerea și intervențiile relevante. Un covor deteriorat, o instalație cu scurgeri sau un acces blocat sunt probleme operaționale care trebuie evaluate și remediate de persoanele competente, nu lăsate în seama unei viitoare despăgubiri.</p>
<p>Aceste recomandări nu reprezintă o certificare de siguranță și nu înlocuiesc cerințele legale sau tehnice aplicabile firmei. Scopul lor este organizarea informației și identificarea responsabililor. Descrie asigurătorului situația reală, inclusiv problemele cunoscute, fără afirmații de tipul „risc zero” sau documente de verificare inventate.</p>
<h2>Proprietarul spațiului și chiriașul au roluri de clarificat</h2>
<p>Pentru un spațiu închiriat, citește prevederile privind întreținerea, instalațiile și accesul publicului. Identifică lucrările efectuate de proprietar, de chiriaș sau de administratorul clădirii. O denumire precum „sediu închiriat” nu arată cine a executat o intervenție și nici cine răspunde pentru un prejudiciu invocat.</p>
<p>Prezintă împărțirea operațională asigurătorului și cere delimitarea riscurilor analizate. Nu modifica prin articol obligațiile părților și nu presupune că polița clădirii protejează automat activitatea chiriașului. În cazul unui incident, stabilirea răspunderii necesită analiza faptelor și a documentelor, cu sprijin juridic când situația o cere.</p>
<h2>Actualizează analiza când afacerea se schimbă</h2>
<p>Un punct de vânzare nou, o extindere a programului sau introducerea serviciului de montaj poate schimba descrierea activității. Păstrează un responsabil intern pentru asemenea actualizări și solicită verificarea condițiilor înainte de noua operațiune. Evită reînnoirea automată după fișa veche dacă firma lucrează deja în alte spații sau cu alte categorii de clienți.</p>
<h2>Fișa companiei pentru o analiză de răspundere civilă</h2>
<ul><li>Activitățile efective și serviciile secundare.</li><li>Sediile, spațiile comune și intervențiile în alte locuri.</li><li>Tipurile de vizitatori, clienți și parteneri care pot fi afectați.</li><li>Bunurile altora primite pentru păstrare, reparație sau prelucrare.</li><li>Lucrările subcontractate și modul de coordonare.</li><li>Produsele livrate și operațiunile efectuate după vânzare.</li><li>Incidentele și pretențiile cunoscute, prezentate factual.</li><li>Limitele solicitate și cerințele din contractele cu clienții.</li></ul>
<p>În prima etapă poți organiza informațiile pe categorii, fără liste nominale de vizitatori sau copii ale documentelor clienților. Transmite numai datele necesare prin canalul stabilit. Fișa este o recomandare editorială de pregătire, nu un formular care confirmă acceptarea riscului sau un document contractual de asigurare.</p>
<h2>După un incident: notificare și păstrarea faptelor</h2>
<p>Prioritatea este siguranța persoanelor și oprirea agravării situației, cu sprijinul serviciilor competente când este necesar. Înregistrează faptele și păstrează documentele relevante. Consultă procedura și termenele poliței existente. Nu prelua automat un termen publicat pentru alt produs și nu modifica ulterior dovezile pentru a susține o anumită explicație.</p>
<p>Cere clarificarea modului de gestionare a pretenției, a implicării avocatului și a comunicării cu persoana afectată. Nu considera că o înțelegere comercială sau plata făcută din inițiativă proprie va fi rambursată automat. Brokerul poate ajuta la organizarea informațiilor; asigurătorul analizează dauna în limitele documentelor aplicabile.</p>
<h2>Întrebări frecvente despre răspunderea față de terți</h2>
<h3>Polița bunurilor firmei acoperă și paguba vecinului?</h3><p>Nu presupune echivalența. Propriile bunuri și răspunderea pentru prejudiciul altuia trebuie delimitate și verificate în documentele relevante.</p>
<h3>Este protejat orice bun primit de la client?</h3><p>Cere analiza bunurilor încredințate și a operațiunii efectuate. Prezența lor în sediu nu confirmă singură includerea în poliță.</p>
<h3>Lucrările la client sunt incluse automat?</h3><p>Verifică activitatea, teritoriul și amplasamentele acceptate. Prezintă operațiunile reale, inclusiv montajul și întreținerea.</p>
<h3>Cine decide dacă incidentul este despăgubit?</h3><p>Asigurătorul soluționează dosarul potrivit contractului și cadrului aplicabil. Brokerul nu trebuie prezentat ca plătitor al despăgubirii sau garant al rezultatului.</p>`
 }
};
