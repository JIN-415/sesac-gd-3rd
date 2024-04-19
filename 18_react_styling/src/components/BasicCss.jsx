// import '../styles/BasicCss.css';

export default function BasicCss() {
  const divStyle = {
    backgroundColor: 'indigo',
    color: 'pink',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  return (
    <div>
      <h1>일반 CSS 사용</h1>

      <div style={{ backgroundColor: 'pink', color: 'indigo', fontSize: '25px', textAlign: 'right' }}>
        인라인 스타일 적용 (style에 직접 작성)
      </div>
      <div style={divStyle}>인라인 스타일 적용 (style에 객체 변수 전달)</div>

      <br />
      <h2>css파일 사용해서 스타일링</h2>
      <div className='box'>.box</div>

      <div className='container'>
        <div className='item item1'>.item.item1</div>
        <div className='item'>.item</div>
      </div>
    </div>
  );
}
