// // keyof

// interface UserInfo {
//   id: number;
//   name: string;
//   age: number;
//   gender: "m" | "f";
// }

// type UserKey = keyof UserInfo; // 'id' | 'name' | 'age' | 'gender'

// // const uk: UserKey = "age"; // UserInfo의 키 값 중 하나 입력하면 오류가 안남
// // const uk: UserKey = "id";
// // const uk: UserKey = "age";
// const uk: UserKey = "gender";

// // Partial<T> --> 프로퍼티를 모두 옵셔널로 바꿔줌
// let admin: Partial<UserInfo> = {
//   // Type '{ id: number; name: string; }' is missing the following properties from type 'UserInfo': age, gender
//   id: 1,
//   name: "Bob",
//   // job: "Developer"
// };

// // 아래와 같음
// // interface UserInfo {
// //   id?: number;
// //   name?: string;
// //   age?: number;
// //   gender?: "m" | "f";
// // }

// // Require<T> --> 모든 프로퍼티를 필수로
// // interface UserInfo {
// //   id: number;
// //   name: string;
// //   age: number;
// //   gender: "m" | "f";
// // }

// let admin_2: Required<UserInfo> = {
//   id: 1,
//   name: "Bob",
//   age: 33,
//   gender: "m",
//   // Type '{ id: number; name: string; }' is missing the following properties from type 'Required<UserInfo>': age, gender --> age랑 number도 필수 프로퍼티가 되어버림
// };

// // Readonly<T>
// interface UserInfo_2 {
//   id: number;
//   name: string;
//   age?: number;
// }

// // let admin_3: UserInfo_2 = {
// //   id: 1,
// //   name: "Bob",
// // };

// // admin.id = 30; // 가능

// let admin_3: Readonly<UserInfo_2> = {
//   id: 1,
//   name: "Bob",
// };

// // admin_3.id = 33; // Cannot assign to id b/c it's a read-only property

// // // Record<K, T> K = Key, T = Type
// // interface Score {
// //   "1": "A" | "B" | "C" | "D";
// //   "2": "A" | "B" | "C" | "D";
// //   "3": "A" | "B" | "C" | "D";
// //   "4": "A" | "B" | "C" | "D";
// // }

// // const score: Score = {
// //   "1": "A",
// //   "2": "C",
// //   "3": "D",
// //   "4": "B",
// // };

// // Record를 활용하여 대체
// type Grade = "1" | "2" | "3" | "4";
// type Score = "A" | "B" | "C" | "D" | "F";

// // const score: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
// const score: Record<Grade, Score> = {
//   // Grade: Key, Score: Type
//   "1": "A",
//   "2": "C",
//   "3": "D",
//   "4": "B",
// };

// interface Info {
//   id: number;
//   name: string;
//   age: number;
// }

// function isValid(user: Info) {
//   const result: Record<keyof Info, boolean> = {
//     // K: keyof Info로 key 값 다 가져올 수 있음, value는 true | false 니깐(반환값이) boolean으로 타입 추정 가능
//     id: user.id > 0,
//     name: user.name !== "",
//     age: user.age > 0,
//   };
//   return result;
// }

// Pick<T, K> // T타입에서, Key 프로퍼티만 Pick해서 사용
// interface Users {
//   id: number;
//   name: string;
//   age: number;
//   gender: "m" | "f";
// }

// const users: Pick<Users, "id" | "name"> = {
//   id: 0,
//   name: "Bob",
// };

// Omit<T,K> // 특정 프로퍼티를 생략하고 사용할 수 있음
interface Users {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// age프로퍼티 키와 gender 프로퍼티키 생략 가능
const users: Omit<Users, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

// Exclude<T1, T2> // Exclude는 type으로 제외함, T1타입 중에서 T2타입과 일치하는 타입 제외 시킴
type T1 = string | number | boolean; // number 아니면 string 제외
type T2 = Exclude<T1, number | string>;

const anything: T2 = true;
// const nothing: T2 = 1 // T 2

// NonNullable<Type> null과 undefined 제외시킴
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
