import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';
import styles from './SuggestionItem.css';


export default function SuggestionItem({ suggestion }) {
  const { user } = useAuth();
  const { id, title, name, userId, created } = suggestion;
  const isOwner = user.id === userId;
  const date = new Date(created);
  const action = isOwner ? 'edit' : 'copy';

  return (
    <li className={styles.suggestionItem}>
      <span>{date.toLocaleDateString()}</span>
      
      <Link to={`/suggestions/${id}`}>
        {title}
      </Link>

      <span>{isOwner ? 'you' : name}</span>

      <span>
        <Link to={`/suggestions/${id}/${action}`}>
          {action}
        </Link>
      </span>
    </li>
  );
}
