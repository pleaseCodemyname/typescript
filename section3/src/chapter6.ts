/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

// let person: Person = {} // 에러: Type '{}' is missing the following properties from type 'Person': name, age, name과 age 타입이 존재하지 않음
// 나중에 초기화(초기값 할당) 해주고 싶은 경우 (as 사용)
let person = {} as Person;
person.name = "홍길동";
person.age = 29;

type Cat = {
    name: string;
    color: string;
}

let cat= {
    name: "여름이",
    color: "brown",
    breed: "garfield", // 에러(초과 프로퍼티): Object literal may only specify known properties, and 'breed' does not exist in type 'Cat'. 
    // Cat type에 breed라는 프로퍼티가 존재하지 않음
} as Cat // as를 사용하면 없는 프로퍼티도 추가하여 할당할 수 있음

/**
 * 타입 단언의 규칙
 * 단언식: 값 as 단언
 * A as B
 * A가 B의 슈퍼타입 이거나 | A가 B의 서브타입이여야 한다.
 */
let num1 = 10 as never; // num1의 타입 (number)는 never(모든 타입의 서브타입)의 슈퍼타입 number > never
let num2 = 10 as unknown; // num2의 타입 (number)는 unknown(모든 타입의 슈퍼타입)의 서브타입 number < unknown

// 에러: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// let num3 = 10 as string; // number와 string은 공통된(겹치는) 값이 없음, number가 string의 슈퍼타입도, string이 number의 슈퍼타입도 아니기 때문에 충분히 겹치지 않는다.

// 다중 단언 (권장 X)
let num3 = 10 as unknown as string; // number < unknown = number가 unknown의 슈퍼타임 --> unknown > string = unknown이 string의 슈퍼타입 이여서 가능하다.

/**
 * const 단언
 */

let num4 = 10 as const; // 변수 선언시 const로 선언한 것과 동일한 효과를 보이도록 만들어주는 단언

let dog = { // 객체 타입으로 추론
    name: "댕댕이",
    color: "yellow",
} as const; // 모든 프로퍼티가 읽기 전용(readonly) 객체로 추론, 프로퍼티가 많은 객체를 초기화할 때 일일이 타입을 정의해서 read-only를 붙여줄 필요 없음

// 객체 뒤에 as const를 사용하면 readonly(읽기 전용)이 되어버려, 수정할 수 없는 객체가 되어버림
// dog.name = "" // 에러: Cannot assign to 'name' because it is a read-only property. (읽기 전용이라 할당 불가)

/**
 * Non Null 단언: 어떤 값이 null이거나 undefined이 아니라고 TypeScript 컴파일러에게 알려주는 역할 수행
 * 
 */
type Post = {
    title: string;
    author?: string; // 익명(? = 선택적 프로퍼티) // string | undefined
};

let post: Post = {
    title: "게시글1",
    author: "홍길동",
}

// post.author?.length: 옵셔널 체이닝, author의 프로퍼티의 값이 null이거나 undefined일 경우, 점표기법으로 접근하면 오류가 발생하여, 물음표를 붙여주면 author라는 프로퍼티가 없으면 그냥 post값 전체를 undefined 값으로 만들어줌
// const len : number = post.author?.length; // 에러: Type 'number | undefined' is not assignable to type 'number', len변수는 number 타입이여야하는데 undefined가 들어올 가능성이 있어 오류가 발생함. 

// 이럴 때 non, null 단언 사용
const len : number = post.author!.length; // author라는 프로퍼티는 진짜 있다고 강조! 느낌표(!)를 사용하면 이 값이 null이나 undefined가 아닐거라고 컴파일러가 믿게끔 만듬

