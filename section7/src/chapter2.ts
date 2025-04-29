/**
 * map 메서드 : 배열의 각 요소를 반환
 */

const arr = [1, 2, 3];
const newArr = arr.map(it => it * 2); // it: number
// [[2 ,4, 6]]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, it => it * 2); // map:
map(['hi', 'hello'], it => it.toUpperCase());
map(['hi', 'hello'], it => parseInt(it));

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr.forEach(it => console.log(it));

// forEach함수는 아무것도 반환하지 않기에 void로 타입 선언
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, it => {
  console.log(it.toFixed());
});

forEach(['123', '456'], it => {
  it;
});
