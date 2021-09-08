import React from 'react';
import { connect } from 'react-redux';

function TrybeProjects() {
  return (
    <div>
      <h1>Projetos Trybe</h1>
    </div>
  );
}

const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps)(TrybeProjects);
