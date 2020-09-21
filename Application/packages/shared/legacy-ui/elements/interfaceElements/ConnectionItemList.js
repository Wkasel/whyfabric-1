import React from "react";

import { ConnectionSelector } from "../formElements/Selector";
import ListItem from "@material-ui/core/ListItem";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  contaiter: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "15px",
    borderBottom: "1px solid #d7d7d7",
    "& >div": {
      width: "40%"
    }
  }
});

const ConnectionItemList = props => {
  const classes = useStyles();

  const handleChange = secondNode => {
    props.onChange(props.item, secondNode);
  };

  return (
    <ListItem className={classes.contaiter}>
      <div className={classes.name}>{props.item.name}</div>
      <div className={classes.selector}>
        <ConnectionSelector
          element={props.item}
          connections={props.connections}
          events={props.events}
          onChange={handleChange}
        />
      </div>
    </ListItem>
  );
};

export default ConnectionItemList;
