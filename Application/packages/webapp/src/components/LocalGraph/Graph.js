import React from 'react';

import dynamic from 'next/dynamic';
import { SnackbarProvider } from 'notistack';

const GraphContainer = dynamic(() => import('./GraphContainer'), {
  ssr: false,
});
const NotificationContextProvider = dynamic(
  () => import('./NotificationContext'),
  { ssr: false }
);
const GraphProvider = dynamic(() => import('./GraphContext'), { ssr: false });

const Graph = () => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <GraphProvider>
        <GraphContainer />;
      </GraphProvider>
    </SnackbarProvider>
  );
};

export default Graph;
