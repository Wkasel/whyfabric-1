import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// WhyFabric Components
import Logo from '@components/Logo';
import SideBar from '@components/SideBar';
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Header from '@sxs/comps/Header/Header.js';
import CustomInput from '@sxs/comps/CustomInput/CustomInput.js';
import CustomDropdown from '@sxs/comps/CustomDropdown/CustomDropdown.js';
import Button from '@sxs/comps/CustomButtons/Button.js';

import navbarsStyle from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js';

// import { useStyles } from "./styles";
const useStyles = makeStyles(navbarsStyle);

// base toolbar
const WFBar = (props) => {
  const { search, back } = props;
  const classes = useStyles();
  // const [handleMenu] = useMemo(() => console.log("test"));
  const handleMenu = () => console.log('menu click');
  const [auth] = useState(false);
  // const back = useState(showBack);
  //
  //
  // TODO:
  //  - Create reducer to handle state naviagation
  return (
    <Header
      brand={Logo}
      color="transparent"
      links={
        <List className={classes.list + ' ' + classes.mlAuto}>
          <ListItem className={classes.listItem}>
            <Button color="white" className={classes.navLink}>
              <i
                className={
                  classes.socialIcons +
                  ' ' +
                  classes.marginRight5 +
                  ' fab fa-twitter'
                }
              />{' '}
              Twitter
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button color="white" className={classes.navLink}>
              <i
                className={
                  classes.socialIcons +
                  ' ' +
                  'primary' +
                  classes.marginRight5 +
                  ' fab fa-facebook'
                }
              />{' '}
              Facebook
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button color="white" className={classes.navLink}>
              <i
                className={
                  classes.socialIcons +
                  ' ' +
                  classes.marginRight5 +
                  ' fab fa-instagram'
                }
              />{' '}
              Instagram
            </Button>
          </ListItem>
        </List>
      }
    />
  );
};

const AppBarComponent = (props) => {
  return <WFBar {...props} />;
};

export default AppBarComponent;
