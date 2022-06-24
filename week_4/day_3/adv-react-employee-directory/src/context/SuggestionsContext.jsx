import { createContext, useReducer } from 'react';

export const SuggestionsContext = createContext();

//
function reducer(suggestions, { type, payload }) {
  switch (type) {
    case 'create':
      return [payload, ...suggestions];
    case 'reset':
      return payload;
    case 'update':
      return suggestions.map((s) => (s.id === payload.id ? payload : s));
    case 'delete':
      return suggestions.filter((s) => s.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export const SuggestionsProvider = ({ children }) => {
  const [suggestions, dispatch] = useReducer(reducer);

  return (
    <SuggestionsContext.Provider value={{ suggestions, dispatch }}>
      {children}
    </SuggestionsContext.Provider>
  );
};
