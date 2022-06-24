import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  };

  return { formState, handleChange };
}
