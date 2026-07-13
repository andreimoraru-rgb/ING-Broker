// Utilitar unic pentru captarea lead-urilor și evenimente analytics (dataLayer/GTM).
// Reversibil: dacă VITE_LEADS_ENDPOINT nu este setat, submit-ul eșuează controlat
// și componentele oferă un fallback (telefon/email direct).

export interface LeadPayload {
  source: string; // ex: 'risk-audit' | 'contact-form'
  name: string;
  company?: string;
  phone: string;
  email?: string;
  message?: string;
  heardFrom?: string; // „Cum ați aflat despre noi?" - atribuire AEO
  meta?: Record<string, unknown>; // date de context (ex: programul recomandat)
  hp?: string; // honeypot - trebuie să rămână gol
}

const ENDPOINT = (import.meta as unknown as { env?: Record<string, string | undefined> }).env
  ?.VITE_LEADS_ENDPOINT;

type DataLayerEvent = Record<string, unknown> & { event: string };

/** Împinge un eveniment în dataLayer (GTM). Sigur dacă GTM nu este încă instalat. */
export function pushDataLayer(event: DataLayerEvent): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: DataLayerEvent[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
}

export interface SubmitResult {
  ok: boolean;
  reason?: 'no-endpoint' | 'network' | 'server';
}

/**
 * Trimite lead-ul către endpoint-ul configurat (Cloudflare Pages Function /api/lead).
 * Nu aruncă excepții - întoarce întotdeauna un rezultat pe care UI-ul îl poate trata.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  if (!ENDPOINT) {
    return { ok: false, reason: 'no-endpoint' };
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, reason: 'server' };
    return { ok: true };
  } catch {
    return { ok: false, reason: 'network' };
  }
}
