/**
 * 제네릭 클래스
 */

// 제네릭 클래스를 통해 비효율 개선
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 인스턴스 생성
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1, 2, 4]

// StringList 클래스도 플요하면 다시 재정의하고 중복된 코드가 많이 발생하는게 너무 비효율적임
const stringList = new List(['1', '2']);
stringList.push('hello');
