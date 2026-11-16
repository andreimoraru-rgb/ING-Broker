import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Car,
  Building2,
  Users,
  HeartPulse,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  BarChart3,
  Clock,
  FileCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Language } from '../translations';
import { trackEvent } from '../utils/analytics';

interface CorporatePageProps {
  lang: Language;
}

export const B2BLeadForm: React.FC<{ title: string; source?: string }> = ({ title, source = 'corporate_page' }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    employees: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = encodeURIComponent(
      `Cerere audit asigurări corporative\nCompanie: ${form.company}\nContact: ${form.name}\nTelefon: ${form.phone}\nEmail: ${form.email}\nNr. angajați: ${form.employees}\nDetalii: ${form.message}`
    );
    window.open(`https://wa.me/37369526003?text=${whatsappText}`, '_blank');
    trackEvent('audit_submit', {
      source,
      page_path: window.location.pathname,
      lead_type: 'b2b',
      contact_method: 'whatsapp'
    });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Mesajul este pregătit în WhatsApp</h3>
        <p className="text-green-700">Trimite mesajul deschis în WhatsApp. Un consultant îți va confirma primirea și următorul pas în timpul programului de lucru.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">
        Completează datele companiei. Datele vor fi pregătite într-un mesaj WhatsApp pe care îl verifici înainte de trimitere.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="audit-company" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Compania *
            </label>
            <input id="audit-company" name="company"
              type="text"
              required
              value={form.company}
              onChange={e => setForm({ ...form, company: e.target.value })}
              placeholder="Numele companiei"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="audit-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Persoana de contact *
            </label>
            <input id="audit-name" name="name"
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
            <label htmlFor="audit-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Telefon *
            </label>
            <input id="audit-phone" name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              placeholder="+373 69 000 000"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="audit-email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Email
            </label>
            <input id="audit-email" name="email"
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="email@compania.md"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="audit-employees" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Număr de angajați / vehicule în flotă
          </label>
          <input id="audit-employees" name="employees"
            type="text"
            value={form.employees}
            onChange={e => setForm({ ...form, employees: e.target.value })}
            placeholder="ex: 45 angajați, 12 vehicule"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="audit-message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Ce asigurări aveți deja sau ce vă interesează?
          </label>
          <textarea id="audit-message" name="message"
            rows={3}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="ex: Avem RCA pentru 8 mașini, vrem și CASCO + asigurare bunuri depozit..."
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-4 uppercase text-xs tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-3 group"
        >
          Pregătește solicitarea în WhatsApp
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-xs text-gray-400 text-center">
          Sau sună direct: <a href="tel:+37369526003" className="text-red-600 font-bold">+373 69 526 003</a>
        </p>
      </form>
    </div>
  );
};

