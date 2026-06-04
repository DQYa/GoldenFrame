import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { heroContent } from '../../data/babyData';
import { easeOutExpo } from '../../data/animationConfig';

export default function HeroCover() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #fdf9f2 0%, #fdfaf5 40%, #faf3e8 100%)' }}>
      {/* Decorative dots */}
      <div className="absolute inset-0 dot-bg opacity-60" />

      {/* Soft decorative circles */}
      <motion.div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-apricot-100/30 blur-3xl"
        animate={isLoaded ? { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] } : {}}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-cream-300/20 blur-3xl"
        animate={isLoaded ? { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] } : {}}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }} />

      {/* Center content */}
      <motion.div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Small decorative stars */}
        <motion.div className="flex gap-3 mb-6"
          initial={{ opacity: 0 }} animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <span className="text-apricot-300/50 text-lg">✦</span>
          <span className="text-cream-400/50 text-sm mt-1">·</span>
          <span className="text-apricot-300/50 text-lg">✦</span>
        </motion.div>

        {/* Baby photo — circular */}
        <motion.div className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cream-200/60 shadow-soft mx-auto">
            <img src="/assets/baby/cover/01.jpg" alt="宝宝" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-700 mb-3 tracking-wide"
          style={{ fontFamily: "'Nunito', 'Noto Serif SC', sans-serif" }}
          initial={{ opacity: 0, y: 24 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo }}>
          {heroContent.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-lg md:text-xl text-warm-400 mb-2 italic font-script"
          initial={{ opacity: 0, y: 16 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: easeOutExpo }}>
          {heroContent.subtitle}
        </motion.p>

        {/* Separator */}
        <motion.div className="flex items-center gap-3 my-5"
          initial={{ scaleX: 0 }} animate={isLoaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}>
          <div className="w-8 h-px bg-apricot-300/40" />
          <span className="text-apricot-300/60 text-xs">♥</span>
          <div className="w-8 h-px bg-apricot-300/40" />
        </motion.div>

        {/* Name & Date */}
        <motion.p className="text-sm text-warm-400 tracking-wider"
          initial={{ opacity: 0 }} animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}>
          <span className="font-script text-xl text-warm-500">{heroContent.babyName}</span>
          <span className="mx-2 text-cream-400">·</span>
          {heroContent.date}
        </motion.p>
      </motion.div>
    </section>
  );
}
