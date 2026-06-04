/**
 * Wedding Luxe — 高端婚礼杂志数据
 *
 * 数据结构围绕「翻阅婚礼杂志」的叙事展开。
 * 不是相册，是杂志——Vogue Wedding 式的 editorial 呈现。
 */

const B = '/assets/wedding';

const img = {
  cover: (n: number) => `${B}/cover/${String(n).padStart(2, '0')}.jpg`,
  bridal: (n: number) => `${B}/bridal/${String(n).padStart(2, '0')}.jpg`,
  ceremony: (n: number) => `${B}/ceremony/${String(n).padStart(2, '0')}.jpg`,
  guests: (n: number) => `${B}/guests/${String(n).padStart(2, '0')}.jpg`,
};

// ========== 封面 / Hero ==========
export const coverContent = {
  magazineTitle: 'WEDDING',
  magazineSubtitle: 'LUXE',
  coupleNames: 'Emma & Alexander',
  issue: 'VOL. 01 · 2026',
  tagline: 'A Love Story, Told in Light',
  taglineZh: '以光为笔，书写永恒',
};

// ========== Our Story ==========
export interface StoryMoment {
  id: string;
  title: string;
  titleZh: string;
  text: string;
  photoSrc: string;
  layout: 'text-left' | 'text-right' | 'full-image';
}

export const storyMoments: StoryMoment[] = [
  {
    id: 's1',
    title: 'How We Met',
    titleZh: '初遇',
    text: '那是一个秋日的午后，阳光穿过咖啡馆的玻璃窗，在木地板上画出金色的格子。她坐在靠窗的位置，手里捧着一本旧书店淘来的诗集。他推门进来的时候，风铃响了。后来的故事，都从那一声风铃开始。',
    photoSrc: img.bridal(1),
    layout: 'text-left',
  },
  {
    id: 's2',
    title: 'The Proposal',
    titleZh: '求婚',
    text: '在海边的悬崖上，落日把整个天空烧成了玫瑰色。他单膝跪下，打开那个深蓝色天鹅绒的盒子。海浪声太大了，她没听清他说了什么，但她点了头。其实她早就知道——不是因为预感，而是因为那一天他穿得比平时用心太多。',
    photoSrc: img.bridal(3),
    layout: 'text-right',
  },
  {
    id: 's3',
    title: 'The Promise',
    titleZh: '承诺',
    text: '他们决定把婚礼定在春天。不是因为春天最美，而是因为春天意味着开始。樱花、新叶、温暖的风——万物都在说同一句话：一切才刚刚开始。',
    photoSrc: img.cover(2),
    layout: 'full-image',
  },
];

// ========== 婚纱大片 ==========
export interface EditorialImage {
  id: string;
  src: string;
  caption?: string;
  span: 'full' | 'half' | 'wide' | 'tall';
}

export const editorialImages: EditorialImage[] = [
  { id: 'e01', src: img.bridal(2), caption: 'Silk & Lace · 丝绸与蕾丝', span: 'full' },
  { id: 'e02', src: img.bridal(4), span: 'half' },
  { id: 'e03', src: img.bridal(5), span: 'half' },
  { id: 'e04', src: img.bridal(6), caption: 'The Veil · 头纱轻扬', span: 'wide' },
  { id: 'e05', src: img.bridal(7), span: 'half' },
  { id: 'e06', src: img.bridal(8), span: 'half' },
  { id: 'e07', src: img.bridal(9), caption: 'A Moment Alone · 独处时分', span: 'full' },
  { id: 'e08', src: img.bridal(10), span: 'half' },
  { id: 'e09', src: img.bridal(11), span: 'half' },
  { id: 'e10', src: img.bridal(12), caption: 'The Gown · 嫁衣', span: 'tall' },
];

// ========== 婚礼现场 ==========
export interface CeremonyMoment {
  id: string;
  src: string;
  title?: string;
  description?: string;
  layout: 'hero' | 'grid-item' | 'panorama';
}

