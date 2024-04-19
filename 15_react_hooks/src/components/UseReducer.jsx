import { useState, useReducer } from 'react';

const reducer = (prevState, action) => {
  console.log('dispatch 호출 시 reducer 동작함');
  console.log(prevState, action);

  /* reducer 함수 내부에는 조건문을 많이 사용함 
    switch나 if else 등등
    복잡한 state를 관리한다는 것은 state가 한가지만 있는 것이 아니고,
    업데이트 로직이 한가지 있다는 것이 아니기 때문임 */
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);

  /* const [state, dispatch] = useReducer(reducer, initialState) */
  const [moeny, dispatch] = useReducer(reducer, 0);
  /* reducer는 따로 만들어줘야 함 */
  /* 잔고 (money state)를 수정하고 싶은 경우 리듀서가 디스패치를 불러줌*/
  return <div>UseReducer</div>;
}
