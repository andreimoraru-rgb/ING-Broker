import type {ArticleRevision} from './recoveredArticles';
const bnm:[string,string]=['BNM: verificarea condițiilor contractului de asigurare','https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'];

// Product-specific revisions; publication and live QA are tracked in the canonical ledger.
export const editorialLiability20261108:Record<string,ArticleRevision>={
  'asigurare-raspundere-profesionala': {
    title: 'Asigurarea de răspundere profesională în Moldova: ce acoperă polița PI și când este obligatorie',
    seoTitle: 'Răspundere profesională PI Moldova | ING Broker Moldova',
    author: 'Andrei Moraru, CFO Insurance ING Broker SRL',
    description: 'Asigurarea de răspundere profesională (PI, E&O) în Moldova: profesii cu obligație legală, claims-made, data retroactivă, excluderi și acte pentru ofertă.',
    updatedAt: '2026-11-22', sourcesCheckedAt: '22 noiembrie 2026', preserveLegacyLayout: true,
    related: ['asigurare-raspundere-civila-generala', 'Răspunderea civilă generală a companiei'],
    sources: [
      ['Legea nr. 69/2016 cu privire la organizarea activității notarilor, art. 11 și art. 56 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=125333&lang=ro'],
      ['Legea nr. 271/2017 privind auditul situațiilor financiare, art. 26 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=136835&lang=ro'],
      ['Legea nr. 1260/2002 cu privire la avocatură, art. 61 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=126609&lang=ro'],
      ['Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare, art. 4, art. 5 și art. 18 (BNM)', 'https://bnm.md/files/Lege%20asigur%C4%83ri%2092_2022%20(RO).pdf'],
      ['Codul civil al Republicii Moldova nr. 1107/2002, art. 1851, 1875 și 1878 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=150498&lang=ro'],
      ['BNM: situația financiară a sectorului asigurărilor pentru anul 2025', 'https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025'],
      ['BNM: ce verifici în contractul de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'],
    ],
    body: `<p>Asigurarea de răspundere profesională (PI, Professional Indemnity, sau E&amp;O) acoperă pretențiile clienților pentru prejudicii financiare cauzate de erori, omisiuni sau neglijență în serviciile profesionale declarate. În Republica Moldova nu există o obligație generală, iar acolo unde există, obligația rezultă din legea specială a profesiei, de exemplu pentru notari.</p>

<h2>Ce acoperă asigurarea de răspundere profesională</h2>
<p>Polița preia, în limitele contractului, sumele pe care asiguratul le datorează unui client sau unui terț pentru o greșeală profesională: un calcul eronat, un termen ratat, o recomandare greșită, un proiect cu erori, o configurare de software care produce pierderi. Spre deosebire de răspunderea civilă generală, care privește în principal vătămările corporale și pagubele materiale produse terților, PI se concentrează pe pierderea financiară pură, adică paguba care nu provine dintr-un bun distrus sau dintr-o persoană vătămată.</p>
<p>Profesiile pentru care se discută cel mai des sunt consultanții în management și fiscalitate, contabilii și auditorii, firmele IT și dezvoltatorii de software, arhitecții și proiectanții, evaluatorii, agențiile de marketing și juriștii. Asigurătorul analizează serviciile efectiv prestate, contractele semnate, clienții și țările în care este folosit rezultatul.</p>

<h2>Când asigurarea PI este obligatorie prin lege</h2>
<p>Potrivit art. 5 alin. (2) din Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare, în asigurarea obligatorie raporturile, drepturile și obligațiile părților se stabilesc prin lege. Pentru răspunderea profesională nu există o lege generală, iar obligația apare, acolo unde există, în legea fiecărei profesii.</p>
<ul><li>Notarii: art. 56 alin. (1) din Legea nr. 69/2016 cu privire la organizarea activității notarilor obligă notarul să încheie contract de asigurare obligatorie de răspundere profesională, iar art. 11 lit. d) trece această obligație printre îndatoririle notarului. Suma minimă asigurată se stabilește de Consiliul Camerei Notariale (art. 56 alin. (2)).</li><li>Auditorii: art. 26 din Legea nr. 271/2017 privind auditul situațiilor financiare obligă entitatea de audit să asigure riscul de audit pentru prejudiciul cauzat printr-o opinie de audit necorespunzătoare. Riscul de audit se asigură, în condițiile art. 26, prin contract de asigurare a răspunderii civile profesionale și/sau prin constituirea de provizioane.</li><li>Avocații: art. 61 alin. (1) din Legea nr. 1260/2002 cu privire la avocatură prevede că avocatul este în drept să încheie contract de asigurare de răspundere civilă. Legea permite asigurarea, dar nu o impune.</li></ul>
<p>Pentru alte profesii, obligația se verifică în legea specială și în actele organului profesional, nu se presupune. Pentru consultanți, firme IT, agenții sau proiectanți, polița este cerută cel mai des prin contract: clientul corporativ, finanțatorul unui proiect sau autoritatea contractantă într-o achiziție publică stabilește o limită minimă, o perioadă și uneori jurisdicția acceptată.</p>

<h2>Piața asigurărilor din Moldova și autoritatea de supraveghere</h2>
<p>Potrivit Băncii Naționale a Moldovei, în 2025 cele 9 societăți de asigurare care activau în Republica Moldova au subscris prime brute de 3 351,2 milioane MDL, cu 3,1% mai mult decât în anul precedent. Raportul BNM nu prezintă distinct răspunderea profesională. Potrivit art. 4 din Legea nr. 92/2022, autoritatea de supraveghere a pieței asigurărilor este Banca Națională a Moldovei, care ține și registrul asigurătorilor și al intermediarilor licențiați (art. 18).</p>

<h2>Baza claims-made, data retroactivă și perioada extinsă de raportare</h2>
<p>Polițele PI se emit de regulă pe bază claims-made: acoperirea depinde de data pretenției, nu de momentul erorii. Polițele pe bază de eveniment (occurrence) leagă acoperirea de data faptei.</p>
<table>
<thead><tr><th>Element</th><th>Ce înseamnă</th><th>Ce se verifică în poliță</th></tr></thead>
<tbody>
<tr><td>Bază claims-made</td><td>Contează data pretenției și a notificării ei</td><td>Definiția pretenției, termenul de notificare, tratamentul circumstanțelor anunțate</td></tr>
<tr><td>Bază occurrence</td><td>Contează data faptei care a produs prejudiciul</td><td>Cum se stabilește data faptei și termenul de prescripție în care poate fi formulată pretenția</td></tr>
<tr><td>Data retroactivă</td><td>Data de la care erorile anterioare sunt acceptate</td><td>Dacă se păstrează la reînnoire și la schimbarea asigurătorului</td></tr>
<tr><td>Perioada extinsă de raportare</td><td>Termen după expirare în care se pot înainta pretenții pentru fapte survenite înainte de expirare și după data retroactivă; de regulă nu adaugă o limită nouă</td><td>Durata scrisă în poliță, comparată cu art. 1878 alin. (2) din Codul civil, eventuala primă suplimentară, situațiile (nereînnoire, încetarea activității)</td></tr>
<tr><td>Circumstanțe cunoscute</td><td>Fapte știute sau care trebuiau știute la încheiere</td><td>Declarația din chestionar; de regulă sunt excluse</td></tr>
</tbody>
</table>
<p>Pentru polițele claims-made, art. 1878 alin. (2) din Codul civil prevede un termen adițional (perioada extinsă de raportare) cel puțin egal cu termenul de prescripție aplicabil răspunderii. Art. 1878 alin. (1) permite acest criteriu în contractele comerciale sau profesionale. O durată mai scurtă în poliță poate ridica o problemă de validitate și se verifică înainte de semnare.</p>
<p>Exemplu ipotetic: o eroare de calcul făcută într-un raport din 2024 este reclamată de client în 2026. Pe bază claims-made se aplică, de regulă, polița în vigoare în 2026, dacă pretenția este înaintată în perioada ei sau în termenul adițional, data retroactivă nu este ulterioară lucrării din 2024, iar polița nu exclude problemele pe care firma le cunoștea sau trebuia să le cunoască la încheiere. Cu data retroactivă mutată în 2026, polița nouă nu acoperă lucrarea din 2024, deci se verifică polița veche.</p>

<h2>Limite, cheltuieli de apărare și teritoriu</h2>
<p>Limita pe pretenție este plafonul pentru o singură pretenție sau pentru o serie de pretenții legate, după clauza de agregare din poliță. Limita agregată este totalul disponibil pentru întreaga perioadă de asigurare. După o daună mare, limita agregată se reduce pentru restul perioadei, dacă polița nu prevede reîntregirea.</p>
<p>Cheltuielile de apărare (avocați, expertize, taxe de judecată) apar și atunci când pretenția este neîntemeiată. Se verifică dacă sunt incluse în limită, caz în care o reduc, sau acordate peste ea, dacă franșiza se aplică și lor, cine alege avocatul și cum se obține consimțământul asigurătorului pentru o tranzacție, fiindcă fără el acordul cu clientul nu îl obligă (art. 1875 alin. (2) din Codul civil).</p>
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
<p>Pretenția primită se notifică asigurătorului de îndată (art. 1851 alin. (1) din Codul civil), în scris și în termenul din poliță, iar circumstanța care o poate produce, după clauza poliței. Art. 1875 alin. (1) declară nulă clauza care eliberează asigurătorul de obligații pentru că asiguratul a recunoscut sau a satisfăcut pretenția. Potrivit alin. (2), asigurătorul nu este legat de un acord cu clientul la care nu a consimțit, de aceea recunoașterea sau tranzacția se discută întâi cu el. Se păstrează contractul, livrabilele, corespondența și cronologia lucrării.</p>

<h2>Rolul brokerului și al asigurătorului</h2>
<p>Brokerul analizează activitatea clientului, pregătește dosarul, cere oferte de la mai mulți asigurători și compară condițiile pe aceeași bază: servicii, persoane asigurate, data retroactivă, limite și excluderi. La daună, brokerul asistă la notificare și la comunicarea cu asigurătorul. Asigurătorul acceptă riscul, stabilește prima și condițiile și decide plata. Serviciul este descris pe pagina <a href="/servicii/asigurare-raspundere-profesionala">asigurare de răspundere profesională</a>.</p>
<p>Pentru proiectanți și diriginți de șantier, polița PI se discută împreună cu asigurarea lucrării, prezentată în ghidul despre <a href="/news/asigurare-constructii-montaj">asigurarea construcțiilor și montajului</a>. Pentru casele de expediție, răspunderea pentru serviciile de organizare a transportului se delimitează de răspunderea transportatorului, explicată în articolul despre <a href="/news/asigurari-transport-logistica-cmr-cargo-moldova">asigurarea CMR și cargo</a>.</p>

<h2>Întrebări frecvente despre asigurarea de răspundere profesională în Moldova</h2>
<h3>Este obligatorie asigurarea de răspundere profesională în Moldova?</h3><p>Nu există o obligație generală. Legea nr. 69/2016 o impune notarilor (art. 56 alin. (1)), iar Legea nr. 271/2017 obligă entitățile de audit să asigure riscul de audit prin asigurare și/sau provizioane (art. 26). Pentru avocați, Legea nr. 1260/2002 o permite fără să o impună. Pentru alte profesii, obligația poate rezulta din legea specială sau, mai des, din contract.</p>
<h3>Care este diferența dintre baza claims-made și baza occurrence?</h3><p>Pe bază claims-made, polița se aplică pretențiilor formulate în perioada de asigurare sau în termenul adițional, cu condiția ca fapta să fie ulterioară datei retroactive. Pe bază occurrence, contează data faptei care a produs prejudiciul, chiar dacă pretenția apare după expirarea poliței, în condițiile ei. Asigurarea PI se emite, de regulă, pe bază claims-made.</p>
<h3>Ce este data retroactivă într-o poliță PI?</h3><p>Data retroactivă este momentul de la care erorile anterioare începutului poliței sunt acceptate, dacă pretenția apare în perioada acoperită. Păstrarea ei la reînnoire și la schimbarea asigurătorului protejează lucrările din anii trecuți. Mutarea datei retroactive scoate din polița nouă serviciile prestate înainte de noua dată.</p>
<h3>Acoperă asigurarea PI amenzile și penalitățile din contract?</h3><p>Amenzile și sancțiunile aplicate asiguratului, garanțiile de rezultat și penalitățile asumate contractual peste răspunderea legală sunt excluderi frecvente. O amendă plătită de client din cauza unei erori a asiguratului poate fi pretinsă ca prejudiciu al clientului, iar tratamentul ei depinde de condițiile poliței și de lege.</p>
<h3>Asigurarea PI și asigurarea cyber sunt același produs?</h3><p>Nu. PI acoperă pretențiile clienților pentru erori în serviciul profesional. Asigurarea cyber privește incidentele informatice, cum sunt atacurile, scurgerile de date și întreruperea sistemelor, inclusiv costurile proprii ale firmei. O firmă IT poate avea nevoie de ambele, cu delimitarea scrisă a zonei în care se suprapun.</p>
<h3>Ce documente se cer pentru o ofertă de asigurare PI?</h3><p>De regulă, chestionarul asigurătorului, extrasul din registrul persoanelor juridice, descrierea serviciilor, cifra de afaceri pe activități și țări, un model de contract cu clienții, cerința de asigurare primită, istoricul pretențiilor și polița anterioară cu data retroactivă. Asigurătorul poate cere și calificările specialiștilor.</p>

<h2>Ofertă personalizată prin ING Broker</h2>
<p>ING Broker pregătește dosarul firmei de servicii și cere oferte de la mai mulți asigurători din Moldova. Acceptarea riscului, prima și condițiile se stabilesc de asigurător.</p>
<p><a href="/contact">Solicită o ofertă personalizată → ingbroker.md/contact</a></p>
<p>Insurance ING Broker SRL, str. Pan Halippa 9, MD-2009, mun. Chișinău. Telefon: +373 79 526 003, +373 69 526 003. E-mail: andrei.moraru@ingbroker.md. Activitate supravegheată de Banca Națională a Moldovei.</p>`
  },
 'asigurare-raspundere-civila-generala': {
    title: 'Asigurarea de răspundere civilă generală în Moldova: ce acoperă polița și când este obligatorie',
    seoTitle: 'Răspundere civilă generală Moldova | ING Broker Moldova',
    author: 'Andrei Moraru, CFO Insurance ING Broker SRL',
    description: 'Asigurarea de răspundere civilă generală în Moldova: prejudicii față de terți, Codul civil, obiecte periculoase, limite, excluderi și acte pentru ofertă.',
    updatedAt: '2026-11-22', sourcesCheckedAt: '22 noiembrie 2026', preserveLegacyLayout: true,
    related: ['asigurare-raspundere-profesionala', 'Asigurarea de răspundere profesională în Moldova'],
    sources: [
      ['Codul civil al Republicii Moldova nr. 1107/2002, art. 391, 1822, 1851, 1874, 1875, 1878, 1880, 1998, 2005 și 2016 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=150498&lang=ro'],
      ['Legea nr. 116/2012 privind securitatea industrială a obiectelor industriale periculoase, art. 16 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=120652&lang=ro'],
      ['Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare, art. 4 și anexa, clasa 13 (BNM)', 'https://bnm.md/files/Lege%20asigur%C4%83ri%2092_2022%20(RO).pdf'],
      ['Legea nr. 106/2022 privind asigurarea obligatorie de răspundere civilă auto pentru pagube produse de vehicule (BNM)', 'https://www.bnm.md/files/Lege_RCA_106_2022%20(ro).pdf'],
      ['BNM: situația financiară a sectorului asigurărilor pentru anul 2025', 'https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025'],
      ['BNM: ce verifici în contractul de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'],
    ],
    body: `<p>Asigurarea de răspundere civilă generală preia, în limitele și condițiile poliței, sumele pe care o companie le datorează altor persoane pentru vătămări corporale sau pagube materiale produse prin activitatea ei. Ca regulă, polița este facultativă în Moldova, iar obligația apare prin lege specială, de exemplu pentru obiectele industriale periculoase.</p>

<h2>Ce acoperă asigurarea de răspundere civilă generală</h2>
<p>Polița intră în discuție când un terț cere companiei repararea unui prejudiciu legat de activitatea declarată. Terțul poate fi un client, un vizitator, un vecin, un trecător sau o altă firmă aflată în același spațiu. Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare încadrează produsul în clasa 13 din anexă: daune din prejudiciul produs terților păgubiți, altele decât cele din răspunderea auto, avia și navală.</p>
<p>Asigurătorul analizează, între altele, dacă firma răspunde juridic, dacă faptul intră în activitatea, locul și perioada acoperite, dacă se aplică o excludere și dacă obligațiile din poliță au fost respectate. Dacă pretenția este acceptată, despăgubirea se plătește în limitele și condițiile poliței, după aplicarea franșizei. Cheltuielile de apărare se acoperă dacă polița le prevede.</p>

<h2>Răspunderea companiei în Codul civil</h2>
<p>Codul civil al Republicii Moldova nr. 1107/2002 stabilește regulile de la care pornește o pretenție:</p>
<ul><li>Art. 1998 alin. (1): cel care acționează ilicit și cu vinovăție față de altul repară prejudiciul patrimonial și, în cazurile prevăzute de lege, prejudiciul moral, cauzat prin acțiune sau omisiune.</li><li>Art. 2005 alin. (1): comitentul răspunde de prejudiciul cauzat cu vinovăție de administrator, de salariat sau de altă persoană subordonată, în funcțiile încredințate.</li><li>Art. 2016: dacă din construcție a căzut ori a curs ceva, răspunde persoana care are construcția în posesie, cu excepțiile din alin. (1). Până la proba contrară, construcția se prezumă a fi în posesia proprietarului (alin. (2)).</li><li>Art. 391 alin. (1): termenul general de prescripție extinctivă este de 3 ani. Momentul de la care curge, termenele speciale și eventualele pretenții exceptate se verifică pentru fiecare caz.</li></ul>
<p>Un angajat care lasă o scară instabilă pe hol poate genera o pretenție împotriva angajatorului, chiar la luni distanță. Simpla cerere nu dovedește răspunderea. Fapta, prejudiciul, legătura de cauzalitate și, când legea o cere, vinovăția se stabilesc în fiecare dosar.</p>

<h2>Când asigurarea de răspundere civilă este obligatorie</h2>
<p>Asigurarea nu este, ca regulă, obligatorie pentru orice companie. Obligația apare când o lege specială o prevede pentru o anumită activitate. Art. 16 alin. (1) din Legea nr. 116/2012 privind securitatea industrială a obiectelor industriale periculoase obligă agentul economic care deține un obiect industrial înregistrat ca periculos să efectueze asigurarea de răspundere pentru prejudiciile cauzate vieții, sănătății sau bunurilor altor persoane și mediului, în caz de avarie. Suma se stabilește pe baza evaluării riscului (art. 16 alin. (2)).</p>
<p>Vehiculele au propriul cadru: <a href="https://easigurari.com/ro/rca">asigurarea RCA</a> este obligatorie după Legea nr. 106/2022 și polița generală nu o înlocuiește. La celelalte firme, cerința poate rezulta dintr-o lege specială sau dintr-un contract. Un proprietar, un beneficiar de lucrări sau o autoritate contractantă poate stabili o limită minimă și o perioadă.</p>

<h2>Răspunderea civilă generală în cifre</h2>
<p>Potrivit <a href="https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025">raportului Băncii Naționale a Moldovei pentru 2025</a>, societățile de asigurare au subscris prime brute de 3 351,2 milioane MDL, din care 3 240,6 milioane MDL pentru asigurările generale. Asigurările auto au depășit 71,6% din primele generale, incendiul și calamitățile au reprezentat 8,8%, iar alte asigurări de bunuri 5,5%. Celelalte clase au cumulat 457,5 milioane MDL, cu mai puțin de 2,5% fiecare; prin excludere, în această grupă intră și răspunderea civilă generală.</p>
<p>Același raport notează despăgubiri de 43,4 milioane MDL în 2025 pentru asigurarea obiectelor industrial periculoase, față de circa 0,5 milioane MDL în anul precedent. O variație de această mărime nu indică singură o tendință. Banca Națională a Moldovei este autoritatea de supraveghere a pieței asigurărilor, potrivit art. 4 din Legea nr. 92/2022.</p>

<h2>Ce acoperă de regulă o poliță și ce se verifică</h2>
<p>Tabelul descrie practica obișnuită de pe piață. Riscurile incluse și excluderile se confirmă în propunerea concretă.</p>
<table>
<thead><tr><th>Situație</th><th>Tratament obișnuit</th><th>Ce se verifică</th></tr></thead>
<tbody>
<tr><td>Vizitator vătămat în spațiul firmei</td><td>Vătămarea corporală și costurile legate de ea, dacă firma răspunde</td><td>Zona accesibilă publicului, întreținerea, activitatea declarată</td></tr>
<tr><td>Apă sau foc ajuns la un vecin</td><td>Paguba materială a vecinului, dacă firma răspunde și riscul nu este exclus; paguba la spațiul închiriat cere, de regulă, o extensie</td><td>Cine are instalația în posesie, contractul de chirie, cauza incidentului</td></tr>
<tr><td>Bun al clientului avariat la o intervenție</td><td>Acceptat uneori prin extensie</td><td>Diferența dintre bunul lucrat și bunurile din apropiere</td></tr>
<tr><td>Bunuri primite în păstrare sau reparație</td><td>De regulă printr-o extensie separată, cu sublimită</td><td>Valoarea, evidența primirii, locul de păstrare</td></tr>
<tr><td>Vătămare sau pagubă produsă de un produs livrat cu defect</td><td>Prin componenta de răspundere pentru produse, dacă este inclusă; produsul defect în sine nu se despăgubește, de regulă</td><td>Teritoriul vânzărilor; retragerea produsului se exclude de regulă</td></tr>
<tr><td>Lucrare predată care produce o pagubă</td><td>Prin extensia pentru lucrări terminate</td><td>Perioada de după recepție; refacerea lucrării proprii</td></tr>
<tr><td>Pagubă produsă de un subcontractor</td><td>Răspunderea firmei pentru lucrările subcontractate, dacă sunt declarate; subcontractorul este asigurat doar dacă polița îl include</td><td>Dreptul de regres și polița subcontractorului</td></tr>
<tr><td>Accident de muncă</td><td>În această poliță, prin extensia de răspundere a angajatorului, dacă există; riscul poate fi acoperit și printr-o asigurare de accidente</td><td>Definiția angajatului, relația cu asigurările sociale</td></tr>
</tbody>
</table>

<h2>Excluderi obișnuite în polițe</h2>
<p>Polițele exclud, de regulă, prejudiciul cauzat intenționat, amenzile și sancțiunile, penalitățile contractuale, răspunderea asumată prin contract peste cea prevăzută de lege, paguba la bunurile proprii, refacerea propriului produs sau a propriei lucrări, pierderile pur financiare fără vătămare sau pagubă materială, folosirea vehiculelor supuse RCA, erorile profesionale, poluarea graduală, azbestul, incidentele cyber și riscurile de război. Lista diferă de la un asigurător la altul.</p>

<h2>Reguli speciale din Codul civil pentru asigurarea de răspundere</h2>
<p>Art. 1822 alin. (2) declară nule derogările în detrimentul contractantului, asiguratului sau beneficiarului consumator. Între firme, o abatere de la aceste reguli se verifică pentru fiecare clauză.</p>
<ul><li>Art. 1874 alin. (1): asiguratul nu are drept la despăgubire în măsura în care a cauzat dauna cu intenție. Regula include nerespectarea instrucțiunilor concrete ale asigurătorului după daună, din culpă gravă și cunoscând probabilitatea agravării.</li><li>Art. 1875: este nulă clauza care eliberează asigurătorul de obligații pentru că asiguratul a recunoscut sau a satisfăcut pretenția terțului. Asigurătorul nu este însă legat de acordul dintre terț și asigurat, dacă nu a consimțit la el.</li><li>Art. 1878: cazul asigurat este, ca regulă, faptul care dă naștere răspunderii în perioada de asigurare. Dacă părțile unui contract comercial sau profesional aleg drept criteriu înaintarea pretenției, asigurarea acoperă și pretențiile dintr-un termen adițional cel puțin egal cu termenul de prescripție, pentru fapte survenite înainte de expirarea perioadei.</li><li>Art. 1880 alin. (2): terțul păgubit poate cere repararea direct de la asigurător în cazurile enumerate, între care asigurarea obligatorie, insolvabilitatea sau lichidarea asiguratului, vătămarea corporală și decesul.</li></ul>

<h2>Răspunderea generală și celelalte asigurări ale firmei</h2>
<p>Pierderea pur financiară a unui client după un sfat sau un calcul greșit se discută la <a href="/news/asigurare-raspundere-profesionala">asigurarea de răspundere profesională</a>. Bunurile proprii și efectele opririi activității țin de asigurarea de bunuri și de <a href="/news/asigurare-pierdere-profit">asigurarea pierderii de profit</a>. Pe șantier, răspunderea față de terți se corelează cu <a href="/news/asigurare-constructii-montaj">asigurarea CAR/EAR</a>, iar incidentele informatice se analizează la <a href="/servicii/asigurare-cyber-moldova">asigurarea cyber</a>.</p>

<h2>Limite, franșiză și baza de acoperire</h2>
<p>Limita pe eveniment plafonează plata pentru un singur incident sau pentru o serie de pagube cu aceeași cauză, după clauza din poliță. Limita agregată reprezintă totalul disponibil în perioada de asigurare și scade după fiecare daună plătită, dacă polița nu prevede reîntregirea. Franșiza este partea din daună suportată de asigurat. Contractul arată dacă se aplică și cheltuielilor de apărare și dacă aceste cheltuieli intră în limită, reducând suma disponibilă pentru despăgubiri, sau se plătesc peste ea.</p>
<p>Unele componente, mai ales răspunderea pentru produse, pot funcționa pe bază claims-made. În acest caz contează data pretenției, data retroactivă și termenul adițional din art. 1878 alin. (2), iar la schimbarea asigurătorului se verifică păstrarea datei retroactive. Teritoriul și jurisdicția se citesc separat când firma exportă sau trimite echipe în afara țării.</p>

<h3>De ce depinde prima de asigurare</h3>
<p>Asigurătorul stabilește prima după activitatea exactă, cifra de afaceri, numărul de angajați, suprafața, fluxul de vizitatori, lucrările la clienți, exporturi, limita solicitată, franșiză și istoricul pretențiilor. Două oferte se compară corect doar pe aceleași activități, amplasamente, extensii și limite.</p>

<h2>Documentele pentru ofertă</h2>
<ul><li>Chestionarul asigurătorului, completat și semnat.</li><li>Descrierea activităților și a tuturor amplasamentelor.</li><li>Cifra de afaceri, numărul de angajați și exporturile, dacă există.</li><li>Lucrările efectuate la clienți și lista subcontractorilor.</li><li>Bunurile altora primite în grijă, cu valori estimate.</li><li>Cerința de asigurare din contractul de chirie, de lucrări sau de achiziție.</li><li>Istoricul pretențiilor și polița anterioară.</li></ul>

<h2>Ce face firma după un incident</h2>
<p>Prima prioritate rămâne siguranța persoanelor și oprirea pagubei, fiindcă neluarea măsurilor de evitare sau diminuare intră în noțiunea de cauzare a daunei (art. 1874 alin. (2)). Firma notifică asigurătorul de îndată (art. 1851 alin. (1)) și în termenul din poliță, transmite fără întârziere orice pretenție scrisă, citație sau act de procedură, cooperează la apărare și păstrează fotografiile, raportul intern, facturile și corespondența. Înainte de o tranzacție sau de o plată către terț se cere poziția asigurătorului, deoarece suma convenită fără consimțământul lui nu îl obligă (art. 1875 alin. (2)). Datele persoanelor implicate se prelucrează doar în măsura necesară dosarului, cu respectarea Legii nr. 195/2024.</p>

<h2>Rolul brokerului și al asigurătorului</h2>
<p>Brokerul analizează activitatea clientului, pregătește dosarul, solicită oferte de la asigurători licențiați, în funcție de risc, și compară condițiile pe aceeași bază. La daună, brokerul asistă la notificare și la comunicarea cu asigurătorul. Asigurătorul acceptă riscul, stabilește prima și condițiile și decide plata.</p>

<h2>Întrebări frecvente despre asigurarea de răspundere civilă generală</h2>
<h3>Este obligatorie asigurarea de răspundere civilă generală în Moldova?</h3><p>Ca regulă, nu este obligatorie pentru orice companie. Legea nr. 116/2012, art. 16, obligă deținătorii de obiecte industriale periculoase înregistrate să încheie asigurarea de răspundere. La celelalte firme, cerința poate rezulta dintr-o lege specială sau dintr-un contract de chirie, de lucrări, de achiziții publice ori de colaborare.</p>
<h3>Ce diferență există între răspunderea civilă generală și cea profesională?</h3><p>Răspunderea generală privește, în principal, vătămările corporale și pagubele materiale produse terților prin activitatea firmei. Răspunderea profesională privește pierderea financiară a clientului cauzată de o eroare, omisiune sau neglijență în serviciul prestat. O firmă de instalații sau de consultanță poate avea nevoie de ambele polițe, cu delimitare scrisă.</p>
<h3>Acoperă polița bunurile clienților aflate în grija firmei?</h3><p>Nu în mod automat. Bunurile primite pentru păstrare, reparație sau prelucrare sunt, de regulă, excluse sau acceptate printr-o extensie separată, cu sublimită proprie. Firma declară ce bunuri primește, unde le ține, ce valoare au și ce documente de predare folosește, apoi verifică redactarea clauzei în poliță.</p>
<h3>Răspunde firma pentru paguba produsă de un angajat?</h3><p>Potrivit art. 2005 din Codul civil, comitentul răspunde de prejudiciul cauzat cu vinovăție de administrator, salariat sau altă persoană subordonată, în funcțiile încredințate. Polița poate prelua această răspundere dacă activitatea este declarată și nu se aplică o excludere. Regresul contra salariatului și limitele lui se analizează separat, inclusiv după legislația muncii.</p>
<h3>Ce trebuie făcut când un terț cere despăgubire?</h3><p>Firma notifică asigurătorul de îndată, transmite pretenția și actele primite, păstrează dovezile și ia măsuri pentru limitarea pagubei. O recunoaștere sau o plată nu înlătură singură asigurarea (art. 1875 din Codul civil), dar acordul cu terțul nu îl obligă pe asigurător fără consimțământul lui.</p>
<h3>Ce documente se cer pentru o ofertă de răspundere civilă generală?</h3><p>De regulă, chestionarul asigurătorului, extrasul din Registrul de stat, descrierea activităților și a amplasamentelor, cifra de afaceri, numărul de angajați, lucrările la clienți, subcontractorii, cerința de asigurare din contract, istoricul pretențiilor și polița anterioară. Asigurătorul poate cere și informații tehnice despre spații.</p>

<h2>Ofertă personalizată prin ING Broker</h2>
<p>ING Broker pregătește dosarul companiei și solicită oferte de la asigurători licențiați, în funcție de risc. Acceptarea riscului, prima și condițiile se stabilesc de asigurător. Materialul are caracter general și nu înlocuiește analiza contractului sau consultanța juridică pentru un caz concret.</p>
<p><a href="/contact">Solicită o ofertă personalizată → ingbroker.md/contact</a></p>
<p>Broker de Asigurare-Reasigurare „INSURANCE ING BROKER” SRL, str. Pan Halippa 9, MD-2009, mun. Chișinău. Telefon: +373 79 526 003, +373 69 526 003. E-mail: andrei.moraru@ingbroker.md. Activitate supravegheată de Banca Națională a Moldovei.</p>`
 }
};
