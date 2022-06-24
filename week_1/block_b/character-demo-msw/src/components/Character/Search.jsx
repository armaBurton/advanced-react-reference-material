import { useState } from 'react';

export default function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      placeholder="Find a character"
      value={search}
      onChange={handleChange}
    />
  );
}
