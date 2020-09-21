import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MicIcon from '@material-ui/icons/Mic';

import Form from '@components/FormPaper';
import TextField from '@components/TextField';
import HelpIcon from '@components/HelpIcon';
import Button from '@components/Button';
import { useStyles } from './styles';

const Content = ({
  touched,
  errors,
  getFieldProps,
  isSubmitting,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <Form
      title="Causal Theory Description"
      disabled={isSubmitting}
      onSubmit={handleSubmit}
    >
      <TextField
        {...getFieldProps('description')}
        multiline
        placeholder="Description"
        error={!!touched.description && errors.description}
      />

      <Box className={classes.actions}>
        <Box display="flex" justifyContent="flex-end">
          <Button width={180} endIcon={<MicIcon />}>
            Record Audio
          </Button>
          <HelpIcon>
            <Box className={classes.helpContent}>
              <Typography variant="h5">Record Audio</Typography>
              <Typography variant="body1">
                Record your theory in parts so your audience can listen on the
                go.
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button link>Yes!</Button>
                <Button link>No Thanks</Button>
              </Box>
            </Box>
          </HelpIcon>
        </Box>
        <Button type="submit" width={180} loading={isSubmitting}>
          Start Theory
        </Button>
      </Box>
    </Form>
  );
};

export default Content;
