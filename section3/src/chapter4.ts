/**
 * 대수 타입: 여러개의 타입을 합쳐서 새롭게 만들어낸 타입
 * 1. 합집합 타입 2. 교집합 타입
 */

/**
 * 합집합 타입(Union Type)
 */

let a: string | number | boolean; // |(합집합) 문자열, 숫자 타입 모두 가능 (string number union 타입)
a = 1;
a = 'hello'
a = true;

let arr: (number | string | boolean)[] = [1, 'hi', true]; // 배열의 타입도 유니언 타입으로 정의 가능

type Cat = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Cat | Person;

let union1: Union1 = { // 고양이 객체
    name: "",
    color: "",
}

let union2: Union1 = { // 사람 객체
    name: "",
    language: "",
}

let union3: Union1 = { // 교집합 (양쪽(고양이, 사람) 객체 모두 충족)
    name: "",
    color: "",
    language: "",
}

// let union4: Union1 = { // Type '{ name: string; }' is not assignable to type 'Union1'. Property 'language' is missing in type '{ name: string; }' but required in type 'Person'.
//     name: "", // 아무것에도 해당하지 않음
// }

/**
 * 2. 교집합 타입(Intersection) - 객체 타입에서 많이 사용
 */
let variable: number & string; // number & string 모두 만족해야함, number + string은 어떤 타입인가? never, 일반적으로 intersection은 never 타입이다.

type Cat2 = {
    name: string;
    color: string;
};

type Person2 = {
    name: string;
    language: string;
};

type Intersection = Cat2 & Person2;

let intersection : Intersection = { // 교집합에 들어올 수 있는 객체는 Cat2 + Person2 객체를 모두 포함하고 있는 객체이다. 
    name: "",
    color: "",
    language: "",
}
