import React, { Component } from 'react';
import { DiSass, DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaReact, FaHtml5, FaBootstrap } from 'react-icons/fa';
import List from './Component/List';
import LottieAnimation from '../Animation/Lottie';
import animation from '../Animation/Skilss.json';

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h1 className="skills-container-title">Skills</h1>
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
        <LottieAnimation lotti={ animation } height={ 500 } width={ 600 } />
      </div>
    );
  }
}
