import React, { useState, useEffect } from "react";

import JustifyConnectionItemList from "../../../elements/interfaceElements/JustifyConnectionItemList";

import { theoriesRequests, connectionsRequests } from "../../../../utils/API";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  box: {
    width: "100%"
  },
  container: {
    width: "100%",
    height: "auto%",
    position: "relative",
    marginTop: "20px",
    padding: "25px 20px",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25)",
    backgroundColor: "#fff"
  }
});

const JustifyYourConnections = props => {
  const classes = useStyles();
  const [events, getEvents] = useState(null);
  const [connections, getConnections] = useState(null);
  useEffect(() => {
    theoriesRequests
      .getEventsByTheoryId(props.theoryId)
      // .getEventsByTheoryId("12345")
      .then(data => getEvents(data.data));

    connectionsRequests.getConnectionsByTheoryId(props.theoryId).then(data => {
      getConnections(data.data);
    });
  }, []);
  return (
    <div className={classes.box}>
      {connections && events ? (
        <div className={classes.container}>
          <div>
            <h4>Justify Your Connections</h4>
          </div>
          {connections.map((connection, index) => {
            return (
              <JustifyConnectionItemList
                connection={connection}
                events={events}
                key={index}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default JustifyYourConnections;
