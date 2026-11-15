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
