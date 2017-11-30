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
      .node {
        transition: all 0.5s;
        border-radius: 3px;
      }

      .node:hover {
        background-color: rgb(220, 245, 243);
        cursor: pointer;
      }

      .info,
      .node {
        padding: 2px 10px 2px 5px;
        font: 14px Helvetica, Arial, sans-serif;
        user-select: none;
      }

      .tree-view_arrow {
        transition: all 0.1s;
      }

      .tree-view_arrow-empty {
        color: yellow;
      }
    `;

    return (
      <Container>
        {this.props.data.map((node, i) => {
          const ChapterTitle = (
            <span className="node" onClick={() => this.handleClick(i)}>
              Type {i}
            </span>
          );
          return (
            <TreeView
              key={i}
              nodeLabel={ChapterTitle}
              collapsed={this.state.nodeStateTracker[i]}
              onClick={() => this.handleClick(i)}>
              {node.map(entry => (
                <div className="info" key={entry.id} onClick={() => console.log(entry.url)}>
                  {entry.id}
                </div>
              ))}
            </TreeView>
          );
        })}
      </Container>
    );
  }
}
