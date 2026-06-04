import { useRef } from 'react';
import { motion } from 'framer-motion';
import { filmStripPhotos } from '../../data/youthbookData';

export default function FilmStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="film-strip">
      <div
        ref={scrollRef}
        className="film-strip-inner"
      >
        {filmStripPhotos.map((photo, i) => (
          <motion.div
            key={i}
            className="film-frame"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </motion.div>
        ))}

        {/* 胶卷尾部的空白帧 */}
        <div className="flex-shrink-0 w-[80px] h-[80px] rounded-sm border-2 border-gray-800 bg-gray-900 flex items-center justify-center">
          <span className="text-gray-700 text-[10px] font-mono">KODAK</span>
        </div>
      </div>

      {/* 胶卷标签 */}
      <div className="flex justify-center mt-3">
        <span
          className="text-amber-600/50 text-xs tracking-[0.3em]"
          style={{ fontFamily: "'Ma Shan Zheng', 'Caveat', cursive" }}
        >
          — 时光胶片 —
        </span>
      </div>
    </section>
  );
}
