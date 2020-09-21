import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Typography from '@material-ui/core/Typography';
// core components
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Card from '@sxs/comps/Card/Card.js';
import CardAvatar from '@sxs/comps/Card/CardAvatar.js';
import CardHeader from '@sxs/comps/Card/CardHeader.js';
import CardBody from '@sxs/comps/Card/CardBody.js';
import CardFooter from '@sxs/comps/Card/CardFooter.js';
import Button from '@sxs/comps/CustomButtons/Button.js';
import Muted from '@sxs/comps/Typography/Muted.js';

import teamsStyle from '@sxs/theme/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js';

import bg7 from '@sxs/theme/img/bg7.jpg';
import city from '@sxs/theme/img/examples/city.jpg';
import marc from '@sxs/theme/img/faces/marc.jpg';
import christian from '@sxs/theme/img/faces/christian.jpg';
import kendall from '@sxs/theme/img/faces/kendall.jpg';
import avatar from '@sxs/theme/img/faces/avatar.jpg';
import cardProfile1 from '@sxs/theme/img/examples/card-profile1.jpg';
import cardProfile2 from '@sxs/theme/img/examples/card-profile2.jpg';
import cardProfile4 from '@sxs/theme/img/examples/card-profile4.jpg';
import cardProfile1Square from '@sxs/theme/img/faces/card-profile1-square.jpg';
import cardProfile2Square from '@sxs/theme/img/faces/card-profile2-square.jpg';
import cardProfile4Square from '@sxs/theme/img/faces/card-profile4-square.jpg';
import cardProfile6Square from '@sxs/theme/img/faces/card-profile6-square.jpg';

const useStyles = makeStyles(teamsStyle);

const TeamBiosContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
            }
          >
            <Typography variant="h2">The Team</Typography>
            <Typography variant="h5">
              This is the paragraph where you can write more details about your
              team. Keep you user engaged by providing meaningful information.
            </Typography>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={cardProfile1} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${cardProfile1})`,
                    opacity: '1',
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <Muted>
                  <h6 className={classes.cardCategory}>MANAGING PARTNER</h6>
                </Muted>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-dribbble" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={cardProfile2} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${cardProfile2})`,
                    opacity: '1',
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>George West</h4>
                <Muted>
                  <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                </Muted>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="linkedin">
                  <i className="fab fa-linkedin-in" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-dribbble" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={cardProfile4} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${cardProfile4})`,
                    opacity: '1',
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>Gina Andrew</h4>
                <Muted>
                  <h6 className={classes.cardCategory}>PHOTOGRAPHER</h6>
                </Muted>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="dribbble">
                  <i className="fab fa-dribbble" />
                </Button>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default TeamBiosContent;
