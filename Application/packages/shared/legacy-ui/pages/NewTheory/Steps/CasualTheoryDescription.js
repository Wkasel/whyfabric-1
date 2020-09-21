import React, { useState, useEffect } from "react";

import TextArea from "../../../elements/formElements/TextArea";
import {
  CommonButton,
  VoiceNoteButton
} from "../../../elements/formElements/Buttons";
import { theoriesRequests } from "../../../../utils/API";

import { makeStyles } from "@material-ui/styles";

import Player from "../../../elements/formElements/Player";

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
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const CasualTheoryDescription = props => {
  const classes = useStyles();
  const [theoryDescription, setTheoryDescription] = useState("");

  const [record, setRecord] = useState(null);
  const [recordURL, setRecordURL] = useState(null);
  const [voiceNoteName, setvoiceNoteName] = useState("");

  useEffect(() => {
    theoriesRequests
      .getTheoryById(props.theoryId)
      .then(data => {
        setTheoryDescription(data.data.description);
        setRecordURL(data.data.voice_note[0].location);
        setvoiceNoteName(data.data.voice_note[0].name);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChangeTheoryDescription = value => {
    setTheoryDescription(value);
    console.log(value);
    const description = {
      description: value
    };
    if (theoryDescription) {
      theoriesRequests
        .updateTheory(props.theoryId, description)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  };

  const saveDescription = () => {
    const fd = new FormData();
    fd.append("files", record);
    theoriesRequests.uploadVoiceNote(props.theoryId, fd).then(data => {
      if (data) {
        props.nextStep();
      }
    });
  };

  const deleteNote = () => {
    const voiceName = {
      filename: voiceNoteName
    };
    theoriesRequests
      .deleteVoiceNote(props.theoryId, voiceName)
      .then(data => {
        setRecord(null);
        setRecordURL(null);
        setvoiceNoteName("");
      })
      .catch(err => console.log(err));
  };
  return (
    <div className={classes.container}>
      <h3>Casual Theory Description</h3>

      <TextArea
        rowsMax={20}
        multiline
        onChange={handleChangeTheoryDescription}
        value={theoryDescription}
      />
      {recordURL !== null ? (
        <Player record={recordURL} deleteNote={deleteNote} />
      ) : null}

      <div className={classes.buttonsContainer}>
        <VoiceNoteButton
          value="Record Audio"
          onRecord={setRecord}
          getRecordURL={setRecordURL}
        />

        <CommonButton onClick={saveDescription} value="NEXT" />
      </div>
    </div>
  );
};

export default CasualTheoryDescription;
