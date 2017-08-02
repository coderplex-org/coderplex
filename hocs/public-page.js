import React from 'react';

import redirect from '../utils/redirect';
import { authenticate } from '../utils/authenticate';
import Header from '../components/header';
import Footer from '../components/footer';

export default Page => {
  return class PublicPage extends React.Component {
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
          console.error(err);
          if (Page.getInitialProps) {
            initialProps = await Page.getInitialProps(ctx);
          }
          return { ...initialProps };
        }
      }

      if (authData) {
        if (pathName === '/login') {
          return redirect(ctx, '/profile');
        }
      }
      if (Page.getInitialProps) {
        initialProps = await Page.getInitialProps(ctx);
      }
      if (!authData) {
        return { ...initialProps };
      }
      return { ...authData, ...initialProps };
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
