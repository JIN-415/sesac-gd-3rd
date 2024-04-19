import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function Board() {
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <h1>Board</h1>
      <div
        onClick={() => {
          /* navigatioin에 인자로 슬래시 없이 어떤 값을 보내면
          현재 주소 뒤에 '/작성한값'으로 이동 */
          navigation('1');
        }}
      >
        1번 게시글 보러 가기
      </div>
    </>
  );
}
