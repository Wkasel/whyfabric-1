import React from 'react';
import { useStyles } from './styles';

export default function HomePage() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}
