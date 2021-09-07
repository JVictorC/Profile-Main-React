import React from 'react';
import Menu from '../Components/menu';

export default function Projects({ match: { params: { project } } }) {
  return (
    <div className="teste">
      <Menu />
      <h1>
        {`Projetos ${project}`}
      </h1>
    </div>
  );
}
