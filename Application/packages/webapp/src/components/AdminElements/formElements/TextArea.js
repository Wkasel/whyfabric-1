import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { TextField } from '@material-ui/core';

const TextArea = (props) => {
  const useStyles = makeStyles({
    inputText: {
      marginBottom: props.deleteMargin ? null : '30px',
      '& .MuiFormHelperText-root': {
        textAlign: 'right',
      },
    },
    inputTextUnderline: {
      '&:after': {
        cursor: 'poiner',
        borderBottom: '2px solid #29b6f6', // focus underline
      },
      '&:hover': {
        '&:not(.Mui-disabled)': {
          '&:before': {
            borderBottom: '2px solid #b9b9b9', // hover underline
          },
        },
      },
    },
    errorInputTextUnderline: {
      '&:after': {
        cursor: 'poiner',
        borderBottom: '2px solid #29b6f6', // focus underline
      },
      '&:before': {
        borderBottom: '2px solid #ff0000', // hover underline
      },
      '&:hover': {
        '&:not(.Mui-disabled)': {
          '&:before': {
            borderBottom: '2px solid #ff0000', // hover underline
          },
        },
      },
    },
  });

  const classes = useStyles();

  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <TextField
      onChange={handleChange}
      value={props.value}
      defaultValue={props.defaultValue}
      className={classes.inputText}
      helperText={props.helperText}
      fullWidth
      placeholder={props.placeholder}
      inputProps={{ maxLength: props.maxLength }}
      InputProps={{
        classes: {
          underline: props.error
            ? classes.errorInputTextUnderline
            : classes.inputTextUnderline,
        },
      }}
      rowsMax={props.rowsMax}
      multiline={props.multiline}
      placeholder={props.placeholder}
      disabled={props.disabled}
      onBlur={props.onBlur}
    />
  );
};

export default TextArea;
