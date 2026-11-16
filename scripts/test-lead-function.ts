// Teste pentru POST /api/lead. Rulare: npx tsx scripts/test-lead-function.ts
import assert from 'node:assert/strict';
import { handleLead, type LeadEnv } from '../src/utils/leadHandler';

const URL_LEAD = 'https://ingbroker.md/api/lead';
const ENV: LeadEnv = {
  CF_ACCOUNT_ID: 'acc123',
  CF_EMAIL_API_TOKEN: 'tok-secret-xyz',
  LEAD_TO_EMAIL: 'cereri@ingbroker.md',
  LEAD_FROM_EMAIL: 'formular@ingbroker.md',
};
const VALID = {
  company: 'Constructor SRL',
  name: 'Ion Popescu',
  phone: '+373 69 123 456',
  email: 'ion@constructor.md',
  product: 'car-ear',
  message: 'Șantier în Chișinău, 14 luni.',
  projectValue: '5.000.000',
  consent: true,
  consentVersion: 'draft-test',
  lang: 'ro',
  pagePath: '/servicii/asigurari-constructii-car-ear',
  website: '',
};
const now = () => new Date('2026-11-16T10:00:00.000Z');

function req(body: unknown, init: { method?: string; origin?: string | null; type?: string | null; raw?: string } = {}): Request {
  const headers: Record<string, string> = {};
  if (init.origin !== null) headers.Origin = init.origin ?? 'https://ingbroker.md';
  if (init.type !== null) headers['Content-Type'] = init.type ?? 'application/json';
  return new Request(URL_LEAD, {
    method: init.method ?? 'POST',
    headers,
    body: init.method === 'GET' ? undefined : init.raw ?? JSON.stringify(body),
  });
}

type Call = { url: string; init: RequestInit };
function mockFetch(reply: () => Response | Promise<Response>) {
  const calls: Call[] = [];
  const fn = (async (url: string, init: RequestInit) => {
    calls.push({ url, init });
    return reply();
  }) as unknown as typeof fetch;
  return { fn, calls };
}
const okReply = () =>
  new Response(JSON.stringify({ success: true, errors: [], result: { delivered: ['cereri@ingbroker.md'], permanent_bounces: [], queued: [] } }), { status: 200 });

let passed = 0;
async function test(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    passed++;
    console.log(`ok   ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}\n     ${(error as Error).message}`);
    process.exitCode = 1;
  }
}

await test('GET este respins (405), OPTIONS răspunde 204', async () => {
  const m = mockFetch(okReply);
  assert.equal((await handleLead(req(null, { method: 'GET' }), ENV, m.fn, now)).status, 405);
  assert.equal((await handleLead(req(null, { method: 'OPTIONS' }), ENV, m.fn, now)).status, 204);
  assert.equal(m.calls.length, 0);
});

await test('origine lipsă sau străină: 403, nimic trimis', async () => {
  const m = mockFetch(okReply);
  assert.equal((await handleLead(req(VALID, { origin: null }), ENV, m.fn, now)).status, 403);
  assert.equal((await handleLead(req(VALID, { origin: 'https://evil.example' }), ENV, m.fn, now)).status, 403);
  assert.equal((await handleLead(req(VALID, { origin: 'https://ingbroker.md.evil.example' }), ENV, m.fn, now)).status, 403);
  assert.equal((await handleLead(req(VALID, { origin: 'http://ingbroker.md' }), ENV, m.fn, now)).status, 403);
  assert.equal(m.calls.length, 0);
});

await test('originile ingbroker.md și www.ingbroker.md sunt acceptate', async () => {
  for (const origin of ['https://ingbroker.md', 'https://www.ingbroker.md']) {
    const m = mockFetch(okReply);
    assert.equal((await handleLead(req(VALID, { origin }), ENV, m.fn, now)).status, 200, origin);
  }
});

await test('aceeași origine (previzualizare Cloudflare) este acceptată', async () => {
  const m = mockFetch(okReply);
  const r = new Request('https://abc123.ing-broker.pages.dev/api/lead', {
    method: 'POST',
    headers: { Origin: 'https://abc123.ing-broker.pages.dev', 'Content-Type': 'application/json' },
    body: JSON.stringify(VALID),
  });
  assert.equal((await handleLead(r, ENV, m.fn, now)).status, 200);
});