export const CorporatePage: React.FC<CorporatePageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Car size={28} className="text-red-600" />,
      tag: 'Flotă auto',
      title: 'RCA, CASCO, Carte Verde',
      desc: 'Program pentru flote de minimum 5 vehicule. Analizăm tipurile de vehicule, utilizarea și expirarea polițelor. În funcție de evaluarea asigurătorului și de condițiile comparate, pot exista economii de până la 25%, fără un rezultat garantat.'
    },
    {
      icon: <Building2 size={28} className="text-red-600" />,
      tag: 'Bunuri și proprietate',
      title: 'Incendiu, calamități, furt',
      desc: 'Analizăm clădirile, stocurile, utilajele și echipamentele companiei. Verificăm ce riscuri pot fi incluse, valorile declarate, franșizele și excluderile. Asigurătorul decide acceptarea riscului și soluționează daunele conform contractului.'
    },
    {
      icon: <Shield size={28} className="text-red-600" />,
      tag: 'Răspundere civilă',
      title: 'Față de terți și angajați',
      desc: 'Verificăm separat răspunderea față de clienți, parteneri și angajați. Un singur contract nu include automat toate aceste situații. Cerințele aplicabile activității și condițiile fiecărei polițe se analizează individual.'
    },
    {
      icon: <HeartPulse size={28} className="text-red-600" />,
      tag: 'Sănătate angajați',
      title: 'Beneficiu atractiv pentru echipă',
      desc: 'Pentru un program medical colectiv, verificăm serviciile solicitate de angajați, furnizorii acceptați, limitele și excluderile. Consultațiile, spitalizarea sau stomatologia nu se presupun incluse. Tratamentul fiscal se confirmă separat pentru companie.'
    }
  ];

  const advantages = [
    {
      num: '01',
      title: 'Compararea ofertelor și condițiilor',
      desc: 'Comparăm ofertele disponibile pentru riscul descris. Prețul nu se analizează separat de limite, franșize și excluderi; o primă mai mică poate însemna condiții diferite.'
    },
    {
      num: '02',
      title: 'Un singur punct de contact',
      desc: 'Stabilim persoana de contact și modul de administrare a polițelor companiei. Poți centraliza întrebările despre flotă, bunuri, răspundere și programele pentru angajați.'
    },
    {
      num: '03',
      title: 'Reprezentare la daune',
      desc: 'Brokerul te poate ajuta la comunicarea cu asigurătorul și la pregătirea documentelor de daună, în limitele mandatului convenit. Decizia și plata despăgubirii aparțin asigurătorului, potrivit contractului.'
    },
    {
      num: '04',
      title: 'Revizuirea portofoliului',
      desc: 'Verificăm polițele existente, posibilele suprapuneri și riscurile pentru care nu ai confirmarea acoperirii. Conținutul analizei, eventualul cost și frecvența se stabilesc înainte de începere.'
    },
    {
      num: '05',
      title: 'Evidența polițelor',
      desc: 'Stabilim ce informații se centralizează: polițe, valori, prime, expirări și stadiul dosarelor de daună. Formatul și frecvența raportării se convin cu compania.'
    },
    {
      num: '06',
      title: 'Flexibilitate și scalabilitate',
      desc: 'Dacă adaugi un vehicul, un depozit sau angajați, anunță schimbarea înainte să te bazezi pe acoperire. Extinderea depinde de analiza și confirmarea asigurătorului; nu este automată.'
    }
  ];

  const clientTypes = [
    {
      icon: <Building2 size={22} className="text-red-600" />,
      title: 'Firme de construcții',
      needs: 'CAR/EAR + flotă utilaje + răspundere terți + garanții contractuale'
    },
    {
      icon: <Car size={22} className="text-red-600" />,
      title: 'Companii de transport și logistică',
      needs: 'CMR + flotă TIR + cargo + răspundere călători'
    },
    {
      icon: <Users size={22} className="text-red-600" />,
      title: 'Firme IT și servicii',
      needs: 'Răspundere profesională (PI) + cyber + sănătate angajați'
    },
    {
      icon: <BarChart3 size={22} className="text-red-600" />,
      title: 'Importatori și exportatori',
      needs: 'Cargo + bunuri în tranzit + răspundere față de parteneri'
    },
    {
      icon: <FileCheck size={22} className="text-red-600" />,
      title: 'Instituții financiare nebancare',
      needs: 'D&O + răspundere profesională + bunuri + cyber'
    },
    {
      icon: <Building2 size={22} className="text-red-600" />,
      title: 'Developeri și investitori imobiliari',
      needs: 'CAR/EAR + proprietate + răspundere + garanții locatari'
    }
  ];

  const faqs = [
    {
      q: 'Ce înseamnă audit de asigurări pentru o companie?',
      a: 'În acest context, audit înseamnă o analiză a polițelor și a informațiilor despre riscuri, nu un audit legal sau financiar certificat. Verificăm posibilele suprapuneri, limitele și întrebările rămase deschise. Conținutul analizei, documentele necesare și eventualul cost se confirmă înainte de începere. Discuția inițială nu încheie o poliță.'
    },
    {
      q: 'Lucrați cu firme mici sau doar cu corporații mari?',
      a: 'Poți solicita o analiză pentru o companie mică sau mare. Pentru programul de flotă discutat aici, punctul de pornire este minimum 5 vehicule. Pentru celelalte riscuri contează activitatea, valorile, numărul de angajați și condițiile asigurătorului, nu un prag general de personal.'
    },
    {
      q: 'Cât timp durează restructurarea portofoliului de asigurări al companiei?',
      a: 'Termenul depinde de numărul polițelor, documentele disponibile, complexitatea riscurilor și răspunsul asigurătorilor. Stabilim pașii după primirea informațiilor. Datele de expirare se verifică înainte de schimbări; nu anula o poliță existentă înainte de confirmarea celei noi și a condițiilor de încetare.'
    },
    {
      q: 'Oferiți asistență în caz de daună?',
      a: 'Poți solicita ajutor pentru notificare și documentele cerute de asigurător. Întinderea asistenței și eventualele costuri se confirmă în relația de brokeraj. Respectă termenele poliței și păstrează dovezile. Brokerul nu poate garanta acceptarea dosarului, termenul de soluționare sau suma despăgubirii.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <SEO
        title="Asigurări corporative în Moldova | Analiza riscurilor B2B | ING Broker"
        description="Analiza asigurărilor corporative în Moldova: flotă, bunuri, răspundere și programe pentru angajați. Vezi ce informații și condiții trebuie verificate."
        lang={lang}
      />

      {/* Buton înapoi */}
      <div className="absolute top-20 left-6 z-30">
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90"
            alt="Birou corporativ Moldova"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent" />
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
              Insurance ING Broker SRL - Analiză B2B
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-6">
              Asigurări Corporative <br />
              <span className="text-red-500">în Moldova</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8 max-w-2xl">
              De la flotă auto la bunuri și răspundere civilă - un singur broker
              te ajută să verifici polițele companiei. Solicită analiza portofoliului existent.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">Riscuri</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">De analizat</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Condiții</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">De comparat</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Polițe</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">De revizuit</div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('formular')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-red-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-all shadow-xl flex items-center gap-3 group"
            >
              Solicit analiza asigurărilor companiei mele
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Servicii */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Portofoliu de asigurări
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-4">
              Riscurile companiei și polițele relevante
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Analiza pornește de la activitatea și documentele companiei.
              Acoperirea, limitele și excluderile se confirmă în fiecare poliță.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-100 p-8 hover:border-red-200 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-2 block">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* De ce broker */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-4 block">
                Avantajul brokerului
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
                Cum te poate ajuta un broker de asigurare?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-10">
                Brokerul te ajută să organizezi informațiile despre riscuri și să compari
                ofertele disponibile. Serviciile convenite și condițiile polițelor se verifică
                înainte de alegere, fără promisiunea unui preț sau rezultat garantat.
              </p>

              <div className="space-y-8">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-6 group"
                  >
                    <div className="text-4xl font-bold text-red-600/40 font-serif italic flex-shrink-0 group-hover:text-red-500 transition-colors">
                      {adv.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{adv.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:pt-16 space-y-6">
              <div className="bg-red-600 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Comparativ rapid</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Prețul poliței', direct: 'Oferta asigurătorului', broker: 'Compararea ofertelor disponibile' },
                    { label: 'Documente', direct: 'Cerințele asigurătorului', broker: 'Sprijin pentru centralizare' },
                    { label: 'La daună', direct: 'Asigurătorul soluționează', broker: 'Sprijin potrivit mandatului' },
                    { label: 'Analiza riscurilor', direct: 'Evaluarea asigurătorului', broker: 'Revizuirea nevoilor declarate' },
                    { label: 'Contact', direct: 'Contactul asigurătorului', broker: 'Contactul de brokeraj convenit' }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4 text-sm border-b border-white/10 pb-4">
                      <div className="text-white/60 font-medium">{row.label}</div>
                      <div className="text-white/40 line-through text-xs">{row.direct}</div>
                      <div className="text-white font-bold text-xs">{row.broker}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-red-500" />
                  <h3 className="font-bold text-white">Cât durează auditul?</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-400">1</div>
                    Discuție inițială și stabilirea documentelor necesare
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-400">2</div>
                    Analiza polițelor și întrebărilor privind acoperirea
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-400">3</div>
                    Concluzii și următori pași, în formatul convenit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipuri de clienți */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Sectoare de analizat
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Ce riscuri pot avea companiile din aceste sectoare?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Fiecare sector are nevoi specifice. Verificăm activitatea declarată,
              cerințele contractuale și disponibilitatea condițiilor relevante.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-100 p-6 hover:border-red-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    {client.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{client.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-700">Teme de verificat:</span> {client.needs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Întrebări frecvente
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter">
              Întrebări despre asigurările corporative
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full py-6 px-6 flex justify-between items-center text-left group"
                >
                  <span className={`text-lg font-bold tracking-tight transition-colors ${activeFaq === i ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'}`}>
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 border flex items-center justify-center flex-shrink-0 ml-4 transition-all"
                    style={activeFaq === i
                      ? { background: '#dc2626', borderColor: '#dc2626', color: '#ffffff', transform: 'rotate(180deg)' }
                      : { borderColor: '#d1d5db', color: '#374151' }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>
                {activeFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pb-6 px-6 text-gray-500 leading-relaxed"
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
      <section id="formular" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Solicită analiza portofoliului
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Primul pas - descrie activitatea companiei
            </h2>
            <p className="text-gray-500">
              Trimite informațiile de bază despre activitate și polițele existente.
              Confirmăm conținutul analizei, documentele necesare și eventualele costuri înainte de începere.
            </p>
          </div>
          <B2BLeadForm title="Solicit analiza asigurărilor companiei mele" />
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
