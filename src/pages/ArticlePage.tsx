import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Language } from '../translations';
import { SEO } from '../components/SEO';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { breadcrumbSchema } from '../utils/schema';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { articles, consolidatedLifeSlugs, withdrawnArticleSlugs } from '../data/articles';
import { EditorialArticle } from './EditorialArticle';
import { localizedPath } from '../utils/localizedRoutes';
import { articleRevisions } from '../data/recoveredArticles';
import './article-reading.css';

interface ArticlePageProps {
  lang: Language;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const currentArticles = articles[lang] || articles['ro'];
  const article = currentArticles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (!article) {
    if (slug && consolidatedLifeSlugs.has(slug)) return <Navigate to={localizedPath('/news/asigurare-viata-moldova', lang)} replace />;
    if (slug && withdrawnArticleSlugs.has(slug)) return <div className="min-h-screen pt-32 px-6"><SEO title="ING Broker" description="" lang={lang} noIndex includeLanguageAlternates={false} /><p>{lang === 'ro' ? 'Acest articol a fost retras.' : lang === 'ru' ? 'Эта статья снята с публикации.' : 'This article has been withdrawn.'}</p><a href={localizedPath('/news', lang)}>{lang === 'ro' ? 'Vezi articolele disponibile' : lang === 'ru' ? 'Все статьи' : 'Browse articles'}</a></div>;
    return <Navigate to="/news" replace />;
  }

  if (article.updatedAt && lang === 'ro' && !article.preserveLegacyLayout) return <EditorialArticle article={article} />;

  const articleOrigin = 'https://www.ingbroker.md';
  const articleUrl = `${articleOrigin}${localizedPath(`/news/${article.slug}`, lang)}`;
  const articleImage = new URL(article.image, articleOrigin).href;
  // Existing source dates use Romanian/Russian month abbreviations.
  const sourceDate = article.date.replace('Апр', 'Apr').replace('Iun', 'Jun').replace('Mai', 'May');
  const parsedDate = new Date(sourceDate);
  const publicationDate = Number.isFinite(parsedDate.getTime()) ? parsedDate.toISOString().slice(0, 10) : undefined;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.updatedAt ? article.title : article.seo.title,
    "description": article.seo.description,
    "url": articleUrl,
    "mainEntityOfPage": articleUrl,
    "image": articleImage,
    "author": {
      "@type": "Organization",
      "name": article.author || "Insurance ING Broker SRL",
      "url": articleOrigin
    },
    "publisher": {
      "@type": "Organization",
      "name": "Insurance ING Broker SRL",
      "logo": {
        "@type": "ImageObject",
        "url": `${articleOrigin}/Logo%20ING%20Broker.png`
      }
    },
    "datePublished": publicationDate,
    "dateModified": article.updatedAt || publicationDate,
    "inLanguage": lang === 'ro' ? 'ro-MD' : lang === 'ru' ? 'ru-MD' : 'en'
  };

  const articleBreadcrumb = breadcrumbSchema([
    { name: lang === 'ro' ? 'Acasă' : lang === 'ru' ? 'Главная' : 'Home', url: articleOrigin },
    {
      name: lang === 'ro' ? 'Noutăți & Insights' : lang === 'ru' ? 'Новости & Аналитика' : 'News & Insights',
      url: `${articleOrigin}${localizedPath('/news', lang)}`
    },
    { name: article.title, url: articleUrl }
  ]);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={article.seo.title}
        description={article.seo.description}
        lang={lang}
        schema={schema}
        keywords={article.seo.keywords}
        includeLanguageAlternates={!articleRevisions[article.slug] && ['ro', 'ru', 'en'].every(locale => articles[locale].some(a => a.slug === article.slug))}
        image={articleImage}
        ogType="article"
      />
      <SchemaMarkup schemas={[articleBreadcrumb]} />

      {/* Back Button */}
      <div className="absolute top-20 left-6 z-30 md:fixed md:top-32 md:z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(localizedPath('/news', lang))}
          className={`flex items-center gap-4 px-6 py-3 backdrop-blur-md border rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl group ${
            isScrolled 
              ? 'bg-white border-gray-200 text-secondary hover:bg-gray-50' 
              : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
          }`}
        >
          <div className={`p-1 group-hover:-translate-x-1 transition-transform ${
            isScrolled ? 'text-primary' : 'text-primary'
          }`}>
            <ArrowLeft size={16} strokeWidth={3} />
          </div>
          <span>
            {lang === 'ro' ? 'Înapoi la Noutăți' : lang === 'ru' ? 'Назад к Новостям' : 'Back to News'}
          </span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={article.image} 
            alt={article.imageAlt || article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0a192f]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white/80 text-sm font-light">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {article.updatedAt ? `Actualizat: ${new Date(`${article.updatedAt}T00:00:00Z`).toLocaleDateString('ro-MD', { timeZone: 'UTC' })}` : article.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                {article.author}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight mb-8">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {(/-2026110[67]\.(?:png|webp)$/.test(article.image)) && (
            <figure className="mb-10">
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                width={1153}
                height={769}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto rounded-xl"
              />
            </figure>
          )}
          <div 
            className="article-reading prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-secondary prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {article.slug === 'asigurare-drone-comerciale' && (lang === 'ro' || lang === 'ru') && (
            <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8" aria-labelledby="uas-drone-heading">
              <h2 id="uas-drone-heading" className="mb-4 text-2xl font-bold text-secondary">
                {lang === 'ru' ? 'Страхование дрона онлайн' : 'Asigurarea dronei online'}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                {lang === 'ru' ? (
                  <>Полис для дрона можно оформить онлайн на <strong><a className="underline underline-offset-4" href="https://uas.md/ru/asigurare">UAS.md</a></strong>. Заполните данные в форме и ознакомьтесь с доступными предложениями. Прежде чем продолжить, проверьте стоимость, срок и условия выбранного предложения.</>
                ) : (
                  <>Poți încheia polița pentru dronă online pe <strong><a className="underline underline-offset-4" href="https://uas.md/asigurare">UAS.md</a></strong>. Completează datele cerute în formular și consultă ofertele disponibile. Înainte de a continua, verifică prețul, perioada și condițiile ofertei alese.</>
                )}
              </p>
              <a
                className="uas-drone-cta inline-flex rounded-xl bg-[#2e7d34] px-6 py-3 text-base font-bold text-white no-underline transition-colors hover:bg-[#e31e24] hover:text-white focus-visible:bg-[#e31e24] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e31e24]"
                href={lang === 'ru' ? 'https://uas.md/ru/asigurare' : 'https://uas.md/asigurare'}
                lang="ro"
              >
                Încheie polița pe UAS.md
              </a>
            </section>
          )}

          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-3">
              <Tag size={18} className="text-gray-400" />
              {article.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
