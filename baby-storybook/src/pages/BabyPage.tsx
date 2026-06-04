import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import HeroCover from '../components/baby/HeroCover';
import GrowthStats from '../components/baby/GrowthStats';
import GrowthTimeline from '../components/baby/GrowthTimeline';
import CategoryCards from '../components/baby/CategoryCards';
import FamilyMoments from '../components/baby/FamilyMoments';
import GrowthVideo from '../components/baby/GrowthVideo';
import StudioCredits from '../components/baby/StudioCredits';
import AlbumModal from '../components/baby/AlbumModal';
import type { BabyCategory } from '../data/babyData';

export default function BabyPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState<BabyCategory | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: '#fdfaf5',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.55' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E\")",
      }}
    >
      <HeroCover />
      <GrowthStats />
      <GrowthTimeline />
      <CategoryCards onOpenCategory={setActiveCategory} />
      <FamilyMoments />
      <GrowthVideo />
      <StudioCredits />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button type="button" onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/90 border border-cream-300/30 shadow-soft backdrop-blur-sm hover:bg-cream-50 hover:shadow-card transition-all duration-300"
            initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }} transition={{ duration: 0.3 }}
            aria-label="返回顶部">
            <ArrowUp className="h-4 w-4 text-warm-500" />
          </motion.button>
        )}
      </AnimatePresence>

      <AlbumModal category={activeCategory} onClose={() => setActiveCategory(null)} />
    </main>
  );
}
