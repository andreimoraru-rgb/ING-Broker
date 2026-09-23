/**
 * Cloudflare Pages Function - captarea lead-urilor B2B pentru ingbroker.md
 * Rută: POST /api/lead
 *
 * Flux: formular (site) -> aici (honeypot + rate-limit + validare)
 *        -> Google Apps Script Web App (adaugă rând în Sheet + trimite email).
 *
 * Variabile de mediu (setate în Cloudflare Pages -> Settings -> Environment variables):
 *   LEADS_SHEET_WEBHOOK  - URL-ul /exec al Google Apps Script (secret)
 *   LEADS_SHARED_TOKEN   - (opțional) token trimis către Apps Script pentru verificare
 *   LEADS_KV             - (opțional) KV namespace pentru rate-limit real
 *
 * Nu conține prețuri, francize sau alte date reglementate CNPF.
 */

interface Env {
  LEADS_SHEET_WEBHOOK?: string;
  LEADS_SHARED_TOKEN?: string;
  LEADS_KV?: KVNamespace;
}

interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
}

// Câmpurile acceptate de la client (aliniate cu src/utils/leads.ts).
interface LeadBody {
  source?: string;
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  message?: string;
  heardFrom?: string;
  meta?: Record<string, unknown>;
  hp?: string; // honeypot
}

const MAX_LEN = 2000;
const RATE_LIMIT = 5; // cereri
const RATE_WINDOW = 3600; // pe oră (secunde)

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

function clean(v: unknown): string {
  return typeof v === 'string' ? v.slice(0, MAX_LEN).trim() : '';
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // 1. Honeypot: boții completează câmpul ascuns. Răspundem 200 ca să nu-i alertăm.
  if (clean(body.hp)) {
    return json({ ok: true });
  }

  // 2. Validare minimă: nume + cel puțin o cale de contact (telefon sau email).
  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  if (!name || (!phone && !email)) {
    return json({ ok: false, error: 'missing_fields' }, 422);
  }

  // 3. Rate-limit pe IP (dacă KV este configurat; altfel se sare peste).
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (env.LEADS_KV) {
    const key = `rl:${ip}`;
    const current = parseInt((await env.LEADS_KV.get(key)) || '0', 10);
    if (current >= RATE_LIMIT) {
      return json({ ok: false, error: 'rate_limited' }, 429);
    }
    await env.LEADS_KV.put(key, String(current + 1), { expirationTtl: RATE_WINDOW });
  }

  // 4. Construim payload-ul curat pentru Sheet.
  const payload = {
    receivedAt: new Date().toISOString(),
    source: clean(body.source) || 'website',
    name,
    company: clean(body.company),
    phone,
    email: clean(body.email),
    message: clean(body.message),
    heardFrom: clean(body.heardFrom),
    meta: body.meta && typeof body.meta === 'object' ? body.meta : {},
    ip,
    token: env.LEADS_SHARED_TOKEN || '',
  };

  // 5. Dacă webhook-ul nu e configurat încă, întoarcem o eroare controlată
  //    (UI-ul afișează fallback cu telefon/email).
  if (!env.LEADS_SHEET_WEBHOOK) {
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  // 6. Redirecționăm către Apps Script (care scrie în Sheet + trimite email).
  try {
    const res = await fetch(env.LEADS_SHEET_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return json({ ok: false, error: 'sheet_error' }, 502);
    }
  } catch {
    return json({ ok: false, error: 'sheet_unreachable' }, 502);
  }

  return json({ ok: true });
};

// Notă: exportând doar onRequestPost, Cloudflare Pages răspunde automat 405
// la metodele non-POST. Nu adăugăm un onRequest generic (ar avea prioritate).
