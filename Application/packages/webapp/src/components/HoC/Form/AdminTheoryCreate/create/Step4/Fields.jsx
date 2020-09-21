import { Dispatch, Fragment, FunctionComponent, useState } from 'react';

import { Field, FieldArray, Form, FormikProps } from 'formik';

import useStyles from '../Styles';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import { SwitchInputField } from '@fields/Switch/Switch';
import TagsField from '@fields/Tag/TagField';
import { TextInputField } from '@fields/Text/TextField';
import { SelectInputField } from '@fields/Select/Select';
import { DateTimeInputField } from '@fields/DateTime';
// import { i18n, withNamespaces } from '@i18n'
import Button from '@material-ui/core/Button';
// import { TranslateFn } from "StatelessPage";

export const AdminTheoryCreateFields = ({ fProps }) => {
  const classes = useStyles();

  return (
    <Form autoComplete="off" data-lpignore="true">
      <Typography variant="h4">Node Details</Typography>
      <Field
        label="Describe the Node Here"
        id="nodeName"
        name="nodeName"
        required={true}
        component={SelectInputField}
      />
      <Field
        label="Date"
        id="apexDate"
        name="theoryCategory"
        required={true}
        component={DateTimeInputField}
      />
      <Box>
        <Field
          label="BC / AD"
          id="bySequence"
          name="bySequence"
          required={true}
          component={SwitchInputField}
        />
        <Field
          label="exact"
          id="exact"
          name="exact"
          required={true}
          component={SwitchInputField}
        />
      </Box>
      <Field
        label="More Information"
        name="slug"
        id="slug"
        required={true}
        multiline={true}
        component={TextInputField}
      />
      <Button fullWidth type="submit" variant="contained" size="large">
        Add Node
      </Button>
    </Form>
  );
};

// export default withNamespaces(["common", "fields"])();
// export default AdminTheoryCreateFields;
