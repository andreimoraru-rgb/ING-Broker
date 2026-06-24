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

interface CorporatePageProps {
  lang: Language;
}

const B2BLeadForm: React.FC<{ title: string }> = ({ title }) => {
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
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Cererea a fost trimisă!</h3>
        <p className="text-green-700">Un consultant ING Broker te va contacta în maximum 15 minute pentru a programa auditul.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">
        Completează datele companiei - te contactăm în 15 minute pentru a programa auditul gratuit.
      </p>
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
              placeholder="Numele companiei"
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
            Număr de angajați / vehicule în flotă
          </label>
          <input
            type="text"
            value={form.employees}
            onChange={e => setForm({ ...form, employees: e.target.value })}
            placeholder="ex: 45 angajați, 12 vehicule"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Ce asigurări aveți deja sau ce vă interesează?
          </label>
          <textarea
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
          Vreau audit gratuit al asigurărilor companiei mele
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
      desc: 'Program centralizat pentru flote de la 3 vehicule în sus. Toate tipurile de vehicule - autoturisme, camioane, utilaje. Un singur manager dedicat, polițe sincronizate ca dată de expirare, economii de 15-25% față de polițe individuale.'
    },
    {
      icon: <Building2 size={28} className="text-red-600" />,
      tag: 'Bunuri și proprietate',
      title: 'Incendiu, calamități, furt',
      desc: 'Asigurarea clădirilor, stocurilor, utilajelor și echipamentelor companiei împotriva incendiului, inundațiilor, cutremurului, furtului și altor riscuri. Evaluare corectă a valorilor asigurate, despăgubire rapidă.'
    },
    {
      icon: <Shield size={28} className="text-red-600" />,
      tag: 'Răspundere civilă',
      title: 'Față de terți și angajați',
      desc: 'Răspunderea civilă generală față de terți - accidente de muncă, daune produse clienților sau partenerilor. Obligatorie pentru companiile din construcții, producție, servicii cu risc ridicat.'
    },
    {
      icon: <HeartPulse size={28} className="text-red-600" />,
      tag: 'Sănătate angajați',
      title: 'Beneficiu atractiv pentru echipă',
      desc: 'Asigurarea medicală colectivă pentru angajați - spitalizare, consultații, stomatologie. Beneficiu apreciat care îmbunătățește retenția și atragerea talentelor. Deductibil fiscal pentru companie.'
    }
  ];

  const advantages = [
    {
      num: '01',
      title: 'Economii reale de 15-30%',
      desc: 'Volumul de polițe administrate ne permite să negociem tarife preferențiale cu toți cei 6 asigurători autorizați CNPF. Economiile sunt concrete, nu estimate.'
    },
    {
      num: '02',
      title: 'Un singur punct de contact',
      desc: 'Un manager dedicat pentru toate polițele companiei - flotă, bunuri, răspundere, sănătate. Nu vânezi niciun asigurător când ai o problemă.'
    },
    {
      num: '03',
      title: 'Reprezentare la daune',
      desc: 'La un incident, brokerul reprezintă interesele companiei tale față de asigurător - de la notificare până la plata despăgubirii. Nu ești singur în negocierea cu asigurătorul.'
    },
    {
      num: '04',
      title: 'Analiză anuală de risc gratuită',
      desc: 'Identificăm anual lacunele de acoperire, polițele cu prețuri nejustificate și riscurile neacoperite. Raport scris cu recomandări concrete.'
    },
    {
      num: '05',
      title: 'Raportare transparentă lunară',
      desc: 'Situația exactă a tuturor polițelor active, daunele în curs, costul per poliță și economiile obținute față de piață. Date clare, nu vorbe.'
    },
    {
      num: '06',
      title: 'Flexibilitate și scalabilitate',
      desc: 'Adaugi un vehicul, deschizi un depozit nou, angajezi oameni noi - extinderea acoperirii se face în ore, nu în zile. Brokerul se adaptează la ritmul tău de creștere.'
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
      a: 'Auditorul nostru analizează toate polițele existente ale companiei, identifică dubluri de acoperire, lacune de protecție și oportunități de economisire. La final primești un raport scris cu situația actuală, riscurile neacoperite și recomandările concrete. Serviciul este 100% gratuit și fără obligații de a schimba sau cumpăra ceva.'
    },
    {
      q: 'Lucrați cu firme mici sau doar cu corporații mari?',
      a: 'Lucrăm cu companii de la 5 angajați în sus. Chiar și o flotă de 3-5 mașini poate beneficia de tarife de broker față de tarifele individuale de ghișeu. Un depozit de 500 mp și 8 angajați merită același nivel de protecție ca o corporație - noi facem soluția potrivită bugetului real.'
    },
    {
      q: 'Cât timp durează restructurarea portofoliului de asigurări al companiei?',
      a: 'Auditul inițial durează 2-3 zile lucrătoare. Negocierea ofertelor cu asigurătorii: 3-5 zile. Emiterea noilor polițe se programează să coincidă cu expirarea polițelor existente, deci nu plătești niciodată dublu. De la prima discuție până la portofoliu complet restructurat: 7-14 zile lucrătoare.'
    },
    {
      q: 'Oferiți asistență în caz de daună?',
      a: 'Da, asistența la daune este inclusă gratuit în relația de brokeraj. Reprezentăm compania ta în față asigurătorului de la notificarea daunei până la plata despăgubirii. Știm cum să formulăm dosarul de daună corect și complet pentru a evita întârzierile sau refuzurile nejustificate.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <SEO
        title="Asigurări Corporative Moldova | Pachete Complete pentru Companii | ING Broker"
        description="Asigurări corporative în Moldova - flotă auto, bunuri, răspundere civilă, sănătate angajați. Broker CNPF cu 6 asigurători parteneri. Audit gratuit al portofoliului tău."
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
              Broker licențiat CNPF - Soluții complete B2B
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-6">
              Asigurări Corporative <br />
              <span className="text-red-500">în Moldova</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8 max-w-2xl">
              De la flotă auto la bunuri și răspundere civilă - un singur broker
              gestionează toate asigurările companiei tale. Audit gratuit al portofoliului existent.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">6</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Asigurători CNPF</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15-30%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Economii medii</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Clienți B2B activi</div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('formular')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-red-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-all shadow-xl flex items-center gap-3 group"
            >
              Vreau audit gratuit al asigurărilor companiei mele
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
              Portofoliu complet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-4">
              Soluții complete de asigurare corporativă
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Un singur broker gestionează toate tipurile de asigurări ale companiei.
              Tu te concentrezi pe business, noi pe protecție.
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
                De ce 87% din companiile mari lucrează cu broker?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-10">
                Companiile care gestionează singure relația cu asigurătorii pierd timp,
                plătesc mai mult și sunt singure când apare o daună. Brokerul rezolvă
                toate cele trei probleme simultan.
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
                    { label: 'Prețul poliței', direct: 'Tarif de ghișeu', broker: 'Tarif negociat (-15-30%)' },
                    { label: 'Timp alocat', direct: '10+ ore/an cu asigurătorii', broker: '0 ore - gestionăm noi' },
                    { label: 'La daună', direct: 'Singur față de asigurător', broker: 'Broker te reprezintă' },
                    { label: 'Analiza riscurilor', direct: 'Nu există', broker: 'Audit anual gratuit' },
                    { label: 'Nr. interlocutori', direct: '1 per asigurător (mai mulți)', broker: '1 manager dedicat' }
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
                    Prima discuție și colectare documente - 1 zi
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-400">2</div>
                    Analiză portofoliu și identificare lacune - 2-3 zile
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-400">3</div>
                    Raport scris cu recomandări concrete - livrat
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
              Sectoare deservite
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Companiile care ne contactează cel mai des
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Fiecare sector are nevoi specifice de asigurare. Cunoaștem particularitățile
              fiecărui domeniu și construim soluțiile potrivite.
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
                  <span className="font-semibold text-gray-700">Asigurări tipice:</span> {client.needs}
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
              Solicită audit gratuit
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">
              Primul pas - fără nicio obligație
            </h2>
            <p className="text-gray-500">
              Auditul este complet gratuit. Nu ești obligat să cumperi sau să schimbi nimic.
              Primești un raport onest cu situația reală a asigurărilor companiei tale.
            </p>
          </div>
          <B2BLeadForm title="Vreau audit gratuit al asigurărilor companiei mele" />
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
