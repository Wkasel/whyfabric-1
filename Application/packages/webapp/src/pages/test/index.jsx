import React from 'react';
import { Container, Button, Grid, Box, TextField } from '@material-ui/core';
import {
  createUser,
  createOrganization,
  createTheory,
  addUserToOrganization,
  getMe,
  createEvent,
  updateUser,
  updateOrganization,
  updateTheory,
  updateEvent,
  removeMemberFromOrganization,
  removeEditorFromTheory,
} from '../../data/amplify/api';
import JSONPretty from 'react-json-pretty';

const TestPage = () => {
  const [id, setId] = React.useState('');
  const [result, setResult] = React.useState('{}');

  React.useEffect(() => {
    if (!id) {
      initialize();
    }
  });

  const initialize = async () => {
    const me = await getMe();
    setId(me.id);
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <Box padding={2}>
          <Grid container spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  getMe()
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                get me
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  createUser({
                    firstName: 'Test',
                    lastName: 'User',
                    email: 'test.user@gmail.com',
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                create user
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  updateUser({
                    id: id,
                    biography: 'Just a hero walking down a long, lonely road.',
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                update user
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  createOrganization({
                    name: 'Scientific Group A',
                    website: 'https://scigroupa.org',
                    about: 'We are men and women of science.',
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                create organization
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  updateOrganization({
                    id: '430283a7-a83f-4a7b-8802-bdc3d64f172c',
                    name: 'Scientific Group B',
                    website: 'https://scigroupb.org',
                    about: 'We are men and women of science!',
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                update organization
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  addUserToOrganization({
                    userID: id,
                    organizationID: '430283a7-a83f-4a7b-8802-bdc3d64f172c',
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                add user to organization
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  createTheory({
                    ownerID: id,
                    name: 'The Big Bang',
                    description: 'The theory of the creation of our universe.',
                    categories: [
                      {
                        name: 'astronomy',
                        description:
                          'Study of planets, stars, galaxys and the universe.',
                        activeState: true,
                      },
                    ],
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                create theory
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  updateTheory({
                    id: '64480d49-7b54-4dd4-975a-112e142630fb',
                    name: 'The Bigger Bang',
                    description:
                      'The revised theory of the creation of our universe.',
                    categories: [
                      {
                        name: 'astronomy',
                        description:
                          'Study of planets, stars, galaxys and the universe.',
                        activeState: true,
                      },
                    ],
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                update theory
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  createEvent({
                    name: 'Discovery of fire',
                    description:
                      'Lightning struck a tree and he grabbed a branch. It was lit.',
                    date: new Date(),
                    isActive: true,
                    isPassive: true,
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                create event
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  updateEvent({
                    id: '74c5c5c7-e1d0-45bc-b690-056cc8a631d2',
                    name: 'Discovery of fire',
                    description:
                      'Magma ignited a tree and she grabbed a branch. Straight fire.',
                    date: new Date(),
                    isActive: true,
                    isPassive: true,
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                update event
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  removeMemberFromOrganization({
                    id: '4350ff43-36b6-41ef-86f2-b8d536defe67',
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                remove member from organization
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  removeEditorFromTheory({
                    id: '',
                  })
                    .then((o) => setResult(JSON.stringify(o)))
                    .catch((e) => setResult(JSON.stringify(e)))
                }
              >
                remove editor from theory
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box padding={2} flexGrow={1}>
          <JSONPretty id="json-pretty" data={result}></JSONPretty>
        </Box>
      </Box>
    </Container>
  );
};
export default TestPage;
