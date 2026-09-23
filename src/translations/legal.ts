import { Language } from '../translations';

export interface LegalContent {
  title: string;
  titleItalic: string;
  subtitle: string;
  officialDocument: string;
  lastUpdate: string;
  sections: any[];
}

export const legalTranslations: Record<Language, { terms: LegalContent; privacy: LegalContent }> = {
  ro: {
    terms: {
      title: "Termeni și",
      titleItalic: "Condiții.",
      subtitle: "Cu privire la modalitatea de eliberare electronică a polițelor de asigurare comandate prin intermediul aplicației eAsigurari a companiei BAR ”Insurance ING Broker” SRL.",
      officialDocument: "Document Oficial",
      lastUpdate: "Ultima actualizare: 08 Aprilie 2026 | BAR Insurance ING Broker SRL",
      sections: [
        {
          title: "Informații Generale",
          content: "Vă rugăm ca, în calitatea dvs. de vizitator al site-ului nostru, să citiți cu atenție Termenii și Condițiile de pe platforma digitală eAsigurari.com. Continuarea utilizării site-ului și plasării cererii de ofertă de asigurare, procesarea și emiterea polițelor de asigurare, reprezintă acordul DVS asupra acestor Termeni și Condiții.\n\nPentru toate informațiile existente pe acest site, dreptul de autor este deținut de BAR ”Insurance ING Broker” SRL. Niciun material de pe acest site sau din acest document nu poate fi reprodus parțial, integral sau modificat fără acordul expres exprimat de BAR ”Insurance ING Broker” SRL, ori de titularul acestui drept."
        },
        {
          title: "1. Date juridice și informații generale despre BAR Insurance ING Broker SRL",
          content: "Denumirea: BAR „Insurance ING Broker” SRL\nAdresa: mun. Chișinău, str. Pan Halippa, 9\ne-mail: andrei.moraru@ingbroker.md, ion.dascalu@ingbroker.md\ntel./fax: +373 22 10 66 56, gsm: +373 79030209, +373 79526003\nCod fiscal: 1017600019386\nCod IBAN: MD37VI022322900000003MDL\nCod bancar: VICBMD2X490\nBC: \"Victoria Bank\" SA, mun. Chișinău\nAdministrator: Ion Dascălu"
        },
        {
          title: "2. Noțiuni",
          content: "2.1. Noțiuni generale de asigurare:\nactivitate de asigurare - activitate care constă, în principal, din: oferirea, negocierea și încheierea de contracte de asigurare și reasigurare, încasarea de prime, lichidarea de daune, efectuarea de acțiuni de regres și de recuperare;\n\nagent de asigurare - persoană fizică sau persoană juridică ce desfășoară activitate profesională în baza mandatului acordat de asigurător, având dreptul să încheie, în numele și din contul asigurătorului, contracte de asigurare cu terții, conform condițiilor stipulate în contractul de mandat, fără să aibă calitatea de asigurător, neasigurător, agent bancassurance sau de broker de asigurare și/sau de reasigurare;\n\nasigurare - transfer al unui risc eventual, inclusiv al riscului unei pierderi financiare şi/sau al unei pagube materiale, de la asigurat la asigurător, în conformitate cu contractul de asigurare;\n\nasigurat - persoană care are încheiat sau pentru care s-a încheiat un contract de asigurare cu asigurătorul;\n\nasigurător (reasigurator) - persoană juridică înregistrată în Republica Moldova care, în condițiile legii, deține licență pentru desfășurarea activității de asigurare (reasigurare);\n\nautoritate de supraveghere – Comisia Națională a Pieței Financiare;\n\ncaz asigurat - risc asigurat, prevăzut în contractul de asigurare, a cărui producere conferă asiguratului dreptul de a fi indemnizat sau despăgubit de către asigurător;\n\ncheltuieli de achiziție – cheltuieli ocazionate de încheierea contractelor de asigurare. Ele cuprind atât cheltuielile direct imputabile, precum comisioanele de achiziție și cheltuielile de deschidere de dosar sau de acceptare a contractelor de asigurare în portofoliu, cât și cheltuielile indirect imputabile, precum cheltuielile de publicitate sau cheltuielile administrative legate de prelucrarea cererilor și de eliberarea polițelor de asigurare;\n\ncondiții de asigurare – set de norme și condiții aprobate de către asigurător în scopul reglementării subscrierii de riscuri specifice produselor de asigurare și stabilirii relațiilor juridice între subiecții asigurării.\n\ncontractant al asigurării – persoană care încheie contractul de asigurare pentru asigurarea unui risc privind o altă persoană și se obligă față de asigurător să plătească prima de asigurare, fără a obține calitatea de asigurat;\n\nfranșiză - parte din prejudiciu suportată de asigurat, care este stabilită în calitate de sumă fixă sau de procent din despăgubirea de asigurare ori din suma asigurată și care este prevăzută în contractul de asigurare;\n\nprimă brută subscrisă - primă calculată de asigurător (reasigurator) conform unui contract de asigurare (reasigurare), înainte de deducerea oricăror sume din aceasta;\n\nrisc - eveniment inconvenient, posibil și viitor care ar putea afecta bunurile, capacitatea de muncă, viața ori sănătatea persoanei;\n\nrisc asigurat - fenomen, eveniment sau grup de fenomene sau evenimente prevăzute în contractul de asigurare care, odată produse, pot genera prejudicii bunurilor sau persoanei asigurate. (În asigurările de viață, fenomenul de supraviețuire și fenomenul de deces se încadrează în noțiunea de risc asigurat); reasigurare - cedare parțială sau integrală a unor riscuri subscrise de un asigurător, denumit reasigurat (cedent), unui alt asigurător, denumit reasigurator (cesionar), care, la rândul său, își asumă angajamentul să recupereze o parte corespunzătoare din despăgubirea de asigurare acordată;\n\n2.2. Noțiuni specifice asigurării obligatorie de răspundere civilă pentru pagube produse de autovehicule:\naccident de autovehicul - eveniment neprevăzut, întâmplător provocat de unul sau mai multe autovehicule, care cauzează prejudicii unor persoane și care poate da naștere unor pretenții de despăgubire;\n\nasigurare obligatorie de răspundere civilă pentru pagube produse de autovehicule (în continuare asigurare obligatorie de răspundere civilă auto) - contract de asigurare, probat prin polița de asigurare RCA și/sau certificat de asigurare ”Carte Verde”, prin care un asigurător licențiat, în condițiile prezentei legi, să practice asigurare obligatorie de răspundere civilă auto se obligă, în baza unei prime plătite de asigurat, să despăgubească prejudiciile cauzate prin accident de autovehicul în perioada de valabilitate a contractului de asigurare;\n\nautovehicul - sistem mecanic terestru cu autopropulsie, cu excepția celui care circulă pe sine, pentru transportul de călători, bagaje și mărfuri sau care execută orice alte lucrări și servicii aferente transporturilor - autoturisme, autobuze, micro-autobuze, troleibuze, autocamioane, inclusiv specializate, motocicluri, tractoare.\n\ndaună parțială – avarierea autovehiculului în măsura în care recondiționarea sau înlocuirea părților componente și a pieselor avariate este posibilă și valoarea pagubei real suportate nu depășește 75% din valoarea autovehiculului la data producerii accidentului;\n\ndaună totală – distrugerea sau avarierea autovehiculului în măsura în care recondiționarea sau înlocuirea părților componente și a pieselor avariate nu mai este posibilă ori în care valoarea pagubei real suportate depășește 75% din valoarea autovehiculului la data producerii accidentului;\n\ndosar de daune - dosar care include totalitatea documentelor necesare constatării și soluționării cazului de asigurare;\n\npersoană păgubită - orice persoană îndreptățită să primească despăgubire de asigurare pentru orice pagubă sau vătămare corporală provocată în urma unui accident de autovehicul;\n\npoliță de asigurare RCA - poliță de asigurare obligatorie de răspundere civilă auto cu valabilitate în limitele teritoriului Republicii Moldova, care probează încheierea contractului de asigurare obligatorie de răspundere civilă auto;\n\ncertificat de asigurare „Carte Verde” - document internațional de asigurare, eliberat în numele unui birou național, care atestă existenta asigurării obligatorii de răspundere civilă auto cu valabilitate în afara teritoriului țării emitente, în conformitate cu Recomandarea nr. 5 din 25 ianuarie 1949, adoptată de Subcomitetul de Transport Rutier al Comitetului de Transporturi Interioare din cadrul Comisiei Economice pentru Europa a Organizației Națiunilor Unite;\n\nposesor de autovehicul - proprietarul de drept al autovehiculului, precum și persoana care posedă autovehiculul în temeiul unui contract de locațiune, contract de leasing sau al unor alte titluri prevăzute de legislație;\n\nprejudiciu - efect negativ suferit de persoana fizică sau de persoana juridică păgubită în urma producerii unui risc acoperit printr-un contract de asigurare obligatorie de răspundere civilă auto; Regulament general al Consiliului Birourilor - document oficial, adoptat de Consiliul Birourilor la Rethymno (Creta) la 30 mai 2002, care încorporează toate prevederile obligatorii ce guvernează relațiile dintre birourile naționale ale asigurătorilor din statele membre ale Sistemului International de Asigurări \"Carte Verde\";\n\nutilizator de autovehicul - orice persoană care conduce autovehiculul: asiguratul, persoanele prevăzute în contractul de asigurare, alte persoane care conduc autovehiculul cu sau fără consimțământul posesorului; în cadrul instruirii la cursurile de șofer, se consideră utilizator persoana care efectuează instruirea în conducerea autovehiculului;\n\nsistem Bonus-Malus - sistem de reduceri și de majorări ale primei de asigurare obligatorie de răspundere civilă auto acordate în funcție de istoricul asigurărilor și daunelor;\n\nvaloare rămasă – valoarea pârților din autovehicul rămase neavariate, demontabile și valorificabile în caz de daună totală a acestuia.\n\n2.3. Alte noțiuni:\nadresa IP - este un număr utilizat în exclusivitate de către toate echipamentele ce țin de tehnologia informației (router, modemuri, calculatoare, telefoane inteligente etc.) ce le permite sa se identifice și să comunice între ele într-o rețea de calculatoare;\n\ncanal electronic de comunicare – mecanism prin care o persoană poate iniția o discuție cu asigurătorul și recepționa răspunsuri, precum: email oficial, chat integrat în site (JivoChat), pagină oficială din rețele de socializare și alte aplicații sau platforme de messaging online acceptate de asigurător;\n\ncard bancar — cardul de credit sau debit, emis de către o bancă, constituind un instrument de plată fără numerar, ce oferă posesorului posibilitatea de a efectua operațiuni de decontare electronice cu mijloace bănești;\n\ncookie-uri – fișiere de text special, păstrate de browser-ul vizitatorului de site, stocate pe dispozitivul acestuia, care poate fi utilizat pentru recunoașterea vizitatorilor, pentru a adapta pagina la conținutul afișat anterior și/sau implementarea sistemului de „coș de cumpărături”;\n\nlink – este o referință către o pagină web, prin care Utilizatorului paginii web i se oferă posibilitatea navigării de la o pagină la alta, pentru a accesa referința Utilizatorul trebuie să facă click pe link-ul oferit;\n\nofertă - propunerea de preț și condiții de asigurare înaintată de către asigurător, prin diferite canale de comunicare, ca urmare a completării unui formular electronic, în formă scrisă sau solicitării verbale și furnizării de către solicitant a datelor necesare formării ofertei respective, inclusiv furnizarea datelor cu caracter personal;\n\nplată online - efectuarea operațiuni de decontare electronică a mijloacelor bănești, cu carduri bancare, prin oferirea de unui link unic pe pagină web securizată a băncii.\n\npoliță de asigurare electronică – polița de asigurare emisă de asigurător în baza unei cereri scrise sau solicitări electronice, ca urmare a acordului contractantului/asiguratului asupra acestor Termeni și Condiții, achitării primei de asigurare prin mijloace electronice de plată și transmiterii poliței de asigurare la o adresă electronică indicată cerere/solicitare;\n\nvizitator al site-ului – persoană fizică sau reprezentantul persoanei juridice care prin mijloace electronice a deschis pagina web easigurari.com pentru a obține careva informație, a contacta compania sau a iniția online o procedură de achiziție; a se avea în vedere și navigator sau utilizator al paginii web."
        },
        {
          title: "3. Politica de confidențialitate cu privire la prelucrarea datelor cu caracter personal.",
          content: "Prelucrarea datelor cu caracter personal se efectuează cu consimțământul solicitantului după ce a luat cunoștință cu prezentul document. BAR Insurance ING Broker SRL prelucrează date cu caracter personal în conformitate cu dispozițiile LEGII Nr. 195/2024 privind protecția datelor cu caracter personal.\n\nÎn cazul incapacității de exercițiu sau al capacității de exercițiu limitate a subiectului datelor cu caracter personal, consimțământul privind prelucrarea datelor cu caracter personal se acordă, în formă scrisă, de către reprezentantul lui legal. Iar semnarea contractului de asigurare poate fi efectuată doar cu reprezentantul legal.\n\nPrin transmiterea datelor cu caracter personal, utilizatorul este de acord cu prelucrarea acestora în scopul obținerii ofertelor, contractelor și polițelor de asigurare precum și alte informații sau acte. Dacă Utilizatorul nu dorește să furnizeze în regim online, prin canale electronice de comunicare, datele sale cu caracter personal, atunci Utilizatorul va apela la numărul de telefon +373 79526003 pentru a obține o consultație sau se va adresa direct în oficiile teritoriale pentru soluționarea solicitării. Utilizatorii care nu doresc să transmită date cu caracter personal prin canale de comunicare electronice nu pot beneficia în regim online și electronic de oferte și/sau servicii de asigurare.\n\nBAR Insurance ING Broker SRL obține informația despre adresa IP a dispozitivului Utilizatorului. Această informație nu este utilizată pentru identificarea persoanelor.\n\nÎn conformitate cu prevederile art. 12–18 ale Legii nr. 195/2024 privind protecția datelor cu caracter personal, subiectul datelor cu caracter personal dispune de dreptul de informare, dreptul de acces la datele cu caracter personal, dreptul de intervenție asupra datelor cu caracter personal, dreptul de opoziție al subiectului datelor cu caracter personal, dreptul de a nu fi supus unei decizii individuale, dreptul de acces la justiție.\n\nBAR Insurance ING Broker SRL respectă confidențialitatea și securitatea prelucrării datelor cu caracter personal și celelalte prevederi ale LEGII Nr. 195/2024 privind protecția datelor cu caracter personal.\n\nBAR Insurance ING Broker SRL este înregistrată în Registrul de evidență a operatorilor de date cu caracter personal, cu nr. 0003299.\n\nÎn scopul exercitării drepturilor prevăzute de Lege, subiectul datelor cu caracter personal este în drept să se adreseze cu o cerere scrisă către BAR Insurance ING Broker SRL la sediul său central sau la adresa de email: ingbroker@ingbroker.md."
        },
        {
          title: "4. Politica de informare despre cookie-uri.",
          content: "Site-ul easigurari.com și aplicația eAsigurari utilizează cookie-uri, iar acceptarea prezentului document și continuarea navigării și/sau plasării comenzii, reprezintă acceptul de utilizare a cookie."
        },
        {
          title: "5. Condiții de asigurare.",
          content: "Condițiile de asigurare ale asigurătorului sânt obligatorii pentru asigurat dacă contractul prevede expres aplicarea lor și dacă ele sânt expuse în textul contractului sau pe verso ori fac parte integrantă a contractului sub formă de anexă. În cazul în care condițiile de asigurare se prezintă în anexe la contractul de asigurare, faptul înmânării anexelor de către asigurător asiguratului se notifică în textul contractului.\n\nAsiguratul are dreptul să facă cunoștință cu condițiile de asigurare ale asiguratorului, specifice produselor de asigurare, înainte de semnarea contractelor de asigurare. Emiterea polițelor de asigurare RCAI și certificatelor de asigurare RCAE „Carte Verde” are loc în baza Legii nr. 106 din 21.04.2022 cu privire la asigurarea obligatorie de răspundere civilă pentru pagube produse de autovehicule și altor acte normative în vigoare.\n\nCondiții de asigurare specifice emiterii poliței de asigurare benevolă de sănătate a cetățenilor care pleacă temporar în străinătate, în regim electronic sunt Grawe Carat SA, Asterra Grup SA:\n\nDacă în momentul plasării comenzii și achitării poliței de asigurare electronice, persoana asigurată nu se află pe teritoriul Republicii Moldova, răspunderea asigurătorului începe după 72 de ore, calculate din data recepționării plății, chiar dacă polița de asigurare a intrat în vigoare.\n\nAchitarea are loc prin mijloace electronice de plată sau transfer.\n\nEmiterea poliței de asigurare electronice are loc doar după recepționarea plății de către asigurător.\n\nTransmiterea poliței are loc prin email și facultativ prin alte canale electronice de comunicare, la un destinatar indicat de contractant/asigurat.\n\nContractantul/asiguratul are obligația confirmării recepționării poliței de asigurare și corectitudinii informației înscrise ca și răspuns prin același canal de comunicare. Astfel, recunoscând relațiile juridice în baza poliței de asigurare recepționate și condițiilor de asigurare."
        },
        {
          title: "6. Obligațiile asigurătorului și asiguratului.",
          content: "Obligațiile asiguratorului.\n\nAsigurătorul este obligat:\nSă aducă la cunoștința asiguratului, într-o formă adecvată, condițiile asigurării;\nSă efectueze plata, la apariția dreptului asiguratului sau al beneficiarului asigurării de a încasa suma asigurată sau despăgubirea de asigurare, în termenul stabilit în condițiile de asigurare;\nSă compenseze asiguratului cheltuielile aferente evitării producerii cazului asigurat sau limitării oportune a prejudiciilor pasibile de despăgubire;\nSă păstreze confidența informației despre asigurat și a persoanelor asigurate, de care a luat cunoștință în procesul asigurării;\nLegea și contractul de asigurare pot prevedea și alte obligații pentru asigurător;\n\nObligațiile asiguratului:\n\nAsiguratul este obligat:\nSă informeze asigurătorul, la încheierea contractului, despre toate circumstanțele esențiale referitoare la mărimea riscului ce se asigură;\nSă informeze asigurătorul despre alte contracte de asigurare încheiate la obiectul respectiv;\nSă plătească la timp primele de asigurare;\nSă întreprindă acțiuni dependente de el pentru a evita producerea cazului asigurat sau pentru a limita pagubele cauzate de producerea lui;\nSă informeze asigurătorul de producerea evenimentului asigurat îndată ce a aflat despre aceasta;\nLegea și contractul de asigurare pot prevedea și alte obligații pentru asigurat;"
        },
        {
          title: "7. Plasarea cererii de ofertă online și calculul primei de asigurare.",
          content: "Plasarea cererii online are loc prin completarea formularului specific. Procesarea cererii poate fi efectuată doar dacă vizitatorul site-ul a luat cunoștință cu prezentul document și a bifat manual și conștient ”Am citit termenii și condițiile și sunt de acord cu aceasta”.\n\nPersoanele care plasează cereri de oferte au capacitatea deplină de exercițiu. Asigurătorul are dreptul, preventiv semnării contractului de asigurare, să identifice contractantul/asiguratul care a înaintat cererea online.\n\nPentru efectuarea calcului primei de asigurare și eventual emiterea contractului de asigurare reprezentantul asigurătorului are dreptul să solicite și alte informații nespecificate în formular.\n\nModalitatea de comunicare și completarea a cererii, poate fi efectuată în scris, prin metode electronice de comunicare și corespondență sau verbal.\n\nPlasarea cererii poate fi efectuată prin inițierea discuției în modulele JivoChat, Viber, Telegram, WhatsUp sau Instagram care sunt integrate pe site. Comunicarea și prelucrarea solicitărilor prin modulul JivoChat, Viber, Telegram, WhatsUp sau Instagram este efectuată în baza condițiilor din acest document.\n\nCalculul primei de asigurare este efectuată de către Asigurător în baza cererii solicitantului. Procesarea are loc prin intermediul sistemelor electronice și conform tarifelor aprobate de Asigurător."
        },
        {
          title: "8. Încheierea contractului de asigurare.",
          content: "Pentru încheierea contractului de asigurare, asiguratul prezintă asigurătorului propunere (cerere) scrisă inclusiv electronic, în care indică interesul propriu și cel al beneficiarului asigurării sau declară verbal că dorește să încheie contract de asigurare.\n\nContractul de asigurare poate fi încheiat în favoarea mai multor beneficiari.\n\nContractul de asigurare se încheie în formă scrisă, și în regim online ale acestui produs, este reglementat de Legea 284 din 22.07.2004 privind comerțul electronic, după puterea juridică, contractul electronic se echivalează cu contratul în formă scrisă, semnat de părți și autentificat cu ștampilele părților.\n\nContractul de asigurare este format din cererea contractantului, polița de asigurare emisă de asigurător și condițiile generale de asigurare aplicabile, precum și din alte condiții contractuale incluse în contract conform legii.\n\nDispozițiile din p. 8.4 nu afectează dreptul părților de a întocmi un înscris unic care va cuprinde întregul contract de asigurare.\n\nContractul de asigurare nu se poate dovedi prin martori, chiar dacă există un început de dovadă scrisă.\n\nDovada încheierii contractului de asigurare rezultă și din trimiterea unui document de asigurare, precum poliță de asigurare (certificat), din cererea de plată a primei ori din înscrisul prin care se constată efectuarea acestei plăti sau din orice înscris din care reiese faptul încheierii contractului.\n\nAsigurătorul este obligat să remită asiguratului un exemplar, semnat de el, al poliței de asigurare.\n\nÎn cazul în care, contractul de asigurare, inclusiv RCA, este încheiat prin utilizarea mijloacelor electronice, iar persoana nu a aplicat semnătura electronică calificată avansată, se prezumă că prin plata primei de asigurare, contractantul a consimțit încheierea contractului.\n\nÎn polița de asigurare se va indica:\n- numele sau denumirea, domiciliul sau sediul părților contractante;\n- după caz, numele sau denumirea, domiciliul sau sediul asiguratului și/sau beneficiarului, obiectul asigurării;\n- riscurile ce se asigură;\n- începutul și durata perioadei asigurării;\n- suma asigurată și, dacă s-a convenit, partea din prejudiciu pe care asigurătorul nu o despăgubește (franșiza);\n- prima de asigurare, locul și termenele de plată;\n- alte date, conform legii sau acordului dintre părți\n\nEtapele parcurse pe aplicația eAsigurari pentru încheierea contractului/poliței de asigurare de către Utilizator:\n1. solicită ofertă, prin completarea formularului/cererii, accesând modulul ”COMANDĂ”, sau prin solicitare în modulele integrate în site JivoChat, Viber, Telegram, WhatsUp sau Instagram.\n2. ia cunoștință cu acest document - \"Termeni și Condiții\" și este de acord cu prelucrarea datelor cu caracter personal,\n3. furnizează informații suplimentare necesare înaintării unei oferte de către operatorul BAR Insurance ING Broker SRL,\n4. recepționează oferta de asigurare, acordă acceptul pentru oferta recepționată și condițiile de asigurare,\n5. alege metoda de plată și efectuează plata,\n6. stabilește cu operatorul BAR Insurance ING Broker SRL metoda și/sau locul de obținere a contractului/poliței de asigurare,\n7. recepționează exemplarul de contractul/polița de asigurare."
        },
        {
          title: "9. Limba contractului de asigurare.",
          content: "Limba utilizată în relațiile juridice dintre asigurător și contractant este limba de stat."
        },
        {
          title: "10. Plata primei de asigurare și condiții de achitare online.",
          content: "Prima de asigurare reprezintă suma pe care asiguratul este obligat să o plătească asigurătorului, la eliberarea poliței de asigurare, în modul și în termenul prevăzut de contractul de asigurare, în schimbul preluării de către asigurător a riscului asigurat.\n\nPlata primei de asigurare se face integral sau în rate plătibile la termenele scadente prevăzute în contract, la sediul asigurătorului sau al reprezentanților săi dacă în contractul de asigurare nu se prevede altfel.\n\nPrima de asigurare se plătește integral pentru toată perioada de asigurare specificată în polița de asigurare RCA și/sau în certificatul de asigurare „Carte Verde”.\n\nDovada plății primei de asigurare revine asiguratului, înscrisul constatator fiind cecul de casă sau ordinul de plată.\n\nPlata online poate fi efectuată prin:\n- modulul securizat MAIBPAY al BC ”Moldova-Agroindbank” S.A., prin accesarea unui link unic generat de operatorul Insurance ING Broker SRL, direct de pe situl easigurari.com sau expediat pe emailul solicitantului;\n- internet/mobile banking al BC ”VictoriaBank” S.A., la compartimentul ”Plăți”, ”Servicii financiare”, ”Insurance ING Broker” SRL;\n- prin intermediul Prestatorilor serviciilor de plată: ”Qiwi-M” SRL, ”BPAY” SRL.\n\nOperatorul BAR Insurance ING Broker SRL poate solicita remiterea de către contractant a înscrisul constatator al efectuării plății online în scopul optimizării timpului de emitere a poliței de asigurare.\n\nPrin sistemele de plăți VISA și MasterCard."
        },
        {
          title: "11. Alte cheltuieli legate de încheierea contractului de asigurare.",
          content: "Contractantul nu suportă costuri suplimentare asociate încheierii contractului de asigurare, cu excepția plății primei de asigurare."
        },
        {
          title: "12. Modificare, încetarea, rezoluțiunea și nulitatea contractului de asigurare.",
          content: "Modificarea și rezoluțiunea contractelor de asigurare poate fi efectuată în baza cererii în scris, depusă la reprezentanțele, oficiile teritoriale sau oficiul central al Insurance ING Broker SRL, de către contractant/asigurat sau altă persoană împuternicită să facă acest act.\n\nContractul de asigurare încetează în următoarele cazuri:\n- De drept;\n- Prin rezoluțiune;\n- Prin nulitate.\n\nÎncetarea de drept a contractului de asigurare poate avea loc:\n- prin acordul părților;\n- la expirarea termenului său de acțiune;\n- la îndeplinirea de către asigurător a obligațiilor contractuale;\n- la lichidarea contractantului/asiguratului persoană juridică sau la decesul asiguratului persoană fizică;\n- la lichidarea asigurătorului, în modul stabilit de legislație;\n- în alte cazuri prevăzute de legislație.\n\nRezoluțiunea contractului de asigurare:\nRezoluțiunea reprezintă încetarea contractului de asigurare, la inițiativa uneia dintre părți, ca urmare a neexecutării obligațiilor contractuale de către cealaltă parte.\n\nContractul de asigurare poate fi rezoluționat, la cererea asigurătorului sau contractantului/asiguratului, doar în cazul în care partea opusă nu își onorează obligațiile prevăzute de contract sau încalcă legislația, respectând un termen de preaviz de 30 de zile;\n\nAsigurătorul declară rezoluțiunea prin declarație scrisă față de contractant chiar dacă o altă persoană are calitatea de asigurat sau de beneficiar al asigurării.\n\nLa rezoluțiunea contractului de asigurare ca urmare a stingerii interesului asigurat, contractantul/asiguratul datorează doar acea parte din primă ce corespunde duratei riscului. Asigurătorul poate cere o taxă corespunzătoare pentru cheltuielile și operațiunile făcute pentru încheierea contractului de asigurare.\n\nÎn cazul rezoluțiunii asigurării, asigurătorul are dreptul doar la prima care se atribuie perioadei de asigurare care a curs efectiv înainte de data rezoluțiunii. Cu toate acestea, în cazul rezoluțiunii asigurării, asigurătorul păstrează prima pentru întreaga perioadă de asigurare, dacă un caz de asigurare s-a produs.\n\nÎn cazul în care rezoluțiunea s-a produs din cauza neexecutării fără justificare a obligației uneia din părți, dreptul celeilalte părți la repararea prejudiciului rămâne neafectat. În special, în acest caz, asigurătorul poate cere rambursarea sau, după caz, poate reține cheltuielile de gestiune chiar dacă perioada de asigurare nu a curs ori a fost suspendată, precum și, în condițiile prevăzute la art. 942 Cod Civil, poate cere dobândă de întârziere sau penalitate asupra sumelor la care are dreptul după rezoluțiune.\n\nLa rezoluțiunea contractului de asigurare, contractantului i se restituie primele de asigurare pentru lunile complete rămase până la expirarea contractului, reținând suma cheltuielilor efective de gestiune.\n\nPărțile pot cere rezoluțiunea contractului de asigurare și în alte cazuri expres prevăzute de lege, condiții de asigurare sau de contract.\n\nRezoluțiunea asigurării nu stinge obligația asigurătorului aferentă unui caz asigurat produs în interiorul perioadei de asigurare care a curs efectiv înainte de data rezoluțiunii.\n\nRezoluțiunea contractului de asigurare încheiat pentru un termen de 12 luni, nu poate avea loc, iar prima de asigurare pentru lunile rămase nu va putea fi restituită, în cazul în care contractul de asigurare a produs efecte juridice pentru o perioadă de cel puțin 10 luni.\n\nRezoluțiunea contractelor de asigurare de răspundere civilă auto externă cu perioada de asigurare pe un termen mai mic de o lună de zile calendaristice nu poate avea loc.\n\nNulitatea contractului de asigurare\n\nContractul de asigurare este nul în cazurile prevăzute de legislației în vigoare a Republicii Moldova, sau dacă a fost încheiat:\na) în condiții care contravin Legii cu privire la asigurări și/sau care defavorizează situația asiguratului în raport cu legislația în vigoare a Republicii Moldova;\nb) cu o persoană neautorizată să încheie contracte în numele asigurătorului;\nc) după producerea evenimentului pentru care contractul de asigurare prevede plata indemnizației de asigurare.\n\nÎn cazul nulității absolute a contractului de asigurare, Asigurătorul va restitui Asiguratului primele de asigurare încasate cu excluderea cheltuielilor de gestiune, doar în cazul în care Asigurătorul nu a achitat indemnizații de asigurare în baza contractului de asigurare declarat nul. Asigurătorul poate pretinde la repararea prejudiciului cauzat prin contractul de asigurare declarat nul. Asigurătorul nu este obligat să restituie primele încasate în temeiul contractului de asigurare anulat pe temeiul dolului."
        },
        {
          title: "13. Reclamații.",
          content: "Orice reclamație poate fi înregistrată oficial prin expedierea textului reclamației argumentate la adresa de email ingbroker@ingbroker.md sau să fie depusă fizic la adresa juridică a BAR Insurance ING Broker SRL. Totodată, pentru soluționarea operativă a petițiilor, urmează a se apela în orele de program 09.00 - 18.00 de luni până vineri, la numărul de telefon +373 79526003."
        },
        {
          title: "14. Modificarea informațiilor în acest document.",
          content: "Informațiile furnizate pe acest site pot fi modificate. BAR Insurance ING Broker SRL are dreptul de a modifica informațiile sau o parte din informațiile conținute pe această pagină fără notificare prealabilă către Utilizatori. Afișarea pe site-ul web și al aplicației e Asigurari al noului document este însoțită de informații privind modificările aduse. Acest document, precum și amendamentele sale, sunt disponibile pentru Utilizator pe pagina easigurari.com, și/sau pe aplicația eAsigurari.\n\nFolosirea unui Utilizator de site după efectuarea modificărilor în secțiunea \"Termeni și condiții\" este echivalentă cu familiarizarea cu acestea, înțelegerea și acceptarea acestora.\n\nDatele publicate au fost actualizate:\n- La apariția produselor noi de asigurare ale Insurance ING Broker SRL.\n- La actualizarea condițiilor de asigurare ale Insurance ING Broker SRL.\n- La apariția noilor metode da plată sau actualizării condițiilor metodelor de plată existente.\n- Odată cu apariția unei noi legislații sau modificări ale legislației și reglementărilor existente referitoare la asigurări.\n- Odată cu apariția unor noi legislații sau modificări ale legislației existente."
        }
      ]
    },
    privacy: {
      title: "Politica de",
      titleItalic: "Confidențialitate.",
      subtitle: "Angajamentul Insurance ING Broker SRL privind protecția datelor cu caracter personal, în conformitate cu Legea nr. 195/2024 și standardele internaționale de securitate.",
      officialDocument: "Document Oficial",
      lastUpdate: "Ultima actualizare: 08 Aprilie 2026 | BAR Insurance ING Broker SRL",
      sections: [
        {
          title: "1. Identitatea Operatorului",
          content: "Brokerul de Asigurare și Reasigurare Insurance ING Broker SRL (în continuare ING Broker sau Operatorul), înregistrată în registrul de evidența a operatorilor de date cu caracter personal cu nr. 210520CI653 din 20.05.2021 deținut de către Centrul Național pentru Protecția Datelor cu Caracter Personal, în vederea prestării serviciilor de asigurare, prelucrează datele cu caracter personal ale clienților săi, în conformitate cu prevederile legale relevante.\n\nÎn cazul în care intenționați să contractați servicii oferite de BAR Insurance ING Broker SRL, această notificare de confidențialitate va este pertinentă, în mod corespunzător."
        },
        {
          title: "2. Scopul Notificării",
          content: "Scopul prezentei notificări este de a întări încrederea clienților noștri în faptul că ING Broker are stabilite standarde înalte și armonizate la zi, în ceea ce ține de respectarea vieții private a clienților săi. Fiind una din topul companiilor de brokeraj de asigurări de pe piața Republicii Moldova, deținem volume semnificative de date personale, respectiv dorim, în calitate de operator, să asigurăm securitatea datelor pentru a vă proteja viața privată."
        },
        {
          title: "3. Colectarea Datelor",
          content: "Colectarea datelor cu caracter personal are loc prin furnizarea acestora de către clienți direct în oficiile companiei sau a intermediarilor, prin e-mail, prin centrul telefonic și prin poștă."
        },
        {
          title: "4. Categorii de Date Prelucrate",
          content: "Categoriile de date cu caracter personal care pot fi prelucrate de către ING Broker in activitatea de prestare a serviciilor de asigurare sunt: numele, prenumele, patronimicul clienților și a membrilor de familie (după caz), sexul, data și locul nașterii, semnătura, date din actele de stare civilă, date din certificatul de înmatriculare a autovehiculului, număr de telefon, e-mail, date biometrice sau antropometrice, profesie, loc de muncă, funcție, date bancare, cetățenia, date din permisul de conducere, sancțiuni administrative, adresă (domiciliul/reședință), număr personal de identificare de stat, date privind bunurile deținute, date din certificatele medicale, date privind starea de sănătate."
        },
        {
          title: "5. Scopurile Prelucrării",
          content: "ING Broker utilizează, colectează si prelucrează datele dumneavoastră personale în următoarele scopuri:\n- Prestarea serviciilor de asigurare și de reasigurare;\n- Pentru calculul primelor de asigurare comandate;\n- Facturarea polițelor de asigurare comandate;\n- Livrarea polițelor de asigurare comandate;\n- Pentru acordarea de beneficii clienților loiali și pentru îmbunătățirea permanenta a calității serviciilor si produselor oferite;\n- Raportări interne sau transfrontaliere după caz;\n- Soluționarea reclamațiilor și a solicitărilor din partea clienților;\n- Identificarea clienților, scanarea subiecților supuși sancțiunilor internaționale si detectarea si prevenirea potențialelor fraude."
        },
        {
          title: "6. Temeiuri Juridice",
          content: "Temeiurile juridice pentru prelucrarea datelor cu caracter personal pot fi:\n- Consimțământul expres a clientului, inclusiv cu scopul obținerii ofertelor, încheierii contractului de asigurare/polița;\n- Executarea obligațiunilor legale de către ING Broker (de exemplu in cadrul asigurărilor obligatorii de răspundere civila auto sau in cadrul măsurilor de prevenire şi combatere a spălării banilor (regulile “cunoaște-ți clientul”);\n- Efectuarea la cererea clientului a demersurilor si verificărilor premergătoare încheierii contractului de asigurare (cum ar fi accesarea platformei RCA Data, scanarea subiecților supuși sancțiunilor internaționale, etc, )."
        },
        {
          title: "7. Consecințele Refuzului",
          content: "Consecințele refuzului furnizării sau retragerii datelor personale\n\nAvem nevoie de datele personale enumerate pentru a fi executate obligațiunile legale în calitate de Intermediar în asigurări, precum și pentru a vă furniza serviciile contractuale. Dacă nu ne veți furniza datele personale solicitate, sau dacă vă retrageți consimțământul nu vom putea să vă furnizăm, în totalitate sau parțial, serviciile pe care le-ați solicitat."
        },
        {
          title: "8. Stocarea și Securitatea Datelor",
          content: "Stocarea datelor.\n\nING Broker în calitate de operator de date cu caracter personal, a luat măsuri tehnice și organizaționale corespunzătoare pentru a asigura protecția datelor clienților săi împotriva distrugerii accidentale sau ilegale, pierderii accidentale, modificării, accesului sau divulgării neautorizate.\n\nDatele personale furnizate Operatorului urmează a fi prelucrate cel puțin pe durata de valabilitate a contractului de asigurare, precum si ulterior, pe durata necesara executării obligațiilor contractuale de către oricare dintre părți. Datele personale vor fi stocate atât timp cat este necesar pentru scopurile menționate mai sus sau pe perioada de timp prevăzută de dispozițiile legale relevante."
        },
        {
          title: "9. Drepturile Dumneavoastră",
          content: "În conformitate cu prevederile art. 12 – 18 din Legea nr. 195/2024, subiectul datelor cu caracter personal beneficiază de dreptul la informare, acces și opoziție asupra datelor sale cu caracter personal."
        },
        {
          title: "10. Contact Information",
          content: "Drepturile de acces, intervenție și opoziție asupra datelor cu caracter personal se realizează prin expedierea de către subiect a unei cereri scrise la sediul Societății BAR Insurance ING Broker SRL – MD-2009, Republica Moldova, mun. Chișinău, str. Pan Halippa 9, sau prin e-mail. andrei.moraru@ingbroker.md"
        }
      ]
    }
  },
  ru: {
    terms: {
      title: "Условия и",
      titleItalic: "Положения.",
      subtitle: "Относительно способа электронной выдачи страховых полисов, заказанных через приложение eAsigurari компании BAR ”Insurance ING Broker” SRL.",
      officialDocument: "Официальный Документ",
      lastUpdate: "Последнее обновление: 08 апреля 2026 г. | BAR Insurance ING Broker SRL",
      sections: [
        {
          title: "Общая информация",
          content: "Пожалуйста, как посетитель нашего сайта, внимательно прочитайте Условия и Положения на цифровой платформе eAsigurari.com. Продолжение использования сайта и размещение запроса на страховое предложение, обработка и выдача страховых полисов представляют собой ВАШЕ согласие с этими Условиями и Положениями.\n\nДля всей информации, существующей на этом сайте, авторское право принадлежит BAR ”Insurance ING Broker” SRL. Никакой материал с этого сайта или из этого документа не может быть воспроизведен частично, полностью или изменен без прямо выраженного согласия BAR ”Insurance ING Broker” SRL или обладателя этого права."
        },
        {
          title: "1. Юридические данные и общая информация",
          content: "Наименование: BAR „Insurance ING Broker” SRL\nАдрес: мун. Кишинэу, ул. Пан Халиппа, 9\ne-mail: andrei.moraru@ingbroker.md, ion.dascalu@ingbroker.md\nтел./факс: +373 22 10 66 56, моб: +373 79030209, +373 79526003\nФискальный код: 1017600019386\nIBAN: MD37VI022322900000003MDL\nБанковский код: VICBMD2X490\nБанк: \"Victoria Bank\" SA, мун. Кишинэу\nАдминистратор: Ион Даскэлу"
        },
        {
          title: "2. Понятия",
          content: "2.1. Общие понятия страхования:\nСтраховая деятельность - деятельность по предложению, ведению переговоров и заключению договоров страхования, сбору премий, урегулированию убытков.\nСтраховой агент - лицо, осуществляющее профессиональную деятельность на основании мандата страховщика.\nСтрахование - передача возможного риска от застрахованного к страховщику.\nЗастрахованный - лицо, заключившее договор страхования.\nСтраховщик - юридическое лицо, лицензированное для страховой деятельности.\nСтраховой случай - событие, предусмотренное договором, дающее право на возмещение.\n\n2.2. Понятия ОСАГО:\nДорожно-транспортное происшествие - непредвиденное событие, вызванное транспортными средствами.\nПолис ОСАГО - обязательный страховой полис, действующий в Республике Молдова.\nЗеленая карта - международный страховой документ для выезда за границу.\nСистема Бонус-Малус - система скидок и надбавок к премии в зависимости от истории убытков."
        },
        {
          title: "3. Политика конфиденциальности",
          content: "Обработка персональных данных осуществляется с согласия заявителя согласно Закону № 195/2024. BAR Insurance ING Broker SRL обрабатывает данные для получения предложений и выдачи полисов. Пользователь имеет право на доступ, изменение и возражение."
        },
        {
          title: "4. Политика использования файлов cookie",
          content: "Сайт easigurari.com и приложение eAsigurari используют файлы cookie. Продолжение навигации означает согласие на их использование для улучшения пользовательского опыта."
        },
        {
          title: "5. Условия страхования",
          content: "Условия обязательны, если они предусмотрены договором. Застрахованный имеет право ознакомиться с ними перед подписанием. Для онлайн-медицинского страхования, если застрахованный уже за границей, ответственность начинается через 72 часа после оплаты."
        },
        {
          title: "6. Обязательства сторон",
          content: "Страховщик: информировать об условиях, своевременно производить выплаты, соблюдать конфиденциальность.\nЗастрахованный: сообщать о рисках, вовремя оплачивать премии, ограничивать ущерб и немедленно сообщать о страховом случае."
        },
        {
          title: "7. Онлайн-заказ и расчет премии",
          content: "Онлайн-заказ требует принятия Условий и Положений. Расчет премии производится Страховщиком на основе данных заявителя через электронные системы согласно утвержденным тарифам."
        },
        {
          title: "8. Заключение договора",
          content: "Договор заключается в письменной или электронной форме (Закон 284/2004). Оплата премии означает согласие страхователя. Этапы: запрос предложения, принятие условий, предоставление данных, оплата и получение полиса."
        },
        {
          title: "9. Язык договора",
          content: "Языком, используемым в правовых отношениях между страховщиком и страхователем, является государственный язык (румынский)."
        },
        {
          title: "10. Оплата и онлайн-платежи",
          content: "Премия оплачивается полностью или в рассрочку. Онлайн-методы: MAIBPAY, VictoriaBank, терминалы Qiwi или BPAY. Оплата возможна картами VISA и MasterCard."
        },
        {
          title: "11. Прочие расходы",
          content: "Страхователь не несет дополнительных расходов, связанных с заключением договора, кроме оплаты страховой премии."
        },
        {
          title: "12. Изменение и расторжение",
          content: "Расторжение производится по письменному заявлению. Возвращается часть премии за неистекший период за вычетом административных расходов, если не было страховых случаев."
        },
        {
          title: "13. Жалобы",
          content: "Жалобы можно направлять на ingbroker@ingbroker.md или подавать в офис BAR Insurance ING Broker SRL. Телефон поддержки: +373 79526003 (Пн-Пт, 09:00-18:00)."
        },
        {
          title: "14. Изменение информации",
          content: "ING Broker имеет право изменять этот документ без предварительного уведомления. Использование сайта после изменений означает принятие новых условий."
        }
      ]
    },
    privacy: {
      title: "Политика",
      titleItalic: "Конфиденциальности.",
      subtitle: "Обязательство Insurance ING Broker SRL по защите персональных данных в соответствии с Законом № 195/2024 и международными стандартами безопасности.",
      officialDocument: "Официальный Документ",
      lastUpdate: "Последнее обновление: 08 апреля 2026 г. | BAR Insurance ING Broker SRL",
      sections: [
        {
          title: "1. Идентификация оператора",
          content: "Страховой и перестраховочный брокер Insurance ING Broker SRL (далее ING Broker или Оператор), зарегистрированный в реестре операторов персональных данных под № 0003299, обрабатывает персональные данные клиентов в соответствии с законом."
        },
        {
          title: "2. Цель уведомления",
          content: "Целью данного уведомления является укрепление доверия клиентов к тому, что ING Broker соблюдает высокие стандарты защиты частной жизни."
        },
        {
          title: "3. Сбор данных",
          content: "Сбор данных происходит при их предоставлении клиентами в офисах, по e-mail, через колл-центр, приложение eAsigurari или по почте."
        },
        {
          title: "4. Категории обрабатываемых данных",
          content: "Категории: имя, фамилия, пол, дата рождения, подпись, данные актов гражданского состояния, техпаспорт, телефон, e-mail, профессия, банковские данные, гражданство, водительские права, IDNP, данные об имуществе и здоровье."
        },
        {
          title: "5. Цели обработки",
          content: "ING Broker обрабатывает данные для: оказания услуг, расчета премий, выставления счетов, доставки полисов, лояльности, отчетности, жалоб и предотвращения мошенничества."
        },
        {
          title: "6. Правовые основания",
          content: "Основания: явное согласие клиента, выполнение юридических обязательств и преддоговорные действия."
        },
        {
          title: "7. Последствия отказа",
          content: "В случае непредоставления данных ING Broker не сможет оказать запрашиваемые страховые услуги."
        },
        {
          title: "8. Хранение и безопасность данных",
          content: "ING Broker принял технические и организационные меры для защиты данных от уничтожения, потери или несанкционированного доступа."
        },
        {
          title: "9. Ваши права",
          content: "Согласно Закону № 195/2024, вы имеете право на информацию, доступ, изменение и возражение. Вы можете реализовать эти права через письменный запрос или e-mail."
        },
        {
          title: "10. Контактная информация",
          content: "Запросы направляются в офис BAR Insurance ING Broker SRL - мун. Кишинэу, ул. Пан Халиппа 9, или по e-mail: ingbroker@ingbroker.md"
        }
      ]
    }
  },
  en: {
    terms: {
      title: "Terms and",
      titleItalic: "Conditions.",
      subtitle: "Regarding the method of electronic issuance of insurance policies ordered through the eAsigurari application of the company BAR ”Insurance ING Broker” SRL.",
      officialDocument: "Official Document",
      lastUpdate: "Last update: April 08, 2026 | BAR Insurance ING Broker SRL",
      sections: [
        {
          title: "General Information",
          content: "Please, as a visitor to our site, read carefully the Terms and Conditions on the eAsigurari.com digital platform. Continued use of the site and placement of an insurance quote request, processing and issuance of insurance policies, represents YOUR agreement to these Terms and Conditions.\n\nFor all information existing on this site, the copyright is owned by BAR ”Insurance ING Broker” SRL. No material from this site or from this document may be reproduced partially, fully or modified without the express consent expressed by BAR ”Insurance ING Broker” SRL, or the holder of this right."
        },
        {
          title: "1. Legal data and general information",
          content: "Name: BAR „Insurance ING Broker” SRL\nAddress: Chisinau, 9 Pan Halippa St.\ne-mail: andrei.moraru@ingbroker.md, ion.dascalu@ingbroker.md\ntel./fax: +373 22 10 66 56, gsm: +373 79030209, +373 79526003\nTax code: 1017600019386\nIBAN: MD37VI022322900000003MDL\nBank code: VICBMD2X490\nBank: \"Victoria Bank\" SA, Chisinau\nAdministrator: Ion Dascălu"
        },
        {
          title: "2. Concepts",
          content: "2.1. General insurance concepts:\nInsurance activity - offering, negotiating and concluding insurance contracts, collecting premiums, settling claims.\nInsurance agent - person carrying out professional activity based on the insurer's mandate.\nInsurance - transfer of a potential risk from the insured to the insurer.\nInsured - person who has concluded an insurance contract.\nInsurer - legal entity licensed for insurance activity.\nInsured event - event provided in the contract, giving the right to compensation.\n\n2.2. MTPL specific concepts:\nMotor vehicle accident - unforeseen event caused by vehicles causing damage.\nMTPL policy - mandatory insurance policy valid in the Republic of Moldova.\nGreen Card - international insurance document for abroad.\nBonus-Malus system - system of discounts and increases of the premium based on claims history."
        },
        {
          title: "3. Privacy Policy",
          content: "Processing of personal data is carried out with the applicant's consent according to Law No. 195/2024. BAR Insurance ING Broker SRL processes data for obtaining quotes and issuing policies. The user has the right to access, intervention and opposition."
        },
        {
          title: "4. Cookie Policy",
          content: "The easigurari.com site and eAsigurari app use cookies. Continued navigation represents acceptance of their use to improve user experience."
        },
        {
          title: "5. Insurance Conditions",
          content: "Conditions are mandatory if provided in the contract. The insured has the right to consult them before signing. For online medical insurance, if the insured is already abroad, liability begins 72 hours after payment."
        },
        {
          title: "6. Obligations of the Parties",
          content: "Insurer: inform the insured about conditions, make timely payments, maintain confidentiality.\nInsured: inform about risk circumstances, pay premiums on time, limit damage and immediately notify the insured event."
        },
        {
          title: "7. Online Ordering and Premium Calculation",
          content: "Online ordering requires acceptance of Terms and Conditions. Premium calculation is performed by the Insurer based on data provided by the applicant through electronic systems according to approved tariffs."
        },
        {
          title: "8. Conclusion of the Contract",
          content: "The contract is concluded in written or electronic form (Law 284/2004). Payment of the premium represents the contractor's consent. Stages: quote request, acceptance of terms, data provision, payment and receipt of the policy."
        },
        {
          title: "9. Language of the Contract",
          content: "The language used in legal relations between the insurer and contractor is the state language (Romanian)."
        },
        {
          title: "10. Payment and Online Settlement",
          content: "The premium is paid in full or in installments. Online methods: MAIBPAY, VictoriaBank, Qiwi or BPAY terminals. Payment can be made via VISA and MasterCard cards."
        },
        {
          title: "11. Other Expenses",
          content: "The contractor does not bear additional costs associated with the conclusion of the contract, other than the payment of the insurance premium."
        },
        {
          title: "12. Modification and Termination",
          content: "Termination is done by written request. Part of the premium for the unexpired period is returned, minus management expenses, if no claims occurred."
        },
        {
          title: "13. Complaints",
          content: "Complaints can be sent to ingbroker@ingbroker.md or submitted to the BAR Insurance ING Broker SRL office. Support phone: +373 79526003 (Mon-Fri, 09:00-18:00)."
        },
        {
          title: "14. Modification of Information",
          content: "ING Broker has the right to modify this document without prior notice. Use of the site after modifications represents acceptance of the new terms."
        }
      ]
    },
    privacy: {
      title: "Privacy",
      titleItalic: "Policy.",
      subtitle: "Insurance ING Broker SRL's commitment to the protection of personal data, in accordance with Law No. 195/2024 and international security standards.",
      officialDocument: "Official Document",
      lastUpdate: "Last update: April 08, 2026 | BAR Insurance ING Broker SRL",
      sections: [
        {
          title: "1. Operator Identity",
          content: "Insurance and Reinsurance Broker Insurance ING Broker SRL (hereinafter ING Broker or Operator), registered in the personal data operator registry with No. 0003299, processes personal data of its clients in accordance with the law."
        },
        {
          title: "2. Purpose of the Notification",
          content: "The purpose of this notification is to strengthen our clients' trust that ING Broker maintains high standards for privacy protection."
        },
        {
          title: "3. Data Collection",
          content: "Data collection occurs when provided by clients in offices, via e-mail, call center, eAsigurari app or mail."
        },
        {
          title: "4. Categories of Processed Data",
          content: "Categories: name, surname, sex, date of birth, signature, civil status data, registration certificate, phone, e-mail, profession, bank data, citizenship, driver's license, IDNP, asset and health data."
        },
        {
          title: "5. Purposes of Processing",
          content: "ING Broker processes data for: providing services, calculating premiums, invoicing, delivering policies, loyalty, reporting, complaints and fraud prevention."
        },
        {
          title: "6. Legal Basis",
          content: "Legal bases: express consent of the client, fulfillment of legal obligations and pre-contractual steps."
        },
        {
          title: "7. Consequences of Refusal",
          content: "If you do not provide the requested data, ING Broker will not be able to provide the requested insurance services."
        },
        {
          title: "8. Data Storage and Security",
          content: "ING Broker has taken technical and organizational measures to ensure data protection against destruction, loss or unauthorized access."
        },
        {
          title: "9. Your Rights",
          content: "According to Law No. 195/2024, you benefit from the right to information, access, intervention and opposition. You can exercise these rights via written request or e-mail."
        },
        {
          title: "10. Contact Information",
          content: "Requests are sent to BAR Insurance ING Broker SRL office - Chisinau, 9 Pan Halippa St., or via e-mail: ingbroker@ingbroker.md"
        }
      ]
    }
  }
};
