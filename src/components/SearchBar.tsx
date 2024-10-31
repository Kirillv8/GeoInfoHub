import React from 'react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <>
      <h1>Countries</h1>
      <input type="text" value={city} onChange={handleChange} />
      <div>{city}</div>
    </>
  );
};

export default SearchBar;
