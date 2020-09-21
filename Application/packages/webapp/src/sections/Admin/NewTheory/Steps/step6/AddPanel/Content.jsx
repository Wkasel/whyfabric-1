import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinkIcon from '@material-ui/icons/Link';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Form from '@components/FormPaper';
import TextField from '@components/TextField';
import Button from '@components/Button';
import { useStyles } from './styles';

const Content = ({
  touched,
  errors,
  getFieldProps,
  isSubmitting,
  handleSubmit,
  onClose,
}) => {
  const classes = useStyles();

  return (
    <Form
      title="Add Justifications"
      className={classes.form}
      disabled={isSubmitting}
      onSubmit={handleSubmit}
    >
      <IconButton
        size="small"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <TextField
        {...getFieldProps('description')}
        label="More Information"
        helperText="Enter Text"
        className={classes.description}
        error={!!touched.description && errors.description}
      />

      <TextField
        {...getFieldProps('reference')}
        helperText="Justification References"
        error={!!touched.reference && errors.reference}
        InputProps={{
          startAdornment: 'http://',
        }}
      />
      <Box className={classes.iconButtons}>
        <IconButton color="secondary" size="small">
          <LinkIcon />
        </IconButton>
        <IconButton color="secondary" size="small">
          <CloudUploadIcon />
        </IconButton>
      </Box>

      <Box className={classes.actions}>
        <Button type="submit" width={130} loading={isSubmitting}>
          Save
        </Button>
      </Box>
    </Form>
  );
};

export default Content;
