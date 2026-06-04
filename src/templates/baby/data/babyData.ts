/**
 * Baby Storybook — 宝宝成长手账数据
 */

const B = '/assets/baby';

const img = {
  cover: (n: number) => `${B}/cover/${String(n).padStart(2, '0')}.jpg`,
  newborn: (n: number) => `${B}/newborn/${String(n).padStart(2, '0')}.jpg`,
  days100: (n: number) => `${B}/100days/${String(n).padStart(2, '0')}.jpg`,
  oneyear: (n: number) => `${B}/oneyear/${String(n).padStart(2, '0')}.jpg`,
  family: (n: number) => `${B}/family/${String(n).padStart(2, '0')}.jpg`,
};

// ========== Hero ==========
export const heroContent = {
  title: '小小的你，慢慢长大',
  subtitle: 'Every tiny moment becomes a lifetime memory',
  babyName: '小豆豆',
  date: '2025.06 — 2026.06',
};

// ========== Growth Stats ==========
export interface GrowthStat {
  id: string;
  value: string;
  label: string;
  icon: 'star' | 'heart' | 'smile' | 'footprint';
}

export const growthStats: GrowthStat[] = [
  { id: 's1', value: '365', label: '个日日夜夜', icon: 'star' },
  { id: 's2', value: '12', label: '个月成长', icon: 'heart' },
  { id: 's3', value: '第1次', label: '微笑', icon: 'smile' },
  { id: 's4', value: '第1步', label: '走路', icon: 'footprint' },
];

// ========== Timeline ==========
export interface TimelineMoment {
  id: string;
  date: string;
  title: string;
  description: string;
  photoSrc: string;
  milestone: string;
}

export const timeline: TimelineMoment[] = [
  {
    id: 't1',
    date: '2025.06.15',
    title: '第一次来到这个世界',
    description: '在清晨的第一缕阳光里，你来了。产房里响起你第一声啼哭，爸爸妈妈的眼泪止不住地流。',
    photoSrc: img.newborn(1),
    milestone: '出生',
  },
  {
    id: 't2',
    date: '2025.09.22',
    title: '第一次认真看向镜头',
    description: '一百天的你，已经会笑了。摄影师按下快门的那一刻，你正好看向镜头，眼睛亮晶晶的。',
    photoSrc: img.days100(1),
    milestone: '百日',
  },
  {
    id: 't3',
    date: '2025.12.15',
    title: '第一次学会翻身',
    description: '六个月，你终于学会了翻身。从仰卧到俯卧，小小的身体用尽全力，成功后咧着嘴笑了一整个下午。',
    photoSrc: img.days100(3),
    milestone: '六月',
  },
  {
    id: 't4',
    date: '2026.03.20',
    title: '第一次叫妈妈',
    description: '那天下午，你突然对着妈妈清晰地喊了一声"妈妈"。妈妈愣了三秒，然后抱着你哭了。',
    photoSrc: img.oneyear(2),
    milestone: '九个月',
  },
  {
    id: 't5',
    date: '2026.06.15',
    title: '第一次奔向爸爸妈妈',
    description: '周岁生日那天，你松开扶着沙发的手，踉踉跄跄地、义无反顾地向我们走来。那是我们见过最勇敢的几步。',
    photoSrc: img.oneyear(1),
    milestone: '周岁',
  },
];

// ========== Category Cards ==========
export interface BabyCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  photoSrc: string;
  photos: string[];
}

export const categories: BabyCategory[] = [
  {
    id: 'newborn',
    title: '新生儿记忆',
    subtitle: 'Newborn Memories',
    icon: '👶',
    photoSrc: img.newborn(2),
    photos: [img.newborn(1), img.newborn(2), img.newborn(3)],
  },
  {
    id: '100days',
    title: '百日纪念',
    subtitle: '100 Days',
    icon: '🎀',
    photoSrc: img.days100(2),
    photos: [
      img.days100(1), img.days100(2), img.days100(3),
      img.days100(4), img.days100(5),
    ],
  },
  {
    id: 'oneyear',
    title: '周岁瞬间',
    subtitle: 'First Birthday',
    icon: '🎂',
    photoSrc: img.oneyear(3),
    photos: [
      img.oneyear(1), img.oneyear(2), img.oneyear(3),
      img.oneyear(4), img.oneyear(5),
    ],
  },
  {
    id: 'family',
    title: '亲子时光',
    subtitle: 'Family Moments',
    icon: '💕',
    photoSrc: img.family(1),
    photos: [
      img.family(1), img.family(2), img.family(3),
      img.family(4), img.family(5), img.family(6),
      img.family(7), img.family(8), img.family(9),
      img.family(10), img.family(11), img.family(12),
      img.family(13), img.family(14), img.family(15),
    ],
  },
];

// ========== Family Moments (featured) ==========
export interface FamilyMoment {
  id: string;
  src: string;
  caption: string;
}

export const familyMoments: FamilyMoment[] = [
  { id: 'f1', src: img.family(2), caption: '妈妈的手，永远的保护' },
  { id: 'f2', src: img.family(3), caption: '爸爸举高高的快乐' },
  { id: 'f3', src: img.family(5), caption: '一家人，整整齐齐' },
  { id: 'f4', src: img.family(8), caption: '阳光下的小小身影' },
  { id: 'f5', src: img.family(10), caption: '妈妈的怀抱最温暖' },
  { id: 'f6', src: img.family(13), caption: '我们一起长大' },
];

// ========== Video ==========
export const videoContent = {
  title: '成长影片',
  subtitle: 'Growth Film',
  description: '一年的时光，浓缩成几分钟。每一次回看，都是满满的感动。',
  posterSrc: img.family(1),
};

// ========== Studio Credits ==========
export const studioContent = {
  title: '为宝宝的每一次成长',
  subtitle: '留下值得反复打开的温柔纪念',
  cta1: '预约宝宝摄影',
  cta2: '咨询成长纪念馆',
  photographer: 'Baby Story Studio',
  year: '2026',
};
