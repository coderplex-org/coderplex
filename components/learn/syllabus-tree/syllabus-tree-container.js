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

  clickOnChapter(chapter, unitName) {
    if (chapter.url !== this.state.activeChapter) {
      this.setState({ activeChapter: chapter.url, activeUnit: unitName });
      this.props.changeChapter(chapter);
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
        {this.props.data.map((unitNode, i) => {
          const UnitNameComponent = (
            <div className="unit_name" key={unitNode.unit.name} onClick={() => this.handleClick(i)}>
              {unitNode.unit.name}
            </div>
          );
          return (
            <TreeView
              key={i}
              unitName={unitNode.unit.name}
              UnitNameComponent={UnitNameComponent}
              activeUnit={this.state.activeUnit}
              collapsed={this.state.nodeStateTracker[i]}
              onClick={() => this.handleClick(i)}>
              {unitNode.chapters.map(chapter => (
                <div
                  className={`chapter ${
                    this.state.activeChapter === chapter.url ? 'chapter-active' : 'chapter-inactive'
                  }`}
                  key={chapter.url}
                  onClick={() => this.clickOnChapter(chapter, unitNode.unit.name)}>
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
