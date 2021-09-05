import React from 'react';
import Links from './Components/Links';
import Project from './Components/Projects';
import Wave from '../wave';
import { projectsImages, frontEndOnloneImage } from '../../Services/projectsImages';

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
          titleSection={ frontEndOnloneImage.title }
          describe={ frontEndOnloneImage.describe }
        />
        <div className="other-projects">
          {
            projectsImages.map((project) => (
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
