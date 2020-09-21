import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import TextField from '@components/TextField';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const InviteForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('send email: ', values.email);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h5">
            Invite a Colleague to collaborate
          </Typography>
          <TextField
            {...formik.getFieldProps('email')}
            type="email"
            placeholder="newSME@gmail.com"
            InputProps={{
              endAdornment: (
                <IconButton type="submit" color="secondary">
                  <SendIcon />
                </IconButton>
              ),
            }}
          />
        </form>
      )}
    </Formik>
  );
};

export default InviteForm;
