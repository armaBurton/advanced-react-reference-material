import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';
import styles from './SuggestionItem.css';


export default function SuggestionItem({ suggestion }) {
  const { user } = useAuth();
  const isOwner = user.id === suggestion.user_id;
  const { id, title, created_at } = suggestion;
  const date = new Date(created_at);

  return (
    <li className={styles.suggestionItem}>
      <span>{date.toLocaleDateString()}</span>
      
      <Link to={`/suggestions/${id}`}>
        {title}
      </Link>

      <span>
        {isOwner && 
          <Link to={`/suggestions/${id}/edit`}>
            edit
          </Link>
        }
      </span>
    </li>
  );
}
