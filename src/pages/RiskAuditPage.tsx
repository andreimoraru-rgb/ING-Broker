import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, Building2, Users, Layers, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { Language } from '../translations';
import {
  INDUSTRIES,
  SIZES,
  ACTIVITIES,
  buildProgram,
  Coverage,
} from '../data/riskAudit';
import { submitLead, pushDataLayer } from '../utils/leads';

const SITE = 'https://www.ingbroker.md';
const PATH = '/evaluare-risc';

// --- SEO & Schema (Service / FAQPage / BreadcrumbList) ---
const SEO_TITLE = 'Evaluare rapidă de risc corporativ - ING Broker Moldova';
const SEO_DESC =
  'Instrument gratuit pentru companii: alege industria, mărimea și activitățile și primești un program de asigurare recomandat, cu acoperirile potrivite afacerii tale.';

const FAQS = [
  {
    q: 'Cât durează evaluarea de risc?',
    a: 'Sub un minut. Alegi industria, mărimea companiei și principalele activități, iar instrumentul îți arată acoperirile relevante pentru afacerea ta.',
  },
  {
    q: 'Instrumentul îmi arată prețul asigurării?',
    a: 'Nu. Evaluarea recomandă tipurile de acoperire potrivite (programul de asigurare). Prețul se stabilește individual, după analiza brokerului, în oferta personalizată.',
  },
  {
    q: 'Recomandarea este o ofertă fermă?',
    a: 'Nu. Este o orientare educativă. Condițiile contractuale ale asigurătorului primează asupra oricărei recomandări. Pentru condiții exacte, cere o ofertă personalizată.',
  },
  {
    q: 'Ce se întâmplă după ce cer o ofertă?',
    a: 'Un consultant ING Broker analizează expunerile companiei și revine cu un program comparativ de la asigurătorii autorizați CNPF, adaptat nevoilor tale.',
  },
];

function buildSchemas() {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Evaluare de risc corporativ',
    serviceType: 'Consultanță în asigurări pentru companii',
    provider: {
      '@type': 'InsuranceAgency',
      name: 'Insurance ING Broker SRL',
      telephone: '+37369526003',
      email: 'ingbroker@ingbroker.md',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'str. Pan Halippa 9',
        addressLocality: 'Chișinău',
        postalCode: 'MD-2009',
        addressCountry: 'MD',
      },
    },
    areaServed: { '@type': 'Country', name: 'Republica Moldova' },
    url: `${SITE}${PATH}`,
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Business', item: `${SITE}/business` },
      { '@type': 'ListItem', position: 3, name: 'Evaluare de risc corporativ', item: `${SITE}${PATH}` },
    ],
  };

  return { service, faq, breadcrumb };
}

// --- UI subcomponente ---
const StepHeader = ({ index, total, title, subtitle }: { index: number; total: number; title: string; subtitle: string }) => (
  <div className="mb-10">
    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
      Pasul {index} din {total}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tighter mt-3">{title}</h2>
    <p className="text-gray-500 font-light mt-3 max-w-2xl">{subtitle}</p>
  </div>
);

interface OptionCardProps {
  active: boolean;
  onClick: () => void;
  title: string;
  hint?: string;
  icon?: React.ReactNode;
}

const OptionCard: React.FC<OptionCardProps> = ({ active, onClick, title, hint, icon }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-left p-6 border transition-all duration-300 flex items-start gap-4 group ${
      active
        ? 'border-primary bg-primary/5 shadow-sm'
        : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
    }`}
  >
    {icon && (
      <span className={`mt-0.5 transition-colors ${active ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
        {icon}
      </span>
    )}
    <span>
      <span className={`block font-bold tracking-tight ${active ? 'text-primary' : 'text-secondary'}`}>{title}</span>
      {hint && <span className="block text-xs text-gray-400 mt-1">{hint}</span>}
    </span>
  </button>
);

interface RiskAuditPageProps {
  lang: Language;
}

