import React from 'react';
import { Country } from '../types';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Divider,
} from '@mui/material';



interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Card
      sx={{
        minWidth: 200,
        padding: 1,
        backgroundColor: '#f5f5f5',
        borderRadius: 1,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {country.name}
        </Typography>

        <Box my={1}>
          <Typography variant="body2" color="textSecondary">
            Capital: {country.capital || 'N/A'}
          </Typography>
          <Typography variant="body2">Native Name: {country.native}</Typography>
          <Typography variant="body2">
            Phone Code: {country.phone.toString()}
          </Typography>
          <Typography variant="body2">
            Currency: {country.currency || 'N/A'}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle1">Languages:</Typography>
        <Typography variant="body2">
          {country.languages.map((lang) => lang.name).join(', ')}
        </Typography>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle1">Continent:</Typography>
        <Typography variant="body2">{country.continent.name}</Typography>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle1">States:</Typography>
        <Typography variant="body2">
          {country.states.map((state) => state.name).join(', ')}
        </Typography>

        <Box mt={2}>
          <Chip label={country.emoji} size="small" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
