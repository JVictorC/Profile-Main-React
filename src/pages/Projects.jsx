import React from 'react';
import { connect } from 'react-redux';
import Menu from '../Components/menu';

function Projects(props) {
  const { match: { params: { project } }, projects } = props;

  function othersProjects() {
    return projects.map((project) => project.map((value) => (
      <li key={ value.name }>
        <p>{value.name}</p>
        <p>{`Desenvolvido na Seção: ${value.section}`}</p>
        <p>Tecnologias Usadas:</p>
        {
          value.technologies.map((tec) => (
            <li
              key={ tec }
              className={ tec }
            >
              {tec}
            </li>
          ))
        }
      </li>
    )));
  }

  return (
    <div className="teste">
      <Menu />
      <h1>
        {`Projetos ${project}`}
      </h1>
      <ul>
        {
          project !== 'Trybe' && othersProjects()
        }
      </ul>
    </div>
  );
}

const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps)(Projects);
