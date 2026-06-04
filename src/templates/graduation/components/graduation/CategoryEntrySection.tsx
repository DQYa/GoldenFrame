import { motion } from 'framer-motion';
import { easeOutExpo } from '../../data/animationConfig';
import type { ClassAlbum, DormAlbum, Graduate } from '../../data/graduationData';
import GraduateCard from './GraduateCard';
import DormCard from './DormCard';
import ClassFeatureCard from './ClassFeatureCard';

interface CategoryEntrySectionProps {
  graduates: Graduate[];
  dorms: DormAlbum[];
  classes: ClassAlbum[];
  onOpenGraduate: (graduate: Graduate) => void;
  onOpenDorm: (dorm: DormAlbum) => void;
  onOpenClass: (classAlbum: ClassAlbum) => void;
}

export default function CategoryEntrySection({
  graduates,
  dorms,
  classes,
  onOpenGraduate,
  onOpenDorm,
  onOpenClass,
}: CategoryEntrySectionProps) {
  const backgroundImages = [
    classes[0]?.cover,
    dorms[0]?.cover,
    graduates[1]?.cover,
    graduates[7]?.cover,
  ].filter(Boolean);

  return (
    <section className="relative isolate overflow-hidden px-4 py-12 sm:px-6 md:py-18 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {backgroundImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`absolute overflow-hidden rounded-[36px] opacity-[0.13] blur-xl ${
              index === 0
                ? '-right-24 top-8 h-72 w-72 sm:h-96 sm:w-96'
                : index === 1
                  ? '-left-28 top-[38%] h-72 w-80 sm:h-[28rem] sm:w-[34rem]'
                  : index === 2
                    ? 'right-[8%] bottom-28 h-64 w-64 sm:h-80 sm:w-80'
                    : 'left-[18%] bottom-0 h-56 w-72 sm:h-72 sm:w-[28rem]'
            }`}
          >
            <img src={src} alt="" aria-hidden="true" className="h-full w-full scale-125 object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-white/72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,119,240,0.08),transparent_34%),linear-gradient(180deg,rgba(248,249,252,0.4),rgba(248,249,252,0.92))]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-8 text-center md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <h2 className="section-title">毕业影像分类</h2>
          <p className="section-subtitle mx-auto max-w-2xl">从个人、宿舍到班级，把不同层次的青春记忆分开珍藏。</p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          <div className="rounded-[22px] border border-white/70 bg-white/38 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:p-4">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">个人写真</p>
                <p className="mt-1 text-sm font-light text-gray-500">每位毕业生都拥有自己的独立影像入口。</p>
              </div>
              <span className="hidden text-xs text-gray-400 sm:block">{graduates.length}位同学</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {graduates.map((graduate) => (
                <GraduateCard key={graduate.id} graduate={graduate} onClick={() => onOpenGraduate(graduate)} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">宿舍记忆</p>
                <p className="mt-1 text-sm font-light text-gray-500">室友、闺蜜、好友小团体，可以作为独立产品交付。</p>
              </div>
              <span className="hidden text-xs text-gray-400 sm:block">{dorms.length}组小团体</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none lg:grid lg:grid-cols-3 lg:overflow-visible">
              {dorms.map((dorm) => (
                <DormCard key={dorm.id} dorm={dorm} onClick={() => onOpenDorm(dorm)} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-900">班级合影</p>
              <p className="mt-1 text-sm font-light text-gray-500">更有仪式感的集体纪念馆，适合承载更高客单价交付。</p>
            </div>
            {classes.map((classAlbum) => (
              <ClassFeatureCard key={classAlbum.id} classAlbum={classAlbum} onClick={() => onOpenClass(classAlbum)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
