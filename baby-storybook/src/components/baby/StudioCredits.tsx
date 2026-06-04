import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, MessageCircle } from 'lucide-react';
import { studioContent } from '../../data/babyData';

export default function StudioCredits() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative py-12 md:py-20 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(180deg, #fdfaf5 0%, #fefdfb 100%)' }}>
      <motion.div style={{ opacity }} className="max-w-md mx-auto">
        {/* Stamp decoration */}
        <div className="growth-stamp mx-auto mb-8">
          <div className="growth-stamp-content">♥</div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-warm-700 font-display mb-2">{studioContent.title}</h2>
        <p className="text-sm md:text-base text-warm-500 mb-8 leading-relaxed">{studioContent.subtitle}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button type="button" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-apricot-400 text-white font-display font-semibold shadow-soft hover:bg-apricot-500 hover:shadow-card transition-all duration-300 text-sm">
            <Camera className="w-4 h-4" />
            {studioContent.cta1}
          </button>
          <button type="button" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-cream-300 text-warm-500 font-display font-semibold hover:bg-cream-100 hover:border-cream-400 transition-all duration-300 text-sm">
            <MessageCircle className="w-4 h-4" />
            {studioContent.cta2}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-cream-200/40">
          <p className="text-xs text-warm-400 font-display tracking-wider">
            {studioContent.photographer} · {studioContent.year}
          </p>
          <p className="text-[10px] text-warm-300 mt-1 tracking-wider">
            Baby Storybook Template · GoldenFrame
          </p>
        </div>
      </motion.div>
    </section>
  );
}
