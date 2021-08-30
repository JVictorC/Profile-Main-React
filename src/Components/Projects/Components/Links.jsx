import React from 'react';
import { FaReact, FaSass, DiJavascript } from 'react-icons/all';
import LogoTrybe from '../../../Images/Trybe-Logo.png';

export default function Links() {
  return (
    <>
      <div className="container-project-card">
        <img src={ LogoTrybe } alt="" className="contrainer-project-image" />
        <h2 className="trybe-title">Projects Trybe</h2>
      </div>
      <div className="container-project-card">
        <FaReact className="contrainer-project-image" />
        <h2 className="outhers-title">Projetos em React</h2>
      </div>
      <div className="container-project-card">
        <FaSass className="contrainer-project-image" />
        <h2 className="outhers-title">Projetos com Sass</h2>
      </div>
      <div className="container-project-card">
        <DiJavascript className="contrainer-project-image" />
        <h2 className="outhers-title">Projetos em JavaScript</h2>
      </div>
    </>
  );
}
