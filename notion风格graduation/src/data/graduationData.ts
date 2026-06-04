/**
 * Graduation memorial demo data.
 *
 * The structure mirrors a studio deliverable: separate digital museums for
 * individual portraits, dorm/friend groups, and class albums.
 */

export type PhotoCategory = 'portrait' | 'dorm' | 'class' | 'behind';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: PhotoCategory;
  peopleIds: string[];
  featured?: boolean;
  updatedAt?: string;
}

export interface Graduate {
  id: string;
  name: string;
  role: string;
  avatar: string;
  cover: string;
  quote: string;
  description: string;
  photoIds: string[];
}

export interface DormAlbum {
  id: string;
  name: string;
  cover: string;
  members: string[];
  description: string;
  photoIds: string[];
}

export interface ClassAlbum {
  id: string;
  name: string;
  cover: string;
  year: string;
  count: number;
  description: string;
  photoIds: string[];
}

export type AlbumEntry =
  | { type: 'graduate'; data: Graduate }
  | { type: 'dorm'; data: DormAlbum }
  | { type: 'class'; data: ClassAlbum };

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

export const photos: Photo[] = [
  {
    id: 'feat-01',
    src: img.featured(1),
    alt: '毕业季封面合影',
    caption: '那年夏天，我们一起走进校园，也一起好好告别。',
    category: 'class',
    peopleIds: [],
    featured: true,
    updatedAt: '2026-05-24',
  },
  {
    id: 'feat-02',
    src: img.featured(2),
    alt: '林同学毕业写真',
    caption: '把青春留在快门里。',
    category: 'portrait',
    peopleIds: ['g1'],
    featured: true,
    updatedAt: '2026-05-25',
  },
  {
    id: 'feat-03',
    src: img.featured(3),
    alt: '教学楼前的毕业照',
    caption: '毕业不是结束，是新的开始。',
    category: 'class',
    peopleIds: ['g1', 'g2'],
    featured: true,
    updatedAt: '2026-05-22',
  },
  {
    id: 'feat-04',
    src: img.featured(4),
    alt: '好友合照',
    caption: '说不完的故事，拍不完的合照。',
    category: 'dorm',
    peopleIds: ['g4', 'g5'],
    featured: true,
    updatedAt: '2026-05-26',
  },
  {
    id: 'feat-05',
    src: img.featured(5),
    alt: '宿舍合影',
    caption: '从室友到家人，是四年里最温暖的注脚。',
    category: 'dorm',
    peopleIds: ['g4', 'g5', 'g6'],
    featured: true,
    updatedAt: '2026-05-23',
  },
  {
    id: 'feat-06',
    src: img.featured(6),
    alt: '陈同学个人写真',
    caption: '一个人的毕业季，也要闪闪发光。',
    category: 'portrait',
    peopleIds: ['g2'],
    featured: true,
    updatedAt: '2026-05-27',
  },
  {
    id: 'feat-07',
    src: img.featured(7),
    alt: '拍摄花絮',
    caption: '那些一起赶过DDL的夜晚。',
    category: 'behind',
    peopleIds: ['g1', 'g2', 'g3'],
    featured: true,
    updatedAt: '2026-05-20',
  },
  {
    id: 'feat-08',
    src: img.featured(8),
    alt: '操场毕业合影',
    caption: '青春不散场，山海再相逢。',
    category: 'class',
    peopleIds: [],
    featured: true,
    updatedAt: '2026-05-21',
  },

  { id: 'lin-01', src: img.personal('王小波'), alt: '林同学学位服写真', category: 'portrait', peopleIds: ['g1'], caption: '学位服下的笑脸', updatedAt: '2026-05-27' },
  { id: 'lin-02', src: img.personal2('王小波'), alt: '林同学图书馆写真', category: 'portrait', peopleIds: ['g1'], caption: '图书馆的午后阳光', updatedAt: '2026-05-26' },
  { id: 'lin-03', src: img.personal3('王小波'), alt: '林同学操场写真', category: 'portrait', peopleIds: ['g1'], caption: '操场上奔跑过的青春', updatedAt: '2026-05-25' },
  { id: 'lin-04', src: img.featured(2), alt: '林同学校园写真', category: 'portrait', peopleIds: ['g1'], caption: '林荫道下的回看', updatedAt: '2026-05-24' },
  { id: 'lin-05', src: img.featured(6), alt: '林同学教室写真', category: 'portrait', peopleIds: ['g1'], caption: '最后一堂课', updatedAt: '2026-05-23' },
  { id: 'lin-06', src: img.featured(3), alt: '林同学校门写真', category: 'portrait', peopleIds: ['g1'], caption: '校门口的告别', updatedAt: '2026-05-22' },

  { id: 'chen-01', src: img.personal('胡大胖'), alt: '陈同学学位服写真', category: 'portrait', peopleIds: ['g2'], caption: '穿上学士服的那天', updatedAt: '2026-05-27' },
  { id: 'chen-02', src: img.personal2('胡大胖'), alt: '陈同学樱花道写真', category: 'portrait', peopleIds: ['g2'], caption: '樱花树下的约定', updatedAt: '2026-05-26' },
  { id: 'chen-03', src: img.featured(6), alt: '陈同学教室写真', category: 'portrait', peopleIds: ['g2'], caption: '教室里的青春', updatedAt: '2026-05-25' },
  { id: 'chen-04', src: img.featured(1), alt: '陈同学湖畔写真', category: 'portrait', peopleIds: ['g2'], caption: '湖畔的倒影', updatedAt: '2026-05-24' },
  { id: 'chen-05', src: img.featured(2), alt: '陈同学走廊写真', category: 'portrait', peopleIds: ['g2'], caption: '走廊尽头的阳光', updatedAt: '2026-05-23' },
  { id: 'chen-06', src: img.personal('胡大胖'), alt: '陈同学毕业帽写真', category: 'portrait', peopleIds: ['g2'], caption: '抛起毕业帽', updatedAt: '2026-05-22' },

  { id: 'huang-01', src: img.personal('张中横'), alt: '黄同学学位服写真', category: 'portrait', peopleIds: ['g3'], caption: '学士服的荣耀', updatedAt: '2026-05-26' },
  { id: 'huang-02', src: img.featured(1), alt: '黄同学校道写真', category: 'portrait', peopleIds: ['g3'], caption: '校道上的身影', updatedAt: '2026-05-25' },
  { id: 'huang-03', src: img.featured(5), alt: '黄同学楼顶写真', category: 'portrait', peopleIds: ['g3'], caption: '楼顶的毕业照', updatedAt: '2026-05-24' },
  { id: 'huang-04', src: img.featured(3), alt: '黄同学林间写真', category: 'portrait', peopleIds: ['g3'], caption: '林间小径', updatedAt: '2026-05-23' },
  { id: 'huang-05', src: img.featured(8), alt: '黄同学台阶写真', category: 'portrait', peopleIds: ['g3'], caption: '台阶上的青春', updatedAt: '2026-05-22' },

  { id: 'zhang-01', src: img.personal2('王小波'), alt: '张同学毕业写真', category: 'portrait', peopleIds: ['g4'], caption: '最好的我们', updatedAt: '2026-05-25' },
  { id: 'zhang-02', src: img.featured(4), alt: '张同学好友合照', category: 'dorm', peopleIds: ['g4', 'g5'], caption: '说不完的故事', updatedAt: '2026-05-24' },
  { id: 'zhang-03', src: img.featured(5), alt: '张同学宿舍合影', category: 'dorm', peopleIds: ['g4', 'g5', 'g6'], caption: '从室友到家人', updatedAt: '2026-05-23' },
  { id: 'zhang-04', src: img.featured(7), alt: '张同学校园合照', category: 'behind', peopleIds: ['g4'], caption: '校园漫步', updatedAt: '2026-05-22' },

  { id: 'li-01', src: img.personal2('胡大胖'), alt: '李同学毕业写真', category: 'portrait', peopleIds: ['g5'], caption: '青春的印记', updatedAt: '2026-05-25' },
  { id: 'li-02', src: img.featured(4), alt: '李同学闺蜜合照', category: 'dorm', peopleIds: ['g5', 'g4'], caption: '闺蜜时代', updatedAt: '2026-05-24' },
  { id: 'li-03', src: img.featured(7), alt: '李同学聚会合照', category: 'behind', peopleIds: ['g5', 'g2'], caption: '那天晚上的聚会', updatedAt: '2026-05-23' },
  { id: 'li-04', src: img.featured(5), alt: '李同学宿舍合影', category: 'dorm', peopleIds: ['g5', 'g6'], caption: '宿舍日常', updatedAt: '2026-05-22' },

  { id: 'wang-01', src: img.personal3('王小波'), alt: '王同学毕业写真', category: 'portrait', peopleIds: ['g6'], caption: '闪耀的日子', updatedAt: '2026-05-25' },
  { id: 'wang-02', src: img.featured(6), alt: '王同学图书馆写真', category: 'portrait', peopleIds: ['g6'], caption: '图书馆的时光', updatedAt: '2026-05-24' },
  { id: 'wang-03', src: img.featured(5), alt: '王同学宿舍合影', category: 'dorm', peopleIds: ['g6', 'g4', 'g5'], caption: '宿舍全家福', updatedAt: '2026-05-23' },
  { id: 'wang-04', src: img.personal3('王小波'), alt: '王同学天台写真', category: 'behind', peopleIds: ['g6'], caption: '天台上的晚风', updatedAt: '2026-05-22' },

  { id: 'dorm-01', src: img.dorm('301宿舍'), alt: 'A栋301宿舍合影', caption: '从室友到家人，是四年里最温暖的注脚。', category: 'dorm', peopleIds: ['g1', 'g2', 'g4'], updatedAt: '2026-05-26' },
  { id: 'dorm-02', src: img.dorm2('301宿舍'), alt: 'A栋301宿舍好友照', caption: '四年的上下铺，一辈子的好朋友。', category: 'dorm', peopleIds: ['g1', 'g2', 'g4'], updatedAt: '2026-05-25' },
  { id: 'dorm-03', src: img.dorm3('301宿舍'), alt: 'A栋301宿舍夜谈', caption: '青春是一场不散的长谈。', category: 'dorm', peopleIds: ['g1', 'g2', 'g4'], updatedAt: '2026-05-24' },
  { id: 'dorm-04', src: img.dorm('302宿舍'), alt: 'A栋302宿舍合影', caption: '同一屋檐下，最默契的搭档。', category: 'dorm', peopleIds: ['g3', 'g5', 'g6'], updatedAt: '2026-05-26' },
  { id: 'dorm-05', src: img.dorm2('302宿舍'), alt: 'A栋302宿舍闺蜜照', caption: '无话不说的年纪，恰好遇见你们。', category: 'dorm', peopleIds: ['g3', 'g5', 'g6'], updatedAt: '2026-05-25' },
  { id: 'dorm-06', src: img.dorm('303宿舍'), alt: 'B栋303好友小团体', caption: '一起走过的日子，每一帧都值得珍藏。', category: 'dorm', peopleIds: ['g1', 'g3'], updatedAt: '2026-05-24' },

  { id: 'class-01', src: img.class(1), alt: '班级正式合影', caption: '整整齐齐，是我们最好的合影。', category: 'class', peopleIds: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'], updatedAt: '2026-05-23' },
  { id: 'class-02', src: img.class(2), alt: '班级抛帽合影', caption: '抛起学士帽的那一刻。', category: 'class', peopleIds: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'], updatedAt: '2026-05-22' },
  { id: 'class-03', src: img.class(3), alt: '班级草地合影', caption: '草地上笑着的我们。', category: 'class', peopleIds: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'], updatedAt: '2026-05-21' },
  { id: 'class-04', src: img.class(4), alt: '班级教室合影', caption: '最后一堂课的教室。', category: 'class', peopleIds: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'], updatedAt: '2026-05-20' },
  { id: 'class-05', src: img.class(5), alt: '班级校门合影', caption: '校门口的最后一张合影。', category: 'class', peopleIds: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'], updatedAt: '2026-05-19' },

  { id: 'bts-01', src: img.featured(7), alt: '拍摄花絮整理帽子', caption: '拍摄前整理学士帽。', category: 'behind', peopleIds: ['g1', 'g2'], updatedAt: '2026-05-18' },
  { id: 'bts-02', src: img.featured(5), alt: '拍摄花絮笑场', caption: '忍不住笑场的瞬间。', category: 'behind', peopleIds: ['g4', 'g5'], updatedAt: '2026-05-17' },
  { id: 'bts-03', src: img.class(2), alt: '拍摄花絮排队', caption: '排队等待拍摄。', category: 'behind', peopleIds: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'], updatedAt: '2026-05-16' },
  { id: 'bts-04', src: img.featured(1), alt: '拍摄花絮选片', caption: '一起看刚拍的照片。', category: 'behind', peopleIds: ['g2', 'g3'], updatedAt: '2026-05-15' },
];

export const graduates: Graduate[] = [
  {
    id: 'g1',
    name: '林同学',
    role: '个人写真',
    avatar: img.personal('王小波'),
    cover: img.featured(2),
    quote: '把青春留在夏天的风里',
    description: '把青春留在夏天的风里',
    photoIds: ['feat-02', 'lin-01', 'lin-02', 'lin-03', 'lin-04', 'lin-05', 'lin-06', 'feat-03', 'dorm-01', 'class-01', 'bts-01', 'class-02'],
  },
  {
    id: 'g2',
    name: '陈同学',
    role: '个人写真',
    avatar: img.personal('胡大胖'),
    cover: img.featured(6),
    quote: '一个人的毕业季，也要闪闪发光',
    description: '一个人的毕业季，也要闪闪发光',
    photoIds: ['feat-06', 'chen-01', 'chen-02', 'chen-03', 'chen-04', 'chen-05', 'chen-06', 'feat-03', 'dorm-01', 'class-02', 'bts-01', 'bts-04'],
  },
  {
    id: 'g3',
    name: '黄同学',
    role: '个人写真',
    avatar: img.personal('张中横'),
    cover: img.featured(1),
    quote: '用镜头封存最好的年华',
    description: '用镜头封存最好的年华',
    photoIds: ['huang-01', 'huang-02', 'huang-03', 'huang-04', 'huang-05', 'dorm-04', 'dorm-05', 'class-01', 'class-03', 'bts-03'],
  },
  {
    id: 'g4',
    name: '张同学',
    role: '个人写真',
    avatar: img.personal2('王小波'),
    cover: img.featured(4),
    quote: '从陌生到熟悉，从室友到家人',
    description: '从陌生到熟悉，从室友到家人',
    photoIds: ['zhang-01', 'zhang-02', 'zhang-03', 'zhang-04', 'feat-04', 'feat-05', 'dorm-01', 'dorm-02', 'class-01', 'class-04'],
  },
  {
    id: 'g5',
    name: '李同学',
    role: '个人写真',
    avatar: img.personal2('胡大胖'),
    cover: img.featured(5),
    quote: '说不完的故事，拍不完的合照',
    description: '说不完的故事，拍不完的合照',
    photoIds: ['li-01', 'li-02', 'li-03', 'li-04', 'feat-04', 'dorm-04', 'dorm-05', 'dorm-06', 'class-03', 'bts-02'],
  },
  {
    id: 'g6',
    name: '王同学',
    role: '个人写真',
    avatar: img.personal3('王小波'),
    cover: img.featured(6),
    quote: '愿此去前程似锦，再相逢依旧如故',
    description: '愿此去前程似锦，再相逢依旧如故',
    photoIds: ['wang-01', 'wang-02', 'wang-03', 'wang-04', 'feat-05', 'dorm-04', 'dorm-05', 'class-02', 'class-05', 'bts-03'],
  },
];

const expandedPortraitAlbums = [
  {
    id: 'g7',
    name: '周同学',
    quote: '把告别拍得像新的出发',
    files: [
      'pexels-1173270390-26820999.jpg',
      'pexels-1173270390-26821002.jpg',
      'pexels-carlos-aguilar-660553055-34530824.jpg',
    ],
  },
  {
    id: 'g8',
    name: '许同学',
    quote: '在光里认真长大',
    files: [
      'pexels-dothanhyb-7407209.jpg',
      'pexels-green-odette-232224115-32001553.jpg',
      'pexels-green-odette-232224115-32197561.jpg',
    ],
  },
  {
    id: 'g9',
    name: '吴同学',
    quote: '这一页青春，值得单独珍藏',
    files: [
      'pexels-h-ng-quang-official-647624701-32859715.jpg',
      'pexels-hai-nam-nguyen-2079322455-31098641.jpg',
      'pexels-hieu-phung-2157907535-35039337.jpg',
    ],
  },
  {
    id: 'g10',
    name: '赵同学',
    quote: '学士服里的风，吹向很远的地方',
    files: [
      'pexels-hanuman-photo-studio-564865561-27623232.jpg',
      'pexels-hanuman-photo-studio-564865561-27623252.jpg',
      'pexels-hanuman-photo-studio-564865561-27623258.jpg',
      'pexels-hanuman-photo-studio-564865561-27623265.jpg',
    ],
  },
  {
    id: 'g11',
    name: '沈同学',
    quote: '照片会替我们记得那天的风',
    files: [
      'pexels-hanuman-photo-studio-564865561-27623266.jpg',
      'pexels-hoa-le-dinh-1615807371-30355872.jpg',
      'pexels-m1nhosuy-33468235.jpg',
    ],
  },
  {
    id: 'g12',
    name: '何同学',
    quote: '从这里开始，去见更大的世界',
    files: [
      'pexels-nguy-n-ti-n-th-nh-2150376175-32426227.jpg',
      'pexels-rdne-7713196.jpg',
      'pexels-toan-van-1745332-20985248.jpg',
    ],
  },
  {
    id: 'g13',
    name: '唐同学',
    quote: '把闪光的自己留给盛夏',
    files: [
      'pexels-s-n-ng-c-459229402-32693866.jpg',
      'pexels-s-n-ng-c-459229402-32754297.jpg',
      'pexels-s-n-ng-c-459229402-32891747.jpg',
    ],
  },
  {
    id: 'g14',
    name: '宋同学',
    quote: '未来很远，但此刻已经很美',
    files: [
      'pexels-simeart-33755567.jpg',
      'pexels-simeart-33755570.jpg',
      'pexels-vtnt2-31040309.jpg',
    ],
  },
];

expandedPortraitAlbums.forEach((album, albumIndex) => {
  const photoIds = album.files.map((file, fileIndex) => {
    const id = `${album.id}-portrait-${String(fileIndex + 1).padStart(2, '0')}`;

    photos.push({
      id,
      src: img.personalFile(file),
      alt: `${album.name}毕业写真`,
      caption: fileIndex === 0 ? album.quote : `${album.name}的毕业写真 ${fileIndex + 1}`,
      category: 'portrait',
      peopleIds: [album.id],
      featured: albumIndex < 3 && fileIndex === 0,
      updatedAt: `2026-05-${String(28 - albumIndex).padStart(2, '0')}`,
    });

    return id;
  });

  graduates.push({
    id: album.id,
    name: album.name,
    role: '个人写真',
    avatar: img.personalFile(album.files[0]),
    cover: img.personalFile(album.files[1] ?? album.files[0]),
    quote: album.quote,
    description: album.quote,
    photoIds,
  });
});

export const dorms: DormAlbum[] = [
  {
    id: 'd1',
    name: 'A栋301',
    cover: img.dorm('301宿舍'),
    members: ['林同学', '陈同学', '张同学', '周同学'],
    description: '从室友到家人，是四年里最温暖的注脚。',
    photoIds: ['dorm-01', 'dorm-02', 'dorm-03', 'feat-05', 'zhang-02', 'zhang-03', 'bts-02', 'class-01', 'lin-02', 'chen-04', 'feat-07', 'class-02'],
  },
  {
    id: 'd2',
    name: 'A栋302',
    cover: img.dorm('302宿舍'),
    members: ['黄同学', '李同学', '王同学', '赵同学'],
    description: '同一屋檐下，最默契的搭档。',
    photoIds: ['dorm-04', 'dorm-05', 'feat-04', 'feat-05', 'li-02', 'li-04', 'wang-03', 'huang-03', 'class-03', 'bts-03', 'bts-04'],
  },
  {
    id: 'd3',
    name: 'B栋303',
    cover: img.dorm('303宿舍'),
    members: ['林同学', '黄同学', '许同学', '吴同学'],
    description: '一起走过的日子，每一帧都值得珍藏。',
    photoIds: ['dorm-06', 'feat-08', 'lin-03', 'huang-02', 'huang-05', 'class-04', 'class-05', 'bts-01', 'bts-04'],
  },
];

export const classes: ClassAlbum[] = [
  {
    id: 'c1',
    name: '数据科学与大数据技术1班',
    cover: img.class(1),
    year: '2026届',
    count: 42,
    description: '我们曾在同一间教室里抬头看过黑板，也将在不同的人生里继续发光。',
    photoIds: ['class-01', 'class-02', 'class-03', 'class-04', 'class-05', 'feat-01', 'feat-03', 'feat-08', 'bts-03', 'bts-04', 'dorm-01', 'dorm-04', 'lin-01', 'chen-01', 'huang-01'],
  },
];

export const allPhotos = photos;
export const people = graduates;
export type Person = Graduate;

export function getPhotosByIds(photoIds: string[]): Photo[] {
  const byId = new Map(photos.map((photo) => [photo.id, photo]));
  return photoIds.map((id) => byId.get(id)).filter((photo): photo is Photo => Boolean(photo));
}

export function getPhotosByCategory(category: PhotoCategory | 'all'): Photo[] {
  if (category === 'all') return photos;
  return photos.filter((photo) => photo.category === category);
}

export function getRecentPhotos(limit = 18): Photo[] {
  return [...photos]
    .sort((a, b) => (b.updatedAt ?? '').localeCompare(a.updatedAt ?? ''))
    .slice(0, limit);
}

export function getFeaturedPhotos(): Photo[] {
  return photos.filter((photo) => photo.featured);
}

export function getPhotosByPerson(personId: string | null): Photo[] {
  if (!personId) return photos;
  return photos.filter((photo) => photo.peopleIds.includes(personId));
}

export function getFilteredPhotos(category: PhotoCategory | 'all', personId: string | null): Photo[] {
  return getPhotosByCategory(category).filter((photo) => !personId || photo.peopleIds.includes(personId));
}

export const heroContent = {
  title: '2026届毕业纪念馆',
  subtitle: '青春不散场，山海再相逢',
  info: '数字毕业影像交付 Demo',
};

export const stats = [
  { value: '42位', label: '同窗同学' },
  { value: '3类', label: '独立纪念馆' },
  { value: '65张', label: '精选影像' },
  { value: '2026', label: '毕业年份' },
];

export const quotes = [
  { text: '愿此去前程似锦，再相逢依旧如故。', author: '毕业寄语' },
  { text: '毕业快乐，不说再见。我们只是在不同的城市，继续发光。', author: '致2026届' },
  { text: '山高路远，我们顶峰相见。', author: '致同窗' },
  { text: '把四年的故事装进相机，把未说完的话写进风里。', author: '青春寄语' },
];

export const studioInfo = {
  name: '光影纪年 Studio',
  tagline: '为每一段青春，留下值得反复打开的数字纪念馆。',
  description:
    '我们专注校园毕业季影像记录，为每一位毕业生、每一间宿舍、每一个班级打造专属数字纪念馆。从拍摄到交付，把照片升级成可传播、可收藏、可增值售卖的高级影像产品。',
  phone: '138-0000-0000',
  wechat: 'guangyingjinian',
  services: [
    { label: '预约毕业写真', type: 'portrait' as const },
    { label: '咨询数字纪念馆', type: 'digital' as const },
  ],
};

export const classContent = {
  title: '我们这一班',
  caption: '我们曾在同一间教室里抬头看过黑板，也将在不同的人生里继续发光。',
};

export const videoContent = {
  title: '毕业影像',
  coverImage: `${B}/class/2.jpg`,
  placeholder: '视频功能可在正式版本中接入毕业纪念短片、航拍花絮或客户定制影片。',
};

export const images = {
  hero: img.hero,
  featured: getFeaturedPhotos().map((photo) => ({ src: photo.src, caption: photo.caption ?? photo.alt })),
  personal: graduates.map((graduate) => ({ src: graduate.avatar, name: graduate.name })),
  dorm: dorms.map((dorm) => ({ src: dorm.cover, caption: dorm.name, detail: dorm.description })),
  class: [1, 2, 3, 4, 5].map((n) => ({ src: img.class(n) })),
  classMain: img.class(1),
};

export type FeaturedPhoto = (typeof images.featured)[number];
export type PersonalPhoto = (typeof images.personal)[number];
export type DormPhoto = (typeof images.dorm)[number];
