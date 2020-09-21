import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  helpContent: {
    width: '160px',
    '& > * + *': {
      marginTop: '16px',
    },
    '& button': {
      color: 'inherit',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
  },
});
