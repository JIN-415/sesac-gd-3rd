import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [queryParams, setQueryParams] = useSearchParams();
  const [isDark, setIsDark] = useState(false);

  console.log(queryParams.get('mode'));

  const toggleMode = () => {
    setQueryParams(isDark ? {} : { mode: 'dark' });
    setIsDark(!isDark);
  };

  return (
    <>
      <h1>Home Page</h1>
      <p style={isDark ? { backgroundColor: '#000', color: '#fff' } : {}}>
        현재 모드 : {isDark ? 'dark mode' : 'light mode'}
      </p>
      <button onClick={() => toggleMode()}>모드 전환</button>
    </>
  );
}
