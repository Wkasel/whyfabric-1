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

const AuthorRegister = () => {
  const classes = useStyles();

  return (
    <GridContainer className={classes.container}>
      <GridItem sm={12} md={1} lg={3} mdDown="hide"></GridItem>
      <GridItem sm={12} md={10} lg={6}>
        <Card testimonial className={classes.card1}>
          <Box style={{ padding: '20px 0px 20px', textAlign: 'center' }}>
            <Logomark size="150" />
          </Box>
          <Typography variant="h5" container="h5">
            Apply to become a WhyFabric author.
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
                labelText="Professional Title"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Institution"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Institutional Email"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="What theory/theories would you like to publish"
                id="textarea-input"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
            </GridItem>
          </CardBody>
          <CardFooter>
            <Button color="primary">Primary</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem mdDown="hide" sm={12} md={1} lg={3}></GridItem>
    </GridContainer>
  );
};

export default AuthorRegister;
