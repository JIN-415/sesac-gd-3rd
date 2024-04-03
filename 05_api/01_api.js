/* 
  간단한 비동기 코드 예시
  setTimeout을 사용해 비동기적으로 코드 실행
  1, 3, 2 순으로 콘솔에서 확인 가능
  setTimeout은 해당 시간동안 코드가 실행을 멈추는 것이 아니라
  setTimeout와 다음 줄에 작성된 코드가 모두 실행되고 있는 중
  하지만 setTImeout의 두 번째 인자인 ms 시간이 지난 뒤에
  setTimeout 내부의 코드를 실행하는 것 
*/

// console.log("hi 1");

// setTimeout(() => {
//   console.log("hi 2");
// }, 1000);

// console.log("hi 3");

// ---------------------------------------------------------------

// 만약 비동기 코드를 동기적으로 또는 원하는 순서대로 실행시키고 싶다면
// 동기적으로 실행할 부분을 callback 함수 내부에 작성

// console.log("hi 1");

// setTimeout(() => {
//   console.log("hi 2");
//   console.log("hi 3");
// }, 1000);

// ---------------------------------------------------------------

// 사용자에게 아이디를 입력받고, 비동기적으로 서버 통신을 흉내내는 로그인 로직
// const id = prompt("아이디를 입력해주세요");
// let userId;
// console.log("로그인 시도");

// 서버 통신 부분
// setTimeout(() => {
//   userId = "jin415";
//   console.log("ID successfully received from server");
// }, 2000);

// if (id === userId) {
//   console.log("로그인 성공");
// } else {
//   console.log("로그인 실패");
// }

/* 
    - 로그인 실패라고 콘솔에 뜨는 이유
    setTimeout 내부의 콜백함수가 실행되기 전(서버에서 데이터를 받아오기 전)에
    사용자에게 입력받은 id와 userId(undefined)를 비교하기 때문
    userId는 서버에서 데이터를 받아오지 못했기 때문에 값이 없음
    즉, undefined와 비교해서 조건문에서 항상 false가 되어 else절만 실행함
 */

// 정상적으로 입력받은 id와 서버에서 받은 userId를 비교하는 코드

// const id = prompt("아이디를 입력해주세요");
// let userId;
// console.log("로그인 시도");

// 서버 통신 부분
// setTimeout(() => {
//   userId = "jin415";
//   console.log("ID successfully received from server");
//   if (id === userId) {
//     console.log("로그인 성공");
//   } else {
//     console.log("로그인 실패");
//   }
// }, 2000);

// 콜백 지옥 예시코드
// setTimeout(() => {
//   let teacherList = "";
//   let name = "layla"; // 임의로 서버에서 받아온 name
//   if (!name) {
//     console.log("강사 이름을 찾을 수 없습니다!");
//   } else {
//     teacherList += name;
//     console.log(teacherList);
//   }
//   setTimeout(() => {
//     name = "yuki"; // 임의로 서버에서 받아온 name
//     if (!name) {
//       console.log("강사 이름을 찾을 수 없습니다!");
//     } else {
//       teacherList += ", " + name;
//       console.log(teacherList);
//     }
//     setTimeout(() => {
//       name = "lily"; // 임의로 서버에서 받아온 name
//       if (!name) {
//         console.log("강사 이름을 찾을 수 없습니다!");
//       } else {
//         teacherList += ", " + name;
//         console.log(teacherList);
//       }
//     }, 1000);
//   }, 1000);
// }, 1000);

// ---------------------------------------------------------------

// Promise
// Promise를 사용해 비동기 처리를 구현하는 예시
// const id = 'ddayo01'; // 로그인 성공
// const id = 'ddayo02'; // 로그인 실패
// let userId;

// const promise = new Promise((resolve, reject) => {
//   console.log('Promise 시작');

//   setTimeout(() => {
//     userId = 'ddayo01'; // 서버에서 아이디 받아옴

//     if (userId === id) {
//       resolve(userId);
//     } else {
//       reject(new Error('아이디가 틀렸습니다. 다시 입력해주세요.'));
//     }
//   }, 2000);
// });

// promise
//   .then((data) => {
//     console.log(`userId는 ${data}입니다.`);
//   }).catch((error) => {
//     console.log(error);
//   }).finally(() => {
//     console.log('Promise 종료');
//   });

// ---------------------------------------------------------------

