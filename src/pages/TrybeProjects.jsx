/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../Components/menu';
import Wave from '../Components/wave';

function ProjectsTrybe({ projects }) {
  const [sectionProjects, setSectionProjects] = useState([]);
  const [titleSection, setTitleSection] = useState('');

  function hadlerCLick({ target }) {
    const select = document.querySelectorAll('.select');
    select.forEach((currentValue) => currentValue.classList.remove('select'));
    target.classList.add('select');
    const value = target.innerText;
    const filter = projects.filter(({ title }) => title === value)[0];
    setSectionProjects(filter.projectsSection);
    setTitleSection(filter.title);
  }

  function navBar() {
    return (
      <nav className="projectTrybe-nav">
        <ul className="projectTrybe-nav-list">
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
        <h1 className="projectTrybe-warning">
          Infelizmente Ainda Não Cheguei Nessa section 😞
        </h1>
      );
    }

    return (
      sectionProjects.map((project) => (
        <li key={ project.name } className="projectTrybe-project">
          {project.name}
        </li>
      ))
    );
  }

  return (
    <>
      <div className="projectTrybe-main-container">
        <Menu />
        <header className="projectTrybe-header">
          <h1 className="projectTrybe-title">
            Projetos Trybe
          </h1>
          {
            navBar()
          }
        </header>
        <div className="projectTrybe-projects">
          <h1 className="projectTrybe-title">{titleSection}</h1>
          {
            renderProject()
          }
        </div>
      </div>
      <Wave component="skills" />
    </>
  );
}

const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps)(ProjectsTrybe);

ProjectsTrybe.propTypes = {
  projects: PropTypes.arrayOf(String).isRequired,
};