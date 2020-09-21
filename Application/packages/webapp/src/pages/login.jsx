import React, { useState } from 'react';
// import fetch from 'isomorphic-unfetch';
// import { login } from '@util/auth';

import UserLogin from '@sections/UserLogin';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', error: '' });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(credentials);
    console.log('auth');
  };
  return (
    <>
      <UserLogin googleAuthCallback={handleSubmit} />
    </>
  );
};

LoginPage.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  return `http://localhost:4000/auth/google`;
};
export default LoginPage;
