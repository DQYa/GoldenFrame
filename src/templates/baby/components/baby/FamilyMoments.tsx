import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { familyMoments } from '../../data/babyData';
import { easeOutExpo } from '../../data/animationConfig';

function FamilyCard({
  moment,
}: {
  moment: (typeof familyMoments)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="group">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-soft border border-cream-200/30">
        <img src={moment.src} alt={moment.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-warm-900/30 via-warm-900/10 to-transparent">
          <p className="text-white/90 text-xs md:text-sm font-display">{moment.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FamilyMoments() {
  return (
    <section className="relative py-10 md:py-16 px-4 sm:px-6">
      <motion.div className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}>
        <span className="sticker-label mb-3">亲子时光</span>
        <h2 className="text-2xl md:text-3xl font-bold text-warm-700 font-display mt-3">爱是最好的陪伴</h2>
        <p className="text-sm text-warm-400 mt-1 font-script text-lg">Love is the Best Gift</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
        {familyMoments.map((m) => (
          <FamilyCard key={m.id} moment={m} />
        ))}
      </div>

      <motion.p className="text-center mt-8 text-sm text-warm-400 italic max-w-md mx-auto leading-relaxed"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}>
        "最好的爱，是陪着你一步一步认识这个世界"
      </motion.p>
    </section>
  );
}
