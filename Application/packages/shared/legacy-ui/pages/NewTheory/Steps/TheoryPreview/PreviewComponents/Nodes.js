import React, { useState, useEffect } from "react";
import NodeCard from "../../../../../elements/interfaceElements/NodeCard";
import {
  apexNodesRequests,
  eventsRequests,
  theoriesRequests
} from "../../../../../../utils/API";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  nodeList: {
    height: "480px",
    overflowY: "scroll",
    width: "calc(100% + 60px)",
    padding: "10px 20px 0 40px",
    marginTop: "20px",
    marginLeft: "-40px"
  }
});

const NodeList = props => {
  const classes = useStyles();
  const [insideReload, setInsideReload] = useState(false);

  useEffect(() => {
    console.log(1);
    apexNodesRequests
      .getApexNodeByTheoryId(props.theoryId)
      .then(data => {
        getApexNode(data.data);
      })
      .catch(err => console.log(err));
  }, [props.reloadNodes, insideReload]);

  useEffect(() => {
    theoriesRequests
      .getEventsByTheoryId(props.theoryId)
      .then(data => {
        getEvents(data.data);
        props.setReload(false);
      })
      .catch(err => console.log(err));
  }, [props.reloadNodes, insideReload]);

  const deleteNode = nodeId => {
    console.log(nodeId);
    eventsRequests
      .deleteEvent(nodeId)
      .then(data => {
        console.log(data);
        setInsideReload(!insideReload);
      })
      .catch(err => console.log(err));
  };

  const deleteApexNode = apexNodeId => {
    console.log(apexNodeId);
    apexNodesRequests
      .deleteApexNode(apexNodeId)
      .then(data => {
        console.log(data);
        setInsideReload(!insideReload);
      })
      .catch(err => console.log(err));
  };

  const [apexNode, getApexNode] = useState(null);
  const [events, getEvents] = useState([]);

  return (
    <div className={classes.nodeList}>
      <div>
        {apexNode ? (
          <NodeCard
            apexNode
            nodeData={apexNode}
            deleteApexNode={deleteApexNode}
            editApexNode={props.editApexNode}
          />
        ) : null}
        {events.map((item, index) => (
          <NodeCard
            key={index}
            nodeData={item}
            deleteNode={deleteNode}
            editNode={props.editNode}
          />
        ))}
      </div>
    </div>
  );
};

export default NodeList;
