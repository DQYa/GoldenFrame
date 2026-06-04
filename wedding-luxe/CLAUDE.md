# Wedding Luxe — GoldenFrame 第三套模板

## 项目定位

高端婚礼杂志风格的数字纪念册。不是婚礼相册网站，是一本可以翻阅的婚礼杂志。

参考：Vogue Wedding、高端婚纱摄影 editorial、婚礼请柬设计、电影感叙事。

## 关键词

仪式感 · 浪漫 · 承诺 · 高级 · 永恒

## 技术栈

- React 19 + TypeScript + Vite 8
- Tailwind CSS 3.4（香槟金配色体系）
- Framer Motion（视差、淡入、reveal 动画）
- lucide-react（图标）
- react-router-dom（路由）

## 目录结构

```
src/
├── components/wedding/
│   ├── HeroCover.tsx        # 杂志封面 Hero
│   ├── OurStory.tsx         # 爱情故事（交替布局）
│   ├── BridalEditorial.tsx  # 婚纱大片（杂志 editorial grid）
│   ├── CeremonySection.tsx  # 婚礼现场（hero/panorama/grid 混合）
│   ├── LovedOnes.tsx        # 亲友见证
│   ├── DetailsCollection.tsx # 细节收藏
│   ├── WeddingFilm.tsx      # 婚礼影片（letterbox 占位）
│   └── Credits.tsx          # 摄影团队
├── data/
│   ├── weddingData.ts       # 数据源
│   └── animationConfig.ts   # 共享动画配置
├── pages/
│   └── WeddingPage.tsx      # 主页面组装
├── App.tsx
├── main.tsx
└── index.css                # 杂志排版 CSS 组件
```

## 设计约束

### 色彩
- 主色调：champagne（香槟金）— cream 到 rich gold 渐变
- 背景：ivory（暖象牙白）
- 文字：charcoal（深炭灰，非纯黑）
- 点缀：blush（柔粉，极少使用）

### 排版
- 标题：Playfair Display（editorial serif）
- 正文：Cormorant Garamond（轻 editorial body）
- 中文：Noto Serif SC
- 装饰：Cinzel（luxury 点缀，仅用于 section number / folio）

### 原则
- 大图优先，留白比毕业模板更多
- 图片比例自由（16/9 / 4/5 / 3/4 / 21/9 / 32/9 混用）
- 不出现：胶片、拍立得、手账、纸胶带、便签条
- 杂志元素：section number、drop cap、pull quote、gold rule、folio

## 页面结构

01 Hero（全屏杂志封面）
02 Our Story（爱情故事 · 交替/全幅布局）
03 The Bridal Edit（婚纱大片 · editorial grid）
04 The Ceremony（婚礼现场 · hero/panorama/grid）
05 Loved Ones（亲友见证）
06 The Details（细节收藏 · 3列 grid）
07 The Wedding Film（婚礼影片 · letterbox）
08 The Creative Team（摄影团队 · masthead style）

## 命令

```bash
npm run dev      # 开发服务器
npm run build    # 生产构建
npm run preview  # 预览构建结果
```

## 照片目录

```
public/assets/wedding/
├── cover/       # 封面照片 (2)
├── bridal/      # 婚纱写真 (12)
├── ceremony/    # 婚礼现场 (7)
└── guests/      # 亲友合照 (5)
```

原始照片来源：`E:/GoldenFrame/wedding/`
