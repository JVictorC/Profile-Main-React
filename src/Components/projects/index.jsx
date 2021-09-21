import React from 'react';
import Links from './Components/Links';
import Wave from '../wave';
import Images from './Components/Images';

export default function Projects() {
  return (
    <div className="container-projects-images" id="projects">
      <div className="container-project" data-anime="anime">
        <h1 className="container-project-title">Projects</h1>
        <div className="container-project-main">
          <Links />
        </div>
      </div>
      <Images />
      <Wave component="footer" />
    </div>
  );
}
