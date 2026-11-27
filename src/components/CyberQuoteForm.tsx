import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import type { Language } from '../translations';
import { trackEvent } from '../utils/analytics';
import { shortQuoteUrl, validateShortQuote, type QuoteErrors, type QuoteField, type ShortQuoteValues } from '../utils/shortQuote';

const copy = {
  ro: {
    company: 'Companie', contact: 'Email sau telefon', details: 'Ce dorești să asiguri?', optional: 'Opțional',
    companyPlaceholder: 'Denumirea companiei', contactPlaceholder: 'Cum te putem contacta', detailsPlaceholder: 'Descrie pe scurt activitatea și nevoia de asigurare.',
    companyError: 'Scrie denumirea companiei, între 2 și 120 de caractere.', contactError: 'Introdu o adresă de email sau un număr de telefon valid.', detailsError: 'Scurtează descrierea la cel mult 1.600 de caractere.',
    send: 'Continuă în WhatsApp', preparedButton: 'Mesaj pregătit',
    help: 'Mesajul se deschide în WhatsApp. Îl verifici și îl trimiți din aplicație.',
    privacy: 'Nu include parole, date ale clienților sau documente confidențiale.', policy: 'Politica de confidențialitate',
    prepared: 'Mesajul este pregătit în WhatsApp. Solicitarea ajunge la noi după ce îl trimiți din aplicație.',
    blocked: 'Fila WhatsApp nu s-a deschis. Folosește legătura de mai jos; datele introduse sunt păstrate.', reopen: 'Deschide WhatsApp',
  },
  ru: {
    company: 'Компания', contact: 'Email или телефон', details: 'Что вы хотите застраховать?', optional: 'Необязательно',
    companyPlaceholder: 'Название компании', contactPlaceholder: 'Как с вами связаться', detailsPlaceholder: 'Кратко опишите деятельность и задачу страхования.',
    companyError: 'Укажите название компании, от 2 до 120 символов.', contactError: 'Укажите действующий email или номер телефона.', detailsError: 'Сократите описание до 1 600 символов.',
    send: 'Продолжить в WhatsApp', preparedButton: 'Сообщение подготовлено',
    help: 'Сообщение откроется в WhatsApp. Проверьте и отправьте его из приложения.',
    privacy: 'Не указывайте пароли, данные клиентов или конфиденциальные документы.', policy: 'Политика конфиденциальности',
    prepared: 'Сообщение подготовлено в WhatsApp. Мы получим запрос после его отправки из приложения.',
    blocked: 'Вкладка WhatsApp не открылась. Используйте ссылку ниже; введённые данные сохранены в форме.', reopen: 'Открыть WhatsApp',
  },
  en: {
    company: 'Company', contact: 'Email or phone', details: 'What would you like to insure?', optional: 'Optional',
    companyPlaceholder: 'Company name', contactPlaceholder: 'How can we contact you?', detailsPlaceholder: 'Briefly describe your business and insurance needs.',
    companyError: 'Enter a company name between 2 and 120 characters.', contactError: 'Enter a valid email address or phone number.', detailsError: 'Shorten the description to 1,600 characters or fewer.',
    send: 'Continue in WhatsApp', preparedButton: 'Message prepared',
    help: 'The message opens in WhatsApp. Review it and send it from the app.',
    privacy: 'Do not include passwords, client data or confidential documents.', policy: 'Privacy policy',
    prepared: 'Your message is prepared in WhatsApp. We receive the enquiry after you send it from the app.',
    blocked: 'The WhatsApp tab did not open. Use the link below; your entries remain in the form.', reopen: 'Open WhatsApp',
  },
};

