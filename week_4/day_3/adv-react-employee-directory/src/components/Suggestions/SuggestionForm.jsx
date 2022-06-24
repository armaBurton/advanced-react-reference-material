import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './SuggestionForm.css';

export default function SuggestionForm({
  suggestion = {},
  label = 'Suggestion',
  onSubmit,
}) {
  
  const { title = '',  description = '' } = suggestion;
  const { formState, handleChange } = useForm({ title, description });
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
        <legend>{label}</legend>
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
            id="description"
            name="description"
            type="text"
            value={formState.description}
            onChange={handleChange}
            rows={10}
          />
        </section>
       
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </fieldset>
    </form>
  );
}
