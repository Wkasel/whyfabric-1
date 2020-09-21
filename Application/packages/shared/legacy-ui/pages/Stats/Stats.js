import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    padding: "80px"
  }
});

const Stats = () => {
  const classes = useStyles();

  return <div className={classes.container}></div>;
};
export default Stats;
