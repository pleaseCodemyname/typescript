/**
 * 유틸리티 타입: 제네릭, Mapped Type, 조건부타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것
 * Partial<T>: 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/**
 * keyof T = title, tags, content, thumbnailURL, key in keyof T --> 왼쪽의 key가 오른쪽의 union 타입에 하나씩 다 맵핑됨, 1. title 2. tags 3. content 4. thumbnailURL
 * T[Key] = indexed access type, 프로퍼티의 타입을 추출하는 타입
 * [key in keyof T]?: T[key] --> 타입 변수로 전달한 객체 타입에 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌
 */
type Partial<T> = {
  [key in keyof T]?: T[key];
};

// 임시 저장 기능 구현 --> Partial은 모든 프로퍼티를 다 선택적 프로퍼티로 만드는 유틸리티 타입
const draft: Partial<Post> = {
  title: '제목 나중에',
  content: '초안...',
};

/**
 * Required<T>: 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key]; //
};

// Required로 하면 선택적 프로퍼티도 무조건 포함해야함
const withThumbnailPost: Required<Post> = {
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '',
  thumbnailURL: 'https://...',
};

/**
 * Readonly<T>: 읽기 전용, 수정불가, 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글 입니다.',
  tags: [],
  content: '',
};

// 수정 불가
// readonlyPost.content = '';
