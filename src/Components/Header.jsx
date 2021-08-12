import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <img src="ArquivosPort/Images/Trybe-Logo.png" alt="" className="img-trybe" />
        <nav>
          <a href="/">Home</a>
          <a href="#contacts">Contatos</a>
          <a href="#project">Projetos</a>
        </nav>
      </header>
    );
  }
}

export default Header;
