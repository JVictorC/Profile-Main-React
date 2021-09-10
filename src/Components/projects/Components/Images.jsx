import React from 'react';
import { projectsImages, frontEndOnloneImage } from '../../../Services/projectsImages';
import Project from './Projects';

export default function Images() {
  return (
    <div className="container-project-list" data-anime="anime">
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
  );
}
