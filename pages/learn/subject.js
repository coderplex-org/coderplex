import React from 'react';

import Layout from '../../components/common/layout';
import BannerSection from '../../components/learn/subject-banner';
import SyllabusTree from '../../components/learn/syllabus-tree/syllabus-tree-container';

const dataSource = [[{ id: 'aa', url: 'https//:aaple.com' }, { id: 'oo' }], [{ id: 'ff' }]];

export default class Subject extends React.Component {
  render() {
    return (
      <Layout>
        <BannerSection
          textInverted
          title={this.props.url.query.id.toUpperCase()}
          subTitle="Web Development"
          icon="devicon-laravel-plain colored"
        />
        <SyllabusTree data={dataSource} />
      </Layout>
    );
  }
}
