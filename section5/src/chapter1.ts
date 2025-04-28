/**
 * 인터페이스의 확장, 인터페이스는 객체 타입이면 모두 확장 가능
 */

// 슈퍼타입
interface Animal {
  name: string;
  color: string;
}

// 타입 별칭이어도 확장(상속)가능
// type Animal = {
//   name: string;
//   color: string;
// };

// 서브타입 (상속: Dog extends Animal --> From Animal Type으로 부터 To Dog Type의 프로퍼티 상속 )
interface Dog extends Animal {
  // name: 'hello'; // string literal 타입으로 재정의(프로퍼티 상속받은 그대로 물려받는게 아님), 그런데 string -> string literal이라서 가능한거고, string -> number나 number literal로 재정의하면 허용하지 않음(원본 타입의 서브타입이여야만함)
  isBark: boolean;
}

const dog: Dog = {
  // name: '', // 에러: Type '""' is not assignable to type '"hello"'.
  name: 'hello',
  color: '',
  isBark: true,
};

// 서브타입
interface Cat extends Animal {
  isScratch: boolean;
}

const cat: Cat = {
  name: '',
  color: '',
  isScratch: true,
};

// 서브타입
interface Chicken extends Animal {
  isFly: boolean;
}

const chicken: Chicken = {
  name: '',
  color: '',
  isFly: true,
};

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  isBark: true,
  isScratch: true,
};
