/* 초기값 */
const initialState = 0;

/* action */
export const deposit = (payload) => ({ type: 'account/deposit', payload });
export const withdraw = (payload) => ({ type: 'account/withdraw', payload });

/* reducer */
export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return state + action.payload;
    case 'account/withdraw':
      return state - action.payload;
    default:
      return state;
  }
};
