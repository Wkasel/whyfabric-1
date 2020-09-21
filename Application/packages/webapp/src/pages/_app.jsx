import React from 'react';
import app from 'next/app';

// import { NormalizedCache, NormalizedCacheObject } from "apollo-cache-inmemory";
// import { ApolloClient } from "apollo-client";
// import { Request } from "express";
import { ApolloProvider } from 'react-apollo';
// import Router from "next/router";
// import withGA from "next-ga";

// Material
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// HOC's
import getPageContext from '@util/getPageContext';

// Data
// import withApollo from "@data/withApollo";

// WhyFabric
import Layout from '@components/Layout';

// @withGA("UA-XXXXXX", Router)
class App extends app {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const {
      Component,
      pageProps,
      // getDisableStylesGeneration,
      // apolloClient,
      // apolloState,
      router,
    } = this.props;
    const withPageContext = getPageContext();
    return (
      <>
        {/* Wrap every page in Styles and Theme providers */}
        <StylesProvider
          // disableGeneration={getDisableStylesGeneration}
          // @ts-ignore
          generateClassName={withPageContext.generateClassName}
          sheetsRegistry={withPageContext.sheetsRegistry}
          sheetsManager={withPageContext.sheetsManager}
        >
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={withPageContext.theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Make sure body padding isn't changed unless specifically stated!
             * Also, keep the scroll-bar for consistency  */}
            <style jsx global>
              {`
                @import '../SxS-Ui/theme/scss/material-kit-pro-react.scss' body {
                  padding: 0 !important;
                  overflow-y: scroll !important;
                }
                @font-face {
                  font-display: swap;
                }
                * {
                  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
                  -moz-box-sizing: border-box; /* Firefox, other Gecko */
                  box-sizing: border-box; /* Opera/IE 8+ */
                  -webkit-tap-highlight-color: rgba(
                    0,
                    0,
                    0,
                    0
                  ); //  remove tap highlight color for mobile safari
                }

                html,
                body,
                #__next {
                  height: 100%;
                }

                body {
                  margin: 0;
                  min-width: 320px;
                  color: $secondary-color;
                  font-size: 16px;
                  font-family: 'Roboto', sans-serif;
                } /* Remove body margins */

                a {
                  text-decoration: none !important;
                  color: $primary-color;
                }
                a:hover {
                  color: $primary-color;
                }
                a:visited {
                  color: $primary-color;
                }

                input {
                  outline: none;
                }

                /* scrollbar (chrome, safari) */
                .custom-scrollbar::-webkit-scrollbar {
                  display: block;
                  width: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: rgba(0, 0, 0, 0.05);
                  border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: rgba(117, 117, 117, 0.5);
                  border-radius: 2px;
                }

                /* scrollbar (firefox) */
                .custom-scrollbar {
                  scrollbar-width: thin;
                  scrollbar-color: rgba(117, 117, 117, 0.3) rgba(0, 0, 0, 0.03);
                }
              `}
            </style>

            {/* ApolloProvider makes the apollo client available the React tree.
             *  It's available via 'react-apollo' GQL components, e.g <Query> & <Mutation>
             */}

            <Layout>
              {/* <ApolloProvider client={apolloClient}> */}
              <Component pageContext={withPageContext} {...pageProps} />
              {/* </ApolloProvider> */}
            </Layout>
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  }
}
// <ApolloProvider client={apolloClient}>
// </ApolloProvider>

// // export default withApollo(appWithTranslation(App));
// export default withApollo(App);
export default App;
