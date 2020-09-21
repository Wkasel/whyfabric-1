import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Content from './Content';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from 'src/aws-exports';
import { updateTheory } from 'src/graphql/mutations';
Amplify.configure(awsconfig);

const validationSchema = Yup.object({
  description: Yup.string().required('Required'),
});

const Form = ({ onSubmit }) => {
  const { theory, saveTheory } = React.useContext(TheoryContext);

  const handleSubmit = async (values) => {
    const me = await Auth.currentAuthenticatedUser();
    const { data, errors } = await API.graphql(
      graphqlOperation(updateTheory, {
        input: {
          id: theory.id,
          description: values.description,
        },
      })
    );
    saveTheory(data.updateTheory);
    onSubmit();
  };

  return (
    <Formik
      initialValues={{ description: theory.description || '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => <Content {...formik} />}
    </Formik>
  );
};

export default Form;
