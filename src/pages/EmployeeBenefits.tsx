import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import {
  HeartPulse, Shield, Plane, Briefcase,
  Search, FileText, Scale, Headphones,
  ChevronDown, ArrowRight,
  CheckCircle, XCircle, TrendingUp, Clock, Users, Coins,
  Phone, Mail,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ebContent } from '../data/eb-content';

const C = {
  dark: '#080D18',
  darkMid: '#0F1520',
  darkCard: '#141D2E',
  darkCardHover: '#1A2540',
  red: '#E31E24',
  redDark: '#B91C1C',
  redGlow: 'rgba(227,30,36,0.18)',
  white: '#FFFFFF',
  offWhite: '#F8F9FB',
  lightGray: '#F1F3F7',
  textDark: '#111827',
  textMid: '#374151',
  textMuted: '#9CA3AF',
  green: '#10B981',
  border: '#E5E7EB',
  borderDark: 'rgba(255,255,255,0.08)',
};

function formatMDL(val: number) {
  return val.toLocaleString('ro-MD', { maximumFractionDigits: 0 }).replace(/,/g, '.') + ' MDL';
}
function calcFiscal(value: number) {
  const bonusCost = Math.round(value * 1.29);
  const amfCost = Math.min(value, 17400);
  return { bonusCost, amfCost, savings: bonusCost - amfCost };
}
function useAnimatedCounter(target: number, inView: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setVal(Math.round(v)) });
    return ctrl.stop;
  }, [inView, target]);
  return val;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ─── FLOATING PARTICLES ─── */
