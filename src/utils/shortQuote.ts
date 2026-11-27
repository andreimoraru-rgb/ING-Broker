import type { Language } from '../translations';

export interface ShortQuoteValues { company: string; contact: string; details: string }
export type QuoteField = keyof ShortQuoteValues;
export type QuoteErrors = Partial<Record<QuoteField, 'company' | 'contact' | 'details'>>;

export function validateShortQuote(values: ShortQuoteValues): QuoteErrors {
  const errors: QuoteErrors = {};
  const company = values.company.trim(), contact = values.contact.trim();
  if (company.length < 2 || company.length > 120) errors.company = 'company';
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const digits = contact.replace(/\D/g, '');
  const phone = /^\+?[\d\s().-]+$/.test(contact) && digits.length >= 7 && digits.length <= 15;
  if (contact.length > 160 || (!email && !phone)) errors.contact = 'contact';
  if (values.details.trim().length > 1600) errors.details = 'details';
  return errors;
}

export function shortQuoteUrl(values: ShortQuoteValues, lang: Language): string {
  const labels = {
    ro: ['Solicitare cyber de pe ingbroker.md', 'Companie', 'Contact', 'Detalii'],
    ru: ['Запрос по киберстрахованию с ingbroker.md', 'Компания', 'Контакт', 'Подробности'],
    en: ['Cyber enquiry from ingbroker.md', 'Company', 'Contact', 'Details'],
  }[lang];
  const lines = [labels[0], `${labels[1]}: ${values.company.trim()}`, `${labels[2]}: ${values.contact.trim()}`];
  if (values.details.trim()) lines.push(`${labels[3]}: ${values.details.trim()}`);
  return `https://wa.me/37369526003?text=${encodeURIComponent(lines.join('\n'))}`;
}
