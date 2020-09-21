import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from 'src/aws-exports';
import { getUser } from 'src/graphql/queries';
import {
  createUser as newUser,
  createOrganization as newOrganization,
  addUserToOrganization as newUserOrganization,
  createTheory as newTheory,
  addEditorToTheory as newEditorTheory,
  addEventToTheory as newEventTheory,
  newEvent,
  connectEvents as newEventEvent,
  updateUser as changeUser,
  updateOrganization as changeOrganization,
  updateTheory as changeTheory,
  changeEvent,
  deleteOrganization as removeOrganization,
  deleteTheory as removeTheory,
  deleteEvent as removeEvent,
  removeUserFromOrganization as removeUserOrganization,
  removeEditorFromTheory as removeEditorTheory,
} from 'src/graphql/mutations';
Amplify.configure(awsconfig);

// GET

export const getMe = async () => {
  const me = await Auth.currentAuthenticatedUser();
  const { data, errors } = await API.graphql(
    graphqlOperation(getUser, { id: me.username })
  );
  return data.getUser;
};

// CREATE

export const createUser = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(newUser, { input })
  );
  return data.createTheory;
};

export const createOrganization = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(newOrganization, { input })
  );
  return data.createOrganization;
};

export const addUserToOrganization = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(newUserOrganization, { input })
  );
  return data.addUserToOrganization;
};

export const createTheory = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(newTheory, { input })
  );
  return data.createTheory;
};

export const addEditorToTheory = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(addEditorTheory, { input })
  );
  return data.addEditorToTheory;
};

export const addEventToTheory = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(addEventTheory, { input })
  );
  return data.addEventToTheory;
};

export const createEvent = async (input) => {
  console.log({ input });
  const { data, errors } = await API.graphql(
    graphqlOperation(newEvent, { input })
  );
  return data.newEvent;
};

export const connectEvents = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(newEventEvent, { input })
  );
  return data.connectEvents;
};

// UPDATE

export const updateUser = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(changeUser, { input })
  );
  return data.updateUser;
};

export const updateOrganization = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(changeOrganization, { input })
  );
  return data.updateOrganization;
};

export const updateTheory = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(changeTheory, { input })
  );
  return data.updateTheory;
};

export const updateEvent = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(changeEvent, { input })
  );
  return data.changeEvent;
};

// DELETE

export const deleteOrganization = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(removeOrganization, { input })
  );
  return data.deleteOrganization;
};

export const deleteTheory = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(removeTheory, { input })
  );
  return data.deleteTheory;
};

export const deleteEvent = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(removeEvent, { input })
  );
  return data.deleteEvent;
};

export const removeMemberFromOrganization = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(removeUserOrganization, { input })
  );
  return data.removeUserFromOrganization;
};

export const removeEditorFromTheory = async (input) => {
  const { data, errors } = await API.graphql(
    graphqlOperation(removeEditorTheory, { input })
  );
  return data.removeEditorFromTheory;
};
