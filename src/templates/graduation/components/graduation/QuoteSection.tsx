import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { quotes } from '../../data/graduationData';
import { easeOutExpo } from '../../data/animationConfig';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export default function QuoteSection() {
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <h2 className="section-title">毕业寄语</h2>
          <p className="section-subtitle">写给我们共同的四年</p>
        </motion.div>

        {/* Quote cards - Notion style */}
        <div className="space-y-4 sm:space-y-5">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-5 sm:p-6 md:p-7 flex gap-4 items-start
                         hover:bg-white/85 transition-colors duration-300 cursor-default"
            >
              {/* Quote icon */}
              <div className="flex-shrink-0 mt-0.5">
                <Quote className="w-5 h-5 text-primary-400/60" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 font-light leading-relaxed">
                  {quote.text}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2.5 font-medium tracking-wide">
                  —— {quote.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
