// Step 1 import React
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2 Define my component(s)
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/cream-puffs-g6978faef7_1920.jpg"
        alt="cream puff"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default IndexPage;