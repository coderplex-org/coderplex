import React from 'react';
import styled from 'react-emotion';
import { withRouter } from 'next/router';
import TreeView from './syllabus-tree-component';

export default withRouter(
  class SyllabusTree extends React.Component {
    state = {
      nodeStateTracker: [false, ...this.props.data.map(() => true).slice(1)],
      activeUnit: this.props.data[0].unit,
      activeChapter: this.props.data[0].chapters[0].cdnUrl,
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
      if (chapter.cdnUrl !== this.state.activeChapter) {
        this.setState({ activeChapter: chapter.cdnUrl, activeUnit: unitName });
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
          color: #888;
          :hover {
            background-color: #f5f5f5;
            border-left: 2px solid #374355;
            cursor: pointer;
          }
        }

        & .active {
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
              <div className="unit_name" key={unitNode.unit} onClick={() => this.handleClick(i)}>
                {unitNode.unit}
              </div>
            );
            return (
              <TreeView
                key={i}
                unitName={unitNode.unit}
                UnitNameComponent={UnitNameComponent}
                activeUnit={this.state.activeUnit}
                collapsed={this.state.nodeStateTracker[i]}
                onClick={() => this.handleClick(i)}>
                {unitNode.chapters.map(chapter => (
                  <div
                    className={`chapter ${this.state.activeChapter === chapter.cdnUrl ? 'active' : ''}`}
                    key={chapter.cdnUrl}
                    onClick={() => this.clickOnChapter(chapter, unitNode.unit)}>
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
);
