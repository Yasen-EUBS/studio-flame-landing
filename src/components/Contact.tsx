import { motion } from 'framer-motion';
import { MapPin, Clock, Instagram, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="container-flame">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-foreground mb-4">{t('contact.title')}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden glass-card h-[400px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5647193547!2d23.3071!3d42.6731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQwJzIzLjIiTiAyM8KwMTgnMjUuNiJF!5e0!3m2!1sen!2sbg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Flame Location"
              className="grayscale contrast-125 brightness-75"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Address */}
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1 uppercase tracking-wide">
                  {t('contact.address')}
                </h3>
                <p className="text-muted-foreground">
                  Lozenets, Sofia, Bulgaria
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3 uppercase tracking-wide">
                  {t('contact.hours.title')}
                </h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>{t('contact.hours.weekdays')}</p>
                  <p>{t('contact.hours.saturday')}</p>
                  <p className="text-primary/70">{t('contact.hours.sunday')}</p>
                </div>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="glass-card p-6">
              <h3 className="font-heading text-xl text-foreground mb-4 uppercase tracking-wide">
                Social
              </h3>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://instagram.com/studioflame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="tel:+359888888888"
                  className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
