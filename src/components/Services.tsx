import { motion } from 'framer-motion';
import { Scissors, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FlameIcon, ComboIcon } from './FlameIcon';

interface Service {
  nameKey: string;
  price: string;
  icon: React.ReactNode;
}

const Services = () => {
  const { t } = useLanguage();

  const services: Service[] = [
    { 
      nameKey: 'services.mens_haircut', 
      price: '20.00',
      icon: <Scissors className="w-6 h-6" />
    },
    { 
      nameKey: 'services.beard_trim', 
      price: '15.00',
      icon: <FlameIcon className="w-6 h-6" inverted />
    },
    { 
      nameKey: 'services.combo', 
      price: '30.00',
      icon: <ComboIcon className="w-6 h-6" />
    },
    { 
      nameKey: 'services.father_son', 
      price: '38.00',
      icon: <Users className="w-6 h-6" />
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
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card flex items-center justify-between"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <span className="text-foreground font-medium text-lg">
                  {t(service.nameKey)}
                </span>
              </div>
              <span className="text-primary font-heading text-2xl">
                {service.price} {t('services.currency')}
              </span>
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
