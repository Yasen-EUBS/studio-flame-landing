import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import logoFlame from '@/assets/logo-flame.jpg';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-charcoal-deep">
      <div className="container-flame">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <motion.img
              src={logoFlame}
              alt="Studio Flame"
              className="h-8 w-8 object-contain rounded"
              whileHover={{ rotate: 10 }}
            />
            <span className="font-heading text-xl tracking-wider text-foreground">
              STUDIO FLAME
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.services')}
            </a>
            <a
              href="#team"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.team')}
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.location')}
            </a>
            <a
              href="https://www.fresha.com/bg/a/studio-flame-sofia-ulitsa-gorski-patnik-40a-u7vdovzq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-flame-glow transition-colors"
            >
              {t('nav.book')}
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Studio Flame. {t('footer.rights')}
          </p>
          <p>{t('footer.address')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
