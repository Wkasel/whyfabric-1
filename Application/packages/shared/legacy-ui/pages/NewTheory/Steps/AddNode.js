import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, FormControl, List } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";

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

import CreateNewNode from "../../../elements/interfaceElements/CreateNewNode";

import AdvancedDetails from "../../../elements/interfaceElements/AdvancedDetails";

import DownloadFileCard from "../../../elements/interfaceElements/DownloadFileCard";
import CloseIcon from "@material-ui/icons/Close";

import Player from "../../../elements/formElements/Player";

import { eventsRequests } from "../../../../utils/API";

import ImpactSlider from "../../../elements/interfaceElements/ImpactSlider.js";

const useStyles = makeStyles({
  container: {
    width: "390px",
    height: "100%",
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

const AddNode = props => {
  const classes = useStyles();

  const [addNode, setAddNode] = useState(false);

  const [nodeName, setNodeName] = useState("");
  const [nodeDate, setNodeDate] = useState("");
  const [era, setEra] = useState(true);
  const [isExact, setExact] = useState(false);
  const [impactValue, setImpactValue] = useState(1);
  const [links, setLinks] = useState("");
  const [files, setFiles] = useState([]);

  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false);

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [format, setFormat] = useState("");

  const [eventType, setEventType] = useState("");
  const [isPassive, setIsPassive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [record, setRecord] = useState(null);
  const [recordURL, setRecordURL] = useState(null);

  const [editNode, setEditNode] = useState(false);
  const [editNodeId, setEditNodeId] = useState(false);

  const [clear, makeClear] = useState(false);

  useEffect(() => {
    setEditNode(false);
    setEditNodeId(false);
    setNodeName("");
    setNodeDate("");
    setEra(false);
    setExact(false);
    setImpactValue(1);
    setLinks("");
    setHours("");
    setMinutes("");
    setFormat("");
    setEventType("");
    setIsActive(false);
    setIsPassive(false);
    setAddNode(false);
    setFiles([]);
    setRecordURL(null);
    setRecord(null);
  }, [clear]);

  useEffect(() => {
    console.log(props.editNodeId);
    if (props.editNodeId) {
      console.log(props.editNodeId);
      setAddNode(true);
      eventsRequests
        .getEvent(props.editNodeId)
        .then(data => {
          console.log(data.data);
          setEditNode(true);
          setEditNodeId(data.data._id);
          setNodeName(data.data.name);
          setNodeDate(data.data.date);
          data.data.era === "BCE" ? setEra(false) : setEra(true);
          setExact(data.data.isExact);
          setImpactValue(data.data.impact);
          setLinks(data.data.links.toString());
          setHours(data.data.hour);
          setMinutes(data.data.minute);
          setFormat(data.data.format);
          setEventType(data.data.eventType);
          setIsActive(data.data.isActive);
          setIsPassive(data.data.isPassive);
          setFiles(data.data.files);
          setRecordURL(data.data.voice_note[0].location);
        })
        .catch(err => console.log(err));
      props.setEditNodeId(null);
    }
  }, [props.editNodeId]);
  const handleChangeNodeEra = value => {
    setEra(value);
  };
  const handleChangeNodeExact = value => {
    setExact(value);
  };
  const handleChangeImpact = value => {
    setImpactValue(value);
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
    console.log(item);
    if (item.isSaved) {
      let fileName = { filename: item.name };
      eventsRequests.deleteFile(editNodeId, fileName).then(data => {
        let arr = files.slice();
        let res = arr.splice(index, 1);
        setFiles(arr);
      });
    } else {
      let arr = files.slice();
      let res = arr.splice(index, 1);
      setFiles(arr);
    }
  };

  const saveNode = () => {
    console.log(files);
    const fd = new FormData();
    console.log(fd);

    const formData = {
      theoryId: props.theoryId,
      name: nodeName,
      date: nodeDate,
      era: era ? "CE" : "BCE",
      hour: hours,
      minute: minutes,
      format: format,
      impact: impactValue,
      eventType: eventType,
      isPassive: isPassive,
      isActive: isActive,
      isExact: isExact,
      links: links.split(",").map(item => item.trim()),
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

    if (editNode) {
      eventsRequests
        .updateEvent(editNodeId, fd)
        .then(data => {
          setAddNode(false);
          props.setReload(true);
          props.setEditNodeId(null);
          makeClear(!clear);
        })
        .catch(err => console.log(err));
    } else {
      eventsRequests
        .createEvent(props.theoryId, fd)
        .then(data => {
          setAddNode(false);
          props.setReload(true);
          makeClear(!clear);
        })
        .catch(err => console.log(err));
    }
  };

  const deleteNote = () => {
    setRecord(null);
    setRecordURL(null);
  };
  return addNode ? (
    <div className={classes.container}>
      {showAdvancedDetails ? (
        <AdvancedDetails
          isNode
          editNode={editNode}
          hours={hours}
          minutes={minutes}
          format={format}
          setHours={setHours}
          setMinutes={setMinutes}
          setFormat={setFormat}
          eventType={eventType}
          setEventType={setEventType}
          isActive={isActive}
          setIsActive={setIsActive}
          isPassive={isPassive}
          setIsPassive={setIsPassive}
        />
      ) : null}
      <div className={classes.header}>
        <h4>Add Node</h4>
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
          onChange={setNodeName}
          helperText={nodeName.length + `/140`}
          placeholder="Apex node name"
          maxLength={140}
          value={nodeName}
        />
        <div className={classes.dateContainer}>
          <TextArea
            onChange={setNodeDate}
            helperText="Year/Month/Day"
            placeholder="Date"
            maxLength={30}
            value={nodeDate}
          />

          <div className={classes.dateContainerSwitches}>
            <div>
              <DoubleSwitch getValue={handleChangeNodeEra} defaultValue={era} />

              <div className={classes.eraLabel}>
                <p>CE</p>
                <p>BCE</p>
              </div>
            </div>

            <div>
              <SingleSwitch onChange={handleChangeNodeExact} value={isExact} />
              <p className={classes.exactLabel}>Exact</p>
            </div>
          </div>
        </div>

        <ImpactSlider onChange={handleChangeImpact} impactValue={impactValue} />
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
        <SimpleTextButton onClick={() => makeClear(!clear)} value={"CANCEL"} />
        <CommonButton
          onClick={saveNode}
          value={editNode ? "UPDATE" : "CREATE"}
        />
      </div>
    </div>
  ) : (
    <CreateNewNode
      createNewNode={() => setAddNode(!addNode)}
      nextStep={props.nextStep}
    />
  );
};

export default AddNode;
