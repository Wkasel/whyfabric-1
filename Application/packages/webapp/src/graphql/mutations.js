/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newEvent = /* GraphQL */ `
  mutation NewEvent($input: EventData) {
    newEvent(input: $input) {
      id
      name
      description
      date
      isActive
      isPassive
      createdAt
      updatedAt
      localEvents {
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
export const addUserToOrganization = /* GraphQL */ `
  mutation AddUserToOrganization($input: MemberData) {
    addUserToOrganization(input: $input) {
      id
      userID
      organizationID
      createdAt
      updatedAt
      user {
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
      organization {
        id
        name
        website
        about
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const removeUserFromOrganization = /* GraphQL */ `
  mutation RemoveUserFromOrganization($input: MemberData) {
    removeUserFromOrganization(input: $input) {
      id
      userID
      organizationID
      createdAt
      updatedAt
      user {
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
      organization {
        id
        name
        website
        about
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const addEditorToTheory = /* GraphQL */ `
  mutation AddEditorToTheory($input: EditorData) {
    addEditorToTheory(input: $input) {
      id
      theoryID
      userID
      createdAt
      updatedAt
      user {
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
      theory {
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
    }
  }
`;
export const removeEditorFromTheory = /* GraphQL */ `
  mutation RemoveEditorFromTheory($input: EditorData) {
    removeEditorFromTheory(input: $input) {
      id
      theoryID
      userID
      createdAt
      updatedAt
      user {
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
      theory {
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
    }
  }
`;
export const addEventToTheory = /* GraphQL */ `
  mutation AddEventToTheory($input: LocalEventData) {
    addEventToTheory(input: $input) {
      id
      theoryID
      eventID
      createdAt
      updatedAt
      theory {
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
      globalEvent {
        id
        name
        description
        date
        isActive
        isPassive
        createdAt
        updatedAt
        localEvents {
          nextToken
        }
      }
      causedEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
      causedByEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const connectEvents = /* GraphQL */ `
  mutation ConnectEvents($input: ConnectionData) {
    connectEvents(input: $input) {
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
export const changeEvent = /* GraphQL */ `
  mutation ChangeEvent($input: EventData) {
    changeEvent(input: $input) {
      id
      name
      description
      date
      isActive
      isPassive
      createdAt
      updatedAt
      localEvents {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      website
      about
      createdAt
      updatedAt
      users {
        items {
          id
          userID
          organizationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      website
      about
      createdAt
      updatedAt
      users {
        items {
          id
          userID
          organizationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      website
      about
      createdAt
      updatedAt
      users {
        items {
          id
          userID
          organizationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createTheory = /* GraphQL */ `
  mutation CreateTheory(
    $input: CreateTheoryInput!
    $condition: ModelTheoryConditionInput
  ) {
    createTheory(input: $input, condition: $condition) {
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
export const updateTheory = /* GraphQL */ `
  mutation UpdateTheory(
    $input: UpdateTheoryInput!
    $condition: ModelTheoryConditionInput
  ) {
    updateTheory(input: $input, condition: $condition) {
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
export const deleteTheory = /* GraphQL */ `
  mutation DeleteTheory(
    $input: DeleteTheoryInput!
    $condition: ModelTheoryConditionInput
  ) {
    deleteTheory(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      description
      date
      isActive
      isPassive
      createdAt
      updatedAt
      localEvents {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      description
      date
      isActive
      isPassive
      createdAt
      updatedAt
      localEvents {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      description
      date
      isActive
      isPassive
      createdAt
      updatedAt
      localEvents {
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
export const createUserOrganizationAssociation = /* GraphQL */ `
  mutation CreateUserOrganizationAssociation(
    $input: CreateUserOrganizationAssociationInput!
    $condition: ModelUserOrganizationAssociationConditionInput
  ) {
    createUserOrganizationAssociation(input: $input, condition: $condition) {
      id
      userID
      organizationID
      createdAt
      updatedAt
      user {
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
      organization {
        id
        name
        website
        about
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const updateUserOrganizationAssociation = /* GraphQL */ `
  mutation UpdateUserOrganizationAssociation(
    $input: UpdateUserOrganizationAssociationInput!
    $condition: ModelUserOrganizationAssociationConditionInput
  ) {
    updateUserOrganizationAssociation(input: $input, condition: $condition) {
      id
      userID
      organizationID
      createdAt
      updatedAt
      user {
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
      organization {
        id
        name
        website
        about
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const deleteUserOrganizationAssociation = /* GraphQL */ `
  mutation DeleteUserOrganizationAssociation(
    $input: DeleteUserOrganizationAssociationInput!
    $condition: ModelUserOrganizationAssociationConditionInput
  ) {
    deleteUserOrganizationAssociation(input: $input, condition: $condition) {
      id
      userID
      organizationID
      createdAt
      updatedAt
      user {
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
      organization {
        id
        name
        website
        about
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const createTheoryEditorAssociation = /* GraphQL */ `
  mutation CreateTheoryEditorAssociation(
    $input: CreateTheoryEditorAssociationInput!
    $condition: ModelTheoryEditorAssociationConditionInput
  ) {
    createTheoryEditorAssociation(input: $input, condition: $condition) {
      id
      theoryID
      userID
      createdAt
      updatedAt
      user {
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
      theory {
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
    }
  }
`;
export const updateTheoryEditorAssociation = /* GraphQL */ `
  mutation UpdateTheoryEditorAssociation(
    $input: UpdateTheoryEditorAssociationInput!
    $condition: ModelTheoryEditorAssociationConditionInput
  ) {
    updateTheoryEditorAssociation(input: $input, condition: $condition) {
      id
      theoryID
      userID
      createdAt
      updatedAt
      user {
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
      theory {
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
    }
  }
`;
export const deleteTheoryEditorAssociation = /* GraphQL */ `
  mutation DeleteTheoryEditorAssociation(
    $input: DeleteTheoryEditorAssociationInput!
    $condition: ModelTheoryEditorAssociationConditionInput
  ) {
    deleteTheoryEditorAssociation(input: $input, condition: $condition) {
      id
      theoryID
      userID
      createdAt
      updatedAt
      user {
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
      theory {
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
    }
  }
`;
export const createLocalEvent = /* GraphQL */ `
  mutation CreateLocalEvent(
    $input: CreateLocalEventInput!
    $condition: ModelLocalEventConditionInput
  ) {
    createLocalEvent(input: $input, condition: $condition) {
      id
      theoryID
      eventID
      createdAt
      updatedAt
      theory {
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
      globalEvent {
        id
        name
        description
        date
        isActive
        isPassive
        createdAt
        updatedAt
        localEvents {
          nextToken
        }
      }
      causedEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
      causedByEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateLocalEvent = /* GraphQL */ `
  mutation UpdateLocalEvent(
    $input: UpdateLocalEventInput!
    $condition: ModelLocalEventConditionInput
  ) {
    updateLocalEvent(input: $input, condition: $condition) {
      id
      theoryID
      eventID
      createdAt
      updatedAt
      theory {
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
      globalEvent {
        id
        name
        description
        date
        isActive
        isPassive
        createdAt
        updatedAt
        localEvents {
          nextToken
        }
      }
      causedEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
      causedByEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteLocalEvent = /* GraphQL */ `
  mutation DeleteLocalEvent(
    $input: DeleteLocalEventInput!
    $condition: ModelLocalEventConditionInput
  ) {
    deleteLocalEvent(input: $input, condition: $condition) {
      id
      theoryID
      eventID
      createdAt
      updatedAt
      theory {
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
      globalEvent {
        id
        name
        description
        date
        isActive
        isPassive
        createdAt
        updatedAt
        localEvents {
          nextToken
        }
      }
      causedEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
      causedByEvents {
        items {
          id
          startEventID
          endEventID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createLocalEventAssociation = /* GraphQL */ `
  mutation CreateLocalEventAssociation(
    $input: CreateLocalEventAssociationInput!
    $condition: ModelLocalEventAssociationConditionInput
  ) {
    createLocalEventAssociation(input: $input, condition: $condition) {
      id
      justification {
        title
        reference {
          name
          url
        }
      }
      startEventID
      endEventID
      createdAt
      updatedAt
      startEvent {
        id
        theoryID
        eventID
        createdAt
        updatedAt
        theory {
          id
          name
          description
          ownerID
          createdAt
          updatedAt
        }
        globalEvent {
          id
          name
          description
          date
          isActive
          isPassive
          createdAt
          updatedAt
        }
        causedEvents {
          nextToken
        }
        causedByEvents {
          nextToken
        }
      }
      endEvent {
        id
        theoryID
        eventID
        createdAt
        updatedAt
        theory {
          id
          name
          description
          ownerID
          createdAt
          updatedAt
        }
        globalEvent {
          id
          name
          description
          date
          isActive
          isPassive
          createdAt
          updatedAt
        }
        causedEvents {
          nextToken
        }
        causedByEvents {
          nextToken
        }
      }
    }
  }
`;
export const updateLocalEventAssociation = /* GraphQL */ `
  mutation UpdateLocalEventAssociation(
    $input: UpdateLocalEventAssociationInput!
    $condition: ModelLocalEventAssociationConditionInput
  ) {
    updateLocalEventAssociation(input: $input, condition: $condition) {
      id
      justification {
        title
        reference {
          name
          url
        }
      }
      startEventID
      endEventID
      createdAt
      updatedAt
      startEvent {
        id
        theoryID
        eventID
        createdAt
        updatedAt
        theory {
          id
          name
          description
          ownerID
          createdAt
          updatedAt
        }
        globalEvent {
          id
          name
          description
          date
          isActive
          isPassive
          createdAt
          updatedAt
        }
        causedEvents {
          nextToken
        }
        causedByEvents {
          nextToken
        }
      }
      endEvent {
        id
        theoryID
        eventID
        createdAt
        updatedAt
        theory {
          id
          name
          description
          ownerID
          createdAt
          updatedAt
        }
        globalEvent {
          id
          name
          description
          date
          isActive
          isPassive
          createdAt
          updatedAt
        }
        causedEvents {
          nextToken
        }
        causedByEvents {
          nextToken
        }
      }
    }
  }
`;
export const deleteLocalEventAssociation = /* GraphQL */ `
  mutation DeleteLocalEventAssociation(
    $input: DeleteLocalEventAssociationInput!
    $condition: ModelLocalEventAssociationConditionInput
  ) {
    deleteLocalEventAssociation(input: $input, condition: $condition) {
      id
      justification {
        title
        reference {
          name
          url
        }
      }
      startEventID
      endEventID
      createdAt
      updatedAt
      startEvent {
        id
        theoryID
        eventID
        createdAt
        updatedAt
        theory {
          id
          name
          description
          ownerID
          createdAt
          updatedAt
        }
        globalEvent {
          id
          name
          description
          date
          isActive
          isPassive
          createdAt
          updatedAt
        }
        causedEvents {
          nextToken
        }
        causedByEvents {
          nextToken
        }
      }
      endEvent {
        id
        theoryID
        eventID
        createdAt
        updatedAt
        theory {
          id
          name
          description
          ownerID
          createdAt
          updatedAt
        }
        globalEvent {
          id
          name
          description
          date
          isActive
          isPassive
          createdAt
          updatedAt
        }
        causedEvents {
          nextToken
        }
        causedByEvents {
          nextToken
        }
      }
    }
  }
`;
