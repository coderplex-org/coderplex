import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-emotion';
import ExpandTOC from 'react-icons/lib/fa/angle-double-right';
import CollapseTOC from 'react-icons/lib/fa/angle-double-left';

import { baseContainer, breakpoints } from '../../utils/base.styles';
import Layout from '../../components/common/layout';
import BannerSection from '../../components/learn/subject-banner';
import SyllabusTree from '../../components/learn/syllabus-tree/syllabus-tree-container';
import SubjectMarkdown from '../../components/learn/subject-marked';

import { laravelSyllabus, reactSyllabus, listOfSubjects } from '../../utils/mock-data';

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

export default class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSubject: this.selectSubject(this.props.url.query.subject),
      activeChapterContent: '',
      activeChapterName: '',
      loading: true,
      isSidebarOpen: true,
    };
  }

  selectSubject(openedGuide) {
    switch (openedGuide) {
      case 'laravel':
        return laravelSyllabus;
      case 'reactjs':
        return reactSyllabus;
      default:
        return null;
    }
  }
  selectChapter(syllabus, chapterName) {
    return syllabus
      .map(item => {
        return item.chapters.find(chapter => chapter.name === chapterName);
      })
      .filter(Boolean)[0];
  }

  getChapter(subject, chapter) {
    const activeSubject = this.selectSubject(subject);
    const activeChapterName = chapter.replace(/-/gi, ' ');
    if (activeSubject !== null) {
      this.setState({
        activeChapterName,
        activeSubject,
      });
      const activeChapterUrl = this.selectChapter(activeSubject, activeChapterName).cdnUrl;
      this.getChapterContent(activeChapterUrl);
    }
  }

  componentDidMount() {
    const { subject, chapter } = this.props.url.query;
    this.getChapter(subject, chapter);
  }

  componentWillReceiveProps(nextProps) {
    const { subject, chapter } = nextProps.url.query;
    this.getChapter(subject, chapter);
  }

  changeChapter = selectedChapter => {
    const subjectName = this.props.url.query.subject;
    const chapterName = selectedChapter.name.replace(/\s/gi, '-');
    Router.push(`/learn/subject?subject=${subjectName}&chapter=${chapterName}`, `/learn/${subjectName}/${chapterName}`);
  };

  async getChapterContent(chapterUrl) {
    this.setState({
      activeChapterContent: '',
      loading: true,
    });
    const activeChapterContentPromise = await fetch(chapterUrl);
    const activeChapterContent = await activeChapterContentPromise.text();
    await this.setState({
      activeChapterContent,
      loading: false,
    });
  }

  render() {
    const subject = listOfSubjects.find(item => item.subjectId === this.props.url.query.subject);
    return this.state.activeSubject === null ? (
      <Layout>
        <BannerSection
          textInverted
          title={`Learn ${subject.title}`}
          subTitle={`Curriculum for ${this.props.url.query.subject.toUpperCase()} and others Coming soon!!`}
          icon={subject.icon}
        />
      </Layout>
    ) : (
      <Layout>
        <BannerSection textInverted title={`Learn ${subject.title}`} subTitle={subject.domain} icon={subject.icon} />
        <CurriculumSection my={[0, 4]}>
          <Flex column={false}>
            {this.state.isSidebarOpen ? (
              <Box width={[0, 0.2]} flex={'1 1 auto'} className="box_toc">
                <div className="toc_title">Table of content</div>
                <SyllabusTree data={this.state.activeSubject} changeChapter={this.changeChapter} />
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
    );
  }
}
