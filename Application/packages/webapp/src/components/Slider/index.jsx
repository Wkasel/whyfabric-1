import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useSliderStyles = makeStyles({
  root: {
    margin: '90px 4px 0 4px',
    width: 'calc(100% - 8px)',
    height: '8px',
  },
  rail: {
    height: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
    opacity: 1,
  },
  track: {
    height: '8px',
    backgroundColor: '#03A9F4',
  },
  mark: {
    marginLeft: '-4px',
    width: '8px',
    height: '8px',
    borderRadius: '4px',
    backgroundColor: '#3b3b3b',
    opacity: 1,
  },
  thumb: {
    marginTop: '0',
    marginLeft: '-4px',
    width: '8px',
    height: '8px',
    backgroundColor: 'transparent',
    transition: 'left 0.2s',
  },
  valueLabel: {
    top: '-90px',
    left: 'calc(50% - 35px)',
    fontSize: '26px',
    '& > span': {
      width: '70px',
      height: '70px',
      '& > span': {
        color: '#fff',
      },
    },
  },
});

export default (props) => {
  const classes = useSliderStyles();
  return (
    <Slider
      marks
      valueLabelDisplay="on"
      color="secondary"
      classes={classes}
      {...props}
    />
  );
};
