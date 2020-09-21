import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import dateFormat from 'date-fns/format';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Button from '@components/Button';
import AddPanel from '../AddPanel';
import { useStyles } from './styles';

const Connections = () => {
  const classes = useStyles();
  const { theory, saveTheory } = React.useContext(TheoryContext);
  const [selectedId, setSelect] = useState(-1);
  const { connections, nodes } = theory;

  const Node = ({ index, classes, selected }) => {
    const { name, date } = nodes[index];
    const apex = index === 0;
    return (
      <Paper square elevation={2} className={classes.node}>
        <span className={apex ? classes.apexIcon : classes.nodeIcon} />
        <span className={classes.nodeName}>{name}</span>
        <span className={classes.nodeDate}>
          {dateFormat(new Date(date), 'yyyy/MM/dd')}
        </span>
        {selected && (
          <AddPanel connIndex={selectedId} onClose={() => setSelect(-1)} />
        )}
      </Paper>
    );
  };

  return (
    <Paper square elevation={2} className={classes.paper}>
      <Typography variant="h4" className={classes.title}>
        Justify Connections
      </Typography>
      <List disablePadding>
        {connections.map((conn, index) => (
          <ListItem key={index} disableGutters>
            <Node index={conn.nodes[1]} classes={classes} />
            <ArrowForwardIcon className={classes.arrow} />
            <Node
              index={conn.nodes[0]}
              classes={classes}
              selected={selectedId === index}
            />
            <Box
              className={classes.actions}
              style={{ opacity: conn.reference ? 0.5 : 1 }}
            >
              <Button
                link
                startIcon={
                  conn.reference ? <CheckCircleIcon /> : <AddCircleIcon />
                }
                onClick={() => setSelect(index)}
              >
                {conn.reference ? 'Edit' : 'Justification'}
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Connections;
