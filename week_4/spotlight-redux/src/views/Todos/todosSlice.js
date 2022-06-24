import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    load: (state, { payload }) => {
      return payload;
    },
    add: (state, { payload }) => {
      state.push(payload);
    },
    remove: (state, { payload }) => {
      const index = state.findIndex(t => t.id === payload);
      state.splice(index, 1);
    }
  },
});

export const { load, add, remove } = todosSlice.actions;

export const selectTodos = state => state.todos;

//Export the reducer function from the slice
export default todosSlice.reducer;
