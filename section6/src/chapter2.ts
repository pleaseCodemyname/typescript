/**
 * 접근 제어자(access modifier): public, private, protected
 */

// public: 접근 제한 없음, 외부(자식 클래스)에서 프로퍼티 접근 가능
class Employee {
  //필드
  public name: string; // 기본적으로 public이 설정되어 있음
  public age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('Working');
  }
}

const employee = new Employee('홍길동', 29, 'developer');
employee.name = '김길동'; // 프로퍼티의 값 수정 가능
employee.age = 30;
employee.position = '디자이너';

// private: 접근 제한 가능, 가장 제한적인 접근 제어자, 클래스 내부에서만 프로퍼티 접근이 가능, 파생클래에서 접근 불가능
class EmployeeB {
  //필드
  private name: string; // private 설정시 EmployeeB 클래스 내부에서만 프로퍼티의 접근이 가능하다는 에러: Property 'name' is private and only accessible within class 'EmployeeB'.
  private age: number;
  private position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} Working`); // private 설정 시 메소드 안에서만 프로퍼티 접근 가능
  }
}

// 파생 클래스
class ExcutiveOfficer extends EmployeeB {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // 파생 클래스(부모로부터 상속)된 클래스는 'super'호출을 포함해야함
    this.officeNumber = officeNumber;
  }
  // 메서드
  func() {
    // this.name; // 파생 클래스에서도 부모클래스(EmployeeB) 클래스에 접근 불가
  }
}

const employeeB = new EmployeeB('홍길동', 29, 'developer');
// employeeB.name = '김길동'; // 에러: Property 'name' is private and only accessible within class 'EmployeeB'. 프로퍼티의 값 수정 불가
// employeeB.age = 30;
// employeeB.position = '디자이너';

// protected: 외부에서 접근이 불가능하지만, 파생클래스 메서드 안에서는 부모클래스의 프로퍼티 접근 허용
class EmployeeC {
  //필드 (생략 가능)
  // protected name: string; // private 설정시 EmployeeB 클래스 내부에서만 프로퍼티의 접근이 가능하다는 에러: Property 'name' is private and only accessible within class 'EmployeeB'.
  // protected age: number;
  // protected position: string;

  // 생성자에 접근 제어자를 달면, 필드를 자동으로 만듬, 중복되었다는 오류가 나와서, 필드 정의는 생략해주는게 맞음
  constructor(private name: string, protected age: number, public position: string) {
    // 필드의 값 초기화도 자동으로 해줌(생략 가능)
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} Working`); // private 설정 시 메소드 안에서만 프로퍼티 접근 가능
  }
}

// 파생 클래스
class ExcutiveOfficerB extends EmployeeC {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // 파생 클래스(부모로부터 상속)된 클래스는 'super'호출을 포함해야함
    this.officeNumber = officeNumber;
  }
  // 메서드
  func() {
    this.age; // protected 사용시 파생 클래스에서도 부모클래스(EmployeeB) 클래스에 접근 가능능
    // this.name;
    this.position;
  }
}

const employeeC = new EmployeeC('홍길동', 29, 'developer');
// employeeC.name = '김길동'; // 에러: Property 'name' is private and only accessible within class 'EmployeeB'. 프로퍼티의 값 수정 불가
// employeeC.age = 30;
employeeC.position = '디자이너';

console.log(employeeC);
