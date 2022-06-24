import { useEffect, useState } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import CharacterDetail from './Detail';

export default function CharacterList() {
  const { url, path } = useRouteMatch();
  // path = '/characters/:id/episodes/:episodeId'
  // url = '/characters/1/episodes/3'
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    }

    getCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <>
          <aside>
            <h2>Character List</h2>
            <ul>
              {characters.map((character) => (
                <li key={character.id}>
                  <Link to={`${url}/${character.id}`}>
                    {character.name} &raquo;
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <Route path={`${path}/:id`}>
            <CharacterDetail characters={characters} />
          </Route>
        </>
      )}
    </>
  );
}
