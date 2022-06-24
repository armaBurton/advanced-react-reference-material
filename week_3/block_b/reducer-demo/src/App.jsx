import Header from './components/Layout/Header';
import { TodoProvider } from './context/TodoProvider';
import TodosList from './views/Todos/List';

export default function App() {
  return (
    <>
      <TodoProvider>
        <Header />
        <TodosList />
      </TodoProvider>
    </>
  );
}

// With TodoProvider in App.jsx, our tests will render this way:
// render(<App />)

// Whereas with TodoProvider in index.jsx, our tests will render like so:
// render(<TodoProvider><App /></TodoProvider>)
