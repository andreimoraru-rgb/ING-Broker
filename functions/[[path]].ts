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

const spaRoutePrefixes = ['/product/', '/business/', '/oferte/', '/news/', '/servicii/'];

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

  if (isSpaRoute(url.pathname)) {
    return context.env.ASSETS.fetch(assetRequest(context.request, '/index.html'));
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
