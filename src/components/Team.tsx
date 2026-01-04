import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import barber1 from '@/assets/barber-1.jpeg';
import barber2 from '@/assets/barber-2.jpeg';

interface TeamMember {
  name: string;
  role: {
    bg: string;
    en: string;
  };
  image: string;
  instagram?: string;
}

const Team = () => {
  const { t, language } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      name: 'Иван',
      role: { bg: 'Старши бръснар', en: 'Senior Barber' },
      image: barber1,
      instagram: 'https://instagram.com',
    },
    {
      name: 'Георги',
      role: { bg: 'Майстор-стилист', en: 'Master Stylist' },
      image: barber2,
      instagram: 'https://instagram.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-charcoal-deep">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-flame relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-foreground mb-4">{t('team.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('team.subtitle')}</p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                {/* Image */}
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-3xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium uppercase tracking-wide text-sm">
                    {member.role[language]}
                  </p>

                  {member.instagram && (
                    <motion.a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={20} />
                    </motion.a>
                  )}
                </div>

                {/* Flame accent */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-flame-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
