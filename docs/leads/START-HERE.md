# START HERE — generare lead-uri (instrucțiune pentru Claude)

Lipește **blocul de mai jos** într-o sesiune nouă de Claude Code. Îi spune ce să
facă, ce să verifice și **unde să salveze** rezultatele.

## Precondiții (le faci tu, o singură dată)

1. Setează cheia `GOOGLE_MAPS_API_KEY` în **variabilele environment-ului**
   (Claude Code pe web), apoi **pornește o sesiune nouă**.
2. În Google Cloud: activează **Places API (clasic)** —
   `https://console.cloud.google.com/apis/library/places-backend.googleapis.com`.

## Instrucțiune de copiat

```
Lucrezi în repository-ul ING-Broker (asigurări online: easigurari.com, ingbroker.md).
Scop: generez lead-uri B2B locale în Moldova pentru vânzarea de polițe.

Ce e deja configurat în repo:
- .mcp.json — serverul MCP „google-maps" (@modelcontextprotocol/server-google-maps),
  cheia vine din variabila GOOGLE_MAPS_API_KEY.
- docs/lead-generation-maps.md — căutările pe segmente și orașe, mapate pe produse
  (asigurare medicală angajați, cyber, energie regenerabilă, fronting, flote auto).

Fă în ordine:
1) Verifică cheia: rulează o căutare de test cu maps_search_places, ex.
   „transport company in Chisinau, Moldova".
   - Dacă dă „API key is invalid", OPREȘTE-TE și spune-mi clar că trebuie:
     (a) să pun GOOGLE_MAPS_API_KEY în variabilele environment-ului + sesiune nouă, și
     (b) să activez „Places API" (clasic) în Google Cloud.
     Nu-mi cere să lipesc cheia în chat.
2) Dacă merge: rulează căutările din docs/lead-generation-maps.md pentru orașele
   Chișinău, Bălți, Cahul. Începe cu segmentul „asigurare medicală angajați".
3) Adună rezultatele, elimină duplicatele după nume+adresă și fă un tabel cu:
   Nume, Segment, Oraș, Adresă, Telefon, Website, Rating, Produs_recomandat.
   Marchează cu ⭐ firmele care au și website, și telefon. Nu inventa date —
   lasă gol ce lipsește.
4) SALVEAZĂ rezultatul ca CSV în repo la: docs/leads/prospects-<data>.csv
   (ex. docs/leads/prospects-2026-09-20.csv). Creează folderul docs/leads/ dacă nu există.
5) Commit + push pe branch-ul claude/ecc-repo-setup-34x288. Fără Pull Request decât dacă cer eu.
6) Respectă conformitatea: doar B2B, date publice de firmă, fără spam la persoane fizice.

Regulă fixă: nu pune niciodată cheia API în cod, în CLAUDE.md sau în chat — doar
ca variabilă de mediu.
```

## Unde ajung lucrurile (rezumat)

| Ce | Unde se salvează |
| --- | --- |
| Cheia API | Doar în variabilele environment-ului (`GOOGLE_MAPS_API_KEY`) — niciodată în repo |
| Configul MCP | `.mcp.json` (deja există) |
| Căutările | `docs/lead-generation-maps.md` (deja există) |
| Listele de prospecți | `docs/leads/prospects-<data>.csv` |
