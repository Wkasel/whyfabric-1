import React from "react";

import { makeStyles } from "@material-ui/styles";

import NameAndDescription from "./PreviewComponents/NameAndDescription";
import Nodes from "./PreviewComponents/Nodes";

const useStyles = makeStyles({
  container: {
    width: "560px",
    paddingLeft: "40px"
  },
  containerHide: {
    display: "none"
  }
});

const TheoryPreview = props => {
  const classes = useStyles();
  const previewComponents = step => {
    switch (step) {
      case 2:
        return (
          <NameAndDescription theoryId={props.theoryId} step={props.step} />
        );
      case 3:
        return (
          <NameAndDescription theoryId={props.theoryId} step={props.step} />
        );
      case 4:
        return (
          <>
            <NameAndDescription theoryId={props.theoryId} step={props.step} />
            <Nodes
              theoryId={props.theoryId}
              reloadNodes={props.reloadNodes}
              setReload={props.setReload}
              editApexNode={props.editApexNode}
              editNode={props.editNode}
            />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div
      className={props.step >= 5 ? classes.containerHide : classes.container}
    >
      {previewComponents(props.step)}
    </div>
  );
};

export default TheoryPreview;
