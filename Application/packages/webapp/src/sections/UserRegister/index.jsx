import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// SXS Components
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Card from '@sxs/comps/Card/Card.js';
import CardBody from '@sxs/comps/Card/CardBody.js';
import CardFooter from '@sxs/comps/Card/CardFooter.js';
import Button from '@sxs/comps/CustomButtons/Button.js';
import CustomInput from '@sxs/comps/CustomInput/CustomInput';
import CustomDropdown from '@sxs/comps/CustomDropdown/CustomDropdown.js';
import testimonialsStyle from '@sxs/theme/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.js';

// @material-ui/core components
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import People from '@material-ui/icons/People';
import Check from '@material-ui/icons/Check';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

// Sxs Components

// Contexts

import basicsStyle from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js';

const useStyles = makeStyles({ ...basicsStyle, ...testimonialsStyle });

// WhyFabric Components
import Logomark from '@components/Logo/Logomark';

// const useStyles = makeStyles(testimonialsStyle);

// import blurryBG from "";

const UserRegister = () => {
  const classes = useStyles();

  return (
    <GridContainer className={classes.container}>
      <GridItem sm={12} md={3} mdDown="hide"></GridItem>
      <GridItem sm={12} md={6}>
        <Card testimonial className={classes.card1}>
          <Box style={{ padding: '20px 0px 20px', textAlign: 'center' }}>
            <Logomark size="150" />
          </Box>
          <Typography variant="h1" container="h1" gutterBottom>
            Welcome
          </Typography>
          <Typography
            variant="h6"
            container="h6"
            style={{ color: 'rgba(117,117,117,0.6)' }}
          >
            Register to become a WhyFabric user.
          </Typography>
          <CardBody>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <CustomInput
                labelText="Your Name"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Your Email"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Set Password"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </CardBody>
          <CardFooter>
            <Button color="primary">Primary</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem mdDown="hide" sm={12} sm={3} md={3}></GridItem>
    </GridContainer>
  );
};

export default UserRegister;
