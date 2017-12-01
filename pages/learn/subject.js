import React from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/common/layout';
import BannerSection from '../../components/learn/subject-banner';
import SyllabusTree from '../../components/learn/syllabus-tree/syllabus-tree-container';
// import MarkedJS from '../../components/common/markedjs';

import { laravelSyllabus } from '../../utils/mock-data';

const defaultChapter = laravelSyllabus[0].chapters[0].url;

export default class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingChapter: defaultChapter,
    };
  }

  componentDidMount() {}

  async getChapterContent(chapter) {
    const responce = await fetch(chapter);
  }

  changeChapter = selectedChapter => {
    this.setState({ viewingChapter: selectedChapter });
  };

  render() {
    return (
      <Layout>
        <BannerSection
          textInverted
          title={this.props.url.query.id.toUpperCase()}
          subTitle="Web Development"
          icon="devicon-laravel-plain colored"
        />
        <SyllabusTree data={laravelSyllabus} changeChapter={this.changeChapter} />
      </Layout>
    );
  }
}
