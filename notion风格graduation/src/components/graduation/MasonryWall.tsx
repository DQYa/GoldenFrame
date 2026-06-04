import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { easeOutExpo } from '../../data/animationConfig';
import type { Photo } from '../../data/graduationData';

interface MasonryWallProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
  activePersonName?: string | null;
  activePersonPhotoCount?: number;
  onClearPersonFilter?: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

export default function MasonryWall({
  photos,
  onPhotoClick,
  activePersonName,
  activePersonPhotoCount,
  onClearPersonFilter,
}: MasonryWallProps) {
  if (photos.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-400 text-sm font-light">暂无照片</p>
      </div>
    );
  }

  return (
    <div>
      {/* Person filter indicator */}
      {activePersonName && activePersonPhotoCount !== undefined && onClearPersonFilter && (
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-primary-50 border border-primary-200 text-sm">
            <span className="text-primary-700 font-medium">
              正在查看：{activePersonName}
            </span>
            <span className="text-primary-400">·</span>
            <span className="text-primary-500">共 {activePersonPhotoCount} 张</span>
            <button
              onClick={onClearPersonFilter}
              className="ml-1 p-0.5 rounded-full hover:bg-primary-100 transition-colors"
              aria-label="清除人物筛选"
            >
              <X className="w-3.5 h-3.5 text-primary-500" />
            </button>
          </div>
        </div>
      )}

      {/* Masonry grid */}
      <motion.div
        className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            variants={itemVariants}
            className="break-inside-avoid mb-3 sm:mb-4 cursor-pointer group"
            onClick={() => onPhotoClick(index)}
          >
            <div className="glass-panel rounded-xl overflow-hidden
                          transition-shadow duration-300 hover:shadow-lg">
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500
                             group-hover:scale-[1.03]"
                />
              </div>
              {photo.caption && (
                <div className="px-3 py-2">
                  <p className="text-xs text-gray-500 font-light truncate leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
