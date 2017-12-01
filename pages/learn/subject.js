import React from 'react';
import fetch from 'isomorphic-unfetch';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-emotion';
import styled from 'react-emotion';

import { baseContainer } from '../../utils/base.styles';
import Layout from '../../components/common/layout';
import BannerSection from '../../components/learn/subject-banner';
import SyllabusTree from '../../components/learn/syllabus-tree/syllabus-tree-container';
import MarkedJS from '../../components/common/markedjs';

import { laravelSyllabus } from '../../utils/mock-data';

const defaultChapter = laravelSyllabus[0].chapters[0].url;

const Container = styled.section`
  ${baseContainer};
  ${space};
  border: 1px solid #b9b9b9;
  min-height: 80vh;
`;
export default class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chapterContent: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getChapterContent(defaultChapter);
  }

  changeChapter = selectedChapter => {
    this.setState({
      loading: true,
    });
    this.getChapterContent(selectedChapter);
  };

  async getChapterContent(chapter) {
    const chapterContentPromise = await fetch(chapter);
    const chapterContent = await chapterContentPromise.text();
    await this.setState({
      chapterContent,
      loading: false,
    });
  }

  render() {
    return (
      <Layout>
        <BannerSection
          textInverted
          title={this.props.url.query.id.toUpperCase()}
          subTitle="Web Development"
          icon="devicon-laravel-plain colored"
        />
        <Container my={[2, 4]}>
          <Flex column={false} px={[2, 2, 2, 0]}>
            <Box width={[0.2]}>
              <div>Table of content</div>
              <SyllabusTree data={laravelSyllabus} changeChapter={this.changeChapter} />
            </Box>
            <Box width={[0.8]}>
              <MarkedJS loading={this.state.loading} markdown={this.state.chapterContent} />
            </Box>
          </Flex>
        </Container>
      </Layout>
    );
  }
}
