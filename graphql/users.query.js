import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    allUsers {
      id
      email
      firstName
      lastName
    }
  }
`;
