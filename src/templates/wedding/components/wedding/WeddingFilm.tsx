import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { filmContent } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

export default function WeddingFilm() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-charcoal-900 overflow-hidden">
      {/* Background poster image */}
      <motion.div className="absolute inset-0" style={{ opacity, scale }}>
        <img
          src={filmContent.posterSrc}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-[2px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Section number */}
        <motion.p
          className="text-champagne-400/50 text-xs tracking-[0.3em] mb-4"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          06
        </motion.p>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-white/90 italic mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
        >
          {filmContent.title}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-champagne-400 tracking-[0.15em] mb-6"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          {filmContent.titleZh}
        </motion.p>

        <motion.div
          className="gold-rule max-w-[200px] mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
        />

        {/* Description */}
        <motion.p
          className="text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed italic mb-10"
          style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
        >
          {filmContent.description}
          <br />
          <span className="not-italic text-white/40">{filmContent.descriptionZh}</span>
        </motion.p>

        {/* Letterbox Video Placeholder */}
        <motion.div
          className="letterbox max-w-3xl mx-auto shadow-magazine group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: easeOutExpo }}
        >
          {/* Placeholder poster */}
          <img
            src={filmContent.posterSrc}
            alt="Wedding Film"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/60 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:scale-110 group-hover:bg-white/10 backdrop-blur-sm">
              <Play className="w-7 h-7 md:w-9 md:h-9 text-white/80 ml-1 transition-colors duration-500 group-hover:text-white" />
            </div>
          </div>
          {/* Bottom film strip decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-400/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
