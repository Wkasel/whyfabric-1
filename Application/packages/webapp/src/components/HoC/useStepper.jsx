import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useStyles } from './stepperStyles';
/*
// ****
//
// Stepper Hook emits:
//
// steps
// handleReset,
// handleComplete,
// handleStep,
// handleBack,
// handleNext,
// allStepsCompleted,
// isLastStep,
// completedSteps,
// activeStep
//
// ***
// */

// <Typography className={classes.instructions}>
//   Step {stepper.activeStep}
// </Typography>
export const StepperButtons = (stepper) => {
  // console.log(stepper);
  const classes = useStyles();
  return (
    <div>
      <div>
        <Button
          disabled={stepper.activeStep === 0}
          onClick={stepper.handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={stepper.handleNext}
          className={classes.button}
        >
          Next
        </Button>
        {stepper.activeStep !== stepper.steps.length &&
          (stepper.completed[stepper.activeStep] ? (
            <Typography variant="caption" className={classes.completed}>
              Step {stepper.activeStep + 1} already completed
            </Typography>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={stepper.handleComplete}
            >
              {stepper.completedSteps() === stepper.totalSteps() - 1
                ? 'Finish'
                : 'Complete Step'}
            </Button>
          ))}
      </div>
    </div>
  );
};

export const useStepper = (steps, initial = 0) => {
  const [activeStep, setActiveStep] = React.useState(initial);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
    // return 7;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
    // return [{ 0: true }];
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
    return false;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return {
    steps,
    handleReset,
    handleComplete,
    handleStep,
    handleBack,
    handleNext,
    allStepsCompleted,
    isLastStep,
    totalSteps,
    completed,
    completedSteps,
    setCompleted,
    activeStep,
    setActiveStep,
  };
};
