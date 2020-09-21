import React, { useEffect } from 'react';
import { NextSeo, CourseJsonLd } from 'next-seo';
// import { HOST } from "../../config/settings";
//
const HOST = 'http://localhost:3000';
// import { StatelessPage, TranslateFn } from "StatelessPage";

import '@util/installMUIStyles';

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// import SearchResults from "@sections/SearchResults";
import StandaloneSearchSection from '@sections/StandaloneSearch';

// import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
// import Link from "../theme/Link";
//
const title = 'WhyFabric';
const description = 'Search Results';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  description: {
    maxWidth: 500,
    margin: '0 auto 20px auto',
  },
  button: {
    margin: '0 10px 15px 10px',
  },
});
const SearchPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://whyfabric.com',
          title,
          description,
          images: [
            { url: `${HOST}/images/social_fb` },
            { url: `${HOST}/images/social_twitter` },
          ],
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: 'The why behind the why',
        }}
        twitter={{
          handle: '@whyfabric',
          site: '@whyfabric',
          cardType: 'summary_large_image',
        }}
      />
      <br />
      <br />
      <StandaloneSearchSection />
    </>
  );
};

// export default withApolloClientStatic(HomePage);
export default SearchPage;
