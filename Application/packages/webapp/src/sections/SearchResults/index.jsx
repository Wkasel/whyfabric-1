import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Table from '@sxs/comps/Table/Table.js';
import Button from '@sxs/comps/CustomButtons/Button.js';
import Paginations from '@sxs/comps/Pagination/Pagination.js';

import { ReactSVG } from 'react-svg';

import style from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';
const useStyles = makeStyles(style);

const TableResults = (classes) => [
  <ReactSVG
    src="/images/sample-graph.svg"
    evalScripts="always"
    key={123}
    fallback={() => <span>Error!</span>}
    loading={() => <span>Loading</span>}
    renumerateIRIElements={false}
    wrapper="span"
    className="wrapper-class-name"
  />,
  <span key={8756431}>
    <a href="#jacket" className={classes.tdNameAnchor}>
      Brexit
    </a>
    <br />
    <small className={classes.tdNameSmall}>
      A brief understanding of the events that led to Brittain filing articles
      to leave the European Union.
    </small>
  </span>,
  'William Kasel',
  new Date().toString(),
  <Tooltip
    key={8756431234}
    id="close1"
    title="Browse Alternates"
    placement="left"
    classes={{ tooltip: classes.tooltip }}
  >
    <Button link className={classes.actionButton}>
      5 Alternate Theories
    </Button>
  </Tooltip>,
];

const SearchResults = () => {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h4>Search Results</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Table
            tableHead={[
              '',
              'Theory',
              'Published By',
              'Published On',
              'Alternative Theory',
              '',
            ]}
            tableData={[TableResults(classes)]}
            tableShopping
            customHeadCellClasses={[
              classes.textCenter,
              classes.description,
              classes.description,
              classes.textCenter,
              classes.textRight,
              classes.textRight,
            ]}
            customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
            customCellClasses={[
              classes.tdName,
              classes.customFont,
              classes.customFont,
              classes.tdNumber + ' ' + classes.textCenter,
              classes.tdNumber + ' ' + classes.tdNumberAndButtonGroup,
              classes.tdNumber + ' ' + classes.textCenter,
            ]}
            customClassesForCells={[1, 2, 3, 4, 5, 6]}
          />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default SearchResults;
