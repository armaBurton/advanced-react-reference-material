import { useContext, useState, useEffect } from 'react';
import { SuggestionsContext } from '../context/SuggestionsContext';
import { useUser } from './user';
import {
  getSuggestions,
  getSuggestion,
  createSuggestion,
  updateSuggestion,
  removeSuggestion,
} from '../services/suggestions';
import toast from 'react-hot-toast';

export function useSuggestions() {
  const context = useContext(SuggestionsContext);

  if (context === undefined) {
    throw new Error('useSuggestions must be used within a SuggestionsContext');
  }

  const { suggestions, dispatch } = context;

  useEffect(() => {
    if (suggestions) return;

    const load = async () => {
      try {
        const payload = await getSuggestions();
        dispatch({ type: 'reset', payload });
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
      const payload = await createSuggestion(suggestion);
      dispatch({ type: 'create', payload });
      toast.success(`Your suggestion "${payload.title}" has been added`);
      return payload;
    }
    catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  return { suggestions, add };
}


export function useSuggestionCount() {
  const context = useContext(SuggestionsContext);

  if (context === undefined) {
    throw new Error(
      'useSuggestionCount must be used within a SuggestionsContext'
    );
  }

  return context.suggestions?.length;
}


export function useSuggestion(id) {
  const context = useContext(SuggestionsContext);
  const { profile } = useUser();

  if (context === undefined) {
    throw new Error('useSuggestion must be used within a SuggestionsContext');
  }

  const { suggestions, dispatch } = context;

  const [suggestion, setSuggestion] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const suggestion = await getSuggestion(id);
        setSuggestion(suggestion);
      }
      catch (err) {
        toast.error(err.message);
        throw err;
      }
    };

    load();
  }, [id]);

  const remove = async () => {
    if (!suggestion) return;

    try {
      const payload = await removeSuggestion(suggestion.id);
      setSuggestion(null);
      // It's possible to take this action and have never loaded suggestions
      if (suggestions) dispatch({ type: 'delete', payload });
      toast.success(`Your suggestion "${suggestion.title}" has been deleted`);
      return payload;
    }
    catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  const update = async (edits) => {
    if (!suggestion) return;

    try {
      const updated = await updateSuggestion({
        ...suggestion,
        ...edits
      });
      const payload = {
        ...updated,
        name: profile.name
      };

      setSuggestion(payload);
      // It's possible to take this action and have never loaded suggestions
      if (suggestions) dispatch({ type: 'update', payload });
      toast.success(`Updated suggestion "${suggestion.title}"`);
      return payload;
    }
    catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  return { suggestion, remove, update };
}
