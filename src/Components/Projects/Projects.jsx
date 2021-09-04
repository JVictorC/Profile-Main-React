import React from 'react';
import Links from './Components/Links';
import Project from './Components/Projects';
import Wave from '../wave';
import { projects, frontEndOnlone } from './Helper/data';

export default function Projects() {
  return (
    <div className="container-project" data-anime="anime">
      <h1 className="container-project-title">Projects</h1>
      <div className="container-project-main">
        <Links />
      </div>
      <div className="container-project-list">
        <Project
          classN="project1"
          titleSection={ frontEndOnlone.title }
          describe={ frontEndOnlone.describe }
        />
        <div className="other-projects">
          {
            projects.map((project) => (
              <Project
                key={ project.id }
                classN={ `project${project.id}` }
                titleSection={ project.title }
                describe={ project.describe }
              />
            ))
          }
        </div>
      </div>
      <Wave component="footer" />
    </div>
  );
}
