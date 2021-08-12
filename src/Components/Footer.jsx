import React, { Component } from 'react';
import Icons from './Data/IconsLibrary';

class Footer extends Component {
  render() {
    return (
      <footer>
        <span>
          <i className="icons-rocket m-2">{ Icons.foguete }</i>
          @2021 JVictorC
          <i className="icons-rocket m-2">{Icons.foguete}</i>
        </span>
        <span className="fw-bold">
          <img
            src="ArquivosPort/Images/Trybe-Logo.png"
            alt=""
            className="logo-footer"
          />
          #VQV
        </span>
        <span className="d-flex align-items-center">
          <a href="https://www.linkedin.com/in/joao-victor-02227a180/" target="_blank" rel="noreferrer">
            <i className="icon-linkedin m-1">
              {Icons.linkedin}
            </i>
          </a>
          <a href="https://github.com/JVictorC" target="_blank" rel="noreferrer">
            <img src="ArquivosPort/Images/GitHUb.gif" alt="" className="gif-links" />
          </a>
        </span>
      </footer>
    );
  }
}

export default Footer;
