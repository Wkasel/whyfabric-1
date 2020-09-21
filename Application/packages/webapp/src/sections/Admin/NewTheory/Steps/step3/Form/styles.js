import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  name: {
    marginBottom: '18px',
  },
  dateBox: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '18px',
    '& > label': {
      marginLeft: '30px',
    },
  },
  datepicker: {
    '& .MuiFormHelperText-root': {
      marginTop: '8px',
      fontSize: '10px',
      fontWeight: 500,
      textAlign: 'right',
      textTransform: 'uppercase',
    },
  },
  iconButtons: {
    marginTop: '-20px',
    '& button + button': {
      marginLeft: '15px',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '32px',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
  },
});
