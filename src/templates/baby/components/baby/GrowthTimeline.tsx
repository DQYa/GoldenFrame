import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timeline } from '../../data/babyData';
import { easeOutExpo } from '../../data/animationConfig';

function TimelineNode({ moment, index }: { moment: (typeof timeline)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const isLeft = index % 2 === 0;

  return (
    <motion.div ref={ref} style={{ opacity, y }}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Photo side */}
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-soft border-2 border-cream-200/40">
        <img src={moment.photoSrc} alt={moment.title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Content side */}
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="sticker-label">{moment.milestone}</span>
          <span className="text-xs text-warm-400 font-display">{moment.date}</span>
        </div>
        <h4 className="text-base md:text-lg font-bold text-warm-700 font-display">{moment.title}</h4>
        <p className="text-xs md:text-sm text-warm-400 mt-1 leading-relaxed max-w-xs">{moment.description}</p>
      </div>
    </motion.div>
  );
}

export default function GrowthTimeline() {
  return (
    <section className="relative py-10 md:py-16 px-4 sm:px-6">
      {/* Header */}
      <motion.div className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}>
        <span className="sticker-label mb-3">成长时间轴</span>
        <h2 className="text-2xl md:text-3xl font-bold text-warm-700 font-display mt-3">每一个第一次</h2>
        <p className="text-sm text-warm-400 mt-1 font-script text-lg">The First Time</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
          style={{ background: 'repeating-linear-gradient(to bottom, rgba(200,160,130,0.2) 0px, rgba(200,160,130,0.2) 4px, transparent 4px, transparent 12px)' }} />

        <div className="flex flex-col gap-10 md:gap-14">
          {timeline.map((m, i) => (
            <TimelineNode key={m.id} moment={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
