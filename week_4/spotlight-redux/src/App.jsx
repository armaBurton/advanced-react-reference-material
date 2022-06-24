import Counter from './views/Counter/Counter';
import Todos from './views/Todos/Todos';
import { useLoadTodos } from './views/Todos/todosHooks';
import { Toaster } from 'react-hot-toast';

export default function App() {
  useLoadTodos();
  
  return (
    <>
      <Toaster />
      <Todos />
      <Counter />
    </>
  ); 
}
