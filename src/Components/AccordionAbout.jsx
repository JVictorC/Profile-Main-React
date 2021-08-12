/* Codigo inspirado e corrigo pelo Link:  https://www.youtube.com/watch?v=E9bE8P1IrdY&ab_channel=Celke */

import React, { Component } from 'react';

class AccourdionAbout extends Component {
  render() {
    return (
      <section className="more-mySelf">
        <div className="container" id="myGroup">
          <h1 className="header-sections">Mais Sobre Mim ...</h1>
          <div className="buttons-Links">
            <button
              className="btn style-btn"
              type="button"
              data-toggle="collapse"
              data-target="#vtd-aprender"
              aria-expanded="true"
              aria-controls="collapseExample"
            >
              Vontade de Aprender
            </button>
            <button
              className="btn style-btn"
              type="button"
              data-toggle="collapse"
              data-target="#clb-equipe"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Colaboração Em Equipe:
            </button>
            <button
              className="btn style-btn"
              type="button"
              data-toggle="collapse"
              data-target="#foco"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Foco:
            </button>
          </div>
          <div className="collapse show" id="vtd-aprender" data-parent="#myGroup">
            <div className="card card-body accordion-text-style">
              <h1 className="sub-tiyle-accordion text-center my-5">
                Vontade de Aprender:
              </h1>
              Estou realmente apaixonado com o meu dia a dia na Trybe, não ao ponto de
              torcer para o fim de semana passar rápido, mas torce para chegar às 14h do
              dia. Estou no fundamento ainda e já senti uma diferença enorme e quero
              muito continuar nesse ritmo… Mas por mais que eu esteja aprendendo em um
              ritmo maravilhoso acredito que só entenderei tudo de verdade quando eu
              entrar no mercado de trabalho. Pois, eu acredito que estudar algo seja
              totalmente diferente de exercer aquela função, por mais que eu queira
              entrar o mais rápido possível no mercado de trabalho na área de
              programação estou indo com calma, estou focado nos conteúdos do dia e me
              importando em aprender.
            </div>
          </div>

          <div className="collapse" id="clb-equipe" data-parent="#myGroup">
            <div className="card card-body accordion-text-style">
              <h1 className="sub-tiyle-accordion text-center my-5">
                Colaboração em Equipe:
              </h1>
              Sem dúvida nenhuma esse ponto é o mais importante para mim, pois bem! Sabe
              quando alguém te ensina ou explica alguma matéria e dá aquela de explosão
              na cabeça? Parece que alguém literalmente virou uma chave na sua cabeça.
              Então amo ter essa sensação e eu amo trabalhar em equipe por esse motivo,
              quando estou sozinho não tenho essa experiência, não estou falando que não
              goste de trabalhar sozinho, para falar a verdade adoro, mas eu não
              recusaria um trabalho em grupo.
            </div>
          </div>

          <div className="collapse" id="foco" data-parent="#myGroup">
            <div className="card card-body accordion-text-style">
              <h1 className="sub-tiyle-accordion text-center my-5">Foco:</h1>
              Tem uma frase que define meu foco atualmente que é:  Quero ser um
              programador.Sei que parece simples, mas esses dias eu me peguei pensando
              sobre isso, pois recebi e recusei uma proposta de emprego em uma área
              diferente, sendo mais exato uma vaga no setor Financeiro de uma empresa,
              onde essa vaga tinha uns certos benefícios interessantes, principalmente
              para minha idade. Mas eu não recusei essa proposta simplesmente porque eu
              queria ser programador e sim por alguns outros motivos que seria muito
              mais interessante ser compartilhados em uma conversa, pois é um assunto um
              pouco mais sensível. Mas falando sobre meu foco, neste ponto estou me
              referindo a aprender a programar, eu estou dedicado inteiramente para
              isso, hoje em dia gosto mais de ficar escrevendo códigos do que saindo,
              claro tenho uns passatempos que amo, como, por exemplo: corrida ao ar
              livre, porém foco em aprender coisa voltadas a programação, principalmente
              as que tenho dificuldades (como as bibliotecas de JavaScript, eu realmente
              espero estar lendo isso daqui a uns 2 anos, pensando como isso é fácil
              hoje em dia).
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AccourdionAbout;
