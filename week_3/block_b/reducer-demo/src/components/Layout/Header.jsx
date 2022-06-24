import { useTodos } from '../../context/TodoProvider';

export default function Header() {
  const { todos } = useTodos();

  return <div>Number of Todo Items left: {todos.length}</div>;
}
