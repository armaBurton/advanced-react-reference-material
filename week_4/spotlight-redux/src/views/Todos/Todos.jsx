import { useState } from 'react';
import { useTodos } from './todosHooks';
import styles from './Todos.css';

export default function Todos() {
  const [task, setTask] = useState('');
  const { todos, add, remove } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ task });
    setTask('');
  };

  return (
    <div className={styles.todos}>
      <h2>Todos Example</h2>

      <form onSubmit={handleSubmit}>
        <input 
          value={task} 
          onInput={({ target }) => setTask(target.value)}
        />
        <button aria-label="Add task">
          Add Task
        </button>
      </form>

      <ul>
        {todos.map(({ id, task }) => {
          return (
            <li key={id}>
              {task}
              <button onClick={() => remove(id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
