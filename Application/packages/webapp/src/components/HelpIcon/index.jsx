import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  icon: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    margin: '0 15px',
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#f5b905',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3b3b3b',
    cursor: 'pointer',
    zIndex: 10,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '30px 45px',
    borderRadius: '45px 45px 45px 0',
    backgroundColor: '#f5b905',
    fontSize: 'initial',
    fontWeight: 'normal',
    cursor: 'initial',
  },
});

export default ({ className, children, ...props }) => {
  const [visible, showHelp] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (visible) {
      const hideHelp = () => showHelp(false);
      document.addEventListener('click', hideHelp);
      return () => {
        document.removeEventListener('click', hideHelp);
      };
    }
  }, [visible, showHelp]);

  return (
    <div
      className={clsx(classes.icon, className)}
      onClick={() => showHelp(true)}
      {...props}
    >
      !{visible && <div className={classes.content}>{children}</div>}
    </div>
  );
};
