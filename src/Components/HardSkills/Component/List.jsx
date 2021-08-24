import React, { Component } from 'react';
import Title from 'react-vanilla-tilt';

export default class List extends Component {
  render() {
    const { icon, title } = this.props;
    return (
      <Title
        className="skills-container-list"
      >
        <li>
          {icon}
          <h3>{title}</h3>
        </li>
      </Title>
    );
  }
}
