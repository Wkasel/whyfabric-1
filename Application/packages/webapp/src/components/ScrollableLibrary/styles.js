import { createStyles, makeStyles } from '@material-ui/core/styles';
// fade,
// Theme,
// theme: Theme
export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    theoryLibraryItem: {
      backround: '#ff00ff',
    },
    theoryLibraryContainer: {
      width: '500%',
      'overflow-x': 'auto',
    },
  })
);
