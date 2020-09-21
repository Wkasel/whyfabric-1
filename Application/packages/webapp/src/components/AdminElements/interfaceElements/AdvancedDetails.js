import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Selector } from '../formElements/Selector';
import { SingleSwitch } from '../formElements/Switches';

// import TimeValues from '../../utils/data/TimeValues.json';

const TimeValues = {};
const useStyle = makeStyles({
  advancedDetails: {
    width: '390px',
    position: 'absolute',
    top: '70px',
    left: '0',
    zIndex: '100',
    marginTop: '20px',
    backgroundColor: '#fff',
    padding: '25px 20px',
    boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.25)',
  },
  advancedDetailsTime: {
    display: 'flex',
    justifyContent: 'space-between',
    '&>div': {
      width: '30%',
    },
  },
  eventsSettings: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  eventTypeSelector: {
    width: '200px',
  },
  eventTypeSwitches: {
    display: 'flex',
    width: '100px',
    '& p': {
      fontSize: '0.7rem',
      textAlign: 'center',
      color: '#bdbdbd',
    },
  },
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 35 * 4.5 + 8,
      width: 120,
    },
  },
};

const AdvancedDetails = (props) => {
  const classes = useStyle();

  const changeTime = (e) => {
    props.setHours(e);
  };
  const changeMinutes = (e) => {
    props.setMinutes(e);
  };
  const changeFormat = (e) => {
    props.setFormat(e);
  };
  const changeEventType = (e) => {
    props.setEventType(e);
  };
  const changeIsPassive = (e) => {
    props.setIsPassive(e);
  };
  const changeIsActive = (e) => {
    props.setIsActive(e);
  };
  return (
    <div className={classes.advancedDetails}>
      <div className={classes.advancedDetailsTime}>
        <Selector
          defaultValue="Hr"
          elements={TimeValues.hours}
          onChange={changeTime}
          MenuProps={MenuProps}
          saveValue
          value={props.isNode || props.apexNodeIsExist ? props.hours : false}
        />
        <Selector
          defaultValue="Min"
          elements={TimeValues.minutes}
          onChange={changeMinutes}
          MenuProps={MenuProps}
          value={props.isNode || props.apexNodeIsExist ? props.minutes : false}
        />
        <Selector
          defaultValue="Format"
          elements={TimeValues.formats}
          onChange={changeFormat}
          MenuProps={MenuProps}
          value={props.isNode || props.apexNodeIsExist ? props.format : false}
        />
      </div>

      {props.isNode ? (
        <div className={classes.eventsSettings}>
          <div className={classes.eventTypeSelector}>
            <Selector
              defaultValue="Event Type"
              elements={['Turning Point', 'Gov. Action']}
              onChange={changeEventType}
              value={props.isNode ? props.eventType : false}
            />
          </div>
          <div className={classes.eventTypeSwitches}>
            <div>
              <SingleSwitch
                onChange={changeIsPassive}
                value={props.isPassive}
              />
              <p>Passive</p>
            </div>
            <div>
              <SingleSwitch onChange={changeIsActive} value={props.isActive} />
              <p>Active</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdvancedDetails;
