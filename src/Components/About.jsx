import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <>
        <img src="ArquivosPort/Images/FitaTrybe.jpg" alt="" className="fita-trybe" />
        <article className="about">
          <img
            src="ArquivosPort/Images/Foto atualizada Trybe.jpeg"
            alt="Foto João victor"
            className="img-jv border border-5"
          />
          <section>
            <h2 className="text-center text-white fw-bolder m-3">Sobre Mim ...</h2>
            <p className="text-white lead mx-5 fs-4">
              Meu Nome é João Victor e estou na minha jornada na Trybe .... Falando
              sobre mim um pouco, eu descobri a programação cedo, foi logo na minha
              primeira experiência no mercado de trabalho, ou seja, eu entrei em
              uma empresa no setor de Rh, não sei se está perguntando como descobri
              a programação no Rh, maas a resposta para essa pergunta é o… Excel,
              sim, eu comecei nesse mundo programando em Excel e você não tem
              ideia do orgulho que tenho dessa frase.

            </p>
          </section>
        </article>
        <img src="ArquivosPort/Images/FitaTrybe.jpg" alt="" className="fita-trybe" />
      </>
    );
  }
}

export default AboutSection;
