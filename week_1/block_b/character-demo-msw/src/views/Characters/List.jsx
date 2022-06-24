import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';
import Search from '../../components/Character/Search';
import { fetchCharacters } from '../../services/officeApi';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]); // Stores all characters
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]); // Stores a filtered subset of characters
  const [isSearching, setIsSearching] = useState(false);
  const characterList = isSearching ? results : characters;

  const handleSearch = (search) => {
    setIsSearching(!!search.length);
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setResults(filteredCharacters);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const characterData = await fetchCharacters();
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
          <Search onSearch={handleSearch} />
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
      {isSearching && !results.length && <p>No results</p>}
    </>
  );
}
