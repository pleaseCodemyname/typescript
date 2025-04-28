/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10; // number literal

let a: A = () => 10; // type: number
let b: B = () => 10; // type: number literal무조건 10을 반환, 20을 반환하면 오류 발생

a = b; // number type <-- number literal type (업 캐스팅) number > number literal
// b = a; // 왜 똑같은 10인데 허용이 안되는가? Type 'A' is not assignable to type 'B', Type 'number' is not assignable to type '10'
// number literal type <-- number (다운 캐스팅), number > number literal이기 때문에 허용 불가

// 기준2. 매개변수가 호환되는가?
// 2가지 상황
// 1) 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = value => {};
let d: D = value => {};

// c = d; // number <-- 10(number literal type)을 넣겠다 (업캐스팅) 그런데 왜 안되는가?
d = c; // 10(number literal type) <-- number (다운 캐스팅)

// 매개변수가 객체 타입을 사용하는 예시
// 슈퍼타입
type Animal = {
  name: string;
};

// 서브타입
type Cat = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let catFunc = (cat: Cat) => {
  console.log(cat.name);
  console.log(cat.color);
};

// 에러: Type '(cat: Cat) => void' is not assignable to type '(animal: Animal) => void'.
// animalFunc = catFunc;
// animalFunc의 매개변수 타입: Animal, catFunc의 매개변수 타입: Cat
// animalFunc > catFunc

catFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color); // animal type에는 color 프로퍼티가 없음
};

let testFunc2 = (cat: Cat) => {
  console.log(cat.name); // Cat타입은 Animal Type의 서브타입이기 때문에, animal type의 모든 프로퍼티를 Cat 타입이 갖고 있음.
};

// 매개변수로 기준을 판단하자면, 서브타입이 더 많은 프로퍼티를 지니고 있으니 업캐스팅은 불가능하고, 다운캐스팅은 가능하다.

// 2) 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {}; // func1의 매개변수: a, b
let func2: Func2 = a => {}; // func2의 매개변수: a

// 할당하려고 하는 매개변수의 개수가 더 적을때에만 호환이 가능(type이 같다는 전제하에, string -> number는 불가능)
func1 = func2; // func2를 func1으로 할당은 가능
// func2 = func1; // func1을 func2로 할당 불가능(X)
