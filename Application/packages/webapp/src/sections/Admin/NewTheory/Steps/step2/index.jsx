import React from 'react';
import Grid from '@material-ui/core/Grid';

import Preview from '../../Preview';
import Form from './Form';

export const Step2 = ({ onComplete }) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={6}>
        <Form onSubmit={onComplete} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Preview />
      </Grid>
    </Grid>
  );
};

export default Step2;
