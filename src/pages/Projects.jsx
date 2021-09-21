import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../Components/menu';
import Wave from '../Components/wave';
import { icons } from '../Services/icons';

function Projects(props) {
  const { match: { params: { project } }, projects } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const component = () => (
    projects.map((projec) => projec.map((value) => (
      <li
        key={ value.name }
        className={ `project-${project}-project` }
        data-anime="anime"
      >
        <p className="project-name">{value.name}</p>
        <p className="project-section">{`Desenvolvido na Seção: ${value.section}`}</p>
        <p className="project-tecs-title">Tecnologias Usadas:</p>
        <ul className="project-tecs">
          {
            value.technologies.map((tec) => (
              <li
                key={ tec }
                className={ `tecs ${tec}` }
              >
                {icons[tec]}
                {tec}
              </li>
            ))
          }
        </ul>
        <a
          href={ value.link }
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Ver Projeto
        </a>
      </li>
    )))
  );

  function renderProjects() {
    const { history } = props;
    console.log(projects[0].title);
    if (projects[0].title) {
      history.push('/');
    } else {
      return component();
    }
  }

  return (
    <div className={ `project-${project}-main` }>
      <Menu />
      <h1 className={ `project-${project}-title` }>
        {`Projetos ${project}`}
      </h1>
      <ul className={ `project-${project}-projects` }>
        {
          renderProjects()
        }
      </ul>
      <Wave component={ project } />
    </div>
  );
}

const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps)(Projects);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
