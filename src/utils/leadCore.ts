// Logică pură pentru formularul de cerere ofertă: validare, curățare și compunerea e-mailului.
// Folosită de funcția Cloudflare (functions/api/lead.ts) și de teste. Nu atinge DOM-ul și nu face rețea.

export const LEAD_PRODUCTS = ['corporate', 'car-ear', 'reinsurance', 'personal', 'claims', 'other'] as const;
export type LeadProduct = (typeof LEAD_PRODUCTS)[number];

export const LEAD_LANGS = ['ro', 'ru', 'en'] as const;
export type LeadLang = (typeof LEAD_LANGS)[number];

// Etichetele din e-mailul primit de echipă, mereu în română.
export const PRODUCT_LABEL_RO: Record<LeadProduct, string> = {
  corporate: 'Soluții corporate',
  'car-ear': 'Construcții CAR/EAR',
  reinsurance: 'Reasigurări și fronting',
  personal: 'Asigurări personale',
  claims: 'Suport daune',
  other: 'Altele',
};

// Tipul cererii, pentru subiectul e-mailului și pentru măsurare. Doar produsele corporate sunt B2B.
export type LeadType = 'b2b' | 'general' | 'claims';
export function leadTypeOf(product: LeadProduct): LeadType {
  if (product === 'personal') return 'general';
  if (product === 'claims') return 'claims';
  return 'b2b';
}
const SUBJECT_PREFIX: Record<LeadType, string> = {
  b2b: 'Cerere ofertă B2B',
  general: 'Cerere ofertă',
  claims: 'Cerere suport daune',
};

export interface Lead {
  company: string;
  name: string;
  phone: string;
  email: string;
  product: LeadProduct;
  message: string;
  projectValue: string;
  consentVersion: string;
  lang: LeadLang;
  pagePath: string;
}

export type LeadField = keyof Lead | 'consent';
export type FieldErrors = Partial<Record<LeadField, string>>;

export type NormalizeResult =
  | { kind: 'ok'; lead: Lead }
  | { kind: 'spam' }
  | { kind: 'invalid'; errors: FieldErrors };

// Elimină caracterele de control (inclusiv CR/LF) ca să nu poată strica antetele e-mailului.
function oneLine(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  // \s acoperă și separatorii de rând Unicode (U+2028, U+2029).
  return value.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

// Separatorii de rând Unicode, construiți la rulare ca să nu apară caractere speciale în sursă.
const LINE_SEPARATORS = new RegExp(`[${String.fromCharCode(0x2028)}${String.fromCharCode(0x2029)}]`, 'g');

// Păstrează rândurile noi din mesaj, dar elimină restul caracterelor de control.
function multiLine(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0009\u000B\u000C\u000E-\u001F\u007F]/g, ' ')
    .replace(LINE_SEPARATORS, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}

const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]{2,}$/;
const PHONE_CHARS_RE = /^[+\d\s().-]{7,25}$/;

export function isValidEmail(value: string): boolean {
  return value.length <= 120 && EMAIL_RE.test(value);
}

