import React, { useEffect, useId, useRef, useState } from 'react';
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import {
  CONSENT_VERSION,
  LEAD_FORM_COPY,
  PHONES,
  PRIVACY_PATH,
  type LeadLanguage,
} from '../data/leadFormCopy';
import { leadTypeOf, type LeadProduct } from '../utils/leadCore';
import { trackEvent } from '../utils/analytics';

export interface QuoteProduct {
  key: LeadProduct;
  label: string;
}

interface B2BQuoteFormProps {
  lang: LeadLanguage;
  /** Unde apare formularul, pentru măsurare (ex: contact_page, car_ear_page). Nu conține date personale. */
  source: string;
  products: QuoteProduct[];
  defaultProduct?: LeadProduct;
  /** Arată câmpul „valoarea contractului", util la CAR/EAR. */
  showProjectValue?: boolean;
  submitLabel?: string;
  messagePlaceholder?: string;
  /** Text propriu pentru confirmare, de exemplu cu termenul de răspuns promis pe pagina respectivă. */
  successMessage?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';
type FieldKey = 'company' | 'name' | 'phone' | 'email' | 'product' | 'consent';

const inputClass =
  'w-full bg-gray-50 border border-gray-300 px-4 py-3 text-base rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all aria-[invalid=true]:border-red-600';
const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

export const B2BQuoteForm: React.FC<B2BQuoteFormProps> = ({
  lang,
  source,
  products,
  defaultProduct,
  showProjectValue = false,
  submitLabel,
  messagePlaceholder,
  successMessage,
}) => {
  const copy = LEAD_FORM_COPY[lang];
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const [status, setStatus] = useState<Status>('idle');
  const [serverErrors, setServerErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    product: defaultProduct ?? products[0]?.key ?? 'other',
    projectValue: '',
    message: '',
    website: '', // câmp-capcană, rămâne gol la oameni
  });
  const resultRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => () => abortRef.current?.abort(), []);
  useEffect(() => {
    if (status === 'success' || status === 'error') resultRef.current?.focus();
  }, [status]);

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setServerErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const errorText = (field: FieldKey): string | undefined => {
    const code = serverErrors[field];
    if (!code) return undefined;
    if (field === 'consent') return copy.fieldErrors.consent;
    return code === 'required' ? copy.fieldErrors.required : copy.fieldErrors.invalid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setServerErrors({});

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          ...form,
          consent,
          consentVersion: CONSENT_VERSION,
          lang,
          pagePath: window.location.pathname,
        }),
      });
      let data: { ok?: boolean; errors?: Partial<Record<FieldKey, string>> } = {};
      try {
        data = await response.json();
      } catch {
        /* răspuns fără JSON: tratat ca eroare mai jos */
      }
      if (response.ok && data.ok === true) {
        // Se măsoară doar după confirmarea serverului, fără date personale.
        trackEvent('quote_request_submit', { source, page_path: window.location.pathname, lead_type: leadTypeOf(form.product), contact_method: 'form' });
        setStatus('success');
        return;
      }
      if (response.status === 400 && data.errors) {
        setServerErrors(data.errors);
        setStatus('idle');
        return;
      }
      trackEvent('quote_request_error', { source, page_path: window.location.pathname, status: response.status });
      setStatus('error');
    } catch {
      trackEvent('quote_request_error', { source, page_path: window.location.pathname, status: 0 });
      setStatus('error');
    } finally {
      window.clearTimeout(timeout);
    }
  };

  if (status === 'success') {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="bg-green-50 border border-green-200 rounded-xl p-8 text-center outline-none">
        <CheckCircle2 size={44} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl font-bold text-green-900 mb-2">{copy.successTitle}</h3>
        <p className="text-green-900">{successMessage ?? copy.successBody}</p>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false} aria-busy={sending}>
      {status === 'error' && (
        <div ref={resultRef} tabIndex={-1} role="alert" className="bg-red-50 border border-red-300 rounded-lg p-4 text-sm text-red-900 outline-none">
          <p className="flex items-center gap-2 font-bold mb-1">
            <AlertTriangle size={18} aria-hidden="true" />
            {copy.errorTitle}
          </p>
          <p className="mb-2">{copy.errorBody}</p>
          <p>
            {copy.errorCallUs}{' '}
            {PHONES.map((p, i) => (
              <React.Fragment key={p.tel}>
                {i > 0 && ' / '}
                <a href={`tel:${p.tel}`} className="font-bold underline">
                  {p.label}
                </a>
              </React.Fragment>
            ))}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={id('company')} className={labelClass}>{copy.company} *</label>
          <input id={id('company')} name="company" type="text" required minLength={2} maxLength={150} autoComplete="organization"
            value={form.company} onChange={set('company')} placeholder={copy.companyPh} className={inputClass}
            aria-invalid={!!errorText('company')} aria-describedby={errorText('company') ? id('company-err') : undefined} />
          {errorText('company') && <p id={id('company-err')} className="text-sm text-red-700 mt-1">{errorText('company')}</p>}
        </div>
        <div>
          <label htmlFor={id('name')} className={labelClass}>{copy.name} *</label>
          <input id={id('name')} name="name" type="text" required minLength={2} maxLength={100} autoComplete="name"
            value={form.name} onChange={set('name')} placeholder={copy.namePh} className={inputClass}
            aria-invalid={!!errorText('name')} aria-describedby={errorText('name') ? id('name-err') : undefined} />
          {errorText('name') && <p id={id('name-err')} className="text-sm text-red-700 mt-1">{errorText('name')}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={id('phone')} className={labelClass}>{copy.phone} *</label>
          <input id={id('phone')} name="phone" type="tel" required inputMode="tel" maxLength={25} autoComplete="tel"
            value={form.phone} onChange={set('phone')} placeholder="+373 69 000 000" className={inputClass}
            aria-invalid={!!errorText('phone')} aria-describedby={errorText('phone') ? id('phone-err') : undefined} />
          {errorText('phone') && <p id={id('phone-err')} className="text-sm text-red-700 mt-1">{errorText('phone')}</p>}
        </div>
        <div>
          <label htmlFor={id('email')} className={labelClass}>
            {copy.email} <span className="font-normal text-gray-500">({copy.emailOptional})</span>
          </label>
          <input id={id('email')} name="email" type="email" maxLength={120} autoComplete="email"
            value={form.email} onChange={set('email')} placeholder="email@compania.md" className={inputClass}
            aria-invalid={!!errorText('email')} aria-describedby={errorText('email') ? id('email-err') : undefined} />
          {errorText('email') && <p id={id('email-err')} className="text-sm text-red-700 mt-1">{errorText('email')}</p>}
        </div>
      </div>

      {products.length > 1 && (
        <div>
          <label htmlFor={id('product')} className={labelClass}>{copy.product} *</label>
          <select id={id('product')} name="product" required value={form.product} onChange={set('product')} className={inputClass}>
            {products.map((p) => (
              <option key={p.key} value={p.key}>{p.label}</option>
            ))}
          </select>
        </div>
      )}

      {showProjectValue && (
        <div>
          <label htmlFor={id('value')} className={labelClass}>
            {copy.projectValue} <span className="font-normal text-gray-500">({copy.emailOptional})</span>
          </label>
          <input id={id('value')} name="projectValue" type="text" inputMode="numeric" maxLength={30}
            value={form.projectValue} onChange={set('projectValue')} placeholder={copy.projectValuePh} className={inputClass} />
        </div>
      )}

      <div>
        <label htmlFor={id('message')} className={labelClass}>
          {copy.message} <span className="font-normal text-gray-500">({copy.emailOptional})</span>
        </label>
        <textarea id={id('message')} name="message" rows={4} maxLength={1500} value={form.message} onChange={set('message')}
          placeholder={messagePlaceholder ?? copy.messagePh} className={`${inputClass} resize-y`} aria-describedby={id('warn')} />
        <p id={id('warn')} className="text-sm text-gray-600 mt-1.5">{copy.sensitiveWarning}</p>
      </div>

      {/* Câmp-capcană pentru roboți: ascuns vizual și din tastatură, nu cu display:none. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
        </label>
      </div>

      <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="consent" required checked={consent} onChange={(e) => { setConsent(e.target.checked); setServerErrors((p) => ({ ...p, consent: undefined })); }}
            className="mt-1 h-5 w-5 shrink-0 accent-[#E31E24]" aria-invalid={!!errorText('consent')} aria-describedby={id('notice')} />
          <span className="text-sm text-gray-800">{copy.consentLabel} *</span>
        </label>
        {errorText('consent') && <p className="text-sm text-red-700 mt-2">{errorText('consent')}</p>}
        <p id={id('notice')} className="text-xs text-gray-600 mt-3 leading-relaxed">
          {copy.operatorNotice} {copy.consentNoticeBefore}{' '}
          <a href={PRIVACY_PATH} target="_blank" rel="noopener noreferrer" className="underline font-semibold">{copy.privacyLink}</a>.
        </p>
      </div>

      <button type="submit" disabled={sending}
        className="w-full min-h-[48px] bg-primary text-white font-bold px-6 py-4 rounded-lg uppercase text-sm tracking-wider hover:bg-primary-dark transition-colors flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed">
        {sending ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            {copy.sending}
          </>
        ) : (
          <>
            {submitLabel ?? copy.submit}
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-sm text-gray-600 text-center">
        {PHONES.map((p, i) => (
          <React.Fragment key={p.tel}>
            {i > 0 && ' / '}
            <a href={`tel:${p.tel}`} className="font-bold text-primary underline">{p.label}</a>
          </React.Fragment>
        ))}
      </p>
    </form>
  );
};
