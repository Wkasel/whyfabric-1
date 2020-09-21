import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
// import SyncIcon from "@material-ui/icons/Sync";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "60px",
    marginBottom: "20px",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25)",
    display: "grid",
    gridTemplateColumns: "0.05fr 0.5fr 1.7fr 1fr 0.7fr",
    gridTemplateRows: "1fr",
    paddingRight: "20px",
    backgroundColor: "#fff"
  },
  closeButton: {
    position: "absolute",
    width: "15px",
    right: "20px",
    top: "18px"
  },
  // COLORS
  minorColor: {
    color: "#ffd037",
    display: "flex",
    alignItems: "center",
    marginBottom: "0"
  },
  mediumColor: {
    color: "#ffa733",
    display: "flex",
    alignItems: "center",
    marginBottom: "0"
  },
  majorColor: {
    color: "#c13c13",
    display: "flex",
    alignItems: "center",
    marginBottom: "0"
  },
  // BACKGROUNDS
  minorBackground: {
    backgroundColor: "#ffd037",
    position: "relative"
  },
  mediumBackground: {
    backgroundColor: "#ffa733",
    position: "relative"
  },
  majorBackground: {
    backgroundColor: "#c13c13",
    position: "relative"
  },
  figureContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  //
  figureTop: {
    borderBottom: "20px solid #29b6f6",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    display: "block",
    width: "0",
    height: "0"
  },
  figureDown: {
    borderTop: "20px solid #29b6f6",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    display: "block",
    width: "0",
    height: "0"
  },
  figureСircle: {
    width: "30px",
    height: "30px",
    backgroundColor: "#29b6f6",
    borderRadius: "50%"
  },
  date: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0"
  },
  buttonsArea: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  editButton: {
    background: "transparent",
    border: "none",
    outline: "none",
    fontSize: "0.7rem",
    color: "#bdbdbd",
    cursor: "pointer"
  }
});

const NodeCard = props => {
  const classes = useStyles();
  if (props.nodeData) {
    return (
      <div className={classes.container}>
        <div
          className={
            props.nodeData.impact === "1"
              ? classes.minorBackground
              : props.nodeData.impact === "2"
              ? classes.mediumBackground
              : classes.majorBackground
          }
        >
          <CloseIcon
            className={classes.closeButton}
            onClick={
              props.apexNode
                ? () => props.deleteApexNode(props.nodeData._id)
                : () => props.deleteNode(props.nodeData._id)
            }
          />
        </div>
        <div className={classes.figureContainer}>
          {props.apexNode ? (
            <div>
              <span className={classes.figureTop}></span>
              <span className={classes.figureDown}></span>
            </div>
          ) : (
            <div className={classes.figureСircle}></div>
          )}
        </div>
        <p
          className={
            props.nodeData.impact === "1"
              ? classes.minorColor
              : props.nodeData.impact === "2"
              ? classes.mediumColor
              : classes.majorColor
          }
        >
          {props.nodeData.name}
        </p>
        <p className={classes.date}>{props.nodeData.date}</p>
        <div className={classes.buttonsArea}>
          <div>
            <button
              className={classes.editButton}
              onClick={
                props.apexNode
                  ? props.editApexNode
                  : () => props.editNode(props.nodeData._id)
              }
            >
              EDIT
            </button>
          </div>

          <div>
            <IconButton>
              <CheckIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NodeCard;
