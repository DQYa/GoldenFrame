import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { allPhotos } from '../../data/graduationData';
import { easeOutExpo } from '../../data/animationConfig';
import type { Photo } from '../../data/graduationData';

interface FeaturedGalleryProps {
  onPhotoClick: (photo: Photo) => void;
}

export default function FeaturedGallery({ onPhotoClick }: FeaturedGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredPhotos = allPhotos.filter((p) => p.featured);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <h2 className="section-title">精选大片</h2>
          <p className="section-subtitle">每一帧都是青春的切片</p>
        </motion.div>

        {/* Horizontal scroll gallery */}
        <div className="relative group">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                         bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         hover:bg-white"
              aria-label="向左滑动"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full
                         bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         hover:bg-white"
              aria-label="向右滑动"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          )}

          {/* Cards container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory
                       pb-2 custom-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredPhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                className="flex-shrink-0 w-[70vw] max-w-[380px] sm:max-w-[420px] snap-start cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: easeOutExpo }}
                onClick={() => onPhotoClick(photo)}
              >
                <div className="glass-panel rounded-2xl overflow-hidden group/card">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading={i < 4 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover transition-transform duration-500
                                 group-hover/card:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
