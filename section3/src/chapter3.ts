/**
 * 기본 타입간의 호환성
 */

let num1: number = 10; // number type
let num2: 10 = 10; // number litaral type

num1 = num2; // num1 > num2 업캐스팅(number literal type의 값을 number type 변수에 할당 가능)

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Cat = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let cat: Cat = {
    name: "여름이",
    color: "brown",
    breed: "garfield",
}

animal = cat; // animal(슈퍼타입) > cat(서브타입) cat을 animal 변수에 할당 (업캐스팅)

// cat = animal; // animal을 cat 변수에 할당 (다운캐스팅) 불가능, 에러: Property 'breed' is missing in type 'Animal' but required in type 'Cat'.

/**
 * cat이 breed type을 하나 더 가지고 있으면, cat이 더 큰 개념인, 슈퍼타입인게 아닌가?
 * animal: name, color (500마리), cat: name, color, breed(50마리) 결국 타입이 많아지면 더 조건이 까다로워지고 필터링이 더 엄격하게 되어, 충족하는게 줄어든다. 더 작은 개념이 된다(서브타입)
 */

// 슈퍼타입
type Book = {
    name: string;
    price: number;
}

// 서브타입
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingbook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    skill: "typescript",
}

book = programmingbook; // 업캐스팅 할당 가능
// programmingbook = book; // 다운캐스팅 할당 불가(book > programmingbook)

// 초과 프로퍼티 검사: 처음에 초기화를 할 때 book2 변수는, Book2에 있는 타입 그대로 갖고 있어야 한다. 그게 아니면 에러  
// 슈퍼타입
type Book2 = {
    name: string;
    price: number;
}

// 서브타입
let book2: Book2 = {
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    // skill: "typescript", // Object literal may only specify known properties, and 'skill' does not exist in type 'Book2'.
}

let book3: Book2 = programmingbook; // 객체 리터럴을 사용한건 아니기에 초과 프로퍼티 검사 발동 안함

// 함수의 인수로 객체를 전달할 때도, 객체 리터럴을 전달하면 초과 프로퍼티 작동함. 만약 서브타입 객체를 넣고 싶으면, 
function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    // skill: "typescript", // 초과 프로퍼티 작동
})
func(programmingbook); // 변수에 저장해두었다가 인수로 변수 전달해야함 (서브타입 객체 사용)