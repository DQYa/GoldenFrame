import { motion } from 'framer-motion';
import { timelineEvents } from '../../data/youthbookData';
import { easeOutExpo } from '../../data/animationConfig';

function TimelineNode({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* 节点 */}
      <div className="relative flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-amber-400/60 border-2 border-amber-300/50" />
      </div>
      {/* 日期 */}
      <span
        className="text-xs text-ink-400 tracking-wider"
        style={{ fontFamily: "'Caveat', 'Ma Shan Zheng', cursive", fontSize: '0.9rem' }}
      >
        {date}
      </span>
    </div>
  );
}

function TimelineCard({
  title,
  description,
  photoSrc,
  side,
  index,
}: {
  title: string;
  description: string;
  photoSrc: string;
  side: 'left' | 'right';
  index: number;
}) {
  const isLeft = side === 'left';

  return (
    <motion.div
      className={`relative flex items-start gap-4 md:gap-6 ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: easeOutExpo }}
    >
      {/* 内容卡片 */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div
          className={`inline-block max-w-[280px] sm:max-w-[320px] paper-note ${
            isLeft ? 'rounded-l-lg rounded-br-lg' : 'rounded-r-lg rounded-bl-lg'
          }`}
        >
          <h4
            className="text-base md:text-lg text-ink-800 mb-1"
            style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
          >
            {title}
          </h4>
          <p className="text-sm text-ink-500 leading-relaxed font-serif">
            {description}
          </p>
        </div>
      </div>

      {/* 照片 — 小拍立得 */}
      <div className="flex-shrink-0">
        <div className="polaroid w-[100px] sm:w-[120px]" style={{ transform: `rotate(${isLeft ? 1.5 : -1.5}deg)` }}>
          <img src={photoSrc} alt={title} loading="lazy" className="w-full aspect-square object-cover" />
        </div>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6">
      {/* 标题 */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <h2 className="handwritten-title text-3xl sm:text-4xl md:text-5xl">
          我们的四年
        </h2>
        <p className="handwritten-subtitle text-lg md:text-xl mt-2">
          Our Four Years
        </p>
        <div className="page-divider mt-3">
          <span className="page-divider-icon">✦</span>
        </div>
      </motion.div>

      {/* 时间轴容器 */}
      <div className="relative max-w-3xl mx-auto">
        {/* 中轴线 */}
        <div className="timeline-line hidden md:block" />

        {/* 事件列表 */}
        <div className="flex flex-col gap-12 md:gap-16">
          {timelineEvents.map((event, i) => (
            <div key={event.id} className="relative">
              {/* 移动端：节点在上方 */}
              <div className="md:hidden mb-3">
                <TimelineNode date={event.date} />
              </div>

              {/* 桌面端：节点在中间 */}
              <div className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 z-10">
                <TimelineNode date={event.date} />
              </div>

              <TimelineCard
                title={event.title}
                description={event.description}
                photoSrc={event.photoSrc}
                side={event.side}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* 时间轴终点 */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-amber-400/40" />
            <span
              className="text-amber-500/60 text-sm tracking-widest"
              style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
            >
              未完待续
            </span>
            <div className="w-8 h-px bg-amber-400/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
