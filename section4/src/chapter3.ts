/**
 * 함수 오버로딩: 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * 하나의 함수 func --> 모든 매개변수의 타입: number
 * 1) 매개변수 1개 --> 매개변수에 20을 곱한 값 출력
 * 2) 매개변수 3개 --> 매개변수를 다 더한 값을 출력
 */

// 버전들
function func(a: number): void;
function func(a: number, b: number, c: number): void; // 오버로드 시그니처: 함수의 구현부 없이 선언식만 딱 써놓은 것, 함수를 오버로딩하기 위해서 각각 매개변수별로 다른 버전을 명시해주기 위해 사용

// 실제 구현부
function func(a: number, b?: number, c?: number) {
  // 두 번째 버전에만 호환됨, 이를 해결하기 위해선 b랑 c를 선택적 프로퍼티로 정의
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // function func(a:number): void; 와 일치
func(1, 2, 3); // function func(a: number, b: number, c: number): void; 와 일치

// 오버로드 시그니처를 참조해서 그 중 하나의 버전을 따라감
// func(); // 에러: Expected 1-3 arguments, but got 0.
// func(1, 2); // 에러: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
