/**
 * Unknown Type
 */

// unknown타입은 모든 타입의 슈퍼타입이기 때문에 어떤 타입이든 할당 가능
function unknownExam() {
    // Up Casting(업캐스팅)
    let a: unknown = 1; 
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // Down Casting(다운 캐스팅)
    // let num: number = unknownVar; // 숫자 타입에 unknown 타입을 할당하려 하니깐 에러(Type 'unknown' is not assignable to type 'number'.)
    // let str: string = unknownVar; // 문자열 타입에 unknown 타입을 할당하려 하니깐 에러(Type 'unknown' is not assignable to type 'string'.)
    // let bool: boolean = unknownVar;// boolean 타입에 unknown 타입을 할당하려 하니깐 에러(Type 'unknown' is not assignable to type 'boolean'.)
}

/**
 * Never 타입(모든 집합의 부분 집합: 공집합(아무것도 없는 집합))
 */

function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }
    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅 (아무런 값도 저장할 수 없다.)
    // let never1: never = 10; // never타입에 숫자 할당 불가능 (Type '10' is not assignable to type 'never'.)
    // let never2: never = "string"; // never타입에 문자열 할당 불가능 (Type '"string"' is not assignable to type 'never'.)
    // let never3: never = true; // never타입에 불리언 할당 불가능 (Type 'true' is not assignable to type 'never'.)
}

/**
 * Void 타입: 반환값이 없는 함수(return이 없는)에서 반환간 타입을 명시하는데 사용
 */

function voidExam() {
    function voidFun(): void { 
        console.log("hi");
        return undefined;
    }

    let voidVar: void = undefined; // void type 변수에 undefined 값 할당 가능(업캐스팅)
}

/**
 * any 타입(치트키): 타입 계층도를 무시해버림, 다운캐스팅 다 안되는데 any타입은 자기한테 오는 다운캐스팅도, 자기가 하는 다운캐스팅도 가능하다. null 타입만 불가능.
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar ; // unknown > any 임에도 unknown -> any 다운캐스팅(가능) 
    undefinedVar = anyVar; // any > undefined 임에도 unknown -> anyVar 다운캐스팅(가능)
    // neverVar = anyVar; // never 타입에 any 타입 할당 불가, never 타입은 어떤 타입도 다운캐스팅 불가, never타입은 never만 가능
}