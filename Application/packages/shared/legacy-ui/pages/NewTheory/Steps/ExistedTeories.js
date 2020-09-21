import React from "react";

import ExistedTheoryCard from "../../../elements/interfaceElements/ExistedTheoryCard";

import TextArea from "../../../elements/formElements/TextArea";
import { MainButton } from "../../../elements/formElements/Buttons";
import { List, ListItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles( {
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px"
  },
  textField: {
    width: "300px",
    "& h3": {
      marginBottom: "30px",
      fontSize: '1.4rem',
      fontWeight: '400'
    }
  },
  createNewTheoryBlock: {
    textAlign: 'right',
    '& h4':{
      fontSize: '1.4rem',
      fontWeight: '400',
      paddingBottom: '20px'
    },
    '& button':{
      padding: '10px 38px',
      fontSize: '.8rem',
      fontWeight: '300'
    }
  },
  container: {
    width: "810px",
    padding: '22px',
    backgroundColor: '#fff',
    boxShadow: '0 0 3px 1px rgba(0, 0, 0, .2)',
  },
  theoriesList: {
    '& .MuiListItem-gutters':{
      padding: '20px 0'
    }
    // display: "grid",
    // gridTemplateColumns: "repeat(3, 1fr)",
    // gridColumnGap: "1rem",
    // gridRowGap: "2.5rem",
    // "& .MuiListItem-gutters": {
    //   padding: "0px"
    // }
  },
  theoriesListItem: {
    '&:not(:last-child)': {
      borderBottom: '2px solid #d1d1d1'
    }
  }
});

const ExistedTheories = props => {
  const classes = useStyles(false);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.textField}>
          <h3>Build New Theory</h3>
          <TextArea
            onChange={props.handleChangeTheoryName}
            value={props.theoryName}
            helperText={props.theoryName.length + `/50`}
            maxLength={50}
            disabled={props.theoryCategory === "" ? true : false}
          />
        </div>
      </div>
      <div>
        {props.theoryName === "" ? null : (
          <List className={classes.theoriesList}>
            {props.theories.map((item, index) => {
              return (
                <ListItem key={index} className={classes.theoriesListItem}>
                  <ExistedTheoryCard
                    theoryData={item}
                    index={index}
                    chooseTheory={props.chooseTheory}
                  />
                </ListItem>
              );
            })}
          </List>
        )}
        <div className={classes.createNewTheoryBlock}>
          <h4>No thanks, I'll build one from scratch.</h4>
          <MainButton onClick={props.createNewTheory} value="New Theory" />
        </div>
      </div>
    </div>
  );
};

export default ExistedTheories;
