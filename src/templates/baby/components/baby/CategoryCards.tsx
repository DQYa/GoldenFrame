import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { categories, type BabyCategory } from '../../data/babyData';
import { easeOutExpo } from '../../data/animationConfig';

function CategoryCard({
  category,
  onOpen,
}: {
  category: BabyCategory;
  onOpen: (cat: BabyCategory) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);

  return (
    <motion.button
      ref={ref}
      style={{ opacity, y }}
      onClick={() => onOpen(category)}
      className="group relative w-full text-left rounded-card overflow-hidden shadow-soft border border-cream-200/40 bg-white/60 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={category.photoSrc}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <span className="text-xl mr-2">{category.icon}</span>
        <h4 className="text-base md:text-lg font-bold text-warm-700 font-display mt-1">{category.title}</h4>
        <p className="text-xs text-warm-400 mt-0.5 font-script text-base">{category.subtitle}</p>
        <div className="flex items-center gap-1 mt-3 text-apricot-400 text-xs font-display">
          <span>{category.photos.length} 张照片</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </motion.button>
  );
}

interface CategoryCardsProps {
  onOpenCategory: (cat: BabyCategory) => void;
}

export default function CategoryCards({ onOpenCategory }: CategoryCardsProps) {
  return (
    <section className="relative py-10 md:py-16 px-4 sm:px-6">
      {/* Header */}
      <motion.div className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}>
        <span className="sticker-label mb-3">成长相册</span>
        <h2 className="text-2xl md:text-3xl font-bold text-warm-700 font-display mt-3">翻开成长的每一页</h2>
        <p className="text-sm text-warm-400 mt-1 font-script text-lg">Growing Up Album</p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} onOpen={onOpenCategory} />
        ))}
      </div>
    </section>
  );
}
