import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FlameIcon, ComboIcon } from './FlameIcon';

interface Service {
  nameKey: string;
  price: string;
}

interface ServiceCategory {
  titleKey: string;
  icon: React.ReactNode;
  services: Service[];
}

const Services = () => {
  const { t } = useLanguage();

  const categories: ServiceCategory[] = [
    {
      titleKey: 'services.haircuts',
      icon: <Scissors className="w-8 h-8" />,
      services: [
        { nameKey: 'services.mens_haircut', price: '35.00' },
        { nameKey: 'services.kids_haircut', price: '25.00' },
        { nameKey: 'services.head_shave', price: '25.00' },
      ],
    },
    {
      titleKey: 'services.beard',
      icon: <FlameIcon className="w-8 h-8" inverted />,
      services: [
        { nameKey: 'services.beard_trim', price: '20.00' },
        { nameKey: 'services.beard_shave', price: '25.00' },
      ],
    },
    {
      titleKey: 'services.combos',
      icon: <ComboIcon className="w-8 h-8" />,
      services: [
        { nameKey: 'services.combo', price: '50.00' },
        { nameKey: 'services.full_service', price: '60.00' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden industrial-bg">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-flame">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-foreground mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="service-card"
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-heading text-2xl text-foreground uppercase tracking-wide">
                  {t(category.titleKey)}
                </h3>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <span className="text-foreground font-medium">
                      {t(service.nameKey)}
                    </span>
                    <span className="text-primary font-heading text-xl">
                      {service.price} {t('services.currency')}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://www.fresha.com/bg/a/studio-flame-sofia-ulitsa-gorski-patnik-40a-u7vdovzq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame-outline inline-block"
          >
            {t('nav.book')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
