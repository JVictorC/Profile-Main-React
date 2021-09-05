import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import LottieAnimation from '../animation/Lottie';
import Rocket from '../animation/rocket.json';

export default function Menu() {
  return (
    <nav className="nav-item">
      <LottieAnimation lotti={ Rocket } height={ 70 } width={ 70 } />
      <ul className="nav-item-menu">
        <li>Home</li>
        <li>Contatos</li>
        <li>Projetos</li>
      </ul>
      <ul className="nav-item-social">
        <li><AiFillLinkedin /></li>
        <li><AiFillGithub /></li>
      </ul>
      <GiHamburgerMenu className="menu" />
    </nav>
  );
}
