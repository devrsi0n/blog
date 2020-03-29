import { NowRequest, NowResponse } from '@now/node';

import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
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

/**
 * Transperant client GraphQL query
 */
export default async (request: NowRequest, response: NowResponse) => {
  const { graphql = '' } = request.body;
  const result = await client.query({
    query: gql(graphql),
  })
  response.status(200).send(result);
};
