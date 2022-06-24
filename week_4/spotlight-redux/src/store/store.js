import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../views/Counter/counterSlice';
import todosReducer from '../views/Todos/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  },
});
