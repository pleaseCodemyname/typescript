/**
 * 인터페이스(상호간에 약속된 규칙): 타입에 이름을 지어주는 또 다른 문법 + 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능을 제공)
 */

interface Person {
  readonly name: string; // 인터페이스에서 읽기 전용 가능
  age?: number; // 인터페이스에서 선택적 프로퍼티 가능
  // sayHi: () => void; // 반환값 void

  // 호출 시그니처 사용 권장
  sayHi(): void; // 메서드 타입 정의
  sayHi(a: number, b: number): void;

  // 함수 타입 표현식으로 하면 sayHi 식별자가 중복되었다고 에러남, 오버로드 시그니처를 못 알아봄
  // sayHi: () => void;
  // sayHi: (a: number, b: number) => void;
}

// 인터페이스에서는 유니온이나 인터섹션 타입 생성 불가
type Type1 = number | string | Person; //Union(타입 별칭에 활용)
type Type2 = (number & string) | Person; //Intersection

// Union 이나 Intersection 사용 시 type 주석에 활용
const person: Person | number = {
  name: '홍길동',
  // age: 29,
  sayHi: function () {
    // 프로퍼티에 저장된 값이 함수인 프로퍼티: 메소드
    console.log('Hi');
  },
};

// person.name = '김길동'; // 읽기 전용이라 수정하려고하면 에러가 남

// 메소드 오버로딩
person.sayHi();
person.sayHi(1, 2);
