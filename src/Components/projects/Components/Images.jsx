import React from 'react';
import { projectsImages, frontEndOnlineImage } from '../../../Services/projectsImages';
import Project from './Projects';

export default function Images() {
  return (
    <div className="container-project-list" data-anime="anime">
      <Project
        classN="project1"
        titleSection={ frontEndOnlineImage.title }
        describe={ frontEndOnlineImage.describe }
        link={ frontEndOnlineImage.link }
      />
      <div className="other-projects">
        {
          projectsImages.map((project) => (
            <Project
              key={ project.id }
              classN={ `project${project.id}` }
              titleSection={ project.title }
              describe={ project.describe }
              link={ project.link }
            />
          ))
        }
      </div>
    </div>
  );
}
