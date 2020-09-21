import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  textField: {
    '& .MuiFormHelperText-root': {
      marginTop: '8px',
      fontSize: '10px',
      fontWeight: 500,
      textAlign: 'right',
      textTransform: 'uppercase',
    },
  },
});

export default ({ helperText, maxLength, error, className, ...props }) => {
  const classes = useStyles();
  const help =
    helperText ||
    (maxLength && `${(props.value || '').length} / ${maxLength}`) ||
    error;

  return (
    <TextField
      color="secondary"
      autoComplete="off"
      fullWidth
      inputProps={{
        maxLength,
      }}
      helperText={help}
      error={!!error}
      className={clsx(classes.textField, className)}
      {...props}
    />
  );
};
