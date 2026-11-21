import { useLocation } from 'react-router-dom';
import type { Language } from '../translations';
import { relatedResources, type ResourceTopic } from '../data/relatedResources';

export function RelatedResources({ lang, topic }: { lang: Language; topic: ResourceTopic }) {
  const { pathname } = useLocation();
  // These links connect the reviewed Romanian commercial and editorial pages.
  if (lang !== 'ro') return null;
  const links = relatedResources[topic].filter(link => link.path !== pathname);
  return (
    <section className="max-w-7xl mx-auto px-6 py-10" aria-label="Pagini utile pentru această analiză">
      <h2 className="text-2xl font-bold text-secondary mb-5">Pagini utile pentru această analiză</h2>
      <ul className="space-y-3 text-base leading-relaxed">
        {links.map(link => (
          <li key={link.path}>
            <a href={link.path} className="text-primary underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4">{link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
