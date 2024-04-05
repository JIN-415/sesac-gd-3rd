import ClassProps from './components/ClassProps';
import FuncProps from './components/FuncProps';

function App() {
  // const sayHi = () => {
  //   alert('안녕?');
  // };

  return (
    <div className='App'>
      {/* <FuncProps weather='sunny' feeling='happy' /> */}

      {/* defaultProps 사용 */}
      {/* <FuncProps feeling={true} /> */}

      {/* PropTypes 사용 */}
      {/* props로 전달하는 값이 문자열인 경우에는 ''(따옴표)로 감싸 전달 */}
      {/* 이외의 데이터 타입은 {}(중괄호)로 감싸 전달 */}
      {/* <FuncProps weather='sunny' feeling='exciting' /> */}

      {/* props.children */}
      {/* 문자열 전달 */}
      {/* <FuncProps>안녕?</FuncProps> */}

      {/* 함수 전달 */}
      {/* <FuncProps>{sayHi}</FuncProps> */}

      {/* 요소 전달 */}
      {/* <FuncProps>
        <div>안녕안녕</div>
        <div>자니?</div>
      </FuncProps> */}

      {/* ------------------------------- */}
      {/* class 컴포넌트에서의 props 사용 */}
      <ClassProps drink='아메리카노' payment='카드' price={4000} />

      {/* default props 사용 */}
      <ClassProps drink='아인슈페너' payment='현금' />

      {/* PropTypes 사용 */}
      <ClassProps drink={15900} payment='현금' />

      {/* isRequired 사용 */}
      <ClassProps drink='레몬에이드' />
    </div>
  );
}

export default App;
