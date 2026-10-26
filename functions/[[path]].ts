import { articles } from '../src/data/articles';
import { splitLocale } from '../src/utils/localizedRoutes';

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
  '/admin/ai-tools',
  '/contact',
  '/ai-studio',
  '/despre-noi',
  '/o-nas',
  '/about-us',
  '/termeni-si-conditii',
  '/politica-de-confidentialitate',
  '/renewable-energy',
  '/property-assets',
]);

const spaRoutePrefixes = ['/product/', '/business/', '/oferte/', '/servicii/'];

function isSpaRoute(pathname: string): boolean {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return exactSpaRoutes.has(normalized) || spaRoutePrefixes.some((prefix) => pathname.startsWith(prefix));
}

function assetRequest(request: Request, pathname: string): Request {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url.toString(), request);
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const url = new URL(context.request.url);
  const { path: routePath, lang } = splitLocale(url.pathname);
  const aboutAliases: Record<string, string> = { '/o-nas': '/ru/despre-noi', '/about-us': '/en/despre-noi' };
  if (aboutAliases[url.pathname.replace(/\/$/, '')]) {
    url.pathname = aboutAliases[url.pathname.replace(/\/$/, '')];
    return Response.redirect(url.toString(), 301);
  }

  // Internal build artifacts are served only at their canonical article URLs.
  if (url.pathname.startsWith('/_editorial/')) return new Response('Not found', { status: 404 });
  let articleSlug: string;
  try { articleSlug = decodeURIComponent(routePath.replace(/\/$/, '').slice('/news/'.length)); }
  catch { return new Response('Not found', { status: 404 }); }
  if (routePath.startsWith('/news/') && articles[lang].some(article => article.slug === articleSlug)) {
    if (url.pathname.endsWith('/')) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }
    const article = articles[lang].find(item => item.slug === articleSlug)!;
    // Do not expand static publication to unreviewed legacy content.
    const destination = lang === 'ro' && article.reviewStatus === 'approved' ? `/_editorial/${articleSlug}` : '/';
    return context.env.ASSETS.fetch(assetRequest(context.request, destination));
  }

  // Unknown article slugs must not return the homepage shell with HTTP 200.
  if (routePath.startsWith('/news/')) return new Response('Articolul nu a fost găsit.', {
    status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  });

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
