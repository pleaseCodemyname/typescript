/**
 * Indexed Access Type(인덱스드 액세스 타입)
 */

// 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// 작성자의 id와 name을 붙여서 출력하는 메소드, Post 타입으로 부터 author 객체를 가져옴, 값이 추가되어도 Post를 수정된 프로퍼트값 그대로 가져옴
function printAuthorinfo(author: Post['author']) {
  //[] 인덱스에 들어가는 것은 타입이다. [type]
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '홍길동',
    age: 29,
  },
};

// 배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorinfo2(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

const postList: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '홍길동',
    age: 29,
  },
};

printAuthorinfo2(post.author);

// 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number]; // string | number | boolean

// type Tup3 = Tup[3]; 존재하지 않음
