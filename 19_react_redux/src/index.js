import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 1. redux를 가장 쉽게 사용, 하나의 상태만 관리, 코드 분리 X */
// const store = configureStore({ reducer });
// /* 객체의 key와 value가 동일하다면 한 번만 작성 시 알아서 같은 이름의 value를 전달 */
// // const store = configureStore({ reducer: reducer });

// function reducer(state = 0, action) {
//   switch (action.type) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return 0;
//     default:
//       return state;
//   }
// }

/* 2. redux를 사용해 여러 개의 상태 관리, 코드 분리 O 
reducer 따로 만들기, ㄴtore 관리하는 폴더 따로 만들기
src/store/index.js : 스토어의 전체 상태 관리 및 하나로 통합
src/sotre/modules/countReducer.js & src/store/module/isLoggedinReducer.js : 각각의 state를 관리하는 reducer */
const store = configureStore({ reducer: rootReducer });

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
