import useToggle from '../hooks/useToggle.js';
import useTitle from '../hooks/useTitle.js';

export default function CustomHook() {
  const [isShow, setIsShow] = useToggle();
  const [isQnaOpen, setIsQnaOpen] = useToggle();

  /* useTitle 커스텀 훅 사용 */
  useTitle('커스텀 훅 사용');

  return (
    <>
      <h1>커스텀 훅 사용</h1>
      <button onClick={setIsShow}>useToggle hook 사용하기</button>
      {isShow && <div>안녕!</div>}

      <div onClick={setIsQnaOpen}>Q. 리액트에서 custom hook을 만들 수 있나요?</div>
      {isQnaOpen && <div>A. 네 가능합니다!</div>}
    </>
  );
}
