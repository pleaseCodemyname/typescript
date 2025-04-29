/**
 * 제네릭(일반적인, 포괄적인)함수
 */

// function func(value: string) {

// 제네릭 함수: 모든 타입을 허용하는 범용적인 함수. <T>: 타입 변수, 인수의 타입이 어떤 값이냐에 따라 타입 변수에 저장되는 타입이 달라짐
// 타입 변수와 함께 여러 타입의 값을 인수로 받아서 범용적으로 쓸 수 있는 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10); // generic 함수 적용 시, num: number
// num.toUpperCase(); // value: any일 경우, 문자열 메사드를 사용해도 오류를 발생시키지 않음

// 타입 좁히기로 타입을 줄였음
if (typeof num === 'number') {
  num.toFixed(); // value: unknown일 경우, 어떤 연산, 어떤 메서드도 할 수 없는 전체집합
}

let bool = func(true); // bool: boolean

let str = func('string'); // str: string

// 인수를 통한 호출이 아닌 프로그래머가 명시적으로 정의도 가능
let arr = func([1, 2, 3]); // value: T --> number 배열로 추론,

// 튜플로 타입 지정하고 싶을 때
let arr2 = func<[number, number, number]>([1, 2, 3]); // value: T --> number 배열로 추론,
