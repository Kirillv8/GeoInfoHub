import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search by country code"
      variant="outlined"
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
