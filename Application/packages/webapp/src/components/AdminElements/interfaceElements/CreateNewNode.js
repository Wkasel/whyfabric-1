import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';

import { CommonButton } from '../formElements/Buttons';

const useStyles = makeStyles({
  container: {
    width: '390px',
    height: '100%',
    position: 'relative',
    marginTop: '20px',
    padding: '25px 20px',
    boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.25)',
    backgroundColor: '#fff',
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    '& h4': {
      marginBottom: '0',
      marginRight: '10px',
    },
    marginBottom: '50px',
  },
  buttonAddNode: {
    padding: '5px',
    borderRadius: '50%',
    backgroundColor: '#29b6f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer',
  },
  buttonContainer: {
    textAlign: 'right',
  },
});
const CreateNewNode = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h4>Add Node</h4>
        <div className={classes.buttonAddNode} onClick={props.createNewNode}>
          <AddIcon />
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <CommonButton value="Next" onClick={props.nextStep} />
      </div>
    </div>
  );
};

export default CreateNewNode;
