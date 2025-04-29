/**
 * 인터페이스와 클래스
 */

// 인터페이스: 클래스의 설계도 역할, 인터페이스로 정의하는 필드는 무조건 public임.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// Character 클래스는 CharacterInterface 인터페이스를 구현(implement)한다.
class Character implements CharacterInterface {
  // 필드
  name: string;
  moveSpeed: number;

  // 생성자
  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  // 매소드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

// 깔끔한 버전: 프로퍼티에 public 명시하면 필드 및 this.프로퍼티(속성) 생략 가능
class Character2 implements CharacterInterface {
  // 생성자  ()
  constructor(public name: string, public moveSpeed: number, private extra: string) {} // private가 필요하면 생성자에서 따로 정의해줘야함
  // constructor(private name: string, protected moveSpeed: number) {} // incorrectly implements

  // 매소드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
