import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const characterData = await res.json();
      setCharacter(characterData);
      setLoading(false);
    };
    fetchCharacter();
  }, []);

  return (
    <>
      <h1>Character Detail</h1>
      <Link to="/">Back to list</Link>
      {loading ? (
        <p>Loading character...</p>
      ) : (
        <article>
          <h2>{character.name}</h2>
          <p>{character.species}</p>
          <p>Status: {character.status}</p>
          <img alt={`Image of ${character.name}`} src={character.image} />
        </article>
      )}
    </>
  );
}
