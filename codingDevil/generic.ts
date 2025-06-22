// Generic: 제네릭 사용시 클래스, 함수, 인터페이스를 다양한 타입으로 사용 가능
// 선언 시 타입 파라미터만 적어주고, 생성하는 시점에 사용하는 타입 결정
// 인자에 해당하는 타입에 따라 계속 매개변수 타입을 지정해줘야하는 번거로움이 있음 -->
// 이를 해결하고자 제네릭을 사용
function getSize(arr: number[] | string[] | boolean[] | object[]): number {
  return arr.length; // return 값 = number타입
}

const arr1 = [1, 2, 3];
getSize(arr1);

const arr2 = ["a", "b", "c"];
getSize(arr2);

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, { name: "Tim" }];
getSize(arr4);

function getSizes<T>(arr: T[]): number {
  // <T>는 어떤 타입을 전달 받아서, 매개변수 타입은 T의 배열
  return arr.length;
}

const arr5 = [1, 2, 3];
getSizes<number | string>(arr5); // 특정 타입으로 강조할 때 <해당 타입> 명시

const arr6 = ["a", "b", "c"];
getSizes<string>(arr6);

const arr7 = [false, true, true];
getSizes<boolean>(arr7);

const arr8 = [{}, {}, { name: "Tim" }];
getSizes<object>(arr8);

interface Mobile<T> {
  name: string;
  price: number;
  option: T; // 어떤 타입이 올지 모르는 상황
}

// const m1: Mobile<Object> = {
const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s22",
  price: 1000,
  option: "good",
};

interface User {
  name: string;
  age: number;
}

interface CarInfo {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: CarInfo = { name: "bmw", color: "red" };
const book: Book = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
showName(car);
// showName(book);
