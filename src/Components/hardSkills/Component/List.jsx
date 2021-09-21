/* eslint-disable react/prop-types */
import React from 'react';
import Tilt from 'react-tilt';

const List = ({ icon, title }) => (
  <Tilt
    className="Tilt skills-container-list"
    options={ { max: 50, reverse: true, scale: 1.1 } }
  >
    <li className="skills-container-item">
      <div className="skills-container-circle">
        {icon}
        <h3>{title}</h3>
      </div>
    </li>
  </Tilt>
);

export default List;
