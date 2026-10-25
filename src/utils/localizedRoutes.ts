import type { Language } from '../translations';

/** One URL convention shared by React, metadata and the Pages function. */
export function splitLocale(pathname: string): { lang: Language; path: string; basename: string } {
  const match = pathname.match(/^\/(ru|en)(?=\/|$)/);
  const lang = (match?.[1] || 'ro') as Language;
  return { lang, path: match ? pathname.slice(3) || '/' : pathname, basename: match ? `/${lang}` : '/' };
}

export function localizedPath(pathname: string, lang: Language): string {
  let path = splitLocale(pathname).path;
  if (['/despre-noi', '/o-nas', '/about-us'].includes(path.replace(/\/$/, ''))) path = '/despre-noi';
  return `${lang === 'ro' ? '' : `/${lang}`}${path}`;
}
