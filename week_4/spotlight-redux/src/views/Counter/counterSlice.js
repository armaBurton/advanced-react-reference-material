import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      //Redux is using Immer library under the hood to ensure immutable data
      //This is describing the mutation to the state
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addValue: (state, { payload }) => {
      state.count += payload;
    }
  },
});

export const { increment, decrement, addValue } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;


//Export the reducer function from the slice
export default counterSlice.reducer;
