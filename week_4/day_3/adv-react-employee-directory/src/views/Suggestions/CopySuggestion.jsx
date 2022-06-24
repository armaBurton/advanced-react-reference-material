import { Link, useParams, useHistory } from 'react-router-dom';
import { useSuggestion, useSuggestions } from '../../hooks/suggestions';
import SuggestionForm from '../../components/Suggestions/SuggestionForm';

export default function EditSuggestion() {
  const history = useHistory();
  const { id } = useParams();
  const { suggestion } = useSuggestion(id);
  const { add } = useSuggestions();

  if(!suggestion) return null;
  
  const handleSubmit = async (edited) => {
    await add(edited);
    history.replace('/suggestions');
  };

  return (
    <div>
      <Link to="/suggestions">
        ← View suggestions
      </Link>
      
      <SuggestionForm
        label="New Suggestion"
        suggestion={suggestion}
        onSubmit={handleSubmit}
      />
    </div>  
  );
}
