import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default ({ loading, children }) => {
  const classes = useStyles();

  return loading ? (
    <div className={classes.loadingWrapper}>
      <CircularProgress color="secondary" />
    </div>
  ) : (
    children
  );
};