export const ceremonyPhotos: CeremonyMoment[] = [
  {
    id: 'c1',
    src: img.ceremony(1),
    title: 'The Venue',
    description: '阳光穿过花窗，一切都准备好了',
    layout: 'hero',
  },
  {
    id: 'c2',
    src: img.ceremony(2),
    title: 'Walking Down the Aisle',
    description: '父亲牵着她，走向她的未来',
    layout: 'panorama',
  },
  { id: 'c3', src: img.ceremony(3), layout: 'grid-item' },
  { id: 'c4', src: img.ceremony(4), layout: 'grid-item' },
  {
    id: 'c5',
    src: img.ceremony(5),
    title: 'I Do',
    description: '那一刻，世界静止了',
    layout: 'hero',
  },
  { id: 'c6', src: img.ceremony(6), layout: 'grid-item' },
  { id: 'c7', src: img.ceremony(7), layout: 'grid-item' },
];

// ========== 亲友见证 ==========
export interface GuestMoment {
  id: string;
  src: string;
  caption: string;
}

export const guestMoments: GuestMoment[] = [
  { id: 'g1', src: img.guests(1), caption: 'Best friends since college' },
  { id: 'g2', src: img.guests(2), caption: 'Family, always and forever' },
  { id: 'g3', src: img.guests(3), caption: 'Laughter is the best gift' },
  { id: 'g4', src: img.guests(4), caption: 'Three generations, one love' },
  { id: 'g5', src: img.guests(5), caption: 'The ones who made it magical' },
];

// ========== 细节收藏 ==========
export interface WeddingDetail {
  id: string;
  src: string;
  title: string;
  description: string;
}

export const weddingDetails: WeddingDetail[] = [
  {
    id: 'd1',
    src: img.ceremony(3),
    title: 'The Rings · 戒指',
    description: '铂金与玫瑰金交织，内圈刻着他们名字的首字母和今天的日期。',
  },
  {
    id: 'd2',
    src: img.ceremony(4),
    title: 'The Bouquet · 手捧花',
    description: '白玫瑰、铃兰与尤加利叶，系着一条来自她母亲婚纱上的蕾丝带。',
  },
  {
    id: 'd3',
    src: img.bridal(2),
    title: 'The Dress · 婚纱',
    description: '意大利丝绸与法国蕾丝，每一针都缝进了期待。',
  },
  {
    id: 'd4',
    src: img.ceremony(6),
    title: 'The Table · 宴席',
    description: '香槟金色的餐具，手写的座位卡，每张桌上都有一朵不同的花。',
  },
  {
    id: 'd5',
    src: img.ceremony(7),
    title: 'The Cake · 蛋糕',
    description: '三层白巧克力慕斯，顶上的糖花和手捧花一模一样。',
  },
  {
    id: 'd6',
    src: img.bridal(5),
    title: 'The Invitation · 请柬',
    description: '凸版印刷，烫金字体，信封用火漆封印——每一封都是一件作品。',
  },
];

// ========== 婚礼影片 ==========
export const filmContent = {
  title: 'The Wedding Film',
  titleZh: '婚礼影片',
  description: 'A cinematic portrait of the day we said forever.',
  descriptionZh: '那一天，我们用影像写下了永远的序章。',
  // Placeholder — 用户替换为实际视频链接
  videoId: '',
  posterSrc: img.ceremony(2),
};

// ========== 摄影团队 / Credits ==========
export const creditsContent = {
  title: 'The Creative Team',
  titleZh: '摄影团队',
  intro: 'Every beautiful moment was captured by these talented people.',
  introZh: '每一个美丽瞬间，都由他们倾心记录。',
  team: [
    { role: 'Photography', roleZh: '摄影', name: 'James Chen', studio: 'Studio Lumière' },
    { role: 'Cinematography', roleZh: '摄像', name: 'Michael Torres', studio: 'Ever After Films' },
    { role: 'Styling', roleZh: '造型', name: 'Sophie Laurent', studio: '' },
    { role: 'Floral Design', roleZh: '花艺', name: 'Yuki Tanaka', studio: 'Botanica Atelier' },
    { role: 'Venue', roleZh: '场地', name: '', studio: 'Château de Rêve' },
  ],
  closing: 'With love, always.',
  closingZh: '以爱之名，直至永远。',
};

// ========== 工具函数 ==========
export const allStoryMoments = storyMoments;
export const allEditorialImages = editorialImages;
export const allCeremonyPhotos = ceremonyPhotos;
export const allGuestMoments = guestMoments;
export const allWeddingDetails = weddingDetails;
