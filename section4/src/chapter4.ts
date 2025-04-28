/**
 * 사용자 정의 타입 가드(custom type guard)
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat; // Union 타입

function isDog(animal: Animal): animal is Dog {
  // 만약 함수가 true를 반환하면, animal은 Dog타입
  return (animal as Dog).isBark !== undefined; // 타입 단언 (animal as Dog)
}

function isCat(animal: Animal): animal is Cat {
  // 만약 함수가 true를 반환하면, animal은 Cat타입
  return (animal as Cat).isScratch !== undefined; // 타입 단언 (animal as Cat)
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal; // animal : Dog
  } else if (isCat(animal)) {
    // 고양이
    animal; // animal : Cat
  }
}
