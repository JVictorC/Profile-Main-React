import React from 'react';
import Header from './Header/Header';
import Skills from './HardSkills/Skills';
import Projects from './Projects/Projects';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Skills />
        <Projects />
      </div>
    );
  }
}
