/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Tilt from 'react-tilt';

export default class List extends Component {
  render() {
    const { icon, title } = this.props;
    return (
      <Tilt
        className="skills-container-list"
        options={ { max: 40 } }
      >
        <li>
          {icon}
          <h3>{title}</h3>
        </li>
      </Tilt>
    );
  }
}
