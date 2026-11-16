import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  HardHat,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Building2,
  Clock,
  FileText,
  Users
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Language } from '../translations';

interface CarEarPageProps {
  lang: Language;
}

const B2BLeadForm: React.FC<{ title: string }> = ({ title }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    projectValue: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = encodeURIComponent(
      `Cerere asigurare CAR/EAR\nCompanie: ${form.company}\nContact: ${form.name}\nTelefon: ${form.phone}\nEmail: ${form.email}\nValoare proiect: ${form.projectValue} MDL\nDetalii: ${form.message}`
    );
    window.open(`https://wa.me/37369526003?text=${whatsappText}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Mesajul este pregătit în WhatsApp</h3>
        <p className="text-green-700">Verifică și trimite mesajul deschis în WhatsApp. Primirea și următorul pas se confirmă separat, în timpul programului de lucru.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">Completează datele de bază despre proiect. Mesajul se deschide în WhatsApp pentru verificare și trimitere; termenul de analiză se confirmă ulterior.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Compania *
            </label>
            <input
              type="text"
              required
              value={form.company}
              onChange={e => setForm({ ...form, company: e.target.value })}
              placeholder="Numele companiei tale"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Persoana de contact *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Nume și prenume"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Telefon *
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              placeholder="+373 69 000 000"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="email@compania.md"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Valoarea contractului de construcție (MDL)
          </label>
          <input
            type="text"
            value={form.projectValue}
            onChange={e => setForm({ ...form, projectValue: e.target.value })}
            placeholder="ex: 5.000.000"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Detalii proiect
          </label>
          <textarea
            rows={3}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="Tipul lucrărilor, durata, locația șantierului..."
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-4 uppercase text-xs tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-3 group"
        >
          Solicit analiza șantierului meu
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-xs text-gray-400 text-center">
          Sau sună direct: <a href="tel:+37369526003" className="text-red-600 font-bold">+373 69 526 003</a>
        </p>
      </form>
    </div>
  );
};

export const CarEarPage: React.FC<CarEarPageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const risks = [
    {
      icon: <Shield size={20} className="text-red-600" />,
      title: 'Incendiu, trăsnet, explozie',
      desc: 'Distrugeri la lucrările în execuție, materiale și echipamente pe șantier'
    },
    {
      icon: <Shield size={20} className="text-red-600" />,
      title: 'Inundații, furtuni, cutremur',
      desc: 'Fenomene atmosferice extreme, alunecări de teren, daune din apă'
    },
    {
      icon: <Shield size={20} className="text-red-600" />,
      title: 'Avarii accidentale în execuție',
      desc: 'Daune la structuri, fundații sau lucrări cauzate de erori operaționale'
    },
    {
      icon: <Shield size={20} className="text-red-600" />,
      title: 'Furt și vandalism',
      desc: 'Pierderi de materiale de construcție, utilaje și echipamente de șantier'
    },
    {
      icon: <Shield size={20} className="text-red-600" />,
      title: 'Răspundere față de terți',
      desc: 'Daune corporale sau materiale produse terților în zona șantierului'
    },
    {
      icon: <Shield size={20} className="text-red-600" />,
      title: 'Daune la echipamente de montaj',
      desc: 'Includerea utilajelor și echipamentelor de ridicare se confirmă separat'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Trimiți datele proiectului',
      desc: 'Prezintă valoarea și durata proiectului, locația și tipul lucrărilor. Confirmăm documentele suplimentare necesare pentru analiza riscului.',
      time: 'Datele de bază'
    },
    {
      num: '02',
      title: 'Primești oferte comparate',
      desc: 'Solicităm ofertele disponibile pentru proiect și comparăm prima, riscurile incluse, limitele, franșizele și excluderile.',
      time: 'După evaluarea riscului'
    },
    {
      num: '03',
      title: 'Verifici și accepți condițiile',
      desc: 'Înainte de începerea acoperirii, verifică emiterea, perioada și condițiile de plată. Cerințele finanțatorului se compară separat cu polița propusă.',
      time: 'După confirmarea asigurătorului'
    }
  ];

  const faqs = [
    {
      q: 'Este obligatorie asigurarea CAR/EAR în Moldova?',
      a: 'Nu deduce obligația de asigurare doar din faptul că proiectul primește finanțare bancară sau externă. Verifică cerințele aplicabile proiectului, contractul, caietul de sarcini și condițiile finanțatorului. Tipul de poliță, riscurile, limitele și persoanele asigurate trebuie confirmate pentru proiectul concret.'
    },
    {
      q: 'Cât timp durează să emiți o poliță CAR/EAR?',
      a: 'Termenul depinde de complexitatea proiectului, documentele complete și evaluarea asigurătorului. Pot fi necesare întrebări suplimentare sau o inspecție. Brokerul sprijină pregătirea informațiilor, dar nu garantează emiterea ori începerea acoperirii la un termen fix.'
    },
    {
      q: 'Ce documente sunt necesare pentru asigurarea CAR/EAR?',
      a: 'Pentru început, pregătește contractul sau devizul, descrierea și amplasarea lucrărilor, durata și valorile declarate. Asigurătorul poate solicita planuri, informații despre antreprenor, măsuri de protecție și lista utilajelor. Lista exactă se confirmă după analiza proiectului.'
    },
    {
      q: 'Putem asigura și subantreprenorii în aceeași poliță?',
      a: 'Participarea subantreprenorilor trebuie declarată și verificată în oferta asigurătorului. Cere confirmarea persoanelor asigurate, a activităților și a eventualelor clauze privind răspunderea între participanți. Nu presupune că toți sunt incluși automat sau că o poliță comună este întotdeauna mai ieftină.'
    },
    {
      q: 'Ce se întâmplă dacă durata proiectului se extinde?',
      a: 'Anunță modificarea calendarului înainte de expirarea poliței și solicită analiza prelungirii. Asigurătorul confirmă dacă acceptă schimbarea, perioada, condițiile și eventuala primă suplimentară. Prelungirea nu este automată, iar costul nu se presupune strict proporțional.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <SEO
        title="Asigurare CAR/EAR pentru construcții în Moldova | ING Broker"
        description="Analiza asigurării CAR/EAR pentru construcții și montaj în Moldova. Vezi documentele, riscurile, limitele și excluderile de verificat înainte de ofertare."
        lang={lang}
      />

      {/* Buton înapoi */}
      <div className="fixed top-32 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className={`flex items-center gap-4 px-6 py-3 backdrop-blur-md border text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl group ${
            isScrolled
              ? 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'
              : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
          }`}
        >
          <div className="p-1 group-hover:-translate-x-1 transition-transform text-red-600">
            <ArrowLeft size={16} strokeWidth={3} />
          </div>
          <span>Acasă</span>
        </motion.button>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=90"
            alt="Șantier construcții Moldova"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/72" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-white px-4 py-1.5 text-xs font-bold mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Insurance ING Broker SRL - Construcții și montaj
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-6">
              Asigurare CAR/EAR <br />
              <span className="text-red-500">Construcții în Moldova</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8 max-w-2xl">
              Analizăm riscurile șantierului - materiale, lucrări în execuție și răspundere
              față de terți. Acoperirea depinde de condițiile acceptate de asigurător.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">Lucrări</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">De descris</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Riscuri</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">De evaluat</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Limite</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">De verificat</div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('formular')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-red-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-all shadow-xl flex items-center gap-3 group"
            >
              Solicit analiza șantierului meu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ce este CAR/EAR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
                Informații esențiale
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-6">
                Ce este asigurarea CAR/EAR și când o analizezi?
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  <strong>CAR</strong> (Contractors All Risks - riscuri de construcții) și
                  <strong> EAR</strong> (Erection All Risks - riscuri de montaj) sunt două
                  tipuri de asigurare pentru proiecte de construcție sau montaj. Riscurile incluse,
                  perioada, limitele și excluderile se verifică în condițiile poliței.
                </p>
                <p>
                  CAR se aplică proiectelor de construcție civilă și industrială - clădiri rezidențiale,
                  comerciale, infrastructură rutieră, poduri, hale industriale. EAR se aplică instalării
                  și montajului de echipamente - instalații industriale, panouri fotovoltaice, turbine eoliene,
                  conducte, rețele electrice.
                </p>
                <p>
                  Pentru proiecte finanțate de bănci sau donatori, verifică cerințele de asigurare
                  din contractele concrete, inclusiv documentele de tip FIDIC utilizate.
                  Finanțarea nu dovedește singură că orice poliță CAR/EAR îndeplinește aceste cerințe.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                    <Building2 size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cine are nevoie de CAR/EAR?</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Antreprenori și firme de construcții
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Developeri imobiliari și investitori
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Firme de instalații industriale și montaj
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Companii cu proiecte finanțate de bănci sau donatori
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                    <FileText size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Ce verifici în poliță?</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Lucrările și materialele incluse în obiectul asigurării
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Includerea separată a echipamentelor și utilajelor
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Secțiunea și limita pentru răspunderea față de terți
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Valorile declarate și limitele acceptate de asigurător
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 text-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Cerințele finanțatorului</h3>
                    <p className="text-white/80 text-sm">
                      Compară cerințele contractului de finanțare cu oferta de asigurare.
                      Confirmă separat limitele, perioadele și persoanele care trebuie incluse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Riscuri acoperite */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Riscuri de analizat
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Ce riscuri verifici pentru asigurarea CAR/EAR?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Denumirea "All Risks" nu înseamnă acoperire pentru orice situație.
              Evenimentele de mai jos se verifică în ofertă, împreună cu obiectul, perioada, limitele și excluderile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {risks.map((risk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 border border-gray-100 hover:border-red-200 transition-colors group"
              >
                <div className="w-10 h-10 bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  {risk.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{risk.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{risk.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-100 border border-gray-200 p-6">
            <h3 className="font-bold text-gray-700 mb-3">Excluderi și limitări de verificat</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-500">
              <div>- Tratamentul uzurii normale și al deteriorării treptate</div>
              <div>- Defectele de proiectare, materiale sau fabricație și daunele rezultate</div>
              <div>- Pierderile din întârziere: o eventuală extensie DSU se verifică separat</div>
              <div>- Excluderile privind faptele intenționate și persoanele vizate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cum funcționează */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Proces simplu
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Cum obții asigurarea CAR/EAR prin ING Broker?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Brokerul ajută la pregătirea informațiilor și compararea ofertelor. Asigurătorul confirmă acceptarea riscului și condițiile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-wider">
                  {step.time}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-4">
                    <ArrowRight size={20} className="text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prețuri orientative */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-4 block">
                Cum se stabilește prima
              </span>
              <h2 className="text-4xl font-bold text-white tracking-tighter mb-6">
                Cât costă asigurarea CAR/EAR în Moldova?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Prima de asigurare este suma plătită pentru poliță. Asigurătorul o stabilește
                după <strong className="text-white">evaluarea proiectului</strong> și
                condițiile solicitate. Nu există un tarif confirmat pentru proiectul tău pe această pagină.
              </p>

              <div className="bg-red-600 p-6 mb-8">
                <h3 className="font-bold text-white mb-4">Date pentru calculul ofertei</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Valoarea proiectului:</span>
                    <span className="font-bold">Conform documentelor</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Prima de asigurare:</span>
                    <span className="font-bold">Confirmată în ofertă</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-3">
                  Franșiza este partea din daună suportată de asigurat, potrivit contractului. Verific-o împreună cu prima, limitele și excluderile.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-white">Factorii care influențează prețul:</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Tipul lucrărilor</strong> - construcție civilă vs. montaj industrial</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Durata proiectului</strong> - luni vs. ani de execuție</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Locația geografică</strong> - zone cu risc seismic sau inundabil</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong className="text-white">Experiența antreprenorului</strong> - istoricul de daune și portofoliu</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">
                Elemente de comparat în ofertă
              </h3>
              {[
                { name: 'Obiectul asigurării', specialty: 'Lucrări, materiale și valori declarate' },
                { name: 'Perioada de asigurare', specialty: 'Execuție, testare și alte etape acceptate' },
                { name: 'Limite și franșize', specialty: 'Sume și participarea proprie la daună' },
                { name: 'Excluderi', specialty: 'Situații și costuri neacoperite' },
                { name: 'Cerințe contractuale', specialty: 'Condițiile beneficiarului și finanțatorului' },
                { name: 'Procedura de daună', specialty: 'Notificare, documente și obligațiile părților' }
              ].map((ins, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/10">
                  <div>
                    <div className="font-bold text-white text-sm">{ins.name}</div>
                    <div className="text-xs text-gray-400">{ins.specialty}</div>
                  </div>
                  <CheckCircle2 size={18} className="text-red-500 flex-shrink-0" />
                </div>
              ))}
              <p className="text-xs text-gray-500 pt-2">
                ING Broker este intermediarul. Acceptarea riscului și despăgubirea aparțin asigurătorului, potrivit contractului.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Întrebări frecvente
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter">
              Ai întrebări despre CAR/EAR?
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className={`text-lg font-bold tracking-tight transition-colors ${activeFaq === i ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'}`}>
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 border flex items-center justify-center flex-shrink-0 ml-4 transition-all"
                    style={activeFaq === i
                      ? { background: '#dc2626', borderColor: '#dc2626', color: '#ffffff', transform: 'rotate(180deg)' }
                      : { borderColor: '#e5e7eb', color: '#374151' }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>
                {activeFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pb-6 text-gray-500 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formular */}
      <section id="formular" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Solicită ofertă
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Începe analiza proiectului tău
            </h2>
            <p className="text-gray-500">
              Completează datele proiectului. Verificăm informațiile și confirmăm pașii necesari; trimiterea formularului nu confirmă emiterea sau acoperirea.
            </p>
          </div>
          <B2BLeadForm title="Solicit analiza asigurării pentru proiectul meu" />
        </div>
      </section>

      {/* Footer info */}
      <footer className="py-10 bg-gray-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-white/40 text-xs">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-red-500" />
              str. Pan Halippa 9, Chișinău, R. Moldova
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-red-500" />
              andrei.moraru@ingbroker.md
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-red-500" />
              +373 69 526 003
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
