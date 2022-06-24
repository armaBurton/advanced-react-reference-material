import styles from './Profile.css';

export default function Profile({ profile: { name, email, bio, birthday } }) {
  return (
    <article className={styles.profile}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>{email}</p>
      <p className={styles.birthday}>Birthday: {birthday}</p>
      <blockquote className={styles.bio}>{bio}</blockquote>
    </article>
  );
}
