import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BoradDetail() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate('/board');
        }}
      >
        게시판으로
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로
      </button>
      <h1>BoradDetail</h1>
    </>
  );
}
