import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Button from '@components/Button';
import Preview from '../../Preview';
import Form from './Form';

const Step3 = ({ onComplete }) => {
  const { theory } = React.useContext(TheoryContext);

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={6}>
        <Form onSubmit={onComplete} />
        {!!theory.nodes && (
          <Box
            display="flex"
            justifyContent="flex-end"
            style={{ marginTop: '30px' }}
          >
            <Button onClick={onComplete}>Done! Connect Nodes</Button>
          </Box>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Preview />
      </Grid>
    </Grid>
  );
};

export default Step3;
