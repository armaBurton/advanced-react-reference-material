import { Link } from 'react-router-dom';
import { useSuggestions } from '../../hooks/suggestions';
import SuggestionList from '../../components/Suggestions/SuggestionList';
import styles from './ViewSuggestions.css';

export default function ViewSuggestions() {
  const { suggestions } = useSuggestions();
  
  return (
    <div className={styles.viewSuggestions}>
      <h1>Suggestions List Page!</h1>

      <Link to="/suggestions/add">
        <button>Add a New Suggestion</button>
      </Link>
      
      <SuggestionList suggestions={suggestions}/>
    </div>  
  );
}
