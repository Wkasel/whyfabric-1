import React from 'react';

// Material UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Table from '@sxs/comps/Table/Table.js';
import Button from '@sxs/comps/CustomButtons/Button.js';
import Paginations from '@sxs/comps/Pagination/Pagination.js';
import Typography from '@material-ui/core/Typography';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';

import Comments from '@components/Comments';

import Graph from '@components/LocalGraph';

import { ReactSVG } from 'react-svg';

import style from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';

const localStyles = makeStyles(() =>
  createStyles({
    graphSideBar: {
      'padding-top': '100px',
    },
  })
);

const useStyles = makeStyles({ ...style, ...localStyles });

const TheoryContent = (props) => {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem xs={8}>
          <GridItem xs={12} sm={12} md={12} style={{ paddingTop: '40px' }}>
            <GridContainer
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <GridItem xs={6} sm={6} md={4}>
                <Typography component="h3">
                  How Brexit Started <VolumeUpIcon />
                </Typography>
              </GridItem>
              <GridItem xs={6} sm={6} md={4}>
                <CommentRoundedIcon />
                <ShareIcon />
                <FavoriteIcon />
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Box style={{ backgroundColor: '#fff', height: '500px' }}>
              <Graph />
            </Box>
          </GridItem>
        </GridItem>
        <GridItem xs={4} style={{ backgroundColor: '#fff', zIndex: '-11' }}>
          <Box
            style={{
              backgroundColor: '#fff',
              maxHeight: '400px',
              overflow: 'auto',
            }}
          >
            <Comments />
          </Box>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default TheoryContent;
