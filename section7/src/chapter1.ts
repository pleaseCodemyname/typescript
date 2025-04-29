/**
 * 첫 번째 사례
 */

import { get } from 'http';

function swap<T, U>(a: T, b: U) {
  // <T: string, U: nnumber>로 지정됨
  return [b, a];
}

const [a, b] = swap('1', 2); // 에러: Argument of type 'number' is not assignable to parameter of type 'string'. 첫 번째 매개변수를 string타입으로 전달하면, T = string으로 간주, b도 string으로 간주해서 오류가 남

/**
 * 두 번째 사례
 */

// function func(...rest) { }

// 첫번째 타입은 T이고, 나머지 배열의 요소들의 타입은 모르겠을 때 정의 rest parameter로 정의
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  // number | string 유니온 타입
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, 'hello', 'my name is']);

console.log(num);
console.log(str);

/**
 * 세 번째 사례
 */

interface InterfaceA {
  length: number;
}

length;
interface InterfaceB extends InterfaceA {}

// T 타입 제한(프로퍼티가 number타입으로 있는 타입 확장 제한), 결국 T라는 타입은 number인 프로퍼티를 가지고 있는 객체를 확장하는 타입이기 때문에 무조건 length라는 프로퍼티를 가지고 있는 타입이여야함
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength('12345'); // 5 (string)

let var3 = getLength({ length: 10 }); // 10 ({object})

// let var4 = getLength(10); // Argument of type 'number' is  not assignable to parameter of type '{ length: number; }'.
// 숫자, boolean, 빈객체{}에는 length 프로퍼티가 없음
