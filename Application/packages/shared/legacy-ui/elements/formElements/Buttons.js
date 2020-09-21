import React, { useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import AudioPlayer from "react-h5-audio-player";

import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import StopIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles({
  mainButton: {
    backgroundColor: "#29b6f6",
    color: "#fff",
    borderRadius: "3px",
    padding: "8px 20px",
    fontSize: "0.7rem",
    "&:hover": {
      backgroundColor: "#0db1fb"
    }
  },
  commonButton: {
    backgroundColor: "#d1d1d1",
    color: "#686868",
    borderRadius: "3px",
    padding: "4px 20px",
    fontSize: "0.7rem"
  },
  voiceContainer: {
    position: "relative",
    width: "auto"
    // width: "300px"
  },
  voiceNoteButton: {
    /****************/
    // marginLeft: "150px",
    /****************/
    backgroundColor: "#d1d1d1",
    color: "#686868",
    borderRadius: "3px",
    padding: "4px 20px",
    fontSize: "0.7rem",
    "& svg": {
      color: "#009688",
      marginLeft: "10px"
    }
  },
  voiceNoteButtonConteiner: {
    display: "flex",
    alignItems: "center"
  },
  voiceNoteButtonRec: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      color: "#dc3545",
      marginLeft: "10px"
    }
  },
  hide: {
    "& svg": {
      display: "none"
    }
  },
  buttonAudioImgContainer: {
    position: "relative"
  },
  simpleTextButton: {
    color: "#686868",
    fontSize: "0.7rem"
  }
});

export const MainButton = props => {
  const classes = useStyles();
  return (
    <Button
      className={classes.mainButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </Button>
  );
};

export const CommonButton = props => {
  const classes = useStyles();
  return (
    <Button
      className={classes.commonButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </Button>
  );
};

export const VoiceNoteButton = props => {
  const classes = useStyles();

  const stop = useRef(null);

  const [recorderState, setRecorderState] = useState("inactive");
  const [audio, setAudio] = useState("");
  const [timer, updateTimer] = useState(0);

  const handleRecord = (blobURL, blob) => {
    if (props.onRecord) {
      props.onRecord(blob);
      props.getRecordURL(blobURL);
      setAudio(blobURL);
    } else {
      setAudio(blobURL);
    }
  };
  const record = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);

      const stopRecoder = () => {
        if (mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
          setRecorderState("inactive");
        }
      };

      (() => {
        if (mediaRecorder.state !== "recording") {
          mediaRecorder.start();
          setRecorderState("record");
          setTimeout(stopRecoder, 30000);
          const upTimer = () => updateTimer(timer + 1);
          setInterval(upTimer, 100);
        }
      })();

      // start.current.addEventListener("click", startRecorder);

      stop.current.addEventListener("click", stopRecoder);

      var audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", function(event) {
        audioChunks.push(event.data);
      });
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, {
          type: "audio/wav"
        });
        handleRecord(URL.createObjectURL(audioBlob), audioBlob);

        audioChunks = [];
      });
    });
  };

  return (
    <div className={classes.buttonAudioImgContainer}>
      <Button disabled={props.disabled} className={classes.voiceNoteButton}>
        {props.value}
        <div>
          <div
            className={
              recorderState === "inactive"
                ? classes.voiceNoteButtonConteiner
                : classes.hide
            }
            onClick={record}
          >
            <KeyboardVoiceIcon />
          </div>

          <div
            className={
              recorderState === "record"
                ? classes.voiceNoteButtonRec
                : classes.hide
            }
            ref={stop}
          >
            <StopIcon />
          </div>
        </div>
      </Button>
    </div>
  );
};

export const SimpleTextButton = props => {
  const classes = useStyles();

  return (
    <Button
      className={classes.simpleTextButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </Button>
  );
};
