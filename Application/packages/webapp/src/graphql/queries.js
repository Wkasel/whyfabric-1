/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        birthDate
        gender
        toured {
          onboarding
        }
        biography
        isSME
        location {
          city
          state
          region
          country
          latitude
          longitude
        }
        photo
        lastLogin
        createdAt
        updatedAt
        theoriesByOwner {
          nextToken
        }
        organizations {
          nextToken
        }
        theoriesByEditor {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      birthDate
      gender
      toured {
        onboarding
      }
      biography
      isSME
      location {
        city
        state
        region
        country
        latitude
        longitude
      }
      photo
      lastLogin
      createdAt
      updatedAt
      theoriesByOwner {
        items {
          id
          name
          description
          ownerID
          createdAt
          updatedAt
        }
        nextToken
      }
      organizations {
        items {
          id
          userID
          organizationID
          createdAt
          updatedAt
        }
        nextToken
      }
      theoriesByEditor {
        items {
          id
          theoryID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listTheorys = /* GraphQL */ `
  query ListTheorys(
    $filter: ModelTheoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTheorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        ownerID
        categories {
          name
          description
          activeState
        }
        createdAt
        updatedAt
        owner {
          id
          firstName
          lastName
          email
          birthDate
          gender
          biography
          isSME
          photo
          lastLogin
          createdAt
          updatedAt
        }
        editors {
          nextToken
        }
        events {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getTheory = /* GraphQL */ `
  query GetTheory($id: ID!) {
    getTheory(id: $id) {
      id
      name
      description
      ownerID
      categories {
        name
        description
        activeState
      }
      createdAt
      updatedAt
      owner {
        id
        firstName
        lastName
        email
        birthDate
        gender
        toured {
          onboarding
        }
        biography
        isSME
        location {
          city
          state
          region
          country
          latitude
          longitude
        }
        photo
        lastLogin
        createdAt
        updatedAt
        theoriesByOwner {
          nextToken
        }
        organizations {
          nextToken
        }
        theoriesByEditor {
          nextToken
        }
      }
      editors {
        items {
          id
          theoryID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          theoryID
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
