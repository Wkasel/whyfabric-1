import ProfileView from '@sections/Profile/View';

export default function ProfileViewPage() {
  return (
    <>
      <ProfileView />
      <style global jsx>
        {`
          body {
            background-color: #fff !important;
          }
        `}
      </style>
    </>
  );
}
