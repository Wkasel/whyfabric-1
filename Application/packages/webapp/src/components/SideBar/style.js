import { makeStyles } from '@material-ui/styles';
// import Menu from "@material-ui/core/Menu";

export const useStyles = makeStyles({
  root: {
    width: '300px',
    zIndex: '100',
    position: 'relative',
    paddingBottom: '23px',
    margin: '-8px 0',
    minHeight: '400px',
  },
  header: {
    backgroundColor: '#d7d7d7',
    padding: '12px 20px',
  },
  selectAccount: {
    width: '100%',
    color: '#fff',
    '&:before': {
      display: 'none', // bottom border if no focused
    },
    '&:after': {
      display: 'none',
    },
    '& svg': {
      color: '#fff',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  nav: {
    padding: '0 20px 20px',
  },
  nav_buttons: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  nav_icons: {
    color: '#757575',
  },
  nav_buttons_span: {
    paddingLeft: '10px',
    fontSize: '0.7rem',
    // color: '#7b7b7b'
    color: '#676767',
    fontWeight: '500',
  },
  logoutButton: {
    textTransform: 'none',
    color: '#29b6f6',
    fontSize: '0.7rem',
    margin: '0 20px',
  },
  invite: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    padding: '0 20px',
  },
  invite_elements: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
  },
  invite_field: {
    width: '100%',
    fontSize: '0.8rem',
    '&:before': {
      width: '300px',
      borderBottom: '1px solid red',
    },
    '& label[data-shrink="true"]': {
      color: '#757575',
    },
  },
  invite_button: {
    backgroundColor: 'none',
    padding: '5px ',
    fontSize: '0.7rem',
  },
  invite_buttonIcon: {
    fill: '#b9b9b9',
    marginBottom: '0.8rem',
    '&:hover': {
      fill: '#29b6f6',
    },
  },
  invite_field_underline: {
    height: '3.5rem',
    '&:before': {
      borderBottom: '2px solid #b9b9b9',
      width: '260px',
    },
    '&:after': {
      width: '260px',
      borderBottom: '2px solid #29b6f6',
    },
    '&:hover': {
      '&:not(.Mui-disabled)': {
        '&:before': {
          borderBottom: '2px solid #969696', // hover underline
        },
      },
    },
  },
});
