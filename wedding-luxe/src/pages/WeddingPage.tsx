import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import HeroCover from '../components/wedding/HeroCover';
import OurStory from '../components/wedding/OurStory';
import BridalEditorial from '../components/wedding/BridalEditorial';
import CeremonySection from '../components/wedding/CeremonySection';
import LovedOnes from '../components/wedding/LovedOnes';
import DetailsCollection from '../components/wedding/DetailsCollection';
import WeddingFilm from '../components/wedding/WeddingFilm';
import Credits from '../components/wedding/Credits';

export default function WeddingPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

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
        backgroundColor: '#fefcf8',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.012'/%3E%3C/svg%3E\")",
      }}
    >
      <HeroCover />
      <OurStory />
      <BridalEditorial />
      <CeremonySection />
      <LovedOnes />
      <DetailsCollection />
      <WeddingFilm />
      <Credits />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button type="button" onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100/90 border border-champagne-300/30 shadow-editorial backdrop-blur-sm hover:bg-ivory-50 hover:shadow-magazine transition-all duration-300"
            initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }} transition={{ duration: 0.3 }}
            aria-label="返回顶部">
            <ArrowUp className="h-4 w-4 text-champagne-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
