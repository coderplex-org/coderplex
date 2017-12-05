import React from 'react';
import fetch from 'isomorphic-unfetch';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-emotion';
import styled from 'react-emotion';

import { baseContainer, Title } from '../../utils/base.styles';
import Layout from '../../components/common/layout';
import BannerSection from '../../components/learn/subject-banner';
import SyllabusTree from '../../components/learn/syllabus-tree/syllabus-tree-container';
import SubjectMarkdown from '../../components/learn/subject-marked';

import { laravelSyllabus } from '../../utils/mock-data';

const CurriculumSection = styled.section`
  ${baseContainer};
  ${space};
  border: 1px solid #f5f5f5;
  min-height: 80vh;
  background-color: #fff;
  & .box_toc {
    border-right: 1px solid #f5f5f5;
  }
  & .toc_title {
    background-color: #374355;
    color: #fff;
    font-weight: 500;
    padding: 10px;
  }
  & .chapter_name {
    font-weight: 500;
  }
`;

const defaultChapter = laravelSyllabus[0].chapters[0];

export default class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChapterContent: '',
      activeChapterName: defaultChapter.name,
      loading: true,
    };
  }

  componentDidMount() {
    this.getChapterContent(defaultChapter);
  }

  changeChapter = selectedChapter => {
    this.setState({
      loading: true,
      activeChapterName: selectedChapter.name,
    });
    this.getChapterContent(selectedChapter);
  };

  async getChapterContent(chapter) {
    const activeChapterContentPromise = await fetch(chapter.url);
    const activeChapterContent = await activeChapterContentPromise.text();
    await this.setState({
      activeChapterContent,
      loading: false,
    });
  }

  render() {
    return this.props.url.query.id === 'laravel' ? (
      <Layout>
        <BannerSection
          textInverted
          title={this.props.url.query.id.toUpperCase()}
          subTitle="Web Development"
          icon="devicon-laravel-plain colored"
        />
        <CurriculumSection my={[2, 4]}>
          <Flex column={false}>
            <Box width={[0, 0.2]} className="box_toc">
              <div className="toc_title">Table of content</div>
              <SyllabusTree data={laravelSyllabus} changeChapter={this.changeChapter} />
            </Box>
            <Box width={[0.8]} px={2}>
              <h2 className="chapter_name">{this.state.activeChapterName}</h2>
              <SubjectMarkdown loading={this.state.loading} markdown={this.state.activeChapterContent} />
            </Box>
          </Flex>
        </CurriculumSection>
      </Layout>
    ) : (
      <Layout>
        <Title inverted>Curriculum for {this.props.url.query.id} and others Coming soon!!</Title>
      </Layout>
    );
  }
}
