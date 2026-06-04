import { motion } from 'framer-motion';
import { easeOutExpo } from '../../data/animationConfig';
import type { Photo } from '../../data/graduationData';

interface Story {
  title: string;
  subtitle: string;
  photos: Photo[];
}

interface StoryCardsProps {
  stories: Story[];
  onPhotoClick: (photoIndex: number, storyIndex: number) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export default function StoryCards({ stories, onPhotoClick }: StoryCardsProps) {
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
          <h2 className="section-title">青春故事</h2>
          <p className="section-subtitle">每一张照片背后，都有一段故事</p>
        </motion.div>

        {/* Story cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {stories.map((story, sIdx) => (
            <motion.div
              key={story.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: sIdx * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group/card
                         hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              {/* Photo collage — 3-4 small images arranged in a compact grid */}
              <div className="grid grid-cols-2 gap-1 p-3 pb-0">
                {story.photos.slice(0, 4).map((photo, pIdx) => {
                  // First image spans full width, rest are half
                  const isHero = pIdx === 0 && story.photos.length >= 3;
                  return (
                    <div
                      key={photo.id}
                      className={`overflow-hidden rounded-lg ${isHero ? 'col-span-2' : ''}`}
                      onClick={() => onPhotoClick(pIdx, sIdx)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-500
                                   group-hover/card:scale-105
                                   ${isHero ? 'aspect-[3/2]' : 'aspect-square'}`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Story text */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {story.subtitle}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {story.photos.length} 张照片
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { Story };
