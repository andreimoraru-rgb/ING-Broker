import type { ArticleRevision } from './recoveredArticles';

const bnm: [string, string] = ['BNM: explicații pentru citirea unui contract de asigurare', 'https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam'];
const property: [string, string] = ['MOLDASIG: prezentarea asigurării bunurilor persoanelor juridice', 'https://moldasig.md/property-insurance-for-legal-persons'];

export const editorialLogistics20261108: Record<string, ArticleRevision> = {
  'asigurare-cargo-transport-marfa': {
    title: 'Asigurarea cargo în Moldova: ce acoperă polița de marfă, clauzele A, B, C și diferența față de CMR',
    seoTitle: 'Asigurare cargo marfă Moldova | ING Broker Moldova',
    author: 'Andrei Moraru, CFO Insurance ING Broker SRL',
    description: 'Asigurarea cargo în Moldova: ce acoperă polița de marfă, clauzele A, B, C, Incoterms, diferența față de CMR, excluderi și documente pentru ofertă.',
    updatedAt: '2026-11-23', sourcesCheckedAt: '23 noiembrie 2026', preserveLegacyLayout: true,
    related: ['asigurari-transport-logistica-cmr-cargo-moldova', 'Asigurare CMR în Moldova: cât răspunde transportatorul pentru marfă și ce acoperă polița'],
    sources: [
      ['Codul civil al Republicii Moldova nr. 1107/2002, art. 1842, 1851, 1856, 1863, 1868, 1870 și 1871 (legis.md)', 'https://www.legis.md/cautare/getResults?doc_id=150561&lang=ro'],
      ['Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare, art. 4 și anexa, clasa 7 (BNM)', 'https://bnm.md/files/Lege%20asigur%C4%83ri%2092_2022%20(RO).pdf'],
      ['Convenția CMR, textul în limba română (ediția oficială „Tratate internaționale”, 1998), copie ANTA', 'https://anta.gov.md/sites/default/files/document/attachments/CONVEN%C5%A2IA%20C.M.R.%20din%2019.05.56.pdf'],
      ['ONU: starea Protocolului din 1978 la Convenția CMR, inclusiv Republica Moldova', 'https://treaties.un.org/Pages/ViewDetailsIII.aspx?src=TREATY&mtdsg_no=XI-B-11-a&chapter=11&Temp=mtdsg3&clang=_en'],
      ['Camera Internațională de Comerț: CIF și CIP în Incoterms 2020', 'https://academy.iccwbo.org/incoterms/article/incoterms-2020-cip-or-cif/'],
      ['Camera Internațională de Comerț: diferențele dintre Incoterms 2020 și 2010', 'https://library.iccwbo.org/clp/clp-incoterms-2020vs2010.htm'],
      ['Biroul Național de Statistică: Transportul de pasageri și mărfuri în anul 2025', 'https://statistica.gov.md/ro/transportul-de-pasageri-si-marfuri-in-anul-2025-9527_62331.html'],
      ['BNM: situația financiară a sectorului asigurărilor pentru anul 2025', 'https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025'],
      ['BNM: cursurile oficiale de schimb la 20.11.2026', 'https://www.bnm.md/ro/official_exchange_rates?date=20.11.2026'],
    ],
    body: `<p>Asigurarea cargo acoperă, în limitele și condițiile poliței, pierderea sau avarierea mărfii în timpul transportului. Polița protejează asiguratul sau beneficiarul cu interes legitim în marfă. Asigurarea CMR protejează altceva: răspunderea transportatorului rutier, limitată de regulă la 8,33 DST pe kilogram de greutate brută.</p>

<h2>Ce acoperă asigurarea cargo</h2>
<p>Polița se poate aplica mărfurilor transportate pe drum, pe calea ferată, pe apă sau pe calea aerului, pentru modurile și traseul declarate. Legea nr. 92/2022 privind activitatea de asigurare sau de reasigurare încadrează produsul în clasa 7 din anexă, „Asigurările de bunuri în tranzit”, care acoperă daunele suferite de mărfuri, bagaje și alte bunuri transportate.</p>
<p>Despăgubirea privește, de regulă, valoarea asigurată a mărfii pierdute sau deteriorate. Unele polițe includ și costuri legate de o daună acoperită, cum sunt salvarea, sortarea sau reambalarea. Art. 1868 alin. (2) din Codul civil cere ca asiguratul să aibă un interes legitim cu privire la bunul asigurat, de aceea cererea de ofertă arată dacă firma este vânzător, cumpărător, proprietar sau expeditor.</p>

<h2>Diferența dintre asigurarea cargo și CMR</h2>
<table>
<thead><tr><th>Element</th><th>Asigurarea cargo</th><th>Asigurarea CMR</th></tr></thead>
<tbody>
<tr><td>Cine este protejat</td><td>Asiguratul sau beneficiarul cu interes în marfă</td><td>Transportatorul rutier</td></tr>
<tr><td>Ce se plătește</td><td>Dauna la marfă, în condițiile poliței</td><td>Suma datorată de transportator, în limitele poliței CMR</td></tr>
<tr><td>Plafonul</td><td>Suma asigurată</td><td>Răspunderea legală: 8,33 DST pe kg brut lipsă sau avariat (art. 23 alin. (3) și art. 25, Protocolul din 1978), în limita sumei asigurate CMR</td></tr>
<tr><td>Când nu se plătește</td><td>Când se aplică o excludere din poliță</td><td>Când transportatorul nu răspunde, de exemplu în cazurile din art. 17 alin. (2) și (4), sau când se aplică o excludere din polița CMR</td></tr>
<tr><td>Transportul vizat</td><td>Modurile și traseul declarate</td><td>Transportul rutier internațional (art. 1)</td></tr>
</tbody>
</table>
<p>Exemplu ipotetic: o expediție de echipamente electronice, cu greutatea brută de 2 000 kg și valoarea de 6 000 000 MDL, este furată. Chiar dacă transportatorul răspunde, limita pentru valoarea mărfii este de 16 660 DST, adică circa 410 000 MDL la cursul BNM din 20.11.2026 (1 DST = 24,6116 MDL), plus restituirile din art. 23 alin. (4). Restul pierderii rămâne la cel care suportă riscul mărfii, dacă nu are o poliță cargo. O despăgubire mai mare se poate cere dacă expeditorul a declarat în scrisoarea de trăsură, contra unui supliment de preț, valoarea mărfii sau un interes special la eliberare (art. 23 alin. (6), 24 și 26). Limita nu se aplică la dol sau culpă echivalentă (art. 29), dar polița CMR poate să nu acopere suma peste limită. Pentru state care nu sunt parte la Protocolul din 1978 se verifică limita aplicabilă. Mai multe detalii sunt în ghidul despre <a href="/news/asigurari-transport-logistica-cmr-cargo-moldova">asigurarea CMR</a>.</p>

<h2>Clauzele A, B și C: ce nivel de acoperire se alege</h2>
<p>Institute Cargo Clauses sunt condiții internaționale elaborate pentru transportul maritim și folosite des ca reper. Un asigurător din Moldova poate aplica aceste clauze, o variantă adaptată sau condiții proprii, mai ales la transportul rutier.</p>
<table>
<thead><tr><th>Varianta</th><th>Tip de acoperire</th><th>Ce se verifică</th></tr></thead>
<tbody>
<tr><td>Clauzele (A)</td><td>Toate riscurile de pierdere sau avarie, cu excepția celor excluse</td><td>Lista excluderilor, furtul, condițiile de pază</td></tr>
<tr><td>Clauzele (B)</td><td>Riscuri numite, mai multe decât la (C), de exemplu pătrunderea apei de mare, lac sau râu ori pierderea totală a unui colet căzut la încărcarea pe navă sau la descărcarea de pe ea</td><td>Dacă riscul real al mărfii apare în listă; furtul nu apare</td></tr>
<tr><td>Clauzele (C)</td><td>Riscuri numite majore, de exemplu incendiu, explozie, coliziune sau răsturnare</td><td>Furtul și avaria la manipulare rămân, de regulă, neacoperite</td></tr>
</tbody>
</table>
<p>Alegerea pornește de la marfă și de la riscul pe care firma acceptă să îl păstreze.</p>

<h2>Incoterms 2020: cine asigură marfa</h2>
<p>Dintre regulile Incoterms 2020, CIF și CIP prevăd obligația vânzătorului de a încheia asigurarea. Potrivit <a href="https://academy.iccwbo.org/incoterms/article/incoterms-2020-cip-or-cif/">Camerei Internaționale de Comerț</a>, la CIP vânzătorul asigură marfa până la locul convenit, la nivelul Clauzelor (A) sau similare, deși riscul trece la cumpărător la predarea către transportator. La CIF, folosit la transportul maritim sau pe căi navigabile interioare, nivelul cerut este minim, Clauzele (C) sau similare, iar riscul trece la cumpărător când marfa este încărcată la bordul navei. Părțile pot conveni o acoperire mai mare la CIF și una mai mică la CIP.</p>
<p>Vânzarea mărfii pe drum are și o regulă în Codul civil. Potrivit art. 1871, la transmiterea proprietății bunului asigurat, rezoluțiunea asigurării intervine de drept la o lună de la transmitere, dacă contractantul și dobânditorul nu o convin mai devreme. Până atunci, dobânditorul se consideră asigurat din momentul în care preia riscul. Regula nu se aplică dacă polița a fost încheiată în favoarea unui viitor dobânditor sau dacă asigurătorul, contractantul și dobânditorul convin altfel. La vânzările în tranzit, transmiterea drepturilor din poliță se stabilește înainte de vânzare.</p>

<h2>Transportul de mărfuri în cifre</h2>
<p>Potrivit <a href="https://statistica.gov.md/ro/transportul-de-pasageri-si-marfuri-in-anul-2025-9527_62331.html">Biroului Național de Statistică</a>, în 2025 întreprinderile de transport din Moldova, fără stânga Nistrului și mun. Bender, au transportat 20,2 milioane tone de mărfuri (date provizorii), la nivelul anului 2024. Transportul rutier a reprezentat 17,6 milioane tone, circa 87% din volum, iar cel feroviar 2,5 milioane tone. Potrivit <a href="https://bnm.md/ro/content/situatia-financiara-sectorului-asigurari-pentru-anul-2025">raportului Băncii Naționale a Moldovei pentru 2025</a>, clasele de asigurări în afara celor auto, de incendiu și de alte bunuri au sub 2,5% fiecare din primele brute subscrise la asigurările generale; prin excludere, în această grupă intră și bunurile în tranzit. Banca Națională a Moldovei supraveghează piața asigurărilor (art. 4 din Legea nr. 92/2022).</p>

<h2>Excluderi obișnuite în polițe</h2>
<p>Polițele exclud, de regulă, ambalarea sau fixarea insuficientă, viciul propriu al mărfii, pierderile normale de greutate sau volum, uzura, întârzierea și pierderea de piață, actele intenționate ale asiguratului, insolvența transportatorului în anumite condiții, precum și războiul și grevele, care se pot adăuga doar prin clauze separate, de obicei cu limitări de traseu. Mărfurile cu regim de temperatură, bunurile de mare valoare, animalele vii și produsele periculoase cer, de obicei, condiții separate.</p>
<p>Cerințele de pază, parcare, sigilare sau ambalare, formulate ca obligație sau condiție de plată înainte de daună, sunt clauze privind măsurile de precauție (art. 1842 alin. (1) din Codul civil). Ele se transmit și transportatorului, fiindcă el le aplică pe drum.</p>

<h2>Suma asigurată și franșiza</h2>
<p>Suma asigurată pornește, de regulă, de la valoarea din factură, la care părțile pot adăuga transportul, asigurarea și alte costuri convenite. Baza de evaluare se scrie în poliță. Franșiza este partea din daună suportată de asigurat.</p>
<p>Art. 1870 din Codul civil obligă asigurătorul să despăgubească prejudiciul în limita sumei asigurate, chiar dacă suma este mai mică decât valoarea bunului. Reducerea proporțională se aplică doar dacă părțile au convenit-o și dacă asigurătorul a menționat suplimentar clauza în textul poliței. Exemplu ipotetic: marfă cu valoarea efectivă de 1 000 000 MDL la data daunei, sumă asigurată de 800 000 MDL, daună de 200 000 MDL. Fără clauză, calculul pornește de la 200 000 MDL. Cu clauză proporțională, pornește de la 160 000 MDL, înainte de franșiză.</p>

<h2>Durata acoperirii și traseul</h2>
<p>Acoperirea se descrie adesea „de la depozit la depozit”, dar începutul și sfârșitul exact rezultă din poliță. În Clauzele Institute 2009, acoperirea poate înceta și la 60 de zile după descărcarea de pe nava maritimă, chiar dacă marfa nu a ajuns în depozitul final. Se verifică încărcarea, descărcarea, transbordarea, depozitarea temporară, staționarea în vamă și abaterile de la traseu. Depozitarea lungă între două segmente se analizează, de obicei, separat, împreună cu <a href="/news/asigurare-depozite-logistice">asigurarea depozitelor logistice</a>. Un vehicul propriu al firmei și <a href="/news/asigurare-flote-auto-corporate-moldova">asigurarea flotei</a> nu rezolvă singure protecția mărfii.</p>

<h2>Poliță pentru o expediție sau poliță deschisă</h2>
<p>Pentru un transport ocazional se încheie o poliță pe expediție. Firmele cu livrări regulate pot folosi o poliță deschisă, în care stabilesc de la început mărfurile, rutele, limita pe vehicul și modul de declarare a fiecărui transport. Prima depinde de tipul mărfii, valoare, ambalaj, rută, mijloc de transport, măsuri de pază, franșiză și istoricul daunelor.</p>

<h2>Documentele pentru ofertă</h2>
<ul><li>Chestionarul asigurătorului, completat și semnat.</li><li>Descrierea mărfii, ambalajul, greutatea și valoarea.</li><li>Factura sau contractul de vânzare, cu regula Incoterms.</li><li>Ruta completă, cu punctele de transbordare și depozitare.</li><li>Mijlocul de transport și transportatorul, dacă sunt cunoscuți.</li><li>Pentru polița deschisă: volumul anual și valoarea maximă pe vehicul.</li><li>Istoricul daunelor din ultimii ani.</li></ul>

<h2>Ce face firma la o daună</h2>
<p>Firma limitează paguba, păstrează marfa și ambalajul, notifică asigurătorul de îndată (art. 1851 alin. (1) din Codul civil) și respectă termenul din poliță. La primire, destinatarul face rezerve transportatorului, de regulă în documentul de transport. La transportul rutier internațional, pentru avarii care nu se văd, Convenția CMR cere rezerve scrise în șapte zile, fără duminici și sărbători (art. 30 alin. (1)). Altfel, se prezumă, până la proba contrarie, că marfa a fost primită conform scrisorii de trăsură. Pe alte moduri de transport, termenele pot fi diferite. Cheltuielile rezonabile de diminuare a prejudiciului se rambursează în condițiile art. 1863.</p>
<p>După plată, asigurătorul se subrogă, în limitele sumei plătite, în dreptul față de cel care datorează repararea pagubei, de exemplu transportatorul, dacă legea sau contractul nu prevede altfel (art. 1856 alin. (1)). În măsura în care asiguratul renunță la acest drept într-un mod care dăunează subrogării, pierde despăgubirea pentru acel prejudiciu (alin. (2)). De aceea, înainte de semnarea unei descărcări de răspundere, se verifică polița.</p>
<h3>Rolul brokerului și al asigurătorului</h3>
<p>Brokerul analizează fluxul de mărfuri, pregătește dosarul, solicită oferte de la asigurători licențiați, în funcție de risc, și compară condițiile pe aceeași bază. La daună, brokerul asistă la notificare și la pregătirea dosarului. Asigurătorul acceptă riscul, stabilește prima și condițiile și decide plata.</p>

<h2>Întrebări frecvente despre asigurarea cargo</h2>
<h3>Este obligatorie asigurarea cargo în Moldova?</h3><p>Ca regulă, asigurarea mărfii este facultativă. Obligația apare de obicei din contract, de exemplu la livrările CIF și CIP din Incoterms 2020 sau din condițiile unui finanțator. Pentru o marfă ori o activitate anume se verifică și legea specială aplicabilă înainte de încheierea transportului.</p>
<h3>Asigurarea CMR a transportatorului înlocuiește asigurarea cargo?</h3><p>Nu. Asigurarea CMR acoperă răspunderea transportatorului, limitată de regulă la 8,33 DST pe kilogram, și nu plătește când transportatorul nu răspunde sau când se aplică o excludere. Asigurarea cargo protejează asiguratul sau beneficiarul cu interes în marfă, până la suma asigurată și în condițiile poliței. La mărfuri ușoare și scumpe, diferența poate fi mare.</p>
<h3>Care este diferența dintre clauzele A, B și C?</h3><p>Clauzele (A) acoperă toate riscurile de pierdere sau avarie, cu excepția celor excluse. Clauzele (B) și (C) acoperă doar riscurile numite, iar (C) are lista cea mai scurtă. Furtul nu apare printre riscurile numite la (B) și (C), iar avaria la manipulare rămâne, de regulă, în afara clauzelor (C). Polița concretă poate folosi și condiții proprii.</p>
<h3>Cine încheie polița, vânzătorul sau cumpărătorul?</h3><p>Depinde de contract. La CIF și CIP, vânzătorul are obligația de a asigura marfa. La celelalte reguli Incoterms 2020, fiecare parte verifică etapa în care suportă riscul și decide dacă își face poliță proprie. La vânzările în tranzit, transmiterea drepturilor din poliță se stabilește înainte de vânzare.</p>
<h3>Ce sumă se asigură pentru o expediție?</h3><p>De regulă, suma pornește de la valoarea din factură, la care părțile pot adăuga transportul și alte costuri convenite. Baza de evaluare se scrie în poliță. O sumă prea mică limitează plata la suma asigurată. Reducerea proporțională se aplică doar dacă polița conține această clauză, menționată suplimentar (art. 1870 din Codul civil).</p>
<h3>Ce se face când marfa ajunge avariată?</h3><p>Destinatarul face rezerve transportatorului la primire, de regulă în documentul de transport, păstrează marfa și ambalajul, face fotografii și notifică asigurătorul de îndată. La transportul rutier internațional, pentru avarii care nu se văd, Convenția CMR cere rezerve scrise în șapte zile. Firma nu renunță la drepturile față de transportator fără să verifice polița.</p>

<h2>Ofertă personalizată prin ING Broker</h2>
<p>ING Broker pregătește dosarul companiei și solicită oferte de la asigurători licențiați, în funcție de risc. Acceptarea riscului, prima și condițiile se stabilesc de asigurător. Materialul are caracter general și nu înlocuiește analiza contractului sau consultanța juridică pentru un caz concret. Produsul este prezentat pe pagina <a href="/business/cargo">asigurare cargo pentru companii</a>.</p>
<p><a href="/contact">Solicită o ofertă personalizată → ingbroker.md/contact</a></p>
<p>Broker de Asigurare-Reasigurare „INSURANCE ING BROKER” SRL, str. Pan Halippa 9, MD-2009, mun. Chișinău. Telefon: +373 79 526 003, +373 69 526 003. E-mail: andrei.moraru@ingbroker.md. Activitate supravegheată de Banca Națională a Moldovei.</p>`
  },
  'asigurare-depozite-logistice': {
    title: 'Asigurarea depozitelor logistice în Moldova',
    description: 'Cum pregătești asigurarea unui depozit: clădire, stocuri, bunuri ale clienților, echipamente și oprirea activității. Documente și întrebări utile.',
    updatedAt: '2026-11-08', sourcesCheckedAt: '8 noiembrie 2026', preserveLegacyLayout: true,
    related: ['asigurare-cargo-transport-marfa', 'Asigurarea mărfurilor în timpul transportului'],
    sources: [bnm, property],
    body: `<p>Asigurarea unui depozit logistic nu se reduce la clădire. Analiza poate privi separat spațiul, instalațiile, echipamentele, stocurile firmei și bunurile păstrate pentru clienți, în măsura în care sunt acceptate în contract. Pentru un operator din Moldova, primul pas util este un inventar care arată cine deține fiecare categorie și unde se află.</p>
<p>Articolul se adresează administratorilor de depozite, distribuitorilor, importatorilor și companiilor care închiriază spații de stocare. Nu confirmă o poliță valabilă pentru orice bun sau incident. Scopul este să pregătești dosarul amplasamentului și să vezi diferențele dintre ofertele primite, fără să confunzi protecția proprietății cu răspunderea operatorului ori cu asigurarea transportului.</p>
<h2>Proprietarul clădirii și operatorul depozitului pot fi diferiți</h2>
<p>Pornește de la contractul prin care firma utilizează spațiul. Notează dacă este proprietar, chiriaș sau administrator pentru altă societate. Separă clădirea de amenajările plătite de firmă și de bunurile care aparțin proprietarului. Dacă există mai multe firme în aceeași hală, descrie zonele și activitățile, nu doar adresa comună.</p>
<p>Cere o explicație scrisă despre persoanele și interesele care pot fi incluse în propunere. Nu presupune că asigurarea încheiată de proprietar protejează stocurile chiriașului sau că polița operatorului înlocuiește toate obligațiile contractului de închiriere. Pentru interpretarea acelor obligații, verificarea juridică este distinctă de comparația asigurărilor.</p>
<h2>Clădirea, instalațiile și amenajările au inventare separate</h2>
<p>Pregătește suprafața, destinația spațiilor, materialele principale și descrierea utilizării. Include zonele de încărcare, anexele și spațiile tehnice relevante. Pentru instalații, arată cine le deține și cine răspunde de întreținere. O denumire precum „hală de depozitare” nu explică existența unei camere frigorifice, a unui atelier ori a unei zone de ambalare.</p>
<p>Verifică dacă bunurile din exterior, platformele și construcțiile auxiliare sunt descrise în documentele analizate. Cere delimitarea între componentele clădirii și echipamentele mobile. Nu presupune că o sumă globală pentru imobil include orice investiție făcută ulterior. La extinderea amplasamentului, actualizează inventarul și solicită confirmarea modificărilor înainte de a considera protecția extinsă.</p>
<h2>Stocurile se schimbă: descrie și vârfurile de activitate</h2>
<p>Un depozit poate avea stocuri mici într-o zi și volume mult mai mari înaintea sezonului de vânzări. Pregătește evoluția lunară disponibilă, valoarea maximă și categoriile de bunuri. Precizează cum sunt determinate valorile și ce documente le susțin. O fotografie a unei hale pe jumătate goale nu înlocuiește evidența contabilă și operațională.</p>
<p>Întreabă cum trebuie declarate variațiile de stoc în forma contractuală propusă. Cere explicația sumei asigurate, a eventualelor limite pe categorii și a situațiilor în care este necesară notificarea unei schimbări. Nu introduce automat valoarea medie dacă firma poate avea o concentrare semnificativă într-o anumită perioadă. Baza acceptată trebuie stabilită în documente.</p>
<h2>Bunurile clienților nu sunt automat bunurile firmei</h2>
<p>Dacă păstrezi marfă pentru alte companii, identifică proprietarul și baza primirii acesteia. Păstrează evidența loturilor și a momentelor de intrare și ieșire. Nu transmite pentru o primă discuție liste complete cu date confidențiale ale clienților dacă sunt suficiente categorii și valori agregate. Stabilește întâi ce informații sunt necesare și canalul de transmitere.</p>
<p>Separă întrebarea despre asigurarea mărfurilor de cea privind răspunderea operatorului pentru prejudicii. O pierdere a bunurilor clientului și o pretenție împotriva depozitarului nu se analizează prin simpla schimbare a titlului poliței. Prezintă contractele relevante și cere delimitarea protecției propuse, fără să promiți partenerilor că orice situație este acoperită.</p>
<h2>Ce activități se desfășoară efectiv în depozit</h2>
<p>Descrie recepția, sortarea, reambalarea, etichetarea, stocarea și expedierea, dacă există. Arată dacă se fac operațiuni tehnice asupra produselor sau doar păstrare. Include utilizarea stivuitoarelor, a benzilor transportoare și a rampelor. Două depozite cu aceeași suprafață pot avea expuneri diferite în funcție de modul real de lucru.</p>
<p>Notează și activitățile desfășurate de subcontractori. Pentru mentenanță, lucrări temporare ori intervenții asupra instalațiilor, întreabă ce informații trebuie comunicate și ce condiții trebuie respectate. Nu considera orice activitate secundară inclusă doar fiindcă se desfășoară în interiorul amplasamentului. Cererea trebuie să descrie operațiunile care pot influența evaluarea.</p>
<h2>Prevenirea incendiilor și securitatea se documentează</h2>
<p>Pregătește informații despre detectarea incendiului, sistemele de alarmă, accesul în spațiu și întreținerea instalațiilor. Descrie situația existentă, inclusiv punctele încă în remediere. Nu declara un sistem drept funcțional doar pentru că apare într-un plan vechi. În discuția tehnică, distinge între echipament instalat, verificat și utilizat potrivit procedurii interne.</p>
<p>Documentează felul în care sunt păstrate bunurile și accesul la căile de circulație. Nu transforma lista editorială într-un audit de securitate la incendiu sau într-o certificare a conformității. Cerințele legale se verifică separat cu specialiștii competenți. Pentru asigurare, cere în scris cerințele concrete ale propunerii și consecințele nerespectării lor.</p>
<h2>Camere frigorifice și mărfuri sensibile</h2>
<p>Pentru produse care cer temperatură sau umiditate controlată, descrie intervalele operaționale, monitorizarea, alimentarea electrică și soluțiile de rezervă. Separă avarierea echipamentului de deteriorarea mărfii și de cheltuiala mutării stocului. Existența unei polițe pentru clădire nu confirmă automat acceptarea tuturor acestor consecințe.</p>
<p>Întreabă expres despre oprirea instalațiilor, întreruperea alimentării și perioadele de stocare acceptate, fără să presupui răspunsul. Păstrează documentele de întreținere și evidențele relevante ale condițiilor de păstrare. Dacă unele bunuri au nevoie de un regim special, identifică-le separat de mărfurile obișnuite din hală. Nu le ascunde într-o categorie generală.</p>
<h2>Depozitarea nu este același lucru cu transportul CARGO</h2>
<p>Arată când marfa intră în depozit, cât rămâne și în ce moment este predată transportatorului. Separă stocarea obișnuită de oprirea temporară pe traseul unei expediții. Pentru o poliță CARGO, etapele și duratele trebuie citite în condițiile acelei polițe. Nu folosi o denumire despre transport drept confirmare pentru stocarea nelimitată.</p>
<p>Construiește o cronologie simplă pentru un lot: recepție, verificare, păstrare, pregătire, încărcare și plecare. Identifică documentul care justifică fiecare predare și persoana care păstrează dovada. Această organizare ajută analiza unei situații, dar nu stabilește singură răspunderea și nici obligația asigurătorului de a plăti.</p>
<h2>Ce se întâmplă dacă depozitul nu poate funcționa</h2>
<p>Identifică activitatea care ar trebui mutată și resursele necesare pentru aceasta. Există un spațiu alternativ, echipamente disponibile și posibilitatea de a păstra condițiile mărfii? Notează costurile orientative separat de sumele confirmate prin oferte. Un plan de continuitate este o măsură de organizare, nu calculul unei despăgubiri.</p>
<p>Dacă soliciți analiza întreruperii activității, cere delimitarea evenimentului declanșator, a perioadei și a cheltuielilor luate în considerare. Nu confunda reparația halei cu revenirea fluxurilor logistice la nivelul obișnuit. Întârzierea livrărilor, penalitățile față de clienți și pierderea comenzilor trebuie discutate distinct, fără a fi prezentate ca incluse implicit.</p>
<h2>Dosarul util înainte de compararea ofertelor</h2>
<ul><li>Adresa, destinația și schița funcțională a amplasamentului.</li><li>Calitatea firmei: proprietar, chiriaș sau operator pentru alte companii.</li><li>Inventarul clădirilor, instalațiilor și echipamentelor.</li><li>Categoriile de stoc, valorile justificate și variația sezonieră.</li><li>Separarea bunurilor proprii de bunurile aflate în păstrare.</li><li>Descrierea operațiunilor și a condițiilor speciale de depozitare.</li><li>Sistemele de prevenire, întreținerea și istoricul incidentelor relevante.</li><li>Întrebările despre transport, răspundere și continuitate care cer analiză separată.</li></ul>
<p>Trimite aceeași versiune a dosarului pentru fiecare propunere. Marchează ce date sunt estimative și ce documente urmează să fie completate. Cere un răspuns pentru categoriile neacceptate sau care necesită condiții suplimentare. Nu compara numai prima de asigurare, adică suma plătită pentru asigurare, fără să vezi ce bunuri și situații au fost analizate.</p>
<h2>Extinderea depozitului și modificările din timpul anului</h2>
<p>Un nou chiriaș, o zonă suplimentară de stocare sau introducerea unei activități de ambalare pot schimba descrierea amplasamentului. Notează data și întinderea modificării, apoi cere clarificarea documentelor necesare pentru analiză. Nu aștepta următoarea reînnoire pentru a discuta o situație care nu apare în dosarul inițial al depozitului.</p>
<p>Separă proiectul de modificare de starea existentă: lucrări planificate, lucrări în curs și spațiu deja utilizat. O ofertă pregătită pentru hala funcțională nu este confirmare pentru toate riscurile lucrărilor de extindere. Dacă sunt implicați antreprenori, descrie rolurile lor și cere evaluarea distinctă a cerințelor de asigurare, fără a presupune că polițele se înlocuiesc reciproc.</p>
<h2>Cum organizezi documentele unui incident în depozit</h2>
<p>Pregătește din timp o procedură internă pentru păstrarea faptelor și pentru contactarea persoanelor responsabile. După un incident, respectă instrucțiunile aplicabile și nu compromite siguranța pentru a obține fotografii. Evidența loturilor, recepțiile, constatările și documentele de valoare pot ajuta clarificarea situației, dar lista exactă este stabilită pentru dosarul concret.</p>
<p>Arată separat bunurile firmei și ale clienților, poziția lor în amplasament și perioada la care se referă datele. Nu comunica o concluzie privind despăgubirea înainte de analiză și nu schimba documentele pentru a le face să corespundă unei descrieri inițiale greșite. Insurance ING Broker SRL este broker; decizia contractuală privind dauna aparține asigurătorului.</p>
<h2>Întrebări frecvente despre asigurarea depozitelor</h2>
<h3>Polița proprietarului halei protejează și marfa mea?</h3><p>Nu presupune acest lucru. Cere documentele aplicabile și verifică obiectul, persoanele protejate și interesul asupra stocurilor propriei firme.</p>
<h3>Cum aleg suma pentru un stoc care se schimbă?</h3><p>Pregătește istoricul și vârfurile de stoc, apoi cere explicarea formei de declarare și a bazei de evaluare acceptate de asigurător.</p>
<h3>Un depozit frigorific se asigură la fel ca o hală obișnuită?</h3><p>Nu trata cele două situații ca identice. Descrie instalațiile, regimul mărfii și dependența de energie, apoi verifică separat fiecare consecință solicitată.</p>
<h3>Oprirea activității este inclusă în asigurarea clădirii?</h3><p>Nu o considera inclusă automat. Cere analiza distinctă a pierderilor și condițiilor propuse, folosind date despre activitatea reală a depozitului.</p>`
  },
};
