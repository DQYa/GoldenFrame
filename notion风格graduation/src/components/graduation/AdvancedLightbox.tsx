import { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { easeOutExpo } from '../../data/animationConfig';
import type { Photo } from '../../data/graduationData';

interface AdvancedLightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function AdvancedLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: AdvancedLightboxProps) {
  const [loadedPhotoId, setLoadedPhotoId] = useState<string | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const currentPhoto = photos[currentIndex];
  const total = photos.length;
  const imageLoaded = Boolean(currentPhoto && loadedPhotoId === currentPhoto.id);

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, total, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    },
    [onClose, goNext, goPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 80;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) goPrev();
      else goNext();
    } else if (Math.abs(info.offset.y) > swipeThreshold) {
      onClose();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  if (!currentPhoto) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full
                       bg-white/10 backdrop-blur-md border border-white/20
                       flex items-center justify-center text-white
                       hover:bg-white/20 transition-colors"
            aria-label="关闭"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-white/70 text-sm font-mono tracking-wider">
              {currentIndex + 1} / {total}
            </span>
          </div>

          {/* Left arrow */}
          {currentIndex > 0 && (
            <button
              onClick={goPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10 sm:w-12 sm:h-12 rounded-full
                         bg-white/10 backdrop-blur-md border border-white/20
                         flex items-center justify-center text-white
                         hover:bg-white/20 transition-colors"
              aria-label="上一张"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Right arrow */}
          {currentIndex < total - 1 && (
            <button
              onClick={goNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10 sm:w-12 sm:h-12 rounded-full
                         bg-white/10 backdrop-blur-md border border-white/20
                         flex items-center justify-center text-white
                         hover:bg-white/20 transition-colors"
              aria-label="下一张"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Image container with drag support */}
          <motion.div
            key={currentIndex}
            className="relative z-10 max-w-5xl max-h-[85vh] w-full mx-4 sm:mx-12 select-none"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onTouchStart={handleTouchStart}
            onClick={(e) => e.stopPropagation()}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white/80 rounded-full animate-spin" />
              </div>
            )}
            <img
              key={currentPhoto.id}
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              onLoad={() => setLoadedPhotoId(currentPhoto.id)}
              className={`w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl
                transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              draggable={false}
            />
            {currentPhoto.caption && (
              <p className="text-center text-white/70 text-sm mt-3 font-light tracking-wide">
                {currentPhoto.caption}
              </p>
            )}
          </motion.div>

          {/* Mobile hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden">
            <span className="text-white/30 text-xs">← 滑动切换 → 上下滑动关闭</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
