import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  HeartPulse, Shield, Plane, Briefcase,
  Search, FileText, Scale, Headphones,
  ChevronDown, ChevronUp, ArrowRight,
  CheckCircle, XCircle,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ebContent } from '../data/eb-content';

const C = {
  navy: '#0D2B55',
  navyDark: '#081B38',
  navyMid: '#1A3A6B',
  red: '#E31E24',
  cream: '#F7F3EE',
  gold: '#C9A84C',
  green: '#1A7F4B',
  white: '#FFFFFF',
  grayText: '#6B7280',
};

function formatMDL(val: number): string {
  return val.toLocaleString('ro-MD', { maximumFractionDigits: 0 }).replace(/,/g, '.') + ' MDL';
}

function calcFiscal(value: number) {
  const bonusCost = Math.round(value * 1.29);
  const amfCost = Math.min(value, 17400);
  const savings = bonusCost - amfCost;
  return { bonusCost, amfCost, savings };
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <p style={{ color: light ? C.gold : C.navy, letterSpacing: '0.12em' }}
      className="text-xs font-bold uppercase tracking-widest mb-3">
      {text}
    </p>
  );
}

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse, Shield, Plane, Briefcase, Search, FileText, Scale, Headphones,
};

function FiscalCounter() {
  const c = ebContent.hero;
  const [value, setValue] = useState(10000);
  const { bonusCost, amfCost, savings } = calcFiscal(value);

  return (
    <div style={{ background: C.navyMid, borderRadius: 16 }} className="p-6 md:p-8">
      <p style={{ color: C.gold }} className="text-xs font-bold uppercase tracking-widest mb-4">{c.counterTitle}</p>
      <p style={{ color: C.cream }} className="text-sm mb-2">{c.counterLabel}</p>
      <div className="flex items-center gap-4 mb-1">
        <input type="range" min={5000} max={25000} step={500} value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="flex-1 h-2 cursor-pointer" style={{ accentColor: C.gold }} />
        <span style={{ color: C.gold, fontFamily: 'var(--font-mono)', fontWeight: 700 }}
          className="text-xl min-w-[130px] text-right">
          {formatMDL(value)}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10 }} className="p-4 text-center">
          <p style={{ color: 'rgba(247,243,238,0.6)' }} className="text-[10px] uppercase tracking-wide mb-1">{c.bonusLabel}</p>
          <p style={{ color: '#F87171', fontFamily: 'var(--font-mono)', fontWeight: 700 }} className="text-lg">{formatMDL(bonusCost)}</p>
          <p style={{ color: 'rgba(247,243,238,0.4)' }} className="text-[9px] mt-1 leading-tight">{c.bonusDisclaimer}</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10 }} className="p-4 text-center">
          <p style={{ color: 'rgba(247,243,238,0.6)' }} className="text-[10px] uppercase tracking-wide mb-1">{c.amfLabel}</p>
          <p style={{ color: '#4ADE80', fontFamily: 'var(--font-mono)', fontWeight: 700 }} className="text-lg">{formatMDL(amfCost)}</p>
          <p style={{ color: 'rgba(247,243,238,0.4)' }} className="text-[9px] mt-1 leading-tight">{c.amfDisclaimer}</p>
        </div>
        <div style={{ background: C.gold + '22', border: `1px solid ${C.gold}44`, borderRadius: 10 }} className="p-4 text-center">
          <p style={{ color: C.gold }} className="text-[10px] uppercase tracking-wide mb-1">{c.savingsLabel}</p>
          <p style={{ color: C.gold, fontFamily: 'var(--font-mono)', fontWeight: 700 }} className="text-lg">
            {savings > 0 ? formatMDL(savings) : '—'}
          </p>
          <p style={{ color: 'rgba(247,243,238,0.4)' }} className="text-[9px] mt-1 leading-tight">vs. bonus brut</p>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  const c = ebContent.hero;
  return (
    <section style={{ background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navy} 60%, #1A3A6B 100%)`, minHeight: '100vh' }}
      className="relative flex items-center overflow-hidden pt-24 pb-16">
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: C.red + '08', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: C.gold + '06', pointerEvents: 'none' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} light /></motion.div>
            <motion.h1 variants={fadeUp}
              style={{ fontFamily: 'var(--font-serif)', color: C.white, lineHeight: 1.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              {c.h1Line1}<br />
              <span style={{ color: C.gold }}>{c.h1Line2}</span><br />
              {c.h1Line3}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'rgba(247,243,238,0.8)' }}
              className="text-lg leading-relaxed mb-8 max-w-xl">{c.sub}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <button onClick={onScrollToForm}
                style={{ background: C.red, color: C.white, borderRadius: 8, fontWeight: 700, border: 'none', cursor: 'pointer' }}
                className="px-8 py-4 text-base hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
                {c.cta1} <ArrowRight size={18} />
              </button>
              <a href="#process"
                style={{ border: `1px solid rgba(247,243,238,0.3)`, color: C.cream, borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}
                className="px-8 py-4 text-base hover:border-opacity-60 transition-all flex items-center gap-2 justify-center">
                {c.cta2} <ChevronDown size={18} />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {c.trust.map((t) => (
                <span key={t}
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(247,243,238,0.7)', borderRadius: 6 }}
                  className="text-xs px-3 py-1.5 font-medium">{t}</span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <FiscalCounter />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  const c = ebContent.pain;
  return (
    <section style={{ background: C.cream }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }}
            className="text-4xl lg:text-5xl font-bold max-w-2xl mx-auto">{c.h2}</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-3 gap-6 mb-8">
          {c.cards.map((card) => (
            <motion.div key={card.stat} variants={fadeUp}
              style={{ background: C.white, borderRadius: 12, borderTop: `3px solid ${C.red}` }}
              className="p-8 shadow-sm">
              <p style={{ fontFamily: 'var(--font-mono)', color: C.red, fontWeight: 700 }} className="text-4xl mb-3">{card.stat}</p>
              <p style={{ color: C.navy }} className="text-base leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <p style={{ color: C.navy, background: C.navy + '0D', borderRadius: 8 }}
            className="text-base font-medium p-4 max-w-3xl mx-auto">{c.footer}</p>
          <p style={{ color: C.grayText }} className="text-xs mt-3">{c.source}</p>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const c = ebContent.solution;
  return (
    <section style={{ background: C.white }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }}
            className="text-4xl lg:text-5xl font-bold">{c.h2}</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.pillars.map((p) => {
            const Icon = ICON_MAP[p.iconName] || Shield;
            return (
              <motion.div key={p.title} variants={fadeUp}
                style={{ background: C.cream, borderRadius: 12, borderTop: `3px solid ${C.navy}` }}
                className="p-6">
                <div style={{ background: C.navy, borderRadius: 10, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mb-4">
                  <Icon size={22} color={C.white} />
                </div>
                {'badge' in p && p.badge && (
                  <span style={{ background: C.gold + '33', color: C.gold, borderRadius: 4 }}
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 mb-3 inline-block">{p.badge}</span>
                )}
                <p style={{ color: C.navy }} className="text-xs font-semibold uppercase tracking-wide mb-1">{p.subtitle}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }} className="text-xl font-bold mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} style={{ color: C.navy }} className="text-sm flex items-start gap-2">
                      <CheckCircle size={14} color={C.green} className="mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const c = ebContent.comparison;
  return (
    <section style={{ background: C.navyDark }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} light /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.white }}
            className="text-4xl lg:text-5xl font-bold">{c.h2}</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp}>
            <p style={{ color: C.green }} className="text-sm font-bold uppercase tracking-widest mb-4">{c.advantagesHeader}</p>
            <ul className="space-y-3">
              {c.advantages.map((a) => (
                <li key={a} style={{ color: C.cream }} className="flex items-start gap-3 text-sm leading-relaxed">
                  <CheckCircle size={16} color={C.green} className="mt-0.5 flex-shrink-0" /><span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p style={{ color: '#F87171' }} className="text-sm font-bold uppercase tracking-widest mb-4">{c.limitationsHeader}</p>
            <ul className="space-y-3">
              {c.limitations.map((l) => (
                <li key={l} style={{ color: 'rgba(247,243,238,0.75)' }} className="flex items-start gap-3 text-sm leading-relaxed">
                  <XCircle size={16} color="#F87171" className="mt-0.5 flex-shrink-0" /><span>{l}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          style={{ color: 'rgba(247,243,238,0.6)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
          className="text-sm text-center leading-relaxed mt-10 pt-8 max-w-3xl mx-auto">{c.footer}</motion.p>
      </div>
    </section>
  );
}

function AudienceSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  const c = ebContent.audience;
  return (
    <section style={{ background: C.cream }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }}
            className="text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">{c.h2}</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {c.personas.map((p) => (
            <motion.div key={p.role} variants={fadeUp}
              style={{ background: C.white, borderRadius: 16, overflow: 'hidden' }} className="shadow-sm">
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src={p.imageUrl} alt={p.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
              <div className="p-6">
                <p style={{ color: C.navy }} className="text-xs font-bold uppercase tracking-widest mb-1">{p.subtitle}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }} className="text-2xl font-bold mb-4">{p.role}</h3>
                <ul className="space-y-2">
                  {p.pain.map((item) => (
                    <li key={item} style={{ color: C.navy }} className="text-sm flex items-start gap-2">
                      <span style={{ color: C.red, flexShrink: 0, marginTop: 3 }}>&#9658;</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
          <button onClick={onScrollToForm}
            style={{ background: C.red, color: C.white, borderRadius: 8, fontWeight: 700, border: 'none', cursor: 'pointer' }}
            className="px-8 py-4 text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Solicita Oferta Personalizata <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ContextSection() {
  const c = ebContent.context;
  return (
    <section style={{ background: C.white }} className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }}
            className="text-4xl lg:text-5xl font-bold">{c.h2}</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
          {c.nodes.map((node, i) => (
            <motion.div key={node.date} variants={fadeUp} className="flex gap-6">
              <div style={{ flexShrink: 0, paddingTop: 4 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: C.white, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13 }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div style={{ background: C.cream, borderRadius: 12, flex: 1 }} className="p-6">
                <p style={{ color: C.gold, fontFamily: 'var(--font-mono)' }} className="text-xs font-bold uppercase tracking-widest mb-1">{node.date}</p>
                <h3 style={{ color: C.navyDark }} className="text-xl font-bold mb-2">{node.title}</h3>
                <p style={{ color: C.navy }} className="text-sm leading-relaxed">{node.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type TierKey = 'target' | 'budget' | 'amf' | 'stoma' | 'medicamente' | 'accidente' | 'viata' | 'travel';

function TiersSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  const c = ebContent.tiers;
  const rows: { label: string; key: TierKey }[] = [
    { label: 'Ideal pentru', key: 'target' },
    { label: 'Buget orientativ', key: 'budget' },
    { label: 'AMF', key: 'amf' },
    { label: 'Stomatologie', key: 'stoma' },
    { label: 'Medicamente', key: 'medicamente' },
    { label: 'Accidente', key: 'accidente' },
    { label: 'Viață', key: 'viata' },
    { label: 'Călătorie', key: 'travel' },
  ];
  return (
    <section id="tiers" style={{ background: C.cream }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-4">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }}
            className="text-4xl lg:text-5xl font-bold mb-4">{c.h2}</motion.h2>
          <motion.p variants={fadeUp} style={{ color: C.grayText }} className="text-sm max-w-2xl mx-auto">{c.note}</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="overflow-x-auto mt-10">
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: C.grayText }} className="text-xs font-semibold uppercase tracking-wide">Caracteristică</th>
                {c.tiers.map((t) => (
                  <th key={t.name}
                    style={{ padding: '12px 16px', textAlign: 'center', background: t.highlight ? C.navy : C.white, color: t.highlight ? C.white : C.navyDark, borderRadius: t.highlight ? '12px 12px 0 0' : undefined }}
                    className="text-sm font-bold">
                    {t.badge && (
                      <span style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: t.badgeGold ? C.gold : (t.highlight ? C.gold : C.red), marginBottom: 4, textTransform: 'uppercase' }}>
                        {t.badge}
                      </span>
                    )}
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row.key} style={{ background: ri % 2 === 0 ? 'rgba(255,255,255,0.6)' : 'transparent' }}>
                  <td style={{ padding: '12px 16px', color: C.navy, fontSize: 13, fontWeight: 500 }}>{row.label}</td>
                  {c.tiers.map((t) => (
                    <td key={t.name}
                      style={{ padding: '12px 16px', textAlign: 'center', fontSize: 13, background: t.highlight ? 'rgba(13,43,85,0.05)' : undefined, color: t[row.key] === '-' ? C.grayText : (t.highlight ? C.navyDark : C.navy), fontWeight: t.highlight ? 600 : 400 }}>
                      {t[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={{ padding: '20px 16px' }}></td>
                {c.tiers.map((t) => (
                  <td key={t.name} style={{ padding: '20px 16px', textAlign: 'center', background: t.highlight ? 'rgba(13,43,85,0.05)' : undefined, borderRadius: t.highlight ? '0 0 12px 12px' : undefined }}>
                    <button onClick={onScrollToForm}
                      style={{ background: t.highlight ? C.red : C.navy, color: C.white, borderRadius: 6, fontWeight: 600, fontSize: 13, padding: '10px 20px', cursor: 'pointer', width: '100%', border: 'none' }}
                      className="hover:opacity-90 transition-opacity">
                      Solicita oferta
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

function BrokerSection() {
  const c = ebContent.broker;
  return (
    <section style={{ background: C.white }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 480 }}>
              <img src={c.imageUrl} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} /></motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }}
              className="text-4xl lg:text-5xl font-bold mb-6">{c.h2}</motion.h2>
            <motion.p variants={fadeUp} style={{ color: C.navy }} className="text-base leading-relaxed mb-8">{c.body}</motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4 mb-8">
              {c.bullets.map((b) => {
                const Icon = ICON_MAP[b.iconName] || Shield;
                return (
                  <motion.div key={b.title} variants={fadeUp} style={{ background: C.cream, borderRadius: 10 }} className="p-4">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <div style={{ background: C.navy, borderRadius: 6, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={15} color={C.white} />
                      </div>
                      <p style={{ color: C.navyDark, fontWeight: 700 }} className="text-sm">{b.title}</p>
                    </div>
                    <p style={{ color: C.navy }} className="text-sm leading-relaxed">{b.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={fadeUp}
              style={{ background: C.gold + '15', border: `1px solid ${C.gold}33`, borderRadius: 10 }} className="p-4">
              <p style={{ color: C.navyDark, fontWeight: 700 }} className="text-sm mb-1">{c.commissionTitle}</p>
              <p style={{ color: C.navy }} className="text-sm leading-relaxed">{c.commissionNote}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  const c = ebContent.process;
  return (
    <section id="process" style={{ background: C.navyDark }} className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} light /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.white }}
            className="text-4xl lg:text-5xl font-bold mb-4">{c.h2}</motion.h2>
          <motion.p variants={fadeUp} style={{ color: C.gold, fontFamily: 'var(--font-mono)', fontWeight: 700 }} className="text-2xl">
            {c.avgTime}{' '}
            <span style={{ color: 'rgba(247,243,238,0.5)', fontSize: 14, fontFamily: 'var(--font-sans)', fontWeight: 400 }}>{c.avgTimeNote}</span>
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
          {c.steps.map((step) => (
            <motion.div key={step.num} variants={fadeUp}
              style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: 'rgba(255,255,255,0.04)', borderRadius: 12 }}
              className="p-5">
              <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', border: `2px solid ${C.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: C.gold, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13 }}>{step.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <h3 style={{ color: C.white, fontWeight: 700 }} className="text-base">{step.title}</h3>
                  <span style={{ color: C.gold, background: C.gold + '22', borderRadius: 4, fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-mono)' }} className="px-2 py-0.5">{step.duration}</span>
                </div>
                <p style={{ color: 'rgba(247,243,238,0.7)' }} className="text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
          <button onClick={onScrollToForm}
            style={{ background: C.red, color: C.white, borderRadius: 8, fontWeight: 700, border: 'none', cursor: 'pointer' }}
            className="px-8 py-4 text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Incepe procesul <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const c = ebContent.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section style={{ background: C.cream }} className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.navyDark }}
            className="text-4xl font-bold">{c.h2}</motion.h2>
        </motion.div>
        <div className="space-y-3">
          {c.items.map((item, idx) => (
            <motion.div key={item.q}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              style={{ background: C.white, borderRadius: 10, overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{ width: '100%', textAlign: 'left', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', cursor: 'pointer', border: 'none' }}>
                <span style={{ color: C.navyDark, fontWeight: 600 }} className="text-sm pr-4">{item.q}</span>
                {openIdx === idx ? <ChevronUp size={18} color={C.navy} /> : <ChevronDown size={18} color={C.navy} />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p style={{ color: C.navy, borderTop: `1px solid ${C.cream}` }}
                      className="px-5 pb-5 pt-3 text-sm leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormSection({ formRef }: { formRef: React.RefObject<HTMLElement | null> }) {
  const c = ebContent.form;
  const [form, setForm] = useState({ name: '', company: '', role: '', employees: '', email: '', phone: '', message: '', gdpr: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('/api/eb-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    border: `1px solid #E5E7EB`,
    borderRadius: 6,
    padding: '10px 12px',
    fontSize: 14,
    color: C.navyDark,
    outline: 'none',
    boxSizing: 'border-box' as const,
  };

  return (
    <section ref={formRef as React.RefObject<HTMLElement>} id="contact-form" style={{ background: C.navy }} className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
          <motion.div variants={fadeUp}><Eyebrow text={c.eyebrow} light /></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', color: C.white }}
            className="text-4xl lg:text-5xl font-bold mb-3">{c.h2}</motion.h2>
          <motion.p variants={fadeUp} style={{ color: 'rgba(247,243,238,0.7)' }} className="text-base">{c.sub}</motion.p>
        </motion.div>
        {status === 'sent' ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            style={{ background: C.green + '22', border: `1px solid ${C.green}`, borderRadius: 12 }}
            className="p-8 text-center">
            <CheckCircle size={48} color={C.green} className="mx-auto mb-4" />
            <p style={{ color: C.cream, fontWeight: 700 }} className="text-xl">{c.success}</p>
          </motion.div>
        ) : (
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={handleSubmit}
            style={{ background: C.white, borderRadius: 16 }} className="p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label style={{ color: C.navyDark, fontSize: 13, fontWeight: 600 }} className="block mb-1">{c.fields.name} *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} placeholder="Ion Popescu" />
              </div>
              <div>
                <label style={{ color: C.navyDark, fontSize: 13, fontWeight: 600 }} className="block mb-1">{c.fields.company} *</label>
                <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} style={inputStyle} placeholder="SRL Exemplu" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label style={{ color: C.navyDark, fontSize: 13, fontWeight: 600 }} className="block mb-1">{c.fields.role} *</label>
                <select required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} style={{ ...inputStyle, background: C.white }}>
                  <option value="">Selecteaza rolul</option>
                  {c.roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label style={{ color: C.navyDark, fontSize: 13, fontWeight: 600 }} className="block mb-1">{c.fields.employees} *</label>
                <select required value={form.employees} onChange={(e) => setForm({ ...form, employees: e.target.value })} style={{ ...inputStyle, background: C.white }}>
                  <option value="">Selecteaza</option>
                  {c.employeeCounts.map((ec) => <option key={ec} value={ec}>{ec}</option>)}
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label style={{ color: C.navyDark, fontSize: 13, fontWeight: 600 }} className="block mb-1">{c.fields.email} *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} placeholder="ion@companie.md" />
              </div>
              <div>
                <label style={{ color: C.navyDark, fontSize: 13, fontWeight: 600 }} className="block mb-1">{c.fields.phone}</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} placeholder="+373 6X XXX XXX" />
              </div>
            </div>
            <div>
              <label style={{ color: C.navyDark, fontSize: 13, fontWeight: 600 }} className="block mb-1">{c.fields.message}</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3}
                style={{ ...inputStyle, resize: 'none' }} placeholder={c.fields.messagePlaceholder} />
            </div>
            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" required checked={form.gdpr} onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0 }} />
              <span style={{ color: C.grayText, fontSize: 12, lineHeight: 1.5 }}>{c.fields.gdpr}</span>
            </label>
            <button type="submit" disabled={status === 'sending'}
              style={{ width: '100%', background: C.red, color: C.white, borderRadius: 8, fontWeight: 700, padding: '14px 0', fontSize: 15, cursor: 'pointer', opacity: status === 'sending' ? 0.7 : 1, border: 'none' }}
              className="hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
              {status === 'sending' ? 'Se trimite...' : c.fields.submit} <ArrowRight size={18} />
            </button>
            {status === 'error' && (
              <p style={{ color: C.red, textAlign: 'center' }} className="text-sm">
                A aparut o eroare. Contactati: andrei.moraru@ingbroker.md
              </p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}

function EBFooter() {
  const c = ebContent.footerSection;
  return (
    <footer style={{ background: C.navyDark, borderTop: `1px solid rgba(255,255,255,0.06)` }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p style={{ color: C.gold, fontWeight: 700 }} className="text-sm mb-3">{c.col1.title}</p>
            {c.col1.lines.map((l) => (
              <p key={l} style={{ color: 'rgba(247,243,238,0.5)' }} className="text-xs mb-1">{l}</p>
            ))}
          </div>
          <div>
            <p style={{ color: C.gold, fontWeight: 700 }} className="text-sm mb-3">{c.col2.title}</p>
            {c.col2.address.map((l) => (
              <p key={l} style={{ color: 'rgba(247,243,238,0.5)' }} className="text-xs mb-1">{l}</p>
            ))}
            <a href={`tel:${c.col2.phone.replace(/\s/g, '')}`} style={{ color: C.cream, textDecoration: 'none' }} className="text-xs block mt-2 hover:opacity-80 transition-opacity">{c.col2.phone}</a>
            <a href={`mailto:${c.col2.email}`} style={{ color: C.cream, textDecoration: 'none' }} className="text-xs block mt-1 hover:opacity-80 transition-opacity">{c.col2.email}</a>
          </div>
          <div>
            <p style={{ color: C.gold, fontWeight: 700 }} className="text-sm mb-3">{c.col3.title}</p>
            {c.col3.links.map((l) => (
              <Link key={l.href} to={l.href} style={{ color: 'rgba(247,243,238,0.5)', textDecoration: 'none' }}
                className="block text-xs mb-1.5 hover:opacity-80 transition-opacity">{l.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, textAlign: 'center' }}>
          <p style={{ color: 'rgba(247,243,238,0.3)' }} className="text-xs">
            &copy; 2026 Insurance ING Broker SRL. Licentiat CNPF din 2017. CF: 1017600019386.
          </p>
        </div>
      </div>
    </footer>
  );
}

function EBSchema() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ebContent.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Employee Benefits Corporate - Insurance ING Broker SRL',
    description: ebContent.meta.description,
    provider: { '@type': 'Organization', name: 'Insurance ING Broker SRL', url: 'https://www.ingbroker.md', telephone: '+37369526003' },
    areaServed: { '@type': 'Country', name: 'Moldova' },
    serviceType: 'Insurance Brokerage - Employee Benefits',
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ING Broker', item: 'https://www.ingbroker.md' },
      { '@type': 'ListItem', position: 2, name: 'Asigurari Corporate', item: 'https://www.ingbroker.md/business' },
      { '@type': 'ListItem', position: 3, name: 'Employee Benefits', item: 'https://www.ingbroker.md/employee-benefits' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}

export function EmployeeBenefits() {
  const formRef = useRef<HTMLElement | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <EBSchema />
      <SEO
        title={ebContent.meta.title}
        description={ebContent.meta.description}
        lang="ro"
        keywords="employee benefits moldova, asigurare medicala angajati, pachete corporative asigurare, amf deductibil fiscal moldova 2026"
        image="https://www.ingbroker.md/og/employee-benefits.jpg"
      />
      <a href="#contact-form"
        style={{ position: 'absolute', left: -9999, top: 4, zIndex: 9999, background: C.navy, color: C.white, padding: '8px 16px', borderRadius: 4 }}
        className="focus:left-4">
        Salt la formular
      </a>
      <HeroSection onScrollToForm={scrollToForm} />
      <PainSection />
      <SolutionSection />
      <ComparisonSection />
      <AudienceSection onScrollToForm={scrollToForm} />
      <ContextSection />
      <TiersSection onScrollToForm={scrollToForm} />
      <BrokerSection />
      <ProcessSection onScrollToForm={scrollToForm} />
      <FAQSection />
      <FormSection formRef={formRef} />
      <EBFooter />
    </>
  );
}
