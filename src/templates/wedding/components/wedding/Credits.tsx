import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { creditsContent } from '../../data/weddingData';
import { easeOutExpo } from '../../data/animationConfig';

function TeamMember({
  member,
}: {
  member: (typeof creditsContent.team)[number];
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="flex items-baseline gap-3 py-3 border-b border-champagne-200/30 last:border-b-0"
    >
      {/* Role */}
      <div className="w-28 md:w-36 flex-shrink-0">
        <p
          className="text-xs tracking-[0.2em] text-champagne-500"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {member.role}
        </p>
        <p className="text-[10px] text-charcoal-300 mt-0.5">{member.roleZh}</p>
      </div>
      {/* Name */}
      <div className="flex-1">
        {member.name ? (
          <p
            className="text-sm md:text-base italic text-charcoal-700"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {member.name}
          </p>
        ) : (
          <p
            className="text-sm md:text-base text-charcoal-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            —
          </p>
        )}
      </div>
      {/* Studio */}
      <div className="text-right">
        {member.studio && (
          <p className="text-xs text-charcoal-400 italic tracking-wide">{member.studio}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Credits() {
  return (
    <section className="magazine-page py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section Number */}
        <motion.p
          className="section-number text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          07
        </motion.p>

        {/* Title */}
        <motion.h2
          className="editorial-headline text-3xl md:text-5xl text-center text-charcoal-800 mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          {creditsContent.title}
        </motion.h2>

        <motion.p
          className="text-lg text-champagne-500 text-center tracking-[0.15em] mb-6"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
        >
          {creditsContent.titleZh}
        </motion.p>

        <motion.div
          className="gold-rule-short mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
        />

        {/* Intro */}
        <motion.p
          className="text-center text-charcoal-500 text-sm italic mb-10 leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
        >
          {creditsContent.intro}
          <br />
          <span className="not-italic text-xs">{creditsContent.introZh}</span>
        </motion.p>

        {/* Team List */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
        >
          {creditsContent.team.map((member, i) => (
            <TeamMember key={member.role} member={member} index={i} />
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo }}
        >
          <div className="gold-rule mb-8" />
          <p
            className="text-2xl md:text-3xl italic text-champagne-600 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {creditsContent.closing}
          </p>
          <p
            className="text-sm text-charcoal-400 tracking-wider"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            {creditsContent.closingZh}
          </p>

          {/* Magazine-style colophon */}
          <div className="mt-16 pt-8 border-t border-champagne-200/30">
            <p
              className="text-[10px] text-charcoal-300 tracking-[0.2em]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              PRINTED ON ELEGANT PAPER · BOUND WITH LOVE · {new Date().getFullYear()}
            </p>
            <p className="text-[10px] text-charcoal-300/60 mt-2 tracking-wider">
              Wedding Luxe Template · GoldenFrame
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
