import React, { Component } from 'react';
import ParagraphMenu from '../Pages/CreateParagraphMenuPontos';
import dataParagraphs from '../Data/DataMenuPontos';

class MenuPontos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divVtd: false,
      divcle: false,
      divfco: false,
    };
    this.hadlerTogler = this.hadlerTogler.bind(this);
  }

  componentDidMount() {
    this.upArrow();
  }

  hadlerTogler({ target }, className) {
    const { state } = this;
    this.setState((previusState) => ({
      [className]: !previusState[className],
    }));
    target
      .parentElement
      .querySelector(`.${className}`).style.display = state[className]
        ? 'none' : 'flex';
    target
      .parentElement
      .querySelector('.arrow-double').style.transform = `rotate(${state[className]
        ? '360deg' : '180deg'})`;
  }

  upArrow() {
    const divs = document.querySelector('.menu-pontos').children;
    for (let i = 0; i < divs.length; i += 1) {
      divs[i].querySelector('section').style.display = 'none';
    }
  }

  render() {
    return (
      <div className="presention">
        <h1 className="header-pontos">Mais Sobre Mim ...</h1>
        <section className="menu-pontos py-5">
          {
            dataParagraphs.map((paragraph) => (
              <div className={ paragraph.className } key={ paragraph.id }>
                <ParagraphMenu
                  title={ paragraph.title }
                  textParagrph={ paragraph.TextParagrph }
                  className={ paragraph.className }
                  id={ paragraph.id }
                  callBack={ this.hadlerTogler }
                />
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}

export default MenuPontos;
