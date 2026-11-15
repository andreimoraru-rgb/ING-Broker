import type { Article } from './articles';
import { articles } from './articleMetadata';
const bodies = { ...import.meta.glob('./article-content-published/*/*.json'), ...import.meta.glob('./article-content-legacy/*/*.json') };
const cache = new Map<string, Partial<Article>>();
export const articleKey = (lang: string, slug: string) => `${lang}/${slug}`;
export function cachedArticle(lang: string, article: Article): Article {
  return { ...article, ...cache.get(articleKey(lang, article.slug)), id: article.id, slug: article.slug, image: article.image, heroImage: article.heroImage, preserveLegacyLayout: article.preserveLegacyLayout };
}
export async function preloadArticle(lang: string, slug: string) {
  const key = articleKey(lang, slug);
  if (cache.has(key)) return;
  const reviewed = articles[lang]?.some(a => a.slug === slug && a.reviewStatus === 'approved');
  const load = reviewed ? bodies[`./article-content-published/${lang}/${slug}.json`] : bodies[`./article-content-legacy/${lang}/${slug}.json`];
  if (!load) return;
  const module = await load() as { default: Partial<Article> };
  cache.set(key, module.default);
}
export async function preloadArticlePath(path: string) {
  const match = path.match(/^\/(?:((?:ru|en))\/)?news\/([^/?#]+)\/?(?:[?#].*)?$/);
  if (match) await preloadArticle(match[1] || 'ro', decodeURIComponent(match[2]));
}
