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
      {/* Desktop: right-side dots */}
      <nav className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3" aria-label="页面导航">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} type="button" onClick={() => onNavigate(i)} className="group relative flex items-center"
            aria-label={labels[i]} aria-current={i === currentIndex ? 'true' : undefined}>
            <motion.span
              whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}
              className={`block rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-2.5 h-2.5 bg-amber-500/80 shadow-[0_0_8px_rgba(200,160,100,0.4)]'
                  : 'w-1.5 h-1.5 bg-ink-300/40 hover:bg-ink-400/60'
              }`}
            />
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-ink-400 whitespace-nowrap bg-paper-50/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm pointer-events-none">
              {labels[i]}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile: bottom dots */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-paper-100/80 backdrop-blur-sm shadow-page border border-amber-300/20" aria-label="页面导航">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} type="button" onClick={() => onNavigate(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-5 h-1.5 bg-amber-500/80 rounded-full' : 'w-1.5 h-1.5 bg-ink-300/40'
            }`}
            aria-label={labels[i]} aria-current={i === currentIndex ? 'true' : undefined} />
        ))}
      </nav>

      {/* Scroll hint — only on first section */}
      <AnimatePresence>
        {currentIndex === 0 && (
          <motion.div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <span className="text-ink-400/60 text-xs tracking-widest" style={{ fontFamily: "'Ma Shan Zheng', 'Caveat', cursive" }}>向下翻阅</span>
            <motion.div className="w-4 h-4 border-r-2 border-b-2 border-ink-400/40 rotate-45"
              animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