// async-await 사용
// promise는 then을 체이닝할 수 있어 너무 많은 체이닝을 할 경우 가독성이 떨어짐
// 이를 해결하기 위해 나온 것이 async-await
// promise를 다르게 사용하는 방법
// async : 해당 함수 내부에 await을 사용할 것임을 알림
// await : 해당 함수가 실행될 때까지 기다리게 함

// try-catch
// try 절을 실행함
// 실행 도중 어떤 에러 발생이나 문제가 발생하면 바로 catch 절로 이동
// finally 절은 무조건 실행

// const id = 'ddayo01'; // 성공
// const id = 'ddayo1'; // 실패
// let userId;

// Promise를 함수에 담아 해당 함수 호출 시 Promise가 실행되도록 작성
// const promiseFunc = () => {
//   return new Promise((res, rej) => {
//     console.log('promise 시작');

//     // 서버에서 데이터 받아오는 시간 대체
//     setTimeout(() => {
//       userId = 'ddayo01';

//       if (userId === id) {
//         res(userId);
//       } else {
//         rej(new Error('아이디가 틀렸습니다. 다시 입력해주세요.'));
//       }
//     }, 2000);
//   });
// };

// const checkUserId = async () => {
//   try {
//     const result = await promiseFunc();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('Promise 종료');
//   }
// };

// checkUserId();

// ---------------------------------------------------------------

/* 
  json
  - 데이터를 전송하기 위한 경량의 데이터 포맷
  - 여러 언어에서 쉽게 사용할 수 있어 서버와의 통신에서는 json으로 통신
*/

// [
//   {
//     "name": '장화',
//     "age": 13,
//     "Employed": true,
//     "position": "이사",
//     "address": {
//       "gu": "마포구",
//       "city" : "서울"
//     }
//   }
// ]

const jsonString =
  '{"name":"장화","age":13,"isEmployed":true,"position": "이사", "address":{"gu":"마포구","city":"서울시"}}';

// console.log(jsonString.name); // js 객체처럼 바로 사용할 수 없음

// json -> js 객체로 파싱하기
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name);

// js 객체 -> json으로 파싱하기
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);

// ---------------------------------------------------------------

// OPEN API 사용

// 고양이 사진 가져오기
fetch('https://api.thecatapi.com/v1/images/search')
  // method : 'GET'이 생략
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const img = document.createElement('img');
    img.src = data[0].url;
    img.setAttribute('width', 500);

    document.querySelector('#cat').append(img);
  });

// OMDB api 사용해 영화 데이터 가져오기
async function getMovieData() {
  let word = 'cat';

  const h3 = document.querySelector('h3');
  h3.innerText = `검색된 키워드 : ${word}`;

  // fetch로 데이터 불러오기
  // response 변수에는 서버에서 받아온 데이터가 저장됨
  const res = await fetch(`http://www.omdbapi.com/?i=${OMBD_API_KEY}=${word}`);
  const movieData = await res.json();

  console.log(movieData.Search);
  const ul = document.querySelector('ul');
  ul.innerHTML = ''; // ul 초기화

  // 불러온 데이터는 movieData.Search 배열 안에 각각의 객체로 있음
  // 반복문을 통해 각 요소를 만들고 DOM에 추가해야한다.

  for (let movie of movieData.Search) {
    const div = document.createElement('div'); // 영화 카드 컨테이너
    const img = document.createElement('img'); // 영화 포스터
    const p = document.createElement('p'); // 영화 제목

    img.src = movie.Poster;
    img.alt = movie.Title;
    p.innerText = movie.Title;

    div.append(img, p);
    ul.append(div);
  }
}

// ---------------------------------------------------------------

// JSONPlaceholder API 사용해 가짜 데이터로 CRUD 작업 하기
// JSONPlaceholder API : json 형태의 mock data(더미 데이터)를 주는 open API

// get 요청
// 특정 게시물을 가져오는 함수
const getPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

// post 요청
// 새로운 게시물 생성하는 함수
const postPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: '제목제목제목',
      body: '게시글 내용 내용 넌 나의 용 찡긋 - <',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // 브라우저 렌더링 등 응답으로 받은 데이터를 사용
      console.log(data);
    })
    .catch((err) => {
      // 에러 발생 시 원하는 에러 처리
      console.log('err : ', err);
    });
};

const deletePost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => console.log('DELETE'))
    .catch((err) => console.log('delete err', err));
};
