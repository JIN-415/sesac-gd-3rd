import style from '../styles/moduleCss.module.css';
import classNames from 'classname';

export default function ModuleCss() {
  console.log(style);
  return (
    <>
      <h2>module css 사용</h2>
      <div className='box'>일반 CSS의 단점 (다른 컴포넌트에서 import한 css도 반영됨)</div>

      {/* hash값이 붙어서 고유한 클래스 이름이 만들어져서 클래스명이 동일해도 적용되지 않음 */}
      <div className={style.container}>moduleCSs.module.css 사용</div>

      <div>여러 클래스 지정하는 방법</div>
      <div className={`${style.first} ${style.second}`}>방법1. 템플릿 리터럴 사용</div>
      <div className={[style.first, style.second].join(' ')}>
        방법2. join 메서드 사용 (배열을 하나의 문자열로 합쳐주는 메서드)
      </div>
      <div className={classNames(style.first, style.second)}>방법3. classname 모듈 사용</div>
    </>
  );
}
