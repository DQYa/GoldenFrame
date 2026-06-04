import { motion, AnimatePresence } from 'framer-motion';

interface SnapNavProps {
  currentIndex: number;
  total: number;
  labels: string[];
  onNavigate: (index: number) => void;
}

export default function SnapNav({ currentIndex, total, labels, onNavigate }: SnapNavProps) {
  if (total <= 1) return null;

  return (
    <>
      <nav className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3" aria-label="Page navigation">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} type="button" onClick={() => onNavigate(i)} className="group relative flex items-center"
            aria-label={labels[i]} aria-current={i === currentIndex ? 'true' : undefined}>
            <motion.span whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}
              className={`block rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? 'w-2.5 h-2.5 bg-champagne-500 shadow-[0_0_10px_rgba(212,176,106,0.5)]'
                  : 'w-1.5 h-1.5 bg-champagne-300/40 hover:bg-champagne-400/60'
              }`} />
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-champagne-400/70 whitespace-nowrap tracking-[0.2em] pointer-events-none font-luxury">
              {labels[i]}
            </span>
          </button>
        ))}
      </nav>

      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-ivory-100/80 backdrop-blur-sm shadow-editorial border border-champagne-300/20" aria-label="Page navigation">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} type="button" onClick={() => onNavigate(i)}
            className={`rounded-full transition-all duration-500 ${
              i === currentIndex ? 'w-5 h-1.5 bg-champagne-500 rounded-full' : 'w-1.5 h-1.5 bg-champagne-300/30'
            }`}
            aria-label={labels[i]} aria-current={i === currentIndex ? 'true' : undefined} />
        ))}
      </nav>

      <AnimatePresence>
        {currentIndex === 0 && (
          <motion.div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 pointer-events-none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <span className="text-champagne-300/50 text-xs tracking-[0.3em] font-luxury">SCROLL</span>
            <motion.div className="w-px h-10 bg-gradient-to-b from-champagne-400/40 to-transparent"
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
