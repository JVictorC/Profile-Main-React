import React from 'react';
import { connect } from 'react-redux';
import Menu from '../Components/menu';
import Wave from '../Components/wave';

function Projects(props) {
  const { match: { params: { project } }, projects } = props;

  function othersProjects() {
    return projects.map((project) => project.map((value) => (
      <li key={ value.name } className={ `project-${project}-project` }>
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
    <div className={ `project-${project}-main` }>
      <Menu />
      <h1 className={ `project-${project}-title` }>
        {`Projetos ${project}`}
      </h1>
      <ul className={ `project-${project}-projects` }>
        {
          project !== 'Trybe' && othersProjects()
        }
      </ul>
      <Wave component="skills" />
    </div>
  );
}

const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps)(Projects);
