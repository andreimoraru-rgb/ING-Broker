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
    "@id": "https://www.ingbroker.md/#organization",
    "url": "https://www.ingbroker.md",
    "logo": "https://www.ingbroker.md/Logo%20ING%20Broker.png",
    "telephone": "+37369526003",
    "email": "andrei.moraru@ingbroker.md",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "str. Pan Halippa, 9",
      "addressLocality": "Chișinău",
      "postalCode": "MD-2009",
      "addressCountry": "MD"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Moldova"
    },
    "description": "Insurance ING Broker SRL, broker de asigurare din Republica Moldova. Informații pentru companii și analiza solicitărilor de asigurare.",
    "sameAs": [
      "https://www.linkedin.com/company/67107674/",
      "https://www.instagram.com/ingbroker.md/",
      "https://www.facebook.com/ingbroker.md"
    ]
  };
}

/** FAQ schema - primește array de întrebări/răspunsuri */
/** Autorul articolului: Person dacă numele are funcție după virgulă („Nume, Funcție Firmă”), altfel Organization. */
export function authorSchema(author: string, origin: string) {
  const [name, ...role] = author.split(', ');
  if (!role.length) return { '@type': 'Organization', name: author, url: origin };
  return {
    '@type': 'Person',
    name,
    jobTitle: role.join(', ').replace(/\s*Insurance ING Broker SRL$/, ''),
    worksFor: { '@type': 'Organization', name: 'Insurance ING Broker SRL', url: origin },
  };
}

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

/**
 * Graf JSON-LD pentru paginile /servicii/: Service + FAQPage + BreadcrumbList.
 * Furnizorul trimite la același @id ca InsuranceAgency de pe pagina principală.
 */
export function servicePageGraph(opts: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  breadcrumbName: string;
  homeUrl?: string;
  homeName?: string;
  faqs: Array<{ q: string; a: string }>;
}) {
  const homeUrl = opts.homeUrl || "https://www.ingbroker.md/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${opts.url}#service`,
        "name": opts.name,
        "description": opts.description,
        "serviceType": opts.serviceType,
        "url": opts.url,
        "provider": {
          "@type": "InsuranceAgency",
          "@id": "https://www.ingbroker.md/#organization",
          "name": "Insurance ING Broker SRL",
          "url": "https://www.ingbroker.md",
          "telephone": "+37369526003"
        },
        "areaServed": { "@type": "Country", "name": "Moldova" }
      },
      {
        "@type": "FAQPage",
        "@id": `${opts.url}#faq`,
        "mainEntity": opts.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${opts.url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": opts.homeName || "ING Broker", "item": homeUrl },
          { "@type": "ListItem", "position": 2, "name": opts.breadcrumbName, "item": opts.url }
        ]
      }
    ]
  };
}
