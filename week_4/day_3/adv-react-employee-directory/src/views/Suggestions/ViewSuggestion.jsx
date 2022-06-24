import { Link, useParams, useHistory } from 'react-router-dom';
import { useSuggestion } from '../../hooks/suggestions';
import { useAuth } from '../../hooks/user';
import SuggestionDetail from '../../components/Suggestions/SuggestionDetail';
import styles from './ViewSuggestion.css';

export default function ViewSuggestion() {
  const history = useHistory();
  const { id } = useParams();
  const { suggestion, remove } = useSuggestion(id);
  const { user } = useAuth();

  if(!suggestion) return null;
  
  const isOwner = user.id === suggestion.userId;

  const handleDelete = async () => {
    if(!confirm('Are you sure?')) return;
    await remove();
    history.replace('/suggestions');
  };

  return (
    <div className={styles.viewSuggestion}>
      <Link to="/suggestions">
        ← View suggestions
      </Link>
      
      <SuggestionDetail
        suggestion={suggestion}
        isOwner={isOwner}
      />

      <div className={styles.actions}>
        {isOwner && <Link to={`/suggestions/${id}/edit`}>
          <p>
            <button>Edit Suggestion</button>
          </p>
        </Link>}

        {isOwner && 
          <p>
            <button onClick={handleDelete}>
              Delete Suggestion
            </button>
          </p>
        }
        
        { isOwner || <Link to={`/suggestions/${id}/copy`}>
          <p>
            <button>Copy Suggestion</button>
          </p>
        </Link>}
        
      </div>
    </div>  
  );
}
