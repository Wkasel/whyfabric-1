import React, { useEffect } from 'react';
import { NextSeo, CourseJsonLd } from 'next-seo';
// import { HOST } from "../../config/settings";
// import { StatelessPage, TranslateFn } from "StatelessPage";

// import "@util/installMUIStyles";

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import BlogHomePageContent from '@sections/Blog/BlogHomePageContent';
import AppBar from '@components/AppBar';
import { useCanvasContext } from '@components/HoC/withCanvasContext';

// import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
// import Link from "../theme/Link";
//
const title = 'WhyFabric';
const description = 'The Why Behind the Why';
const HOST = 'http://localhost:5000';

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
// : React.FunctionComponent
//
const BlogHomePage = () => {
  const { contain, setContain } = useCanvasContext();

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
      <BlogHomePageContent />
    </>
  );
};

// export default withApolloClientStatic(HomePage);
export default BlogHomePage;
