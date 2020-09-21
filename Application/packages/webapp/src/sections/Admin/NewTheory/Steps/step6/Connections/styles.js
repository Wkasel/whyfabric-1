import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  paper: {
    marginBottom: '30px',
    padding: '22px 28px 28px 28px',
  },
  title: {
    marginBottom: '40px',
  },
  node: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '64px',
  },
  apexIcon: {
    margin: '0 24px',
    position: 'relative',
    top: '-15px',
    border: '12px solid transparent',
    borderBottom: '17px solid #F5b905',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '-12px',
      top: '17px',
      border: '12px solid transparent',
      borderTop: '17px solid #F5b905',
    },
  },
  nodeIcon: {
    margin: '0 24px',
    width: '24px',
    height: '24px',
    backgroundColor: '#673ab7',
    borderRadius: '50%',
  },
  nodeName: {
    flex: 1,
    marginRight: '20px',
    maxHeight: '44px',
    lineHeight: '22px',
    fontSize: '16px',
    color: '#3b3b3b',
    overflow: 'hidden',
  },
  nodeDate: {
    marginRight: '20px',
    fontSize: '20px',
    color: 'rgba(117, 117, 117, 0.6)',
  },
  arrow: {
    margin: '0 32px',
    color: '#3b3b3b',
    opacity: 0.5,
  },
  actions: {
    width: '160px',
    marginLeft: '32px',
  },
});
