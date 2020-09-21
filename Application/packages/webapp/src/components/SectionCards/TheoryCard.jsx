import React from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
import ChatBubble from '@material-ui/icons/ChatBubble';
import Schedule from '@material-ui/icons/Schedule';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Subject from '@material-ui/icons/Subject';
import WatchLater from '@material-ui/icons/WatchLater';
import LaunchIcon from '@material-ui/icons/Launch';
import People from '@material-ui/icons/People';
import Business from '@material-ui/icons/Business';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Delete from '@material-ui/icons/Delete';
import Bookmark from '@material-ui/icons/Bookmark';
import Refresh from '@material-ui/icons/Refresh';
import Receipt from '@material-ui/icons/Receipt';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// core components
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Card from '@sxs/comps/Card/Card.js';
import CardHeader from '@sxs/comps/Card/CardHeader.js';
import CardBody from '@sxs/comps/Card/CardBody.js';
// import CardFooter from "@sxs/comps/Card/CardFooter.js";
// import CardAvatar from "@sxs/comps/Card/CardAvatar.js";
// import Info from "@sxs/comps/Typography/Info.js";
// import Danger from "@sxs/comps/Typography/Danger.js";
// import Success from "@sxs/comps/Typography/Success.js";
// import Warning from "@sxs/comps/Typography/Warning.js";
// import Rose from "@sxs/comps/Typography/Rose.js";
import Button from '@sxs/comps/CustomButtons/Button.js';
import Badge from '@sxs/comps/Badge/Badge';

// image assets
import cardBlog3 from '@sxs/theme/img/examples/card-blog3.jpg';
import office1 from '@sxs/theme/img/examples/office1.jpg';
import sampleGraph from '@sxs/theme/img/sample-graph.svg';

import styles from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/sectionCards';

const useStyles = makeStyles(styles);

const TheoryItem = () => {
  const classes = useStyles();
  return (
    <>
      {/* griditem */}
      <GridItem xs={12} sm={12} md={4} lg={4}>
        <Card
          background
          style={{
            backgroundImage: `url(${sampleGraph})`,
          }}
        >
          <CardBody background>
            <Typography component="h2" gutterBottom>
              Brexit
            </Typography>
            <p className={classes.cardDescriptionWhite}>
              A brief understanding of the events that led to Brittain filing
              articles to leave the European Union.
            </p>
            <Badge color="info">World</Badge>
            <br />

            <Button simple color="white">
              <LaunchIcon /> View Theory
            </Button>
          </CardBody>
        </Card>
      </GridItem>
      {/*  end griditem */}
    </>
  );
};

const TheoryCard = () => {
  const classes = useStyles();
  return (
    <GridContainer>
      <TheoryItem />
      <TheoryItem />
      <TheoryItem />
    </GridContainer>
  );
};

export default TheoryCard;
