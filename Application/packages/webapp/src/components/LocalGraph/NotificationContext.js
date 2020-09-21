import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { GraphContext } from './GraphContext';

export const NotificationContext = React.createContext();

const NotificationContextProvider = (props) => {
  const { state, dispatch } = useContext(GraphContext);
  console.log(state);
  return <SnackbarProvider maxSnack={5}>{props.children}</SnackbarProvider>;
};

export default NotificationContextProvider;
