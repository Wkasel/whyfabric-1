import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    padding: '25px 35px',
    color: '#fff',
    '& h4': {
      fontSize: '1rem',
      paddingBottom: '15px',
      marginBottom: '0',
    },
    '& p': {
      fontSize: '0.9rem',
      fontWeight: '300',
      lineHeight: '1.4',
      marginBottom: '0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '25px',
      maxWidth: '200px',
    },
  },
}));
const CustomTooltip = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.tooltip}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default CustomTooltip;
