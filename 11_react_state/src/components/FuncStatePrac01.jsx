// button 이벤트1
import { useState } from 'react';

export default function FuncStatePrac() {
  const [num, setNum] = useState(0);

  return (
    <>
      <div>{num}</div>
      <button
        onClick={() => {
          let copy = num;
          copy = copy + 2;
          setNum(copy);
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          let copy = num;
          copy--;
          setNum(copy);
        }}
      >
        -1
      </button>
    </>
  );
}
