import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  voiceNote: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& .toggle-play-button': { background: 'transparent !important' },
    '& .play-icon': {
      borderLeft: '20px solid #29b6f6 !important',
    },
    '& .pause-icon': {
      backgroundColor: '#29b6f6 !important',
      borderLeft: '7px solid #29b6f6 !important',
      boxShadow: '#fff 7px 0px 0px 0px inset !important',
    },
    '& .indicator': {
      background: '#29b6f6 !important',
      opacity: '1 !important',
    },
    '& .progress-bar': {
      background: 'rgb(215, 215, 215) !important',
    },
    '& .volume-controls': {
      borderBottomColor: 'rgb(215, 215, 215) !important',
    },
    '& .volumn': {
      borderBottomColor: '#29b6f6 !important',
    },
  },
  deleteRecord: {
    zIndex: '1000',
    '& svg': {
      width: '24px',
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
});

const Player = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.voiceNote}>
      <div style={{ minWidth: '90%' }}>
        <AudioPlayer src={props.record} />
      </div>
      <div className={classes.deleteRecord}>
        <IconButton onClick={props.deleteNote}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Player;
