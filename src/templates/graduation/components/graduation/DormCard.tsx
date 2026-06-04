import { motion } from 'framer-motion';
import { UsersRound } from 'lucide-react';
import type { DormAlbum } from '../../data/graduationData';

interface DormCardProps {
  dorm: DormAlbum;
  onClick: () => void;
}

export default function DormCard({ dorm, onClick }: DormCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group min-w-[280px] flex-1 text-left sm:min-w-[320px]"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="glass-panel glass-panel-hover h-full overflow-hidden rounded-2xl">
        <div className="aspect-[16/10] overflow-hidden">
          <img src={dorm.cover} alt={dorm.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-4 sm:p-5">
          <div className="mb-2 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold text-gray-900">{dorm.name}</p>
              <p className="mt-1 line-clamp-2 text-sm font-light leading-relaxed text-gray-500">{dorm.description}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1">
              <UsersRound className="h-3.5 w-3.5 text-primary-500" />
              {dorm.members.length}人
            </span>
            <span className="rounded-full bg-white/70 px-2.5 py-1">{dorm.photoIds.length}张</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
