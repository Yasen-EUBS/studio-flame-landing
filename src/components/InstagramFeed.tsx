import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const InstagramFeed = () => {
  const { t } = useLanguage();

  // Placeholder images for Instagram feed
  const feedImages = [
    { id: 1, placeholder: 'Haircut Style 1' },
    { id: 2, placeholder: 'Beard Trim' },
    { id: 3, placeholder: 'Shop Interior' },
    { id: 4, placeholder: 'Haircut Style 2' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden industrial-bg">
      <div className="container-flame relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="section-title text-foreground">{t('instagram.title')}</h2>
          </div>
          <a
            href="https://www.instagram.com/flame.studiol/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
          >
            {t('instagram.handle')}
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <a
          href="https://www.instagram.com/flame.studiol/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {feedImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative aspect-square service-card overflow-hidden group cursor-pointer p-0"
                variants={itemVariants}
              >
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-medium">
                    {image.placeholder}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Instagram className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    <span className="text-primary-foreground font-medium text-sm">
                      @flame.studiol
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </a>

        {/* Follow CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/flame.studiol/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame-outline inline-flex items-center gap-2"
          >
            <Instagram size={20} />
            <span>Follow @flame.studiol</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
