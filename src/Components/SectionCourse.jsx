import React, { Component } from 'react';
import projects from './Data/DataProject';
import LinkProject from './Pages/LinkProject';
import CarouselProject from './CarouselProject';

class SectionCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        title: '',
        projectsSection: [
          {},
        ],
      },
    };
    this.hadlerCLick = this.hadlerCLick.bind(this);
  }

  hadlerCLick({ target }) {
    const filterProjet = projects
      .filter(({ title }) => title === target.innerText)[0];
    this.setState({ project: filterProjet });
  }

  render() {
    const { project: { title, projectsSection } } = this.state;
    return (
      <section className="project" id="project">
        <img src="ArquivosPort/Images/FitaTrybe.jpg" alt="" className="fita-trybe" />
        <h1 className="text-white text-center m-5">
          Projects Section Course Trybe 💚
        </h1>
        <nav className="div-projects my-3">
          <div className="project-fund fs-5">
            <button type="button" onClick={ this.hadlerCLick } className="button-project">
              <h2 className="fs-4 style-title p-3 px-4">Fundamentos</h2>
            </button>
          </div>
          <div className="project-front">
            <button type="button" onClick={ this.hadlerCLick } className="button-project">
              <h2 className="fs-4 style-title p-3 px-4">Front-End</h2>
            </button>
          </div>
          <div className="project-back">
            <button type="button" onClick={ this.hadlerCLick } className="button-project">
              <h2 className="fs-4 style-title p-3 px-4">Back-End</h2>
            </button>
          </div>
          <div className="project-science">
            <button type="button" onClick={ this.hadlerCLick } className="button-project">
              <h2 className="fs-4 style-title p-3 px-4">Ciencia da Computação</h2>
            </button>
          </div>
        </nav>
        <section>
          <h1 className="header-sections my-4">{title}</h1>
          <nav className="projects-apresent">
            {
              (title === '') ? false
                : projectsSection.map((value) => (
                  <LinkProject project={ value } key={ value.name } />
                ))
            }
          </nav>
        </section>
        <CarouselProject />
      </section>
    );
  }
}

export default SectionCourse;
