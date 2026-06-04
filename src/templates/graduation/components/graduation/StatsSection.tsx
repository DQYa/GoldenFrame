import { motion } from 'framer-motion';
import { stats } from '../../data/graduationData';
import { easeOutExpo } from '../../data/animationConfig';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export default function StatsSection() {
  return (
    <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={cardVariants}
            className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 text-center cursor-default"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight font-display">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1.5 font-light tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
