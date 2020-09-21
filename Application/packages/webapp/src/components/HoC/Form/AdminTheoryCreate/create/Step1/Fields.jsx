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
      <Typography variant="h4">Create Theory</Typography>
      <Field
        select
        label="Theory Topic"
        id="theoryTopic"
        name="theoryTopic"
        required={true}
        fullWidth
        component={TextInputField}
      >
        <option value="Yesterday">Yesterday</option>
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
      </Field>
      <Field
        select
        label="Theory Category"
        id="theoryCategory"
        name="theoryCategory"
        required
        fullWidth
        component={TextInputField}
      >
        <option value="history">History</option>
      </Field>
      <Field
        label="Sequence"
        id="bySequence"
        name="bySequence"
        required={true}
        fullWidth={true}
        component={SwitchInputField}
      />
      <Field
        label="Name"
        name="slug"
        id="slug"
        required={true}
        fullWidth={true}
        component={TextInputField}
      />
    </Form>
  );
};

// export default withNamespaces(["common", "fields"])();
// export default AdminTheoryCreateFields;
