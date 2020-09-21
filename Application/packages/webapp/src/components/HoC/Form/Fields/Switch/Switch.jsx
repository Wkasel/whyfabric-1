import { FunctionComponent } from 'react';

import { Omit } from 'global';

import { FieldProps } from 'formik';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch, { SwitchProps } from '@material-ui/core/Switch';

export const formikToSwitch = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => {
  return {
    ...field,
    ...props,
    checked: field.value,
    disabled: isSubmitting || disabled,
    value: field.name,
  };
};

export const SwitchInputField = (props) => {
  return (
    <FormControlLabel
      control={
        <Switch
          {...formikToSwitch(props)}
          color={props.color ? props.color : 'primary'}
        />
      }
      label={props.label}
    />
  );
};

Switch.displayName = 'FormUI input - Switch';
