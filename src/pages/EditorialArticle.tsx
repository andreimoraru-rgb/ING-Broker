import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../data/articles';
import { SEO } from '../components/SEO';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { authorSchema, breadcrumbSchema, faqSchema } from '../utils/schema';
import './editorial-article.css';
import { ArticlePhotoLogo } from '../components/ArticlePhotoLogo';
import { articlePhotoSource } from '../data/articlePhotoBranding';
import { articles } from '../data/articleMetadata';
import { articleResponsiveImages } from '../data/articleResponsiveImages';

export function prepareArticle(content: string) {
  const headings: { id: string; title: string }[] = [];
  const html = content.replace(/<h2>(.*?)<\/h2>/g, (_, title: string) => {
    const id = `sectiune-${headings.length + 1}`;
    headings.push({ id, title: title.replace(/<[^>]+>/g, '') });
    return `<h2 id="${id}" tabindex="-1">${title}</h2>`;
  });
  return { html, headings };
}

// Întrebările vizibile din secțiunea „Întrebări frecvente" (<h3> + <p>), pentru schema FAQPage.
export function articleFaqs(content: string) {
  const section = content.match(/<h2>[^<]*frecvente[^<]*<\/h2>([\s\S]*?)(?=<h2>|$)/i)?.[1] || '';
  const text = (s: string) => s.replace(/<[^>]+>/g, '').trim();
  return [...section.matchAll(/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)].map(([, q, a]) => ({ question: text(q), answer: text(a) }));
}

export const EditorialArticle = ({ article }: { article: Article }) => {
  const origin = 'https://www.ingbroker.md';
  const url = `${origin}/news/${article.slug}`;
  const image = `${origin}${article.image}`;
  const photo = articlePhotoSource(article.image);
  const responsive = articleResponsiveImages[photo];
  const { html, headings } = prepareArticle(article.content);
  const minutes = Math.max(1, Math.ceil(article.content.replace(/<[^>]+>/g, ' ').split(/\s+/).length / 200));
  const pending = article.reviewStatus === 'pending';
  const faqs = articleFaqs(article.content);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title,
    description: article.excerpt, mainEntityOfPage: url, url, inLanguage: 'ro-MD',
    image: { '@type': 'ImageObject', url: image, caption: article.imageCaption || undefined },
    author: authorSchema(article.author, origin),
    publisher: { '@type': 'Organization', name: 'Insurance ING Broker SRL', logo: { '@type': 'ImageObject', url: `${origin}/Logo%20ING%20Broker.png` } },
    datePublished: new Date(article.date).toISOString().slice(0, 10), dateModified: article.updatedAt,
  };
  return <main className="editorial-article" id="articol">
    <SEO title={article.seo.title} description={article.seo.description} lang="ro" schema={schema}
      image={image} keywords={article.seo.keywords} includeLanguageAlternates={['ro', 'ru', 'en'].every(locale => articles[locale].some(a => a.slug === article.slug && a.reviewStatus === 'approved'))} noIndex={pending} ogType="article" />
    <SchemaMarkup schemas={[breadcrumbSchema([{ name: 'Acasă', url: origin }, { name: 'Articole', url: `${origin}/news` }, { name: article.title, url }]), ...(faqs.length ? [faqSchema(faqs)] : [])]} />
    <div className="editorial-wrap">
      {pending && <p className="editorial-preview" role="note">Previzualizare nepublicată. Conținutul necesită validare de specialitate și confirmarea produsului pentru Moldova.</p>}
      <nav className="editorial-breadcrumb" aria-label="Fir de navigare"><Link to="/">Acasă</Link><span aria-hidden="true">/</span><Link to="/news">Articole</Link><span aria-hidden="true">/</span><span>{article.tags[0]}</span></nav>
      <header className="editorial-intro">
        <div className="editorial-title-block">
          <p className="editorial-category">{article.tags[0]} în Republica Moldova</p>
          <h1>{article.title}</h1>
          <p className="editorial-deck">{article.excerpt}</p>
          <div className="editorial-byline"><span>{article.author}</span><span>{minutes} min de lectură</span><span>Text actualizat <time dateTime={article.updatedAt}>{new Date(`${article.updatedAt}T00:00:00Z`).toLocaleDateString('ro-MD', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time></span></div>
          <a href="#continut-articol" className="editorial-read">Citește ghidul <span aria-hidden="true">↓</span></a>
        </div>
        <figure className="editorial-figure" style={{position:'relative'}}>
          <img src={photo} srcSet={responsive?.srcSet} sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1600px) 45vw, 720px" alt={article.imageAlt} width={responsive?.width || 1536} height={responsive?.height || 1024} fetchPriority="high" decoding="async" />
          <ArticlePhotoLogo image={article.image} />
          {article.imageCaption && <figcaption>{article.imageCaption}</figcaption>}
        </figure>
      </header>
      <div className="editorial-reading-layout">
        <aside className="editorial-toc" aria-label="Cuprins">
          <h2>În acest ghid</h2>
          <ol>{headings.map(h => <li key={h.id}><a href={`#${h.id}`}>{h.title}</a></li>)}</ol>
          <p>Informații orientative. Condițiile se verifică în documentele produsului local.</p>
        </aside>
        <article id="continut-articol" className="editorial-body" aria-label={article.title} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="editorial-bottom"><Link to="/news">Vezi toate articolele</Link><a href="#articol">Înapoi sus</a></div>
    </div>
  </main>;
};
