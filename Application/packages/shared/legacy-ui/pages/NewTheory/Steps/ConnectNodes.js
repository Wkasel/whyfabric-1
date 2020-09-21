import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

import ConnectionItemList from "../../../elements/interfaceElements/ConnectionItemList";
import { CommonButton } from "../../../elements/formElements/Buttons";
import List from "@material-ui/core/List";

import { theoriesRequests, connectionsRequests } from "../../../../utils/API";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "auto",
    position: "relative",
    marginTop: "20px",
    padding: "25px 20px",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25)",
    backgroundColor: "#fff"
  },
  box: {
    width: "100%"
  },
  table: {
    width: "100%"
  },
  select: {
    maxWidth: "500px",
    margin: "0 auto"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px"
  },
  list: {
    overflow: "auto",
    padding: "0 20px"
  }
});

const ConnectNodes = props => {
  const classes = useStyles();
  const [events, getEvents] = useState([]);
  const [connections, getConnections] = useState([]);
  const [loadConnections, setLoadConnections] = useState(false);

  useEffect(() => {
    theoriesRequests
      .getEventsByTheoryId(props.theoryId)
      .then(data => getEvents(data.data));

    connectionsRequests
      .getConnectionsByTheoryId(props.theoryId)
      .then(data => getConnections(data.data));
  }, []);

  useEffect(() => {
    connectionsRequests.getConnectionsByTheoryId(props.theoryId).then(data => {
      console.log("upate");
      getConnections(data.data);
    });
  }, [setLoadConnections]);

  const addConnections = (firstEvent, secondEvent) => {
    connectionsRequests
      .connectEvents(firstEvent._id, secondEvent._id, props.theoryId, {})
      .then(data => {
        setLoadConnections(!loadConnections);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div>
          <h4>Connect Nodes</h4>
        </div>

        <List className={classes.list}>
          {events.map((item, index) => {
            return (
              <ConnectionItemList
                item={item}
                key={index}
                events={events}
                connections={connections}
                onChange={addConnections}
              />
            );
          })}
        </List>
      </div>
      <div className={classes.buttonContainer}>
        <CommonButton value="NEXT" onClick={props.nextStep} />
      </div>
    </div>
  );
};

export default ConnectNodes;
