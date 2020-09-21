import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Content from './Content';

const validationSchema = Yup.object({
  description: Yup.string().required('Required'),
  reference: Yup.string().required('Required'),
});

const AddPanel = ({ connIndex, onClose }) => {
  const { theory, saveTheory } = React.useContext(TheoryContext);
  const { description, reference } = theory.connections[connIndex];

  const handleSubmit = (values) => {
    const connections = [];
    connections[connIndex] = values;
    saveTheory({ connections });
    onClose();
  };

  return (
    <Formik
      initialValues={{
        description: description || '',
        reference: reference || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => <Content {...formik} onClose={onClose} />}
    </Formik>
  );
};

export default AddPanel;
