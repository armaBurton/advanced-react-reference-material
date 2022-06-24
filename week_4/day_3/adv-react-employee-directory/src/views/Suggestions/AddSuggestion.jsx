import { useHistory } from 'react-router-dom';
import { useSuggestions } from '../../hooks/suggestions';
import SuggestionForm from '../../components/Suggestions/SuggestionForm';

export default function AddSuggestion() {
  const { add } = useSuggestions();
  const history = useHistory();
  
  const handleSubmit = async suggestion => {
    await add(suggestion);
    history.replace('/suggestions');
  };

  return (
    <div>
      <h1>Suggest something new!</h1>
      
      <SuggestionForm
        label="New Suggestion"
        onSubmit={handleSubmit}
      />
    </div>  
  );
}
