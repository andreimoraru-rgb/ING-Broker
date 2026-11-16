# Formularul de cerere ofertă (intervenția 2)

Versiune 1, 16.11.2026. Stare: **ciornă, nepublicată**. Ramura `agent/formular-b2b`.

## Ce face

Formularul înlocuiește cele două formulare vechi (pagina Contact și pagina CAR/EAR), care deschideau WhatsApp cu text precompletat, nu cereau consimțământ și afișau „Cererea a fost trimisă" înainte ca cineva să trimită ceva.

Acum cererea merge la `POST /api/lead` (o funcție Cloudflare Pages), care o validează și o trimite pe e-mail prin Cloudflare Email Service. Pagina afișează „trimis" doar după ce Cloudflare confirmă livrarea. Dacă trimiterea eșuează sau funcția nu e configurată, utilizatorul vede eroarea și cele două numere de telefon, nu o confirmare falsă.

Nu se stochează nimic pe site. Cererea există doar în e-mailul primit. Dacă e-mailul nu pleacă, cererea se pierde (utilizatorul a văzut eroarea și poate suna).

## Ce trebuie făcut înainte de publicare

### 1. Aviz juridic (blochează publicarea)

Textele din `src/data/leadFormCopy.ts` sunt marcate `DRAFT, NECESITĂ AVIZ JURIDIC`. Juristul verifică, conform Legii nr. 195/2024 privind protecția datelor cu caracter personal:

- dacă temeiul corect este consimțământul sau măsurile precontractuale, la cererea persoanei (formularea din casetă depinde de asta);
- identificarea operatorului și scopul, așa cum apar în nota de sub casetă;
- durata de păstrare și drepturile persoanei: nota trimite la Politica de confidențialitate, care trebuie să le conțină și să fie în acord cu formularul;
- transferul către Cloudflare (furnizor de e-mail și infrastructură, cu servere în afara țării): dacă cere informare sau notificare;
- versiunile în rusă și engleză.

După aviz: se actualizează textele, se schimbă `CONSENT_VERSION` (data avizului) și `CONSENT_REVIEW_STATUS` în `AVIZAT`, iar Andrei Moraru aprobă. Versiunea textului se trimite cu fiecare cerere și apare în e-mail, ca să se poată dovedi ce text a văzut persoana.

### 2. Configurare Cloudflare (o face Andrei, nu agentul)

Documentația: https://developers.cloudflare.com/email-service/ (serviciul de trimitere e în beta la data scrierii).

1. **Email Sending pe domeniu.** În panoul Cloudflare: Compute, Email Service, Email Sending, Onboard Domain. Domeniul trebuie să folosească DNS-ul Cloudflare. Procesul adaugă înregistrări DNS (MX și SPF pe subdomeniul `cf-bounce`, DKIM, DMARC pe `_dmarc`). **Înainte de a apăsa Done, se verifică ce se întâmplă cu SPF-ul și DMARC-ul existente ale `ingbroker.md`**, ca să nu se strice e-mailul firmei. Dacă panoul acceptă un subdomeniu dedicat, se preferă acela.
2. **Plan.** Trimiterea către adrese arbitrare cere Workers Paid. Către adrese verificate în cont, trimiterea e gratuită.
3. **Token API.** Cloudflare, My Profile sau Account API Tokens, cu permisiunea **Email Sending: Edit**, limitat la acest cont.
4. **Variabile în proiectul Pages `ing-broker`** (Settings, Variables and Secrets). Se setează întâi pentru **Preview**, apoi pentru **Production**, înainte de deploy-ul care le folosește:

| Nume | Tip | Valoare |
|---|---|---|
| `CF_ACCOUNT_ID` | text | identificatorul contului Cloudflare |
| `CF_EMAIL_API_TOKEN` | **secret (Encrypt)** | tokenul de la pasul 3 |
| `LEAD_TO_EMAIL` | text | adresa care primește cererile; maximum 5, separate prin virgulă |
| `LEAD_FROM_EMAIL` | text | expeditorul, de pe domeniul înscris la pasul 1 (ex: `formular@...`) |

Tokenul nu se pune în cod, în `wrangler.toml`, în chat sau în vreun fișier din repo.

### 3. Verificare pe preview

După ce variabilele Preview sunt setate și există un deploy de preview al ramurii: se trimite o cerere de test din formular și se confirmă că ajunge în căsuță, cu subiectul și versiunea textului corecte. Pentru test din terminal, doar pe preview:

```bash
curl -s -X POST "https://<preview>.ing-broker.pages.dev/api/lead" \
  -H "Origin: https://<preview>.ing-broker.pages.dev" -H "Content-Type: application/json" \
  -d '{"company":"Test SRL","name":"Test Test","phone":"+37369000000","product":"corporate","consent":true,"consentVersion":"draft-test","lang":"ro","pagePath":"/contact","website":""}'
```

Răspuns bun: `{"ok":true}`. Fără configurare: `503` cu `not_configured`, iar pagina arată telefoanele.

## Limite cunoscute

- **Fără limitare de cereri.** Funcția are doar câmp-capcană pentru roboți și verificarea originii (oprește folosirea din alt site, nu atacurile directe, fiindcă antetul `Origin` poate fi falsificat în afara browserului). O regulă de rate limiting în Cloudflare WAF pe `/api/lead`, sau Turnstile, ar fi pasul următor. Sunt schimbări în Cloudflare, deci cer aprobarea lui Andrei.
- **Dependență de un serviciu în beta** pentru trimitere.
- **Termenul de 15 minute** pe pagina CAR/EAR este o promisiune comercială confirmată de Andrei Moraru pe 16.11.2026: clientul primește răspuns în 15 minute după ce depune cererea. Mesajul de confirmare al formularului CAR/EAR o repetă. Ea depinde de faptul că cineva urmărește căsuța din `LEAD_TO_EMAIL`, singurul canal prin care sosește cererea. Pagina Contact păstrează un mesaj fără termen.
- **Numerele de telefon** sunt corecte: `+373 79 526 003` și `+373 69 526 003` pentru firmă, iar `+373 79 030 209` (folosit în `BusinessProductPage.tsx`) este numărul CEO-ului, Ion Dascălu.

## Revenire

Se scot variabilele din Cloudflare: funcția răspunde `503`, iar pagina arată telefoanele. Pentru revenire completă la formularele vechi, se anulează commitul ramurii (formularele vechi nu erau conforme, deci nu se recomandă).

## Teste

`npm run test:lead` rulează 18 teste pe funcție: origine, tip de conținut, mărime, consimțământ exact `true`, validare pe câmp, capcana pentru roboți, lipsa configurării, trimiterea corectă către Email Service, injecție în antete, HTML escapat, eșecuri Cloudflare și faptul că niciun log nu conține date personale.
