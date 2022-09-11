import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm Sukeharu Kano.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>;
    <meta name="description" content="About Sukeharu Kano" />
  </>
);
export default AboutPage;