import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function CharacterList() {
  const history = useHistory();
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('status') ?? 'all';
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleStatusChange = (event) => {
    history.push(`/?status=${event.target.value}`);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);

      const statusParam = new URLSearchParams(location.search).get('status');

      const url =
        statusParam === 'all' || !statusParam
          ? 'https://rickandmortyapi.com/api/character'
          : `https://rickandmortyapi.com/api/character?status=${statusParam}`;
      const res = await fetch(url);
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    };
    fetchCharacters();
  }, [location.search]);

  return (
    <>
      <h1>Character List</h1>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <section>
          <label htmlFor="status">Character status:</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="all">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          {characters.map((character) => (
            <article key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
              <p>{character.species}</p>
              <p>Status: {character.status}</p>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
