import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { ListItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  itemFileList: {
    marginTop: '10px',
    boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.25)',
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      marginBottom: '0',
    },
  },
});

const DownloadFileCard = (props) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.itemFileList}>
      <p>{props.item.name}</p>
      <IconButton onClick={() => props.deleteFile(props.index, props.item)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default DownloadFileCard;
