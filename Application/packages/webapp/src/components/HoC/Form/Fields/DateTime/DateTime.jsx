import { FunctionComponent, useState } from 'react';
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { Omit } from 'global';

import { FieldProps } from 'formik';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const formikToSelect = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => {
  return {
    ...field,
    ...props,
    selected: field.value,
    disabled: isSubmitting || disabled,
    value: field.name,
  };
};

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
    },
  })
);
// <Switch
//   {...formikToSwitch(props)}
//   color={props.color ? props.color : "primary"}
// />
export const DateTimeInputField = (props) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // Setting BC Datef
  let mindate = new Date();
  mindate.setYear(-700);
  mindate.setMonth(0);
  mindate.setDate(1);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          clearable
          autoOk
          orientation="landscape"
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          disableFuture
          minDate={mindate}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

DateTimeInputField.displayName = 'FormUI input - Date Time picker';
