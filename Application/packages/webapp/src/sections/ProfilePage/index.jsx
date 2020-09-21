/*eslint-disable*/
import React from 'react';

import dynamic from 'next/dynamic';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
// core components
import Header from '@sxs/comps/Header/Header.js';
import Footer from '@sxs/comps/Footer/Footer.js';
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import NavPills from '@sxs/comps/NavPills/NavPills.js';
import Card from '@sxs/comps/Card/Card.js';
import CardBody from '@sxs/comps/Card/CardBody.js';
import CardHeader from '@sxs/comps/Card/CardHeader.js';
import Badge from '@sxs/comps/Badge/Badge.js';
import Muted from '@sxs/comps/Typography/Muted.js';

// import Parallax from "@sxs/comps/Parallax/Parallax.js";

// const Parallax = dynamic(() => import("@sxs/comps/Parallax/Parallax"), {
//   ssr: false
// });
//
import { LibraryItem, ProfileTheory } from '@components/ScrollableLibrary';
import Clearfix from '@sxs/comps/Clearfix/Clearfix.js';
import Button from '@sxs/comps/CustomButtons/Button.js';

import christian from '@sxs/theme/img/faces/christian.jpg';
import oluEletu from '@sxs/theme/img/examples/olu-eletu.jpg';
import clemOnojeghuo from '@sxs/theme/img/examples/clem-onojeghuo.jpg';
import cynthiaDelRio from '@sxs/theme/img/examples/cynthia-del-rio.jpg';
import mariyaGeorgieva from '@sxs/theme/img/examples/mariya-georgieva.jpg';
import clemOnojegaw from '@sxs/theme/img/examples/clem-onojegaw.jpg';
import darrenColeshill from '@sxs/theme/img/examples/darren-coleshill.jpg';
import avatar from '@sxs/theme/img/faces/avatar.jpg';
import marc from '@sxs/theme/img/faces/marc.jpg';
import kendall from '@sxs/theme/img/faces/kendall.jpg';
import cardProfile2Square from '@sxs/theme/img/faces/card-profile2-square.jpg';

import profilePageStyle from '@sxs/theme/jss/material-kit-pro-react/views/profilePageStyle.js';

const useStyles = makeStyles({
  ...profilePageStyle,
  root: { marginTop: '180px' },
  profileTheory: {
    maxWidth: '50px',
  },
  theorySvg: {
    maxWidth: '50%',
  },
});

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img
                  src="https://i.pinimg.com/originals/76/89/02/768902e7e8118d8bffec9dba1dc084cf.png"
                  alt="..."
                  className={imageClasses}
                />
              </div>
              <div className={classes.name}>
                <Typography variant="h3" className={classes.title}>
                  Kyle Porter
                </Typography>
                <Typography variant="h4">
                  Professor, University of Texas
                </Typography>
                <Typography variant="h6" className={classes.title}>
                  Stats
                </Typography>
                <GridContainer>
                  <GridItem xs={4}>
                    <span>
                      <b>60</b> Theories
                    </span>
                  </GridItem>
                  <GridItem xs={4}>
                    <span>
                      <b>331</b> Author Upvotes
                    </span>
                  </GridItem>
                  <GridItem xs={4}>
                    <span>
                      <b>5.2k</b> Author Upvotes
                    </span>
                  </GridItem>
                </GridContainer>

                <hr />
                <Badge color="primary">History</Badge>
                <Badge color="rose">American History</Badge>
              </div>
            </div>
            <div className={classes.follow}>
              <Tooltip
                id="tooltip-top"
                title="Follow William"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  justIcon
                  round
                  color="primary"
                  className={classes.followButton}
                >
                  <Add className={classes.followIcon} />
                </Button>
              </Tooltip>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classNames(classes.description, classes.textCenter)}>
          <p>
            An award winning scholar of influential theories on the topics of
            history and current events. Professor Porter has published several
            theories and books.{' '}
          </p>
        </div>
        <div className={classes.profileTabs}>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: 'Theories',
                tabIcon: Palette,
                tabContent: (
                  <>
                    <Typography variant="h4">Latest Theories</Typography>
                    <GridContainer>
                      {[
                        {
                          key: 0,
                          title: 'Brexit',
                          description:
                            'A very detailed explaination of why Brittain left the European Union.',
                          author: 'William Kasel',
                        },
                        {
                          key: 1,
                          title: 'Brexit',
                          description:
                            'A very detailed explaination of why Brittain left the European Union.',
                          author: 'William Kasel',
                        },
                        {
                          key: 4,
                          title: 'Brexit',
                          description:
                            'A very detailed explaination of why Brittain left the European Union.',
                          author: 'William Kasel',
                        },
                        { key: 5, title: 'Brexit', author: 'William Kasel' },
                      ].map((item) => (
                        <>
                          <GridItem xs={12} sm={8} md={8}>
                            <ProfileTheory
                              {...item}
                              imgClass={classes.theorySvg}
                              className={classes.profileTheory}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <Typography variant="h5">{item.title}</Typography>
                            {item.description}
                          </GridItem>
                        </>
                      ))}
                    </GridContainer>
                  </>
                ),
              },
              {
                tabButton: 'Theories',
                tabIcon: Palette,
                tabContent: (
                  <>
                    <Typography variant="h4">Latest Theories</Typography>
                    <GridContainer>
                      {[
                        {
                          key: 0,
                          title: 'Brexit',
                          description:
                            'A very detailed explaination of why Brittain left the European Union.',
                          author: 'William Kasel',
                        },
                        {
                          key: 1,
                          title: 'Brexit',
                          description:
                            'A very detailed explaination of why Brittain left the European Union.',
                          author: 'William Kasel',
                        },
                        {
                          key: 4,
                          title: 'Brexit',
                          description:
                            'A very detailed explaination of why Brittain left the European Union.',
                          author: 'William Kasel',
                        },
                        { key: 5, title: 'Brexit', author: 'William Kasel' },
                      ].map((item) => (
                        <>
                          <GridItem xs={12} sm={8} md={8}>
                            <ProfileTheory
                              {...item}
                              imgClass={classes.theorySvg}
                              className={classes.profileTheory}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <Typography variant="h5">{item.title}</Typography>
                            {item.description}
                          </GridItem>
                        </>
                      ))}
                    </GridContainer>
                  </>
                ),
              },
            ]}
          />
        </div>
        <Clearfix />
      </div>
    </div>
  );
}
