/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTheory = /* GraphQL */ `
  subscription OnCreateTheory {
    onCreateTheory {
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
export const onUpdateTheory = /* GraphQL */ `
  subscription OnUpdateTheory {
    onUpdateTheory {
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
export const onDeleteTheory = /* GraphQL */ `
  subscription OnDeleteTheory {
    onDeleteTheory {
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
