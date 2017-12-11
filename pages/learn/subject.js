import React from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-emotion';
import ExpandTOC from 'react-icons/lib/fa/angle-double-right';
import CollapseTOC from 'react-icons/lib/fa/angle-double-left';

import { baseContainer, Title, breakpoints } from '../../utils/base.styles';
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
    min-width: 250px;
  }
  & .toc_sticky {
    ${breakpoints.xs} {
      position: sticky;
      z-index: 3;
      left: 0;
      margin-top: 0.5rem;
      top: 10rem;
    }
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

const Fab = styled.div`
  position: sticky;
  z-index: 3;
  left: 0;
  margin-top: 0.5rem;
  top: 10rem;
  display: none;
  & .fab_symbol {
    opacity: 0.5;
    padding: 0.05rem;
    border-radius: 0 5px 5px 0;
    background: #fff;
    border: 0.5px solid #555;
    width: 1.2rem;
    height: 2rem;
  }
  ${breakpoints.xs} {
    display: inherit;
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
      isSidebarOpen: true,
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
        <CurriculumSection my={[0, 4]}>
          <Flex column={false}>
            {this.state.isSidebarOpen ? (
              <Box width={[0, 0.2]} flex={'1 1 auto'} className="box_toc">
                <div className="toc_sticky">
                  <div className="toc_title">Table of content</div>
                  <SyllabusTree data={laravelSyllabus} changeChapter={this.changeChapter} />
                </div>
              </Box>
            ) : null}
            <Box width={[1, 0.8]} flex={'1 1 auto'} px={[1, 2]} className="box_content">
              <Fab onClick={() => this.setState({ isSidebarOpen: !this.state.isSidebarOpen })}>
                {this.state.isSidebarOpen ? (
                  <CollapseTOC className="fab_symbol" />
                ) : (
                  <ExpandTOC className="fab_symbol" />
                )}
              </Fab>
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
