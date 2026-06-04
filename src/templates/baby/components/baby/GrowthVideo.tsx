import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { videoContent } from '../../data/babyData';
import { easeOutExpo } from '../../data/animationConfig';

export default function GrowthVideo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative py-10 md:py-16 px-4 sm:px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf3e8 0%, #fdfaf5 50%, #faf3e8 100%)' }}>
      <motion.div style={{ opacity }} className="text-center mb-8">
        <span className="sticker-label mb-3">成长影片</span>
        <h2 className="text-2xl md:text-3xl font-bold text-warm-700 font-display mt-3">{videoContent.title}</h2>
        <p className="text-sm text-warm-400 mt-1 font-script text-lg">{videoContent.subtitle}</p>
      </motion.div>

      {/* Letterbox placeholder */}
      <motion.div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-card border border-cream-200/40 bg-white/60 group cursor-pointer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}>
        <div className="relative aspect-video">
          <img src={videoContent.posterSrc} alt="成长影片" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-apricot-400/80 flex items-center justify-center shadow-lg group-hover:bg-apricot-400 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
              <Play className="w-7 h-7 text-white ml-1" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.p className="text-center mt-6 text-sm text-warm-400 max-w-md mx-auto leading-relaxed"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        {videoContent.description}
      </motion.p>
    </section>
  );
}
