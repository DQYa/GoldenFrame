import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const templates = [
  {
    title: '高级极简风',
    path: '/graduation',
    cover: '/assets/graduation/hero/hero-bg.jpg',
    intro: 'Notion / Apple 风格的毕业数字纪念馆，适合影楼展示高端交付感。',
    scene: '毕业写真、班级合影、校园摄影交付',
  },
  {
    title: '青春校园风',
    path: '/youthbook',
    cover: '/assets/graduation/featured/04.jpg',
    intro: '像一本可以翻开的青春手账，把照片、寄语和时间线放进同一个故事里。',
    scene: '校园毕业季、社团纪念、同学聚会',
  },
  {
    title: '婚礼电影风',
    path: '/wedding',
    cover: '/assets/wedding/cover/01.jpg',
    intro: '杂志感婚礼影像专题，用克制、奢华的方式呈现一场婚礼的完整叙事。',
    scene: '婚纱摄影、婚礼跟拍、高客单婚礼交付',
  },
  {
    title: '成长绘本风',
    path: '/baby',
    cover: '/assets/baby/cover/01.jpg',
    intro: '温柔的宝宝成长纪念馆，将新生儿、百天、周岁与家庭瞬间串成故事。',
    scene: '亲子摄影、宝宝成长照、家庭纪念册',
  },
];

const processSteps = [
  ['01', '客户需求', '确认纪念馆类型、使用场景、交付周期与品牌露出方式。'],
  ['02', '摄影师提供照片', '上传精修图、花絮、视频封面、寄语与客户基础信息。'],
  ['03', '网站制作', '基于模板定制结构、文案、照片分组与数字纪念馆动效。'],
  ['04', '客户审核', '通过预览链接检查照片、文字、排序和细节展示。'],
  ['05', '正式交付', '生成公网链接，可分享、可传播，也可作为增值产品售卖。'],
];

const cases = [
  {
    title: '毕业纪念',
    cover: '/assets/graduation/featured/01.jpg',
    description: '把个人写真、宿舍记忆、班级合影拆成独立入口，形成可持续传播的毕业纪念馆。',
    meta: '校园摄影 / 班级交付 / 50-100 张照片',
  },
  {
    title: '婚礼纪念',
    cover: '/assets/wedding/cover/02.jpg',
    description: '用电影感章节承载婚礼当天的故事、亲友、誓言与仪式瞬间。',
    meta: '婚礼跟拍 / 高客单交付 / 家庭分享',
  },
  {
    title: '成长纪念',
    cover: '/assets/baby/family/01.jpg',
    description: '把宝宝成长节点变成一本轻柔的数字绘本，让家庭照片更容易被反复打开。',
    meta: '亲子摄影 / 成长记录 / 家庭纪念',
  },
];

const timelineItems = [
  ['Day 1', '收到素材', '完成照片清点、分组建议和模板方向确认。'],
  ['Day 2', '首版搭建', '完成首页、核心章节和主要照片墙排版。'],
  ['Day 3', '细节优化', '补齐寄语、视频封面、品牌信息与移动端适配。'],
  ['Day 4', '客户验收', '交付预览链接，收集一轮修改意见。'],
  ['Day 5', '上线交付', '生成正式访问链接，可用于朋友圈、社群和客户留存。'],
];

const messages = [
  ['摄影工作室主理人', '客户第一次打开链接时，能立刻感受到这不是网盘，而是一份正式的影像礼物。'],
  ['校园摄影师', '班级合影和个人写真终于可以分开展示，每个学生都有自己的入口。'],
  ['婚礼跟拍团队', '比普通相册更有仪式感，也更容易解释为什么这是一个可增值的交付产品。'],
  ['亲子摄影品牌', '成长照用时间线展示后，家长更愿意反复打开，也更愿意分享给家人。'],
];

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">{description}</p>
    </Reveal>
  );
}

