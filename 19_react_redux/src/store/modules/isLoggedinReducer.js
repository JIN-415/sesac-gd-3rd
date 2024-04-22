/* boolean으로 관리되는 isLoggedin state */

const initialState = false;

export const isLoggedinChange = () => ({ type: 'isLoggendin/change' });

export const isLoggedinReducer = (state = initialState, action) => {
  if (action.type === 'isLoggendin/change') {
    return !state;
  }
  return state;
};
