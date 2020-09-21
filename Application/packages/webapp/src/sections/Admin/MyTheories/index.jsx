import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/core icons
import Person from '@material-ui/icons/Person';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Reply from '@material-ui/icons/Reply';
import Favorite from '@material-ui/icons/Favorite';
// core components
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Table from '@sxs/comps/Table/Table.js';
import Button from '@sxs/comps/CustomButtons/Button.js';
import Media from '@sxs/comps/Media/Media.js';
import CustomInput from '@sxs/comps/CustomInput/CustomInput.js';
import Paginations from '@sxs/comps/Pagination/Pagination.js';

import style from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';

import avatar from '@sxs/theme/img/faces/avatar.jpg';
import kendall from '@sxs/theme/img/faces/kendall.jpg';
import marc from '@sxs/theme/img/faces/marc.jpg';
import placeholder from '@sxs/theme/img/placeholder.jpg';
import product1 from '@sxs/theme/img/product1.jpg';
import product2 from '@sxs/theme/img/product2.jpg';
import product3 from '@sxs/theme/img/product3.jpg';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsconfig from 'src/aws-exports';
import { getUser } from 'src/graphql/queries';
Amplify.configure(awsconfig);

import { values, map } from 'lodash';

const useStyles = makeStyles(style);

export const MyTheories = () => {
  const [checked, setChecked] = React.useState([1, 3, 5]);
  let user;
  const [me, setMe] = React.useState({});
  const [theories, setTheories] = React.useState([]);

  React.useEffect(() => {
    getMyTheories();
  }, [user]);

  const getMyTheories = async () => {
    user = await Auth.currentAuthenticatedUser();
    const { data, errors } = await API.graphql(
      graphqlOperation(getUser, { id: user.username })
    );
    setMe(data.getUser);
    setTheories(data.me.theoriesByOwner);
  };

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  const fillButtons = [
    { color: 'info', icon: Person },
    { color: 'success', icon: Edit },
    { color: 'danger', icon: Close },
  ].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const simpleButtons = [
    { color: 'info', icon: Person },
    { color: 'success', icon: Edit },
    { color: 'danger', icon: Close },
  ].map((prop, key) => {
    return (
      <Button simple justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const roundButtons = [
    { color: 'info', icon: Person },
    { color: 'success', icon: Edit },
    { color: 'danger', icon: Close },
  ].map((prop, key) => {
    return (
      <Button round justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });

  return (
    <Table
      tableHead={['ID', 'Name', 'Description']}
      tableData={map(theories.items, (t) => values(t))}
      customCellClasses={[
        classes.textCenter,
        classes.textRight,
        classes.textRight,
      ]}
      customClassesForCells={[0, 4, 5]}
      customHeadCellClasses={[
        classes.textCenter,
        classes.textRight,
        classes.textRight,
      ]}
      customHeadClassesForCells={[0, 4, 5]}
    />
  );
};
