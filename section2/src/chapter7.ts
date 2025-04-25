// void(아무것도 없음을 의미하는 타입, 아무것도 반환하지 않지만 정상적으로 끝나는 함수)

function func1(): string { // func1이 반환하는 타입 = string(문자열)
    return "hello";
}

function func2(): void { // 이런 경우 void 타입을 선언해야함
    console.log("hello") // fun2라는 함수는 아무런 값도 반환하지 않고 "hello만 출력"
}

let a:void;
// a = 1; // Type 'number' is not assignable to type 'void'. (void 타입은 어떤 값도 담을 수 없음)
// a = "hello"; // Type 'string' is not assignable to type 'void'.
// a = {}; // Type '{}' is not assignable to type 'void'.
a = undefined; // void타입은 오직 undefined만 할당 가능
// a = null; // tsconfig.json에서 strictNullChecks: false로 설정하면 void타입에 null 할당 가능

// 왜 void를 설정해야하는가? 
function func3(): null { 
    console.log("hello");
    // return undefined; // Type 'undefined' is not assignable to type 'null'. 
    return null // null타입이니깐 null을 반환해야함.
}

function func4(): void { // undefined, null 타입 사용시, 리턴문을 사용하고 싶지 않은 반환값 타입으로 void를 사용
    console.log("hello");   
}

// never (존재하지 않는, 불가능한 타입, 절대 끝나지 않거나 예외를 던져서 종료되는 함수)
// never 타입 그 어떤 값도 저장할 수 없음(null도 못담음)
function func5(): never{ 
    while (true) {} // 무한 루프 일때 never 타입 적절
}

function fun6(): never { // 실행되면 바로 중지 될 것이기에, 반환 값 타입: Never가 적절함함
    throw new Error(); //JS문법, 프로그램 실행 중 에러 던지기
}