await test('tip de conținut greșit: 415; JSON invalid: 400; corp prea mare: 413', async () => {
  const m = mockFetch(okReply);
  assert.equal((await handleLead(req(VALID, { type: 'text/plain' }), ENV, m.fn, now)).status, 415);
  assert.equal((await handleLead(req(null, { raw: '{nu e json' }), ENV, m.fn, now)).status, 400);
  assert.equal((await handleLead(req(null, { raw: JSON.stringify({ ...VALID, message: 'x'.repeat(9000) }) }), ENV, m.fn, now)).status, 413);
  assert.equal(m.calls.length, 0);
});

await test('fără consimțământ exact `true`: 400 cu eroare pe consent', async () => {
  for (const consent of [false, 'true', 1, undefined]) {
    const m = mockFetch(okReply);
    const res = await handleLead(req({ ...VALID, consent }), ENV, m.fn, now);
    assert.equal(res.status, 400, String(consent));
    const body = (await res.json()) as { errors: Record<string, string> };
    assert.equal(body.errors.consent, 'required');
    assert.equal(m.calls.length, 0);
  }
});

await test('câmpuri invalide sunt raportate pe câmp', async () => {
  const m = mockFetch(okReply);
  const res = await handleLead(req({ ...VALID, company: '', phone: '12', email: 'nu-este-email', product: 'bitcoin' }), ENV, m.fn, now);
  assert.equal(res.status, 400);
  const body = (await res.json()) as { errors: Record<string, string> };
  assert.deepEqual(Object.keys(body.errors).sort(), ['company', 'email', 'phone', 'product']);
  assert.equal(m.calls.length, 0);
});

await test('e-mailul este opțional, telefonul nu', async () => {
  const m = mockFetch(okReply);
  assert.equal((await handleLead(req({ ...VALID, email: '' }), ENV, m.fn, now)).status, 200);
  const payload = JSON.parse(m.calls[0].init.body as string);
  assert.equal(payload.replyTo, undefined);
  assert.equal((await handleLead(req({ ...VALID, phone: '' }), ENV, mockFetch(okReply).fn, now)).status, 400);
});

await test('câmpul-capcană: răspuns 200, dar nu se trimite nimic', async () => {
  const m = mockFetch(okReply);
  const res = await handleLead(req({ ...VALID, website: 'http://spam.example' }), ENV, m.fn, now);
  assert.equal(res.status, 200);
  assert.equal(m.calls.length, 0);
});

await test('fără configurare: 503, nimic trimis, nicio promisiune de succes', async () => {
  for (const env of [{}, { ...ENV, CF_EMAIL_API_TOKEN: undefined }, { ...ENV, LEAD_TO_EMAIL: 'nu-e-adresa' }, { ...ENV, LEAD_FROM_EMAIL: '' }]) {
    const m = mockFetch(okReply);
    const res = await handleLead(req(VALID), env, m.fn, now);
    assert.equal(res.status, 503);
    assert.equal(((await res.json()) as { ok: boolean }).ok, false);
    assert.equal(m.calls.length, 0);
  }
});

await test('succes: cerere corectă către API-ul Email Service', async () => {
  const m = mockFetch(okReply);
  const res = await handleLead(req(VALID), ENV, m.fn, now);
  assert.equal(res.status, 200);
  assert.equal(m.calls.length, 1);
  assert.equal(m.calls[0].url, 'https://api.cloudflare.com/client/v4/accounts/acc123/email/sending/send');
  const headers = m.calls[0].init.headers as Record<string, string>;
  assert.equal(headers.Authorization, 'Bearer tok-secret-xyz');
  const p = JSON.parse(m.calls[0].init.body as string);
  assert.equal(p.to, 'cereri@ingbroker.md');
  assert.equal(p.from.email, 'formular@ingbroker.md');
  assert.deepEqual(p.replyTo, { email: 'ion@constructor.md', name: 'Ion Popescu' });
  assert.match(p.subject, /^Cerere ofertă B2B: Constructor SRL \(Construcții CAR\/EAR\)$/);
  assert.match(p.text, /Consimțământ acordat: DA\. Versiunea textului: draft-test/);
  assert.match(p.text, /Primit la: 2026-11-16T10:00:00.000Z/);
  assert.match(p.text, /Valoare proiect \(MDL\): 5\.000\.000/);
  assert.equal(res.headers.get('Cache-Control'), 'no-store');
});

await test('subiectul urmează tipul cererii: doar produsele corporate sunt „B2B"', async () => {
  const expected: Record<string, RegExp> = {
    corporate: /^Cerere ofertă B2B: /,
    'car-ear': /^Cerere ofertă B2B: /,
    reinsurance: /^Cerere ofertă B2B: /,
    other: /^Cerere ofertă B2B: /,
    personal: /^Cerere ofertă: /,
    claims: /^Cerere suport daune: /,
  };
  for (const [product, re] of Object.entries(expected)) {
    const m = mockFetch(okReply);
    await handleLead(req({ ...VALID, product }), ENV, m.fn, now);
    assert.match(JSON.parse(m.calls[0].init.body as string).subject, re, product);
  }
});

