import React from 'react';
import List from './Component/List';
import LottieAnimation from '../animation/Lottie';
import animation from '../animation/Skilss.json';
import Wave from '../wave/index';
import { tecs } from '../../Services/icons';

export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-container-title" data-anime="anime">Skills</h1>
      <div className="skills-container-main">
        <ul className="skills-container-ul" data-anime="anime">
          {
            tecs.map(({ title, icon }) => (
              <List
                key={ title }
                icon={ icon }
                title={ title }
              />
            ))
          }
        </ul>
        <LottieAnimation lotti={ animation } height={ 600 } width={ 1000 } />
      </div>
      <Wave component="skills" />
    </div>
  );
}
