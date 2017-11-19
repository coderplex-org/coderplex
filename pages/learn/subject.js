import React from 'react';

import Layout from '../../components/common/layout';
import BannerSection from '../../components/common/banner';

export default props => {
  return (
    <Layout>
      <BannerSection textInverted title={props.url.query.id.toUpperCase()} subTitle="Coming Soon..." />
    </Layout>
  );
};
