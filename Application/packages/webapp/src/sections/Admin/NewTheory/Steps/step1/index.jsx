import React from 'react';
import Grid from '@material-ui/core/Grid';

import Form from './Form';

const Step1 = ({ onComplete }) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={6}>
        <Form onSubmit={onComplete} />
      </Grid>
    </Grid>
  );
};

export default Step1;