export function normalizeLead(raw: unknown): NormalizeResult {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { kind: 'invalid', errors: { company: 'invalid_body' } };
  const body = raw as Record<string, unknown>;

  // Câmp-capcană pentru roboți: oamenii nu îl văd și nu îl completează.
  if (typeof body.website === 'string' && body.website.trim() !== '') return { kind: 'spam' };

  const errors: FieldErrors = {};

  const company = oneLine(body.company, 150);
  if (company.length < 2) errors.company = 'required';

  const name = oneLine(body.name, 100);
  if (name.length < 2) errors.name = 'required';

  const phone = oneLine(body.phone, 25);
  const phoneDigits = phone.replace(/\D/g, '');
  if (!PHONE_CHARS_RE.test(phone) || phoneDigits.length < 8 || phoneDigits.length > 15) errors.phone = 'invalid';

  const email = oneLine(body.email, 120);
  if (email !== '' && !isValidEmail(email)) errors.email = 'invalid';

  const product = typeof body.product === 'string' && (LEAD_PRODUCTS as readonly string[]).includes(body.product)
    ? (body.product as LeadProduct)
    : null;
  if (!product) errors.product = 'invalid';

  const message = multiLine(body.message, 1500);
  const projectValue = oneLine(body.projectValue, 30);

  // Consimțământul trebuie să fie exact `true`; un text sau un 1 nu contează.
  if (body.consent !== true) errors.consent = 'required';

  const consentVersion = oneLine(body.consentVersion, 40);
  if (!/^[A-Za-z0-9._-]{1,40}$/.test(consentVersion)) errors.consentVersion = 'invalid';

  const lang = typeof body.lang === 'string' && (LEAD_LANGS as readonly string[]).includes(body.lang)
    ? (body.lang as LeadLang)
    : 'ro';

  const pathRaw = oneLine(body.pagePath, 200);
  const pagePath = pathRaw.startsWith('/') ? pathRaw : '/';

  if (Object.keys(errors).length > 0 || !product) return { kind: 'invalid', errors };
  return {
    kind: 'ok',
    lead: { company, name, phone, email, product, message, projectValue, consentVersion, lang, pagePath },
  };
}

// Originile acceptate: domeniile site-ului sau aceeași origine ca cererea (previzualizări Cloudflare, dezvoltare locală).
// Browserul nu permite unei pagini străine să falsifice antetul Origin; unelte din afara browserului pot, deci
// aceasta oprește doar utilizarea dintr-un alt site, nu atacurile directe.
const PRODUCTION_HOSTS = new Set(['ingbroker.md', 'www.ingbroker.md']);

export function isAllowedOrigin(originHeader: string | null, requestUrl: string): boolean {
  if (!originHeader) return false;
  let origin: URL;
  let request: URL;
  try {
    origin = new URL(originHeader);
    request = new URL(requestUrl);
  } catch {
    return false;
  }
  if (origin.protocol !== 'https:' && origin.hostname !== 'localhost' && origin.hostname !== '127.0.0.1') return false;
  return PRODUCTION_HOSTS.has(origin.hostname) || origin.host === request.host;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export interface LeadEmail {
  subject: string;
  text: string;
  html: string;
}

export function buildLeadEmail(lead: Lead, receivedAtIso: string): LeadEmail {
  const productLabel = PRODUCT_LABEL_RO[lead.product];
  const subject = `${SUBJECT_PREFIX[leadTypeOf(lead.product)]}: ${lead.company} (${productLabel})`.slice(0, 200);

  const rows: Array<[string, string]> = [
    ['Companie', lead.company],
    ['Persoană de contact', lead.name],
    ['Telefon', lead.phone],
    ['E-mail', lead.email || 'nespecificat'],
    ['Produs', productLabel],
  ];
  if (lead.projectValue) rows.push(['Valoare proiect (MDL)', lead.projectValue]);
  rows.push(['Detalii', lead.message || 'nespecificat']);

  const consentLine =
    `Consimțământ acordat: DA. Versiunea textului: ${lead.consentVersion}. ` +
    `Limba paginii: ${lead.lang}. Pagina: ${lead.pagePath}. Primit la: ${receivedAtIso}.`;

  const text = [
    'Cerere nouă de ofertă primită prin formularul de pe ingbroker.md.',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    consentLine,
  ].join('\n');

  const html =
    `<p>Cerere nouă de ofertă primită prin formularul de pe ingbroker.md.</p>` +
    `<table cellpadding="6" style="border-collapse:collapse;font-family:Cambria,serif;font-size:14px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="border:1px solid #ddd;font-weight:bold">${escapeHtml(k)}</td>` +
          `<td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
      )
      .join('') +
    `</table><p style="font-size:12px;color:#555">${escapeHtml(consentLine)}</p>`;

  return { subject, text, html };
}
