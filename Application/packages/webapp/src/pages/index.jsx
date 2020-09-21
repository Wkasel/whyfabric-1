import React, { useEffect } from 'react';
import { NextSeo, CourseJsonLd } from 'next-seo';
// import { HOST } from "../../config/settings";
// import { StatelessPage, TranslateFn } from "StatelessPage";

import '@util/installMUIStyles';

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
//
// import Paper from "@material-ui/core/Paper";
// import Typography from '@material-ui/core/Typography'

// import TitleAndDescription from '@components/Head/Title&Description'
// import Layout from "@components/UI/Layout/Layout";

// import { i18n, withNamespaces } from "../i18n";
// import Carousel from "../components/HomePage/Carousel/CarouselHooks";
// import Subscription from "../components/HomePage/Subscription/Subscription";
// import SubscriptionsTable from "../components/HomePage/SubscriptionsTable/SubscriptionsTable";
// import Footer from "../components/HomePage/HomePageFooter/HomePageFooter";
// import withApolloClientStatic from "../lib/with-apollo-client-static";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import HomePageContent from '@sections/Home/home2';
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
const HomePage = () => {
  const { contain, setContain } = useCanvasContext();

  // setContain(true);

  useEffect(() => {
    import('webfontloader').then((WebFont) =>
      WebFont.load({
        google: {
          families: ['Montserrat'],
        },
      })
    );
    /************************************
     *
     * Register Service Worker
     *
     ************************************/
    // if (NODE_ENV === "production" && "serviceWorker" in navigator) {
    //   navigator.serviceWorker
    //     .register("/service-worker.js")
    //     .then(() => {
    //       // eslint-disable-next-line no-console
    //       console.log("service worker registration successful");
    //     })
    //     .catch(err => {
    //       // eslint-disable-next-line no-console
    //       console.warn("service worker registration failed", err.message);
    //     });
    // }
  }, []);
  // const theme = useTheme();
  // const classes = useStyles(theme);
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
          site_name: 'The why behind thewhy',
        }}
        twitter={{
          handle: '@whyfabric',
          site: '@whyfabric',
          cardType: 'summary_large_image',
        }}
      />
      <HomePageContent />
    </>
  );
};

// export default withApolloClientStatic(HomePage);
export default HomePage;
