import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'YOUR_GRAPHQL_ENDPOINT',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});