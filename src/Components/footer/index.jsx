import React, { Component } from 'react';
import Logo from '../../Images/Trybe-Logo.png';
import Rocket from '../../Images/rocket.gif';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <section className="footer-container-main">
          <article className="footer-container-copyRigth">
            <img src={ Rocket } alt="logo-trybe" className="footer-container-rocket" />
            <h1 className="footer-container-name">JVictorC</h1>
            <img src={ Rocket } alt="logo-trybe" className="footer-container-rocket" />
          </article>
          <ul className="footer-container-contatos">
            <li className="footer-container-li">
              <a href="https://www.linkedin.com/in/joao-victor-02227a180/" target="_blank" rel="noreferrer">Linkedin</a>

            </li>
            <li className="footer-container-li">
              <a href="https://github.com/JVictorC" target="_blank" rel="noreferrer"> GitHub </a>
            </li>
          </ul>
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
            <img
              src={ Logo }
              alt="logo-trybe"
              className="footer-container-trybe"
            />
          </a>
        </section>
      </footer>
    );
  }
}
