import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import LottieAnimation from '../Animation/Lottie';
import Rocket from '../Animation/rocket.json';
import Person from '../Animation/Header.json';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Web Development Student',
    };
    this.changeHeader = this.changeHeader.bind(this);
  }

  componentDidMount() {
    const FIVE_SECONDS = 8000;
    setTimeout(this.changeHeader, FIVE_SECONDS);
  }

  componentDidUpdate() {
    const FIVE_SECONDS = 8000;
    setTimeout(this.changeHeader, FIVE_SECONDS);
  }

  changeHeader() {
    const { header } = this.state;
    if (header === 'Web Development Student') {
      this.setState({
        header: 'Welcome a My Profile😁🚀',
      });
    } else {
      this.setState({
        header: 'Web Development Student',
      });
    }
  }

  render() {
    const { header } = this.state;
    return (
      <>
        <header>
          <nav className="nav-item">
            <LottieAnimation lotti={ Rocket } height={ 80 } width={ 80 } />
            <ul>
              <li>Home</li>
              <li>Contatos</li>
              <li>Projetos</li>
            </ul>
            <GiHamburgerMenu className="menu" />
          </nav>
        </header>
        <div className="header-contant">
          <div className="header-contant-apresentation">
            <h1 className="header-contant-name line">João Victor C da Silva</h1>
            <h2 className="header-contant-student">{header}</h2>
          </div>
          <LottieAnimation lotti={ Person } height={ 400 } width={ 400 } />
        </div>
      </>
    );
  }
}
