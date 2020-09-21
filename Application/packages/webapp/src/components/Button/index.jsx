import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  contained: {
    width: ({ width }) => (width ? `${width}px` : 'auto'),
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '2px',
  },
  text: {
    minWidth: 'initial',
    margin: (props) => (props.enablePadding ? 0 : '-6px -8px'),
    fontSize: '14px',
    fontWeight: 'bold',
    '& .MuiSvgIcon-root': {
      fontSize: '38px',
    },
  },
});

export default ({
  width,
  link,
  loading,
  enablePadding,
  className,
  children,
  ...props
}) => {
  const classes = useStyles({ width, enablePadding });
  const variant = link ? 'text' : 'contained';

  return (
    <Button
      color="secondary"
      variant={variant}
      className={clsx(classes[variant], className)}
      {...props}
    >
      {loading ? <CircularProgress size={24} /> : children}
    </Button>
  );
};
