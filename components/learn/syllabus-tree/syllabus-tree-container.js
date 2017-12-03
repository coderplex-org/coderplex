import React from 'react';
import styled from 'react-emotion';

import TreeView from './syllabus-tree-component';

export default class SyllabusTree extends React.Component {
  state = {
    nodeStateTracker: this.props.data.map(() => true),
    activeUnit: this.props.data[0].unit.name,
    activeChapter: this.props.data[0].chapters[0].url,
  };

  handleClick = i => {
    this.setState({
      nodeStateTracker: [
        ...this.state.nodeStateTracker.slice(0, i),
        !this.state.nodeStateTracker[i],
        ...this.state.nodeStateTracker.slice(i + 1),
      ],
    });
  };

  clickOnChapter(chapterUrl, unitName) {
    if (chapterUrl !== this.state.activeChapter) {
      this.setState({ activeChapter: chapterUrl, activeUnit: unitName });
      this.props.changeChapter(chapterUrl);
    }
  }

  render() {
    const Container = styled.div`
      & .chapter {
        padding: 5px;
        font-size: 0.85rem;
        user-select: none;
        border-left: 2px solid #fff;
        :hover {
          background-color: #f5f5f5;
          border-left: 2px solid #374355;
          cursor: pointer;
        }
      }

      & .chapter-active {
        color: #374355;
        background-color: #f5f5f5;
        border-left: 2px solid #374355;
        :hover {
          cursor: default;
        }
      }

      & .unit_name {
        order: 1;
        flex: 1 1 auto;
        align-self: auto;
      }
    `;

    return (
      <Container>
        {this.props.data.map((node, i) => {
          const UnitTitleComponent = (
            <div className="unit_name" key={node.unit.name} onClick={() => this.handleClick(i)}>
              {node.unit.name}
            </div>
          );
          return (
            <TreeView
              key={i}
              unitTitle={node.unit.name}
              UnitTitleComponent={UnitTitleComponent}
              activeUnit={this.state.activeUnit}
              collapsed={this.state.nodeStateTracker[i]}
              onClick={() => this.handleClick(i)}>
              {node.chapters.map(chapter => (
                <div
                  className={`chapter ${
                    this.state.activeChapter === chapter.url ? 'chapter-active' : 'chapter-inactive'
                  }`}
                  key={chapter.url}
                  onClick={() => this.clickOnChapter(chapter.url, node.unit.name)}>
                  {chapter.name}
                </div>
              ))}
            </TreeView>
          );
        })}
      </Container>
    );
  }
}
