import { articles, consolidatedLifeSlugs, withdrawnArticleSlugs } from '../src/data/articleMetadata';
import { splitLocale, localizedPath } from '../src/utils/localizedRoutes';
import { renderedRoutesFor, additionalRoRenderedRoutes, serviceRoutes, businessRouteAliases } from '../src/data/staticRoutes';

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

interface PagesContext {
  request: Request;
  env: Env;
}

const exactSpaRoutes = new Set([
  '/',
  '/business',
  '/reinsurance',
  '/construction-shield',
  '/oferte',
  '/news',
  '/contact',
  '/despre-noi',
  '/o-nas',
  '/about-us',
  '/termeni-si-conditii',
  '/politica-de-confidentialitate',
  '/renewable-energy',
  '/property-assets',
]);

const spaRoutePrefixes = ['/product/', '/business/', '/oferte/'];

function isSpaRoute(pathname: string): boolean {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return exactSpaRoutes.has(normalized) || serviceRoutes.includes(normalized) || spaRoutePrefixes.some((prefix) => pathname.startsWith(prefix));
}

function assetRequest(request: Request, pathname: string): Request {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url.toString(), request);
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const url = new URL(context.request.url);
  const originalUrl = url.toString();
  if (['ingbroker.md', 'www.ingbroker.md'].includes(url.hostname)) {
    url.hostname = 'www.ingbroker.md';
    url.protocol = 'https:';
  }
  const { path: routePath, lang } = splitLocale(url.pathname);
  const aboutAliases: Record<string, string> = { '/o-nas': '/ru/despre-noi', '/about-us': '/en/despre-noi' };
  if (aboutAliases[url.pathname.replace(/\/$/, '')]) {
    url.pathname = aboutAliases[url.pathname.replace(/\/$/, '')];
  }
  const normalizedRoute = routePath.replace(/\/$/, '');
  if (businessRouteAliases[normalizedRoute]) url.pathname = localizedPath(businessRouteAliases[normalizedRoute], lang);
  let canonicalSlug = '';
  try { if (normalizedRoute.startsWith('/news/')) canonicalSlug = decodeURIComponent(normalizedRoute.slice(6)); } catch { /* handled below */ }
  if (consolidatedLifeSlugs.has(canonicalSlug)) url.pathname = localizedPath('/news/asigurare-viata-moldova', lang);
  else if (url.pathname.endsWith('/') && url.pathname !== '/' && (renderedRoutesFor(lang).includes(normalizedRoute) || serviceRoutes.includes(normalizedRoute) || articles[lang].some(a => a.slug === canonicalSlug))) url.pathname = url.pathname.slice(0, -1);
  if (url.toString() !== originalUrl) return Response.redirect(url.toString(), 301);

  // Internal build artifacts are served only at their canonical article URLs.
  if (/^\/_(?:editorial|pages)\//.test(url.pathname)) return new Response('Not found', { status: 404 });
  // Keep the production security closure explicit even if ASSETS uses SPA fallback.
  if (['/ai-studio', '/admin/ai-tools'].includes(routePath.replace(/\/$/, ''))) return new Response('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
  let articleSlug: string;
  try { articleSlug = decodeURIComponent(routePath.replace(/\/$/, '').slice('/news/'.length)); }
  catch { return new Response('Not found', { status: 404 }); }
  if (routePath.startsWith('/news/') && consolidatedLifeSlugs.has(articleSlug)) {
    url.pathname = localizedPath('/news/asigurare-viata-moldova', lang);
    return Response.redirect(url.toString(), 301);
  }
  if (routePath.startsWith('/news/') && withdrawnArticleSlugs.has(articleSlug)) {
    return new Response(lang === 'ro' ? 'Acest articol a fost retras.' : lang === 'ru' ? 'Эта статья снята с публикации.' : 'This article has been withdrawn.', {
      status: 410, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    });
  }
  if (routePath.startsWith('/news/') && articles[lang].some(article => article.slug === articleSlug)) {
    if (url.pathname.endsWith('/')) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }
    const article = articles[lang].find(item => item.slug === articleSlug)!;
    // Do not expand static publication to unreviewed legacy content.
    const destination = article.reviewStatus === 'approved' ? `/_editorial/${lang === 'ro' ? '' : lang + '/'}${articleSlug}` : '/';
    return context.env.ASSETS.fetch(assetRequest(context.request, destination));
  }

  // Unknown article slugs must not return the homepage shell with HTTP 200.
  if (routePath.startsWith('/news/')) return new Response('Articolul nu a fost găsit.', {
    status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  });
  if (routePath.startsWith('/servicii/') && !serviceRoutes.includes(routePath.replace(/\/$/, ''))) {
    return new Response('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
  }
  if (routePath.startsWith('/business/') && !additionalRoRenderedRoutes.includes(routePath.replace(/\/$/, ''))) {
    return new Response('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
  }

  const normalizedPath = routePath.length > 1 ? routePath.replace(/\/$/, '') : routePath;
  if (renderedRoutesFor(lang).includes(normalizedPath)) {
    if (url.pathname.endsWith('/')) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }
    let suffix = '';
    if (normalizedPath === '/news') {
      const pages = Math.ceil(articles[lang].length / 9);
      const page = Math.min(pages, Math.max(1, parseInt(url.searchParams.get('page') || '1', 10) || 1));
      suffix = page > 1 ? `/page-${page}` : '';
    }
    const response = await context.env.ASSETS.fetch(assetRequest(context.request, `/_pages/${lang}${normalizedPath}${suffix}`));
    if (url.searchParams.has('q') || url.searchParams.has('category')) {
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex, follow');
      return new Response(response.body, { status: response.status, headers });
    }
    return response;
  }

  if (isSpaRoute(routePath)) {
    // Fetch the root document because Cloudflare canonically redirects
    // /index.html to /. The ASSETS binding bypasses this Function.
    return context.env.ASSETS.fetch(assetRequest(context.request, '/'));
  }

  const asset = await context.env.ASSETS.fetch(context.request);
  if (asset.status !== 404) {
    return asset;
  }

  const notFound = await context.env.ASSETS.fetch(assetRequest(context.request, '/404.html'));
  return new Response(notFound.body, {
    status: 404,
    headers: notFound.headers,
  });
}
