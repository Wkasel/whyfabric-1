import { Dispatch, Fragment, FunctionComponent, useState } from 'react';

import { Field, FieldArray, Form, FormikProps } from 'formik';

import useStyles from '../Styles';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import { SwitchInputField } from '@fields/Switch/Switch';
import TagsField from '@fields/Tag/TagField';
import { TextInputField } from '@fields/Text/TextField';
import { SelectInputField } from '@fields/Select/Select';
// import { i18n, withNamespaces } from '@i18n'
import Button from '@material-ui/core/Button';
// import { TranslateFn } from "StatelessPage";

export const AdminTheoryCreateFields = ({ fProps }) => {
  const classes = useStyles();

  return (
    <Form autoComplete="off" data-lpignore="true">
      <Typography variant="h4">Causal Theory Description</Typography>
      <Field
        label="Description"
        name="slug"
        id="slug"
        required
        multiline
        fullWidth
        component={TextInputField}
      />
    </Form>
  );
};

// export default withNamespaces(["common", "fields"])();
// export default AdminTheoryCreateFields;
