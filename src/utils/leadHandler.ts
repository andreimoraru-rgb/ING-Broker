// Handler pentru POST /api/lead. Primește cererea, o validează și o trimite pe e-mail prin
// Cloudflare Email Service (API REST). Nu stochează nimic și nu scrie date personale în loguri.
// Documentație: https://developers.cloudflare.com/email-service/api/send-emails/rest-api/
import { buildLeadEmail, isAllowedOrigin, isValidEmail, normalizeLead } from './leadCore';

export interface LeadEnv {
  CF_ACCOUNT_ID?: string; // identificatorul contului Cloudflare
  CF_EMAIL_API_TOKEN?: string; // secret: token cu permisiunea „Email Sending: Edit"
  LEAD_TO_EMAIL?: string; // destinatarul cererilor; mai multe adrese, separate prin virgulă
  LEAD_FROM_EMAIL?: string; // expeditorul; trebuie să aparțină unui domeniu înscris în Email Sending
}

const MAX_BODY_BYTES = 8 * 1024;
const SEND_TIMEOUT_MS = 10_000;

function json(status: number, body: Record<string, unknown>, extra: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extra },
  });
}

function recipients(raw: string | undefined): string[] {
  return (raw ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item !== '' && isValidEmail(item))
    .slice(0, 5);
}

export async function handleLead(
  request: Request,
  env: LeadEnv,
  fetchImpl: typeof fetch = fetch,
  now: () => Date = () => new Date(),
): Promise<Response> {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { Allow: 'POST, OPTIONS' } });
  if (request.method !== 'POST') return json(405, { ok: false, code: 'method_not_allowed' }, { Allow: 'POST, OPTIONS' });

  if (!isAllowedOrigin(request.headers.get('Origin'), request.url)) return json(403, { ok: false, code: 'forbidden_origin' });

  const contentType = request.headers.get('Content-Type') ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) return json(415, { ok: false, code: 'unsupported_media_type' });

  const declared = Number(request.headers.get('Content-Length') ?? '0');
  if (declared > MAX_BODY_BYTES) return json(413, { ok: false, code: 'too_large' });
  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) return json(413, { ok: false, code: 'too_large' });

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return json(400, { ok: false, code: 'invalid_json' });
  }

  const result = normalizeLead(parsed);
  // Robot prins de câmpul-capcană: răspundem ca la succes, fără să trimitem nimic, ca să nu aflăm roboții ce a eșuat.
  if (result.kind === 'spam') return json(200, { ok: true });
  if (result.kind === 'invalid') return json(400, { ok: false, code: 'validation', errors: result.errors });

  const to = recipients(env.LEAD_TO_EMAIL);
  if (!env.CF_ACCOUNT_ID || !env.CF_EMAIL_API_TOKEN || !env.LEAD_FROM_EMAIL || !isValidEmail(env.LEAD_FROM_EMAIL) || to.length === 0) {
    // Fără configurare nu pretindem că am primit cererea: pagina arată numerele de telefon.
    console.error('lead: configurare incompletă (variabile lipsă sau invalide)');
    return json(503, { ok: false, code: 'not_configured' });
  }

  const mail = buildLeadEmail(result.lead, now().toISOString());
  const payload: Record<string, unknown> = {
    to: to.length === 1 ? to[0] : to,
    from: { email: env.LEAD_FROM_EMAIL, name: 'Formular ingbroker.md' },
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  };
  if (result.lead.email) payload.replyTo = { email: result.lead.email, name: result.lead.name };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS);
  try {
    const response = await fetchImpl(
      `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(env.CF_ACCOUNT_ID)}/email/sending/send`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.CF_EMAIL_API_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      },
    );
    let data: { success?: boolean; errors?: Array<{ code?: number }>; result?: { delivered?: unknown[]; queued?: unknown[] } } = {};
    try {
      data = await response.json();
    } catch {
      // răspuns fără JSON: tratat ca eșec mai jos
    }
    const accepted = (data.result?.delivered?.length ?? 0) + (data.result?.queued?.length ?? 0);
    if (response.ok && data.success === true && accepted > 0) return json(200, { ok: true });
    // Doar codul de stare și codul de eroare Cloudflare, niciodată datele cererii.
    console.error(`lead: trimitere eșuată, status ${response.status}, cod ${data.errors?.[0]?.code ?? 'necunoscut'}`);
    return json(502, { ok: false, code: 'send_failed' });
  } catch (error) {
    console.error(`lead: trimitere eșuată, ${error instanceof Error ? error.name : 'eroare'}`);
    return json(502, { ok: false, code: 'send_failed' });
  } finally {
    clearTimeout(timer);
  }
}
