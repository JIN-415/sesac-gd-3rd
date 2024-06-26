import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/board'>Board</Link>

        <Link to='/profile'>MyPage</Link>
        <Link to='/products'>Products</Link>
      </nav>
    </header>
  );
}
