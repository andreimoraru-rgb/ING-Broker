import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { installPostHog } from './utils/analytics';
import { preloadArticlePath } from './data/articleLoader';

installPostHog();
// Keep server-rendered article text in place while its small body module loads.
async function boot() {
await preloadArticlePath(window.location.pathname);

// Static article metadata serves non-JS readers. React owns it after boot.
document.head.querySelectorAll('[data-editorial-ssg]').forEach(node => node.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
);
}
boot().catch(error => console.error('Article startup failed; existing HTML retained.', error));
