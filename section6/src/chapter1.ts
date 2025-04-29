/**
 * 타입스크립트의 클래스: 자바스크립트의 클래스로 취급 + 타입으로도 취급
 */

const employee = {
  name: '홍길동',
  age: 27,
  position: 'developer',
  work() {
    console.log('Working');
  },
};

// 클래스 자체가 하나의 타입으로도 취급
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

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

class ExcutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // 파생 클래스(부모로부터 상속)된 클래스는 'super'호출을 포함해야함
    this.officeNumber = officeNumber;
  }
  // 메서드
  work() {
    console.log('인사처리 중');
  }
}

const employeeB = new Employee('홍길동', 29, 'BE');
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {},
};

console.log(employeeC);

const employeeD = new ExcutiveOfficer('이이사', 50, 'PM', 7007);
console.log(employeeD);
employeeD.work();
