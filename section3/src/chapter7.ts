/**
 * 타입 좁히기(Type Guard): 조건문 등을 이용해 넓은 타입에서 좁은 타입으로, 상황에 따라 좁혀나가는 방법
 */

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime

type Person = {
    name: string;
    age: number;
}

function func(value : number | string | Date | null | Person) {
    value; // value: string | number (유니온 타입)
    // value => number : toFixed()
    // value => string : toUpperCase()
    // value => Date: getTime()
    // value => Person : name은 age살 입니다.
    // 타입 가드: 조건문과 함께 타입을 좁히는 표현
    if(typeof value === "number") { 
        console.log(value.toFixed()); // value : number
    } else if(typeof value === "string") {
        console.log(value.toUpperCase()); // value: string
    // } else if(typeof value === "object") {  // typeof는 기본 데이터 타입(primitive types)만 반환하기 때문에 typeof value === "Date"가 안됨, Date는 객체(object)타입
    //     console.log(value.getTime()) // typeof value === "object"는 Date 객체 값 뿐만 아니라 Null값도 통과할 수 있음, Date 객체임을 보장할 수 없음
    } else if(value instanceof Date) { // 왼쪽에 있는 값(value)이 오른쪽의(Date) instance냐 물어보는 연산자임, 맞으면 true, 아니면 false를 반환, Date는 클래스임
        console.log(value.getTime()); // 인스턴스 개념: value가 Date의 객체인가? null은 Date객체가 아니니 통과할 수 없음
    // } else if(value instanceof Person) { // 에러: 'Person' only refers to a type, but is being used as a value here. (Person 형식은 참조하지만, 값으로 사용되고 있음)
    //     console.log(`${value.name}은 ${value.age}살 입니다.`) // instanceof 우측엔 type이 들어오면 안됨. 왼쪽에 있는 value가 오른쪽의 클래스의 인스턴스인지를 확인하는 연산자. 
    // }
    // } else if('age' in value) { // 에러: 'value' is possibly 'null'. value값이 null 일 수 있다. 
    //     console.log(`${value.name}은 ${value.age}살 입니다.`) 
    // }
    } else if(value && 'age' in value) { // value가 null이 아님을 밝혀주기 위해 value가 있음을 명시 (value && "age" in value)
        console.log(`${value.name}은 ${value.age}살 입니다.`) // instanceof 우측엔 type이 들어오면 안됨. 왼쪽에 있는 value가 오른쪽의 클래스의 인스턴스인지를 확인하는 연산자. 
    }
}

// Person은 클래스가 아닌 자체 생성한 객체임 