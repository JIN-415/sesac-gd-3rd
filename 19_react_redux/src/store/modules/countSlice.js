import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    increase: (state, action) => {
      state.count += action.payload;
    },
    decrease: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, increase, decrease, reset } = countSlice.actions;
export default countSlice.reducer;
