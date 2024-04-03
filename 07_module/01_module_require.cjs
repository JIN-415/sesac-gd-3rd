/* 
    commonjs 에서 모듈 사용을 위해
    package.json 파일에 "type : commonjs"를 추가해야 함
    
    npm init 명령어를 통해 자동으로 해당 프로젝트의 package.json 생성 가능

    cjs 확장자는 commonjs를 사용하는 파일이라는 것을 알림
*/

// 01_module01.cjs 사용
const Person = require('./01_module01.cjs');

// 01_module02.cjs에서 exports한 모든 데이터가 Person에 저장됨
console.log(Person);

// Person에 저장된 변수, 클래스, 함수 사용
// 변수 사용
console.log(Person.colors);
// 함수 사용
console.log(Person.sayName('장원영'));
// 클래스 사용
const chaewon = new Person.Person('채원', 23);

console.log(chaewon);
console.log(chaewon.getBornYear());

// 구조 분해 할당
const { sayName } = require('./01_module01.cjs');
sayName('안유진');

// --------------------------------------------------------------

// 02_module02.cjs 사용

const { sayName2, colors2 } = require('./01_module02.cjs');

console.log(colors2);
sayName2('강동원');

//  default
