import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import LottieAnimation from '../Animation/Lottie';
import Rocket from '../Animation/rocket.json';
import Person from '../Animation/Header.json';

export default class Header extends Component {
  constructor(props) {
    super(props);
    const header = 'Web Development Student';
    this.state = {
      header,
    };
    this.changeHeader = this.changeHeader.bind(this);
  }

  componentDidMount() {
    const SEVEN_SECONDS = 7500;
    setTimeout(this.changeHeader, SEVEN_SECONDS);
  }

  componentDidUpdate() {
    const SEVEN_SECONDS = 7500;
    setTimeout(this.changeHeader, SEVEN_SECONDS);
  }

  changeHeader() {
    const webDevelopment = 'Web Development Student';
    const { header } = this.state;
    if (header === webDevelopment) {
      this.setState({
        header: 'Welcome a My Profile😁🚀',
      });
    } else {
      this.setState({
        header: webDevelopment,
      });
    }
  }

  render() {
    const { header } = this.state;
    return (
      <header>
        <div className="header-contant">
          <div className="header-contant-main">
            <div className="header-contant-main-apresentation">
              <h1 className="header-contant-main-name line">João Victor C da Silva</h1>
              <h2 className="header-contant-main-student">{header}</h2>
            </div>
            <LottieAnimation lotti={ Person } height={ 600 } width={ 600 } />
          </div>
          <section>
            <div className="wave wave1" />
            <div className="wave wave2" />
            <div className="wave wave3" />
            <div className="wave wave4" />
          </section>
        </div>
        <nav className="nav-item">
          <LottieAnimation lotti={ Rocket } height={ 70 } width={ 70 } />
          <ul>
            <li>Home</li>
            <li>Contatos</li>
            <li>Projetos</li>
          </ul>
          <GiHamburgerMenu className="menu" />
        </nav>
      </header>
    );
  }
}
