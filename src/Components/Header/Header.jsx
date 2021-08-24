import React, { Component } from 'react';
import LottieAnimation from '../Animation/Lottie';
import home from '../Animation/rocket.json';

export default class Header extends Component {
  render() {
    return (
      <header>
        <LottieAnimation lotti={ home } height={ 80 } width={ 80 } />
        <ul>
          <li>Home</li>
          <li>Contatos</li>
          <li>Projetos</li>
        </ul>
      </header>
    );
  }
}
