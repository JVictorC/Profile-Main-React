import React from 'react';
import Header from './Header/Header';
import Skills from './HardSkills/Skills';
import About from './About/About';

export default function Home() {
  function animeScrolls() {
    const theree = 3;
    const four = 4;
    const target = document.querySelectorAll('[data-anime]');
    const windowTop = window.pageYOffset + ((window.innerHeight * theree) / four);
    target.forEach((element) => {
      if ((windowTop) > element.offsetTop) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }
  window.addEventListener('scroll', animeScrolls);
  return (
    <div>
      <Header />
      <Skills />
    </div>
  );
}
