import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { allGuestMoments } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

function GuestCard({
  guest,
  index,
}: {
  guest: (typeof allGuestMoments)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);
  // Vary the card position slightly for organic feel
  const translateY = index % 2 === 0 ? 0 : 16;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, transform: `translateY(${translateY}px)` }}
      className="group"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={guest.src}
          alt={guest.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <p className="magazine-caption mt-3 px-1 text-center">{guest.caption}</p>
    </motion.div>
  );
}

export default function LovedOnes() {
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
          04
        </motion.p>
        <motion.h2
          className="editorial-headline text-4xl md:text-6xl lg:text-7xl text-charcoal-800 mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
        >
          Loved Ones
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-champagne-500 tracking-[0.15em]"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          亲友见证
        </motion.p>
        <motion.div
          className="gold-rule-short mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
        />

        {/* Intro text */}
        <motion.p
          className="mt-8 text-charcoal-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
        >
          这一天，最珍贵的不只是誓言，还有在场每一个人的笑容与眼泪。
        </motion.p>
      </div>

      {/* Guest Grid — 3 columns desktop, 2 mobile */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {allGuestMoments.map((guest, i) => (
            <GuestCard key={guest.id} guest={guest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
