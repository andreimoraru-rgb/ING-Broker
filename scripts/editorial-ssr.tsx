import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '../src/context/LanguageContext';
import App from '../src/App';
import { splitLocale } from '../src/utils/localizedRoutes';

export function render(path: string) {
  return renderToString(<HelmetProvider><LanguageProvider initialLang={splitLocale(path).lang}><App initialPath={path} /></LanguageProvider></HelmetProvider>);
}
