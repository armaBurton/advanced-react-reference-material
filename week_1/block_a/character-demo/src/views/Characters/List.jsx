import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]); // Stores all characters
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]); // Stores a filtered subset of characters

  const isSearching = !!search.length;
  const noResults = isSearching && !results.length;
  const characterList = isSearching ? results : characters;

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredCharacters = characters.filter((character) =>
      character.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim())
    );
    setResults(filteredCharacters);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch('https://www.officeapi.dev/api/characters/');
      const { data } = await res.json();
      const characterData = data.map((character) => ({
        id: character._id,
        name: `${character.firstname} ${character.lastname}`,
      }));

      setCharacters(characterData);
      setLoading(false);
    };
    getCharacters();
  }, []);

  return (
    <>
      <h3>Characters of The Office</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            placeholder="Find a character"
            value={search}
            onChange={handleSearch}
          />
          <ul>
            {characterList.map((character) => {
              return (
                <li key={character.id}>
                  <Link to={`/characters/${character.id}`}>
                    <CharacterCard name={character.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {noResults && <p>No results</p>}
    </>
  );
}
