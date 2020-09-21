import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

const MainTheme = createMuiTheme({
  overrides: {
    MuiCardHeader: {
      action: {
        margin: 0,
      },
    },

    MuiSelect: {
      selectMenu: {
        paddingLeft: 4,
      },
    },
  },
  palette: {
    /*  type: 'dark', */
    primary: {
      main: grey[50],
    },
    secondary: {
      main: lightBlue[500],
    },
    tonalOffset: 0.4,
  },
  typography: {
    h1: {
      fontSize: '3.2rem',
    },
    overline: {
      fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
        ','
      ),
    },
  },
});

export default MainTheme;
