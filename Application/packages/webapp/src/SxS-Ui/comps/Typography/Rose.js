import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import styles from '@sxs/theme/jss/material-kit-pro-react/components/typographyStyle.js';

const useStyles = makeStyles(styles);

export default function Rose(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.defaultFontStyle} ${classes.roseText}`}>
      {children}
    </div>
  );
}

Rose.propTypes = {
  children: PropTypes.node,
};
