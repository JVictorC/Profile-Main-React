import React, { Component } from 'react';
import frases from './Data/DataTextContat';

class Contatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: 'Para ter sucesso, é necessario amar de Verdade o que faz.',
      index: 0,
    };
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    this.changeText();
  }

  changeText() {
    const TEN_SECONDS = 10000;
    const INDEX_LIMIT = 3;
    setInterval(() => {
      const { index } = this.state;
      const newIndex = (index === INDEX_LIMIT) ? 0 : index + 1;
      this.setState({
        textField: frases[index].text,
        index: newIndex,
      });
    }, TEN_SECONDS);
  }

  render() {
    const { textField } = this.state;
    return (
      <section id="contacts">
        <img src="ArquivosPort/Images/FitaTrybe.jpg" alt="" className="fita-trybe" />
        <h1 className="text-white text-center m-4">Contatos</h1>
        <nav className="buttons-contatcs">
          <p className="text-white lead fs-2 text-center text-animation">
            {`" ${textField} "`}
          </p>
          <span className="line-animation" />
          <div className="buttons">
            <a
              href="https://github.com/JVictorC"
              className="btn-github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub

            </a
            >
            <a
              href="https://www.linkedin.com/in/joao-victor-02227a180/"
              className="btn-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin

            </a
            >
          </div>
        </nav>
      </section>

    );
  }
}

export default Contatos;
