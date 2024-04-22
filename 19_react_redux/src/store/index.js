/* 여러 개의 reducer를 하나로 묶어줌 = combineReducers */
import { combineReducers } from '@reduxjs/toolkit';
// import { countReducer } from './modules/countReducer';
import { isLoggedinReducer } from './modules/isLoggedinReducer';
import { accountReducer } from './modules/accountReducer';

import countReducer from './modules/countSlice';

const rootReducer = combineReducers({ count: countReducer, isLoggedIn: isLoggedinReducer, account: accountReducer });

export default rootReducer;
