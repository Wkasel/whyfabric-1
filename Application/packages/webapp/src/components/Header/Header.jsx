import React, { useState } from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Button, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';

// import { NavLink } from "react-router-dom";

// import SearchBar from "../SearchBar";
// import SideBar from "./SideBar";

// const LogoSvg = require('../../../assets/whyfabric-logo.svg');

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  header: {
    position: 'static',
    backgroundColor: '#fff',
    boxShadow: 'none',
    padding: '5px 0',
  },
  headerLeft: {
    flexBasis: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerRight: {
    flexBasis: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuButton: {
    color: '#636363',
  },
  lable: {
    fontSize: '1.5rem',
    color: '#fff',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button_add_theory: {
    backgroundColor: '#29b6f6',
    color: '#fff',
    borderRadius: '3px',
    padding: '8px 20px',
    fontSize: '0.7rem',
    boxShadow: '0 2px 3px -1px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#0db1fb',
    },
  },
  searchArea: {
    flexBasis: '40%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: '#f9f9f9',
    borderRadius: '3px',
    margin: '0 20px',
    padding: '3px',
  },
  searchField: {
    width: '100%',
    padding: '0 10px',
    '&:before': {
      content: '',
    },
    '& label': {
      color: 'red',
    },
  },
  searchFieldHide: {
    visibility: 'hidden',
  },
  underline: {
    '&:after': {
      cursor: 'pointer',
      borderBottom: '1px solid #8a8a8a', // focus underline
    },
    '&:before': {
      borderBottom: '1px solid transparent', // hover underline
    },
    '&:hover': {
      '&:not(.Mui-disabled)': {
        '&:before': {
          borderBottom: '1px solid #b9b9b9', // hover underline
        },
      },
    },
  },
  searchButton: {
    cursor: 'pointer',
    backgroundColor: '#0db1fb',
    borderRadius: '3px',
    padding: '8px',
    boxShadow: '0 2px 3px -1px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#0db1fb',
    },
  },
  searchIcon: {
    fill: '#fff',
  },
  avatar: {
    width: '45px',
    height: '45px',
  },
  buttonMenu: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
  },
  logo: {
    maxWidth: '150px',
  },
});

const StyledMenu = withStyles({
  paper: {
    boxShadow: '3px 5px 15px 1px rgba(0, 0, 0, .3)',
    top: '72px !important',
    right: '0 !important',
    left: 'auto !important',
  },
})((props) => (
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
    {...props}
  />
));

const Logo = () => {
  const classes = useStyles();
  return (
    <NavLink to="/">
      <div className={classes.logo}>
        <img src="/whyfabric-logo.svg" className={classes.logo} />
      </div>
    </NavLink>
  );
};

const HeaderComponent = (props) => {
  const [showSearchStatus, setValueStatus] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerLeft}>
            <Logo />
          </div>
          <div className={classes.headerRight}>
            <SearchBar />
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleClick}
              className={classes.buttonMenu}
            >
              MENU
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <SideBar />
            </StyledMenu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default HeaderComponent;
