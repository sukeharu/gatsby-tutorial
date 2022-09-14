import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm Sukeharu Kano.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title="About Me" />;
    <meta name="description" content="About Sukeharu Kano" />
  </>
);
export default AboutPage;