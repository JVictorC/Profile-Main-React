import React, { Component } from 'react';
import Tilt from 'react-tilt';
import PropsTypes from 'prop-types';

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

List.propTypes = {
  icon: PropsTypes.element.isRequired,
  title: PropsTypes.string.isRequired,
};
