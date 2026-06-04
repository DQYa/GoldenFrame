import { motion } from 'framer-motion';
import { messages } from '../../data/youthbookData';
import type { MessageNote } from '../../data/youthbookData';
import { easeOutExpo } from '../../data/animationConfig';

function MessageCard({ note, index }: { note: MessageNote; index: number }) {
  return (
    <motion.div
      className="relative paper-note folded-corner rounded-lg"
      style={{ transform: `rotate(${note.rotation}deg)` }}
      initial={{ opacity: 0, y: 30, rotate: note.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: note.rotation }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: easeOutExpo }}
      whileHover={{
        scale: 1.03,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
    >
      {/* 图钉 */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4">
        <div className="w-4 h-4 rounded-full bg-red-400/60 shadow-sm border border-red-300/40" />
        <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-red-300/40" />
      </div>

      {/* 留言内容 */}
      <p
        className="text-sm md:text-base text-ink-700 leading-relaxed mb-3"
        style={{ fontFamily: "'Ma Shan Zheng', 'Caveat', cursive", fontSize: '1.05rem' }}
      >
        {note.text}
      </p>

      {/* 署名 */}
      <div className="text-right">
        <span
          className="text-xs text-ink-400"
          style={{ fontFamily: "'Caveat', 'Ma Shan Zheng', cursive" }}
        >
          — {note.author}
        </span>
        <span className="text-[10px] text-ink-300 ml-1">({note.role})</span>
      </div>
    </motion.div>
  );
}

export default function MessageNotes() {
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
          毕业寄语
        </h2>
        <p className="handwritten-subtitle text-lg md:text-xl mt-2">
          Messages for You
        </p>
        <div className="page-divider mt-3">
          <span className="page-divider-icon">✦</span>
        </div>
      </motion.div>

      {/* 留言纸条 - 错落排列 */}
      <div className="max-w-4xl mx-auto">
        <div className="book-page rounded-lg p-6 sm:p-8 md:p-10">
          <div className="book-spread py-2">
            <div className="flex flex-wrap justify-center gap-5 md:gap-6">
              {messages.map((note, i) => (
                <div key={note.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <MessageCard note={note} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
