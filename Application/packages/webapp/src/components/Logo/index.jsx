import { makeStyles } from '@material-ui/styles';

import { ReactSVG } from 'react-svg';

const useStyles = makeStyles({
  logo: {
    maxWidth: '150px',
  },
});

const Logo = () => {
  const classes = useStyles();
  // <NavLink to="/">
  return (
    <ReactSVG
      src="/images/whyfabric-logo.svg"
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
      loading={() => <span>Loading</span>}
      renumerateIRIElements={false}
      wrapper="span"
      className={classes.logo}
      onClick={() => {
        console.log('wrapper onClick');
      }}
    />
  );
};

export default Logo;
