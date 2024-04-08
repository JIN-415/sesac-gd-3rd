// 버튼 이벤트 함수화
import { useState } from 'react';

export default function FuncStatePrac() {
  const [num, setNum] = useState(0);

  function increase() {
    let copy = num;
    copy++;
    setNum(copy);
  }

  function decrease() {
    let copy = num;
    copy = copy - 2;
    setNum(copy);
  }

  return (
    <>
      <div style={{ fontSize: '30px' }}>
        {num} {num > 7 ? '😂' : '😁'}
      </div>
      <button
        onClick={() => {
          increase();
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          decrease();
        }}
      >
        decrease
      </button>
    </>
  );
}
