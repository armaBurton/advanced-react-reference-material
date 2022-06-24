import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import styles from './UserForm.css';

export default function UserForm({ className = '', label, onSubmit }) {
  const { formState, handleChange } = useForm({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formState;

    try {
      setError('');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <legend>{label}</legend>
        <section className={styles.formSection}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
          />
        </section>
        <section className={styles.formSection}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength="8"
            value={formState.password}
            onChange={handleChange}
          />
        </section>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : label}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </fieldset>
    </form>
  );
}
