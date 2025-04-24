// enum 타입: 여러가지 값에 각각 이름을 부여해 열거해두고 사용하는 타입
// 왜 사용하는가? 보통 역할을 숫자로 표현하는데, 어떤 숫자가 무슨 역할하는지 기억이 안날때가 있는데, 그걸 명확하게 인지하기 위함
// 보통 type관련 코드는 컴파일하면 컴파일 코드가 다 사라지지만, enum은 컴파일 후에도사라지지 않는다.
enum Role {
    // ADMIN = 0, // 숫자형 enum = enum에 각각의 멤버의 값이 숫자가 할당되는 enum
    // ADMIN, // 숫자 명시하지 않아도 자동으로 0번 배정됨
    ADMIN = 10, // 숫자 명시 10으로 하면 자동으로 순서대로 +1씩 증가함
    // USER = 1,
    USER, // 자동으로 1번
    // GUEST = 2,
    GUEST, // 자동으로 2번
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "홍길동",
    //role: 0, 0 = 관리자 (enum 적용 전)
    role: Role.ADMIN, // enum 적용 후
    language: Language.korean,
}

const user2 = {
    name: "짱구",
    //role: 1,  1 = 일반 유저 (enum 적용 전)
    role: Role.USER, // enum 적용 후
    language: Language.english,
}

const user3 = {
    name: "철수",
    //role: 2, // 게스트 (enum 적용 전)
    role: Role.GUEST, // enum 적용 후
}

console.log(user1, user2, user3);