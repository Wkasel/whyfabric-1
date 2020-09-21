import React, { useState, useEffect } from "react";

import { Select, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  select: {
    width: "100%",
    color: "#000",
    marginBottom: "35px",
    "&:hover": {
      "&:not(.Mui-disabled)": {
        "&:before": {
          borderBottom: "2px solid #29b6f6" // hover underline
        }
      }
    },
    "&:after": {
      display: "none"
    },
    "& svg": {
      color: "#848484"
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent"
    }
  },
  connectionSelector: {
    width: "100%",
    color: "#000",
    "&:hover": {
      "&:not(.Mui-disabled)": {
        "&:before": {
          borderBottom: "2px solid #29b6f6" // hover underline
        }
      }
    },
    "&:after": {
      display: "none"
    },
    "& svg": {
      color: "#848484"
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent"
    }
  }
});

export const Selector = props => {
  const classes = useStyles();

  const [value, setValue] = useState("");

  const handleChange = event => {
    props.onChange(event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props]);

  return (
    <Select
      className={classes.select}
      onChange={handleChange}
      value={value}
      displayEmpty
      MenuProps={props.MenuProps}
    >
      <MenuItem value={""} disabled>
        {props.defaultValue}
      </MenuItem>
      {props.elements.map((item, index) => {
        return (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export const ConnectionSelector = props => {
  const classes = useStyles();

  const [value, setValue] = useState("");

  useEffect(() => {
    const val = props.connections.find(
      item => item.event1 === props.element._id
    );
    if (val) {
      const connectEv = props.events.find(item => val.event2 === item._id);
      setValue(connectEv);
      console.log(connectEv);
    } else {
      setValue("notSet");
      console.log(val);
    }
  }, [props.connections]);

  const handleChange = event => {
    props.onChange(event.target.value);
    setValue(event.target.value);
  };
  return (
    <Select
      className={classes.connectionSelector}
      onChange={handleChange}
      value={value}
      displayEmpty
      MenuProps={props.MenuProps}
    >
      <MenuItem value={"notSet"}>Not Set</MenuItem>
      {props.events.map((item, index) => {
        return props.element.name === item.name ? null : (
          <MenuItem key={index} value={item}>
            {item.name}
          </MenuItem>
        );
      })}
    </Select>
  );
};
