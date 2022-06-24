import { createContext, useContext, useReducer } from 'react';

const initialTodos = [{ id: Date.now(), text: 'Get stuff done', done: false }];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Return our updated state with the newly added todo at the
      // beginning of our list
      return [
        { id: Date.now(), text: action.payload.text, done: false },
        ...state,
      ];
    case 'UPDATE_TODO':
      // Find the provided todo
      // Update its contents
      // Return a new array with the updated todo
      return state.map((todo) => {
        if (todo.id === action.payload.todo.id) {
          const { done, text } = action.payload.todo;

          return {
            ...todo,
            done,
            text,
          };
        }

        return todo;
      });
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleAddTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: { text } });
    // todoReducer([{ id: 123, text: '', done: false }], { type: 'ADD_TODO', payload: { text } })
  };

  const handleUpdateTodo = (todo) => {
    dispatch({ type: 'UPDATE_TODO', payload: { todo } });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  return (
    <TodoContext.Provider
      value={{ todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  // context = { todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo }

  if (context === undefined)
    throw new Error('useTodos must be called from within a TodoProvider');

  return context;
};
