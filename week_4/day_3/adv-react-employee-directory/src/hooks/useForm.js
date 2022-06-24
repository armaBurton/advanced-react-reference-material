import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState({ ...inputs });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    // same as:
    // const name = event.target.name;
    // const value = event.target.value;
    // etc..

    // This gives us the following (e.g. when we change the email input):
    // name = "email"
    // value = "dan@alchemycodelab.com"
    // type = "email"
    // checked = undefined

    setFormState((prevState) => {
      // We start by taking the current state (as `prevState`):
      // prevState = { email: '', password: '' }

      // ...and then set the property for the input being changed (lines 40-43)
      // new state = { email: '', password: '', email: 'dan@alchemycodelab.com'}

      // Because we have two 'email' properties, JavaScript will use the value
      // of the one declared last (ie. 'dan@alchemycodelab.com')

      // When we use square brackets to set object properties,
      // JavaScript will evaluate what's inside those square brackets to
      // determine which property to set.

      // This means that when we set a property using a variable in
      // square brackets, that variable's value is what will be used
      // as the property name:
      // { [name]: 'dan@alchemycodelab.com' }
      //    which gets turned into: { ['email']: 'dan@...' }
      //    which is the equivalent of: { email: 'dan@....' }

      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  };

  return { formState, handleChange };
}
