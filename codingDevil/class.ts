// 접근 제한자(Access modifier) - public, private, protected
/**
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
protected - 자식 클래스에서 접근 가능
private - 해당 클래스 내부에서만 접근 가능
 */
class Car {
  name: string = "car"; // private는 Car 클래스 내부에서만 사용 가능
  color: string;
  static wheels = 4;
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car.wheels); // Static 정적 멤버 변수나 메서드는 this가 아닌 클래스명.프로퍼티
  }
}

class Bmw extends Car {
  constructor(color: string, name: string) {
    super(color, name); // 부모로부터 상속받음
  }
  showName() {
    console.log(this.name);
  }
}

const z4 = new Bmw("black", "zzz4");
console.log(z4.name); // protected는 자식 클래스 내부에서는 참조할 수 있으나, 클래스 인스턴스로는 존재할 수 없다.
console.log(Car.wheels);
// z4.name = "zzzz4";

// 추상 class
// 추상화: 프로퍼티나 메서드의 이름만 선언해주고, 구체적인 기능은 상속받는 쪽에서 구현해주는 것을 의미
// 추상 클래스를 상속받아 만든 수많은 객체들이 동일한 메서드를 갖고 있겠지만, 구체적인 기능은 서로 다를 수 있음
abstract class Bus {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething(): void;
}

// const bus = new Bus("red"); // abstract class는 new를 사용한 인스턴스 생성 불가

// abstract class는 상속은 가능
class InternalBus extends Bus {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    alert(3);
  }
}

const _110 = new InternalBus("red");
console.log(_110.color);
