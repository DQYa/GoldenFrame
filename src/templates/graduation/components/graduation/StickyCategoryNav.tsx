import { motion } from 'framer-motion';
import type { PhotoCategory } from '../../data/graduationData';

interface CategoryItem {
  key: PhotoCategory | 'all';
  label: string;
}

const categories: CategoryItem[] = [
  { key: 'all', label: '全部' },
  { key: 'portrait', label: '个人写真' },
  { key: 'dorm', label: '宿舍记忆' },
  { key: 'class', label: '班级合影' },
  { key: 'behind', label: '花絮瞬间' },
];

interface StickyCategoryNavProps {
  active: PhotoCategory | 'all';
  onChange: (key: PhotoCategory | 'all') => void;
}

export default function StickyCategoryNav({ active, onChange }: StickyCategoryNavProps) {
  return (
    <nav className="sticky top-0 z-30 backdrop-blur-xl bg-white/70 border-b border-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 sm:gap-2 py-3 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => onChange(cat.key)}
              className={`relative flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium
                transition-all duration-200
                ${active === cat.key
                  ? 'text-white bg-primary-500 shadow-md shadow-primary-500/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
            >
              {cat.label}
              {active === cat.key && (
                <motion.div
                  layoutId="category-pill"
                  className="absolute inset-0 bg-primary-500 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
