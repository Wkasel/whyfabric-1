import { Formik, FormikActions } from 'formik';

import { AdminTheoryCreateFields } from './Fields';
// import { theoryCreateSchema_Step1 } from "../ValidationSchema";

const initialValues = {
  isPublished: false,
  slug: '',
  tags: [
    {
      color: '',
      contents: {
        title: '',
      },
    },
  ],
};

const CreateTheoryStep3 = (props) => {
  const { submitFn } = props;
  const submitHandler = async (values, formikActions) => {
    formikActions.setSubmitting(false);

    formikActions.resetForm();

    await submitFn({
      variables: {
        data: {
          // author: { connect: { id: user.id } },
          contents: {
            create: [
              {
                description: values.description,
                title: values.title,
              },
            ],
          },
          isPublished: values.isPublished,
          slug: values.slug,
        },
      },
    });
  };

  const resetHandler = (_values, formikActions) => {
    formikActions.setValues(initialValues);
  };

  // const required = t("validation:required");
  // const str_min = t("validation:str_min");

  return (
    <Formik
      initialValues={initialValues}
      onReset={resetHandler}
      onSubmit={submitHandler}
    >
      {(fProps) => <AdminTheoryCreateFields fProps={{ ...fProps }} />}
    </Formik>
  );
};

// validationSchema={theoryCreateSchema({})}
// CreateTheoryStep2.displayName = "Theory Create Form";

export default CreateTheoryStep3;
