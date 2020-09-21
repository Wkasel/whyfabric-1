import { makeStyles } from '@material-ui/styles';

import { ReactSVG } from 'react-svg';

const useStyles = makeStyles({
  logomark: {
    maxWidth: '${size}px',
  },
});

const Logomark = ({ size = '120' }) => {
  const classes = useStyles();
  // <NavLink to="/">
  return (
    <ReactSVG
      src="/images/logomark.svg"
      afterInjection={(error, svg) => {
        if (error) {
          console.error(error);
          return;
        }
      }}
      beforeInjection={(svg) => {
        svg.classList.add('svg-class-name');
        svg.setAttribute('style', `width: ${size}px`);
        svg.setAttribute('style', 'padding-top: 10px');
      }}
      evalScripts="always"
      fallback={() => <span>Error!</span>}
      loading={() => <span>Loading</span>}
      renumerateIRIElements={false}
      wrapper="span"
      className={classes.logomark}
      onClick={() => {
        console.log('wrapper onClick');
      }}
    />
  );
};

export default Logomark;
