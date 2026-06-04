import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { allCeremonyPhotos, type CeremonyMoment } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

function CeremonyPhoto({
  moment,
}: {
  moment: CeremonyMoment;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);

  if (moment.layout === 'hero') {
    return (
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="relative w-full overflow-hidden my-8 md:my-12"
      >
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <img
            src={moment.src}
            alt={moment.title ?? ''}
            className="w-full h-full object-cover"
          />
        </div>
        {moment.title && (
          <div className="mt-4 px-2">
            <h4
              className="text-xl md:text-2xl italic text-charcoal-700"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {moment.title}
            </h4>
            {moment.description && (
              <p className="text-sm text-charcoal-400 mt-1">{moment.description}</p>
            )}
          </div>
        )}
      </motion.div>
    );
  }

  if (moment.layout === 'panorama') {
    return (
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="relative w-full overflow-hidden my-8 md:my-12"
      >
        <div className="aspect-[21/9] md:aspect-[32/9]">
          <img
            src={moment.src}
            alt={moment.title ?? ''}
            className="w-full h-full object-cover"
          />
        </div>
        {moment.title && (
          <div className="mt-4 px-2 text-center">
            <h4
              className="text-xl md:text-2xl italic text-charcoal-700"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {moment.title}
            </h4>
            {moment.description && (
              <p className="text-sm text-charcoal-400 mt-1">{moment.description}</p>
            )}
          </div>
        )}
      </motion.div>
    );
  }

  // grid-item
  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="overflow-hidden"
    >
      <div className="aspect-[4/5]">
        <img
          src={moment.src}
          alt=""
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>
    </motion.div>
  );
}

export default function CeremonySection() {
  const heroItems = allCeremonyPhotos.filter((p) => p.layout === 'hero' || p.layout === 'panorama');
  const gridItems = allCeremonyPhotos.filter((p) => p.layout === 'grid-item');

  return (
    <section className="magazine-page py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24 px-6">
        <motion.p
          className="section-number mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          03
        </motion.p>
        <motion.h2
          className="editorial-headline text-4xl md:text-6xl lg:text-7xl text-charcoal-800 mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
        >
          The Ceremony
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-champagne-500 tracking-[0.15em]"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          婚礼现场
        </motion.p>
        <motion.div
          className="gold-rule-short mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
        />
      </div>

      {/* Hero & Panorama images — full width editorial flow */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {heroItems.map((moment) => (
          <CeremonyPhoto key={moment.id} moment={moment} />
        ))}

        {/* Grid images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-4">
          {gridItems.map((moment) => (
            <CeremonyPhoto key={moment.id} moment={moment} />
          ))}
        </div>
      </div>

      {/* Atmosphere Quote */}
      <motion.div
        className="max-w-2xl mx-auto mt-24 md:mt-32 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
      >
        <p
          className="text-2xl md:text-3xl italic text-champagne-500 leading-relaxed"
          style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
        >
          "In that moment, the world outside these walls ceased to exist."
        </p>
        <p className="text-sm text-charcoal-400 mt-4 tracking-wider">
          那一刻，墙外的世界不复存在。
        </p>
      </motion.div>
    </section>
  );
}
