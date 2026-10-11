type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    posthog?: { capture: (event: string, properties?: AnalyticsParams) => void };
  }
}

export const trackEvent = (event: string, params: AnalyticsParams = {}) => {
  window.gtag?.('event', event, { ...params, transport_type: 'beacon' });
  window.posthog?.capture(event, params);
};

const posthogKey = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const posthogHost = (import.meta.env.VITE_POSTHOG_HOST as string | undefined) || 'https://eu.i.posthog.com';

export const installPostHog = () => {
  if (!posthogKey || window.posthog) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `${posthogHost}/static/array.js`;
  script.onload = () => {
    const queue: unknown[][] = [];
    const posthog = {
      capture: (event: string, properties?: AnalyticsParams) => queue.push(['capture', event, properties]),
      init: (...args: unknown[]) => queue.push(['init', ...args]),
      _q: queue,
    };

    window.posthog = posthog;
    posthog.init(posthogKey, {
      api_host: posthogHost,
      ui_host: 'https://eu.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
    });
  };
  document.head.appendChild(script);
};

export const installContactTracking = () => {
  const handler = (event: MouseEvent) => {
    const anchor = (event.target as Element | null)?.closest('a');
    const href = anchor?.getAttribute('href') || '';
    const page_path = window.location.pathname;

    if (href.startsWith('tel:')) {
      trackEvent('phone_click', { page_path, contact_channel: 'phone' });
    } else if (href.startsWith('mailto:')) {
      trackEvent('email_click', { page_path, contact_channel: 'email' });
    } else if (href.includes('wa.me') || href.includes('whatsapp')) {
      trackEvent('whatsapp_click', { page_path, contact_channel: 'whatsapp' });
    }
  };

  document.addEventListener('click', handler);
  return () => document.removeEventListener('click', handler);
};
