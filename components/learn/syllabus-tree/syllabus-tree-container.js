import React from 'react';
import styled from 'react-emotion';

import TreeView from './syllabus-tree-component';

export default class SyllabusTree extends React.Component {
  state = {
    nodeStateTracker: this.props.data.map(() => true),
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

  render() {
    const Container = styled.div`
      & .node {
        transition: all 0.5s;
      }

      & .node:hover,
      & .info:hover {
        background-color: #f5f5f5;
        border-left: 1px solid #374355;
        cursor: pointer;
      }

      & .info,
      & .node {
        padding: 5px 10px 5px 5px;
        font: 14px Helvetica, Arial, sans-serif;
        user-select: none;
      }

      & .tree-view_arrow {
        transition: all 0.1s;
      }

      & .tree-view_arrow-empty {
        color: yellow;
      }
    `;

    return (
      <Container>
        {this.props.data.map((node, i) => {
          const UnitTitle = (
            <span className="node" key={node.unit.num} onClick={() => this.handleClick(i)}>
              {node.unit.name}
            </span>
          );
          return (
            <TreeView
              key={i}
              nodeLabel={UnitTitle}
              collapsed={this.state.nodeStateTracker[i]}
              onClick={() => this.handleClick(i)}>
              {node.chapters.map(chapter => (
                <div className="info" key={chapter.url} onClick={() => this.props.changeChapter(chapter.url)}>
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
