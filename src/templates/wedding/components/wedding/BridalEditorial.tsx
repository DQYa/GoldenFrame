import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { allEditorialImages, type EditorialImage } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

function EditorialImageBlock({
  image,
  index,
}: {
  image: EditorialImage;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const spanClasses: Record<string, string> = {
    full: 'col-span-12',
    half: 'col-span-12 md:col-span-6',
    wide: 'col-span-12 md:col-span-8',
    tall: 'col-span-12 md:col-span-5',
  };

  // Tall images have a taller aspect ratio
  const aspectClass =
    image.span === 'tall' ? 'aspect-[3/4]' : image.span === 'full' || image.span === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/5]';

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={spanClasses[image.span]}
    >
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <img
          src={image.src}
          alt={image.caption ?? `Editorial ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          loading={index > 2 ? 'lazy' : undefined}
        />
      </div>
      {image.caption && (
        <p className="magazine-caption mt-3 px-1">{image.caption}</p>
      )}
    </motion.div>
  );
}

export default function BridalEditorial() {
  return (
    <section className="magazine-page py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24 px-6">
        <motion.p
          className="section-number mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          02
        </motion.p>
        <motion.h2
          className="editorial-headline text-4xl md:text-6xl lg:text-7xl text-charcoal-800 mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
        >
          The Bridal Edit
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-champagne-500 tracking-[0.15em]"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          婚纱大片
        </motion.p>
        <motion.div
          className="gold-rule-short mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
        />
      </div>

      {/* Editorial Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="editorial-grid">
          {allEditorialImages.map((image, i) => (
            <EditorialImageBlock key={image.id} image={image} index={i} />
          ))}
        </div>
      </div>

      {/* Pull Quote */}
      <motion.div
        className="max-w-3xl mx-auto mt-24 md:mt-32 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
      >
        <blockquote className="pull-quote">
          She walks in beauty, like the night
          <br />
          Of cloudless climes and starry skies
        </blockquote>
        <p className="text-center text-xs tracking-[0.2em] text-champagne-400 mt-4 font-body italic">
          — Lord Byron
        </p>
      </motion.div>
    </section>
  );
}
