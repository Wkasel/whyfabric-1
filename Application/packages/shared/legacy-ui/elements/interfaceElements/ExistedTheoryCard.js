import React from "react";

import { makeStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CustomTooltip from "./CustomTooltip";
import HtmlTooltip from "@material-ui/core/Tooltip/Tooltip";

import "./theoryExist.css";

const useStyles = makeStyles({
  container: {
    width: "100%"
  },
  label: {
    width: "100%",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p": {
      margin: "0",
      color: "#29b6f6",
      cursor: "pointer"
    },
    "& h4": {
      margin: "0",
      fontWeight: "bold",
      fontSize: "1.8rem",
      cursor: "pointer"
    }
  },
  avatar: {
    width: "45px",
    height: "45px"
  },
  authorName: {
    marginBottom: "0",
    fontSize: ".9rem",
    fontWeight: "500",
    paddingLeft: "10px"
  }
});

const ExistedTheoryCard = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.label}>
        <h4 onClick={() => props.chooseTheory(props.index)}>
          {props.theoryData.name}
        </h4>
      </div>
      <HtmlTooltip
        className={classes.tooltip}
        disableFocusListener
        disableTouchListener
        title={
          <React.Fragment>
            <CustomTooltip
              title="3 Theory Exist"
              text="Copy one as a starting point or start a new one"
            />
          </React.Fragment>
        }
        placement="top-end"
      >
        <Grid container alignItems="center">
          <Avatar className={classes.avatar} />
          <p className={classes.authorName}>Edgor Petrov</p>
        </Grid>
      </HtmlTooltip>

      {/*<div className={classes.graph}></div>*/}
      {/*<p className={classes.viewDetails}>VIEW DETAILS</p>*/}
    </div>
  );
};

export default ExistedTheoryCard;
