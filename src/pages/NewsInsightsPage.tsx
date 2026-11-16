import React, { useEffect, useState } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { articles } from '../data/articleMetadata';
import { localizedPath } from '../utils/localizedRoutes';
import { ArticlePhotoLogo } from '../components/ArticlePhotoLogo';
import { articlePhotoSource } from '../data/articlePhotoBranding';

interface NewsInsightsPageProps {
  lang: Language;
}

export const NewsInsightsPage: React.FC<NewsInsightsPageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const currentArticles = articles[lang] || articles['ro'];
  const [isScrolled, setIsScrolled] = useState(false);
  const [params, setParams] = useSearchParams();
  const selectedCategory = params.get('category') || 'All';
  const query = params.get('q') || '';
  const articlesPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categoryNames = {
    ro: ['Toate', 'Transport', 'Construcții și bunuri', 'Răspunderi și cyber', 'Agricultură și energie', 'Sănătate și viață', 'Alte riscuri'],
    ru: ['Все', 'Транспорт', 'Строительство и имущество', 'Ответственность и киберриски', 'Сельское хозяйство и энергия', 'Здоровье и жизнь', 'Другие риски'],
    en: ['All', 'Transport', 'Construction and property', 'Liability and cyber', 'Agriculture and energy', 'Health and life', 'Other risks'],
  };
  const categories = ['All', 'transport', 'property', 'liability', 'agro-energy', 'health-life', 'other'];
  const categoryFor = (slug: string) => /cargo|cmr|transport|flot|auto|rca|casco|carte-verde|avio|maritim|nave|iaht|port|drone/.test(slug) ? 'transport'
    : /raspund|profes|omisiune|cyber|directori/.test(slug) ? 'liability'
    : /agric|seceta|culturi|irig|zooteh|vit|livad|energie|eolien|bess|biogaz|solar|fotovolta/.test(slug) ? 'agro-energy'
    : /viata|sanatate|medical|spital|boal|matern|optic|kineto|check-up|angajati|accident/.test(slug) ? 'health-life'
    : /construct|montaj|bunuri|imobil|propriet|clad|depoz|echipament|utilaj|incend|drum|pod|tunel/.test(slug) ? 'property' : 'other';
  const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
  const searchTerms = normalize(query).split(/\s+/).filter(Boolean).map(term => term.length > 5 ? term.slice(0, -2) : term);
  const filteredArticles = currentArticles.filter(article =>
    (selectedCategory === 'All' || categoryFor(article.slug) === selectedCategory)
    && searchTerms.every(term => normalize(`${article.title} ${article.excerpt} ${article.tags.join(' ')} ${article.seo.keywords}`).includes(term)));
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / articlesPerPage));
  const currentPage = Math.min(totalPages, Math.max(1, Number.parseInt(params.get('page') || '1', 10) || 1));
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const paginatedArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleCategoryChange = (category: string) => {
    const next = new URLSearchParams(params);
    category === 'All' ? next.delete('category') : next.set('category', category);
    next.delete('page');
    setParams(next);
  };
  const pageHref = (page: number) => {
    const next = new URLSearchParams(params);
    page === 1 ? next.delete('page') : next.set('page', String(page));
    return `${localizedPath('/news', lang)}${next.size ? '?' + next.toString() : ''}#article-results`;
  };

  const seo = {
    title: lang === 'ro' ? 'Noutăți și Insights | Insurance ING Broker' : lang === 'ru' ? 'Новости и Аналитика | Insurance ING Broker' : 'News & Insights | Insurance ING Broker',
    description: lang === 'ro' ? 'Ultimele noutăți, ghiduri și analize din domeniul asigurărilor din Republica Moldova.' : lang === 'ru' ? 'Последние новости, руководства и аналитика в сфере страхования в Республике Молдова.' : 'Latest news, guides and insights from the insurance field in the Republic of Moldova.',
    keywords: 'stiri asigurari, noutati rca, ghid asigurari, blog ing broker, andrei moraru, asigurari moldova'
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": seo.title,
    "description": seo.description,
    "publisher": {
      "@type": "Organization",
      "name": "Insurance ING Broker SRL"
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={seo.title} 
        description={seo.description} 
        lang={lang} 
        schema={schema}
        keywords={seo.keywords}
        canonicalQuery={currentPage > 1 && !query && selectedCategory === 'All' ? `?page=${currentPage}` : ''}
        noIndex={Boolean(query || selectedCategory !== 'All')}
      />

      {/* Back Button */}
      <div className="absolute top-20 left-6 z-30">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
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
            {lang === 'ro' ? 'Înapoi la Acasă' : lang === 'ru' ? 'Назад на Главную' : 'Back to Home'}
          </span>
        </motion.button>
      </div>
      
      {/* Full-screen Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-start pt-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920" 
            alt="News and Insights" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0a192f]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent opacity-70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-8 leading-[0.9]">
              {lang === 'ro' ? 'Noutăți &' : lang === 'ru' ? 'Новости &' : 'News &'} <br />
              <span className="text-primary italic font-serif normal-case">{lang === 'ro' ? 'Insights' : lang === 'ru' ? 'Аналитика' : 'Insights'}</span>
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl">
              {seo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white border-b border-gray-100 shadow-sm" aria-label={lang === 'ro' ? 'Caută articole' : lang === 'ru' ? 'Поиск статей' : 'Find articles'}>
        <div className="max-w-7xl mx-auto px-6">
          <label htmlFor="article-search" className="block text-sm font-bold mb-2">{lang === 'ro' ? 'Caută un produs sau o întrebare' : lang === 'ru' ? 'Найдите продукт или вопрос' : 'Search for a product or question'}</label>
          <input id="article-search" type="search" value={query} onChange={e => { const next = new URLSearchParams(params); e.target.value ? next.set('q', e.target.value) : next.delete('q'); next.delete('page'); setParams(next, { replace: true }); }} className="w-full border border-gray-200 px-4 py-3 mb-4 bg-white text-secondary focus:outline-2 focus:outline-primary" />
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                aria-pressed={selectedCategory === cat}
                className={`shrink-0 px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {categoryNames[lang][index]}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section id="article-results" className="py-12 md:py-24 px-6" aria-live="polite">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-600 mb-6">{filteredArticles.length} {lang === 'ro' ? 'articole' : lang === 'ru' ? 'статей' : 'articles'}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article, i) => (
              <motion.a
                key={article.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                href={localizedPath(`/news/${article.slug}`, lang)}
                className="group bg-white border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] z-10 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={articlePhotoSource(article.image)}
                    alt={article.imageAlt || article.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <ArticlePhotoLogo image={article.image} />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-secondary text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                      {article.date}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-secondary tracking-tighter group-hover:text-primary transition-colors duration-300 mb-4 leading-tight line-clamp-2">{article.title}</h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow text-sm line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                     <span className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary group-hover:text-primary transition-colors">
                      {lang === 'ro' ? 'CITEȘTE MAI MULT' : lang === 'ru' ? 'ЧИТАТЬ ДАЛЕЕ' : 'READ MORE'}
                      <div className="w-10 h-[1px] bg-primary group-hover:w-16 transition-all duration-500" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-20 flex flex-wrap justify-center items-center gap-4">
              <a
                href={pageHref(Math.max(1, currentPage - 1))}
                aria-disabled={currentPage === 1}
                aria-label={lang === 'ro' ? 'Pagina anterioară' : lang === 'ru' ? 'Предыдущая страница' : 'Previous page'}
                className={`p-4 border border-gray-200 text-secondary hover:bg-gray-50 transition-all ${currentPage === 1 ? 'pointer-events-none opacity-30' : ''}`}
              >
                <ArrowLeft size={20} />
              </a>
              
              <div className="flex flex-wrap justify-center gap-2 max-w-full">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <a
                    key={page}
                    href={pageHref(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                    aria-label={`${lang === 'ro' ? 'Pagina' : lang === 'ru' ? 'Страница' : 'Page'} ${page}`}
                    className={`w-12 h-12 inline-flex items-center justify-center text-[10px] font-bold transition-all ${
                      currentPage === page 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-white border border-gray-100 text-secondary hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </a>
                ))}
              </div>

              <a
                href={pageHref(Math.min(totalPages, currentPage + 1))}
                aria-disabled={currentPage === totalPages}
                aria-label={lang === 'ro' ? 'Pagina următoare' : lang === 'ru' ? 'Следующая страница' : 'Next page'}
                className={`p-4 border border-gray-200 text-secondary hover:bg-gray-50 transition-all ${currentPage === totalPages ? 'pointer-events-none opacity-30' : ''}`}
              >
                <ArrowRight size={20} />
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
