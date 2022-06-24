import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, addValue, selectCount } from './counterSlice';

export function useCounter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return {
    count,
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    addValue: (value) => dispatch(addValue(value)),
  };
}
