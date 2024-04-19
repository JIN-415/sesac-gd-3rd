import React from 'react';
import { Link } from 'react-router-dom';

export default function Test() {
  return (
    <div>
      <h2>Test Page</h2>
      <p>
        <a href='/test'>a 태그를 이용한 페이지 전환</a>
      </p>
      <p>
        <Link to='/'>link 컴포넌트 사용</Link>
      </p>
    </div>
  );
}