function Particles({ count = 18 }: { count?: number }) {
  const items = Array.from({ length: count }, (_, i) => ({
    id: i, x: (i * 17 + 5) % 100, y: (i * 23 + 10) % 100,
    size: (i % 3) + 1.5, dur: 7 + (i % 5) * 1.5, delay: (i % 4) * 1.2,
    isRed: i % 5 === 0,
  }));
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {items.map((p) => (
        <motion.div key={p.id}
          style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: '50%', background: p.isRed ? C.red : 'rgba(255,255,255,0.22)' }}
          animate={{ y: [0, -28, 0], opacity: [0, 0.75, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* ─── 3D MEDICAL SHIELD ILLUSTRATION ─── */
function ShieldVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: '-15%', background: `radial-gradient(ellipse, ${C.red}20 0%, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }}
      />

      <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 32px 64px rgba(227,30,36,0.12))' }}>
        {/* Hex grid background */}
        {[0,1,2,3,4,5].map((i) => (
          <motion.polygon key={i}
            points="30,0 60,17 60,52 30,69 0,52 0,17"
            transform={`translate(${38 + (i % 3) * 110}, ${i < 3 ? 8 : 78})`}
            fill="none" stroke="rgba(227,30,36,0.09)" strokeWidth="1"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}

        {/* Ground shadow */}
        <ellipse cx="212" cy="362" rx="128" ry="12" fill="rgba(227,30,36,0.1)" />

        {/* Shield outer */}
        <motion.path
          d="M210 20 L362 80 L362 212 Q362 308 210 358 Q58 308 58 212 L58 80 Z"
          fill={C.darkCard} stroke={C.red} strokeWidth="2.5"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Shield inner highlight */}
        <path d="M210 40 L342 92 L342 210 Q342 292 210 336 Q78 292 78 210 L78 92 Z"
          fill="rgba(255,255,255,0.022)" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
        {/* Top highlight (3D depth) */}
        <path d="M210 20 L362 80 L342 92 L78 92 L58 80 Z" fill="rgba(255,255,255,0.04)" />

        {/* Medical cross */}
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 14 }}
          style={{ transformOrigin: '210px 192px' }}>
          <rect x="188" y="138" width="44" height="108" rx="11" fill={C.red} />
          <rect x="156" y="170" width="108" height="44" rx="11" fill={C.red} />
          {/* Shine */}
          <rect x="188" y="138" width="14" height="108" rx="11" fill="rgba(255,255,255,0.16)" />
          <rect x="156" y="170" width="108" height="14" rx="11" fill="rgba(255,255,255,0.16)" />
        </motion.g>

        {/* Orbiting dots */}
        <motion.circle r="5.5" fill={C.red} animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '210px 192px' }} transform="translate(357, 92)" />
        <motion.circle r="3.5" fill={C.green} animate={{ rotate: -360 }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '210px 192px' }} transform="translate(63, 292)" />
        <motion.circle r="2.5" fill="rgba(255,255,255,0.45)" animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '210px 192px' }} transform="translate(395, 198)" />

        {/* Floating labels */}
        <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.2, repeat: Infinity }}>
          <rect x="8" y="108" width="38" height="20" rx="10" fill="rgba(227,30,36,0.18)" stroke={C.red} strokeWidth="1" />
          <text x="27" y="122" textAnchor="middle" fontSize="9" fill={C.red} fontWeight="700">AMF</text>
        </motion.g>
        <motion.g animate={{ y: [5, -5, 5] }} transition={{ duration: 3.8, repeat: Infinity }}>
          <rect x="363" y="148" width="52" height="20" rx="10" fill="rgba(16,185,129,0.14)" stroke={C.green} strokeWidth="1" />
          <text x="389" y="162" textAnchor="middle" fontSize="9" fill={C.green} fontWeight="700">Art. 24</text>
        </motion.g>
        <motion.g animate={{ y: [-3, 3, -3] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}>
          <rect x="6" y="230" width="44" height="20" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <text x="28" y="244" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontWeight="700">CNPF</text>
        </motion.g>
        <motion.g animate={{ y: [4, -4, 4] }} transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}>
          <rect x="360" y="258" width="54" height="20" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <text x="387" y="272" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.4)" fontWeight="600">RENOMIA</text>
        </motion.g>
      </svg>

      {/* Glassmorphism stat badges */}
      {[
        { label: 'Economie fiscală', value: '+29%', color: C.green, pos: { top: '12%', left: '-5%' }, dir: { x: -24 } },
        { label: 'Implementare', value: '3 zile', color: C.white, pos: { top: '40%', right: '-10%' }, dir: { x: 24 } },
        { label: 'Limita deductibilă', value: '17.400 MDL', color: C.red, pos: { bottom: '8%', right: '4%' }, dir: { y: 24 } },
      ].map(({ label, value, color, pos, dir }) => (
        <motion.div key={label}
          initial={{ opacity: 0, ...dir }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          style={{
            position: 'absolute', ...pos,
            background: 'rgba(8,13,24,0.7)', backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '10px 16px',
          }}>
          <div style={{ fontSize: 9, color: C.textMuted, marginBottom: 3 }}>{label}</div>
          <div style={{ fontSize: 17, fontWeight: 800, color }}>{value}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── FISCAL CALCULATOR ─── */
function FiscalCounter() {
  const [value, setValue] = useState(10000);
  const { bonusCost, amfCost, savings } = calcFiscal(value);

  return (
    <div style={{ background: C.darkCard, border: `1px solid ${C.borderDark}`, borderRadius: 20, padding: '32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${C.red}, #FF6B6B)` }} />
      <p style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
        Calculator fiscal - Art. 24 alin. 20
      </p>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 22 }}>Valoare pachet per angajat/an</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>5.000 MDL</span>
        <span style={{ fontSize: 20, fontWeight: 800, color: C.white }}>{formatMDL(value)}</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>25.000 MDL</span>
      </div>
      <input type="range" min={5000} max={25000} step={500} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ width: '100%', marginBottom: 24, accentColor: C.red, cursor: 'pointer' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {[
          { label: 'Bonus + CNAS', val: formatMDL(bonusCost), color: '#F87171', note: 'cost angajator' },
          { label: 'Asigurare AMF', val: formatMDL(amfCost), color: C.white, note: value <= 17400 ? '0% CNAS' : 'depășit plafonul' },
          { label: 'Economie anuală', val: formatMDL(savings), color: C.green, note: 'per angajat' },
        ].map(({ label, val, color, note }) => (
          <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '14px 12px' }}>
            <div style={{ fontSize: 9, color: C.textMuted, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
            <motion.div key={val} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              style={{ fontSize: 15, fontWeight: 800, color }}>
              {val}
            </motion.div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', marginTop: 4 }}>{note}</div>
          </div>
        ))}
      </div>
      {value > 17400 && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ marginTop: 14, fontSize: 11, color: '#FBBF24', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: 8, padding: '8px 12px' }}>
          Plafonul de 17.400 MDL/an este depășit - diferența de {formatMDL(value - 17400)} intră la CNAS.
        </motion.p>
      )}
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  return (
    <section style={{ background: C.dark, minHeight: '100vh', position: 'relative', overflow: 'hidden', paddingTop: 96, paddingBottom: 80 }}>
      <Particles count={22} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: `radial-gradient(circle, ${C.redGlow} 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', marginBottom: 64 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(227,30,36,0.1)', border: '1px solid rgba(227,30,36,0.28)', borderRadius: 6, padding: '5px 12px', marginBottom: 22 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.red }} />
              <span style={{ fontSize: 11, color: '#FCA5A5', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Art. 24 alin. 20 Cod Fiscal Moldova</span>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 800, color: C.white, lineHeight: 1.14, marginBottom: 20 }}>
              Beneficii medicale{' '}<span style={{ color: C.red }}>17.400 MDL/an</span>{' '}deductibile - per angajat
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 36, maxWidth: 500 }}>
              Înlocuiești bonusurile salariale cu asigurare medicală AMF. Angajatorul economisește 29% CNAS, angajatul primește protecție reală. Calcul instant, implementare în 3 zile.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
              <motion.button onClick={onScrollToForm} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{ background: C.red, color: C.white, border: 'none', padding: '15px 30px', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                Calculează economia acum <ArrowRight size={16} />
              </motion.button>
              <motion.a href="tel:+37369526003" whileHover={{ background: 'rgba(255,255,255,0.06)' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 22px', borderRadius: 10, fontSize: 15, color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', textDecoration: 'none' }}>
                <Phone size={15} /> +373 695 26 003
              </motion.a>
            </motion.div>
            <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {[
                { num: '6', label: 'asigurători parteneri CNPF' },
                { num: '3 zile', label: 'de la semnare la activare' },
                { num: '29%', label: 'economie vs. bonus salarial' },
              ].map(({ num, label }) => (
                <div key={label} style={{ borderLeft: `3px solid ${C.red}`, paddingLeft: 16 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: C.white }}>{num}</div>
                  <div style={{ fontSize: 11, color: C.textMuted, lineHeight: 1.4, marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
            <ShieldVisual />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }}>
          <FiscalCounter />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PAIN ─── */
function PainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const c1 = useAnimatedCounter(73, inView);
  const c2 = useAnimatedCounter(4, inView);

  const stats = [
    { icon: <TrendingUp size={22} />, num: `${c1}%`, label: 'din angajați preferă beneficii medicale față de bonusuri cash egale', color: C.red },
    { icon: <Clock size={22} />, num: `${c2}.2 zile`, label: 'pierdute per angajat pe an din cauza problemelor medicale nerezolvate', color: '#FBBF24' },
    { icon: <Users size={22} />, num: '2.8×', label: 'costul înlocuirii unui angajat față de retenția cu beneficii competitive', color: C.green },
    { icon: <Coins size={22} />, num: '0 MDL', label: 'economie fiscală pentru companiile fără program Art. 24 alin. 20', color: C.red },
  ];

  return (
    <section ref={ref} style={{ background: C.white, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Problema actuală</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 36, fontWeight: 800, color: C.textDark, marginBottom: 48 }}>Ce pierzi fără program de beneficii</motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {stats.map(({ icon, num, label, color }) => (
              <motion.div key={label} variants={fadeUp}
                whileHover={{ y: -8, boxShadow: `0 24px 48px rgba(0,0,0,0.09)` }}
                style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 18, padding: 30, borderTop: `3px solid ${color}`, transition: 'box-shadow 0.3s' }}>
                <div style={{ color, marginBottom: 16, background: `${color}15`, display: 'inline-flex', borderRadius: 10, padding: 10 }}>{icon}</div>
                <div style={{ fontSize: 34, fontWeight: 900, color: C.textDark, marginBottom: 10 }}>{num}</div>
                <div style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.55 }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SOLUTION ─── */
const ICON_MAP: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse size={24} />, Shield: <Shield size={24} />,
  Plane: <Plane size={24} />, Briefcase: <Briefcase size={24} />,
  Search: <Search size={24} />, FileText: <FileText size={24} />,
  Scale: <Scale size={24} />, Headphones: <Headphones size={24} />,
};

function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const pillars: Array<{ icon: string; title: string; description: string }> = ebContent.solution?.pillars ?? [];

  return (
    <section ref={ref} style={{ background: C.darkMid, padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <Particles count={12} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, background: `radial-gradient(circle, ${C.redGlow} 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Soluție ING Broker</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 36, fontWeight: 800, color: C.white, marginBottom: 48 }}>Ce include programul nostru</motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {pillars.map((p, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -10, borderColor: C.red, background: C.darkCardHover }}
                style={{ background: C.darkCard, border: `1px solid ${C.borderDark}`, borderRadius: 18, padding: 28, transition: 'all 0.3s ease' }}>
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }}
                  style={{ color: C.red, background: 'rgba(227,30,36,0.1)', display: 'inline-flex', borderRadius: 12, padding: 12, marginBottom: 18 }}>
                  {ICON_MAP[p.icon] ?? <Shield size={24} />}
                </motion.div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.white, marginBottom: 10 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{p.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── COMPARISON ─── */
function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const rows = [
    { label: 'Acces la oferte multiple', direct: '1 asigurător', broker: '6 asigurători autorizați CNPF' },
    { label: 'Optimizare fiscală Art. 24', direct: 'Nu', broker: 'Da - inclusă în serviciu' },
    { label: 'Manager HR dedicat', direct: 'Nu', broker: 'Da - un specialist ING Broker' },
    { label: 'Flexibilitate pachete', direct: 'Standard fix', broker: 'Personalizat per companie' },
    { label: 'Suport daune', direct: 'Contact direct asigurător', broker: 'ING Broker intermediar activ' },
  ];

  return (
    <section ref={ref} style={{ background: C.lightGray, padding: '96px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Comparație</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 36, fontWeight: 800, color: C.textDark, marginBottom: 48 }}>ING Broker vs. direct la asigurător</motion.h2>
          <motion.div variants={fadeUp} style={{ background: C.white, borderRadius: 18, overflow: 'hidden', border: `1px solid ${C.border}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.border}` }}>
                  <th style={{ padding: '18px 24px', textAlign: 'left', fontSize: 11, color: C.textMuted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Criteriu</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: 11, color: C.textMuted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Direct</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(227,30,36,0.04)', color: C.red }}>Prin ING Broker</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, direct, broker }, i) => (
                  <tr key={i} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                    <td style={{ padding: '16px 24px', fontSize: 14, color: C.textMid, fontWeight: 500 }}>{label}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: C.textMuted }}>
                        <XCircle size={14} color="#D1D5DB" /> {direct}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'center', background: 'rgba(16,185,129,0.03)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: C.green, fontWeight: 600 }}>
                        <CheckCircle size={14} color={C.green} /> {broker}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── TIERS ─── */
function TiersSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const tiers: Array<{ name: string; priceRange: string; features: string[]; featured?: boolean }> = ebContent.tiers?.columns ?? [];

  return (
    <section ref={ref} style={{ background: C.white, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Pachete disponibile</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 36, fontWeight: 800, color: C.textDark, marginBottom: 12 }}>Alege programul potrivit companiei tale</motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 16, color: C.textMuted, marginBottom: 52 }}>Toate pachetele sunt deductibile fiscal conform Art. 24 alin. 20 Cod Fiscal.</motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            {tiers.map((tier, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -12, boxShadow: tier.featured ? `0 32px 64px rgba(227,30,36,0.28)` : `0 32px 64px rgba(0,0,0,0.1)` }}
                style={{ border: tier.featured ? `2px solid ${C.red}` : `1px solid ${C.border}`, borderRadius: 22, padding: '38px 28px', position: 'relative', background: tier.featured ? C.dark : C.white, transition: 'all 0.3s ease' }}>
                {tier.featured && (
                  <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: C.red, color: C.white, fontSize: 10, fontWeight: 800, padding: '4px 18px', borderRadius: 20, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                    RECOMANDAT
                  </div>
                )}
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: tier.featured ? C.red : C.textMuted, marginBottom: 14 }}>{tier.name}</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: tier.featured ? C.white : C.textDark, marginBottom: 4 }}>{tier.priceRange}</div>
                <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 30 }}>MDL/an/angajat</div>
                <div style={{ borderTop: `1px solid ${tier.featured ? 'rgba(255,255,255,0.09)' : C.border}`, paddingTop: 26, marginBottom: 30 }}>
                  {(tier.features ?? []).map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 13 }}>
                      <CheckCircle size={14} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 13, color: tier.featured ? 'rgba(255,255,255,0.72)' : C.textMid, lineHeight: 1.45 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <motion.button onClick={onScrollToForm} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  style={{ width: '100%', padding: '13px', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', border: tier.featured ? 'none' : `1px solid ${C.red}`, background: tier.featured ? C.red : 'transparent', color: tier.featured ? C.white : C.red }}>
                  Solicită ofertă
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const steps: Array<{ title: string; description: string }> = ebContent.process?.steps ?? [];

  return (
    <section ref={ref} style={{ background: C.dark, padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <Particles count={10} />
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: `radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Cum funcționează</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 36, fontWeight: 800, color: C.white, marginBottom: 56 }}>5 pași - de la cerere la polițe active</motion.h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 27, top: 0, bottom: 0, width: 2, background: `linear-gradient(180deg, ${C.red} 0%, rgba(16,185,129,0.3) 100%)` }} />
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: 28, marginBottom: 38, alignItems: 'flex-start' }}>
                <motion.div whileHover={{ scale: 1.15, background: C.red }}
                  style={{ width: 56, height: 56, borderRadius: '50%', flexShrink: 0, background: i === 0 ? C.red : C.darkCard, border: `2px solid ${i === 0 ? C.red : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900, color: C.white, transition: 'all 0.3s', zIndex: 1 }}>
                  {i + 1}
                </motion.div>
                <div style={{ paddingTop: 12 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.white, marginBottom: 6 }}>{step.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65 }}>{step.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [open, setOpen] = useState<number | null>(null);
  const faqs: Array<{ question: string; answer: string }> = ebContent.faq?.items ?? [];

  return (
    <section ref={ref} style={{ background: C.lightGray, padding: '96px 24px' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Întrebări frecvente</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 36, fontWeight: 800, color: C.textDark, marginBottom: 48 }}>Tot ce trebuie să știi</motion.h2>
          {faqs.map((item, i) => (
            <motion.div key={i} variants={fadeUp}
              style={{ background: C.white, borderRadius: 14, marginBottom: 12, border: `1px solid ${open === i ? C.red : C.border}`, overflow: 'hidden', transition: 'border-color 0.2s' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', gap: 16 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: C.textDark }}>{item.question}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.22 }}
                  style={{ flexShrink: 0, color: open === i ? C.red : C.textMuted }}>
                  <ChevronDown size={18} />
                </motion.span>
              </button>
              <motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
                <div style={{ padding: '0 24px 22px', fontSize: 14, color: C.textMuted, lineHeight: 1.72 }}>{item.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FORM + FOOTER ─── */
function FormSection({ formRef }: { formRef: React.RefObject<HTMLDivElement | null> }) {
  const [fields, setFields] = useState({ company: '', employees: '', name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = { width: '100%', padding: '13px 16px', background: C.darkCard, border: `1px solid ${C.borderDark}`, borderRadius: 10, color: C.white, fontSize: 14, outline: 'none', boxSizing: 'border-box' };

  return (
    <section ref={formRef} style={{ background: C.dark, padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <Particles count={8} />
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, background: `radial-gradient(circle, ${C.redGlow} 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 11, color: C.red, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Contact</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: C.white, marginBottom: 12 }}>Solicită oferta personalizată</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.42)', marginBottom: 42 }}>Răspuns în maxim 4 ore lucrătoare. Fără obligații, fără spam.</p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              style={{ background: 'rgba(16,185,129,0.09)', border: '1px solid rgba(16,185,129,0.28)', borderRadius: 18, padding: 48, textAlign: 'center' }}>
              <CheckCircle size={52} color={C.green} style={{ margin: '0 auto 18px' }} />
              <div style={{ fontSize: 22, fontWeight: 700, color: C.white, marginBottom: 10 }}>Cerere trimisă cu succes</div>
              <div style={{ fontSize: 14, color: C.textMuted }}>Un specialist ING Broker te va contacta în maxim 4 ore lucrătoare.</div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {[
                  { key: 'company', label: 'Compania (denumire)', placeholder: 'Ex: ABC SRL' },
                  { key: 'employees', label: 'Număr angajați', placeholder: 'Ex: 25' },
                  { key: 'name', label: 'Nume și prenume', placeholder: 'Ex: Ion Popescu' },
                  { key: 'phone', label: 'Telefon', placeholder: '+373 69X XXX XXX' },
                ].map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 6, display: 'block' }}>{label}</label>
                    <input type="text" placeholder={placeholder} required
                      value={fields[key as keyof typeof fields]}
                      onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
                      style={inputStyle} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 6, display: 'block' }}>Email</label>
                <input type="email" placeholder="email@companie.md" required value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 6, display: 'block' }}>Mențiuni (opțional)</label>
                <textarea placeholder="Ex: Dorim pachete diferențiate pe niveluri de management..." rows={4}
                  value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} disabled={loading}
                style={{ width: '100%', padding: '16px', background: C.red, color: C.white, border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.8 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                {loading ? 'Se trimite...' : (<>Trimite cererea <ArrowRight size={18} /></>)}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      <div style={{ maxWidth: 1180, margin: '80px auto 0', padding: '40px 24px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{ width: 4, height: 28, background: C.red, borderRadius: 2 }} />
              <span style={{ fontSize: 16, fontWeight: 700, color: C.white }}>Insurance ING Broker SRL</span>
            </div>
            <div style={{ fontSize: 12, color: C.textMuted }}>str. Pan Halippa, 9, mun. Chișinău, MD-2009</div>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <a href="tel:+37369526003" style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.textMuted, fontSize: 13, textDecoration: 'none' }}>
              <Phone size={13} /> +373 695 26 003
            </a>
            <a href="mailto:ingbroker@ingbroker.md" style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.textMuted, fontSize: 13, textDecoration: 'none' }}>
              <Mail size={13} /> ingbroker@ingbroker.md
            </a>
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)' }}>© 2026 Insurance ING Broker SRL - Licențiat CNPF</div>
        </div>
      </div>
    </section>
  );
}

/* ─── SCHEMA ─── */
function EBSchema() {
  const faqItems: Array<{ question: string; answer: string }> = ebContent.faq?.items ?? [];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Employee Benefits - Asigurare medicală AMF pentru angajați',
        description: 'Program de beneficii medicale deductibile fiscal conform Art. 24 alin. 20 Cod Fiscal Moldova',
        provider: { '@type': 'InsuranceAgency', name: 'Insurance ING Broker SRL', telephone: '+37369526003', address: { '@type': 'PostalAddress', streetAddress: 'str. Pan Halippa, 9', addressLocality: 'Chișinău', postalCode: 'MD-2009', addressCountry: 'MD' } },
        areaServed: { '@type': 'Country', name: 'Moldova' },
      }) }} />
    </>
  );
}

/* ─── EXPORT PRINCIPAL ─── */
export function EmployeeBenefits() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <SEO
        title={ebContent.meta?.title ?? 'Employee Benefits - Asigurare medicală pentru angajați - ING Broker'}
        description={ebContent.meta?.description ?? 'Program de beneficii medicale deductibile fiscal. Art. 24 alin. 20 Cod Fiscal Moldova - 17.400 MDL/an/angajat. Calculează economia acum.'}
        canonicalUrl="https://ingbroker.md/employee-benefits"
      />
      <EBSchema />
      <HeroSection onScrollToForm={scrollToForm} />
      <PainSection />
      <SolutionSection />
      <ComparisonSection />
      <TiersSection onScrollToForm={scrollToForm} />
      <ProcessSection />
      <FAQSection />
      <FormSection formRef={formRef} />
    </>
  );
}
