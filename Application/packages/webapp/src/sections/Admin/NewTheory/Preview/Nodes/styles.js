import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  node: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '64px',
    '& button': {
      marginRight: '4px',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '34px',
    },
  },
  apexIcon: {
    margin: '0 24px',
    position: 'relative',
    top: '-15px',
    border: '12px solid transparent',
    borderBottom: '17px solid #f5b905',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '-12px',
      top: '17px',
      border: '12px solid transparent',
      borderTop: '17px solid #f5b905',
    },
  },
  icon: {
    margin: '0 24px',
    width: '24px',
    height: '24px',
    backgroundColor: '#673ab7',
    borderRadius: '50%',
  },
  name: {
    flex: 1,
    marginRight: '20px',
    maxHeight: '44px',
    lineHeight: '22px',
    fontSize: '16px',
    color: '#3b3b3b',
    overflow: 'hidden',
  },
  date: {
    marginRight: '20px',
    fontSize: '20px',
    color: 'rgba(117, 117, 117, 0.6)',
  },
  helpIcon: {
    margin: '0 -16px 80px -24px',
  },
  helpContent: {
    width: '160px',
    '& > * + *': {
      marginTop: '16px',
    },
    '& button': {
      color: 'inherit',
    },
  },
});
