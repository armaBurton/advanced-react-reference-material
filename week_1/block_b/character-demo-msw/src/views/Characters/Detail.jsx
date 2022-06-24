import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';
import { fetchCharacter } from '../../services/officeApi';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const characterData = await fetchCharacter(id);
      setCharacter(characterData);
      setLoading(false);
    };
    getCharacter();
  }, [id]);

  return (
    <>
      <p>
        <Link to="/characters">Back to list</Link>
      </p>
      {loading ? (
        <p>Loading character</p>
      ) : (
        <h1>
          <CharacterCard name={`Character: ${character.name}`} />
        </h1>
      )}
    </>
  );
}
