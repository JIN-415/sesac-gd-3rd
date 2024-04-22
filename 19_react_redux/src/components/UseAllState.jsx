import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterMinus, counterPlus, counterReset } from '../store/modules/countReducer';
import { isLoggedinChange } from '../store/modules/isLoggedinReducer';

function ParentComp() {
  /* useSelector를 통해 rootReducer에서 관리되는 isLoggendIn state에 접근 */
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div style={{ border: '5px solid pink' }}>
      <h2>부모 컴포넌트</h2>
      <div>자식으로 UseAllState 컴포넌트를 저장</div>
      <div>이 컴포넌트는 어떤 props도 전달하지 않는 중</div>
      <div>현재 전역으로 관리되는 isLoggedIn state 값 : {isLoggedIn ? 'loggedIn' : 'loggedOut'}</div>
      <Child />
    </div>
  );
}

function Child() {
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();

  return (
    <>
      <p>count state : {count}</p>
      <button onClick={() => dispatch({ type: 'count/increment' })}>+ 1</button>
      <button onClick={() => dispatch({ type: 'count/decrement' })}>- 1</button>
      <button onClick={() => dispatch({ type: 'count/reset' })}>reset</button>

      <p>countReducer에서 정의한 action 함수 사용</p>
      <button onClick={() => dispatch(counterPlus())}>+1</button>
      <button onClick={() => dispatch(counterMinus())}>-1</button>
      <button onClick={() => dispatch(counterReset())}>reset</button>

      <p>isLoggedIn state 업데이트 하기</p>
      <button onClick={() => dispatch({ type: 'isLoggendin/change' })}>{isLoggedIn ? 'logout' : 'login'}</button>

      <p>isLoggedInReducer에서 정의한 action 함수 사용</p>
      <button onClick={() => dispatch(isLoggedinChange())}>{isLoggedIn ? 'logout' : 'login'}</button>
    </>
  );
}

export default function UseAllState() {
  return (
    <div>
      <ParentComp />
    </div>
  );
}
