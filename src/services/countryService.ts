import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

const GET_COUNTRIES_BY_CODE = gql`
  query GetCountriesByCode($code: String!) {
    countries(filter: { code: { eq: $code } }) {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
        rtl
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;

async function fetchCountriesByCode(code: string): Promise<any[]> {
  try {
    const result = await client.query({
      query: GET_COUNTRIES_BY_CODE,
      variables: { code },
    });
    return result.data.countries;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return [];
  }
}

export { fetchCountriesByCode };