await test('mai mulți destinatari devin listă', async () => {
  const m = mockFetch(okReply);
  await handleLead(req(VALID), { ...ENV, LEAD_TO_EMAIL: 'a@ingbroker.md, b@ingbroker.md' }, m.fn, now);
  assert.deepEqual(JSON.parse(m.calls[0].init.body as string).to, ['a@ingbroker.md', 'b@ingbroker.md']);
});

await test('injecție în antete: CR/LF din câmpuri nu ajunge în subiect', async () => {
  const m = mockFetch(okReply);
  await handleLead(req({ ...VALID, company: 'Acme\r\nBcc: victima@exemplu.md', name: 'Ion\nCc: x@y.md' }), ENV, m.fn, now);
  const p = JSON.parse(m.calls[0].init.body as string);
  assert.doesNotMatch(p.subject, /[\r\n]/);
  assert.doesNotMatch(p.replyTo.name, /[\r\n]/);
});

await test('HTML din câmpuri este escapat în corpul HTML', async () => {
  const m = mockFetch(okReply);
  await handleLead(req({ ...VALID, company: '<script>alert(1)</script>', message: '<img src=x onerror=alert(1)>' }), ENV, m.fn, now);
  const p = JSON.parse(m.calls[0].init.body as string);
  assert.doesNotMatch(p.html, /<script>|<img /);
  assert.match(p.html, /&lt;script&gt;/);
});

await test('eșec Cloudflare (4xx, success false, zero acceptați, excepție): 502, fără date personale în loguri', async () => {
  const logs: string[] = [];
  const original = console.error;
  console.error = (...args: unknown[]) => logs.push(args.join(' '));
  try {
    const failures: Array<() => Response | Promise<Response>> = [
      () => new Response(JSON.stringify({ success: false, errors: [{ code: 10102 }] }), { status: 403 }),
      () => new Response(JSON.stringify({ success: true, result: { delivered: [], queued: [] } }), { status: 200 }),
      () => new Response('nu e json', { status: 500 }),
      () => {
        throw new Error('rețea căzută');
      },
    ];
    for (const reply of failures) {
      const res = await handleLead(req(VALID), ENV, mockFetch(reply).fn, now);
      assert.equal(res.status, 502);
      assert.equal(((await res.json()) as { ok: boolean }).ok, false);
    }
  } finally {
    console.error = original;
  }
  assert.ok(logs.length === 4, `loguri: ${logs.length}`);
  for (const line of logs) {
    for (const secret of ['Constructor', 'Popescu', '123 456', 'constructor.md', 'tok-secret-xyz']) {
      assert.ok(!line.includes(secret), `logul conține „${secret}": ${line}`);
    }
  }
});

await test('curățarea nu strică datele valide: cifrele 0, 2, 8, 9 și diacriticele rămân', async () => {
  const m = mockFetch(okReply);
  const data = { ...VALID, phone: '+373 69 208 920', projectValue: '2.089.020', company: 'Țesătoria 2089 SRL', message: 'Termen 28.09.2028, șef: Ștefan' };
  assert.equal((await handleLead(req(data), ENV, m.fn, now)).status, 200);
  const p = JSON.parse(m.calls[0].init.body as string);
  assert.match(p.text, /Telefon: \+373 69 208 920/);
  assert.match(p.text, /Valoare proiect \(MDL\): 2\.089\.020/);
  assert.match(p.text, /Companie: Țesătoria 2089 SRL/);
  assert.match(p.text, /Termen 28\.09\.2028, șef: Ștefan/);
});

await test('separatorii de rând Unicode și rândurile noi din mesaj sunt tratate corect', async () => {
  const ls = String.fromCharCode(0x2028);
  const ps = String.fromCharCode(0x2029);
  const m = mockFetch(okReply);
  await handleLead(req({ ...VALID, company: `Acme${ls}Test${ps}SRL`, message: `rând unu\r\nrând doi${ls}rând trei\n\n\n\nrând patru` }), ENV, m.fn, now);
  const p = JSON.parse(m.calls[0].init.body as string);
  assert.match(p.subject, /Acme Test SRL/);
  assert.ok(!p.text.includes(ls) && !p.text.includes(ps));
  assert.match(p.text, /rând unu\nrând doi rând trei\n\nrând patru/);
});

console.log(`\n${passed} teste trecute${process.exitCode ? ', CU EȘECURI' : ''}`);
