import React, { useState } from "react";

import { Slider } from "@material-ui/core";
import TheoryPreview from "./Steps/TheoryPreview/TheoryPreview";
import NewCasualTheory from "./Steps/NewCausalTheory";
import CasualTheoryDescription from "./Steps/CasualTheoryDescription";
import ApexNodeDetails from "./Steps/ApexNodeDetails";
import AddNode from "./Steps/AddNode";
import ConnectNodes from "./Steps/ConnectNodes";
import JustifyYourConnections from "./Steps/JustifyYourConnections";

import { theoriesRequests } from "../../../utils/API";

import { makeStyles } from "@material-ui/styles";
import "./newTheory.css";

const useStyles = makeStyles({
  stepper: {
    width: "300px",
    "& .MuiSlider-thumb": {
      width: "1px",
      height: "1px"
    },
    "& .MuiSlider-valueLabel>span": {
      width: "50px",
      height: "50px",
      backgroundColor: "#29b6f6",
      marginTop: "-15px",
      marginLeft: "-15px",
      fontSize: "1.1rem"
    },
    "& .MuiSlider-rail": {
      height: "3px",
      color: "#636363"
    },
    "& .MuiSlider-track": {
      height: "3px",
      color: "#29b6f6"
    },
    "& .MuiSlider-mark": {
      backgroundColor: "#000000",
      width: "3px",
      height: "3px",
      borderRadius: "50%"
    }
  }
});

const NewTheory = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(1);
  const [theoryId, setTheoryId] = useState("");
  const [reloadNodes, setReload] = useState(false);
  const [editNodeId, setEditNodeId] = useState(null);

  const getStepContent = step => {
    switch (step) {
      case 1:
        return (
          <NewCasualTheory
            createTheory={createTheory}
            nextStep={nextStep}
            theoryId={theoryId}
            editTheory={editTheory}
          />
        );
      case 2:
        return (
          <CasualTheoryDescription theoryId={theoryId} nextStep={nextStep} />
        );
      case 3:
        return <ApexNodeDetails theoryId={theoryId} nextStep={nextStep} />;
      case 4:
        return (
          <AddNode
            theoryId={theoryId}
            setReload={setReload}
            nextStep={nextStep}
            editNodeId={editNodeId}
            setEditNodeId={setEditNodeId}
          />
        );
      case 5:
        return <ConnectNodes theoryId={theoryId} nextStep={nextStep} />;
      case 6:
        return (
          <JustifyYourConnections theoryId={theoryId} nextStep={nextStep} />
        );
      default:
        return "Unknow step";
    }
  };
  const createTheory = (name, category) => {
    theoriesRequests
      .createBlankTheory(name, category)
      .then(data => {
        setTheoryId(data.data.success._id);
        nextStep();
      })
      .catch(err => console.log(err));
  };
  const editTheory = id => {
    setTheoryId(id);
    setActiveStep(4);
  };
  const editApexNode = () => {
    setActiveStep(3);
  };
  const editNode = nodeId => {
    setEditNodeId(nodeId);
  };
  const nextStep = () => {
    activeStep >= 6 ? setActiveStep(6) : setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    activeStep <= 1 ? setActiveStep(1) : setActiveStep(activeStep - 1);
  };
  return (
    <div className="new_theory_container">
      <div>
        <Slider
          className={classes.stepper}
          disabled
          value={activeStep}
          min={1}
          max={6}
          aria-labelledby="discrete-slider-always"
          marks
          step={1}
          valueLabelDisplay="on"
        />
      </div>

      <button onClick={prevStep}>minus</button>
      <button onClick={nextStep}>plus</button>
      <div className="new_theory_edit_container">
        {getStepContent(activeStep)}

        {activeStep >= 2 ? (
          <TheoryPreview
            step={activeStep}
            theoryId={theoryId}
            reloadNodes={reloadNodes}
            setReload={setReload}
            editApexNode={editApexNode}
            editNode={editNode}
          />
        ) : null}
      </div>
    </div>
  );
};
export default NewTheory;
