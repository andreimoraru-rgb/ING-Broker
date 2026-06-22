import React, { useState } from 'react';
import { Language } from '../translations';

// Obține access_key de la https://web3forms.com cu emailul andrei.moraru@ingbroker.md
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY';

interface B2BLeadFormProps {
  lang: Language;
}

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
}

export const B2BLeadForm: React.FC<B2BLeadFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const serviceOptions = [
    'Flotă Auto Corporativă',
    'Asigurare CAR/EAR Construcții',
    'Răspundere Profesională PI',
    'Asigurare Cyber',
    'Asigurare Cargo / CMR',
    'Garanții Bancare / Bonds',
    'Altceva'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'ingbroker.md - Lead B2B',
          subject: `Lead B2B nou - ${formData.company || 'companie necunoscută'} - ${formData.service || 'serviciu nespecificat'}`,
          name: formData.name || 'necompletat',
          phone: formData.phone,
          email: formData.email || 'necompletat',
          company: formData.company,
          tipAsigurare: formData.service || 'nespecificat',
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-100 p-10 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Mulțumim! Te contactăm în 15 minute.</h3>
        <p className="text-gray-500 text-sm">Cererea ta a ajuns la echipa noastră B2B. Răspundem în timpul programului de lucru.</p>
        <p className="text-xs text-gray-400 mt-4">Luni - Vineri, 09:00 - 18:00</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100">
      <div className="p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Primești oferta B2B în 15 minute
        </h2>
        <p className="text-gray-500 text-sm">
          Completezi 2 câmpuri. Te sunăm noi. Fără spam, fără obligații.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+373 69 000 000"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Companie *
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Numele companiei dvs."
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Tip asigurare
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition bg-white"
            >
              <option value="">Selectează (opțional)</option>
              {serviceOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Nume
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Numele dvs. (opțional)"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@companie.md (opțional)"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition"
            />
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              <p className="font-semibold mb-1">Eroare la trimitere.</p>
              <p>Sună direct: <a href="tel:+37369526003" className="font-bold underline">+(373) 69 526 003</a></p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            onClick={async (e) => {
              // Dacă fetch-ul eșuează, pornim tel: ca fallback
              if (submitError) {
                window.location.href = 'tel:+37369526003';
              }
            }}
            className="w-full bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-semibold py-4 px-6 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base mt-2 disabled:opacity-60"
          >
            {isSubmitting ? 'Se trimite...' : 'Vreau oferta gratuită'}
          </button>

          <p className="text-center text-xs text-gray-400 pt-1">
            Insurance ING Broker SRL - răspundem în maxim 15 minute - <a href="tel:+37369526003" className="hover:underline">+(373) 69 526 003</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default B2BLeadForm;
