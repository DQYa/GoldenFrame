import { ArrowUpRight, Camera, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const templates = [
  {
    title: '高级极简风',
    path: '/graduation',
    cover: '/assets/graduation/hero/hero-bg.jpg',
    intro: 'Notion / Apple 风格的毕业数字纪念馆，适合影楼展示高端交付感。',
    scene: '毕业写真、班级合影、校园摄影交付',
  },
  {
    title: '青春纪念册风',
    path: '/youthbook',
    cover: '/assets/graduation/featured/04.jpg',
    intro: '像一本可以翻开的青春手账，把照片、寄语和时间线放进同一个故事里。',
    scene: '校园毕业季、社团纪念、同学聚会',
  },
  {
    title: 'Wedding Luxe',
    path: '/wedding',
    cover: '/assets/wedding/cover/01.jpg',
    intro: '杂志感婚礼影像专题，用更克制、更奢华的方式呈现婚礼故事。',
    scene: '婚纱摄影、婚礼跟拍、高客单婚礼交付',
  },
  {
    title: 'Baby Storybook',
    path: '/baby',
    cover: '/assets/baby/cover/01.jpg',
    intro: '温柔的宝宝成长纪念馆，将新生儿、百天、周岁与家庭瞬间串成故事。',
    scene: '亲子摄影、宝宝成长照、家庭纪念册',
  },
];

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

        <div className="mx-auto grid max-w-7xl gap-10 pb-10 pt-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:pb-16 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-sm text-neutral-500 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary-500" />
              More Than An Album
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              GoldenFrame
            </h1>
            <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-neutral-600 sm:text-xl">
              将照片升级为可分享、可传播、具有仪式感的数字纪念馆。
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
              面向影楼、摄影工作室和内容交付团队，把一次拍摄变成一个可打开、可传播、可增值售卖的高质感数字空间。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {templates.map((template, index) => (
              <Link
                key={template.path}
                to={template.path}
                className={`group relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/75 bg-white/64 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/78 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)] ${
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
                  <h2 className="text-2xl font-semibold tracking-tight">{template.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-white/78">
                    {template.intro}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-medium text-white">查看模板</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
