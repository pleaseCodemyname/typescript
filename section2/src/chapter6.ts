// 변수에 저장할 값의 타입이 명확하지 않을 때, any보다는 unknown 사용을 권장
//Unknown 타입은 적어도 어떤 연산이나 어떤 메서드나 어떤 변수에나 값을 넣을 수 없기 때문에 런타임 에러를 방지하기 때문이다. (any 타입은 런타임 에러 방지 못함)

// any: 특정 변수의 타입을 확실히 모를 때 사용, 어떤 타입이든 가능
let anyVar: any = 10; //

let num: number = 10;
num = anyVar;

// unknown
// 모든 type 저장 가능하지만, 다른 타입의 변수에 할당이 불가능 하다. (any는 가능하다)
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar // Type 'unknown' is not assignable to type 'number'. 'unknown'타입은 'number' type에 할당할 수 없음
// unknownVar.toUpperCase(); // 'unknownVar' is of type 'unknown'. unknownVar은 'unknown type임


if (typeof unknownVar === "number") { // 타입 정제
    num = unknownVar; // unknown 변수가 확실히 number 타입이 밝혀졌을 때는 새로운 변수에 할당 가능
}