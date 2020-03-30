import fetch from 'node-fetch';

import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  fetch: fetch as any,
  request: operation => {
    const token = process.env.FAUNADB_SECRET;
    if (!token) {
      throw new Error('FAUNADB secret not found');
    }
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
});
