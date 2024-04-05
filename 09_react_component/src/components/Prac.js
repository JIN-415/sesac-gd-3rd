/* Prac.js */
import React from 'react';

const Prac = () => {
  const helloStr = 'Hello, this is first practice';
  return (
    <div
      style={{ marginTop: '20px', backgroundColor: 'pink' }}
      onClick={() => {
        alert('클릭!');
      }}
    >
      {helloStr}
    </div>
  );
};

export default Prac;
