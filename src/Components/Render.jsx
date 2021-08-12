import React, { Component } from 'react';
import Header from './Header';
import HeroPage from './HeroPage';
import AboutSection from './About';
// import MenuPontos from './Pages/CreateParagraphMenuPontos';
import SectionCourse from './SectionCourse';
import AccourdionAbout from './AccordionAbout';
import Contatos from './Contatos';
import Footer from './Footer';

class RenderApp extends Component {
  render() {
    return (
      <main>
        <Header />
        <HeroPage />
        <AboutSection />
        <AccourdionAbout />
        <SectionCourse />
        <Contatos />
        <Footer />
      </main>
    );
  }
}

export default RenderApp;
