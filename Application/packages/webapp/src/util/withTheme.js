import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import getPageContext from './getPageContext';

const withPageContext = getPageContext();

export default (Component) => (props) => (
  <ThemeProvider theme={withPageContext.theme}>
    <Component {...props} />
  </ThemeProvider>
);
