import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import type { Graduate } from '../../data/graduationData';

interface GraduateCardProps {
  graduate: Graduate;
  onClick: () => void;
}

export default function GraduateCard({ graduate, onClick }: GraduateCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group w-full min-w-0 text-center"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="relative h-full overflow-hidden rounded-xl border border-white/75 bg-white/64 px-3 py-4 shadow-[0_10px_34px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)] sm:px-4">
        <img
          src={graduate.cover}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-125 object-cover opacity-[0.08] blur-xl transition-opacity duration-300 group-hover:opacity-[0.13]"
        />
        <div className="absolute inset-0 bg-white/72" />
        <div className="relative mx-auto mb-3 h-20 w-20 sm:h-24 sm:w-24">
          <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-4 ring-white/60">
            <img src={graduate.avatar} alt={graduate.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>

        <p className="relative truncate text-sm font-semibold text-gray-900 sm:text-base">{graduate.name}</p>
        <p className="relative mt-1 line-clamp-2 min-h-[36px] text-xs leading-relaxed text-gray-500">{graduate.quote}</p>
        <div className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-gray-500">
          <Camera className="h-3 w-3 text-primary-500" />
          {graduate.photoIds.length}张
        </div>
      </div>
    </motion.button>
  );
}
