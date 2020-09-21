import React from 'react';

import { Slider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nodeImpactSliderWrap: {
    position: 'relative',
    '& p': {
      position: 'absolute',
      bottom: '-35px',
      right: '-180px',
      width: '160px',
      background: '#29b6f6',
      padding: '23px',
      fontSize: '0.7rem',
      fontWeight: '300',
      color: '#fff',
      borderRadius: '0 60px 60px',
    },
  },
  nodeImpactSlider: {
    marginBottom: '40px',
    '& .MuiSlider-rail': {
      color: '#b9b9b9',
      opacity: '1',
    },
    '& .MuiSlider-markLabel': {
      fontSize: '0.6rem',
      whiteSpace: 'pre-line',
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#fff',
    },
    '& .MuiSlider-thumb': {
      backgroundColor: '#29b6f6',
    },
    '& .MuiSlider-track': {
      color: '#29b6f6',
    },
    '& :nth-child(5)': {
      left: '10px !important',
      color: '#ffd037',
      textAlign: 'center',
    },
    '& :nth-child(7)': {
      color: '#ffa733',
      textAlign: 'center',
    },
    '& :nth-child(9)': {
      color: '#c13c13',
      textAlign: 'center',
      left: '97% !important',
    },
  },
});

const impactMarks = [
  {
    value: 1,
    label: 'Minor \n Impact',
  },
  {
    value: 2,
    label: 'Medium \n Impact',
  },
  {
    value: 3,
    label: 'Major \n Impact',
  },
];

const ImpactSlider = (props) => {
  const classes = useStyles();

  const handleChange = (e, value) => {
    props.onChange(value);
  };
  return (
    <Slider
      min={1}
      max={3}
      step={1}
      marks={impactMarks}
      className={classes.nodeImpactSlider}
      onChange={handleChange}
      value={props.impactValue}
    />
  );
};

export default ImpactSlider;
