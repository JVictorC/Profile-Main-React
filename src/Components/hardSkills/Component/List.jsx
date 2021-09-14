/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Tilt from 'react-tilt';

export default class List extends Component {
  render() {
    const { icon, title } = this.props;
    return (
      <Tilt
        className="Tilt skills-container-list"
        options={ { max: 50, reverse: false, scale: 1.2 } }
      >
        <li className="Tilt-inner">
          {icon}
          <h3>{title}</h3>
        </li>
      </Tilt>
    );
  }
}
