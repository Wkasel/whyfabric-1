import React, { useState } from 'react';
// import ScrollMenu from "react-horizontal-scrolling-menu";
import { makeStyles, Theme } from '@material-ui/core/styles';
// Material UI
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ReactSVG } from 'react-svg';
import { useStyles } from './styles';
/*
//
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
// }
//
// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;
//
//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </Typography>
//   );
// }
//
// function a11yProps(index: any) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     "aria-controls": `scrollable-auto-tabpanel-${index}`
//   };
// }
*/

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//
//   }
// }));

export const LibraryItem = (props) => {
  const { key, title, author } = props;
  return (
    <Grid container item xs={3} lg={4}>
      <ReactSVG
        src="/images/sample-graph.svg"
        evalScripts="always"
        key={key}
        fallback={() => <span>Error!</span>}
        loading={() => <span>Loading</span>}
        renumerateIRIElements={false}
        wrapper="span"
        className="wrapper-class-name"
      />
      <Typography component="h3" gutterBottom>
        {title}
      </Typography>
      <br /> <br />
      <Typography component="h5" gutterBottom>
        {author}
      </Typography>
    </Grid>
  );
};

export const ProfileTheory = (props) => {
  const { key, title, author } = props;
  return (
    <>
      <ReactSVG
        src="/images/sample-graph.svg"
        evalScripts="always"
        key={key}
        fallback={() => <span>Error!</span>}
        loading={() => <span>Loading</span>}
        renumerateIRIElements={false}
        wrapper="span"
        className={props.imgClass}
      />
      <Typography component="h3" gutterBottom>
        {title}
      </Typography>
      <br /> <br />
      <Typography component="h5" gutterBottom>
        {author}
      </Typography>
    </>
  );
};

// const LibraryList = props => {
//   const classes = useStyles();
//   console.log("ETF");
//   return [
//     { key: 0, title: "Brexit", author: "William Kasel" },
//     { key: 1, title: "Brexit", author: "William Kasel" },
//     { key: 2, title: "Brexit", author: "William Kasel" },
//     { key: 3, title: "Brexit", author: "William Kasel" },
//     { key: 4, title: "Brexit", author: "William Kasel" },
//     { key: 5, title: "Brexit", author: "William Kasel" }
//   ].map(item => {
//     return <LibraryItem {...item} className={classes.theoryLibraryItem} />;
//   });
// };

const ScrollableLibrary = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log('asd');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [
    { key: 0, title: 'Brexit', author: 'William Kasel' },
    { key: 1, title: 'Brexit', author: 'William Kasel' },
    { key: 2, title: 'Brexit', author: 'William Kasel' },
    { key: 3, title: 'Brexit', author: 'William Kasel' },
    { key: 4, title: 'Brexit', author: 'William Kasel' },
    { key: 5, title: 'Brexit', author: 'William Kasel' },
  ];
  // return (
  // <ScrollMenu
  //   className={classes.root}
  //   ScrollMenu={classes.theoryLibraryItem}
  //   data={LibraryList}
  //   arrowLeft={ArrowBackIosIcon}
  //   arrowRight={ArrowForwardIosIcon}
  // />
  // );
  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textcolor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Grid container className={classes.theoryLibraryContainer}>
          {data.map((item) => {
            return (
              <LibraryItem {...item} className={classes.theoryLibraryItem} />
            );
          })}
        </Grid>
      </Tabs>
    </div>
  );
};

export default ScrollableLibrary;
// One item component
// selected prop will be passed
// const MenuItem = ({ name }) => {
//   return (
//     <Paper elevation={3}>
//       <ReactSVG
//         src="images/sample-graph.svg"
//         evalScripts="always"
//         fallback={() => <span>Error!</span>}
//         loading={() => <span>Loading</span>}
//         renumerateIRIElements={false}
//         wrapper="span"
//         onClick={() => {
//           console.log("wrapper onClick");
//         }}
//       />
//     </Paper>
//   );
// };
//
// const Menu = items =>
//   items.map(el => {
//     const { name } = el;
//     return <MenuItem text={name} key={name} />;
//   });

//
// selected={selected}
// const [selected, setSelected] = useState({ selected: null });
// selected={selected}
// onSelect={setSelected}
// // selected
// {`menu-item ${selected ? "active" : ""}`}
// const ScrollableLibrary: React.FunctionComponent = ({ data: [] }) => {
//   const classes = useStyles();
//
//   return (
//     <ScrollMenu
//       className={classes.root},
//       ScrollMenu={classes.theoryLibraryItem}
//       data={data: [] => <Menu data={data} />}
//       arrowLeft={ArrowBackIosIcon}
//       arrowRight={ArrowForwardIosIcon}
//     />
//   );
// };
//
// export default ScrollableLibrary;
