# Baby Storybook — GoldenFrame 第四套模板

## 定位

温暖的宝宝成长手账 / 成长记录册。不是普通儿童摄影相册，是一本可以被长期保存的成长纪念册。

## 关键词

成长 · 陪伴 · 柔软 · 温暖 · 治愈 · 亲子 · 第一次

## 技术栈

React 19 + TypeScript + Vite 8 + Tailwind CSS 3.4 + Framer Motion + lucide-react

## 配色

cream（奶油米白）· apricot（浅杏桃）· milk（暖白）· sage（鼠尾草绿点缀）· warm（暖棕文字）

## 字体

- 标题：Nunito（圆润温暖无衬线）
- 正文中文：Noto Serif SC
- 装饰手写：Dancing Script

## 目录结构

```
src/components/baby/
├── HeroCover.tsx         # Hero — 圆形宝宝照片 + 软背景
├── GrowthStats.tsx       # 成长数据 — 4 个统计卡片
├── GrowthTimeline.tsx    # 成长时间轴 — 左右交替
├── CategoryCards.tsx     # 分类入口 — 点击打开 AlbumModal
├── FamilyMoments.tsx     # 亲子时光 — 3 列 grid
├── GrowthVideo.tsx       # 成长影片 — letterbox placeholder
├── StudioCredits.tsx     # 摄影机构 — CTA 按钮
├── SnapNav.tsx           # 导航点 + 滚动提示
├── AlbumModal.tsx        # 分类详情 Modal + ImageLightbox
└── (ImageLightbox inline in AlbumModal)
```

## 页面结构（7 屏 snap scroll）

1. Hero（封面 · 宝宝照片 + 标题）
2. 成长数据（365天 / 12个月 / 第一次微笑 / 第一次走路）
3. 成长时间轴（出生 → 百日 → 六个月 → 九个月 → 周岁）
4. 成长相册（4 个分类入口：新生儿/百日/周岁/亲子）
5. 亲子时光（6 张精选家庭照）
6. 成长影片（视频占位）
7. 摄影机构（credit + CTA）

## 交互

- 分类入口点击 → 底部 Sheet Modal → 内部瀑布流照片 → 点击放大 Lightbox
- ESC 关闭 Lightbox / Modal
- Modal 打开时锁定 snap 容器滚动

## 照片目录

```
public/assets/baby/
├── cover/       # 封面 (2)
├── newborn/     # 新生儿 (3，取自百日)
├── 100days/     # 百日 (5)
├── oneyear/     # 周岁 (5)
└── family/      # 亲子 (15)
```

## 命令

```bash
npm run dev      # → http://localhost:5173/baby
npm run build    # 生产构建
```
