/**
 * Exclude<T,U>
 * T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
/**
 1단계
 Exclude<string, boolean> |
 Exclude<boolean, boolean>
 
 2단계
 string |
 never 
 
 최종 결과
 string | never
 string // never는 공집합이니 사라지고 string만 남음
*/

type A = Exclude<string | boolean, boolean>; // string | boolean <T>에서 boolean<U>를 제거, type A = string;

/**
 * Extract<T, U>
 * T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // type B: boolean

/**
 * ReturnType<T>
 * 함수의 반환값 타입을 추출하는 타입
 */

// ReturnA일때는 T = string, ReturnB일때는 T = number
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA() {
  return 'hello'; // string 타입 반환 함수
}

function funcB() {
  return 10; // number 타입 반환 함수
}

type ReturnA = ReturnType<typeof funcA>; // string

type ReturnB = ReturnType<typeof funcB>; // number
