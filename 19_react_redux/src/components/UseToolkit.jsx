import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, increase, decrease, reset } from '../store/modules/countSlice';
import { useRef } from 'react';

export default function UseToolkit() {
  const count = useSelector((state) => state.count.count);

  const dispatch = useDispatch();

  const inputRef = useRef();

  return (
    <>
      <h2>redux toolkit의 createSlice 사용하기</h2>
      <div>{count}</div>
      <p>
        <input type='nubmer' ref={inputRef} />
      </p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(increase(Number(inputRef.current.value)))}>입력값 더하기</button>
      <button onClick={() => dispatch(decrease(Number(inputRef.current.value)))}>입력값 빼기</button>
    </>
  );
}
