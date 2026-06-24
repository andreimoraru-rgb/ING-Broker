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
        <h3 className="text-xl font-bold text-green-800 mb-2">Cererea a fost trimisă!</h3>
        <p className="text-green-700">Un consultant ING Broker te va contacta în maximum 15 minute.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">Completează datele de mai jos - durează 2 minute. Răspuns în 15 minute.</p>
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
          Calculez costul pentru șantierul meu
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
      desc: 'Acoperire pentru utilaje de construcție și echipamente de ridicare (opțional)'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Trimiți datele proiectului',
      desc: 'Valoarea contractului, durata execuției, locația șantierului, tipul lucrărilor - un email sau mesaj WhatsApp. Durează 5 minute.',
      time: '~ 5 minute'
    },
    {
      num: '02',
      title: 'Primești oferte comparate',
      desc: 'Comparăm ofertele de la Acord Grup, Asterra Grup, Moldasig VIG și ceilalți asigurători autorizați CNPF. Selectăm tariful optim pentru proiectul tău.',
      time: '~ 24 ore'
    },
    {
      num: '03',
      title: 'Semnezi polița și lucrezi liniștit',
      desc: 'Emiterea se face digital sau la sediul nostru. Polița CAR/EAR este activă și conformă cerințelor băncilor finanțatoare.',
      time: '~ 1-2 zile'
    }
  ];

  const faqs = [
    {
      q: 'Este obligatorie asigurarea CAR/EAR în Moldova?',
      a: 'Nu este obligatorie prin lege pentru toate proiectele, dar este cerută obligatoriu de băncile finanțatoare și de donatorii internaționali (BEI, BERD). Pentru proiectele publice mari, caietul de sarcini impune adesea această asigurare. Practic, orice proiect cu finanțare externă sau bancară nu poate fi demarat fără polița CAR/EAR.'
    },
    {
      q: 'Cât timp durează să emiți o poliță CAR/EAR?',
      a: 'Pentru proiecte standard (până la 5 mil. MDL), polița se poate emite în 24-48 ore lucrătoare. Pentru proiecte mari sau complexe, procesul de underwriting poate dura 3-5 zile lucrătoare. ING Broker gestionează întregul proces cu asigurătorii, tu primești polița gata emisă.'
    },
    {
      q: 'Ce documente sunt necesare pentru asigurarea CAR/EAR?',
      a: 'Documentele de bază sunt: contractul de antrepriză sau devizul de lucrări, planul general al șantierului și localizarea geografică, CV-ul antreprenorului și lista utilajelor principale. ING Broker îți trimite lista completă și te ghidează prin întregul proces de documentare.'
    },
    {
      q: 'Putem asigura și subantreprenorii în aceeași poliță?',
      a: 'Da, polița CAR/EAR poate acoperi toți subantreprenorii implicați în proiect, printr-o clauză de extindere a acoperirii. Aceasta simplifică administrarea și reduce costurile față de polițe separate pentru fiecare subcontractant.'
    },
    {
      q: 'Ce se întâmplă dacă durata proiectului se extinde?',
      a: 'Polița CAR/EAR poate fi prelungită cu o primă suplimentară proporțională cu perioada adăugată. Este important să notifici asigurătorul - prin ING Broker - înainte de expirarea perioadei asigurate inițiale. Gestionăm noi această comunicare pentru tine.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <SEO
        title="Asigurare CAR/EAR Construcții Moldova | ING Broker - Broker Licențiat CNPF"
        description="Asigurare CAR/EAR pentru șantiere și proiecte de construcții în Moldova. Broker licențiat CNPF. Ofertă comparativă de la 6 asigurători autorizați. Răspuns în 15 minute."
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
              Broker licențiat CNPF - 6 asigurători parteneri
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-6">
              Asigurare CAR/EAR <br />
              <span className="text-red-500">Construcții în Moldova</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8 max-w-2xl">
              Protecție completă pentru șantierul tău - de la materiale și lucrări în execuție
              la răspunderea față de terți. Ofertă comparativă în 15 minute.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">15 min</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Răspuns ofertă</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">6</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Asigurători CNPF</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Emitere poliță</div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('formular')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-red-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-all shadow-xl flex items-center gap-3 group"
            >
              Calculez costul pentru șantierul meu
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
                Ce este asigurarea CAR/EAR și de ce o ai nevoie?
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  <strong>CAR</strong> (Contractor's All Risk - Toate Riscurile Antreprenorului) și
                  <strong> EAR</strong> (Erection All Risk - Toate Riscurile de Montaj) sunt două
                  tipuri de asigurare specifice industriei construcțiilor. Acoperă în mod cuprinzător
                  daunele care pot apărea pe durata execuției unui proiect de construcție sau montaj.
                </p>
                <p>
                  CAR se aplică proiectelor de construcție civilă și industrială - clădiri rezidențiale,
                  comerciale, infrastructură rutieră, poduri, hale industriale. EAR se aplică instalării
                  și montajului de echipamente - instalații industriale, panouri fotovoltaice, turbine eoliene,
                  conducte, rețele electrice.
                </p>
                <p>
                  Dacă proiectul tău este finanțat de BEI, BERD, fonduri europene sau printr-un credit
                  bancar, polița CAR/EAR nu este opțională - este o condiție obligatorie pentru debursarea
                  finanțării. Contractele de tip FIDIC impun explicit această asigurare.
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
                    <h3 className="font-bold text-gray-900 mb-2">Ce acoperă polița?</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Lucrările în execuție și materialele pe șantier
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Echipamentele și utilajele de construcție
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Răspunderea față de terți în perimetrul șantierului
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 mt-2 flex-shrink-0" />
                        Valori asigurate: 500.000 MDL - zeci de milioane EUR
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
                    <h3 className="font-bold text-white mb-2">Cerință obligatorie BEI / BERD</h3>
                    <p className="text-white/80 text-sm">
                      Toate proiectele finanțate prin credite internaționale sau bancare conțin
                      clauze obligatorii de asigurare CAR/EAR. Fără poliță, finanțarea nu se debursează.
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
              Acoperire completă
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Ce riscuri acoperă asigurarea CAR/EAR?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Polița CAR/EAR este o asigurare "All Risks" - acoperă toate riscurile,
              cu excepția celor explicit excluse în condițiile de asigurare.
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
            <h3 className="font-bold text-gray-700 mb-3">Excluderi principale (ce NU acoperă)</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-500">
              <div>- Uzura normală și deteriorarea treptată</div>
              <div>- Defecte de fabricație ascunse (fără opțiunea EAR)</div>
              <div>- Pierderi financiare din întârzierea lucrărilor (se acoperă cu extensia DSU)</div>
              <div>- Daune cauzate intenționat de beneficiar</div>
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
              Fără birocrație inutilă. Tu te ocupi de proiect, noi gestionăm asigurarea.
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
                Tarife orientative
              </span>
              <h2 className="text-4xl font-bold text-white tracking-tighter mb-6">
                Cât costă asigurarea CAR/EAR în Moldova?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Prima de asigurare CAR/EAR se calculează ca procent din valoarea contractului
                de construcție. Procentul variază între <strong className="text-white">0,1% - 0,8%</strong> în
                funcție de mai mulți factori.
              </p>

              <div className="bg-red-600 p-6 mb-8">
                <h3 className="font-bold text-white mb-4">Exemplu orientativ</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Valoare contract construcție:</span>
                    <span className="font-bold">2.000.000 MDL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Prima estimată (0,1% - 0,8%):</span>
                    <span className="font-bold">2.000 - 16.000 MDL/an</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-3">
                  * Prețuri ORIENTATIVE. Oferta exactă se calculează după analiza proiectului.
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
                Asigurători parteneri autorizați CNPF
              </h3>
              {[
                { name: 'Acord Grup SA', specialty: 'Proiecte industriale mari' },
                { name: 'Asterra Grup SA', specialty: 'Construcții rezidențiale și comerciale' },
                { name: 'Moldasig VIG SA', specialty: 'Infrastructură și utilități' },
                { name: 'Moldcargo SA', specialty: 'Construcții speciale' },
                { name: 'Donaris VIG SA', specialty: 'Proiecte cu finanțare internațională' },
                { name: 'Grawe Carat SA', specialty: 'Montaj echipamente industriale' }
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
                ING Broker compară simultan ofertele tuturor celor 6 asigurători autorizați CNPF.
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
              Obții oferta pentru proiectul tău
            </h2>
            <p className="text-gray-500">
              Completează formularul - te contactăm în 15 minute cu ofertele comparative.
            </p>
          </div>
          <B2BLeadForm title="Calculez costul asigurării pentru proiectul meu" />
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
