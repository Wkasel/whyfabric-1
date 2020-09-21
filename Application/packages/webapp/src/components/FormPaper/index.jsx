import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  form: {
    padding: '20px 28px 28px 28px',
  },
  disabled: {
    pointerEvents: 'none',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '40px',
  },
});

export default ({ title, disabled, className, children, ...props }) => {
  const classes = useStyles();

  return (
    <Paper
      square
      elevation={2}
      component="form"
      className={clsx(classes.form, disabled && classes.disabled, className)}
      {...props}
    >
      <Typography component="div" variant="h4" className={classes.title}>
        {title}
      </Typography>

      {children}
    </Paper>
  );
};
