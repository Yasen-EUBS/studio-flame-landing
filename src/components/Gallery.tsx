import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery3 from '@/assets/gallery-3.webp';
import gallery4 from '@/assets/gallery-4.webp';
import gallery5 from '@/assets/gallery-5.webp';
import gallery6 from '@/assets/gallery-6.webp';
import gallery7 from '@/assets/gallery-7.webp';
import gallery8 from '@/assets/gallery-8.webp';

const Gallery = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const galleryImages = [
    { src: gallery1, alt: 'Fade haircut - Studio Flame Sofia' },
    { src: gallery2, alt: 'Curly fade - Studio Flame Barber' },
    { src: gallery3, alt: 'Textured crop - Studio Flame Lozenets' },
    { src: gallery4, alt: 'Classic taper - Studio Flame Sofia' },
    { src: gallery5, alt: 'Textured fringe - Studio Flame Barber' },
    { src: gallery6, alt: 'Mullet haircut - Studio Flame Sofia' },
    { src: gallery7, alt: 'Spiky fade - Studio Flame Lozenets' },
    { src: gallery8, alt: 'Textured layers - Studio Flame Barber' },
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
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
          <h2 className="section-title text-foreground mb-4">{t('instagram.title')}</h2>
        </motion.div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <motion.button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/90 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}
          
          {canScrollRight && (
            <motion.button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/90 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          )}

          {/* Scrollable Container */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 aspect-[3/4] rounded-xl overflow-hidden service-card p-0 group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
          </div>
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/flame.studiol/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame inline-flex items-center gap-3"
          >
            <Instagram size={22} />
            <span>Follow @flame.studiol</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
