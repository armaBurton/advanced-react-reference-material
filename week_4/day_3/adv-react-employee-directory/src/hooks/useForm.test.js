import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './useForm';

test('should return empty object as default', () => {
  const { result } = renderHook(() => useForm());

  expect(result.current.formState).toEqual({});
});

test('should return initial values copied to new object', () => {
  const data = { name: 'name', title: 'title' };
  const { result } = renderHook(() => useForm(data));
  expect(result.current.formState).toEqual(data);
  expect(result.current.formState).not.toBe(data);
});

test('should update via handleChange', () => {
  const { result } = renderHook(() => useForm({ title: 'title' }));
  const event = {
    target: {
      name: 'title',
      value: 'new title'
    }
  };

  act(() => {
    result.current.handleChange(event);
  });

  expect(result.current.formState).toEqual({ title: 'new title' });
});

test('should update checkbox to boolean', () => {
  const { result } = renderHook(() => useForm({ done: false }));
  const event = {
    target: {
      type: 'checkbox',
      name: 'done',
      value: 'on',
      checked: true
    }
  };

  act(() => {
    result.current.handleChange(event);
  });

  expect(result.current.formState).toEqual({ done: true });
});
