/* 1. vanilla JS */
// export default function FuncState() {
//   let apple = '사과';

//   const inEng = () => {
//     const content = document.querySelector('.state');
//     content.innerText = 'apple';
//     apple = 'apple';
//     console.log(apple);
//   };
//
//   return (
//     <>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>이 컴포넌트는 vanilla JS로 작성</div>
//       <div className='state'>{apple}</div>
//       <button onClick={() => inEng()}>영어로 변경</button>
//     </>
//   );
// }

/* ------------------------------------------------------------------------ */

/* 2. Func State : useState 사용 */

// import { useState } from 'react';

// export default function FuncState() {
//   /* const [state변수명, state를 변경 시키는 setter 함수] = useState(state 초기값) */
//   const [apple, setApple] = useState('사과');
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>이 컴포넌트는 useState 사용</div>
//       <div className='state'>{apple}</div>
//       <button onClick={() => setApple('apple')}>영어로 변경</button>

//       <hr />

//       <h2>number state를 1씩 증가시키는 버튼 만들기</h2>
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           /* number state를 1 더하는 로직 다음에 alert 띄우는 로직이 작성되어있어도
//           alert에서 보이는 값은 1을 더하기 전 number 값이 보임
//           state의 setter 함수는 비동기적으로 동작함
//           그래서 number라는 state가 1 더한 값으로 업데이트되기 전
//           alert 창이 띄워져 버려서 1 더한 값이 아닌 원래값이 보이게 됨 */
//           /*  update 되기 전에 alert에 값을 넘기기 때문임 */
//           setNumber(number + 1);
//           alert(number);

//           /* 이를 해결하기 위한 하나의 예시 */
//           /* state의 setter 함수에 인자로 업데이트할 값이 아닌 콜백 전달
//           해당 콜백의 인자로는 원래 state 값이고 원래 state 값에 1를 더하는 로직 */
//           // setNumber((prevNum) => prevNum + 1);

//           setNumber((prevNum) => {
//             alert(prevNum + 1);
//             return prevNum + 1;
//           });
//         }}
//       >
//         +1
//       </button>
//     </>
//   );
// }

/* ------------------------------------------------------------------------ */

/* 사과 ⇄ apple 양방향 버튼 */

import { useState } from 'react';

export default function FuncState() {
  const [apple] = useState(['사과', 'apple']);
  const [btnName] = useState(['영어로 변경', '한글로 변경']);

  let [lan, setLan] = useState(true);

  return (
    <>
      <h2>함수형 컴포넌트에서 state 사용하기</h2>
      <div>이 컴포넌트는 useState 사용</div>
      <div className='state'>{lan ? apple[0] : apple[1]}</div>
      <button
        onClick={() => {
          setLan(!lan);
        }}
      >
        {lan ? btnName[0] : btnName[1]}
      </button>

      <hr />
    </>
  );
}

// import { useState } from 'react';

// export default function FuncState() {
//   const [showEnglish, setShowEnglish] = useState(true);

//   return (
//     <div>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>useState 사용해 버튼 클릭 시 사과➡️apple➡️사과➡️apple</div>
//       <button
//         onClick={() => {
//           setShowEnglish(!showEnglish);
//         }}
//       >
//         {showEnglish ? '한글' : '영어'}로 변경
//       </button>
//       <div>{showEnglish ? 'apple' : '사과'}</div>
//     </div>
//   );
// }
