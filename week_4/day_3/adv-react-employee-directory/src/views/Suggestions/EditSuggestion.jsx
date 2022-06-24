import { Link, useParams, useHistory } from 'react-router-dom';
import { useSuggestion } from '../../hooks/suggestions';
import { useAuth } from '../../hooks/user';
import SuggestionForm from '../../components/Suggestions/SuggestionForm';
import styles from './EditSuggestion.css';

export default function EditSuggestion() {
  const history = useHistory();
  const { id } = useParams();
  const { suggestion, update } = useSuggestion(id);
  const { user } = useAuth();

  if(!suggestion) return null;
  
  const isOwner = user.id === suggestion.userId;
  const detailUrl = `/suggestions/${id}`;
  
  if(!isOwner) {
    history.replace(detailUrl);
    return null;
  }

  const handleSubmit = async (edited) => {
    await update(edited);
    history.push('/suggestions');
  };

  return (
    <div className={styles.editSuggestion}>
      <div className={styles.breadcrumb}>
        <Link to="/suggestions">
          Suggestions
        </Link>
        {' / '}
        <Link to={detailUrl}>
          {suggestion.title}
        </Link>
      </div>
      
      <SuggestionForm
        label="Edit Suggestion"
        suggestion={suggestion}
        onSubmit={handleSubmit}
      />
    </div>  
  );
}
