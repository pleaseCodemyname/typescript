/**
 * 함수 타입 정의
 */

// 자바스크립트에서 함수를 설명하는 가장 좋은 방법: 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
// 타입스크립트에서 함수를 설명하는 가장 좋은 방법: 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명

function func(a: number, b: number): number {
  // 반환값의 타입 지정
  return a + b;
}

function punk(a: number, b: number) {
  // 반환값 타입 지정 안해도 타입 추론 가능(return 문 기준, a도 넘버, b도 넘버)
  return a + b;
}

/**
 * 화살표 함수 타입 정의
 */

const add = (a: number, b: number): number => a + b;
const add2 = (a: number, b: number) => a + b; // 반환값 타입 추론 가능

/**
 * 함수의 매개변수
 */

function introduce(name = '홍길동') {
  // String Literal
  console.log(`name: ${name} `);
}

// function introduce2(name: number = '홍길동') {
//   // 'number'타입에 'string'타입을 넣으면 에러
//   console.log(`name: ${name} `);
// }

// function introduce3(name = '홍길동') {
//   console.log(`name: ${name} `);
// }

// introduce3(1); // 자동 추론된 매개변수 타입('string')과 다른 타입의 값을 인수로 전달('number')하면 오류 발생

function introduce4(name: '홍길동', height?: number) {
  // ?(선택적 매개변수)는 필수적 매개변수 앞에 오면 안됨
  console.log(`name: ${name} `);
  //   console.log(`height: ${height + 10}`); // 에러: 'height' is possibly 'undefined'. height가 undefined일 수 있기 때문에, 불안전하기 때문에 연산을 못하게 TypeScript가 막아줌.
  // 해결 방안
  if (typeof height === 'number') {
    // typeguard 사용
    console.log(`height: ${height + 10}`); // 이렇게 조건문을 걸면 가능하다.
  }
}
introduce4('홍길동', 175);
introduce4('홍길동'); // Expected 2 arguments, but got 1. (2개의 인수를 전달해야하는데 한 개만 전달함, 한개만 전달하고 싶으면, height?: number로 설정)
// introduce4(175); // name: '홍길동'은 생략되면 안됨, b/c 필수 매개변수 이기 때문이다.

// function introduce5(name: '김길동', height?: number, age: number) {
//   // A required parameter cannot follow an optional parameter. 필수적 매개변수 앞에 선택적 매개변수 정의하면 에러
//   console.log(`name: ${name}`);
// }

// 에러 수정
function introduce7(name: '김길동', age: number, height?: number) {
  // 필수적 매개변수 먼저 나열 후 선택적 매개변수 나중에 나열하면 에러 해결
  console.log(`name: ${name}`);
  if (typeof height === 'number') {
    console.log(`height : ${height + 10}`);
  }
}

introduce7('김길동', 29, 179);
introduce7('김길동', 29); // height를 명시하지 않아도 에러가 나지 않음 b/c optional parameter(선택적 매개변수)

// rest parameter
function getSum(...rest: number[]) {
  // 가변적인 길이의 인수들을 전달하면 배열로 묶어서 rest 변수에 저장할 수 있게 해줌
  let sum = 0;
  rest.forEach(it => (sum += it));

  return sum;
}

// rest parameter(매개변수의 갯수를 고정적으로 정하고 싶을 때, 튜플타입으로 설정)
function getSum2(...rest: [number, number, number]) {
  // 가변적인 길이의 인수들을 전달하면 배열로 묶어서 rest 변수에 저장할 수 있게 해줌
  let sum = 0;
  rest.forEach(it => (sum += it));

  return sum;
}

getSum2(1, 2, 3); // 6
// getSum2(1, 2, 3, 4, 5); // Expected 3 arguments, but got 5(5개 인수가 필요한 데 3개를 가져옴)
