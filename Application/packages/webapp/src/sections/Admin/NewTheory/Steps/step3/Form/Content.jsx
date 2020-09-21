import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import LinkIcon from '@material-ui/icons/Link';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Form from '@components/FormPaper';
import TextField from '@components/TextField';
import Switch from '@components/Switch';
import Button from '@components/Button';
import { useStyles } from './styles';

const Content = ({
  touched,
  errors,
  getFieldProps,
  isSubmitting,
  handleSubmit,
  setFieldValue,
  values,
  isApex,
}) => {
  const classes = useStyles();

  return (
    <Form
      title={
        <>
          <span>{isApex && 'Apex'} Node Details</span>
          <Button link>Advanced Details</Button>
        </>
      }
      disabled={isSubmitting}
      onSubmit={handleSubmit}
    >
      <TextField
        {...getFieldProps('name')}
        label={isApex ? 'Brexit goes to vote.' : 'Describe the node here.'}
        maxLength={140}
        className={classes.name}
        error={!!touched.name && errors.name}
      />

      <Box className={classes.dateBox}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            value={values.date}
            onChange={(date) => setFieldValue('date', date)}
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            placeholder="Date"
            helperText="Year/Month/Day"
            color="secondary"
            className={classes.datepicker}
            error={!!touched.date && !!errors.date}
          />
        </MuiPickersUtilsProvider>
        <Switch {...getFieldProps('isAD')} width={60} label1="BC" label2="AD" />
        <Switch {...getFieldProps('isExact')} width={60} label2="Exact" />
      </Box>

      <TextField
        {...getFieldProps('description')}
        label="More Information"
        helperText="More Information"
        error={!!touched.description && errors.description}
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
        <Button width={180} endIcon={<MicIcon />}>
          Record Audio
        </Button>
        <Button type="submit" width={180} loading={isSubmitting}>
          Add {isApex && 'Apex'} Node
        </Button>
      </Box>
    </Form>
  );
};

export default Content;
