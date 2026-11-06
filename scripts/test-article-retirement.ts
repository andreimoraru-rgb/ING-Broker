import assert from 'node:assert/strict';
import { articles, consolidatedLifeSlugs, withdrawnArticleSlugs } from '../src/data/articles';
import { onRequest } from '../functions/[[path]]';
import { localizedPath } from '../src/utils/localizedRoutes';
let redirects = 0, retired = 0;
for (const lang of ['ro','ru','en'] as const) {
  assert.equal(articles[lang].filter(a=>a.slug.startsWith('asigurare-viata-')).length, 1);
  for (const slug of [...consolidatedLifeSlugs, ...withdrawnArticleSlugs]) {
    assert.ok(!articles[lang].some(a=>a.slug===slug));
    for (const suffix of ['', '/']) {
      const response = await onRequest({request:new Request(`https://www.ingbroker.md${localizedPath('/news/'+slug,lang)}${suffix}`),env:{ASSETS:{fetch:async()=>{throw new Error('Retired article must not return the app shell');}}}});
      if (consolidatedLifeSlugs.has(slug)) {
        assert.equal(response.status,301);
        assert.equal(response.headers.get('Location'),`https://www.ingbroker.md${localizedPath('/news/asigurare-viata-moldova',lang)}`);
        redirects++;
      } else {
        assert.equal(response.status,410);
        assert.equal(response.headers.get('X-Robots-Tag'),'noindex');
        retired++;
      }
    }
  }
}
console.log(JSON.stringify({passed:true,lifeTopicsConsolidated:consolidatedLifeSlugs.size,withdrawnTopics:withdrawnArticleSlugs.size,redirectChecks:redirects,withdrawalChecks:retired,remainingRoArticles:articles.ro.length}));
