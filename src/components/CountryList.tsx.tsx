import React from 'react';
import CountryCard from './CountryCard';
import { Country } from '../types';

interface CountryListProps {
  countries: Array<Country>;
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
