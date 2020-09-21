import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    searchArea: {
      flexBasis: '40%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      background: '#f9f9f9',
      borderRadius: '3px',
      margin: '0 5px',
      padding: '3px',
    },
    searchField: {
      width: '100%',
      padding: '0 10px',
      '&:before': {
        content: '',
      },
      '& label': {
        color: 'red',
      },
    },
    searchFieldHide: {
      visibility: 'hidden',
    },
    underline: {
      '&:after': {
        cursor: 'pointer',
        borderBottom: '1px solid #8a8a8a', // focus underline
      },
      '&:before': {
        borderBottom: '1px solid transparent', // hover underline
      },
      '&:hover': {
        '&:not(.Mui-disabled)': {
          '&:before': {
            borderBottom: '1px solid #b9b9b9', // hover underline
          },
        },
      },
    },
    searchButton: {
      cursor: 'pointer',
      backgroundColor: '#0db1fb',
      borderRadius: '3px',
      padding: '12px',
      boxShadow: '0 2px 3px -1px rgba(0, 0, 0, 0.5)',
      '&:hover': {
        backgroundColor: '#0db1fb',
      },
    },
    searchIcon: {
      fill: '#fff',
    },
  })
);

// const StyledMenu = withStyles({
//   paper: {
//     boxShadow: '3px 5px 15px 1px rgba(0, 0, 0, .3)',
//     top: '72px !important',
//     right: '0 !important',
//     left: 'auto !important',
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));
