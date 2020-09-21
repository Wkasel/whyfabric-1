import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Form from '@components/FormPaper';
import TextField from '@components/TextField';
import Switch from '@components/Switch';
import HelpIcon from '@components/HelpIcon';
import Button from '@components/Button';
import { useStyles } from './styles';

const topicOptions = [
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'today', label: 'Today' },
  { value: 'tomorrow', label: 'Tomorrow' },
];

const categoryOptions = [{ value: 'history', label: 'History' }];

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
      title="New Causal Theory"
      disabled={isSubmitting}
      onSubmit={handleSubmit}
      className={classes.form}
    >
      <TextField
        {...getFieldProps('topic')}
        select
        label="Theory Topic"
        className={classes.select}
        error={!!touched.topic && errors.topic}
      >
        {topicOptions.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        {...getFieldProps('category')}
        select
        label="Theory Category"
        className={classes.select}
        error={!!touched.category && errors.category}
      >
        {categoryOptions.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <Box display="flex">
        <Switch
          {...getFieldProps('isNumberSequence')}
          width={140}
          label1={'Date\nSequence'}
          label2={'Number\nSequence'}
          className={classes.switch}
        />
        <HelpIcon>
          <Box className={classes.helpContent}>
            <Typography variant="h5">Sequence</Typography>
            <Typography variant="body1">
              Which sequence best organizes your theory?
            </Typography>
            <Typography variant="body1">
              <strong>Date</strong>
              <br />A series of events organized throughout time. Example:
              Events leading up to WWII.
            </Typography>
            <Typography variant="body1">
              <strong> Number</strong>
              <br />A series of events… Example: What triggered the Boeing 737
              Max to fail.
            </Typography>
          </Box>
        </HelpIcon>
      </Box>

      <TextField
        {...getFieldProps('name')}
        label="How Brexit Started"
        maxLength={50}
        error={!!touched.name && errors.name}
      />

      <Box className={classes.actions}>
        <Button type="submit" width={180} loading={isSubmitting}>
          Start Theory
        </Button>
      </Box>
    </Form>
  );
};

export default Content;
