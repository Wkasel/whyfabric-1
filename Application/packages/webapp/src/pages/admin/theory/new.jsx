import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import NewTheory from '@sections/Admin/NewTheory';

const NewTheoryPage = () => {
  return (
    <>
      <AmplifySignOut />
      <NewTheory />
    </>
  );
};
export default withAuthenticator(NewTheoryPage);