export function CyberQuoteForm({ lang, title, description }: { lang: Language; title: string; description: string }) {
  const c = copy[lang];
  const [values, setValues] = useState<ShortQuoteValues>({ company: '', contact: '', details: '' });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<'idle' | 'prepared' | 'blocked'>('idle');
  const form = useRef<HTMLFormElement>(null);
  const update = (field: QuoteField, value: string) => {
    setValues(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: undefined }));
    setStatus('idle');
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (status === 'prepared') return;
    const nextErrors = validateShortQuote(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = (['company', 'contact', 'details'] as QuoteField[]).find(field => nextErrors[field]);
      if (first) form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const url = shortQuoteUrl(values, lang);
    try {
      const tab = window.open('about:blank', '_blank');
      if (!tab) { setStatus('blocked'); return; }
      tab.opener = null;
      tab.location.replace(url);
      setStatus('prepared');
      trackEvent('whatsapp_message_prepared', {
        source: 'cyber_short_form', page_path: window.location.pathname,
        lead_type: 'b2b', contact_method: 'whatsapp',
      });
    } catch { setStatus('blocked'); }
  };
  return (
    <section id="solicita-oferta" className="cyber-quote" aria-labelledby="cyber-quote-title">
      <div className="cyber-quote__layout">
        <div className="cyber-quote__intro">
          <h2 id="cyber-quote-title">{title}</h2>
          <div className="cyber-heading-rule" aria-hidden="true" />
          <p>{description}</p>
          <a href="tel:+37369526003" className="cyber-action cyber-action--secondary cyber-quote__phone">
            <Phone size={18} aria-hidden="true" /><span className="cyber-action__label">+37369526003</span>
          </a>
        </div>
        <form ref={form} onSubmit={submit} noValidate className="cyber-quote__form" aria-label={title}>
          <div className="cyber-quote__fields">
            <div className="cyber-quote__field">
              <label htmlFor="cyber-company">{c.company} <span aria-hidden="true">*</span></label>
              <input id="cyber-company" name="company" autoComplete="organization" required maxLength={120} value={values.company} onChange={e => update('company', e.target.value)} placeholder={c.companyPlaceholder} aria-invalid={!!errors.company} aria-describedby="cyber-company-error" />
              <span id="cyber-company-error" className="cyber-quote__error">{errors.company ? c.companyError : ''}</span>
            </div>
            <div className="cyber-quote__field">
              <label htmlFor="cyber-contact">{c.contact} <span aria-hidden="true">*</span></label>
              <input id="cyber-contact" name="contact" autoComplete="off" type="text" required maxLength={160} value={values.contact} onChange={e => update('contact', e.target.value)} placeholder={c.contactPlaceholder} aria-invalid={!!errors.contact} aria-describedby="cyber-contact-error" />
              <span id="cyber-contact-error" className="cyber-quote__error">{errors.contact ? c.contactError : ''}</span>
            </div>
          </div>
          <div className="cyber-quote__field">
            <label htmlFor="cyber-details">{c.details} <span className="cyber-quote__optional">({c.optional})</span></label>
            <textarea id="cyber-details" name="details" rows={3} maxLength={1600} value={values.details} onChange={e => update('details', e.target.value)} placeholder={c.detailsPlaceholder} aria-invalid={!!errors.details} aria-describedby="cyber-details-error cyber-quote-privacy" />
            <span id="cyber-details-error" className="cyber-quote__error">{errors.details ? c.detailsError : ''}</span>
          </div>
          <button type="submit" disabled={status === 'prepared'} className="cyber-action cyber-action--primary cyber-quote__submit">
            <span className="cyber-action__label">{status === 'prepared' ? c.preparedButton : c.send}</span>
            {status === 'prepared' ? <Check size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
          </button>
          <p className="cyber-quote__help">{c.help}</p>
          <p id="cyber-quote-privacy" className="cyber-quote__privacy">{c.privacy} <Link to="/politica-de-confidentialitate">{c.policy}</Link>.</p>
          <div className="cyber-quote__status" role="status" aria-live="polite" aria-atomic="true">
            {status !== 'idle' && <><p>{status === 'prepared' ? c.prepared : c.blocked}</p><a href={shortQuoteUrl(values, lang)} target="_blank" rel="noopener noreferrer">{c.reopen}<ArrowRight size={16} aria-hidden="true" /></a></>}
          </div>
        </form>
      </div>
    </section>
  );
}
