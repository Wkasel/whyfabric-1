import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '60px',
    boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.25)',
    display: 'grid',
    gridTemplateColumns: '0.05fr 0.4fr 1.5fr 0.9fr',
    gridTemplateRows: '1fr',
    paddingRight: '20px',
    [theme.breakpoints.down('md')]: {
      height: '40px',
      fontSize: '0.8rem',
    },
  },
  // COLORS
  minorColor: {
    color: '#ffd037',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0',
  },
  mediumColor: {
    color: '#ffa733',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0',
  },
  majorColor: {
    color: '#c13c13',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0',
  },
  // BACKGROUNDS
  minorBackground: {
    backgroundColor: '#ffd037',
    width: '3px',
  },
  mediumBackground: {
    backgroundColor: '#ffa733',
    width: '3px',
  },
  majorBackground: {
    backgroundColor: '#c13c13',
    width: '3px',
  },
  figureContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 5px',
  },
  //
  figureTop: {
    borderBottom: '20px solid #29b6f6',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    display: 'block',
    width: '0',
    height: '0',
    [theme.breakpoints.down('md')]: {
      borderBottom: '10px solid #29b6f6',
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
    },
  },
  figureDown: {
    borderTop: '20px solid #29b6f6',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    display: 'block',
    width: '0',
    height: '0',
    [theme.breakpoints.down('md')]: {
      borderTop: '10px solid #29b6f6',
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
    },
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0',
    paddingLeft: '10px',
  },
}));

const NodeCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        className={
          props.nodeData.impact === '1'
            ? classes.minorBackground
            : props.nodeData.impact === '2'
            ? classes.mediumBackground
            : classes.majorBackground
        }
      />
      <div className={classes.figureContainer}>
        <div>
          <span className={classes.figureTop} />
          <span className={classes.figureDown} />
        </div>
      </div>
      <p
        className={
          props.nodeData.impact === '1'
            ? classes.minorColor
            : props.nodeData.impact === '2'
            ? classes.mediumColor
            : classes.majorColor
        }
      >
        {props.nodeData.name}
      </p>
      <p className={classes.date}>{props.nodeData.date}</p>
    </div>
  );
};

export default NodeCard;
