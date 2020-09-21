import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import dateFormat from 'date-fns/format';

import HelpIcon from '@components/HelpIcon';
import Button from '@components/Button';
import { useStyles } from './styles';

const Nodes = ({ nodes }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <List disablePadding>
      {nodes.map((node, index) => (
        <ListItem key={index} disableGutters>
          <Paper square elevation={2} className={classes.node}>
            <span className={index === 0 ? classes.apexIcon : classes.icon} />
            <span className={classes.name}>{node.name}</span>
            <span className={classes.date}>
              {dateFormat(new Date(node.date), 'yyyy/MM/dd')}
            </span>
            <IconButton size="small">
              <SyncIcon />
            </IconButton>
            {nodes.length === 1 && (
              <HelpIcon className={classes.helpIcon}>
                <Box className={classes.helpContent}>
                  <Typography variant="h5">Get exposure!</Typography>
                  <Typography variant="body1">
                    Sync nodes with similar ones from other Theories to gain
                    traffic.
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Button link>Yes!</Button>
                    <Button link>No Thanks</Button>
                  </Box>
                </Box>
              </HelpIcon>
            )}
            <IconButton size="small" onClick={handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={!!anchorEl}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Edit</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Delete</MenuItem>
            </Menu>
          </Paper>
        </ListItem>
      ))}
    </List>
  );
};

export default Nodes;
