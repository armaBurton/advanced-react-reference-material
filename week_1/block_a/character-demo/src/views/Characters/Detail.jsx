import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const res = await fetch(`https://www.officeapi.dev/api/characters/${id}`);
      const { data } = await res.json();
      const characterData = {
        id: data._id,
        name: `${data.firstname} ${data.lastname}`,
      };

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
