import React from 'react';
import { DiSass, DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaReact, FaHtml5, FaBootstrap } from 'react-icons/fa';
import List from './Component/List';
import LottieAnimation from '../Animation/Lottie';
import animation from '../Animation/Skilss.json';
import Wave from '../wave/index';

export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-container-title" data-anime="anime">Skills</h1>
      <div className="skills-container-main">
        <ul className="skills-container-ul" data-anime="anime">
          <List
            icon={ <DiSass className="icons" /> }
            title="Sass"
          />
          <List
            icon={ <DiCss3 className="icons" /> }
            title="Css3"
          />
          <List
            icon={ <DiJavascript1 className="icons" /> }
            text="."
            title="JavaScript"
          />
          <List
            icon={ <FaReact className="icons" /> }
            title="React"
          />
          <List
            icon={ <FaHtml5 className="icons" /> }
            title="HTML5"
          />
          <List
            icon={ <FaBootstrap className="icons" /> }
            text=""
            title="BootStrap"
          />
        </ul>
        <LottieAnimation lotti={ animation } height={ 600 } width={ 1000 } />
      </div>
      <Wave component="skills" />
    </div>
  );
}