function TemplateCard({
  template,
  index,
}: {
  template: (typeof templates)[number];
  index: number;
}) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        to={template.path}
        className={`group relative block min-h-[320px] overflow-hidden rounded-[28px] border border-white/75 bg-white/64 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/78 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)] ${
          index === 0 ? 'sm:translate-y-8' : index === 3 ? 'sm:-translate-y-8' : ''
        }`}
      >
        <img
          src={template.cover}
          alt={template.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/24 to-white/8" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs backdrop-blur-md">
              {template.scene}
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/88 text-neutral-950 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">{template.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-white/78">{template.intro}</p>
          <span className="mt-5 inline-flex text-sm font-medium text-white">查看模板</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f4] text-[#171717]">
      <section className="relative isolate px-5 py-6 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src="/assets/graduation/featured/01.jpg"
            alt=""
            aria-hidden="true"
            className="absolute -right-24 -top-20 h-[360px] w-[360px] scale-125 rounded-[48px] object-cover opacity-[0.10] blur-2xl sm:h-[520px] sm:w-[520px]"
          />
          <img
            src="/assets/wedding/cover/02.jpg"
            alt=""
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 h-[340px] w-[420px] scale-125 rounded-[48px] object-cover opacity-[0.08] blur-2xl sm:h-[460px] sm:w-[620px]"
          />
          <div className="absolute inset-0 bg-white/72" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,119,240,0.08),transparent_34%),linear-gradient(180deg,rgba(247,247,244,0.4),rgba(247,247,244,1))]" />
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-sm">
              <Camera className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">GoldenFrame</span>
          </Link>
          <span className="hidden rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm text-neutral-500 backdrop-blur-xl sm:inline-flex">
            Digital Memorial Gallery Platform
          </span>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 pb-16 pt-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:pb-24 lg:pt-24">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-sm text-neutral-500 shadow-sm backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-primary-500" />
              More Than An Album
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-2xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            >
              GoldenFrame
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg font-light leading-relaxed text-neutral-600 sm:text-xl">
              将照片升级为可分享、可传播、具有仪式感的数字纪念馆。
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
              面向影楼、摄影工作室和内容交付团队，把一次拍摄变成一个可打开、可传播、可增值售卖的高质感数字空间。
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {templates.map((template, index) => (
              <TemplateCard key={template.path} template={template} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Service Flow"
            title="从照片到数字纪念馆，一条清晰的交付流程"
            description="GoldenFrame 不是替代摄影，而是把摄影作品包装成更完整、更好分享、更有价格感的最终交付。"
          />
          <motion.div
            className="grid gap-3 md:grid-cols-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {processSteps.map(([num, title, text]) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="rounded-[24px] border border-black/5 bg-white/64 p-5 shadow-[0_14px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl"
              >
                <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-neutral-300">{num}</p>
                <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Selected Cases"
            title="让不同摄影业务，都拥有可展示的数字交付"
            description="毕业、婚礼、亲子成长，每一类影像都可以拥有自己的叙事结构，而不是只被放进同一个相册列表。"
          />
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {cases.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group overflow-hidden rounded-[28px] border border-white/75 bg-white/64 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.cover} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-neutral-400">{item.meta}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-500">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Template Center"
            title="模板选择中心"
            description="先用成熟模板快速建立商业演示，再根据工作室风格、客户类型和照片体量做定制。"
          />
          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {templates.map((template) => (
              <motion.div key={template.path} variants={fadeUp}>
                <Link
                  to={template.path}
                  className="group block rounded-[24px] border border-black/5 bg-white/64 p-4 shadow-[0_14px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/78"
                >
                  <div className="aspect-[16/11] overflow-hidden rounded-[18px]">
                    <img src={template.cover} alt={template.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-950">{template.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-500">{template.scene}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-neutral-400" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Delivery Timeline"
            title="一套可被客户理解的制作节奏"
            description="用时间轴呈现交付过程，让影楼老板和最终客户都知道每一步在发生什么。"
          />
          <div className="mx-auto max-w-4xl">
            {timelineItems.map(([day, title, text], index) => (
              <Reveal key={day} className="relative pl-10">
                <div className="absolute left-3 top-0 h-full w-px bg-neutral-200" />
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
                  <Clock3 className="h-3 w-3 text-neutral-400" />
                </div>
                <div className={`pb-8 ${index === timelineItems.length - 1 ? 'pb-0' : ''}`}>
                  <div className="rounded-[22px] border border-black/5 bg-white/64 p-5 shadow-[0_14px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{day}</p>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-500">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Message Wall"
            title="寄语墙"
            description="模拟来自不同摄影业务场景的反馈，用真实语气解释数字纪念馆的商业价值。"
          />
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {messages.map(([author, text]) => (
              <motion.div
                key={author}
                variants={fadeUp}
                className="rounded-[24px] border border-black/5 bg-white/64 p-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl"
              >
                <MessageSquareText className="h-5 w-5 text-primary-500/70" />
                <p className="mt-5 text-lg font-light leading-8 text-neutral-700">“{text}”</p>
                <p className="mt-5 text-sm font-medium text-neutral-400">{author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-20 sm:px-8 lg:px-10">
        <Reveal className="mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-white/75 bg-white/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:grid-cols-[0.92fr_1.08fr] md:p-10">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">Contact</p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">联系我们</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
              如果你是影楼、摄影工作室或校园摄影师，可以用 GoldenFrame 把现有照片产品升级成可演示、可传播、可售卖的数字纪念馆。
            </p>
            <div className="mt-8 space-y-3 text-sm text-neutral-600">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-neutral-400" />
                3033903962@qq.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-neutral-400" />
                13246016150
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-neutral-400" />
                支持模板演示、品牌定制、照片分组与公网交付
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-sm flex-col items-center rounded-[28px] border border-black/5 bg-[#f7f7f4] p-8 text-center">
              <div className="grid h-44 w-44 place-items-center overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-2 shadow-sm">
                <img
                  src="/assets/contact/wechat-qr.jpg"
                  alt="GoldenFrame 微信二维码"
                  className="h-full w-full rounded-[18px] object-cover"
                />
              </div>
              <p className="mt-5 text-base font-semibold text-neutral-950">扫码添加微信</p>
              <p className="mt-2 text-sm leading-6 text-neutral-500">咨询模板演示、品牌定制与数字纪念馆交付方案。</p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
