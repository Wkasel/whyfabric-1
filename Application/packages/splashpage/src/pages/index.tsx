import React from 'react';

import { PageProps } from 'gatsby';
import Layout from '@/components/layout';
import Image from '@/components/image';
import SEO from '@/components/seo';
import Logo from '@/components/logo';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import StarIcon from '@material-ui/icons/Star';
import InfoIcon from '@material-ui/icons/Info';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Done from '@material-ui/icons/Done';
import { url } from 'inspector';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  bg: {
    backgroundImage: `url(${BG})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    // width: '100vw',
  },
  subheadline: {
    color: '#757575',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 50,
  },
}));

import BG from '../assets/images/background.png';
import Typography from '@material-ui/core/Typography';
import { SignupForm } from '@/components/SignupForm';

const IndexPage: React.FC<PageProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Layout>
        <SEO title="Home" />

        <Grid container spacing={3} justify="center">
          <Grid item xs={10} md={6}>
            <Logo />
            <div style={{ height: '20vh' }} />
            <Typography variant="h4" align="center" gutterBottom>
              Coming Soon
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item md={6} xs={10}>
            <Typography variant="h2" align="center">
              Understand Cause and Consequence
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className={classes.subheadline}
            >
              See how the world is interconnected
            </Typography>
          </Grid>
          <Grid container spacing={3} justify="center">
            <Grid item xs={10} md={6} justify="center">
              <SignupForm url="https://fullsignal.us19.list-manage.com/subscribe/post?u=b9487bca863fc7022c2813057&id=1615ea5639" />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default IndexPage;
