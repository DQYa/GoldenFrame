import { motion } from 'framer-motion';
import { ArrowUpRight, Camera, UsersRound } from 'lucide-react';
import type { ClassAlbum } from '../../data/graduationData';

interface ClassFeatureCardProps {
  classAlbum: ClassAlbum;
  onClick: () => void;
}

export default function ClassFeatureCard({ classAlbum, onClick }: ClassFeatureCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group w-full overflow-hidden rounded-[28px] text-left shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="relative min-h-[360px] overflow-hidden sm:min-h-[420px]">
        <img src={classAlbum.cover} alt={classAlbum.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 md:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-white/80">
            <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-md">{classAlbum.year}</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-md">
              <UsersRound className="h-3.5 w-3.5" />
              {classAlbum.count}人
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-md">
              <Camera className="h-3.5 w-3.5" />
              {classAlbum.photoIds.length}张
            </span>
          </div>
          <div className="flex items-end justify-between gap-5">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{classAlbum.name}</h3>
              <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-white/82 sm:text-base">{classAlbum.description}</p>
            </div>
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:flex">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
