import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Button from '@components/Button';
import { useStyles } from './styles';

const Step5 = ({ onComplete }) => {
  const classes = useStyles();
  const { theory, saveTheory } = React.useContext(TheoryContext);

  // testing...
  const handleSave = () => {
    const nodeCount = theory.nodes.length;
    const connections = [];
    for (let i = 0; i < nodeCount - 1; i++) {
      connections.push({ nodes: [i, i + 1] });
    }
    saveTheory({ connections });
    onComplete();
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" className={classes.header}>
        <IconButton size="small">
          <EditIcon />
        </IconButton>
        <IconButton size="small">
          <RefreshIcon />
        </IconButton>
        <Button>Calibrate graph</Button>
      </Box>

      <Paper square elevation={2} className={classes.paper}>
        <Typography variant="h4">Connect Nodes</Typography>
        <Box className={classes.zoom}>
          <IconButton color="secondary" size="small">
            <AddCircleIcon />
          </IconButton>
          <IconButton color="secondary" size="small">
            <RemoveCircleIcon />
          </IconButton>
        </Box>
      </Paper>

      <Box display="flex" justifyContent="flex-end" alignItems="flex-start">
        <Button onClick={handleSave}>Save Connections</Button>
      </Box>
    </>
  );
};

export default Step5;
