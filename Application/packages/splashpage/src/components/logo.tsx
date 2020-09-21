import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { ReactSVG } from 'react-svg';

const useStyles = makeStyles({
  logo: {
    textAlign: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

// import LogoSVG from '../assets/images/whyfabric-logo.svg';

const Logo: React.FC = () => {
  const classes = useStyles();
  // <NavLink to="/">
  return (
    <ReactSVG
      src="whyfabric-logo.svg"
      afterInjection={(error, svg) => {
        if (error) {
          console.error(error);
          return;
        }
      }}
      beforeInjection={(svg) => {
        svg.classList.add('svg-class-name');
        svg.setAttribute('style', 'width: 200px');
        svg.setAttribute('style', 'padding-top: 10px');
      }}
      evalScripts="always"
      fallback={() => <span>Error!</span>}
      renumerateIRIElements={false}
      wrapper="span"
      className={classes.logo}
      onClick={() => {
        // console.log('wrapper onClick');
      }}
    />
  );
};

export default Logo;
