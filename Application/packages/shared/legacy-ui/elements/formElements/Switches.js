import React, { useState, useEffect } from "react";

import Switch from "@material-ui/core/Switch";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  singleSwitches: {
    "& .MuiTouchRipple-root": {
      display: "none !important"
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#d7d7d7",
      opacity: "0.65 !important",
      height: "10px"
    },
    "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#29b6f6"
    },
    "& .MuiSwitch-colorSecondary.Mui-checked": {
      color: "#29b6f6"
    },
    "& .MuiSwitch-thumb": {
      width: "15px",
      height: "15px"
    },
    "& .MuiIconButton-root:hover": {
      backgroundColor: "transparent !important"
    }
  },
  doubleSwitch: {
    padding: "12px 3px",
    "& .MuiSwitch-switchBase": {
      left: "-8px"
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      left: "65px"
    },
    "& .MuiTouchRipple-root": {
      display: "none !important"
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#29b6f6 !important",
      opacity: "0.65 !important",
      height: "10px"
    },
    "& .MuiSwitch-thumb": {
      width: "15px",
      height: "15px",
      color: "#29b6f6"
    },
    "& .MuiIconButton-root:hover": {
      backgroundColor: "transparent !important"
    }
  }
});

export const SingleSwitch = props => {
  const classes = useStyles();

  const [isSwitched, setSwitch] = useState(props.value);
  useEffect(() => {
    setSwitch(props.value);
  }, [props.value]);

  const handleChange = event => {
    props.onChange(event.target.checked);
    setSwitch(event.target.checked);
  };
  return (
    <Switch
      className={classes.singleSwitches}
      onChange={handleChange}
      checked={isSwitched}
    />
  );
};

export const DoubleSwitch = props => {
  const classes = useStyles();
  const [checked, setCheckes] = useState(props.defaultValue);
  useEffect(() => {
    setCheckes(props.defaultValue);
  }, [props.defaultValue]);
  const handleChange = event => {
    props.getValue(event.target.checked);
    setCheckes(event.target.checked ? false : true);
  };

  return (
    <Switch
      className={classes.doubleSwitch}
      onChange={handleChange}
      checked={checked}
    />
  );
};
