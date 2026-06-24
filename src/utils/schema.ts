// ============================================================
// Schema JSON-LD helpers pentru ingbroker.md
// Utilizat în toate paginile pentru SEO structural
// ============================================================

/** Schema LocalBusiness completă - se pune DOAR pe homepage */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Insurance ING Broker SRL",
    "alternateName": "ING Broker",
    "url": "https://ingbroker.md",
    "logo": "https://ingbroker.md/Logo%20ING%20Broker.png",
    "telephone": "+37369526003",
    "email": "andrei.moraru@ingbroker.md",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "str. Pan Halippa, 9",
      "addressLocality": "Chișinău",
      "postalCode": "MD-2009",
      "addressCountry": "MD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.0228",
      "longitude": "28.8353"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Moldova"
    },
    "hasCredential": "Licență CNPF",
    "description": "Broker de asigurări licențiat CNPF în Moldova. Oferim asigurări corporative B2B: CAR/EAR, răspundere profesională, cyber, flote auto. Ofertă comparativă în 15 minute.",
    "sameAs": [
      "https://www.linkedin.com/company/67107674/",
      "https://www.instagram.com/ingbroker.md/",
      "https://www.facebook.com/ingbroker.md"
    ]
  };
}

/** FAQ schema - primește array de întrebări/răspunsuri */
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/** BreadcrumbList schema */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/** Service schema pentru pagini de produs */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "InsuranceService",
    "name": opts.name,
    "description": opts.description,
    "url": opts.url,
    "provider": {
      "@type": "InsuranceAgency",
      "name": opts.provider || "Insurance ING Broker SRL",
      "url": "https://ingbroker.md"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Moldova"
    }
  };
}

/** HowTo schema pentru procese pas cu pas */
export function howToSchema(opts: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": opts.name,
    "description": opts.description,
    "totalTime": opts.totalTime || "PT15M",
    "step": opts.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

/** Article schema pentru articole blog */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": opts.title,
    "description": opts.description,
    "url": opts.url,
    "datePublished": opts.datePublished,
    "dateModified": opts.dateModified || opts.datePublished,
    "author": {
      "@type": "Organization",
      "name": opts.author || "Insurance ING Broker SRL",
      "url": "https://ingbroker.md"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Insurance ING Broker SRL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ingbroker.md/Logo%20ING%20Broker.png"
      }
    },
    "image": opts.image || "https://ingbroker.md/og-image.jpg",
    "inLanguage": "ro-MD"
  };
}
