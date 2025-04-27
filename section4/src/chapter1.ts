/**
 * 함수 타입 표현식(Function Type Expression)
 */

// 매개변수: type, 반환값: type 저으이
// const add = (a: number, b: number): number => a + b;

// 함수의 타입 별칭 사용(자바스크립트 화살표 함수와 유사)
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
// a: number, b: number

// 사칙 연산 함수처럼, 비슷한 형식의 함수를 여러 개를 만들어야 할 때, 매개변수와 반환값에 타입을 일일이 정의해줘야 한다면, 비슷한 타입 정의 중복 코드가 많아질 것임.

type Operation = (a: number, b: number) => number;

// 훨씬 간결하고 깔끔하게 타입 정의 가능
const add2: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 별칭 없이 타입 정의 가smd
const add3: (a: number, b: number) => number = (a, b) => a + b;
const sub2: (a: number, b: number) => number = (a, b) => a - b;
const multiply2: (a: number, b: number) => number = (a, b) => a * b;
const divide2: (a: number, b: number) => number = (a, b) => a / b;

// 합수 타입 표현식 정의시 매개변수의 개수와 타입의 개수를 맞춰줘야함
// const add4: (a: number, b: number) => number = (a, b, c) => a + b; // 에러: target signature provides too few arugments, expected 3 or more, but got 2.

/**
 * 호출 시그니쳐(콜 시그니쳐): 함수 타입 분리해서 정의 가능, 함수 타입을 정의하는 문법 = 호출 시그니처
 */

type Operation2 = {
  (a: number, b: number): number;
};
const add5: (a: number, b: number) => number = (a, b) => a + b;
const sub3: (a: number, b: number) => number = (a, b) => a - b;
const multiply3: (a: number, b: number) => number = (a, b) => a * b;
const divide3: (a: number, b: number) => number = (a, b) => a / b;

// 일반적인 방법
function func(a: number): void {
  // (a: number): void 이 부분을 type Operation2 = { ((a: number): void)} 이렇게 하면 함수 호출/콜 시그니처가 됨
}
