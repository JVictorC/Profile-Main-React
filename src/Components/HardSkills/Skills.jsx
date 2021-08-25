import React from 'react';
import { DiSass, DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaReact, FaHtml5, FaBootstrap } from 'react-icons/fa';
import Tilt from 'react-tilt';
import List from './Component/List';
import LottieAnimation from '../Animation/Lottie';
import animation from '../Animation/Skilss.json';

export default function Skills() {
  return (
    <div className="skills-container">
      <Tilt options={ { max: 25 } }>
        <h1 className="skills-container-title">Skills</h1>
      </Tilt>
      <div className="skills-container-main">
        <ul className="skills-container-ul">
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
        <LottieAnimation lotti={ animation } height={ 700 } width={ 700 } />
      </div>
    </div>
  );
}
