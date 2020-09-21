import React from 'react';

// Material UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// Dynamic Imports
import dynamic from 'next/dynamic';
// import { SnackbarProvider } from "notistack";
const Graph = dynamic(() => import('./Graph'), {
  ssr: false,
  loading: () => <LinearProgress />,
});
// const NotificationContextProvider = dynamic(
//   () => import("./NotificationContext"),
//   { ssr: false }
// );
// const GraphProvider = dynamic(() => import("./GraphContext"), { ssr: false });

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

const LocalGraph = () => {
  const classes = useStyles();

  return (
    <>
      <Graph />;
    </>
  );
};

export default LocalGraph;
