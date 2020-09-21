import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  header: {
    marginTop: '-84px',
    marginBottom: '40px',
    '& .MuiIconButton-root': {
      marginLeft: '8px',
      '& .MuiSvgIcon-root': {
        fontSize: '38px',
      },
    },
    '& .MuiButton-contained': {
      marginLeft: '32px',
    },
  },
  paper: {
    position: 'relative',
    marginBottom: '30px',
    padding: '20px 28px 28px 28px',
    minHeight: '300px',
  },
  zoom: {
    position: 'absolute',
    right: '18px',
    bottom: '18px',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiSvgIcon-root': {
      fontSize: '38px',
    },
  },
});
