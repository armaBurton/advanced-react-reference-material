import { client, parseData } from './client';

export async function getProfile(userId) {
  const request = await client
    .from('profiles')
    .select()
    .match({ user_id: userId })
    .single();
  return parseData(request);
}

export async function updateProfile({ name, email, bio, birthday }) {
  const request = await client
    .from('profiles')
    .update({ name, bio, birthday })
    .match({ email })
    .single();
  return parseData(request);
}

export async function createProfile({ name, email, bio, birthday }) {
  const request = await client
    .from('profiles')
    .insert({ name, email, bio, birthday })
    .single();
  return parseData(request);
}

export async function deleteProfileByEmail(email) {
  const request = await client.from('profiles').delete().match({ email });
  return parseData(request);
}
