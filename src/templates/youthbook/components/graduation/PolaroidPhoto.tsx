import { motion } from 'framer-motion';

interface PolaroidPhotoProps {
  src: string;
  caption: string;
  rotation: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-[140px] sm:w-[160px]',
  md: 'w-[180px] sm:w-[220px]',
  lg: 'w-[220px] sm:w-[260px]',
};

export default function PolaroidPhoto({ src, caption, rotation, size = 'md' }: PolaroidPhotoProps) {
  return (
    <motion.div
      className={`polaroid ${sizeMap[size]} cursor-default`}
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="w-full aspect-square object-cover"
        />
      </div>
      <p className="polaroid-caption">{caption}</p>
    </motion.div>
  );
}