export const RiskAuditPage: React.FC<RiskAuditPageProps> = ({ lang }) => {
  const [step, setStep] = useState(0); // 0..2 wizard, 3 = rezultat
  const [industryId, setIndustryId] = useState<string>('');
  const [sizeId, setSizeId] = useState<string>('');
  const [activityIds, setActivityIds] = useState<string[]>([]);
  const [startedTracked, setStartedTracked] = useState(false);

  const { service, faq, breadcrumb } = useMemo(buildSchemas, []);

  const program: Coverage[] = useMemo(
    () => (step === 3 ? buildProgram({ industryId, sizeId, activityIds }) : []),
    [step, industryId, sizeId, activityIds]
  );

  const trackStart = () => {
    if (!startedTracked) {
      pushDataLayer({ event: 'tool_start', tool: 'risk_audit' });
      setStartedTracked(true);
    }
  };

  const toggleActivity = (id: string) => {
    trackStart();
    setActivityIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const goResult = () => {
    const industryLabel = INDUSTRIES.find((i) => i.id === industryId)?.label;
    pushDataLayer({
      event: 'tool_complete',
      tool: 'risk_audit',
      industry: industryId,
      size: sizeId,
      activities: activityIds,
      industry_label: industryLabel,
    });
    setStep(3);
  };

  const reset = () => {
    setStep(0);
    setIndustryId('');
    setSizeId('');
    setActivityIds([]);
  };

  return (
    <div className="bg-white">
      <SEO title={SEO_TITLE} description={SEO_DESC} lang={lang} schema={service} />
      <SchemaMarkup schemas={[faq, breadcrumb]} />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Instrument B2B</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
            Evaluare rapidă de <span className="text-primary italic font-serif">risc corporativ</span>
          </h1>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            Răspunde la 3 întrebări despre compania ta și vezi programul de asigurare recomandat -
            acoperirile potrivite activității tale. Fără date personale, fără prețuri, sub un minut.
          </p>
        </div>
      </section>

      {/* Wizard */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* progress */}
          <div className="flex gap-2 mb-14">
            {[0, 1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 transition-colors duration-500 ${s <= step ? 'bg-primary' : 'bg-gray-200'}`}
              />
            ))}
          </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
            {/* Step 0: Industrie */}
            {step === 0 && (
              <motion.div key="s0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <StepHeader
                  index={1}
                  total={3}
                  title="În ce domeniu activează compania?"
                  subtitle="Alege industria cea mai apropiată de activitatea principală."
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {INDUSTRIES.map((i) => (
                    <OptionCard
                      key={i.id}
                      active={industryId === i.id}
                      onClick={() => {
                        trackStart();
                        setIndustryId(i.id);
                      }}
                      title={i.label}
                      icon={<Building2 size={20} />}
                    />
                  ))}
                </div>
                <div className="flex justify-end mt-12">
                  <button
                    type="button"
                    disabled={!industryId}
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continuă <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 1: Mărime */}
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <StepHeader
                  index={2}
                  total={3}
                  title="Cât de mare este compania?"
                  subtitle="Dimensiunea influențează complexitatea programului recomandat."
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {SIZES.map((s) => (
                    <OptionCard
                      key={s.id}
                      active={sizeId === s.id}
                      onClick={() => setSizeId(s.id)}
                      title={s.label}
                      hint={s.hint}
                      icon={<Users size={20} />}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-12">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="inline-flex items-center gap-3 px-8 py-4 border border-gray-200 text-secondary font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:border-primary hover:text-primary"
                  >
                    <ArrowLeft size={16} /> Înapoi
                  </button>
                  <button
                    type="button"
                    disabled={!sizeId}
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continuă <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Activități */}
            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <StepHeader
                  index={3}
                  total={3}
                  title="Ce descrie cel mai bine activitatea ta?"
                  subtitle="Bifează tot ce se aplică. Fiecare expunere adaugă acoperiri relevante."
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  {ACTIVITIES.map((a) => (
                    <OptionCard
                      key={a.id}
                      active={activityIds.includes(a.id)}
                      onClick={() => toggleActivity(a.id)}
                      title={a.label}
                      icon={<Layers size={20} />}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-12">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-3 px-8 py-4 border border-gray-200 text-secondary font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:border-primary hover:text-primary"
                  >
                    <ArrowLeft size={16} /> Înapoi
                  </button>
                  <button
                    type="button"
                    onClick={goResult}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-primary-dark"
                  >
                    Vezi programul recomandat <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Rezultat + formular */}
            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="mb-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Program recomandat</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tighter mt-3">
                    Acoperirile potrivite companiei tale
                  </h2>
                  <p className="text-gray-500 font-light mt-3 max-w-2xl">
                    Pe baza răspunsurilor tale, acestea sunt tipurile de asigurare relevante. Explorează fiecare
                    acoperire sau cere o ofertă personalizată pentru condiții și prime exacte.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {program.map((c, idx) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-6 border border-gray-200 hover:border-primary/40 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <h3 className="text-lg font-bold text-secondary tracking-tight">{c.name}</h3>
                      </div>
                      <p className="text-sm text-gray-500 font-light leading-relaxed mb-4 pl-8">{c.desc}</p>
                      <div className="pl-8">
                        <Link
                          to={c.link}
                          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary group-hover:text-primary transition-colors"
                        >
                          Detalii acoperire <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Notă CNPF */}
                <div className="flex items-start gap-3 p-5 bg-gray-50 border-l-2 border-primary/40 mb-14">
                  <ShieldCheck size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Recomandarea are scop informativ și nu constituie o ofertă fermă. Condițiile contractuale ale
                    asigurătorului primează. Prețurile și limitele se stabilesc individual, în oferta personalizată.
                    Insurance ING Broker SRL este intermediar autorizat CNPF.
                  </p>
                </div>

                <QuoteForm
                  industryId={industryId}
                  sizeId={sizeId}
                  activityIds={activityIds}
                  program={program}
                  onReset={reset}
                />
              </motion.div>
            )}
            </motion.div>
        </div>
      </section>
    </div>
  );
};

// --- Formular „Cere ofertă personalizată" ---
const QuoteForm = ({
  industryId,
  sizeId,
  activityIds,
  program,
  onReset,
}: {
  industryId: string;
  sizeId: string;
  activityIds: string[];
  program: Coverage[];
  onReset: () => void;
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [heardFrom, setHeardFrom] = useState('');
  const [hp, setHp] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setStatus('sending');

    pushDataLayer({ event: 'quote_request', tool: 'risk_audit', industry: industryId, size: sizeId });

    const res = await submitLead({
      source: 'risk-audit',
      name,
      company,
      phone,
      email,
      heardFrom,
      hp,
      meta: {
        industry: industryId,
        size: sizeId,
        activities: activityIds,
        program: program.map((c) => c.id),
      },
    });

    setStatus(res.ok ? 'ok' : 'error');
  };

  if (status === 'ok') {
    return (
      <div className="p-10 border border-primary/30 bg-primary/5 text-center">
        <CheckCircle2 size={40} className="text-primary mx-auto mb-5" />
        <h3 className="text-2xl font-bold text-secondary mb-3">Cererea ta a fost înregistrată</h3>
        <p className="text-gray-500 font-light max-w-md mx-auto mb-6">
          Un consultant ING Broker îți va pregăti un program comparativ de la asigurătorii autorizați CNPF și te va
          contacta în cel mai scurt timp.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
        >
          Reia evaluarea
        </button>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 p-8 md:p-10">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-10 h-[1px] bg-primary" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Pasul următor</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-secondary tracking-tighter mb-3">Cere ofertă personalizată</h3>
      <p className="text-gray-500 font-light mb-8 max-w-xl">
        Lasă datele de contact ale companiei. Analizăm expunerile și revenim cu un program adaptat - fără obligații.
      </p>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
        {/* honeypot - ascuns pentru utilizatori reali */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className="hidden"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nume *</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-200 px-4 py-3 focus:border-primary outline-none transition-colors"
            placeholder="Numele tău"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Companie</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border border-gray-200 px-4 py-3 focus:border-primary outline-none transition-colors"
            placeholder="Denumirea companiei"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Telefon *</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-200 px-4 py-3 focus:border-primary outline-none transition-colors"
            placeholder="+373 ..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 px-4 py-3 focus:border-primary outline-none transition-colors"
            placeholder="email@companie.md"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cum ai aflat despre noi?</label>
          <input
            value={heardFrom}
            onChange={(e) => setHeardFrom(e.target.value)}
            className="border border-gray-200 px-4 py-3 focus:border-primary outline-none transition-colors"
            placeholder="Google, recomandare, LinkedIn, ChatGPT..."
          />
        </div>

        <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-primary-dark disabled:opacity-50"
          >
            {status === 'sending' ? 'Se trimite...' : 'Trimite cererea'} <ArrowRight size={16} />
          </button>
          <a
            href="tel:+37369526003"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
          >
            <Phone size={16} /> sau sună direct: +373 695 26 003
          </a>
        </div>

        {status === 'error' && (
          <p className="sm:col-span-2 text-sm text-primary">
            Nu am putut trimite cererea automat. Te rugăm sună la +373 695 26 003 sau scrie la
            ingbroker@ingbroker.md - revenim rapid.
          </p>
        )}
      </form>
    </div>
  );
};
