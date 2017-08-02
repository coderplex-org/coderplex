import React from 'react';

import redirect from '../utils/redirect';
import { authenticate } from '../utils/authenticate';
import Header from '../components/header';
import Footer from '../components/footer';

export default Page => {
  return class SecretPage extends React.Component {
    static async getInitialProps(ctx) {
      let authData;
      let initialProps = {};
      const pathName = ctx.req ? ctx.req.url : ctx.pathname;
      if (ctx.req && ctx.req.user) {
        authData = ctx.req.user;
      } else {
        try {
          authData = await authenticate(ctx);
        } catch (err) {
          console.log(err);
          return redirect(ctx);
        }
      }
      if (
        pathName === '/profile' &&
        authData.interestedTechnologies.length === 0
      ) {
        return redirect(ctx, '/profile/new');
      }
      if (!authData) {
        if (pathName === '/login') {
          if (Page.getInitialProps) {
            initialProps = await Page.getInitialProps(...ctx);
          }
          return { ...initialProps };
        }
        return redirect(ctx);
      }
      if (Page.getInitialProps) {
        initialProps = await Page.getInitialProps({ ...ctx });
      }
      return { ...authData, ...initialProps };
    }
    render() {
      return (
        <div>
          <Header {...this.props} title={'CoderPlex | Profile-New'} />
          <Page {...this.props} />
          <Footer />
        </div>
      );
    }
  };
};
