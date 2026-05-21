import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
      title: string;
      description: string;
      lang: 'ro' | 'ru' | 'en';
      schema?: object;
      keywords?: string;
      image?: string;
}

export const SEO = ({ title, description, lang, schema, keywords, image = "https://www.ingbroker.md/Logo%20ING%20Broker.png" }: SEOProps) => {
      const siteUrl = "https://www.ingbroker.md";
      const location = useLocation();
      const currentUrl = `${siteUrl}${location.pathname}`;
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

      const hreflangRo = `${siteUrl}${basePath}`;
      const hreflangRu = `${siteUrl}/ru${basePath === '/' ? '/' : basePath}`;
      const hreflangEn = `${siteUrl}/en${basePath === '/' ? '/' : basePath}`;

      return (
              <Helmet>
                    <html lang={lang} />
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords || defaultKeywords} />
                    <meta name="author" content="Insurance ING Broker SRL" />
                    <meta name="creator" content="Insurance ING Broker SRL" />
                    <meta name="publisher" content="Insurance ING Broker SRL" />
                    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
              
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="ING Broker" />
                    <meta property="og:url" content={currentUrl} />
                    <meta property="og:image" content={image} />
              
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={image} />
              
                    <link rel="canonical" href={currentUrl} />
                    <link rel="alternate" hrefLang="ro" href={hreflangRo} />
                    <link rel="alternate" hrefLang="ru" href={hreflangRu} />
                    <link rel="alternate" hrefLang="en" href={hreflangEn} />
                    <link rel="alternate" hrefLang="x-default" href={hreflangRo} />
              
                  {schema && (
                          <script type="application/ld+json">
                              {JSON.stringify(schema)}
                          </script>
                    )}
              </Helmet>
              );
              );
                    };
};
