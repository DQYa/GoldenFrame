import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { easeOutExpo } from '../../data/animationConfig';
import type { Person } from '../../data/graduationData';

interface PeopleViewProps {
  people: Person[];
  activePersonId: string | null;
  onSelect: (personId: string | null) => void;
}

export default function PeopleView({ people, activePersonId, onSelect }: PeopleViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 200;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <h2 className="section-title">每个人的毕业瞬间</h2>
          <p className="section-subtitle">点击头像，查看属于 TA 的全部照片</p>
        </motion.div>

        {/* Horizontal scrollable avatar cards */}
        <div className="relative">
          {/* Desktop scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-8 h-8 rounded-full bg-white/80 backdrop-blur-md shadow-md
                       items-center justify-center hover:bg-white transition-colors"
            aria-label="向左滑动"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-8 h-8 rounded-full bg-white/80 backdrop-blur-md shadow-md
                       items-center justify-center hover:bg-white transition-colors"
            aria-label="向右滑动"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-3 md:gap-4 overflow-x-auto px-1 pb-2
                       scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* "All" button */}
            <motion.button
              onClick={() => onSelect(null)}
              className={`flex-shrink-0 flex flex-col items-center gap-2 snap-start
                transition-all duration-200`}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center
                  border-2 transition-all duration-200
                  ${activePersonId === null
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
              >
                <span className={`text-lg font-semibold
                  ${activePersonId === null ? 'text-primary-600' : 'text-gray-400'}`}>
                  全部
                </span>
              </div>
              <span className={`text-xs font-medium
                ${activePersonId === null ? 'text-primary-600' : 'text-gray-500'}`}>
                全部
              </span>
            </motion.button>

            {/* Person cards */}
            {people.map((person) => (
              <motion.button
                key={person.id}
                onClick={() => onSelect(person.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-2 snap-start
                  transition-all duration-200`}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
              >
                {/* Avatar */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden
                    border-2 transition-all duration-200
                    ${activePersonId === person.id
                      ? 'border-primary-500 shadow-lg shadow-primary-500/20 ring-2 ring-primary-500/20'
                      : 'border-white/80 hover:border-gray-300'
                    }`}
                >
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + count */}
                <div className="text-center">
                  <p className={`text-xs font-medium leading-tight
                    ${activePersonId === person.id ? 'text-primary-700' : 'text-gray-700'}`}>
                    {person.name}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {person.photoIds.length} 张
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active person description */}
        {activePersonId && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <p className="text-sm text-gray-500 font-light italic">
              "{people.find((p) => p.id === activePersonId)?.description}"
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
