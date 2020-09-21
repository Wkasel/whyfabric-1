import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { TheoryContext } from '@sections/Admin/NewTheory';
import Button from '@components/Button';
import Nodes from './Nodes';
import { useStyles } from './styles';

const Preview = ({ onComplete }) => {
  const classes = useStyles();
  const { theory } = useContext(TheoryContext);
  const { name, description, nodes } = theory;

  return (
    <>
      <Paper square elevation={2} className={classes.paper}>
        <Typography variant="h5" component="div" className={classes.title}>
          {name}
          <Button link>Edit</Button>
        </Typography>

        {description && (
          <>
            <Typography variant="body1">{description}</Typography>
            {/* <Button link className={classes.readMore}>
            READ MORE
          </Button> */}
          </>
        )}
      </Paper>
      {nodes && nodes.length && <Nodes nodes={nodes} />}
    </>
  );
};

export default Preview;
