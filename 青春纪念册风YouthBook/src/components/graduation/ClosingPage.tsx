import { motion } from 'framer-motion';
import { endingContent } from '../../data/youthbookData';
import { easeOutExpo } from '../../data/animationConfig';

export default function ClosingPage() {
  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="book-page rounded-lg p-8 sm:p-10 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          {/* 装饰星号 */}
          <motion.div
            className="text-amber-400/60 text-xl mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✦ ✦ ✦
          </motion.div>

          {/* 主标题 */}
          <motion.h2
            className="handwritten-title text-4xl sm:text-5xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: easeOutExpo }}
          >
            {endingContent.title}
          </motion.h2>

          {/* 副标题 */}
          <motion.p
            className="text-xl md:text-2xl text-ink-500 font-serif mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeOutExpo }}
          >
            {endingContent.subtitle}
          </motion.p>

          {/* 分隔线 */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6, ease: easeOutExpo }}
          >
            <div className="w-8 h-px bg-amber-300/50" />
            <div className="w-1 h-1 rounded-full bg-amber-400/40" />
            <div className="w-8 h-px bg-amber-300/50" />
          </motion.div>

          {/* 小诗 */}
          <motion.div
            className="text-sm md:text-base text-ink-500 font-serif leading-loose whitespace-pre-line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {endingContent.poem}
          </motion.div>

          {/* 底部信息 */}
          <motion.div
            className="mt-10 pt-8 border-t border-amber-200/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p
              className="text-xs text-ink-300 tracking-wider"
              style={{ fontFamily: "'Caveat', cursive", fontSize: '0.8rem' }}
            >
              {endingContent.footer}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
