import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { BabyCategory } from '../../data/babyData';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-warm-900/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl max-h-[90vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-cream-100 transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5 text-warm-600" />
        </button>
      </motion.div>
    </motion.div>
  );
}

interface AlbumModalProps {
  category: BabyCategory | null;
  onClose: () => void;
}

export default function AlbumModal({ category, onClose }: AlbumModalProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!category) return;
    const snapContainer = document.querySelector('.snap-container') as HTMLElement | null;
    if (snapContainer) snapContainer.style.overflowY = 'hidden';
    return () => {
      if (snapContainer) snapContainer.style.overflowY = '';
    };
  }, [category]);

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxSrc) {
          setLightboxSrc(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, lightboxSrc]);

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-warm-900/50 backdrop-blur-sm" />

          {/* Modal panel */}
          <motion.div
            className="relative w-full md:max-w-2xl md:rounded-2xl bg-cream-50 shadow-2xl overflow-hidden max-h-[90vh] md:max-h-[85vh] flex flex-col"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-cream-200/40">
              <div>
                <span className="text-xl mr-2">{category.icon}</span>
                <h3 className="text-lg font-bold text-warm-700 font-display inline">{category.title}</h3>
                <p className="text-xs text-warm-400 font-script text-base">{category.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-cream-200/60 flex items-center justify-center hover:bg-cream-300/60 transition-colors flex-shrink-0"
                aria-label="关闭"
              >
                <X className="w-4 h-4 text-warm-500" />
              </button>
            </div>

            {/* Photo grid — masonry-like */}
            <div className="overflow-y-auto p-4 md:p-5 flex-1">
              <div className="columns-2 gap-3 md:gap-4">
                {category.photos.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightboxSrc(src)}
                    className="block w-full mb-3 md:mb-4 rounded-xl overflow-hidden shadow-soft border border-cream-200/30 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <img
                      src={src}
                      alt={`${category.title} ${i + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxSrc && (
              <ImageLightbox
                src={lightboxSrc}
                alt=""
                onClose={() => setLightboxSrc(null)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
