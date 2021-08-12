import React, { Component } from 'react';

class HeroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textExiber: 'Web Development Student',
    };
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    this.changeText();
  }

  changeText() {
    const EigthSecond = 8000;
    setInterval(() => {
      this.setState((previsState) => ({
        textExiber: (previsState.textExiber === 'Welcome to my Profile😁🚀')
          ? 'Web Development Student' : 'Welcome to my Profile😁🚀',
      }));
    }, EigthSecond);
  }

  render() {
    const { state: { textExiber } } = this;
    return (
      <article className="hero-page">
        <p className="display-1 text-white fw-bold">João Victor C da Silva</p>
        <p className="display-1 text-white line typing-animation">
          {textExiber}
        </p>
      </article>
    );
  }
}

export default HeroPage;
