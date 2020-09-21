import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  a: {
    '&:hover': {
      textDecoration: 'underline !important',
    },
  },
});

export default ({ url, className, children, ...props }) => {
  const classes = useStyles();
  const href = url.search(/https?:\/\//) === 0 ? url : `https://${url}`;

  return (
    <a
      href={href}
      className={clsx(classes.a, className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || url}
    </a>
  );
};
