import SuggestionItem from './SuggestionItem';
import styles from './SuggestionList.css';

export default function SuggestionList({ suggestions }) {
  
  if(!suggestions) return null;

  return (
    <ul className={styles.suggestionList}>
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
