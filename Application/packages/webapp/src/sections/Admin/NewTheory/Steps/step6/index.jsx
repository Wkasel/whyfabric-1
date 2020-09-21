import React from 'react';
import Box from '@material-ui/core/Box';

import Button from '@components/Button';
import Connections from './Connections';
import InviteForm from './InviteForm';

const Step6 = ({ onComplete }) => {
  return (
    <>
      <Connections />
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start">
        <InviteForm />
        <Button onClick={onComplete} style={{ marginLeft: '80px' }}>
          Save Justifications
        </Button>
      </Box>
    </>
  );
};

export default Step6;
