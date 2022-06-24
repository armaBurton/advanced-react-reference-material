import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetail({ characters = [] }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const selectedCharacter = characters.find(
      (character) => character.id === Number(id)
    );
    setCharacter(selectedCharacter);
  }, [id]);

  return (
    <section>
      <h3>{character.name}</h3>
      <img src={character.image} alt={`Image of ${character.name}`} />
    </section>
  );
}
