import React, { useState } from 'react';
import Link from 'next/link';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import Typography from "@material-ui/core/Typography";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from "@material-ui/icons/Menu";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';

// WhyFabric Components
import Logo from '@components/Logo';
import SideBar from '@components/SideBar';

import { useStyles } from './styles';

// base toolbar
// : { search?: boolean; back?: boolean }
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
    <AppBar className={classes.root}>
      <Toolbar>
        <Link href="/">
          <Box className={classes.title}>
            <Logo />
          </Box>
        </Link>
        {back ? (
          <Link href="/">
            <ArrowBackIcon />
          </Link>
        ) : (
          <></>
        )}
        {search ? (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        ) : (
          <></>
        )}

        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleMenu}
              className={classes.buttonMenu}
            >
              MENU
            </Button>
            <Menu
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              id="customized-menu"
              keepMounted
            >
              <SideBar />
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

// : { search: boolean, back: boolean }
const AppBarComponent = (props) => {
  return <WFBar {...props} />;
};

export default AppBarComponent;
