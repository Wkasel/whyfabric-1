import { FunctionComponent } from 'react';

import { Omit } from 'global';

import { FieldProps } from 'formik';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// export interface FormUISwitchProps
//   extends FieldProps,
//     Omit<
//       SwitchProps,
//       "form" | "name" | "onChange" | "value" | "defaultChecked"
//     > {
//   label: string;
// }

export const formikToSelect = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => {
  return {
    ...field,
    ...props,
    selected: field.value,
    disabled: isSubmitting || disabled,
    value: field.name,
  };
};

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
    },
  })
);
// <Switch
//   {...formikToSwitch(props)}
//   color={props.color ? props.color : "primary"}
// />
export const SelectInputField = (props) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl} fullwidth={props.fullwidth}>
      <InputLabel>{props.label}</InputLabel>
      <Select value={props.value} onChange={props.changeFn}>
        <MenuItem value="reasd">asdasd</MenuItem>
      </Select>
    </FormControl>
  );
};

Select.displayName = 'FormUI input - Select';
