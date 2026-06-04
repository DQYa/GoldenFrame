import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { growthStats } from '../../data/babyData';
import { easeOutExpo } from '../../data/animationConfig';

const iconMap: Record<string, string> = {
  star: '⭐',
  heart: '💗',
  smile: '😊',
  footprint: '👣',
};

function StatCard({ stat }: { stat: (typeof growthStats)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}
      className="flex flex-col items-center text-center p-5 md:p-6 rounded-card bg-white/60 backdrop-blur-sm shadow-soft border border-cream-200/40">
      <span className="text-2xl mb-2">{iconMap[stat.icon]}</span>
      <span className="text-3xl md:text-4xl font-bold text-warm-600 font-display">{stat.value}</span>
      <span className="text-xs md:text-sm text-warm-400 mt-1 tracking-wide">{stat.label}</span>
    </motion.div>
  );
}

export default function GrowthStats() {
  return (
    <section className="relative py-10 md:py-16 px-4 sm:px-6">
      {/* Section header */}
      <motion.div className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}>
        <span className="sticker-label mb-3">成长数据</span>
        <h2 className="text-2xl md:text-3xl font-bold text-warm-700 font-display mt-3">你来到世界的这一年</h2>
        <p className="text-sm text-warm-400 mt-1 font-script text-lg">A Year of Wonder</p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
        {growthStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Decorative quote */}
      <motion.p className="text-center mt-10 text-sm text-warm-400 italic font-script text-lg"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        "每一次成长，都是时光留下的小小奇迹"
      </motion.p>
    </section>
  );
}
