import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Mail, MapPin, Phone, Plus } from 'lucide-react';
import { SEO } from '../components/SEO';
import { piLanding } from '../data/piLandingContent';
import type { Language } from '../translations';
import { localizedPath } from '../utils/localizedRoutes';
import './pi-landing.css';

const scene = '/images/articles/moldova/pi-landing-statie-2026.webp';
const sceneSet = `/images/articles/responsive/pi-landing-statie-2026-640.webp 640w, /images/articles/responsive/pi-landing-statie-2026-960.webp 960w, ${scene} 1774w`;
const detail = '/images/articles/moldova/pi-landing-ecrane-2026.webp';
const basePath = '/servicii/asigurare-raspundere-profesionala';

const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="pi-eyebrow">{children}</p>;

const DataTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="pi-table-wrap">
    <table className="pi-table">
      <thead><tr>{head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            <th scope="row">{row[0]}</th>
            {row.slice(1).map((cell, i) => <td key={cell} data-label={head[i + 1]}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ProfessionalIndemnityLanding = ({ lang }: { lang: Language }) => {
  const c = piLanding[lang];
  // Routerul adaugă singur prefixul limbii (/ru, /en), deci linkurile interne rămân fără prefix.
  const to = (path: string) => path;
  const pageUrl = `https://www.ingbroker.md${localizedPath(basePath, lang)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: c.seo.schemaName,
        serviceType: 'Professional Indemnity Insurance',
        areaServed: { '@type': 'Country', name: 'Moldova' },
        url: pageUrl,
        provider: { '@type': 'InsuranceAgency', name: 'Insurance ING Broker SRL', url: 'https://www.ingbroker.md', telephone: '+37369526003' },
      },
      {
        '@type': 'FAQPage',
        url: pageUrl,
        mainEntity: c.faq.items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
      },
    ],
  };

  return (
    <main className="pi-landing" lang={lang}>
      <SEO title={c.seo.title} description={c.seo.description} lang={lang} keywords={c.seo.keywords} schema={schema} image={`https://www.ingbroker.md${scene}`} />

      <header className="pi-hero pi-wrap">
        <div className="pi-hero-copy">
          <div>
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <h1>{c.hero.title}</h1>
          </div>
          <div className="pi-hero-side">
            <p className="pi-lead">{c.hero.lead}</p>
            <div className="pi-actions">
              <Link to={to('/contact')} className="pi-btn pi-btn-primary">{c.hero.cta} <ArrowRight size={18} aria-hidden="true" /></Link>
              <a href="tel:+37369526003" className="pi-btn pi-btn-ghost"><Phone size={17} aria-hidden="true" /> +373 69 526 003</a>
            </div>
          </div>
        </div>
        <img className="pi-hero-image" src={scene} srcSet={sceneSet} sizes="(max-width: 1280px) calc(100vw - 32px), 1232px" width={1774} height={887} alt={c.hero.imageAlt} fetchPriority="high" decoding="async" />
        <dl className="pi-facts">
          {c.hero.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>
      </header>

      <nav className="pi-subnav" aria-label={c.ui.navLabel}>
        <div className="pi-wrap">
          <ul>{c.nav.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ul>
          <Link to={to('/contact')} className="pi-subnav-cta">{c.hero.cta}</Link>
        </div>
      </nav>

      <section id="cerere" className="pi-section pi-wrap">
        <div className="pi-section-head">
          <div><Eyebrow>{c.demand.eyebrow}</Eyebrow><h2>{c.demand.title}</h2></div>
          <p>{c.demand.intro}</p>
        </div>
        <ul className="pi-legal">
          {c.demand.rows.map((row) => <li key={row.who}><strong>{row.who}</strong><span>{row.rule}</span></li>)}
        </ul>
      </section>

      <section id="riscuri" className="pi-section pi-band">
        <div className="pi-wrap">
          <div className="pi-section-head">
            <div><Eyebrow>{c.risks.eyebrow}</Eyebrow><h2>{c.risks.title}</h2></div>
            <p>{c.risks.intro}</p>
          </div>
          <DataTable head={c.risks.head} rows={c.risks.rows} />
        </div>
      </section>

      <section id="acoperiri" className="pi-section pi-wrap">
        <Eyebrow>{c.coverage.eyebrow}</Eyebrow>
        <h2>{c.coverage.title}</h2>
        <div className="pi-cover-grid">
          <div>
            <h3>{c.coverage.coreTitle}</h3>
            <ul className="pi-cover-list">
              {c.coverage.core.map((item) => (
                <li key={item.title}><Check size={20} aria-hidden="true" /><div><strong>{item.title}</strong><p>{item.text}</p></div></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{c.coverage.optionsTitle}</h3>
            <ul className="pi-cover-list pi-cover-options">
              {c.coverage.options.map((item) => (
                <li key={item.title}><Plus size={20} aria-hidden="true" /><div><strong>{item.title}</strong><p>{item.text}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="pi-midcta" aria-label={c.midCta.title}>
          <div>
            <p className="pi-midcta-title">{c.midCta.title}</p>
            <p>{c.midCta.text}</p>
          </div>
          <Link to={to('/contact')} className="pi-btn pi-btn-primary">{c.midCta.cta} <ArrowRight size={18} aria-hidden="true" /></Link>
        </aside>
      </section>

      <section id="excluderi" className="pi-section pi-deep">
        <div className="pi-wrap pi-exclusions">
          <div>
            <Eyebrow>{c.exclusions.eyebrow}</Eyebrow>
            <h2>{c.exclusions.title}</h2>
            <p>{c.exclusions.intro}</p>
            <p className="pi-deep-note">{c.exclusions.cyberBefore}<Link to={to('/servicii/asigurare-cyber-moldova')}>{c.exclusions.cyberLink}</Link>.</p>
          </div>
          <ol>{c.exclusions.items.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
      </section>

      <section id="conditii" className="pi-section pi-wrap pi-terms">
        <div className="pi-terms-aside">
          <Eyebrow>{c.terms.eyebrow}</Eyebrow>
          <h2>{c.terms.title}</h2>
          <img src={detail} width={960} height={640} alt={c.terms.imageAlt} loading="lazy" decoding="async" />
        </div>
        <dl className="pi-sheet">
          {c.terms.rows.map((row, i) => (
            <div key={row.label}><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><dt>{row.label}</dt><dd>{row.text}</dd></div>
          ))}
        </dl>
      </section>

      <section id="oferta" className="pi-section pi-band">
        <div className="pi-wrap">
          <Eyebrow>{c.offer.eyebrow}</Eyebrow>
          <h2>{c.offer.title}</h2>
          <ol className="pi-steps">
            {c.offer.steps.map((step) => <li key={step.title}><strong>{step.title}</strong><p>{step.text}</p></li>)}
          </ol>
          <div className="pi-docs">
            <h3>{c.offer.docsTitle}</h3>
            <ul>{c.offer.docs.map((doc) => <li key={doc}><Check size={18} aria-hidden="true" />{doc}</li>)}</ul>
            <p className="pi-note">{c.offer.note}</p>
          </div>
        </div>
      </section>

      <section id="intrebari" className="pi-section">
        <div className="pi-wrap pi-faq">
          <h2>{c.faq.title}</h2>
          <div>
            {c.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}<Plus size={20} aria-hidden="true" /></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pi-final" aria-labelledby="pi-final-title">
        <div className="pi-wrap">
          <div className="pi-final-main">
            <h2 id="pi-final-title">{c.final.title}</h2>
            <div>
              <p>{c.final.text}</p>
              <div className="pi-actions">
                <Link to={to('/contact')} className="pi-btn pi-btn-light">{c.final.cta} <ArrowRight size={18} aria-hidden="true" /></Link>
                <a href="tel:+37369526003" className="pi-btn pi-btn-outline"><Phone size={17} aria-hidden="true" /> +373 69 526 003</a>
              </div>
            </div>
          </div>
          <address className="pi-contacts">
            <a href="tel:+37379526003"><Phone size={17} aria-hidden="true" /> +373 79 526 003</a>
            <a href="mailto:andrei.moraru@ingbroker.md"><Mail size={17} aria-hidden="true" /> andrei.moraru@ingbroker.md</a>
            <span><MapPin size={17} aria-hidden="true" /> str. Pan Halippa 9, MD-2009, Chișinău</span>
          </address>
          <div className="pi-final-links">
            <ul>{c.related.map((link) => <li key={link.href}><Link to={to(link.href)}>{link.label}</Link></li>)}</ul>
            <ul>{c.sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul>
          </div>
          <p className="pi-legal-line">{c.final.legal}</p>
        </div>
      </section>
    </main>
  );
};
