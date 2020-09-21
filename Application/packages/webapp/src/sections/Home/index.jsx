import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
// import LazyLoad from "react-lazyload";
//
// import { withSuspense } from "../HoC/withSuspense";

// Material
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Styles
import { useStyles } from './styles';

// WhyFabric Components
import ScrollableLibrary from '@components/ScrollableLibrary';
import Search from '@components/Search';
import TheoryCard from '@components/SectionCards/TheoryCard';

/*
// i18n Language Files
// TODO: Update aliasw to point inside ./components for @i18n
// import { t, i18n } from "@i18n";
// {t("homepage:header")}
// {t("homepage:introductionHeader")}
// <Grid container>
//   <Grid item xs={12}>
//
//   </Grid>
//   <Grid item xs={12}>
//     <ScrollableLibrary />
//   </Grid>
//   <Grid item xs={12}>
//     <ScrollableLibrary />
//   </Grid>
// </Grid>
//
// lang={i18n.language}
//
*/

const HomePageContent = () => {
  const classes = useStyles();
  // const { t, i18n } = useTranslation(["common", "HomePage"]);
  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs></Grid>
        <Grid container item xs={8} className={classes.headerContainer}>
          <Typography variant="h1" gutterBottom className={classes.welcome}>
            Causes and consequences of World Events.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            className={classes.subheader}
          >
            See how they are interconnected.
          </Typography>
          <Search />
        </Grid>
        <Grid container item xs></Grid>
      </Grid>
      <Typography variant="h5" component="h5" gutterBottom>
        Yesterday
      </Typography>
      <ScrollableLibrary />
      <Typography variant="h5" component="h5" gutterBottom>
        Today
      </Typography>
      <ScrollableLibrary />}
      <Typography variant="h5" component="h5" gutterBottom>
        Tomorrow
      </Typography>
      <ScrollableLibrary />
    </Container>
  );
};

// HomePageContent.getInitialProps = async () => {
//   // const {
//   //   // @ts-ignore
//   //   data: { me }
//   // } = await checkLoggedIn(apolloClient);
//
//   const initialProps = await {
//     namespacesRequired: ["common", "homepage", "menu", "languages"],
//     t: undefined
//   };
//
//   return initialProps;
// };
export default HomePageContent;
// export default withSuspense(HomePageContent);
