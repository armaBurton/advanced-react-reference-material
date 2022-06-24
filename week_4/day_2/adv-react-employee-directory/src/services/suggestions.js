import { client, parseData } from './client';

export async function getSuggestions() {
  const request = await client
    .from('suggestions')
    .select(`
      id,
      title,
      created_at,
      user_id
    `);
  return parseData(request);
}

export async function createSuggestion(suggestion) {
  const request = await client
    .from('suggestions')
    .insert(suggestion)
    .single();

  return parseData(request);
}
