import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './ProfileForm.css';

export default function ProfileForm({
  formLabel = 'Profile Form',
  name = '',
  email,
  birthday = '',
  bio = '',
  className = '',
  onSubmit,
}) {

  const { formState, handleChange } = useForm({ name, email, birthday, bio });
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
    <form className={className} onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <legend>{formLabel}</legend>
        <section className={styles.formSection}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
        </section>
        <section className={styles.formSection}>
          <label htmlFor="email">Email</label>
          <p>{email}</p>
        </section>
        <section className={styles.formSection}>
          <label htmlFor="name">Birthday</label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            value={formState.birthday}
            onChange={handleChange}
          />
        </section>
        <section className={styles.formSection}>
          <label htmlFor="bio">Tell us a little about yourself</label>
          <textarea
            id="bio"
            name="bio"
            value={formState.bio}
            rows={4}
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
