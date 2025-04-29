/**
 * 템플릿 리터럴 타입: 문자열로 여러가지 상황 표현
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`;

// const coloredAnimal: ColoredAnimal = ''; // 만들고 싶은 조합 간단하게 만들기 가능
