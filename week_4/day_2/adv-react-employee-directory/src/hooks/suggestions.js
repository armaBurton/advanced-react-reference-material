import { useContext, useEffect } from 'react';
import { SuggestionsContext } from '../context/SuggestionsContext';
import {
  getSuggestions,
  createSuggestion
} from '../services/suggestions';
import toast from 'react-hot-toast';

export function useSuggestions() {
  const context = useContext(SuggestionsContext);

  if (context === undefined) {
    throw new Error('useSuggestions must be used within a SuggestionsContext');
  }

  const { suggestions, dispatch } = context;

  useEffect(() => {
    const load = async () => {
      try {
        const suggestions = await getSuggestions();
        dispatch({ type: 'reset', payload: suggestions });
      }
      catch (err) {
        toast.error(err.message);
        throw err;
      }
    };

    load();
  }, []);

  const add = async (suggestion) => {
    try {
      const added = await createSuggestion(suggestion);
      dispatch({ type: 'create', payload: added });
      toast.success(`Your suggestion "${added.title}" has been added`);
    }
    catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  return { suggestions, add };
}
