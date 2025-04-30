/**
 * 조건부 타입
 */

// number타입이 string 타입을 확장(포함)하는가? number가 string의 서브타입인가?
type A = number extends string ? string : number; // true면 string, false면 number, 결과: number

// 슈퍼타입
type ObjA = {
  a: number;
};

// 서브타입
type ObjB = {
  a: number;
  b: number;
};

// ObjB가 ObjA의 sub타입인가?
type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // varA: string
let varB: StringNumberSwitch<string>; // varB: number

// 오버로드 시그니처
function removeSpaces<T>(text: T): T extends string ? string : undefined;

// replaceAll 메소드: 매개변수로 받은 텍스트에 있는 모든 공백 문자열 제거, 공백 문자 모두를 빈 문자열로 바꿈(첫번째 인수에 해당하는 문자를 모두 찾아서 두 번째 인수로 바꿔줌)
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('hi im Harry Potter');
result.toUpperCase();

let result2 = removeSpaces(undefined);
