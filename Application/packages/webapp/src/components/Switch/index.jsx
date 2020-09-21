import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useLabelStyles = makeStyles({
  root: {
    margin: 0,
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    width: ({ width }) => `${width}px`,
    lineHeight: '16px',
    fontSize: '10px',
    fontWeight: 500,
    whiteSpace: 'pre'
  },
});

const useSwitchStyles = makeStyles({
  root: {
    margin: '0 -12px',
    width: ({ width }) => `${width + 24}px`,
  },
  checked: {
    transform: ({ width }) => `translateX(${width - 17}px) !important`,
  },
  input: {
    left: ({ width }) => `${29 - width}px`,
    width: ({ width }) => `${2 * width - 17}px`,
  },
});

export default ({
  value,
  label,
  label1,
  label2,
  className,
  labelPlacement = 'bottom',
  width = 34,
  ...props
}) => {
  const labelClasses = useLabelStyles({ width });
  const sliderClasses = useSwitchStyles({ width });

  return (
    <FormControlLabel
      control={<Switch checked={value} {...props} classes={sliderClasses} />}
      classes={labelClasses}
      className={className}
      labelPlacement={labelPlacement}
      label={
        label || (
          <>
            {label1 && <span>{label1}</span>}
            {label2 && <span style={{ textAlign: 'right' }}>{label2}</span>}
          </>
        )
      }
    />
  );
};
