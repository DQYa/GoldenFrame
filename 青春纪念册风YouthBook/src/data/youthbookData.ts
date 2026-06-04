/**
 * YouthBook — 青春纪念册数据
 *
 * 数据结构围绕「翻阅毕业纪念册」的叙事展开：
 * - 封面信息
 * - 拍立得照片集合（带旋转角度和手写 caption）
 * - 时间轴节点
 * - 胶卷照片条
 * - 毕业寄语 / 留言条
 * - 同学信息
 */

const B = '/assets/graduation';

const img = {
  hero: `${B}/hero/hero-bg.jpg`,
  featured: (n: number) => `${B}/featured/${String(n).padStart(2, '0')}.jpg`,
  personalFile: (file: string) => `${B}/personal/${file}`,
  personal: (name: string) => `${B}/personal/${name}.jpg`,
  personal2: (name: string) => `${B}/personal/${name} (2).jpg`,
  personal3: (name: string) => `${B}/personal/${name} (3).jpg`,
  dorm: (name: string) => `${B}/dorm/${name}.jpg`,
  dorm2: (name: string) => `${B}/dorm/${name} (2).jpg`,
  dorm3: (name: string) => `${B}/dorm/${name} (3).jpg`,
  class: (n: number) => `${B}/class/${n}.jpg`,
};

// ========== 封面 ==========
export const coverContent = {
  title: '青春纪念册',
  subtitle: '我们的毕业季',
  year: '2026',
  class: '数据科学与大数据技术 1 班',
  tagline: '致我们永不散场的青春',
};

// ========== 拍立得照片 ==========
export interface PolaroidPhoto {
  id: string;
  src: string;
  caption: string;
  rotation: number; // -4 ~ +4 度
}

export const polaroidPhotos: PolaroidPhoto[] = [
  { id: 'p01', src: img.featured(1), caption: '那年夏天，我们相遇', rotation: -2.5 },
  { id: 'p02', src: img.featured(2), caption: '穿上学士服的那天', rotation: 1.8 },
  { id: 'p03', src: img.featured(3), caption: '走廊的尽头是光', rotation: -1.2 },
  { id: 'p04', src: img.featured(4), caption: '说不完的故事', rotation: 3 },
  { id: 'p05', src: img.featured(5), caption: '从室友到家人', rotation: -3.5 },
  { id: 'p06', src: img.featured(6), caption: '一个人的毕业季也要发光', rotation: 0.8 },
  { id: 'p07', src: img.featured(7), caption: '那些赶 DDL 的夜晚', rotation: -0.5 },
  { id: 'p08', src: img.featured(8), caption: '抛起学士帽的那一刻', rotation: 2.2 },
  { id: 'p09', src: img.personal('王小波'), caption: '图书馆的午后', rotation: -1.8 },
  { id: 'p10', src: img.personal('胡大胖'), caption: '樱花树下的约定', rotation: 1.5 },
  { id: 'p11', src: img.personal('张中横'), caption: '认真穿好的学士服', rotation: -2.8 },
  { id: 'p12', src: img.class(1), caption: '整整齐齐的我们', rotation: 0.3 },
  { id: 'p13', src: img.class(2), caption: '笑着告别', rotation: -1 },
  { id: 'p14', src: img.class(3), caption: '草地上笑着的我们', rotation: 2.5 },
  { id: 'p15', src: img.class(4), caption: '最后一堂课', rotation: -0.7 },
  { id: 'p16', src: img.class(5), caption: '校门口的最后一张', rotation: 1.3 },
  { id: 'p17', src: img.dorm('301宿舍'), caption: '301 的日常', rotation: -2 },
  { id: 'p18', src: img.dorm('302宿舍'), caption: '302 的默契', rotation: 3.2 },
  { id: 'p19', src: img.dorm('303宿舍'), caption: '303 的好时光', rotation: -1.5 },
  { id: 'p20', src: img.featured(2), caption: '把青春留在快门里', rotation: 0.5 },
];

// ========== 时间轴 ==========
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  photoSrc: string;
  side: 'left' | 'right';
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 't1',
    date: '2022.09',
    title: '初入校园',
    description: '拖着行李箱走进校门的那一刻，还不知道这四年会遇见怎样的人、发生怎样的故事。',
    photoSrc: img.class(1),
    side: 'left',
  },
  {
    id: 't2',
    date: '2022.10',
    title: '第一次班会',
    description: '腼腆的自我介绍，彼此名字都还没记全。谁也没想到后来会一起熬过那么多夜。',
    photoSrc: img.class(4),
    side: 'right',
  },
  {
    id: 't3',
    date: '2023.06',
    title: '大一下的夏天',
    description: '开始习惯校园节奏。图书馆占座、食堂抢饭、晚上在操场吹风聊天。日子简单又发光。',
    photoSrc: img.featured(3),
    side: 'left',
  },
  {
    id: 't4',
    date: '2024.03',
    title: '一起赶 DDL',
    description: '凌晨两点的宿舍楼，六个屏幕亮着。有人在写代码，有人在改论文，有人在泡面。苦中作乐的日子。',
    photoSrc: img.featured(7),
    side: 'right',
  },
  {
    id: 't5',
    date: '2025.12',
    title: '考研与求职',
    description: '每个人都在为自己的未来拼尽全力。自习室里的咖啡味和翻书声，是最好的青春配乐。',
    photoSrc: img.featured(6),
    side: 'left',
  },
  {
    id: 't6',
    date: '2026.06',
    title: '毕业快乐',
    description: '穿好学士服，站好最后一班岗。拍完这张照片，我们就要各自奔赴山海了。',
    photoSrc: img.class(2),
    side: 'right',
  },
];

