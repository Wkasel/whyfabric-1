import gql from 'graphql-tag';

export const allAdminDataQuery = gql`
  query admin {
    allCategories {
      name
    }
  }
`;

export const getAdminData = (apolloClient) => {
  return apolloClient.query({
    fetchPolicy: 'cache-first',
    query: allAdminDataQuery,
  });
};
