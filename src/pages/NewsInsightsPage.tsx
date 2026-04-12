import React, { useEffect, useState } from 'react';
import { translations, Language } from '../translations';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';

interface NewsInsightsPageProps {
  lang: Language;
}

export const NewsInsightsPage: React.FC<NewsInsightsPageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const currentArticles = articles[lang] || articles['ro'];
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get unique categories from articles
  const categories = ['All', ...Array.from(new Set(currentArticles.flatMap(article => article.tags)))].filter(cat => 
    !['Asigurări', 'Moldova', 'Страхование', 'Молдова', 'Insurance'].includes(cat)
  );

  const filteredArticles = selectedCategory === 'All' 
    ? currentArticles 
    : currentArticles.filter(article => article.tags.includes(selectedCategory));

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const paginatedArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      />

      {/* Back Button */}
      <div className="fixed top-32 left-6 z-50">
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
      <section className="py-12 bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat === 'All' ? (lang === 'ro' ? 'Toate' : lang === 'ru' ? 'Все' : 'All') : cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article, i) => (
              <motion.div 
                key={article.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                onClick={() => navigate(`/news/${article.slug}`)}
                className="group bg-white border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] z-10 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <h3 className="text-2xl font-bold text-secondary tracking-tighter group-hover:text-primary transition-colors duration-300 mb-4 leading-tight line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow text-sm line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                     <span className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary group-hover:text-primary transition-colors">
                      {lang === 'ro' ? 'CITEȘTE MAI MULT' : lang === 'ru' ? 'ЧИТАТЬ ДАЛЕЕ' : 'READ MORE'}
                      <div className="w-10 h-[1px] bg-primary group-hover:w-16 transition-all duration-500" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-4 border border-gray-200 text-secondary disabled:opacity-30 hover:bg-gray-50 transition-all"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 text-[10px] font-bold transition-all ${
                      currentPage === page 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-white border border-gray-100 text-secondary hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-4 border border-gray-200 text-secondary disabled:opacity-30 hover:bg-gray-50 transition-all"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
