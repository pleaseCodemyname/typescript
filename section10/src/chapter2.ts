/**
 * Pick<T, K>: 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// T에는 Post의 모든 속성이 들어가고, K에는 'title' | 'content'가 들어옴
type Pick<T, K extends keyof T> = {
  // K extends 'title', | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title', | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

// Pick<Post(전체 프로퍼티 가져옴), 고르고 싶은 프로퍼티만['title' | 'content']
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠',
};

/**
 * Omit<T, K>: 객체 타입으로부터 특징 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/**
 * T = Post, K = Title
 * Pick<Post, Exclude<keyof Post, 'title'>>
 * Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
 * Pick<Post, 'content' | 'tags' | 'thumbnailURL'>
 */

// Post Type으로부터 title만 제거한 타입
const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

/**
 * Record<K, V>: Record<K = 객체의 프로퍼티 유니언 타입, V = value타입>
 */

// 중복 코드 존재,
// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
//   watch: {
//     url: string;
//   };
// };

// 위의 타입 동일
type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string; size: number }>;

// keyof any: 어떤 타입이 들어올지 모르지만, 적어도 이 타입변수 K에 들어오는 타입은 어떤 객체 타입의 키를 추출해 놓은 유니온 타입임을 명시
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
