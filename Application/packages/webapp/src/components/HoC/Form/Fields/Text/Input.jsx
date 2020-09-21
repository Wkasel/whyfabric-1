import { Omit } from 'global';
import { FunctionComponent, useEffect, useState } from 'react';

import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';
import { FieldProps, getIn } from 'formik';

// interface InputWithHelperText extends InputProps {
//   helperText: string;
//   label: string;
//   required: boolean;
//   errorMessage: string;
//   disabled: boolean;
//   error: boolean;
// }

// export interface FormUIInputProps
//   extends FieldProps,
//     Omit<InputWithHelperText, "error" | "onChange" | "value"> {
//   error: boolean;
//   disabled: boolean;
//   errorMessage: string;
// }

export const formikToInput = ({ field, form, disabled = false, ...props }) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;
  const fieldError = getIn(errors, name);

  const showError = getIn(touched, name) && !!fieldError;

  return {
    ...props,
    ...field,
    disabled: isSubmitting || disabled,
    error: showError,
    errorMessage: fieldError,
    helperText: showError ? fieldError : props.helperText,
  };
};

export const InputField = ({ children, ...props }) => {
  const [helperText, setText] = useState(' ');
  useEffect(() => {
    setText(props.helperText);
  }, [props.errorMessage, props.field.value, props.helperText, props.disabled]);

  const helperTextId = `${props.field.name}-helper-text`;
  // aria-describedby={helperTextId}
  return (
    <>
      <FormControl
        error={props.error}
        fullwidth={props.fullwidth}
        isRequired={props.required}
      >
        {props.label && (
          <InputLabel
            error={props.error}
            required={props.required}
            htmlFor={props.id}
          >
            {props.label}
          </InputLabel>
        )}
        <Input
          aria-disabled={props.disabled}
          disabled={props.disabled}
          disableUnderline={props.disableUnderline}
          defaultValue={props.defaultValue}
          name={props.field.name}
          id={props.id}
          children={children}
          {...formikToInput(props)}
        />

        <FormHelperText
          aria-disabled={props.disabled}
          disabled={props.disabled}
          id={helperTextId}
          children={helperText ? helperText.toString() : ' '}
        />
      </FormControl>
    </>
  );
};

InputField.displayName = 'FormUI input - Text';
