import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './SuggestionForm.css';

export default function SuggestionForm({
  title = '',
  suggestion = '',
  onSubmit,
}) {

  const { formState, handleChange } = useForm({ title, suggestion });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSaving(true);
      await onSubmit(formState);
    }
    catch(err) {
      setSaving(false);
    }
  };

  return (
    <form className={styles.suggestionForm} onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <legend>Your Suggestion</legend>
        <section className={styles.formSection}>
          <label htmlFor="name">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formState.title}
            onChange={handleChange}
          />
        </section>

        <section className={styles.formSection}>
          <label htmlFor="name">Suggestion</label>
          <textarea
            id="suggestion"
            name="suggestion"
            type="text"
            value={formState.suggestion}
            onChange={handleChange}
          />
        </section>
       
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </fieldset>
    </form>
  );
}
