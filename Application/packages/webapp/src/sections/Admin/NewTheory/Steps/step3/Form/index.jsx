import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Content from './Content';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from 'src/aws-exports';
import { getTheory } from 'src/graphql/queries';
import { newEvent } from 'src/graphql/mutations';
import { addEventToTheory } from 'src/graphql/mutations';
Amplify.configure(awsconfig);

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

const Form = ({ onSubmit }) => {
  const { theory, saveTheory } = React.useContext(TheoryContext);
  const isApex = !theory.nodes;

  const handleSubmit = async (values, { resetForm }) => {
    const me = await Auth.currentAuthenticatedUser();
    const { data, errors } = await API.graphql(
      graphqlOperation(newEvent, {
        input: {
          name: values.name,
          description: values.description,
          date: values.date,
        },
      })
    );
    const event = data.newEvent;
    await API.graphql(
      graphqlOperation(addEventToTheory, {
        input: {
          eventID: event.id,
          theoryID: theory.id,
        },
      })
    );
    const resp = await API.graphql(
      graphqlOperation(getTheory, { id: theory.id })
    );

    saveTheory({
      ...resp.data.getTheory,
      nodes: [...(theory.nodes || []), event],
    });
    resetForm();
    isApex && onSubmit();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        date: null,
        isAD: false,
        isExact: false,
        description: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => <Content {...formik} isApex={isApex} />}
    </Formik>
  );
};

export default Form;
