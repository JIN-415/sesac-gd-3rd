/* 초기값 */
const initialState = 0;

/* action type 정의 */
/* counterMinus는 함수 -> counterMinus() 형식으로 호출 시 { type : 'decrement' }를 반환 */
export const counterMinus = () => ({
  type: 'count/decrement',
});
// console.log(counterMinus()); // { type: 'decrement' } 콘솔에 찍힘
/* dispatch(counterMinus()) == dispatch({ type: 'decrement' }) */

export const counterPlus = () => ({
  type: 'count/increment',
});

export const counterReset = () => ({
  type: 'count/reset',
});

/* reducer 작성 */
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'count/increment':
      return state + 1;
    case 'count/decrement':
      return state - 1;
    case 'count/reset':
      return 0;
    default:
      return state;
  }
};
