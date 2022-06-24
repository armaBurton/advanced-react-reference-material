import { formatName } from '../utils/helpers';

export async function fetchCharacter(id) {
  const res = await fetch(`https://www.officeapi.dev/api/characters/${id}`);
  const { data } = await res.json();
  const { _id, firstname, lastname } = data;

  return {
    id: _id,
    name: formatName(firstname, lastname),
  };
}

export async function fetchCharacters() {
  const res = await fetch('https://www.officeapi.dev/api/characters/');
  const { data } = await res.json();

  return data.map(({ _id, firstname, lastname }) => ({
    id: _id,
    name: formatName(firstname, lastname),
  }));
}
