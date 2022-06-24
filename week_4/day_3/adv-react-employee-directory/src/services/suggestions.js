import { client, parseData } from './client';

function mapFrom({ created_at, user_id, profiles, ...rest }) {
  return {
    created: created_at,
    userId: user_id,
    name: profiles?.name,
    ...rest
  };
}

// remove props the db doesn't need or has defaults
// eslint-disable-next-line no-unused-vars
function mapTo({ created, userId, name, ...rest }) {
  return rest;
}

export async function getSuggestions() {
  const request = await client
    .from('suggestions')
    .select(`
      id,
      title,
      created_at,
      user_id,
      profiles (
        name
      )
    `);

  const data = parseData(request);

  return data.map(mapFrom);
}

export async function createSuggestion(suggestion) {
  const request = await client
    .from('suggestions')
    .insert(mapTo(suggestion))
    .single();

  const data = parseData(request);
  return mapFrom(data);
}

export async function updateSuggestion(suggestion) {
  const request = await client
    .from('suggestions')
    .update(mapTo(suggestion))
    .match({ id: suggestion.id })
    .single();

  const data = parseData(request);
  return mapFrom(data);
}

export async function getSuggestion(id) {
  const request = await client
    .from('suggestions')
    .select(`
      *,
      profiles (
        name
      )
    `)
    .match({ id })
    .single();

  const data = parseData(request);
  return mapFrom(data);
}

export async function removeSuggestion(id) {
  const request = await client
    .from('suggestions')
    .delete()
    .match({ id })
    .single();

  const data = parseData(request);
  return mapFrom(data);
}