// ========== 胶卷照片条 ==========
export const filmStripPhotos = [
  { src: img.featured(1), alt: '班级合影' },
  { src: img.featured(2), alt: '个人写真' },
  { src: img.featured(3), alt: '教学楼' },
  { src: img.featured(4), alt: '好友合照' },
  { src: img.featured(5), alt: '宿舍合影' },
  { src: img.featured(6), alt: '图书馆' },
  { src: img.featured(7), alt: '花絮' },
  { src: img.featured(8), alt: '操场' },
  { src: img.class(1), alt: '班会' },
  { src: img.class(2), alt: '抛帽' },
  { src: img.dorm('301宿舍'), alt: '301' },
  { src: img.dorm('302宿舍'), alt: '302' },
];

// ========== 毕业寄语 — 留言条 ==========
export interface MessageNote {
  id: string;
  text: string;
  author: string;
  role: string;
  rotation: number;
  colorClass: string; // 便签纸的不同色调
}

export const messages: MessageNote[] = [
  {
    id: 'm1',
    text: '愿此去前程似锦，再相逢依旧如故。别忘了我们约好的十年之约。',
    author: '林同学',
    role: '班长',
    rotation: -1.5,
    colorClass: 'bg-amber-50/80',
  },
  {
    id: 'm2',
    text: '从室友到家人，301 的群永远不要退。你们的婚礼我全都要参加。',
    author: '陈同学',
    role: '室友',
    rotation: 2,
    colorClass: 'bg-paper-50',
  },
  {
    id: 'm3',
    text: '山高路远，我们顶峰相见。下次见面，一定都成为了更好的自己。',
    author: '张同学',
    role: '团支书',
    rotation: -0.8,
    colorClass: 'bg-orange-50/70',
  },
  {
    id: 'm4',
    text: '四年的代码 bug 都是你们帮我调的。以后没有我了，记得多写注释。',
    author: '李同学',
    role: '技术宅',
    rotation: 1.3,
    colorClass: 'bg-blue-50/60',
  },
  {
    id: 'm5',
    text: '谢谢你们容忍我的呼噜声。302，无论走到哪里，永远是兄弟。',
    author: '王同学',
    role: '室友',
    rotation: -2.2,
    colorClass: 'bg-green-50/60',
  },
  {
    id: 'm6',
    text: '把四年的故事装进相机，把未说完的话写进风里。毕业快乐，不说再见。',
    author: '黄同学',
    role: '摄影师',
    rotation: 0.5,
    colorClass: 'bg-pink-50/60',
  },
  {
    id: 'm7',
    text: '愿我们在不同的城市继续发光。记得常联系，记得回来看老师。',
    author: '班主任',
    role: '老师',
    rotation: -1,
    colorClass: 'bg-paper-100',
  },
  {
    id: 'm8',
    text: '数据科学 1 班，整整齐齐！以后的数据库里，我们是一张永不删除的表。',
    author: '全体同学',
    role: '2026 届',
    rotation: 1.8,
    colorClass: 'bg-amber-100/60',
  },
];

// ========== 同学录 ==========
export interface Classmate {
  id: string;
  name: string;
  avatar: string;
  nickname: string;
  message: string;
}

export const classmates: Classmate[] = [
  {
    id: 'c1',
    name: '林同学',
    avatar: img.personal('王小波'),
    nickname: '小林子',
    message: '最好的时光，最好的我们。',
  },
  {
    id: 'c2',
    name: '陈同学',
    avatar: img.personal('胡大胖'),
    nickname: '大胖',
    message: '说好不哭，还是没忍住。',
  },
  {
    id: 'c3',
    name: '黄同学',
    avatar: img.personal('张中横'),
    nickname: '阿黄',
    message: '相机里的每一帧都是青春。',
  },
  {
    id: 'c4',
    name: '张同学',
    avatar: img.personal2('王小波'),
    nickname: '小张',
    message: '从陌生到熟悉，谢谢你们。',
  },
  {
    id: 'c5',
    name: '周同学',
    avatar: img.personalFile('pexels-1173270390-26820999.jpg'),
    nickname: '阿周',
    message: '江湖再见，后会有期。',
  },
  {
    id: 'c6',
    name: '赵同学',
    avatar: img.personalFile('pexels-hanuman-photo-studio-564865561-27623232.jpg'),
    nickname: '老赵',
    message: '感谢四年的陪伴和包容。',
  },
];

// ========== 尾页 ==========
export const endingContent = {
  title: '青春不散场',
  subtitle: '愿我们在更高处相见',
  footer: '2026 届毕业纪念册 · 青春纪念册风',
  poem: '那年夏天，我们走进同一扇门。\n这个夏天，我们走向不同的门。\n但没关系 —\n因为我们都知道，\n所有门，都朝向同一个世界。',
};

// ========== 工具函数 ==========
export const allPolaroidPhotos = polaroidPhotos;
export const allFilmPhotos = filmStripPhotos;
export const allMessages = messages;
export const allTimelineEvents = timelineEvents;
