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
      <nav className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3" aria-label="页面导航">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} type="button" onClick={() => onNavigate(i)} className="group relative flex items-center"
            aria-label={labels[i]} aria-current={i === currentIndex ? 'true' : undefined}>
            <motion.span whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}
              className={`block rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-2.5 h-2.5 bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.4)]'
                  : 'w-1.5 h-1.5 bg-gray-300/60 hover:bg-gray-400/70'
              }`} />
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm pointer-events-none">
              {labels[i]}
            </span>
          </button>
        ))}
      </nav>

      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50" aria-label="页面导航">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} type="button" onClick={() => onNavigate(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-5 h-1.5 bg-blue-500/80 rounded-full' : 'w-1.5 h-1.5 bg-gray-300/50'
            }`}
            aria-label={labels[i]} aria-current={i === currentIndex ? 'true' : undefined} />
        ))}
      </nav>

      <AnimatePresence>
        {currentIndex === 0 && (
          <motion.div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <span className="text-gray-400 text-xs tracking-widest">向下翻阅</span>
            <motion.div className="w-4 h-4 border-r-2 border-b-2 border-gray-300/50 rotate-45"
              animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
