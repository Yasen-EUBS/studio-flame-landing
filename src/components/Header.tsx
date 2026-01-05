import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoFlame from '@/assets/logo-flame.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.services', href: '#services' },
    { key: 'nav.team', href: '#team' },
    { key: 'nav.location', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-flame flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.img
            src={logoFlame}
            alt="Studio Flame Logo - Barber Shop Sofia Lozenets"
            className="h-10 w-10 object-contain rounded"
            loading="lazy"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <span className="font-heading text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors">
            STUDIO FLAME
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {t(item.key)}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-border">
            <button
              onClick={() => setLanguage('bg')}
              className={`px-2 py-1 text-xs font-bold rounded transition-all ${
                language === 'bg'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              BG
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-bold rounded transition-all ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://www.fresha.com/bg/a/studio-flame-sofia-ulitsa-gorski-patnik-40a-u7vdovzq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame text-sm py-2 px-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.book')}
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <nav className="container-flame py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}

              <div className="flex items-center gap-2 py-2">
                <span className="text-sm text-muted-foreground">Език:</span>
                <button
                  onClick={() => setLanguage('bg')}
                  className={`px-3 py-1 text-sm font-bold rounded ${
                    language === 'bg' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                  }`}
                >
                  BG
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm font-bold rounded ${
                    language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                  }`}
                >
                  EN
                </button>
              </div>

              <motion.a
                href="https://www.fresha.com/bg/a/studio-flame-sofia-ulitsa-gorski-patnik-40a-u7vdovzq"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flame text-center mt-2"
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.book')}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
