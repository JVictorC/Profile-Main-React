import React, { Component } from 'react';
import LottieAnimation from '../animation/Lottie';
import Person from '../animation/Header.json';
import Wave from '../wave/index';
import Menu from '../menu/index';

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
    const EITHY_SECONDS = 8200;
    setTimeout(this.changeHeader, EITHY_SECONDS);
  }

  componentDidUpdate() {
    const EITHY_SECONDS = 8000;
    setTimeout(this.changeHeader, EITHY_SECONDS);
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
      <header className="header-main">
        <div className="header-contant">
          <div className="header-contant-main">
            <div className="header-contant-main-apresentation">
              <h1 className="header-contant-main-name line">João Victor C da Silva</h1>
              <h2 className="header-contant-main-student">{header}</h2>
            </div>
            <LottieAnimation
              lotti={ Person }
              height={ 400 }
              width={ 350 }
            />
          </div>
        </div>
        <Menu />
        <Wave component="header" />
      </header>
    );
  }
}
