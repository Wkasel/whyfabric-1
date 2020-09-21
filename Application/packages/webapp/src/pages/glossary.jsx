import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '@sxs/comps/Grid/GridContainer';
import GridItem from '@sxs/comps/Grid/GridItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  mainContainer: {
    width: '100%',
    height: '100%',
    padding: '80px',
  },
  glossary: {
    display: 'grid',
    padding: '10px 20px 10px',
    verticalAlign: 'top',
  },
});

const glossaryData = [
  {
    term: 'Causal Graph',
    description:
      'A visual display of a causal theory of how something came about.\
      This is NOT a display of a timeline of events, but a graph of causative \
      events (or factors) that led to other events and eventually to a \
      particular outcome. Arrows designate causative flow.',
  },
  {
    term: 'SME: Subject Matter Expert',
    description:
      'Could be an academic (Prof or student) or a researcher or a journalist \
      or other qualified person (e.g. political strategist). An SME can be \
      invited to be an author on whyFabric either by whyFabric management \
      or by another SME.',
  },
  {
    term: 'Causal Theory',
    description:
      'A theory of how something (an outcome, a situation, a historic event, \
        a condition, or a result) came about. Contains a sequence of \
        causative events that led up to the event or situation of interest.',
  },
  {
    term: 'Node',
    description:
      'A visual designation of an event or a factor. An Event: An \
    occurrence in history (e.g. the Mexican revolution) A  Factor: A condition, \
    (e.g. Inflation increases dramatically).',
  },
  {
    term: 'Node Type',
    description:
      "This can only be selected through an 'advanced features' \
    panel. Nodes of different types will be designated by different colors \
    on the graph. Nodes can be (for example):- active (represents a causative \
    event—e.g. Apple introduced the iphone) passive (i.e. is an informational \
    node—e.g. iphone sales reach 100 million units). This could be shown as a \
    transparent circle on the graph for example. representing a govt or policy \
    action (e.g. Nixon abandons the Gold Standard) - a  “turning point” event \
    that changed the course of history (e.g. 9/11)",
  },
  {
    term: 'Apex Node',
    description:
      'This is the primary outcome of the causal graph (i.e. the \
      diamond node. I have been searching for exactly what to call \
      this—previously I had called it Anchor Node or Key Node. \
      But perhaps Outcome node is best. I am open to other suggestions.',
  },
  {
    term: 'Node Sequence',
    description:
      'For nodes in history or current affairs categories, the \
      sequence is denoted by date of each node. For other categories \
      (e.g. science or economics), the date sequence may not be applicable \
      and so sequence could just be numbers. The SME should be able to choose \
      this in the advanced panel.',
  },
  {
    term: 'Node Connections',
    description: `A causative connection between node n and node n+1. This indicates the event of node n caused the event of node n+1. This will be represented by an arrow on the graph between nodes n and n+1. Types of node connections:
    one to one: one event caused another event
    one to many: one event caused several other events
    many to one: many independent events together influenced a given event
`,
  },
  {
    term: 'Node Justifications',
    description: `This is the justification for asserting any causal link between two nodes. I.e. what support can you provide to justify saying node n causes node n+1? The justification could consist of explanatory notes or files or URLs or photos or data tables.
`,
  },
];

const Glossary = () => {
  const classes = useStyles();
  return (
    <GridContainer className={classes.mainContainer}>
      {glossaryData.map((item) => (
        <GridItem sm={12} md={6} lg={4} className={classes.glossary}>
          <Typography variant="h5" component="h5">
            {item.term}
          </Typography>
          <Typography variant="body1" component="p">
            {item.description}>
          </Typography>
        </GridItem>
      ))}
    </GridContainer>
  );
};
export default Glossary;
