import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroContent, images } from '../../data/graduationData';
import { easeOutExpo } from '../../data/animationConfig';

const transitionConfig = { duration: 1, ease: easeOutExpo };

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={images.hero}
          alt="毕业纪念馆封面"
          className="w-full h-full object-cover"
          loading="eager"
          onLoad={() => setIsLoaded(true)}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={transitionConfig}
        >
          <p className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase mb-4 font-light">
            {heroContent.info}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4 font-display"
        >
          {heroContent.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.45, ease: easeOutExpo }}
          className="text-lg sm:text-xl md:text-2xl text-white/85 font-light tracking-wide"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isLoaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: easeOutExpo }}
          className="w-16 h-px bg-white/40 my-8 origin-center"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">向下探索</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
