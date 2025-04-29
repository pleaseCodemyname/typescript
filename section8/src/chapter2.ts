/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

// keyof: Person의 객체를 유니온 타입으로 key: "name" | "age"
// typeof: person 변수의 객체 유니온 타입으로 "name" | "age"
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '홍길동',
  age: 29,
};

getPropertyKey(person, 'name'); // '홍길동'
