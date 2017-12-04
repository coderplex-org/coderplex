import React from 'react';
import styled from 'react-emotion';

export default class TreeView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: this.props.collapsed,
    };
  }

  unitClick = (...args) => {
    this.setState({ collapsed: !this.state.collapsed });
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  };

  render() {
    const Container = styled.div`
      overflow-y: hidden;
      .unit {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: stretch;
        align-items: center;
        padding: 0.5rem;
        border-left: 2px solid #fff;
        :hover {
          background-color: #f5f5f5;
          border-left: 2px solid #374355;
          cursor: pointer;
        }
      }

      .unit-active {
        background-color: #f5f5f5;
        border-left: 2px solid #f5f5f5;
        :hover {
        }
      }

      .chapters {
        padding-left: 0.4rem;
      }

      .chapters-collapsed {
        height: 0px;
      }

      .pointer {
        cursor: pointer;
        user-select: none;
        transition: all 0.1s;
        order: 2;
        flex: 0 1 auto;
        align-self: auto;
        color: #b9c3d2;
        :after {
          content: '▾';
        }
      }

      .pointer-collapsed {
        transform: rotate(-90deg);
        color: #374355;
      }
    `;

    return (
      <Container>
        <div
          className={this.props.unitTitle === this.props.activeUnit ? 'unit unit-active' : 'unit'}
          onClick={this.unitClick}>
          {this.props.UnitTitleComponent}
          <div className={this.state.collapsed ? 'pointer pointer-collapsed' : 'pointer'} />
        </div>
        <div className={this.state.collapsed ? 'chapters chapters-collapsed' : 'chapters'}>
          {this.state.collapsed ? null : this.props.children}
        </div>
      </Container>
    );
  }
}
