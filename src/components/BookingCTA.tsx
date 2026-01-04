import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BookingCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0 bg-charcoal" />
      
      {/* Orange accent stripes (Industrial barrel inspired) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -left-20 top-1/4 w-40 h-1 bg-primary/30 rotate-45"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute -right-20 top-1/3 w-60 h-1 bg-primary/20 -rotate-45"
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute left-1/4 bottom-20 w-32 h-1 bg-primary/40 rotate-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-flame relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <Calendar className="w-10 h-10 text-primary" />
          </motion.div>

          {/* Title */}
          <h2 className="section-title text-foreground mb-6">
            {t('booking.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            {t('booking.subtitle')}
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://www.fresha.com/bg/a/studio-flame-sofia-ulitsa-gorski-patnik-40a-u7vdovzq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame inline-flex items-center gap-3 text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5" />
            {t('booking.cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
