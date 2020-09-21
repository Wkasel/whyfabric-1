import React, { useState, useCallback } from 'react';

// Material UI
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';

// WhyFabric Styles
import { useStyles } from './style';

const Sidebar = React.forwardRef((props, stop) => {
  // needed to add to stop bug with material
  //
  const classes = useStyles();
  const [val, setVal] = useState(1);

  const handleChange = useCallback((event) => {
    setVal(event.target.value);
  });

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <NavLink to="/profile">
          <div className={classes.nav_buttons}>
            <PersonIcon className={classes.nav_icons} />
            <span className={classes.nav_buttons_span}>Profile</span>
          </div>
        </NavLink>
        <NavLink to="/graphs">
          <div className={classes.nav_buttons}>
            <StarIcon className={classes.nav_icons} />
            <span className={classes.nav_buttons_span}>graphs</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
});

export default Sidebar;
