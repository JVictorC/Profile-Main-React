import React from 'react';
import LottieAnimation from '../Animation/Lottie';
import DogAnimation from '../Animation/DogAnimation.json';
import { } from 'react-icons/';
import Wave from '../wave';

export default function Projects() {
  return (
    <div className="about-container-bg">
      <div className="about-container" data-anime="anime">
        <h1 className="about-container-title">Sobre min</h1>
        <h6 className="about-container-subtitle">
          Minha Introdução
        </h6>
        <div className="about-container-main">
          <img
            src="./ArquivosPort/Images/Foto atualizada Trybe.jpeg"
            alt=""
            className="about-container-main-image"
          />
          <div className="about-container-main-about">
            <p className="about-container-main-presentation">
              Sabe aquela sensação que se tem quando seu trabalho faz a diferença na vida
              de outra pessoa?
              Então… foi por essa sensação que comecei a estudar programação, eu estudo
              programação, pois saber que meu trabalho pode ajudar alguém é incrível.
              Nesse momento da minha vida estou indo atrás de uma oportunidade para fazer
              essa diferença.
            </p>
            <LottieAnimation lotti={ DogAnimation } height={ 300 } width={ 300 } />
          </div>
        </div>
      </div>
      <Wave component="header" />
    </div>
  );
}
