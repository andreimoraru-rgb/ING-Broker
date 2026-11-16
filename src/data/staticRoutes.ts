// Explicit real routes, shared by rendering and the edge handler. No wildcard
// /servicii/ fallback: unknown product pages must return a genuine 404.
export const serviceRoutes = [
  '/servicii/asigurari-constructii-car-ear',
  '/servicii/asigurari-corporative-moldova',
  '/servicii/asigurare-raspundere-profesionala',
  '/servicii/asigurare-cyber-moldova',
];
export const renderedRoutes = [
  '/business', '/news', '/contact',
  '/servicii/asigurare-raspundere-profesionala', '/servicii/asigurare-cyber-moldova',
];

// These existing commercial pages have been reviewed in Romanian. Do not
// declare their hardcoded or partial locale variants equivalent by prerendering.
export const additionalRoRenderedRoutes = [
  '/business/transport-logistica', '/reinsurance', '/construction-shield',
  '/renewable-energy', '/property-assets', '/oferte',
  '/servicii/asigurari-constructii-car-ear', '/servicii/asigurari-corporative-moldova',
  '/business/liability', '/business/professional',
  '/business/do', '/business/cyber', '/business/cargo', '/business/fleet',
  '/business/credit', '/business/construction', '/business/benefits',
  '/business/agriculture',
];

export const businessRouteAliases: Record<string, string> = {
  '/business/property': '/property-assets',
  '/business/renewable': '/renewable-energy',
};

export function renderedRoutesFor(lang: string) {
  return lang === 'ro' ? [...renderedRoutes, ...additionalRoRenderedRoutes] : renderedRoutes;
}
