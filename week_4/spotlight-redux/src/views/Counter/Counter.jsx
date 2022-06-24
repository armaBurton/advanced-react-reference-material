import { useState } from 'react';
import { useCounter } from './counterHooks';
import styles from './Counter.css';

export default function Counter() {
  const [number, setNumber] = useState(10);
  const { count, decrement, increment, addValue } = useCounter();

  return (
    <div className={styles.counter}>
      <h2>Counter Example</h2>

      <p>
        <button
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>

        <span>{count}</span>

        <button
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
      </p>

      <p>
        <input type="number" 
          value={number} 
          onInput={({ target }) => setNumber(+target.value)}
        />
        <button
          aria-label="Add value"
          onClick={() => addValue(number)}
        >
          Add {number}
        </button>
      </p>
    </div>
  );
}
