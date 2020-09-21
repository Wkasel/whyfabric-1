import React, { Suspense } from 'react';

const isServer = typeof window === 'undefined';

export const withSuspense = (Component) => {
  return (
    <>
      {!isServer ? (
        <Component />
      ) : (
        <Suspense fallback="loading">
          <Component />
        </Suspense>
      )}
    </>
  );
};
