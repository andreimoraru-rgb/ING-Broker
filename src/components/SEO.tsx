import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { localizedPath } from '../utils/localizedRoutes';

interface SEOProps {
      title: string;
      description: string;
      lang: 'ro' | 'ru' | 'en';
      schema?: object;
      keywords?: string;
      image?: string;
      includeLanguageAlternates?: boolean;
      noIndex?: boolean;
      ogType?: 'website' | 'article';
}

export const SEO = ({ title, description, lang, schema, keywords, image = "https://www.ingbroker.md/Logo%20ING%20Broker.png", includeLanguageAlternates = true, noIndex = false, ogType = 'website' }: SEOProps) => {
      const siteUrl = "https://www.ingbroker.md";
      const location = useLocation();
      const currentUrl = `${siteUrl}${localizedPath(location.pathname, lang)}`;
      const defaultKeywords = "asigurari moldova, broker asigurari, rca online, casco, asigurare medicala, asigurare business, ing broker, asigurare auto, asigurare imobile, asigurare companii";

      // Compute hreflang URLs for each language version of the current page.
      // Strip /ru/ or /en/ prefix to get base path, then reconstruct per language.
      const rawPath = location.pathname;
      let basePath: string;
      if (rawPath.startsWith('/ru/')) {
              basePath = rawPath.slice(3);
      } else if (rawPath.startsWith('/en/')) {
              basePath = rawPath.slice(3);
      } else if (rawPath === '/ru' || rawPath === '/en') {
              basePath = '/';
      } else {
              basePath = rawPath;
      }
      if (!basePath.startsWith('/')) basePath = '/' + basePath;

      const hreflangRo = `${siteUrl}${localizedPath(basePath, 'ro')}`;
      const hreflangRu = `${siteUrl}${localizedPath(basePath, 'ru')}`;
      const hreflangEn = `${siteUrl}${localizedPath(basePath, 'en')}`;

      return (
              <Helmet>
                    <html lang={lang} />
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords || defaultKeywords} />
                    <meta name="author" content="Insurance ING Broker SRL" />
                    <meta name="creator" content="Insurance ING Broker SRL" />
                    <meta name="publisher" content="Insurance ING Broker SRL" />
                    <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
              
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:type" content={ogType} />
                    <meta property="og:site_name" content="ING Broker" />
                    <meta property="og:url" content={currentUrl} />
                    <meta name="twitter:url" content={currentUrl} data-route-locale="true" />
                    <meta property="og:locale" content={lang === 'en' ? 'en_US' : `${lang}_MD`} data-route-locale="true" />
                    <meta property="og:image" content={image} />
              
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={image} />
              
                    <link rel="canonical" href={currentUrl} />
                    {includeLanguageAlternates && [
                      <link key="ro" rel="alternate" hrefLang="ro" href={hreflangRo} />,
                      <link key="ru" rel="alternate" hrefLang="ru" href={hreflangRu} />,
                      <link key="en" rel="alternate" hrefLang="en" href={hreflangEn} />,
                      <link key="default" rel="alternate" hrefLang="x-default" href={hreflangRo} />
                    ]}
              
                  {schema && (
                          <script type="application/ld+json">
                              {JSON.stringify(schema)}
                          </script>
                    )}
              </Helmet>
      );
};

