import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { coverContent } from '../../data/youthbookData';
import { easeOutExpo } from '../../data/animationConfig';

export default function BookCover() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden book-cover">
      {/* 皮质纹理叠加 */}
      <div className="absolute inset-0 bg-black/10" />

      {/* 封面装饰线框 */}
      <motion.div
        className="absolute inset-6 md:inset-10 border border-amber-700/30"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.div
        className="absolute inset-8 md:inset-12 border border-amber-600/20"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      {/* 封面内容 */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* 年份 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
          className="gold-foil text-lg md:text-xl tracking-[0.3em] mb-6 font-serif"
        >
          {coverContent.year}
        </motion.p>

        {/* 主标题 - 烫金 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
          className="gold-foil text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', cursive" }}
        >
          {coverContent.title}
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.65, ease: easeOutExpo }}
          className="text-amber-400/70 text-xl md:text-2xl tracking-[0.2em] font-serif"
        >
          {coverContent.subtitle}
        </motion.p>

        {/* 装饰分隔线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isLoaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.85, ease: easeOutExpo }}
          className="flex items-center gap-4 my-8"
        >
          <div className="w-12 h-px bg-amber-600/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
          <div className="w-12 h-px bg-amber-600/40" />
        </motion.div>

        {/* 班级 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: easeOutExpo }}
          className="text-amber-500/50 text-sm md:text-base tracking-[0.15em]"
        >
          {coverContent.class}
        </motion.p>

        {/* 标语 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.15, ease: easeOutExpo }}
          className="mt-4 text-amber-600/35 text-xs tracking-[0.2em]"
        >
          {coverContent.tagline}
        </motion.p>
      </motion.div>

      {/* BookCover loaded */}
    </section>
  );
}
