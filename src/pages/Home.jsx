import React from 'react';
import Header from '../Components/header';
import Skills from '../Components/hardSkills';
import About from '../Components/about';
import Project from '../Components/projects';
import Footer from '../Components/footer';

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
      <About />
      <Project />
      <Footer />
    </div>
  );
}
