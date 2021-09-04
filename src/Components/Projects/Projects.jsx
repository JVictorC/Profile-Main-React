import React from 'react';
import Links from './Components/Links';
import Jobs from './Components/Projects';
import Wave from '../wave';

export default function Projects() {
  return (
    <div className="container-project" data-anime="anime">
      <h1 className="container-project-title">Projects</h1>
      <div className="container-project-main">
        <Links />
      </div>
      <div className="container-project-list">
        <Jobs classN="project1" titleSection="Projeto 1" />
        <div className="other-projects">
          <Jobs classN="project2" titleSection="Projeto 2" />
          <Jobs classN="project3" titleSection="Projeto 1" />
          <Jobs classN="project4" titleSection="Projeto 1" />
          <Jobs classN="project5" titleSection="Projeto 1" />
        </div>
      </div>
      <Wave component="footer" />
    </div>
  );
}
