import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#03A9F4',
      },
      secondary: {
        main: '#673AB7',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  }),
);

export default theme;
