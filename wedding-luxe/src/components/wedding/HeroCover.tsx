import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { coverContent } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

export default function HeroCover() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal-900">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/wedding/cover/01.jpg"
          alt="Wedding Cover"
          className="w-full h-full object-cover"
        />
        <div className="image-overlay" />
      </div>

      {/* Magazine Masthead */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center pt-10 md:pt-14"
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: easeOutExpo }}
      >
        {/* Issue line */}
        <p
          className="text-champagne-300/70 text-xs tracking-[0.4em] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {coverContent.issue}
        </p>

        {/* Magazine Title */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] text-white/90 leading-none"
          style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
        >
          {coverContent.magazineTitle}
        </h1>

        {/* Subtitle */}
        <p
          className="text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] mt-1"
          style={{
            fontFamily: "'Cinzel', serif",
            background: 'linear-gradient(180deg, #ecd096 0%, #d4b06a 50%, #9a7a30 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))',
          }}
        >
          {coverContent.magazineSubtitle}
        </p>
      </motion.div>

      {/* Center — Couple Names */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          className="text-white/80 text-lg md:text-xl tracking-[0.2em] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: easeOutExpo }}
        >
          {coverContent.tagline}
        </motion.p>

        <motion.p
          className="text-white/60 text-sm md:text-base tracking-[0.15em]"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: easeOutExpo }}
        >
          {coverContent.taglineZh}
        </motion.p>

        {/* Gold rule separator */}
        <motion.div
          className="gold-rule my-8 max-w-[200px]"
          initial={{ scaleX: 0 }}
          animate={isLoaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 1.0, ease: easeOutExpo }}
        />

        <motion.p
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-white/90 tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 24 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2, ease: easeOutExpo }}
        >
          {coverContent.coupleNames}
        </motion.p>
      </motion.div>

    </section>
  );
}
