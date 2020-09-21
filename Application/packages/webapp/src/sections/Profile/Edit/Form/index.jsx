import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { updateUser } from 'src/data/amplify/api';
import Content from './Content';

const validationSchema = Yup.object({
  // photo: Yup.string().required('Required'),
  // name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  // password: Yup.string().required('Required'),
  // interests: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  institution: Yup.string().required('Required'),
  biography: Yup.string().required('Required'),
  website: Yup.string().required('Required'),
  expertise: Yup.string().required('Required'),
  // awards: Yup.string().required('Required'),
  // works: Yup.string().required('Required'),
});

function ProfileForm({ user }) {
  const router = useRouter();

  const photoUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mem3to4h');
    return fetch('https://api.cloudinary.com/v1_1/dayr0oa6b/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => data.secure_url);
  };

  const handleSubmit = async (values) => {
    const info = {
      id: user.id,
      email: values.email,
      biography: values.biography,
    };

    if (values.photoFile) {
      info.photo = await photoUpload(values.photoFile);
    }

    await updateUser(info);

    router.push('/me');
  };

  return (
    <Formik
      initialValues={{
        photo: user.photo,
        fullname: `${user.firstName} ${user.lastName}`,
        email: user.email,
        password: user.password,
        interests: user.interests,
        title: user.title,
        institution: user.institution,
        biography: user.biography,
        website: user.website,
        expertise: user.expertise,
        awards: user.awards,
        works: user.works,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => <Content {...formik} />}
    </Formik>
  );
}

export default ProfileForm;
