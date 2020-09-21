import React, { useState } from "react";

import { Selector } from "../../../elements/formElements/Selector";
import TextArea from "../../../elements/formElements/TextArea";
import { MainButton } from "../../../elements/formElements/Buttons";
import ExistedTheories from "./ExistedTeories";

import { theoriesRequests } from "../../../../utils/API";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    width: "390px",
    marginTop: "20px",
    padding: "25px 20px",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25)",
    backgroundColor: "#fff"
  },
  lable: {
    marginBottom: "35px"
  },
  theoryName: {
    marginBottom: "30px",
    "& .MuiFormHelperText-root": {
      textAlign: "right"
    }
  },
  buttonNextContainer: {
    display: "flex",
    justifyContent: "flex-end"
  }
});
const NewCasualTheory = props => {
  const classes = useStyles();
  const [theoryCategory, setTheoryCategory] = useState("");
  const [theoryName, setTheoryName] = useState("");
  const [theoryIsExist, setTheoryIsExist] = useState(false);
  const [theories, setTheories] = useState([]);

  const changeCategory = value => {
    setTheoryCategory(value);
  };
  const handleChangeTheoryName = value => {
    setTheoryName(value.trim());

    if (value !== "") {
      theoriesRequests
        .searchTheories(value.trim(), theoryCategory)
        .then(data => {
          setTheories(data.data);
        })
        .catch(err => console.log(err));
    }
  };

  const chooseTheory = index => {
    setTheoryName(theories[index].name);
    setTheoryCategory(theories[index].category);
    props.editTheory(theories[index]._id);
  };
  const createNewTheory = () => {
    props.createTheory(theoryName, theoryCategory);
    setTheoryIsExist(false);
  };

  return !theoryIsExist ? (
    <div className={classes.container}>
      <h3 className={classes.lable}>New Casual Theory</h3>

      <Selector
        onChange={changeCategory}
        defaultValue="Theory Category"
        elements={["Economic", "History", "Science"]}
      />

      <TextArea
        onChange={handleChangeTheoryName}
        helperText={theoryName.length + `/50`}
        maxLength={50}
        disabled={theoryCategory === "" ? true : false}
      />

      <div className={classes.buttonNextContainer}>
        {theories.length === 0 ? (
          <MainButton
            onClick={createNewTheory}
            disabled={theoryCategory !== "" && theoryName !== "" ? false : true}
            value="CREATE NEW"
          />
        ) : (
          <MainButton
            onClick={() => {
              setTheoryIsExist(true);
            }}
            disabled={theoryCategory !== "" && theoryName !== "" ? false : true}
            value="THEORY IS EXIST"
          />
        )}
      </div>
    </div>
  ) : (
    <ExistedTheories
      theoryName={theoryName}
      theoryCategory={theoryCategory}
      handleChangeTheoryName={handleChangeTheoryName}
      createNewTheory={createNewTheory}
      theories={theories}
      chooseTheory={chooseTheory}
    />
  );
};

export default NewCasualTheory;
