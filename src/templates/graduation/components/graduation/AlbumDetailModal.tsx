import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, Camera, UsersRound, X } from 'lucide-react';
import { easeOutExpo } from '../../data/animationConfig';
import type { AlbumEntry, Photo } from '../../data/graduationData';
import DetailPhotoGrid from './DetailPhotoGrid';

interface AlbumDetailModalProps {
  entry: AlbumEntry | null;
  photos: Photo[];
  isOpen: boolean;
  disableEscape?: boolean;
  onClose: () => void;
  onPhotoClick: (index: number) => void;
}

function getTitle(entry: AlbumEntry) {
  return entry.data.name;
}

function getSubtitle(entry: AlbumEntry) {
  if (entry.type === 'graduate') return '个人写真纪念馆';
  if (entry.type === 'dorm') return `${entry.data.members.length}人小团体纪念馆`;
  return `${entry.data.year} · ${entry.data.count}人`;
}

function getDescription(entry: AlbumEntry) {
  if (entry.type === 'graduate') return entry.data.quote;
  return entry.data.description;
}

function getCover(entry: AlbumEntry) {
  return entry.type === 'graduate' ? entry.data.cover : entry.data.cover;
}

export default function AlbumDetailModal({
  entry,
  photos,
  isOpen,
  disableEscape = false,
  onClose,
  onPhotoClick,
}: AlbumDetailModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    if (!disableEscape) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [disableEscape, isOpen, onClose]);

  if (!entry) return null;

  const variant = entry.type;
  const title = getTitle(entry);
  const subtitle = getSubtitle(entry);
  const description = getDescription(entry);
  const cover = getCover(entry);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-gray-950/45 p-0 backdrop-blur-xl sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden bg-[#f8f9fc]/95 shadow-2xl ring-1 ring-white/60 sm:rounded-[28px]"
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
          >
            <div className="flex items-center justify-between border-b border-white/70 bg-white/60 px-4 py-3 backdrop-blur-xl sm:px-5">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-white/80 transition hover:bg-white"
              >
                <ArrowLeft className="h-4 w-4" />
                返回
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-gray-500 shadow-sm ring-1 ring-white/80 transition hover:bg-white hover:text-gray-900"
                aria-label="关闭"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto">
              <div className="px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
                {variant === 'graduate' && (
                  <div className="mx-auto mb-7 max-w-3xl text-center">
                    <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border border-white/80 shadow-xl ring-4 ring-white/70 sm:h-32 sm:w-32">
                      <img src={entry.data.avatar} alt={title} className="h-full w-full object-cover" />
                    </div>
                    <p className="text-sm font-medium text-primary-600">{subtitle}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">{title}</h3>
                    <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-gray-500 sm:text-base">{description}</p>
                  </div>
                )}

                {variant !== 'graduate' && (
                  <div className="mb-7 overflow-hidden rounded-[24px] bg-white/70 shadow-lg ring-1 ring-white/80">
                    <div className={variant === 'class' ? 'aspect-[16/8] min-h-[260px]' : 'aspect-[16/9] min-h-[220px]'}>
                      <img src={cover} alt={title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5 sm:p-7">
                      <p className="text-sm font-medium text-primary-600">{subtitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-4xl">{title}</h3>
                      <p className="mt-3 max-w-3xl text-sm font-light leading-relaxed text-gray-500 sm:text-base">{description}</p>
                    </div>
                  </div>
                )}

                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="glass-panel rounded-2xl p-4">
                    <Camera className="mb-2 h-4 w-4 text-primary-500" />
                    <p className="text-2xl font-semibold text-gray-950">{photos.length}</p>
                    <p className="text-xs text-gray-500">张影像</p>
                  </div>
                  {variant === 'dorm' && (
                    <div className="glass-panel rounded-2xl p-4">
                      <UsersRound className="mb-2 h-4 w-4 text-primary-500" />
                      <p className="text-2xl font-semibold text-gray-950">{entry.data.members.length}</p>
                      <p className="text-xs text-gray-500">位成员</p>
                    </div>
                  )}
                  {variant === 'class' && (
                    <>
                      <div className="glass-panel rounded-2xl p-4">
                        <UsersRound className="mb-2 h-4 w-4 text-primary-500" />
                        <p className="text-2xl font-semibold text-gray-950">{entry.data.count}</p>
                        <p className="text-xs text-gray-500">位同学</p>
                      </div>
                      <div className="glass-panel rounded-2xl p-4">
                        <CalendarDays className="mb-2 h-4 w-4 text-primary-500" />
                        <p className="text-2xl font-semibold text-gray-950">{entry.data.year}</p>
                        <p className="text-xs text-gray-500">毕业年份</p>
                      </div>
                    </>
                  )}
                  {variant === 'graduate' && (
                    <div className="glass-panel rounded-2xl p-4">
                      <UsersRound className="mb-2 h-4 w-4 text-primary-500" />
                      <p className="text-2xl font-semibold text-gray-950">1</p>
                      <p className="text-xs text-gray-500">个人馆</p>
                    </div>
                  )}
                </div>

                {variant === 'dorm' && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {entry.data.members.map((member) => (
                      <span key={member} className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-white/80">
                        {member}
                      </span>
                    ))}
                  </div>
                )}

                <DetailPhotoGrid photos={photos} variant={variant} onPhotoClick={onPhotoClick} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
