import { Omit } from 'global';

import TextField, { TextFieldProps } from '@material-ui/core/TextField';

import { FieldProps, getIn } from 'formik';

// export interface FormUITextFieldProps
//   extends FieldProps,
//     Omit<TextFieldProps, "error" | "name" | "onChange" | "value"> {
//   lpignore: boolean; // LastPass (password manager) ignore field
// }

export const formikToTextField = ({
  field,
  form,
  variant = 'standard',
  disabled = false,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;
  const fieldError = getIn(errors, name);

  const showError = getIn(touched, name) && !!fieldError;
  if (!props.helperText || props.helperText === '') {
    props.helperText = ' ';
  }

  return {
    ...props,
    ...field,
    // Hack to work around type issue
    // See: https://github.com/Microsoft/TypeScript/issues/28791
    disabled: isSubmitting || disabled,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    variant: variant,
  };
};

export const TextInputField = ({ children, ...props }) => {
  return (
    <TextField
      margin="normal"
      inputProps={{ 'data-lpignore': props.lpignore }}
      value={props.field.value ? props.field.value : ' '}
      required={props.required}
      children={children}
      {...formikToTextField(props)}
    />
  );
};

TextInputField.displayName = 'FormUI input - Text';
