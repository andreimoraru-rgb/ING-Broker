import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  lang: 'ro' | 'ru' | 'en';
  schema?: object;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.ingbroker.md/#website",
      "url": "https://www.ingbroker.md/",
      "name": "ING Broker — Asigurări Online Moldova",
      "description": "Broker de asigurări licențiat CNPF. Asigurări Corporate, RCA, Carte Verde, Medicale, CASCO, Reinsurance pentru Moldova și piețe internaționale.",
      "inLanguage": ["ro", "ru", "en"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.ingbroker.md/news?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "InsuranceAgency",
      "@id": "https://www.ingbroker.md/#organization",
      "name": "Insurance ING Broker SRL",
      "alternateName": ["ING Broker", "ING Broker Moldova"],
      "url": "https://www.ingbroker.md/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ingbroker.md/Logo%20ING%20Broker.png",
        "width": 200,
        "height": 60
      },
      "image": "https://www.ingbroker.md/Logo%20ING%20Broker.png",
      "description": "Broker de asigurări licențiat CNPF. Soluții complete de asigurare pentru companii și persoane fizice din Moldova.",
      "foundingDate": "2015",
      "areaServed": ["MD", "RO", "EU"],
      "telephone": "+37322000000",
      "email": "office@ingbroker.md",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "str. Vasile Alecsandri 97",
        "addressLocality": "Chișinău",
        "addressCountry": "MD",
        "postalCode": "MD-2012"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/ingbroker.md",
        "https://www.instagram.com/ingbroker.md",
        "https://www.linkedin.com/company/ing-broker-moldova",
        "https://t.me/ingbroker"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Asigurări ING Broker",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asigurări Corporate" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reinsurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Shield 360" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Energie Regenerabilă" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property & Assets" } }
        ]
      }
    }
  ]
};

export const SEO = ({
  title,
  description,
  lang,
  schema,
  keywords,
  image = "https://www.ingbroker.md/Logo%20ING%20Broker.png",
  noindex = false
}: SEOProps) => {
  const siteUrl = "https://www.ingbroker.md";
  const location = useLocation();
  const currentUrl = `${siteUrl}${location.pathname}`;
  const defaultKeywords = "asigurari moldova, broker asigurari, asigurare corporate, reinsurance moldova, ing broker, asigurare business moldova, broker licențiat CNPF, asigurari chisinau";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Insurance ING Broker SRL" />
      <meta name="creator" content="Insurance ING Broker SRL" />
      <meta name="publisher" content="Insurance ING Broker SRL" />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ING Broker Moldova" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="ING Broker — Asigurări Moldova" />
      <meta property="og:locale" content={lang === 'ro' ? 'ro_MD' : lang === 'ru' ? 'ru_RU' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical & hreflang */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="ro" href={`${siteUrl}${location.pathname}`} />
      <link rel="alternate" hrefLang="ru" href={`${siteUrl}${location.pathname}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${location.pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${location.pathname}`} />

      {/* Global Organization + WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify(globalSchema)}
      </script>

      {/* Page-specific schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
