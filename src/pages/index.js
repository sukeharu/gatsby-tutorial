// Step 1 import React
import * as React from 'react';
import Layout from '../components/layout';

// Step 2 Define my component(s)
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page!</title>;
export default IndexPage;