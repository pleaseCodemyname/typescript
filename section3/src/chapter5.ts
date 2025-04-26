/**
 * 타입 추론
 * 타입 넓히기: 범용적으로 프로그래머가 이 변수를 사용할 수 있도록 조금 더 넓은 타입으로 추론해주는, 타입스크립트가 타입을 추론하는 과정(const 제외)
 */
// 타입 스크립트: 점진적인 타입 시스템을 채택하는 언어, 
let a: number = 10; // 변수 선언 시 변수 타입을 정의하는 문법을 제공해서 프로그램이 실행되기 전에 타입 검사 수행
let b = 10; // 변수 타입 정의 하지 않고 초기화(초기값 할당) 가능

// function func(param) { // 매개변수 선언 시 타입 지정은 해줘야 함. 에러: Parameter 'param' implicitly has an 'any' type.
// }

// 타입 스크립트가 타입을 추론하는 기준은 변수의 초기값
let c = "hello"; // 자동으로 string 타입을 추론함
let d = {
    id: 1,
    name: "홍길동",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"]
};

let { id, name, profile } = d; // 객체 구조분해 할당, 변수의 타입 자동으로 잘 추론

let [one, two, three] = [1,"hello", true]; // one = number, two = string, three = boolean

function func() {
    return "hello"; // 함수의 반환 값(return) 문자열로 지정해주면 함수의 반환 값 뒤에 값을 기준으로 타입 추론
}

function func1(message  = "hello") { // 매개변수 기본 값 설정되어있어도 매개변수에 할당된 값 기준으로 타입 추론
    return message;
}

// 암묵적 any type, any타입을 지정하지 않았지만, 아무런 type을 지정하지 않아 any가 되어버림
let e; // type: any(아무값이나 할당 가능)
e = 10;
e.toFixed() // e: number, number 타입에만 가능한 toFixed() 사용 가능
//e.toUpperCase(); // 에러: Property 'toUpperCase' does not exist on type 'number'. number타입이므로, string 타입에만 사용가능한 메서드 toUpperCase() 사용 불가

e = "hello"; // e: any
e.toUpperCase();// e: string, toUpperCase 사용 가능
// e.toFixed(); // 사용 불가능

// 그냥 any type으로 지정해주는 것과는 다르다 (암묵적 any type은 어떤 값을 할당 하느냐에 따라 type이 수시로 변경)
let f: any;
f = 10; // any type으로 고정 

const num = 10; // number literal type, 상수이기 때문에 10빼고는 다른 값을 담을일이 없음
// num =11 // 에러: Cannot assign to 'num' because it is a constant. 원인: 상수이기 때문에 할당 불가

let arr = [1, "string"]; // type: number | string (union)

