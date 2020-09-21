import React, { useState, useEffect } from "react";

import { apexNodesRequests } from "../../../../utils/API";

import { makeStyles } from "@material-ui/core/styles";

import { Button, FormControl, List } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";

import Player from "../../../elements/formElements/Player";

import TextArea from "../../../elements/formElements/TextArea";
import {
  CommonButton,
  VoiceNoteButton,
  SimpleTextButton
} from "../../../elements/formElements/Buttons";
import {
  SingleSwitch,
  DoubleSwitch
} from "../../../elements/formElements/Switches";

import AdvancedDetails from "../../../elements/interfaceElements/AdvancedDetails";

import DownloadFileCard from "../../../elements/interfaceElements/DownloadFileCard";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  container: {
    width: "390px",
    position: "relative",
    marginTop: "20px",
    padding: "25px 20px",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25)",
    backgroundColor: "#fff"
  },
  advancedButtons: {
    position: "relative",
    "& svg": {
      position: "absolute",
      width: "15px",
      height: "15px",
      left: "-20px",
      top: "7px",
      cursor: "pointer"
    }
  },
  advancedDetailsIsEnable: {
    filter: "opacity(0.1)",
    pointerEvents: "none",
    width: "100%"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "30px"
  },
  formControl: {
    width: "100%"
  },
  buttonHeader: {
    fontSize: "11px",
    textTransform: "none",
    color: "#6a6a6a",
    paddingBottom: "15px",
    borderBottom: " 2px solid #6a6a6a",
    transition: "border-bottom-color .25s",
    borderRadius: "0",
    "&:focus": {
      borderBottom: " 2px solid #29b6f6"
    }
  },
  dateContainer: {
    display: "flex"
  },
  dateContainerSwitches: {
    display: "flex",
    marginLeft: "15px",
    "& p": {
      fontSize: "0.7rem"
    }
  },
  eraLabel: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      padding: "0 5px 0 0"
    }
  },
  exactLabel: {
    textAlign: "center"
  },
  dropzone: {
    height: "30px",
    minHeight: "20px",
    border: "none",
    borderBottom: "1px solid #949494",
    backgroundColor: "transparent",
    "& > div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& p": {
        fontSize: "1rem",
        color: "#a2a2a2",
        marginBottom: "0"
      },
      "& svg": {
        width: "30px",
        height: "25px"
      }
    },
    "& .DropzoneArea-stripes": {
      backgroundImage: "none",
      backgroundColor: "red"
    }
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px"
  },
  showAdvancedDetailsButtons: {
    display: "flex",
    justifyContent: "space-between",
    filter: "opacity(0.1)",
    pointerEvents: "none"
  }
});

