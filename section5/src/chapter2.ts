/**
 * 선언 합침(선언 머징, declaration merging)
 */

// 타입 별칭을 두 번 정의 하려고 하면 오류가 남
// type Person = {
//   name: string;
// }

// type Person = {
//   age: number;
// }

// 선언합침: 동일한 이름으로 두 개의 인터페이스를 정의해도 문제 없음, b/c 동일한 이름 인터페이스는 합쳐짐
interface Person {
  name: string;
}

interface Person {
  // name: number; // 충돌(인터페이스에서 허용되지 않음): 동일한 프로퍼티 중복정의할 때 타입을 다르게 정의 경우 에러 발생
  name: string; // 똑같은 프로퍼티를 중복 정의 하려면 타입도 똑같이 정의를 해줘야함
  age: number;
}

interface Developer extends Person {
  // Person: 슈퍼타입, Developer: 서브 타입
  name: 'hello'; // 상속 시 똑같은 type이 아니여도 괜찮음, 원본 타입의 서브타입이기만 했으면 됐음.
}

const person: Person = {
  name: '', // name: string
  age: 27, // age: number
};

/**
 * 언제 사용하는가? 모듈을 보강할 때
 */

interface Lib {
  a: number;
  b: number;
}

// 모듈 타입 보강
interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
