/* eslint-disable react/prop-types */
import React from 'react';
import Tilt from 'react-tilt';

const List = ({ icon, title }) => (
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

export default List;
