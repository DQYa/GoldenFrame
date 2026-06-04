import { motion } from 'framer-motion';
import PolaroidPhoto from './PolaroidPhoto';
import { polaroidPhotos } from '../../data/youthbookData';
import { easeOutExpo } from '../../data/animationConfig';

export default function ScrapbookSpread() {
  // 分两拨：第一页（主要照片），第二页（更多照片）
  const heroPhotos = polaroidPhotos.slice(0, 4);
  const gridPhotos = polaroidPhotos.slice(4, 16);

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6">
      {/* 标题 */}
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <h2 className="handwritten-title text-3xl sm:text-4xl md:text-5xl">
          光影收藏夹
        </h2>
        <p className="handwritten-subtitle text-lg md:text-xl mt-2">
          Photo Collection
        </p>
        <div className="page-divider mt-3">
          <span className="page-divider-icon">✦</span>
        </div>
      </motion.div>

      {/* ===== 第一跨页：精选大图 ===== */}
      <motion.div
        className="book-page rounded-lg p-6 sm:p-8 md:p-10 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="book-spread py-2">
          {/* 手写注解 */}
          <motion.p
            className="handwritten-subtitle text-center mb-6 text-ink-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            "每一张都舍不得删"
          </motion.p>

          {/* 大尺寸拍立得 - 错落排列 */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-start">
            {heroPhotos.map((photo, i) => (
              <div key={photo.id} className="relative">
                {/* 纸胶带装饰 */}
                <div
                  className="washi-tape"
                  style={{
                    transform: `translateX(-50%) rotate(${[-1, 2, -2, 1][i]}deg)`,
                    background: ['rgba(220,200,160,0.7)', 'rgba(200,180,140,0.65)', 'rgba(230,210,170,0.7)', 'rgba(210,190,150,0.65)'][i],
                  }}
                />
                <PolaroidPhoto
                  src={photo.src}
                  caption={photo.caption}
                  rotation={photo.rotation}
                  size="lg"
                />
              </div>
            ))}
          </div>

          {/* 手写注释 */}
          <motion.p
            className="text-center mt-8 text-ink-400 text-sm"
            style={{ fontFamily: "'Ma Shan Zheng', cursive", fontSize: '1rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            —— 按下快门的每一个瞬间，都是回不去的昨天 ——
          </motion.p>
        </div>
      </motion.div>

      {/* ===== 第二跨页：照片墙 ===== */}
      <motion.div
        className="book-page rounded-lg p-6 sm:p-8 md:p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="book-spread py-2">
          <p
            className="handwritten-title text-center mb-8 text-2xl text-ink-500"
          >
            更多回忆
          </p>

          {/* 密铺照片网格 - 模仿相册页面 */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {gridPhotos.map((photo, i) => (
              <div key={photo.id} className="relative">
                {/* 随机纸胶带 */}
                {i % 3 === 0 && (
                  <div
                    className="washi-tape washi-tape-accent"
                    style={{ transform: `translateX(-50%) rotate(${[-1.5, 2.5, -0.5, 1][i % 4]}deg)` }}
                  />
                )}
                <PolaroidPhoto
                  src={photo.src}
                  caption={photo.caption}
                  rotation={photo.rotation}
                  size="sm"
                />
              </div>
            ))}
          </div>

          {/* 页面底部的装饰 */}
          <div className="flex justify-center mt-8">
            <span
              className="text-ink-300 text-xs tracking-[0.3em]"
              style={{ fontFamily: "'Caveat', cursive", fontSize: '0.85rem' }}
            >
              — end of album —
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
