import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Content from './Content';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from 'src/aws-exports';
import { createTheory } from 'src/graphql/mutations';
Amplify.configure(awsconfig);

const validationSchema = Yup.object({
  topic: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
});

const Form = ({ onSubmit }) => {
  const { theory, saveTheory } = React.useContext(TheoryContext);

  const handleSubmit = async (values) => {
    const me = await Auth.currentAuthenticatedUser();
    const { data, errors } = await API.graphql(
      graphqlOperation(createTheory, {
        input: {
          name: values.name,
          ownerID: me.username,
          categories: [{ name: values.category }],
        },
      })
    );
    saveTheory(data.createTheory);
    onSubmit();
  };

  return (
    <Formik
      initialValues={{
        topic: theory.topic || '',
        category: theory.category || '',
        isNumberSequence: theory.isNumberSequence || false,
        name: theory.name || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => <Content {...formik} />}
    </Formik>
  );
};

export default Form;
