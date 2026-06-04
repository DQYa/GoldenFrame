import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { videoContent } from '../../data/graduationData';
import { easeOutExpo } from '../../data/animationConfig';

export default function VideoSection() {
  const [showTip, setShowTip] = useState(false);

  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <h2 className="section-title">{videoContent.title}</h2>
          <p className="section-subtitle">把回忆用影像封存</p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          className="relative glass-panel rounded-2xl overflow-hidden cursor-pointer group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          onClick={() => setShowTip(true)}
        >
          {/* Cover image */}
          <div className="aspect-video relative overflow-hidden">
            <img
              src={videoContent.coverImage}
              alt="毕业影像封面"
              className="w-full h-full object-cover transition-transform duration-700
                         group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full
                           bg-white/80 backdrop-blur-md shadow-xl
                           flex items-center justify-center
                           group-hover:bg-white group-hover:scale-110
                           transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play
                  className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800 ml-1"
                  fill="currentColor"
                />
              </motion.div>
            </div>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <p className="text-sm text-gray-500 font-light">
              点击播放毕业纪念视频
            </p>
          </div>
        </motion.div>
      </div>

      {/* Coming soon tip modal */}
      {showTip && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowTip(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            className="relative z-10 glass-panel rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTip(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full
                         bg-gray-100 flex items-center justify-center
                         hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
            <Play className="w-10 h-10 text-primary-500 mx-auto mb-4" />
            <p className="text-gray-700 font-medium mb-2">视频功能</p>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {videoContent.placeholder}
            </p>
            <p className="text-xs text-gray-400 mt-3">
              可接入毕业纪念视频、花絮短片等内容
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
