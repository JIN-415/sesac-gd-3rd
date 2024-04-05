import React from 'react';
import CatBook from './catBook.jpeg';

export default function FuncBookProps({ title, author, price, type }) {
  return (
    <>
      <div className='book'>
        <div className='top'>
          <h1>이번주 베스터셀러</h1>
          <img src={CatBook} alt='catbook' />
          <h2>{title}</h2>
        </div>
        <div className='content'>
          <p>저자 : {author}</p>
          <p>가격 : {price}원</p>
          <p>구분 : {type}</p>
        </div>
      </div>
    </>
  );
}
