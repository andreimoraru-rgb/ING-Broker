import { mkdirSync, writeFileSync, existsSync, readFileSync, lstatSync, readdirSync, unlinkSync } from 'node:fs';
import { resolve, relative, sep, isAbsolute } from 'node:path';
import { articles, consolidatedLifeSlugs, withdrawnArticleSlugs, type Article } from '../src/data/articles';
import { loadEditorialRelease, isExactApprovedPayload } from './editorial-release-gate';

interface GenerationOptions {
  root?: string;
  catalog?: Record<string, Article[]>;
  log?: (message: string) => void;
}

function optionalStat(path: string) {
  try { return lstatSync(path); }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return undefined;
    throw error;
  }
}

// Inspect existing ancestors without following junctions or symbolic links.
function validateDirectory(root: string, directory: string) {
  const rel = relative(root, directory);
  if (rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel)) {
    throw new Error(`Generated directory escaped the project: ${directory}`);
  }
  let current = root;
  for (const part of ['', ...rel.split(sep).filter(Boolean)]) {
    if (part) current = resolve(current, part);
    const stat = optionalStat(current);
    if (!stat) continue;
    if (stat.isSymbolicLink() || !stat.isDirectory()) {
      throw new Error(`Unsafe generated directory: ${current}`);
    }
  }
}

// Full article bodies are separate lazy modules. Only reviewed translations enter
// the approved set; unfinished locale pages retain their previous runtime content.
export function prepareArticleData(options: GenerationOptions = {}) {
  const root = resolve(options.root ?? process.cwd());
  const catalog = options.catalog ?? articles;
  const editorialRelease = loadEditorialRelease(root);
  const release: unknown = JSON.parse(readFileSync(resolve(root, 'src/data/translation-release.json'), 'utf8'));
  if (!Array.isArray(release) || !release.every(key => typeof key === 'string')) {
    throw new Error('Translation release must be an array of locale/slug strings');
  }
  const released = new Set<string>(release);
  const metadata: Record<string, Article[]> = {};
  const heldTranslations: string[] = [];
  const writes = new Map<string, string>();
  const generatedDirectories = ['article-content-published', 'article-content-legacy']
    .flatMap(bucket => ['ro', 'ru', 'en'].map(lang => resolve(root, `src/data/${bucket}/${lang}`)));
  for (const [lang, list] of Object.entries(catalog)) {
    if (!['ro', 'ru', 'en'].includes(lang)) throw new Error(`Unsupported article locale: ${lang}`);
    metadata[lang] = list.map(article => {
      if (!article.slug || article.slug === '.' || article.slug === '..' || /[\\/\x00<>:"|?*]|[. ]$/.test(article.slug)) {
        throw new Error(`Unsafe article slug: ${article.slug}`);
      }
      const path = resolve(root, `src/data/article-content/${lang}/${article.slug}.json`);
      let override = lang === 'ro' ? article : released.has(`${lang}/${article.slug}`) && existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null;
      if (lang !== 'ro' && override) {
        const original = catalog.ro.find(a => a.slug === article.slug);
        if (!original) throw new Error(`Missing Romanian article: ${article.slug}`);
        const words = String(override.content || '').replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length;
        const headings = (String(override.content || '').match(/<h2\b/gi) || []).length;
        // The word threshold is the owner's editorial acceptance criterion,
        // not a claim about Google's ranking algorithm. Hold incomplete drafts.
        const exactApprovedRelease = isExactApprovedPayload(editorialRelease, `${lang}/${article.slug}`, article.id, override);
        if (override.reviewStatus !== 'approved' || (!exactApprovedRelease && (words < 1500 || headings < (original.content.match(/<h2\b/gi) || []).length)) || /[\u2013\u2014]/.test(JSON.stringify(override))) {
          heldTranslations.push(`${lang}/${article.slug}`);
          override = null;
        }
      }
      // Equivalent locale pages use the individually reviewed photograph for
      // the same Romanian topic, not the old generic locale thumbnail.
      const media = lang === 'ro' ? article : catalog.ro.find(a => a.slug === article.slug) || article;
      const resolved: Article = { ...article, ...override, id: article.id, slug: article.slug, image: media.image, heroImage: media.heroImage, date: article.date, preserveLegacyLayout: lang === 'ro' ? article.preserveLegacyLayout : true };
      const bucket = override ? 'article-content-published' : 'article-content-legacy';
      const target = resolve(root, `src/data/${bucket}/${lang}/${article.slug}.json`);
      if (writes.has(target)) throw new Error(`Duplicate generated article: ${lang}/${article.slug}`);
      writes.set(target, JSON.stringify(resolved));
      return { ...resolved, content: '' };
    });
  }
  // Resolve all input and validate all deletion targets before writing anything.
  // Never sweep article-content: it contains the preserved editorial sources.
  const stale: string[] = [];
  for (const directory of generatedDirectories) {
    validateDirectory(root, directory);
    if (!existsSync(directory)) continue;
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.isSymbolicLink()) throw new Error(`Unsafe generated entry: ${resolve(directory, entry.name)}`);
      if (!entry.name.endsWith('.json')) continue;
      if (!entry.isFile()) throw new Error(`Unexpected generated JSON entry: ${entry.name}`);
      const file = resolve(directory, entry.name);
      if (relative(directory, file) !== entry.name) throw new Error(`Unsafe generated file: ${file}`);
      if (!writes.has(file)) stale.push(file);
    }
  }
  const metadataPath = resolve(root, 'src/data/articleMetadata.ts');
  validateDirectory(root, resolve(root, 'src/data'));
  const metadataStat = optionalStat(metadataPath);
  if (metadataStat && (metadataStat.isSymbolicLink() || !metadataStat.isFile())) {
    throw new Error(`Unsafe metadata output: ${metadataPath}`);
  }
  for (const directory of generatedDirectories) mkdirSync(directory, { recursive: true });
  for (const [file, json] of writes) writeFileSync(file, json);
  for (const file of stale) unlinkSync(file);
  (options.log ?? console.log)(JSON.stringify({ heldTranslations, approvedTranslations: Object.entries(metadata).filter(([lang]) => lang !== 'ro').flatMap(([, list]) => list.filter(a => a.reviewStatus === 'approved')).length }));
  writeFileSync(metadataPath, `// Generated by the sitemap/build preflight. Do not hand-edit.\nimport type { Article } from './articles';\nexport const articles: Record<string, Article[]> = ${JSON.stringify(metadata)};\nexport const consolidatedLifeSlugs = new Set<string>(${JSON.stringify([...consolidatedLifeSlugs])});\nexport const withdrawnArticleSlugs = new Set<string>(${JSON.stringify([...withdrawnArticleSlugs])});\n`);
  return metadata;
}
