import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList.tsx';
import { Country } from './types';
import { fetchCountriesByCode } from './services/countryService';

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const handleSearchChange = async (value: string) => {
    if (value.trim()) {
      try {
        const fetchedCountries = await fetchCountriesByCode(
          value.toUpperCase()
        );
        setCountries(fetchedCountries || []);
      } catch (error) {
        console.error('Ошибка при загрузке стран:', error);
        setCountries([]);
      }
    } else {
      setCountries([]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Countries</h1>
              <SearchBar onSearch={handleSearchChange} />
              <CountryList countries={countries} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
