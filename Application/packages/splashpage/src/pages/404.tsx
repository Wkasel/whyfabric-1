import React from 'react';
import { PageProps, StaticQueryProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const NotFound: React.FC<{ Props }> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFound;