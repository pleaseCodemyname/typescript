/**
 * 제네릭 인터페이스
 */

// <K, V> = 타입 변수, 타입 파라미터, 제니릭 타입 변수, 제네릭 타입 파라미터
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스 사용시 타입 정의 시 타입 변수에 할당 타입을 <> 꺽새로 사용
let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1'],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: 'value',
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

// type변수: <V>
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

/**
 * 제네릭 인터페이스에 활용 예시
 * 유저 관리 프로그램 -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
  type: 'student'; // string literal
  school: string;
}

interface Developer {
  type: 'developer'; // string literal
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); // Developer Type의 User는 Student타입의 유저에 넣을 수가 없음

const developerUser: User<Developer> = {
  name: '홍길동',
  profile: {
    type: 'developer',
    skill: 'TypeScript',
  },
};

const studentUser: User<Student> = {
  name: '강철수',
  profile: {
    type: 'student',
    school: '한국대학교',
  },
};
