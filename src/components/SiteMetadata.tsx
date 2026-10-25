import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { SEO } from './SEO';
import { SchemaMarkup } from './SchemaMarkup';

/** Page components own metadata; homepage FAQ/HowTo belongs only on the homepage. */
export function SiteMetadata({ title, description, lang, schema, schemas }: {
  title: string;
  description: string;
  lang: 'ro' | 'ru' | 'en';
  schema: object;
  schemas: object[];
}) {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // react-helmet-async v3 uses native React 19 metadata, which does not claim
    // the static shell tags. Remove only explicitly marked fallback nodes.
    // Restore those exact nodes on unmount (including StrictMode).
    const fallbacks = Array.from(document.head.querySelectorAll('meta[data-rh="true"], title[data-rh="true"], meta[name="twitter:url"]:not([data-route-locale]), meta[property="og:locale"]:not([data-route-locale])'))
      .map(node => ({ node, next: node.nextSibling }));
    fallbacks.forEach(({ node }) => node.remove());
    return () => {
      [...fallbacks].reverse().forEach(({ node, next }) => {
        document.head.insertBefore(node, next?.parentNode === document.head ? next : null);
      });
    };
  }, []);
  if (pathname !== '/' && !['/ai-studio', '/admin/ai-tools'].includes(pathname)) return null;
  return <><SEO title={title} description={description} lang={lang} schema={schema} /><SchemaMarkup schemas={schemas} /></>;
}
