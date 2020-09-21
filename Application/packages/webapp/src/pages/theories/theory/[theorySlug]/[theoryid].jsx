import React, { useEffect } from 'react';
import { NextSeo, CourseJsonLd } from 'next-seo';
// import { HOST } from "../../config/settings";
// import { StatelessPage, TranslateFn } from "StatelessPage";

import '@util/installMUIStyles';

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import TheoryContent from '@sections/TheoryContent';

// Contexts
import { useCanvasContext } from '@components/HoC/withCanvasContext';

import Comments from '@components/Comments';

// import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
// import Link from "../theme/Link";
//
const title = 'WhyFabric | Brexit Theory by William Kasel';
const description = 'Theory';
const HOST = 'http://localhost:3000';

/* Next SEO now has the ability to set JSON-LD a form of structured data.
 * Structured data is a standardised format for providing information about
 * a page and classifying the page content.
 * https://developers.google.com/search/docs/data-types/article
 *
 * Article
 * Breadcrumb
 * Blog
 * Course
 * Corporate Contact
 * FAQ Page
 * Local Business
 * Product
 * Social Profile
 * News Article
 * <CourseJsonLd
 *  courseName="GraphQL Language course"
 *  providerName="Course Provider"
 *   providerUrl="https://atheros.ai"
 *   description="GraphQL Mastery is a platform for learning to build GraphQL driven apps"
 * />
 */
// them: Theme)
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
const TheoryPage = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { contain, setContain } = useCanvasContext();

  // setContain(false);
  console.log(props.match);
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
      <TheoryContent theoryId={props.match} />
    </>
  );
};

TheoryPage.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  console.log(match, history, location);
  return { test: true };
};

// export default withApolloClientStatic(HomePage);
export default TheoryPage;
