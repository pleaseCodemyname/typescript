// object
// let user: object= {
//     id: 1,
//     name: "윤아현"
// };

// user.id; // 에러: Property 'id' does not exist on type 'object'.

// 해결 방법 {객체 리터럴}, {타입} = {값}
// let user: {
//     id?: number;
//     name: string;
// } = {
//     id: 1,
//     name: '이아현',
// }
// 구조적 타입 시스템(AKA Property Based Type System), 구조(Property) 기준으로 타입시스템을 정함, 
// 명목적 타입 시스템: C언어, 자바는 이름 기준으로 Type을 정의(타입스크립트는 구조적 타입 시스템)

// user = {
//     name: "홍길동",
// }
// Property 'id' is missing in type '{ name: string; }' but required in type '{ id: number; name: string; }'.
// 해결방법
let user: {
    id?: number; // 선택적 프로퍼티(Optional Property)
    name: string;
}
user = {
        name: "홍길동",
    }

let config: {
    readonly apiKey: string; // apiKey 프로퍼티는, 즉 apiKey 프로퍼티로 생성된 값은 절대 수정이 되어서는 안되기 때문에 읽기 전용으로 타입 생성
} = {
    apiKey: "MY API KEY",
}

// config.apiKey = "hacked"; //Cannot assign to 'apiKey' because it is a read-only property. 