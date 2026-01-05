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
  'hero.h1': { bg: 'Бръснарница София Лозенец', en: 'Barber Shop Sofia Lozenets' },
  'hero.subtitle': { bg: "You ain't ugly, you just need the right cut", en: "You ain't ugly, you just need the right cut" },
  'hero.description': { bg: 'Професионално бръснарство в сърцето на Лозенец.', en: 'Professional barbering in the heart of Lozenets.' },
  'hero.cta': { bg: 'Запази час', en: 'Book Now' },
  
  // About
  'about.title': { bg: 'За нас', en: 'About Us' },
  'about.text': { 
    bg: 'Studio Flame е мястото в сърцето на Лозенец, където съчетаваме street културата с безкомпромисно качество. Нашите Senior Barbers Николай и Ангел се грижат за твоя стил с внимание към всеки детайл.', 
    en: 'Studio Flame is the place in the heart of Lozenets where we combine street culture with uncompromising quality. Our Senior Barbers Nikolay and Angel take care of your style with attention to every detail.' 
  },
  
  // Services
  'services.title': { bg: 'Нашите услуги', en: 'Our Services' },
  'services.subtitle': { bg: 'Професионално обслужване с внимание към детайла', en: 'Professional service with attention to detail' },
  'services.mens_haircut': { bg: 'Мъжко подстригване', en: "Men's Haircut" },
  'services.beard_trim': { bg: 'Оформяне на брада', en: 'Beard Trim' },
  'services.combo': { bg: 'Комбо (Коса + Брада)', en: 'Combo (Hair + Beard)' },
  'services.father_son': { bg: 'Баща и Син', en: 'Father & Son' },
  'services.currency': { bg: '€', en: '€' },
  
  // Team
  'team.title': { bg: 'Нашият отбор', en: 'Our Team' },
  'team.subtitle': { bg: 'Майстори на занаята', en: 'Masters of the craft' },
  
  // Booking CTA
  'booking.title': { bg: 'Готов за промяна?', en: 'Ready for a change?' },
  'booking.subtitle': { bg: 'Запази своя час и изживей Studio Flame опита', en: 'Book your appointment and experience the Studio Flame treatment' },
  'booking.cta': { bg: 'Запази час през Fresha', en: 'Book via Fresha' },
  
  // Instagram
  'instagram.title': { bg: 'Последвай ни в Instagram', en: 'Follow us on Instagram' },
  'instagram.handle': { bg: '@flame.studiol', en: '@flame.studiol' },
  
  // Contact
  'contact.title': { bg: 'Намери ни', en: 'Find Us' },
  'contact.address': { bg: 'ул. "Горски пътник" 40А, 1421 ж.к. Лозенец, София', en: 'ul. "Gorski patnik" 40A, 1421 Lozenets, Sofia' },
  'contact.hours.title': { bg: 'Работно време', en: 'Working Hours' },
  'contact.hours.weekdays': { bg: 'Пон - Пет: 10:00 - 20:00', en: 'Mon - Fri: 10:00 - 20:00' },
  'contact.hours.saturday': { bg: 'Събота: 10:00 - 18:00', en: 'Saturday: 10:00 - 18:00' },
  'contact.hours.sunday': { bg: 'Неделя: Почивен ден', en: 'Sunday: Closed' },
  'contact.directions': { bg: 'Упътване', en: 'Get Directions' },
  
  // Footer
  'footer.rights': { bg: 'Всички права запазени.', en: 'All rights reserved.' },
  'footer.address': { bg: 'ул. Горски Пътник 40А, Лозенец, София', en: '40A Gorski Patnik St, Lozenets, Sofia' },
  'footer.description': { 
    bg: 'Studio Flame - Професионално бръснарство в Лозенец, София. Подстригване, оформяне на брада и street култура.', 
    en: 'Studio Flame - Professional barbering in Lozenets, Sofia. Haircuts, beard styling and street culture.' 
  },
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
