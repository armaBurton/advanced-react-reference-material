import styles from './SuggestionDetail.css';

export default function SuggestionDetail({ suggestion, isOwner }) {
  const { /*id,*/ title, description, name, created } = suggestion;
  const date = new Date(created).toLocaleDateString();

  return (
    <article className={styles.suggestionDetail}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.byline}>
        Created by {isOwner ? 'you' : name} on {date} 
      </p>
      <p>{description}</p>
    </article>
  );
}
