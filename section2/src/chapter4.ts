// 타입 별칭 (타입 중복 제거)
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

// type User = {} // 타입 별칭 선언 시 같은 스코프 내에 중복되지 않게 설정 (Duplicate identifier 'User'.)

// function func() {
//     type User = {}; // func 안에서 type은 User, func 밖에서는 전역스코프에 사용된 User임
// }

let user: {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
} = {
    id: 1,
    name: "홍길동",
    nickname: "winterlood",
    birth: "2000.01.02",
    bio: "안녕하세요",
    location: "서울시 마포구구"
};

// 타입 별칭 적용
let user1: User = {
    id: 2,
    name: "김길동",
    nickname: "dope",
    birth: "2020.03.04",
    bio: "Hi",
    location: "서울시 성동구"
}
// 인덱스 시그니처(객체 타입 정의 유연하게 생성)
// 인덱스 시그니처 적용전
// type Countrycodes = {
//     Korea: string;
//     UnitedStates: string;
//     UnitedKingdom: string;
// }
// let countryCodes = {
//     Korea: "ko",
//     UnitedStates: "us",
//     UnitedKingdom: "uk",
// }

// 인덱스 시그니처 적용 후
type CountryCodes = {
    [key: string] : string;
};
// ex 1)
let countryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    UnitedKingdom: "uk",
};

// ex 2)
type CountryNumberCodes = {
    [key: string]: number;
    // Korea: string; // Korea는 특별히 string으로 저장할 수 있게 허용
    Korea: number;
    // 에러: Property 'Korea' of type 'string' is not assignable to 'string' index type 'number'.
    // 추가로 정의된 Korea 객체의 type이 반드시 인덱스 시그니처의 type과 일치, 호환해야함
};

let countryNumberAndStringCodes: CountryNumberCodes = {
    Korea: 840,
}