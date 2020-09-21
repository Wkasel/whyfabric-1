import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  select: {
    marginBottom: '18px',
    maxWidth: '263px',
  },
  switch: {
    margin: '14px 0 18px 0',
  },
  helpContent: {
    width: '360px',
    '& > * + *': {
      marginTop: '16px',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '40px',
  },
});
