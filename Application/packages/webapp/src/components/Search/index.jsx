import React, { useState, useEffect } from 'react';
import Router from 'next/router';

// Material UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Styles
import { useStyles } from './styles';

const SearchBarComponent = () => {
  const [showSearchStatus, setValueStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();
  const updateTerm = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  const searchAndGo = () => {
    const term = searchTerm;
    console.log(term);
    Router.push(`/search/${term}`);
  };

  return (
    <Box component="span" m={1} className={classes.root}>
      <form className={classes.searchArea}>
        <TextField
          placeholder="Search causal event"
          variant="filled"
          className={classes.searchField}
          onChange={updateTerm}
          InputProps={{ classes: { underline: classes.underline } }}
        />
        <IconButton className={classes.searchButton} onClick={searchAndGo}>
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      </form>
    </Box>
  );
};
export default SearchBarComponent;
