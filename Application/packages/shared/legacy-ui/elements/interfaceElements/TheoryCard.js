import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles({
  container: {
    width: "100%",
    borderBottom: "3px solid #d7d7d7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  copyButton: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#29b6f6"
  }
});

const TheoryCard = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <h3>How Brexit Started</h3>
        <p>By: SME Name</p>
      </div>
      <div>
        <IconButton>
          <VolumeUpIcon />
        </IconButton>
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton>
          <PlayArrowIcon />
        </IconButton>
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </div>
      <div>
        <button className={classes.copyButton}>COPY</button>
      </div>
    </div>
  );
};

export default TheoryCard;
