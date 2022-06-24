import SuggestionItem from './SuggestionItem';
import styles from './SuggestionList.css';

export default function SuggestionList({ suggestions }) {
  
  if(!suggestions) return null;

  return (
    <ul className={styles.suggestionList}>
      <li className={styles.header}>
        <span>Date</span>
        <span>Title</span>
        <span>Owner</span>
        <span></span>
      </li>

      {suggestions.map(suggestion => {
        return (
          <SuggestionItem 
            key={suggestion.id} 
            suggestion={suggestion}
          />
        );
      })}
    </ul>
  );
}
