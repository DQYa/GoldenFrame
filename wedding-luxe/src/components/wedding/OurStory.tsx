import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { allStoryMoments } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

function StoryBlock({
  moment,
  index,
}: {
  moment: (typeof allStoryMoments)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const isTextLeft = moment.layout === 'text-left';
  const isFullImage = moment.layout === 'full-image';

  if (isFullImage) {
    return (
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="relative w-full overflow-hidden my-16 md:my-24"
      >
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <img
            src={moment.photoSrc}
            alt={moment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <p
              className="text-xs tracking-[0.3em] text-champagne-300/80 mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {moment.titleZh}
            </p>
            <h3
              className="text-3xl md:text-5xl italic font-light mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {moment.title}
            </h3>
            <p
              className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              {moment.text}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`flex flex-col ${
        isTextLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-8 md:gap-16 my-16 md:my-24`}
    >
      {/* Text Side */}
      <div className="flex-1 px-6 md:px-8 max-w-lg">
        <p
          className="text-xs tracking-[0.3em] text-champagne-500 mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {`0${index + 1}`} · {moment.titleZh}
        </p>
        <h3
          className="editorial-headline text-3xl md:text-4xl lg:text-5xl italic mb-6 text-charcoal-800"
        >
          {moment.title}
        </h3>
        <div className="gold-rule-short mb-6" />
        <p className="drop-cap text-charcoal-600 leading-relaxed text-sm md:text-base">
          {moment.text}
        </p>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full">
        <div className="relative overflow-hidden">
          <img
            src={moment.photoSrc}
            alt={moment.title}
            className="w-full h-[50vh] md:h-[65vh] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function OurStory() {
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
          01
        </motion.p>
        <motion.h2
          className="editorial-headline text-4xl md:text-6xl lg:text-7xl text-charcoal-800 mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-champagne-500 tracking-[0.15em]"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          我们的故事
        </motion.p>
        <motion.div
          className="gold-rule-short mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
        />
      </div>

      {/* Story Blocks */}
      <div className="max-w-7xl mx-auto">
        {allStoryMoments.map((moment, i) => (
          <StoryBlock key={moment.id} moment={moment} index={i} />
        ))}
      </div>
    </section>
  );
}
