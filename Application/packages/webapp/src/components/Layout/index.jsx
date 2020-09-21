import { useEffect } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import { Theme } from '@material-ui/core/styles';

// Configs
import { config } from '@config/settings';

// Styles
import useStyles from './styles';

// WhyFabric Components
import AppBar from '@components/AppBar';
import FooterArea from '@sections/Footer';
import { Box } from '@material-ui/core';

const Layout = (props) => {
  const classes = useStyles();
  const { children } = props;

  useEffect(() => {
    if ('serviceWorker' in navigator && !config.common.DEV) {
      if (
        navigator.serviceWorker.getRegistrations.length === 0 &&
        navigator.onLine
      ) {
        navigator.serviceWorker.register('/service-worker.js');
      }
    }
  });

  return (
    <>
      <Box display="flex" flexDirection="column" style={{ height: '100%' }}>
        <Box>
          <AppBar search={false} back={false} />
        </Box>
        <Box flexGrow={1}>
          <main className={classes.root}>{children}</main>
        </Box>
        <Box>
          <FooterArea />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
