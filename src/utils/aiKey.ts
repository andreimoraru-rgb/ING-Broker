/**
 * Rezolvarea cheii Gemini pentru uneltele interne (/ai-studio, /admin/ai-tools).
 *
 * REGULA DE SECURITATE: cheia NU intra niciodata in bundle-ul de build.
 *
 * Motivul acestui fisier: `vite.config.ts` continea
 *   define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }
 * care face substitutie literala la build. In momentul in care cineva ar fi setat
 * GEMINI_API_KEY ca variabila de build in Cloudflare Pages, cheia ar fi fost scrisa
 * in clar in JS-ul public de pe ingbroker.md. Verificat pe bundle-ul de productie
 * din 2026-07-29: substitutia NU se produsese inca (variabila nu era setata), deci
 * nu a existat scurgere reala - dar mecanismul era armat.
 *
 * Solutia: cheia se introduce la runtime de catre operator si traieste doar in
 * sessionStorage, adica pana la inchiderea tab-ului. Nu se comite, nu se builduieste,
 * nu se poate extrage din cod.
 *
 * DE CE NU un proxy server-side: /ai-studio si /admin/ai-tools sunt rute publice,
 * fara autentificare. Un endpoint /api/ai care ar tine cheia pe server ar deveni un
 * releu Gemini gratuit pentru oricine il descopera, facturat pe contul companiei.
 * Orice token de protectie plasat in client este la fel de public ca si cheia.
 * Daca aceste unelte trebuie deschise catre personal non-tehnic, solutia corecta
 * este Cloudflare Access in fata rutelor, iar apoi un proxy devine sigur.
 */

const STORAGE_KEY = 'ing_gemini_key';

/**
 * Returneaza cheia din sesiunea curenta, sau sir gol daca nu a fost introdusa.
 */
export function getRuntimeApiKey(): string {
  try {
    return sessionStorage.getItem(STORAGE_KEY) ?? '';
  } catch {
    // sessionStorage poate fi blocat (cookies dezactivate, context izolat).
    return '';
  }
}

/**
 * Salveaza cheia pentru sesiunea curenta. Se pierde la inchiderea tab-ului.
 */
export function setRuntimeApiKey(key: string): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, key.trim());
  } catch {
    // Ignoram: uneltele vor cere cheia din nou la urmatoarea actiune.
  }
}

/**
 * Sterge cheia din sesiune.
 */
export function clearRuntimeApiKey(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignoram.
  }
}

/**
 * Returneaza cheia, cerand-o operatorului daca lipseste.
 * Arunca eroare cu mesaj clar daca operatorul nu furnizeaza nimic, ca uneltele
 * sa nu porneasca apeluri catre Gemini cu cheie goala.
 */
export function requireRuntimeApiKey(): string {
  const existing = getRuntimeApiKey();
  if (existing) return existing;

  const entered = typeof window !== 'undefined'
    ? window.prompt(
        'Introdu cheia Gemini API pentru aceasta sesiune.\n' +
        'Cheia ramane doar in acest tab si nu este salvata pe server.'
      )
    : null;

  if (!entered || !entered.trim()) {
    throw new Error(
      'Cheie Gemini API lipsa. Uneltele AI interne necesita o cheie introdusa manual, ' +
      'pentru ca nu este si nu poate fi inclusa in codul public al site-ului.'
    );
  }

  setRuntimeApiKey(entered);
  return entered.trim();
}
