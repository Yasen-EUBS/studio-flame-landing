import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'bg' | 'en';

interface Translations {
  [key: string]: {
    bg: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.services': { bg: 'Услуги', en: 'Services' },
  'nav.team': { bg: 'Екип', en: 'Team' },
  'nav.location': { bg: 'Локация', en: 'Location' },
  'nav.book': { bg: 'Запази час', en: 'Book Now' },
  
  // Hero
  'hero.title': { bg: 'Studio Flame', en: 'Studio Flame' },
  'hero.subtitle': { bg: 'Където детайлът е закон.', en: 'Where detail is law.' },
  'hero.description': { bg: 'Професионално бръснарство в сърцето на Лозенец.', en: 'Professional barbering in the heart of Lozenets.' },
  'hero.cta': { bg: 'Запази час', en: 'Book Now' },
  
  // Services
  'services.title': { bg: 'Нашите услуги', en: 'Our Services' },
  'services.subtitle': { bg: 'Професионално обслужване с внимание към детайла', en: 'Professional service with attention to detail' },
  'services.haircuts': { bg: 'Подстригване', en: 'Haircuts' },
  'services.beard': { bg: 'Брада', en: 'Beard' },
  'services.combos': { bg: 'Комбо', en: 'Combos' },
  'services.haircut.classic': { bg: 'Класическо подстригване', en: 'Classic Haircut' },
  'services.haircut.fade': { bg: 'Fade подстригване', en: 'Fade Haircut' },
  'services.haircut.kids': { bg: 'Детско подстригване', en: 'Kids Haircut' },
  'services.beard.trim': { bg: 'Оформяне на брада', en: 'Beard Trim' },
  'services.beard.shave': { bg: 'Бръснене с нож', en: 'Hot Towel Shave' },
  'services.combo.full': { bg: 'Подстригване + Брада', en: 'Haircut + Beard' },
  'services.combo.deluxe': { bg: 'Делукс пакет', en: 'Deluxe Package' },
  'services.from': { bg: 'от', en: 'from' },
  'services.currency': { bg: 'лв.', en: 'BGN' },
  
  // Team
  'team.title': { bg: 'Нашият отбор', en: 'Our Team' },
  'team.subtitle': { bg: 'Майстори на занаята', en: 'Masters of the craft' },
  
  // Booking CTA
  'booking.title': { bg: 'Готов за промяна?', en: 'Ready for a change?' },
  'booking.subtitle': { bg: 'Запази своя час и изживей Studio Flame опита', en: 'Book your appointment and experience the Studio Flame treatment' },
  'booking.cta': { bg: 'Запази час през Fresha', en: 'Book via Fresha' },
  
  // Contact
  'contact.title': { bg: 'Намери ни', en: 'Find Us' },
  'contact.address': { bg: 'ул. Горски Пътник 40А, София', en: '40A Gorski Patnik St, Sofia' },
  'contact.hours.title': { bg: 'Работно време', en: 'Working Hours' },
  'contact.hours.weekdays': { bg: 'Пон - Пет: 10:00 - 20:00', en: 'Mon - Fri: 10:00 - 20:00' },
  'contact.hours.saturday': { bg: 'Събота: 10:00 - 18:00', en: 'Saturday: 10:00 - 18:00' },
  'contact.hours.sunday': { bg: 'Неделя: Почивен ден', en: 'Sunday: Closed' },
  
  // Footer
  'footer.rights': { bg: 'Всички права запазени.', en: 'All rights reserved.' },
  'footer.address': { bg: 'ул. Горски Пътник 40А, Лозенец, София', en: '40A Gorski Patnik St, Lozenets, Sofia' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bg');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
