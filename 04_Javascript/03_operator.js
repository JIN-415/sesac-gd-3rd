console.log("connected!");

/* 
    대입 연산자(=)
    - 변수에 값을 할당할 때 사용하는 연산자
*/

let a = 1;
const b = "1";

console.log("------------------");
/* 
    비교 연산자 (--, !=)
    - 피연산자의 값이 같은 지 비교
    - 타입이 달라도 괜찮음 -> 값만 비교하기 때문에
*/
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == "1"); // true
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log(1 != "1"); // false

console.log("------------------");
/* 
    일치 연산자 (===, !==)
    - 피연산자의 값과 타입을 모두 비교
    - 엄격한 동등 연산자
*/
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log(1 !== "1"); // true

console.log("------------------");
/* 
    크기 비교 (>, >=, <, <=)
*/
console.log(2 > 1); // true
console.log(1 >= 1); // true
console.log(2 < 1); // false
console.log(1 <= 1); // true

console.log("------------------");
/*
    산술 연산자 (+, -, *, /, %(나머지), **(제곱))
*/
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
console.log(1 / 2); // 0.5
// 나머지 연산자
console.log(1 % 2); // 1
console.log(8 % 5); // 3
console.log(1 ** 2); // 1

console.log("------------------");
/* 
    논리 연산자 (!, &&, ||)
*/
console.log(!true); // fasle
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // fasle
console.log(true && true); // true
console.log(1 < 2 && 1 < 5); // true
console.log(1 > 2 && 1 < 5); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(1 > 2 && 1 < 5); // true
console.log(1 > 2 && 1 > 5); // false

// 연산자 응용
console.log(!(2 > 1)); // false
console.log(2 > 1 && -2 < 1); // true
console.log((2 > 1 && -2 < 1) || 5 < 3); // true

console.log("------------------");
