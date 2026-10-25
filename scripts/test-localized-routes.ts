import assert from 'node:assert/strict';
import { onRequest } from '../functions/[[path]]';
import { splitLocale, localizedPath } from '../src/utils/localizedRoutes';

for (const lang of ['ro', 'ru', 'en'] as const) {
  for (const path of ['/', '/business', '/despre-noi', '/news', '/contact']) {
    const urlPath = localizedPath(path, lang);
    assert.equal(splitLocale(urlPath).lang, lang);
    assert.equal(splitLocale(urlPath).path, path);
    const response = await onRequest({ request: new Request(`https://www.ingbroker.md${urlPath}`), env: { ASSETS: { fetch: async req => new Response(new URL(req.url).pathname === '/' ? 'SPA' : 'missing', {status: new URL(req.url).pathname === '/' ? 200 : 404}) } } });
    assert.equal(response.status, 200, urlPath);
  }
  const response = await onRequest({ request: new Request(`https://www.ingbroker.md${localizedPath('/definitely-not-a-real-route', lang)}`), env: {ASSETS: {fetch: async () => new Response('missing', {status:404})}} });
  assert.equal(response.status, 404);
}
assert.equal(localizedPath('/ru/business', 'en'), '/en/business');
assert.equal(localizedPath('/o-nas', 'ru'), '/ru/despre-noi');
assert.equal(localizedPath('/en/', 'ro'), '/');
console.log('PASS: 15 localized routes, 3 real 404 controls, locale switching and about alias mapping.');