const ApexNodeDetails = props => {
  const classes = useStyles();
  const [apexNodeName, setApexNodeName] = useState("");
  const [apexNodeDate, setApexNodeDate] = useState("");
  const [era, setEra] = useState(true);
  const [isExact, setExact] = useState(false);
  const [links, setLinks] = useState("");
  const [files, setFiles] = useState([]);

  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [format, setFormat] = useState("");

  const [record, setRecord] = useState(null);
  const [recordURL, setRecordURL] = useState(null);

  const [existedApexNodeId, setExistedApexNodeId] = useState(false);

  const [apexNodeIsExist, setApexNodeIsExist] = useState(false);

  useEffect(() => {
    apexNodesRequests
      .getApexNodeByTheoryId(props.theoryId)
      .then(data => {
        if (data.data) {
          setApexNodeIsExist(true);
          setExistedApexNodeId(data.data._id);
          setApexNodeName(data.data.name);
          setApexNodeDate(data.data.date);
          data.data.era === "BCE" ? setEra(false) : setEra(true);
          data.data.isExact === "true" ? setExact(true) : setExact(false);
          setLinks(data.data.links.toString());
          setHours(data.data.hour);
          setMinutes(data.data.minute);
          setFormat(data.data.format);
          setFiles(data.data.files);
          setRecordURL(data.data.voice_note[0].location);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.theoryId]);

  const handleChangeApexNodeEra = value => {
    setEra(value);
  };
  const handleChangeApexNodeExact = value => {
    setExact(value);
  };

  const handleChangeFiles = inputFiles => {
    let filesCopy = [...inputFiles].filter(
      (item, index, self) => self.findIndex(i => i.name === item.name) === index
    );

    let newFiles = [...files, ...filesCopy].filter(
      (item, index, self) => self.findIndex(i => i.name === item.name) === index
    );
    setFiles(newFiles);
  };

  const deleteFile = (index, item) => {
    if (item.isSaved) {
      let fileName = { filename: item.name };
      apexNodesRequests
        .deleteFile(existedApexNodeId, fileName)
        .then(data => {
          let arr = files.slice();
          let res = arr.splice(index, 1);
          setFiles(arr);
          console.log(res);
        })
        .catch(err => console.log(err));
    } else {
      let arr = files.slice();
      let res = arr.splice(index, 1);
      setFiles(arr);
    }
  };

  const saveApexNode = () => {
    const fd = new FormData();
    const formData = {
      theoryId: props.theoryId,
      name: apexNodeName,
      date: apexNodeDate,
      era: era ? "CE" : "BCE",
      isExact: isExact,
      links: links.split(",").map(item => item.trim()),
      files: files,
      hour: hours,
      minute: minutes,
      format: format,
      files: files,
      voice_note: record
    };

    for (let key in formData) {
      if (key === "files") {
        console.log(111);
        let len = files.length;
        for (let x = 0; x < len; x++) {
          fd.append("files", files[x]);
        }
      } else {
        fd.append(key, formData[key]);
      }
    }
    if (apexNodeIsExist) {
      apexNodesRequests
        .updateApexNode(existedApexNodeId, fd)
        .then(data => {
          if (data !== null) {
            props.nextStep();
          }
        })
        .catch(err => console.log);
    } else {
      apexNodesRequests
        .createApexNode(fd)
        .then(data => {
          if (data !== null) {
            props.nextStep();
          }
        })
        .catch(err => console.log);
    }
  };

  const deleteNote = () => {
    setRecord(null);
    setRecordURL(null);
  };

  return (
    <div className={classes.container}>
      {showAdvancedDetails ? (
        <AdvancedDetails
          hours={hours}
          minutes={minutes}
          format={format}
          setHours={setHours}
          setMinutes={setMinutes}
          setFormat={setFormat}
          apexNodeIsExist
        />
      ) : null}
      <div className={classes.header}>
        <h4>Apex Node Details</h4>
        <div className={classes.advancedButtons}>
          {showAdvancedDetails ? (
            <CloseIcon onClick={() => setShowAdvancedDetails(false)} />
          ) : null}
          <Button
            className={classes.buttonHeader}
            onClick={() => setShowAdvancedDetails(true)}
          >
            Advanced Details
          </Button>
        </div>
      </div>
      <FormControl
        className={
          showAdvancedDetails
            ? classes.advancedDetailsIsEnable
            : classes.formControl
        }
      >
        <TextArea
          onChange={setApexNodeName}
          helperText={apexNodeName.length + `/140`}
          placeholder="Apex node name"
          maxLength={140}
          value={apexNodeName}
        />

        <div className={classes.dateContainer}>
          <TextArea
            onChange={setApexNodeDate}
            helperText="Year/Month/Day"
            placeholder="Date"
            maxLength={30}
            value={apexNodeDate}
          />

          <div className={classes.dateContainerSwitches}>
            <div>
              <DoubleSwitch
                getValue={handleChangeApexNodeEra}
                defaultValue={era}
              />

              <div className={classes.eraLabel}>
                <p>BCE</p>
                <p>CE</p>
              </div>
            </div>

            <div>
              <SingleSwitch
                onChange={handleChangeApexNodeExact}
                value={isExact}
              />

              <p className={classes.exactLabel}>Exact</p>
            </div>
          </div>
        </div>

        <TextArea
          onChange={setLinks}
          helperText="Supporting Links"
          placeholder="http://website.com, http://yoursite.com"
          value={links}
        />

        <DropzoneArea
          onChange={handleChangeFiles}
          showPreviewsInDropzone={false}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          maxFileSize={15728640}
          dropzoneClass={classes.dropzone}
          dropzoneText="Upload Supporting documents"
          filesLimit={10}
        />
        <List>
          {files
            ? files.map((item, index) => {
                return (
                  <DownloadFileCard
                    key={index}
                    item={item}
                    index={index}
                    deleteFile={deleteFile}
                  />
                );
              })
            : null}
        </List>
      </FormControl>
      {recordURL !== null ? (
        <Player record={recordURL} deleteNote={deleteNote} />
      ) : null}
      <div
        className={
          showAdvancedDetails
            ? classes.showAdvancedDetailsButtons
            : classes.buttonsContainer
        }
      >
        <VoiceNoteButton
          value="Record Audio"
          onRecord={setRecord}
          getRecordURL={setRecordURL}
        />
        <SimpleTextButton value={"CANCEL"} onClick={props.nextStep} />
        <CommonButton
          onClick={saveApexNode}
          value={apexNodeIsExist ? "UPDATE" : "NEXT"}
        />
      </div>
    </div>
  );
};

export default ApexNodeDetails;
