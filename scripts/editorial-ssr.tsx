import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '../src/context/LanguageContext';
import App from '../src/App';
import { splitLocale } from '../src/utils/localizedRoutes';
import { preloadArticlePath } from '../src/data/articleLoader';

export async function render(path: string) {
  await preloadArticlePath(path);
  return renderToString(<HelmetProvider><LanguageProvider initialLang={splitLocale(path).lang}><App initialPath={path} /></LanguageProvider></HelmetProvider>);
}
