import { createStyles, makeStyles } from '@material-ui/core/styles';
// fade,
// Theme,
// theme: Theme
export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      'padding-top': '100px',
    },
    headerContainer: {
      textAlign: 'center',
      'text-align': 'center',
    },
    welcome: {
      textAlign: 'center',
    },
    subheader: {
      'text-align': 'center',
      textAlign: 'center',
      color: '#757575',
    },
  })
);
