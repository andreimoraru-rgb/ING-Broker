type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    posthog?: { capture: (event: string, properties?: AnalyticsParams) => void };
  }
}

export const trackEvent = (event: string, params: AnalyticsParams = {}) => {
  window.gtag?.('event', event, params);
  window.posthog?.capture(event, params);
};

export const installContactTracking = () => {
  const handler = (event: MouseEvent) => {
    const anchor = (event.target as Element | null)?.closest('a');
    const href = anchor?.getAttribute('href') || '';
    const page_path = window.location.pathname;

    if (href.startsWith('tel:')) {
      trackEvent('phone_click', { page_path, contact_destination: href.replace('tel:', '') });
    } else if (href.startsWith('mailto:')) {
      trackEvent('email_click', { page_path, contact_destination: href.replace('mailto:', '') });
    } else if (href.includes('wa.me') || href.includes('whatsapp')) {
      trackEvent('whatsapp_click', { page_path });
    }
  };

  document.addEventListener('click', handler);
  return () => document.removeEventListener('click', handler);
};
