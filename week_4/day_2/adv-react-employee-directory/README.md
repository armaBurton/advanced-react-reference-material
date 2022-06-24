# Notes

## Resolved Issues

- `.eslintrc` needed different parser
- Found source maps

## Suggestions Feature

- Added supabase table

- Context/Provider
    - SuggestionsProvider
- hooks
    - useSuggestions - suggestions, add
    - useSuggestion(id) - suggestion(, edit, remove)
- components
    - SuggestionList, SuggestionItem
    - SuggestionForm
    - SuggestionDetail
- views
    - /suggestions - displays list of suggestions
    - /suggestions/:id - displays suggestion detail
    - /suggestions/add - add a new suggestion
    - /suggestions/:id/edit - displays suggestion detail
