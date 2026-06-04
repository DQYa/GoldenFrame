import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { allWeddingDetails } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

function DetailCard({
  detail,
}: {
  detail: (typeof allWeddingDetails)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={detail.src}
          alt={detail.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Gold gradient overlay at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Detail info */}
      <div className="mt-4 px-1">
        <h4
          className="text-sm md:text-base italic text-charcoal-700 tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {detail.title}
        </h4>
        <p
          className="text-xs text-charcoal-400 mt-1.5 leading-relaxed"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
        >
          {detail.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function DetailsCollection() {
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
          05
        </motion.p>
        <motion.h2
          className="editorial-headline text-4xl md:text-6xl lg:text-7xl text-charcoal-800 mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
        >
          The Details
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-champagne-500 tracking-[0.15em]"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          细节收藏
        </motion.p>
        <motion.div
          className="gold-rule-short mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
        />

        {/* Intro */}
        <motion.p
          className="mt-8 text-charcoal-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed italic"
          style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
        >
          "The magic is in the details — every flower, every fold of silk, every handwritten word."
        </motion.p>
      </div>

      {/* Details Grid — 3 columns */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {allWeddingDetails.map((detail) => (
            <DetailCard key={detail.id} detail={detail} />
          ))}
        </div>
      </div>
    </section>
  );
}
