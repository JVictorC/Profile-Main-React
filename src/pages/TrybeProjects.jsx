/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../Components/menu';

function ProjectsTrybe({ projects }) {
  const [sectionProjects, setSectionProjects] = useState([]);
  const [titleSection, setTitleSection] = useState('');

  function hadlerCLick({ target }) {
    const value = target.innerText;
    const filter = projects.filter(({ title }) => title === value)[0];
    setSectionProjects(filter.projectsSection);
    setTitleSection(filter.title);
  }

  function navBar() {
    return (
      <nav>
        <ul>
          {
            projects.map((project) => (
              <li
                key={ project.title }
                onClick={ hadlerCLick }
              >
                {project.title}
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }

  function renderProject() {
    if (sectionProjects.length === 1) {
      return (
        <h1>Infelizmente Ainda Não Cheguei Nessa section</h1>
      );
    }

    return (
      sectionProjects.map((project) => (
        <li key={ project.name }>
          {project.name}
          <ul>
            <p>Tecnologias Utilizadas</p>
            {
              project.technologies.map((tec) => (
                <li key={ tec }>
                  {tec}
                </li>
              ))
            }
          </ul>
        </li>
      ))
    );
  }

  return (
    <div className="teste">
      <Menu />
      <header>
        <h1>
          Projetos Trybe
        </h1>
        {
          navBar()
        }
      </header>
      <div>
        <h1>{titleSection}</h1>
        {
          renderProject()
        }
      </div>
    </div>
  );
}

const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps)(ProjectsTrybe);

ProjectsTrybe.propTypes = {
  projects: PropTypes.arrayOf(String).isRequired,
};
