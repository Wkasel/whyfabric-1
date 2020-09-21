import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import _merge from 'lodash/merge';

import Slider from '@components/Slider';
import Step1 from './Steps/step1';
import Step2 from './Steps/step2';
import Step3 from './Steps/step3';
import Step5 from './Steps/step5';
import Step6 from './Steps/step6';
import Step7 from './Steps/step7';
import { useStyles } from './styles';

const stepComponents = [Step1, Step2, Step3, Step3, Step5, Step6, Step7];

export const TheoryContext = React.createContext();

export default function NewTheory() {
  const classes = useStyles();
  const [theory, setTheory] = useState({});
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log('theory:', theory);
  }, [theory]);

  const saveTheory = (data) => setTheory({ ..._merge(theory, data) });
  const nextStep = () => setStep(step + 1);
  const StepComponent = stepComponents[step - 1];

  return (
    <TheoryContext.Provider value={{ theory, saveTheory }}>
      <div className={classes.root}>
        <Grid container spacing={10} className={classes.slider}>
          <Grid item xs={12} md={6}>
            <Slider min={1} max={7} value={step} />
          </Grid>
        </Grid>
        <StepComponent onComplete={nextStep} />
      </div>
    </TheoryContext.Provider>
  );
}
