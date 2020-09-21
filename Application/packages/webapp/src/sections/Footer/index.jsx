import React from 'react';

import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import Mail from '@material-ui/icons/Mail';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

// Signal Experiential Systems - UI imports
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Button from '@sxs/comps/CustomButtons/Button.js';
import CustomInput from '@sxs/comps/CustomInput/CustomInput.js';
import Footer from '@sxs/comps/Footer/Footer.js';

import styles from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/footerStyle.js';

const useStyles = makeStyles(styles);

const FooterArea = () => {
  const classes = useStyles();
  return (
    <Footer
      theme="white"
      content={
        <div>
          <ul className={classes.socialButtons}>
            <li>
              <Button
                justIcon
                simple
                href="https://twitter.com/whyfabric"
                color="twitter"
              >
                <i className="fab fa-twitter" />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href="https://facebook.com/whyfabric"
                color="facebook"
              >
                <i className="fab fa-facebook-square" />
              </Button>
            </li>
            <li>
              <Button
                justIcon
                simple
                href="https://youtube.com/users/whyfabric"
                color="youtube"
              >
                <i className="fab fa-youtube" />
              </Button>
            </li>
          </ul>
          <div className={classNames(classes.pullCenter, classes.copyRight)}>
            Copyright &copy; {1900 + new Date().getYear()}{' '}
            <a href="http://whyfabric.com" target="_blank">
              WhyFabric, Inc.
            </a>{' '}
            All Rights Reserved.
          </div>
        </div>
      }
    >
      <div className={classes.footer}>
        <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
            <h5>Company</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <h5>Site Navigation</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href="/search">Search Theories</a>
              </li>
              <li>
                <a href="/browse/all">Browse By Category</a>
              </li>
              <li>
                <a href="/authors/register">Apply as an Author</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/glossary">Glossary</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <h5>Legal</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href="/terms">Terms & conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
              <li>
                <a href="/oss">Open Source Policies</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <h5>Subscribe to Newsletter</h5>
            <p>
              Join our newsletter and stay up to date on the latest theories!
            </p>
            <form>
              <CustomInput
                id="footeremail"
                formControlProps={{
                  fullWidth: false,
                  className: classes.customFormControl,
                }}
                inputProps={{
                  placeholder: 'Your Email...',
                }}
              />
              <Button color="primary" justIcon>
                <Mail />
              </Button>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    </Footer>
  );
};

export default FooterArea;
