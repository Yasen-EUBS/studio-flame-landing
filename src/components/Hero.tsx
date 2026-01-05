import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Studio Flame Interior - Barber Shop Sofia Lozenets"
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Flame Glow Effect */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'var(--gradient-radial-flame)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Geometric Lines (Street Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-primary/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-px h-60 bg-gradient-to-b from-primary/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-32 h-px bg-gradient-to-r from-primary/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-flame text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* SEO H1 */}
          <motion.h1
            className="sr-only"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {t('hero.h1')}
          </motion.h1>
          
          <motion.span
            className="text-primary font-medium uppercase tracking-[0.3em] text-sm md:text-base block mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.h1')}
          </motion.span>
          
          {/* Main Title */}
          <motion.div
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-hidden="true"
          >
            <span className="text-foreground">{t('hero.title').split(' ')[0]}</span>
            <br />
            <span className="text-gradient-flame">{t('hero.title').split(' ')[1]}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-heading text-xl sm:text-2xl md:text-3xl text-primary uppercase tracking-widest mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="https://www.fresha.com/bg/a/studio-flame-sofia-ulitsa-gorski-patnik-40a-u7vdovzq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame inline-block animate-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
