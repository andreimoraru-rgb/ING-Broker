# Generare lead-uri locale cu Google Maps — playbook ING Broker

Set de căutări Google Maps gata de rulat, mapate pe produsele ING Broker
(easigurari.com / ingbroker.md). Scop: alimentarea constantă a pâlniei de
vânzări B2B pentru ținta de ~10 polițe/zi.

## Precondiție (o singură dată)

1. Creează o cheie în **Google Cloud Console → Google Maps Platform** și
   activează **Places API** (+ Geocoding dacă vrei centrare pe rază).
2. Setează `GOOGLE_MAPS_API_KEY`:
   - local: în `.env` (vezi `.env.example`);
   - Claude Code pe web: în secretele mediului.
3. Serverul MCP `google-maps` (din `.mcp.json`) pornește automat la prima folosire.

## Cum rulezi o căutare (exemplu de cerut lui Claude)

> „Rulează în Google Maps: **software companies in Chisinau, Moldova**.
> Dă-mi un tabel cu: Nume, Adresă, Telefon, Website, Rating. Elimină duplicatele
> și marchează cu ⭐ firmele care au și website, și telefon."

Placesul întoarce ~20 rezultate/pagină (până la ~60 cu paginare), deci mergem pe
**segment × oraș**, nu o singură căutare uriașă.

## Cum se mapează pe produse

| Segment căutat în Maps | Produs ING Broker |
| --- | --- |
| IT, BPO, call-center, fabrici, retail, spitale | Asigurare medicală angajați (grup) |
| IT, fintech, e-commerce, contabilitate, clinici, avocatură | Cyber insurance |
| Instalatori solar, firme de energie, agro, sere | Energie regenerabilă |
| Corporații mari / multinaționale / ZEL | Fronting |
| Transport, logistică, taxi, curierat, dealeri, construcții | Flote RCA/CASCO |

---

## Căutări gata de rulat (query = ce pui în `maps_search_places`)

Adaugă `, Moldova` la fiecare căutare. Repetă fiecare query pentru fiecare oraș
din lista de mai jos.

### 1. Asigurare medicală angajați — angajatori cu mulți oameni
- `software companies in Chisinau, Moldova`
- `IT outsourcing company in Chisinau, Moldova`
- `call center in Chisinau, Moldova`
- `BPO company in Chisinau, Moldova`
- `manufacturing company in Chisinau, Moldova`
- `wine factory in Moldova`
- `garment factory in Chisinau, Moldova`
- `supermarket chain office in Chisinau, Moldova`
- `private hospital in Chisinau, Moldova`

### 2. Cyber insurance — cine ține date sensibile
- `IT company in Chisinau, Moldova`
- `fintech company in Chisinau, Moldova`
- `online store office in Chisinau, Moldova`
- `accounting firm in Chisinau, Moldova`
- `medical clinic in Chisinau, Moldova`
- `dental clinic in Chisinau, Moldova`
- `law firm in Chisinau, Moldova`
- `payment processing company in Moldova`

### 3. Energie regenerabilă
- `solar panel installer in Moldova`
- `photovoltaic company in Chisinau, Moldova`
- `renewable energy company in Moldova`
- `agricultural company in Moldova`
- `greenhouse farm in Moldova`
- `winery in Moldova`

### 4. Fronting — corporații mari / multinaționale
- `logistics company in Chisinau, Moldova`
- `international company office in Chisinau, Moldova`
- `pharmaceutical company in Moldova`
- `telecom company in Chisinau, Moldova`
- `industrial park companies in Moldova`

### 5. Flote auto — RCA / CASCO
- `transport company in Chisinau, Moldova`
- `freight forwarding company in Chisinau, Moldova`
- `taxi company in Chisinau, Moldova`
- `courier delivery company in Chisinau, Moldova`
- `car dealership in Chisinau, Moldova`
- `construction company in Chisinau, Moldova`
- `bus company in Moldova`

---

## Orașe de parcurs (repetă căutările pe fiecare)

Chișinău, Bălți, Cahul, Ungheni, Orhei, Soroca, Comrat, Edineț, Hîncești,
Strășeni, Căușeni, Ceadîr-Lunga, Drochia, Florești.

**Centre aproximative (pentru căutare pe rază):**

| Oraș | lat, lng | Rază sugerată |
| --- | --- | --- |
| Chișinău | 47.0105, 28.8638 | 15000 m |
| Bălți | 47.7615, 27.9291 | 8000 m |
| Cahul | 45.9075, 28.1944 | 6000 m |
| Comrat | 46.2917, 28.6567 | 6000 m |
| Orhei | 47.3831, 28.8231 | 6000 m |

---

## De la listă la poliță (pâlnia)

1. **Sursă** — căutările de mai sus → listă brută.
2. **Calificare** — au website + telefon? domeniu potrivit? par a avea >10 angajați / flotă?
3. **Contact B2B** — apel/email care se identifică (ING Broker), propunere clară,
   link către oferta online pe easigurari.com.
4. **Ofertă → poliță** — trimiți cotația, închizi.
5. **Măsori** — câte contacte → câte oferte → câte polițe. Ajustezi volumul ca să
   ții ritmul de ~10/zi.

## Conformitate (obligatoriu)

- Legea **133/2011** (date personale, regulator CNPDP), aliniată GDPR.
- Doar **B2B** și date **publice** de firmă (telefon/office@ de pe site).
- Fiecare mesaj: identifici ING Broker, spui scopul, oferi **dezabonare**.
- **Fără** spam la persoane fizice fără consimțământ.
- **Google Maps ToS:** folosești pentru prospectare, nu construiești o bază de
  date „scrapuită" permanentă.

## Instrucțiune gata de copiat pentru Claude

> „Pentru toate căutările din secțiunea **[1–5]**, rulează `maps_search_places`
> pe orașele: Chișinău, Bălți, Cahul. Adună rezultatele, elimină duplicatele
> după nume+adresă, apoi dă-mi un CSV cu coloanele: Nume, Segment, Oraș, Adresă,
> Telefon, Website, Rating, Produs_recomandat. Marchează ⭐ firmele cu website și
> telefon. Nu inventa date — lasă gol ce lipsește."
