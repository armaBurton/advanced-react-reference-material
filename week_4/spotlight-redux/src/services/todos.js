import { client, parseData } from './client';

export async function getTodos() {
  const request = await client
    .from('todos')
    .select();

  return parseData(request);
}

export async function createTodo(todo) {
  const request = await client
    .from('todos')
    .insert(todo)
    .single();

  return parseData(request);
}

export async function deleteTodo(id) {
  const request = await client
    .from('todos')
    .delete()
    .match({ id })
    .single();

  return parseData(request);
}
