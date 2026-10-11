import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { installPostHog } from './utils/analytics';

installPostHog();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
);
