import React from 'react';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (city: string) => {
    setSearchTerm(city);
  };

  return (
    <div className="App">
      <h1>Country</h1>
      <SearchBar onSearch={handleSearchChange} />
    </div>
  );
};

export default App;
