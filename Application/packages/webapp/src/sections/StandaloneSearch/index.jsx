import React from 'react';
import { ReactSVG } from 'react-svg';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import Search from '@components/Search';

import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';

import style from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';
const useStyles = makeStyles(style);

const StandaloneSearch = () => {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            className={classes.subheader}
          >
            Search to your hearts content...
          </Typography>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Search />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default StandaloneSearch;
