import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Box() {
  /* context apif르 사용해서 전역적으로 접근할 수 있는 context에 접근하겠다 
  인자로 전달되는 ThemeContext : 작성되어 있는 context 중 ThemeContext에 접근하겠다 */
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <>
      <h2>ThemeContext 사용</h2>
      <div style={isDark ? { backgroundColor: '#000', color: '#fff' } : {}}>
        Theme : {isDark ? 'dark mode' : 'light mode'}
      </div>

      <button onClick={() => setIsDark(!isDark)}>change theme</button>
    </>
  );
}
