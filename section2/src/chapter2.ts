// 배열
let numArr: number[] = [1, 2, 3]; 

let strArr: string[] = ["hello", "I'm", "winterwood"];

let boolArr: Array<boolean> = [true, false, true];

// 배열의 타입이 유니온 타입(number이거나 string 일 수 있음)
let multiArr = [1, "hello"]; // let multiArr: (string | number) []

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플(길이&타입 고정된 배열)
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1); //tup1 배열은 2개로 고정인데, 하나 더 추가해도 오류를 인지 못함, 자바스크립트 배열 메소드으로 간주)
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [ // 배열 첫 요소 타입: string, 두 번째 요소 타입: number
    ["홍길동", 1],
    ["김철수", 2],
    ["남궁민", 3],
    ["이주빈", 4],
    // [5, "김성동"] // 1st: number, 2nd: string 에러남
];
