import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import LottieAnimation from '../animation/Lottie';
import Rocket from '../animation/rocket.json';

export default function Menu() {
  const [ToggleMenu, setToggleMenu] = useState(false);
  function handlerToggleMenu() {
    setToggleMenu((prevState) => (!prevState));
  }

  return (
    <>
      <nav className="nav-item">
        <LottieAnimation lotti={ Rocket } height={ 70 } width={ 70 } />
        <div className="nav-item-menu">
          <a href="/">Home</a>
          <a href="/#projects">Projetos</a>
        </div>
        <ul className="nav-item-social">
          <li><AiFillLinkedin /></li>
          <li><AiFillGithub /></li>
        </ul>
        <GiHamburgerMenu className="menu" onClick={ handlerToggleMenu } />
      </nav>
      {
        ToggleMenu && (
          <div className="nav-item-menu-togle">
            <a href="/">Home</a>
            <a href="#projects">Projetos</a>
          </div>
        )
      }
    </>
  );
}
