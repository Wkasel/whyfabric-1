import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 'calc(100% + 15px)',
    zIndex: 3,
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  description: {
    marginBottom: '18px',
  },
  iconButtons: {
    marginTop: '-20px',
    '& button + button': {
      marginLeft: '14px',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '32px',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '40px',
  },
});
