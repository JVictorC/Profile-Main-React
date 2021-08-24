import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { icon, title } = this.props;
    return (
      <li>
        {icon}
        <h3>{title}</h3>
      </li>
    );
  }
}
