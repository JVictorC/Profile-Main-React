import React from 'react';
import { connect } from 'react-redux';
import Menu from '../Components/menu';

function Projects({ match: { params: { project } } }) {
  return (
    <div className="teste">
      <Menu />
      <h1>
        {`Projetos ${project}`}
      </h1>
    </div>
  );
}

export default connect()(Projects);
