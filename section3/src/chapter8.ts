/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입(두 타입간 공통된 값이 하나도 없는 타입)
 * ex) string, number (교집합 X) --> 서로소 관계에 있음
 */

type Admin = {
  tag: 'ADMIN'; // String Literal Type (특정 문자열 한 개만 가질 수 있는 타입)
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'Member'; // String Literal Type (특정 문자열 한 개만 가질 수 있는 타입)
  name: string;
  point: number;
};

type Guest = {
  tag: 'Guest'; // String Literal Type (특정 문자열 한 개만 가질 수 있는 타입)
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visiCount}번 방문했습니다.
// 다른 사람이 내 코드를 봤을 때 한 번에 코드를 파악하기 쉽지 않음, 직관적이지 않음
function login(user: User) {
  // 매개변수 user는 Admin | Member | Guest 셋 중 하나
  // if ("kickCount" in user) {
  // user // Admin
  if (user.tag === 'ADMIN') {
    // 훨씬 알아보기 쉬움
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    // } else if ("point" in user) {
    // user // Member
  } else if (user.tag === 'Member') {
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
    // } else if ("visitCount" in user) {
    // user // Guest
  } else if (user.tag === 'Guest') {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
  }
}

// 훨씬 더 직관적으로도 가능
function login2(user: User) {
  switch (user.tag) {
    case 'ADMIN':
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case 'Member':
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    case 'Guest':
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
  }
}

/**
 * 한 가지 더 사례
 */
// 비동기 작업의 결과를 처리하는 객체 생성, 비동기 작업: API 호출, 서버에서 데이터를 받아옴 등의 작업
// LOADING, FAILED, SUCCESS 세 가지 객체를 한 번에 표현할 수 있는 타입 생성

type AsyncTask = {
  state: 'LOADING' | 'FAILED' | 'SUCCESS'; // state가 LOADING일 때는 error와 response가 없으니깐 선택적 프로퍼티로(?)
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패 -> 실패 : 에러 메시지를 출력
// 성공 -> 성공 : 데이터를 출력
const loading: AsyncTask = {
  state: 'LOADING',
};

const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은 ~~',
  },
};

const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터 ~~',
  },
};

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩 중');
      break;
    case 'FAILED':
      console.log(`에러 발생 : ${task.error?.message}`); // 'task.error' is possibly 'undefined'.
      break;
    case 'SUCCESS':
      console.log(`성공 : ${task.response!.data}`); // 'task.response' is possibly 'undefined'.
      break;
  }
}

// 서로소 유니온 타입 3개로 나누기
type LoadingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask;

function processResult2(task: AsyncTask2) {
  switch (task.state) {
    case 'LOADING':
      console.log(`로딩 중, ${task.state}`); // task: LoadingTask
      break;
    case 'FAILED':
      console.log(`에러 발생 : ${task.error.message}`); // task: FailedTask
      break;
    case 'SUCCESS':
      console.log(`성공 : ${task.response.data}`); // task: SuccessTask
      break;
  }
}
