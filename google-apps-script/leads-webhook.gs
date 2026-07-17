/**
 * Google Apps Script - webhook lead-uri B2B ING Broker
 * ─────────────────────────────────────────────────────────────
 * Ce face: primește un lead (JSON) de la Cloudflare Function /api/lead,
 * adaugă un rând în Google Sheet și trimite un email de notificare.
 *
 * CUM SE INSTALEAZĂ (o singură dată, de către CEO):
 *  1. Creează un Google Sheet nou (ex. „ingbroker_leads_B2B").
 *  2. Antet pe primul rând (coloanele A-J), EXACT în această ordine:
 *     data | sursa | nume | companie | industrie | marime | telefon | email | program_recomandat | cum_a_aflat
 *  3. Extensions -> Apps Script. Șterge conținutul și lipește acest fișier.
 *  4. Sus, înlocuiește SHARED_TOKEN și NOTIFY_EMAIL cu valorile tale.
 *     ATENȚIE: până când SHARED_TOKEN e schimbat, webhook-ul refuză orice cerere
 *     cu `not_configured`. E intenționat - tokenul livrat în repo e public.
 *     Același token trebuie pus în Cloudflare ca LEADS_SHARED_TOKEN.
 *  5. Deploy -> New deployment -> tip „Web app":
 *       - Execute as: Me
 *       - Who has access: Anyone
 *     Copiază URL-ul „/exec" -> acesta e LEADS_SHEET_WEBHOOK pentru Cloudflare.
 *  6. La prima rulare, autorizează accesul la Sheet + Gmail.
 */

// ─── Configurare (înlocuiește valorile) ───
var SHARED_TOKEN = 'schimba-ma-cu-un-token-secret';   // = LEADS_SHARED_TOKEN din Cloudflare
var NOTIFY_EMAIL = 'ingbroker@ingbroker.md';           // unde ajunge notificarea

// Valoarea livrată în repo. Cât timp SHARED_TOKEN rămâne egal cu ea, webhook-ul refuză tot:
// endpoint-ul e public („Anyone"), iar un token publicat pe GitHub nu e o barieră.
var _PLACEHOLDER_TOKEN = 'schimba-ma-cu-un-token-secret';

function doPost(e) {
  try {
    if (!SHARED_TOKEN || SHARED_TOKEN === _PLACEHOLDER_TOKEN) {
      return _json({ ok: false, error: 'not_configured' });
    }

    var data = JSON.parse(e.postData.contents);

    // Tokenul e singura barieră a endpoint-ului: absent, gol sau greșit = refuz.
    if (data.token !== SHARED_TOKEN) {
      return _json({ ok: false, error: 'bad_token' });
    }

    var meta = data.meta || {};
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    sheet.appendRow([
      data.receivedAt || new Date().toISOString(), // data
      data.source || '',                            // sursa
      data.name || '',                              // nume
      data.company || '',                           // companie
      meta.industry || '',                          // industrie
      meta.size || '',                              // marime
      data.phone || '',                             // telefon
      data.email || '',                             // email
      (meta.program || []).join(', '),             // program_recomandat
      data.heardFrom || ''                          // cum_a_aflat
    ]);

    _notify(data, meta);
    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  }
}

function _notify(data, meta) {
  var subject = 'Lead nou B2B: ' + (data.company || data.name || 'necunoscut');
  var body =
    'Sursă: ' + (data.source || '-') + '\n' +
    'Nume: ' + (data.name || '-') + '\n' +
    'Companie: ' + (data.company || '-') + '\n' +
    'Telefon: ' + (data.phone || '-') + '\n' +
    'Email: ' + (data.email || '-') + '\n' +
    'Industrie: ' + (meta.industry || '-') + '\n' +
    'Mărime: ' + (meta.size || '-') + '\n' +
    'Program recomandat: ' + ((meta.program || []).join(', ') || '-') + '\n' +
    'Cum a aflat: ' + (data.heardFrom || '-') + '\n' +
    'Data: ' + (data.receivedAt || '-');
  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
