import React, { useState, useEffect } from "react";
import { theoriesRequests } from "../../../../../../utils/API";

import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

import ReadMore from "../../../../../elements/formElements/ReadMore";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    marginTop: "20px",
    padding: "25px 20px",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25)",
    backgroundColor: "#fff"
  },
  editButton: {
    fontSize: "0.7rem",
    background: "transparent",
    border: "none",
    color: "#bdbdbd",
    cursor: "pointer"
  },
  namePreview: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  theoryName: {
    marginBottom: "10px",
    "& .MuiFormHelperText-root": {
      textAlign: "right"
    }
  },
  theoryNameUnderline: {
    "&:after": {
      cursor: "poiner",
      borderBottom: "2px solid #29b6f6" // focus underline
    },
    "&:hover": {
      "&:not(.Mui-disabled)": {
        "&:before": {
          borderBottom: "2px solid #b9b9b9" // hover underline
        }
      }
    }
  },
  readMoreStyles: {
    color: "red"
  }
});

const NameAndDescription = props => {
  const classes = useStyles();
  const [theoryName, setTheoryName] = useState("");
  const [theoryDescription, setTheoryDescription] = useState("");
  const [
    editTheoryNameAndDescription,
    setEditTheoryNameAndDescription
  ] = useState(false);
  const [newTheoryName, setNewTheoryName] = useState("");
  const [newTheoryDescription, setNewTheoryDescription] = useState("");

  useEffect(() => {
    theoriesRequests
      .getTheoryById(props.theoryId)
      .then(data => {
        setTheoryName(data.data.name);
        setTheoryDescription(data.data.description);
      })
      .catch(err => console.log(err));
  }, [props.step, editTheoryNameAndDescription]);
  const editName = val => {
    setEditTheoryNameAndDescription(val);
    setNewTheoryName("");
    setNewTheoryDescription("");
  };
  const changeTheoryName = e => {
    setNewTheoryName(e.target.value);
  };
  const changeTheoryDescription = e => {
    setNewTheoryDescription(e.target.value);
  };
  const updateTheoryNameAndDescription = () => {
    const data = {
      name: newTheoryName ? newTheoryName : theoryName,
      description: newTheoryDescription
        ? newTheoryDescription
        : theoryDescription
    };
    theoriesRequests
      .updateTheory(props.theoryId, data)
      .then(setEditTheoryNameAndDescription(false))
      .catch(err => console.log(err));
  };
  return (
    <div className={classes.container}>
      {editTheoryNameAndDescription ? (
        <div>
          <TextField
            className={classes.theoryName}
            fullWidth
            defaultValue={theoryName}
            onChange={changeTheoryName}
            inputProps={{ maxLength: 50 }}
            InputProps={{ classes: { underline: classes.theoryNameUnderline } }}
          />
          {props.step > 2 ? (
            <TextField
              className={classes.theoryName}
              fullWidth
              defaultValue={theoryDescription}
              onChange={changeTheoryDescription}
              InputProps={{
                classes: { underline: classes.theoryNameUnderline }
              }}
            />
          ) : null}

          <Button onClick={updateTheoryNameAndDescription}>SAVE</Button>
          <Button onClick={() => editName(!editTheoryNameAndDescription)}>
            CANCEL
          </Button>
        </div>
      ) : (
        <div className={classes.namePreview}>
          <div>
            <h2>{theoryName}</h2>
            {/* {props.step > 2 ? <p>{theoryDescription}</p> : null} */}
            {props.step > 2 ? (
              <ReadMore
                className={classes.readMoreStyles}
                charLimit={80}
                readMoreText="READ MORE"
                readLessText="READ LESS"
              >
                {theoryDescription}
              </ReadMore>
            ) : null}
          </div>
          <button
            className={classes.editButton}
            onClick={() => editName(!editTheoryNameAndDescription)}
          >
            EDIT
          </button>
        </div>
      )}
    </div>
  );
};

export default NameAndDescription;
