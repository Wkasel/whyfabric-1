import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
    padding: "80px"
  },
  glossary: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr"
  }
});

const Glossary = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div>Glossary/Key</div>
      <div className={classes.glossary}>
        <div>
          <h3>Causal Graph</h3>
          <p>
            A visual display of a causal theory of how something came about.
            This is NOT a display of a timeline of events, but a graph of
            causative events (or factors) that led to other events and
            eventually to a particular outcome. Arrows designate causative flow.{" "}
          </p>
        </div>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <h3>Node sequence</h3>
          <p>
            For nodes in history or current affairs categories, the sequence is
            denoted by date of each node. For other categories (e.g. science or
            economics), the date sequence may not be applicable and so sequence
            could just be numbers. The SME should be able to choose this in the
            advanced panel.
          </p>
        </div>
        <div>
          <h3>SME: Subject Matter Expert</h3>
          <p>
            Could be an academic (Prof or student) or a researcher or a
            journalist or other qualified person (e.g. political strategist). An
            SME can be invited to be an author on whyFabric either by whyFabric
            management or by another SME.
          </p>
        </div>
        <div>
          <h3>Node Type</h3>
          <p>
            This can only be selected through an ‘advanced features’ panel.
            Nodes of different types will be designated by different colors on
            the graph. Nodes can be (for example): - active (represents a
            causative event--e.g. Apple introduced the iphone)
          </p>
        </div>
        <div>
          <h3>Node connections</h3>
          <p>
            A causative connection between node n and node n+1. indicates the
            event of node n caused the event of node n+1. This will be
            represented by an arrow on the graph between nodes n and n+1. Types
            of node connections: one to one: one event caused another event one
            to many: one event caused several other events many to one: many
            independent events together influenced a given event
          </p>
        </div>
        <div>
          <h3>Causal Theory</h3>
          <p>
            A theory of how something (an outcome, a situation, a historic
            event, a condition, or a result) came about. Contains a sequence of
            causative events that led up to the event or situation of interest.
          </p>
        </div>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default Glossary;
