import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import HeroSection from '../components/graduation/HeroSection';
import StatsSection from '../components/graduation/StatsSection';
import FeaturedGallery from '../components/graduation/FeaturedGallery';
import CategoryEntrySection from '../components/graduation/CategoryEntrySection';
import MasonryWall from '../components/graduation/MasonryWall';
import AlbumDetailModal from '../components/graduation/AlbumDetailModal';
import AdvancedLightbox from '../components/graduation/AdvancedLightbox';
import QuoteSection from '../components/graduation/QuoteSection';
import VideoSection from '../components/graduation/VideoSection';
import StudioSection from '../components/graduation/StudioSection';
import { easeOutExpo } from '../data/animationConfig';
import {
  classes,
  dorms,
  getFeaturedPhotos,
  getPhotosByIds,
  getRecentPhotos,
  graduates,
} from '../data/graduationData';
import type { AlbumEntry, ClassAlbum, DormAlbum, Graduate, Photo } from '../data/graduationData';

function RecentUpdatesSection({
  photos,
  onPhotoClick,
}: {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}) {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-8 text-center md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <h2 className="section-title">最近更新</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            首页只保留一部分新片预览，完整影像已收纳在个人、宿舍和班级纪念馆中。
          </p>
        </motion.div>
        <MasonryWall photos={photos} onPhotoClick={onPhotoClick} />
      </div>
    </section>
  );
}

function EndingSection() {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-center md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.p
          className="mb-4 font-display text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          青春不散场
        </motion.p>
        <motion.div
          className="mx-auto my-6 h-px w-12 bg-gray-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.p
          className="text-xl font-light tracking-wide text-gray-500 sm:text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
        >
          愿我们在更高处相见
        </motion.p>
        <motion.p
          className="mt-8 text-sm font-light text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          2026届毕业纪念馆 · 光影纪年 Studio
        </motion.p>
      </div>
    </section>
  );
}

export default function GraduationPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeEntry, setActiveEntry] = useState<AlbumEntry | null>(null);
  const [lightboxPhotos, setLightboxPhotos] = useState<Photo[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const featuredPhotos = useMemo(() => getFeaturedPhotos(), []);
  const recentPhotos = useMemo(() => getRecentPhotos(18), []);
  const modalPhotos = useMemo(() => {
    if (!activeEntry) return [];
    return getPhotosByIds(activeEntry.data.photoIds);
  }, [activeEntry]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = useCallback((photos: Photo[], index: number) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const openFeaturedPhoto = useCallback(
    (photo: Photo) => {
      const index = featuredPhotos.findIndex((item) => item.id === photo.id);
      openLightbox(featuredPhotos, Math.max(index, 0));
    },
    [featuredPhotos, openLightbox]
  );

  const openGraduate = (graduate: Graduate) => setActiveEntry({ type: 'graduate', data: graduate });
  const openDorm = (dorm: DormAlbum) => setActiveEntry({ type: 'dorm', data: dorm });
  const openClass = (classAlbum: ClassAlbum) => setActiveEntry({ type: 'class', data: classAlbum });

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <HeroSection />
      <StatsSection />
      <FeaturedGallery onPhotoClick={openFeaturedPhoto} />
      <CategoryEntrySection
        graduates={graduates} dorms={dorms} classes={classes}
        onOpenGraduate={openGraduate} onOpenDorm={openDorm} onOpenClass={openClass}
      />
      <RecentUpdatesSection photos={recentPhotos} onPhotoClick={(index) => openLightbox(recentPhotos, index)} />
      <QuoteSection />
      <VideoSection />
      <StudioSection />
      <EndingSection />

      <AlbumDetailModal
        entry={activeEntry} photos={modalPhotos} isOpen={!!activeEntry}
        disableEscape={lightboxOpen} onClose={() => setActiveEntry(null)}
        onPhotoClick={(index) => openLightbox(modalPhotos, index)}
      />
      <AdvancedLightbox
        photos={lightboxPhotos} currentIndex={lightboxIndex} isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)} onNavigate={setLightboxIndex}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button type="button" onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-lg backdrop-blur-xl hover:bg-white hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }} transition={{ duration: 0.3 }}
            aria-label="返回顶部">
            <ArrowUp className="h-5 w-5 text-gray-600" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
