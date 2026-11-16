// Textele formularului de cerere ofertă, în română, rusă și engleză.
//
// ATENȚIE: textul de consimțământ și nota de informare sunt DRAFT, NECESITĂ AVIZ JURIDIC.
// Nu se publică în producție până când un jurist nu le-a avizat (Legea nr. 195/2024 privind protecția datelor
// cu caracter personal) și Andrei Moraru nu a aprobat versiunea. După aviz, se schimbă CONSENT_VERSION și
// CONSENT_REVIEW_STATUS. Versiunea se trimite odată cu fiecare cerere și rămâne în e-mailul primit,
// ca să se poată dovedi ce text a văzut persoana.

export type LeadLanguage = 'ro' | 'ru' | 'en';

export const CONSENT_VERSION = 'draft-2026-11-16';
export const CONSENT_REVIEW_STATUS: 'DRAFT_NECESITA_AVIZ_JURIDIC' | 'AVIZAT' = 'DRAFT_NECESITA_AVIZ_JURIDIC';

export const PHONES = [
  { label: '+373 79 526 003', tel: '+37379526003' },
  { label: '+373 69 526 003', tel: '+37369526003' },
] as const;

export const PRIVACY_PATH = '/politica-de-confidentialitate';

export interface LeadFormCopy {
  company: string;
  companyPh: string;
  name: string;
  namePh: string;
  phone: string;
  email: string;
  emailOptional: string;
  product: string;
  projectValue: string;
  projectValuePh: string;
  message: string;
  messagePh: string;
  sensitiveWarning: string;
  consentLabel: string;
  consentNoticeBefore: string;
  privacyLink: string;
  operatorNotice: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorTitle: string;
  errorBody: string;
  errorCallUs: string;
  fieldErrors: { required: string; invalid: string; consent: string };
  required: string;
}

export const LEAD_FORM_COPY: Record<LeadLanguage, LeadFormCopy> = {
  ro: {
    company: 'Compania',
    companyPh: 'Denumirea companiei',
    name: 'Persoana de contact',
    namePh: 'Nume și prenume',
    phone: 'Telefon',
    email: 'E-mail',
    emailOptional: 'opțional',
    product: 'Ce asigurare te interesează',
    projectValue: 'Valoarea contractului de construcție (MDL)',
    projectValuePh: 'ex: 5.000.000',
    message: 'Detalii',
    messagePh: 'Descrie pe scurt situația: activitatea, perioada, locația.',
    sensitiveWarning: 'Nu include în mesaj parole, date ale altor persoane sau informații confidențiale ale clienților.',
    consentLabel:
      'Sunt de acord ca Insurance ING Broker SRL să prelucreze datele din acest formular pentru a răspunde cererii mele și a pregăti o ofertă de asigurare.',
    consentNoticeBefore: 'Drepturile tale și durata de păstrare a datelor sunt descrise în',
    privacyLink: 'Politica de confidențialitate',
    operatorNotice:
      'Operator de date: Insurance ING Broker SRL, IDNO 1017600019386, str. Pan Halippa 9, mun. Chișinău. Cererea ajunge la echipa noastră prin e-mail.',
    submit: 'Trimite cererea',
    sending: 'Se trimite...',
    successTitle: 'Cererea a fost trimisă',
    successBody: 'Echipa ING Broker a primit datele tale și te va contacta pe telefonul sau e-mailul indicat.',
    errorTitle: 'Cererea nu a putut fi trimisă',
    errorBody: 'Datele tale nu s-au pierdut din formular. Încearcă din nou peste câteva momente sau sună-ne direct.',
    errorCallUs: 'Sună-ne:',
    fieldErrors: {
      required: 'Câmp obligatoriu.',
      invalid: 'Verifică valoarea introdusă.',
      consent: 'Fără acord nu putem trimite cererea.',
    },
    required: 'obligatoriu',
  },
  ru: {
    company: 'Компания',
    companyPh: 'Название компании',
    name: 'Контактное лицо',
    namePh: 'Фамилия и имя',
    phone: 'Телефон',
    email: 'E-mail',
    emailOptional: 'необязательно',
    product: 'Какое страхование вас интересует',
    projectValue: 'Стоимость строительного контракта (MDL)',
    projectValuePh: 'напр.: 5.000.000',
    message: 'Подробности',
    messagePh: 'Кратко опишите ситуацию: вид деятельности, срок, место.',
    sensitiveWarning: 'Не указывайте в сообщении пароли, данные других лиц или конфиденциальную информацию клиентов.',
    consentLabel:
      'Я согласен(на), чтобы Insurance ING Broker SRL обрабатывала данные из этой формы для ответа на мой запрос и подготовки страхового предложения.',
    consentNoticeBefore: 'Ваши права и срок хранения данных описаны в документе',
    privacyLink: 'Политика конфиденциальности',
    operatorNotice:
      'Оператор данных: Insurance ING Broker SRL, IDNO 1017600019386, ул. Пан Халиппа 9, мун. Кишинэу. Заявка поступает нашей команде по электронной почте.',
    submit: 'Отправить заявку',
    sending: 'Отправка...',
    successTitle: 'Заявка отправлена',
    successBody: 'Команда ING Broker получила ваши данные и свяжется с вами по указанному телефону или e-mail.',
    errorTitle: 'Не удалось отправить заявку',
    errorBody: 'Данные в форме сохранены. Повторите попытку через несколько минут или позвоните нам.',
    errorCallUs: 'Позвоните нам:',
    fieldErrors: {
      required: 'Обязательное поле.',
      invalid: 'Проверьте введённое значение.',
      consent: 'Без согласия мы не можем отправить заявку.',
    },
    required: 'обязательно',
  },
  en: {
    company: 'Company',
    companyPh: 'Company name',
    name: 'Contact person',
    namePh: 'First and last name',
    phone: 'Phone',
    email: 'E-mail',
    emailOptional: 'optional',
    product: 'Which insurance are you interested in',
    projectValue: 'Construction contract value (MDL)',
    projectValuePh: 'e.g. 5,000,000',
    message: 'Details',
    messagePh: 'Briefly describe the situation: activity, period, location.',
    sensitiveWarning: 'Do not include passwords, other people’s data or confidential client information in the message.',
    consentLabel:
      'I agree that Insurance ING Broker SRL may process the data in this form to answer my request and prepare an insurance offer.',
    consentNoticeBefore: 'Your rights and how long the data is kept are described in the',
    privacyLink: 'Privacy Policy',
    operatorNotice:
      'Data controller: Insurance ING Broker SRL, IDNO 1017600019386, 9 Pan Halippa str., Chisinau. Your request reaches our team by e-mail.',
    submit: 'Send request',
    sending: 'Sending...',
    successTitle: 'Request sent',
    successBody: 'The ING Broker team has received your details and will contact you by the phone or e-mail you gave.',
    errorTitle: 'The request could not be sent',
    errorBody: 'Your data is still in the form. Try again in a few moments or call us directly.',
    errorCallUs: 'Call us:',
    fieldErrors: {
      required: 'Required field.',
      invalid: 'Please check the value.',
      consent: 'We cannot send the request without your agreement.',
    },
    required: 'required',
  },
};
