import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { add, load, remove, selectTodos } from './todosSlice';
import { getTodos, createTodo, deleteTodo } from '../../services/todos';

export function useTodos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  return {
    todos,
    add: async (todo) => {
      try {
        const created = await createTodo(todo);
        dispatch(add(created));
        toast.success(`Create todo ${todo.task}`);
      }
      catch (err) {
        toast.error(err.message);
        throw err;
      }
    },
    remove: async (id) => {
      try {
        await deleteTodo(id);
        dispatch(remove(id));
      }
      catch (err) {
        toast.error(err.message);
        throw err;
      }
    },
  };
}

export function useLoadTodos() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        const todos = await getTodos();
        dispatch(load(todos));
      }
      catch (err) {
        toast.error(`Unable to load todos: ${err.message}`);
        throw err;
      }
    };

    fetch();
  }, []);

}
