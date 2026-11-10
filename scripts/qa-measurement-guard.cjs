// Install before the first navigation in every controlled browser QA context.
const blockedHosts = ['google-analytics.com','analytics.google.com','googletagmanager.com','doubleclick.net','googleadservices.com','googlesyndication.com','posthog.com','cloudflareinsights.com'];
function isMeasurementRequest(rawUrl) {
  const url = new URL(rawUrl);
  return blockedHosts.some(host => url.hostname === host || url.hostname.endsWith('.'+host)) || url.pathname === '/cdn-cgi/rum';
}
async function installMeasurementGuard(context) {
  await context.addInitScript(() => { window.__ING_ANALYTICS_QA__ = true; });
  await context.route('**/*', route => isMeasurementRequest(route.request().url()) ? route.abort() : route.continue());
}
module.exports = { installMeasurementGuard, isMeasurementRequest };
