/**
 * Mapped Type: Interface로 정의 불가, type으로 정의 가능, 예를 들어 3개의 프로퍼티 중 한 개만 수정하려고 할 때 나머지 프로퍼티는 중복 작성하지 않게끔 하기 위함
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: '홍길동',
    age: 29,
  };
}

const user = fetchUser();
// user.id = 1; // 수정 불가

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

updateUser({
  // id: 1,
  // name: '홍길동',
  age: 25, // 이 값만 변경 할껀데 굳이 id, name까지 변경해야하는게 맞나?
});
