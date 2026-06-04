import { motion } from 'framer-motion';
import type { Photo } from '../../data/graduationData';

interface DetailPhotoGridProps {
  photos: Photo[];
  variant: 'graduate' | 'dorm' | 'class';
  onPhotoClick: (index: number) => void;
}

const columns = {
  graduate: 'columns-2 sm:columns-3 lg:columns-4',
  dorm: 'columns-2 sm:columns-3 lg:columns-5',
  class: 'columns-2 sm:columns-3 lg:columns-4',
};

export default function DetailPhotoGrid({ photos, variant, onPhotoClick }: DetailPhotoGridProps) {
  return (
    <motion.div
      className={`${columns[variant]} gap-3 sm:gap-4`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
    >
      {photos.map((photo, index) => (
        <motion.button
          type="button"
          key={`${photo.id}-${index}`}
          onClick={() => onPhotoClick(index)}
          className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-white/70 text-left shadow-sm ring-1 ring-white/70 sm:mb-4"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.42 } },
          }}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          {photo.caption && <p className="truncate px-3 py-2 text-xs text-gray-500">{photo.caption}</p>}
        </motion.button>
      ))}
    </motion.div>
  );
}
