/**
 * infer(추론)
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

// ReturnType<T>에 FuncA가 들어감 --> FuncA는 string임 --> string? string : never이니깐 true여서 type A는 string 반환
type A = ReturnType<FuncA>; // type A: string

// ReturnType<T>에 FuncB가 들어감 --> FuncB는 number임 --> string? string : never이니깐 false여서 type B는 never 반환
type B = ReturnType<FuncB>; // type B: never

// string일 때는 string 반환, number일때 number를 반환하게 하려면?
/**
 * infer와 함께 쓴 R 타입은 () => R을 참으로 만드는 타입을 추론하도록 동작 string => R ? R(True: string) : never
 */
type ReturnType2<T> = T extends () => infer R ? R : never;

type C = ReturnType2<FuncA>; // type C: string

type D = ReturnType2<FuncB>; // Type D: number

// 추론이 불가능해짐
type E = ReturnType2<number>; // 여기에서는 왜 never인가?

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

/**
 * 요구사항
 * 1. T는 프로미스 타입이어야 한다.
 * 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
 */

// Promise<number>라는 타입이 Promise<infer R>이라는 타입의 서브타입이 되는 r타입을 추론, 추론이 가능하기에 R이 되고, R은 number이기 때문에, number 타입 반환
type PromiseA = PromiseUnpack<Promise<number>>;
// number

// PromiseUnpack<T>에 Promise<string>제공, string 추론 R 반환 --> string
type PromiseB = PromiseUnpack<Promise<string>>;
// string
