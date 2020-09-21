import React, { useState } from "react";

// import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

import NodeCard from "./NodeCardForConnections";
import TextArea from "../formElements/TextArea";

import { connectionsRequests } from "../../../utils/API";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "0.8fr 0.2fr 0.8fr 1.5fr",
    marginBottom: "20px"
  },
  arrowIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& svg':{
      [theme.breakpoints.down('md')]: {
        width: '0.7em',
      }
    }
  },
  urlInput: {
    display: "flex",
    alignItems: "flex-end",
    padding: "0 20px",
    '& input':{
      [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
      }
    }
  }
}));

const JustifyConnectionItemList = props => {
  const classes = useStyles();
  const [url, setUrl] = useState(props.connection.connectionText);

  const handleChangeUrl = e => {
    setUrl(e);
  };

  const sendUrl = e => {
    connectionsRequests.updateConnection(props.connection._id, e.target.value);
  };

  return (
    <div className={classes.container}>
      <div>
        <NodeCard
          nodeData={props.events.find(
            item => props.connection.event1 === item._id
          )}
        />
      </div>
      <div className={classes.arrowIcon}>
        <ArrowForwardIcon />
      </div>
      <div>
        <NodeCard
          nodeData={props.events.find(
            item => props.connection.event2 === item._id
          )}
        />
      </div>
      <div className={classes.urlInput}>
        <TextArea deleteMargin onChange={handleChangeUrl} onBlur={sendUrl} value={url}/>
      </div>
    </div>
  );
};

export default JustifyConnectionItemList;
