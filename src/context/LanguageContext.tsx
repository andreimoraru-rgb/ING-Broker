import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../translations';
import { splitLocale } from '../utils/localizedRoutes';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; initialLang?: Language }> = ({ children, initialLang }) => {
  const [lang, setLang] = useState<Language>(() => initialLang || (typeof window === 'undefined' ? 'ro' : splitLocale(window.location.pathname).lang));
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
