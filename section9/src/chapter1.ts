/**
 * 분산적인 조건부 타입: 변수에 union type 할당하면 분산적 조건부 타입으로 업그레이드
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 유니언 타입(number타입의 슈퍼타입), 변수로 유니언타입을 할당해버리면 그때부터는 일반적인 조건부 타입이 아니라 분산적인 조건부 타입이 되어버림
let c: StringNumberSwitch<number | string>; // let c: string | number

/**
 * 유니언 타입을 T에 전달을 하면, 조건부타입에서는 한 번은 넘버, 한 번은 스트링으로, 모든 멤버 타입들이 분리가됨. 분리된 결과를 유니언으로 묶어준다.
 * StringNumberSwitch<number> // string
 * StringNumberSwitch<string> // number
 */

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 1단계(Union Type 분리)
 * StringNumberSwitch<boolean> |
 * StringNumberSwitch<number> |
 * StringNumberSwitch<string> |
 *
 * 2단계(<T>에 각 Type 할당)
 * boolean: StringNumberSwitch<number> |
 * number: StringNumberSwitch<string> |
 * string: StringNumberSwitch<number> |
 *
 * 최종결과
 * number | string
 */

/**
 * 실용적인 예제
 */

// 타입변수 T가 타입변수 U의 서브타입이라면? Never(True), False(T)
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

/**
 * 1 단계(Union Type 분리)
 * Exclude<number, string> |
 * Exclude<string, string> |
 * Exclude<boolean, string> |
 *
 * 2단계(<타입변수 T의 Type이 타입변수 U의 타입의 서브타입인지)
 * number < string: false 결과: number |
 * string < string: true 결과: never |
 * boolean < string: false 결과: boolean |
 *
 * 결과(Union Type에 never타입이 포함되어 있으면 never는 사라짐)
 * - number | never | boolean
 * never타입은 공집합 타입이기 때문에, never는 생략됨
 * - number | boolean
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>; // type B: string

/**
 * 1단계(Union Type 분리)
 * Extract<number, string>
 * Extract<string, string>
 * Extract<boolean, string>
 *
 * 2단계(<타입변수 T의 Type이 타입변수 U의 타입의 서브타입인지)
 * number < string: false: never
 * string < string: true: string
 * boolean < string: false: never
 *
 * 최종결과
 * never | string --> string
 */

// 분산조건 방지(extends[number])
type StringNumberSwitch2<T> = T extends [number] ? string : number;
let f: StringNumberSwitch2<number | string>; // let f: number로 고정됨, 원래는 string | number였음
