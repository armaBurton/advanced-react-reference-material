import { useState } from 'react';
import Todo from '../../components/Todos/Todo';
import { useTodos } from '../../context/TodoProvider';

export default function TodosList() {
  const [newTodo, setNewTodo] = useState('');
  const { todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo } =
    useTodos();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="Add something to do"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
