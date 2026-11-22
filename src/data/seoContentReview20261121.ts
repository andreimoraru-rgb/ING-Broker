import type { ArticleRevision } from './recoveredArticles';

// Individual Romanian revisions. Existing IDs, H1, intro, layout and locale
// releases are retained. This branch is a review candidate, not a release log.

type Review = Pick<ArticleRevision, 'body' | 'seoTitle' | 'seoDescription' | 'sources'> & Pick<Partial<ArticleRevision>, 'title'>;
export const seoContentReview20261121: Record<string, Review> = {
};

export function applySeoContentReview20261121(revisions: Record<string, ArticleRevision>) {
  for (const [slug, update] of Object.entries(seoContentReview20261121)) {
    if (!revisions[slug]) throw new Error(`Missing existing article: ${slug}`);
    Object.assign(revisions[slug], update, { updatedAt: '2026-11-21', sourcesCheckedAt: '21 noiembrie 2026' });
  }
}
