/**
 * 클래스
 */

let studentA = {
  name: '홍길동',
  grade: 'A+',
  age: 29,
  study() {
    console.log('열심히 공부 함');
  },
  introduce() {
    console.log('안녕하세요~!');
  },
};

// 클래스명 앞글자 대문자(파스칼 케이스)
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자 (클래스 호출시 실제 객체를 생성(메소드)하는 역할), 생성자 안에서는 쉼표가 존재하지 않음
  constructor(name, grade, age) {
    this.name = name; // this는 클래스가 만들고 있는 객체
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  study() {
    console.log('열심히 공부 중');
  }
  introduce() {
    console.log(`안녕하세요~! ${this.name} 입니다!`);
  }
}

// 클래스를 호출해서 객체 생성시 new 키워드 사용, 클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student('홍길동', 'A+', 29);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper {
  // 필드
  name;
  grade;
  age;
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    this.favoriteSkill = favoriteSkill;
  }

  // 메소드
  study() {
    console.log('열공중');
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!`);
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 개발`);
  }
}

const studentDeveloper = new StudentDeveloper('김길동', 'A+', 29, 'nestjs');
console.log(studentDeveloper);
studentDeveloper.programming();

// 중복된 코드가 많아져 상속으로 변경 후의 코드
class StudentDeveloperB extends Student {
  // 필드(그대로 상속 받음)
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 매개변수 name, grade, age는 부모 클래스(Student)에게서 상속 받아야 함(super)
    this.favoriteSkill = favoriteSkill;
  }

  // 메소드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 개발`);
  }
}

const studentDeveloperB = new StudentDeveloperB('김길동', 'A+', 29, 'nestjs');
console.log('------------');
console.log(studentDeveloperB);
studentDeveloperB.programming();
