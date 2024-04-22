let num: number = 1;
// num = '1';  /* error : number 타입으로 지정한 변수는 문자열로 작성 불가 */
num = 2;
console.log(num);

let str: string = 'str';
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

/* 원시타입의 경우 타입 작성하지 않아도 ts가 알아서 추론 */
let isTure2 = true;
let undef2;
let empty2 = null;

/* 
    array
    요소의 갯수를 미리 명시할 필요는 없지만
    array의 요소가 어떤 타입인지는 명시 필요
*/
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ['가', '나', '다', '라'];

/* 배열에 여러 개의 타입을 작성하고 싶을 때 */
let arr1: (number | string)[] = [1, 2, 3, '가', '나', '다'];
let arr2: Array<number | string> = [1, 2, 3, '가', '나', '다'];

let arr3: (boolean | null | number[])[] = [true, null, false, [4, 22]];
let arr4: Array<boolean | null | number[]> = [true, null, false, [4, 22]];

/* 어떤 자료형이든 상관없이 들어갈 수 있는 배열 */
let arrAny: any[] = [1, 2, '까요', false, ['a'], 3, null];