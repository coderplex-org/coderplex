import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

export default Page => {
  return class PublicPage extends React.Component {
    static async getInitialProps(ctx) {
      let initialProps = {};
      if (Page.getInitialProps) {
        initialProps = await Page.getInitialProps(ctx);
      }
      return { ...initialProps };
    }
    render() {
      return (
        <div>
          <Header {...this.props} />
          <Page {...this.props} />
          <Footer />
        </div>
      );
    }
  };
};
